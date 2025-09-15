import React, { useEffect, useRef, useState, useMemo } from "react"
import { OrthographicCamera, useFBO, useTexture } from "@react-three/drei"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"

export default function Scene() {
  const device = useDimension()

  if (!device.width || !device.height) {
    return null
  }

  const frustumSize = device.height
  const aspect = device.width / device.height

  return (
    <div className="relative flex h-screen w-full items-center justify-center ">
      <Canvas>
        <OrthographicCamera
          makeDefault
          args={[
            (frustumSize * aspect) / -2,
            (frustumSize * aspect) / 2,
            frustumSize / 2,
            frustumSize / -2,
            -1000,
            1000,
          ]}
          position={[0, 0, 2]} />
        <Model />
      </Canvas>
    </div>
  );
}

function Model() {
  const { viewport } = useThree()
  
  // Create brush texture programmatically
  const brushTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    
    // Create radial gradient for brush effect
    const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.4, 'rgba(255, 255, 255, 0.8)');
    gradient.addColorStop(0.7, 'rgba(255, 255, 255, 0.3)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 256, 256);
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);

  const meshRefs = useRef([])
  const [meshes, setMeshes] = useState([])
  const mouse = useMouse()
  const device = useDimension()
  const [prevMouse, setPrevMouse] = useState({ x: 0, y: 0 })
  const [currentWave, setCurrentWave] = useState(0)
  const { gl, camera } = useThree()

  const scene = new THREE.Scene()
  const max = 100

  const uniforms = useRef({
    uDisplacement: { value: new THREE.Texture() },
    uTexture: { value: new THREE.Texture() },
    winResolution: {
      value: new THREE.Vector2(0, 0),
    },
  })

  const fboBase = useFBO(device.width, device.height)
  const fboTexture = useFBO(device.width, device.height)

  const { scene: imageScene, camera: imageCamera } = Images(new THREE.Vector2(viewport.width, viewport.height))

  useEffect(() => {
    const generatedMeshes = Array.from({ length: max }).map((_, i) => (
      <mesh
        key={i}
        position={[0, 0, 0]}
        ref={(el) => {
          meshRefs.current[i] = el
        }}
        rotation={[0, 0, Math.random()]}
        visible={false}>
        <planeGeometry args={[60, 60, 1, 1]} />
        <meshBasicMaterial transparent={true} map={brushTexture} />
      </mesh>
    ))
    setMeshes(generatedMeshes)
  }, [brushTexture])

  function setNewWave(x, y, currentWave) {
    const mesh = meshRefs.current[currentWave]
    if (mesh) {
      mesh.position.x = x
      mesh.position.y = y
      mesh.visible = true
      ;(mesh.material).opacity = 1
      mesh.scale.x = 1.75
      mesh.scale.y = 1.75
    }
  }

  function trackMousePos(x, y) {
    if (Math.abs(x - prevMouse.x) > 0.1 || Math.abs(y - prevMouse.y) > 0.1) {
      setCurrentWave((currentWave + 1) % max)
      setNewWave(x, y, currentWave)
    }
    setPrevMouse({ x: x, y: y })
  }

  useFrame(({ gl, scene: finalScene }) => {
    const x = mouse.x - device.width / 1.65
    const y = -mouse.y + device.height / 1.5
    trackMousePos(x, y)
    meshRefs.current.forEach((mesh) => {``
      if (mesh && mesh.visible) {
        mesh.rotation.z += 0.025
        ;(mesh.material).opacity *= 0.95
        mesh.scale.x = 0.98 * mesh.scale.x + 0.155
        mesh.scale.y = 0.98 * mesh.scale.y + 0.155
      }
    })

    if (device.width > 0 && device.height > 0) {
      // Render to base texture with meshes
      gl.setRenderTarget(fboBase)
      gl.clear()
      meshRefs.current.forEach((mesh) => {
        if (mesh && mesh.visible) {
          scene.add(mesh)
        }
      })
      gl.render(scene, camera)
      meshRefs.current.forEach((mesh) => {
        if (mesh && mesh.visible) {
          scene.remove(mesh)
        }
      })
      uniforms.current.uTexture.value = fboTexture.texture

      gl.setRenderTarget(fboTexture)
      gl.render(imageScene, imageCamera)
      uniforms.current.uDisplacement.value = fboBase.texture

      gl.setRenderTarget(null)
      gl.render(finalScene, camera)

      uniforms.current.winResolution.value = new THREE.Vector2(device.width, device.height).multiplyScalar(device.pixelRatio)
    }
  }, 1)

  function Images(viewport) {
    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(
      viewport.width / -2,
      viewport.width / 2,
      viewport.height / 2,
      viewport.height / -2,
      -1000,
      1000
    )
    camera.position.z = 2
    scene.add(camera)
    const geometry = new THREE.PlaneGeometry(1, 1)
    
    // Use your hero image to fill the entire viewport
    const heroTexture = useTexture("/hero_updated.png")
    const heroMaterial = new THREE.MeshBasicMaterial({ map: heroTexture })
    const heroImage = new THREE.Mesh(geometry, heroMaterial)
    
    // Scale to cover the full viewport
    heroImage.scale.x = viewport.width
    heroImage.scale.y = viewport.height
    heroImage.position.x = 0
    heroImage.position.y = 0
    heroImage.position.z = 1
    
    scene.add(heroImage)
    return { scene, camera }
  }

  return (
    <group>
      {meshes}
      <mesh>
        <planeGeometry args={[device.width, device.height, 1, 1]} />
        <shaderMaterial
          vertexShader={vertex}
          fragmentShader={fragment}
          transparent={true}
          uniforms={uniforms.current}
        />
      </mesh>
    </group>
  );
}

function useMouse() {
  const [mouse, setMouse] = React.useState({ x: 0, y: 0, pixelRatio: 0 })

  const mouseMove = (e) => {
    const { clientX, clientY } = e
    setMouse({
      x: clientX,
      y: clientY,
      pixelRatio: Math.min(window.devicePixelRatio, 2),
    })
  }

  React.useEffect(() => {
    window.addEventListener("mousemove", mouseMove)
    return () => {
      window.removeEventListener("mousemove", mouseMove)
    };
  }, [])

  return mouse
}

function useDimension() {
  const [dimension, setDimension] = React.useState({
    width: 0,
    height: 0,
    pixelRatio: 1,
  })

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const resize = () => {
        setDimension({
          width: window.innerWidth,
          height: window.innerHeight,
          pixelRatio: window.devicePixelRatio,
        })
      }

      resize()

      window.addEventListener("resize", resize)

      return () => window.removeEventListener("resize", resize);
    }
  }, [])

  return dimension
}

const fragment = `
uniform sampler2D uTexture;
uniform sampler2D uDisplacement;
uniform vec4 winResolution;
varying vec2 vUv;
float PI = 3.141592653589793238;

void main() {
  vec2 vUvScreen = gl_FragCoord.xy / winResolution.xy;

  vec4 displacement = texture2D(uDisplacement, vUvScreen);
  float theta = displacement.r*2.0*PI;

  vec2 dir = vec2(sin(theta),cos(theta));
  vec2 uv = vUvScreen + dir*displacement.r*0.075;
  vec4 color = texture2D(uTexture,uv);

  gl_FragColor = color;
}
`

const vertex = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`
import LowaCoffee from './components/LOWACoffee'
import LullPage from './components/Lull';
import HomePage from './HomePage'
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lowacoffee" element={<LowaCoffee />} />
        <Route path="/LullPage" element={<LullPage />} />
      </Routes>
    </div>
  )
}

export default App
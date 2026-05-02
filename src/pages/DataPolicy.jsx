import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import SocialIcons from "../components/ui/SocialIcons";

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="font-wa-flat text-2xl md:text-3xl text-[#46171A] mb-3">{title}</h2>
    <div className="w-10 h-[2px] bg-[#F15A24] mb-5" />
    <div className="inter text-[#46171A]/80 text-sm md:text-base leading-relaxed space-y-3">
      {children}
    </div>
  </div>
);

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#ECE7DA] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#46171A] pt-28 pb-16 px-6 text-center">
        <p className="inter text-[#EED9CC] tracking-[0.3em] text-sm uppercase mb-3">
          Legal
        </p>
        <h1 className="font-wa-flat text-5xl md:text-6xl text-white">
          Privacy Policy
        </h1>
        <p className="inter text-[#EDE9DC]/70 text-sm mt-4">
          Last updated: April 2025
        </p>
      </section>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">

        <Section title="1. Introduction">
          <p>
            On Nar Restaurant ("On Nar", "we", "us", or "our"), operated by
            Amir al Ali Group, is committed to protecting your personal
            information. This Privacy Policy explains how we collect, use,
            store, and share your data when you visit our website or use our
            services.
          </p>
          <p>
            By using our Site or services, you consent to the practices
            described in this policy.
          </p>
        </Section>

        <Section title="2. Information We Collect">
          <p>We may collect the following types of personal information:</p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>
              <span className="font-semibold text-[#46171A]">
                Contact information:
              </span>{" "}
              name, email address, phone number — collected when you make a
              reservation, subscribe to our newsletter, or contact us.
            </li>
            <li>
              <span className="font-semibold text-[#46171A]">
                Reservation details:
              </span>{" "}
              date, time, party size, and any special requests or dietary
              preferences you provide.
            </li>
            <li>
              <span className="font-semibold text-[#46171A]">
                Usage data:
              </span>{" "}
              IP address, browser type, pages visited, and time spent on our
              Site — collected automatically via cookies and similar
              technologies.
            </li>
            <li>
              <span className="font-semibold text-[#46171A]">
                Communications:
              </span>{" "}
              messages, feedback, or enquiries you send us directly.
            </li>
          </ul>
        </Section>

        <Section title="3. How We Use Your Information">
          <p>We use the information we collect to:</p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>Confirm and manage reservations.</li>
            <li>
              Send you booking confirmations, reminders, and updates related
              to your visit.
            </li>
            <li>
              Respond to your enquiries and provide customer support.
            </li>
            <li>
              Send you our newsletter or promotional content — only if you have
              opted in.
            </li>
            <li>
              Improve our website experience, content, and services through
              analytics.
            </li>
            <li>Comply with legal obligations.</li>
          </ul>
        </Section>

        <Section title="4. Cookies & Tracking Technologies">
          <p>
            Our Site uses cookies — small text files stored on your device —
            to enhance your browsing experience. Cookies help us remember your
            preferences and understand how visitors use our Site.
          </p>
          <p>Types of cookies we use:</p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>
              <span className="font-semibold text-[#46171A]">Essential cookies:</span>{" "}
              required for the Site to function properly.
            </li>
            <li>
              <span className="font-semibold text-[#46171A]">Analytics cookies:</span>{" "}
              help us understand visitor behaviour (e.g., Google Analytics).
            </li>
            <li>
              <span className="font-semibold text-[#46171A]">Marketing cookies:</span>{" "}
              used to deliver relevant advertisements and track campaign
              effectiveness.
            </li>
          </ul>
          <p>
            You can control or disable cookies through your browser settings,
            though some features of the Site may not function correctly as a
            result.
          </p>
        </Section>

        <Section title="5. Sharing Your Information">
          <p>
            We do not sell or rent your personal information to third parties.
            We may share your data with:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>
              Service providers who assist us in operating our Site or
              delivering our services (e.g., email platforms, analytics tools)
              — bound by confidentiality obligations.
            </li>
            <li>
              Regulatory authorities or law enforcement when required by law.
            </li>
            <li>
              Business partners within Amir al Ali Group for coordinated
              hospitality services, where applicable.
            </li>
          </ul>
        </Section>

        <Section title="6. Data Retention">
          <p>
            We retain your personal data only for as long as necessary to
            fulfil the purposes for which it was collected, or as required by
            law. Reservation data is typically retained for up to 2 years for
            operational and compliance purposes.
          </p>
        </Section>

        <Section title="7. Data Security">
          <p>
            We implement appropriate technical and organisational measures to
            protect your personal data against unauthorised access, loss, or
            disclosure. However, no method of transmission over the internet is
            100% secure, and we cannot guarantee absolute security.
          </p>
        </Section>

        <Section title="8. Your Rights">
          <p>
            Depending on your location, you may have the right to:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>Access the personal data we hold about you.</li>
            <li>Request correction of inaccurate data.</li>
            <li>Request deletion of your personal data.</li>
            <li>Opt out of marketing communications at any time.</li>
            <li>
              Lodge a complaint with a relevant data protection authority.
            </li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at{" "}
            <a
              href="mailto:office@amiralaligroup.com"
              className="text-[#46171A] font-semibold underline underline-offset-2"
            >
              office@amiralaligroup.com
            </a>
            .
          </p>
        </Section>

        <Section title="9. Third-Party Links">
          <p>
            Our Site may link to external websites such as social media
            platforms or delivery partners. We are not responsible for the
            privacy practices of those third-party sites and encourage you to
            review their privacy policies independently.
          </p>
        </Section>

        <Section title="10. Children's Privacy">
          <p>
            Our Site is not directed at children under the age of 13. We do
            not knowingly collect personal data from children. If you believe a
            child has provided us with personal information, please contact us
            and we will delete it promptly.
          </p>
        </Section>

        <Section title="11. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with a revised "Last updated" date.
            Your continued use of our Site after changes are posted constitutes
            acceptance of the updated policy.
          </p>
        </Section>

        <Section title="12. Contact Us">
          <p>
            If you have any questions or concerns about this Privacy Policy,
            please reach out to us:
          </p>
          <ul className="list-none space-y-1 pl-2">
            <li>
              Email:{" "}
              <a
                href="mailto:office@amiralaligroup.com"
                className="text-[#46171A] font-semibold underline underline-offset-2"
              >
                office@amiralaligroup.com
              </a>
            </li>
            <li>Phone: +62 811 30023333  / +971 561 313137</li>
            <li>Address: Uluwatu, Bali – Indonesia</li>
          </ul>
        </Section>

        <div className="border-t border-[#46171A]/20 pt-8 flex flex-wrap gap-4 text-sm inter text-[#46171A]/60">
          <Link to="/terms" className="hover:text-[#46171A] underline underline-offset-2 transition-colors">
            Terms &amp; Conditions
          </Link>
          <Link to="/" className="hover:text-[#46171A] underline underline-offset-2 transition-colors">
            Back to Home
          </Link>
        </div>
      </main>

      <Footer />
      <SocialIcons />
    </div>
  );
};

export default PrivacyPolicy;

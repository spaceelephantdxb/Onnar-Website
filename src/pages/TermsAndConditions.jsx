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

const TermsAndConditions = () => {
  return (
    <div className="bg-[#ECE7DA] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#46171A] pt-28 pb-16 px-6 text-center">
        <p className="inter text-[#EED9CC] tracking-[0.3em] text-sm uppercase mb-3">
          Legal
        </p>
        <h1 className="font-wa-flat text-5xl md:text-6xl text-white">
          Terms &amp; Conditions
        </h1>
        <p className="inter text-[#EDE9DC]/70 text-sm mt-4">
          Last updated: April 2025
        </p>
      </section>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">

        <Section title="1. Acceptance of Terms">
          <p>
            By accessing or using the On Nar website (the "Site") or making a
            reservation, placing an order, or otherwise engaging with On Nar
            Restaurant ("On Nar", "we", "us", or "our"), you agree to be bound
            by these Terms and Conditions. If you do not agree, please do not
            use our Site or services.
          </p>
        </Section>

        <Section title="2. About On Nar">
          <p>
            On Nar is an Arabic restaurant located in Uluwatu, Bali, Indonesia,
            operated under Amir al Ali Group. We provide dine-in, catering, and
            event hosting services. Our contact details are:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Email: office@amiralaligroup.com</li>
            <li>Phone: +62 811 30023333  / +971 561 313137</li>
            <li>Address: Uluwatu, Bali – Indonesia</li>
          </ul>
        </Section>

        <Section title="3. Reservations & Bookings">
          <p>
            Reservations made through our Site or by phone are subject to
            availability. We reserve the right to confirm, modify, or cancel
            reservations at our discretion.
          </p>
          <p>
            For large group bookings (8 or more guests), a deposit may be
            required to secure your table. Deposits are non-refundable if
            cancelled within 24 hours of the reservation time.
          </p>
          <p>
            Please arrive within 15 minutes of your reserved time. Late arrivals
            may result in the table being released without notice.
          </p>
        </Section>

        <Section title="4. Cancellation Policy">
          <p>
            We kindly ask that cancellations be made at least 2 hours before
            the reservation time. Repeated no-shows may result in restrictions
            on future bookings.
          </p>
        </Section>

        <Section title="5. Menu & Pricing">
          <p>
            Menu items, prices, and availability are subject to change without
            prior notice. Prices displayed on our Site are indicative and the
            final price will be confirmed at the time of service.
          </p>
          <p>
            On Nar strives to accommodate dietary requirements. Please inform
            our staff of any allergies or dietary restrictions before ordering.
            We cannot guarantee a fully allergen-free environment.
          </p>
        </Section>

        <Section title="6. Intellectual Property">
          <p>
            All content on this Site — including text, images, logos, and
            design — is the property of On Nar / Amir al Ali Group and is
            protected by applicable intellectual property laws. You may not
            reproduce, distribute, or create derivative works without our prior
            written consent.
          </p>
        </Section>

        <Section title="7. User Conduct">
          <p>When using our Site, you agree not to:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Submit false or misleading information.</li>
            <li>
              Use the Site for any unlawful purpose or in violation of these
              Terms.
            </li>
            <li>
              Attempt to gain unauthorised access to any part of the Site or
              its infrastructure.
            </li>
            <li>
              Post or transmit any harmful, offensive, or defamatory content.
            </li>
          </ul>
        </Section>

        <Section title="8. Third-Party Links">
          <p>
            Our Site may contain links to third-party websites (e.g., social
            media platforms, delivery services). We are not responsible for the
            content or practices of those sites and encourage you to review
            their own terms and privacy policies.
          </p>
        </Section>

        <Section title="9. Limitation of Liability">
          <p>
            To the fullest extent permitted by law, On Nar and Amir al Ali Group
            shall not be liable for any indirect, incidental, or consequential
            damages arising from your use of our Site or services.
          </p>
          <p>
            We make no warranties, express or implied, regarding the accuracy
            or completeness of information on our Site.
          </p>
        </Section>

        <Section title="10. Governing Law">
          <p>
            These Terms are governed by and construed in accordance with the
            laws of the Republic of Indonesia. Any disputes shall be subject to
            the exclusive jurisdiction of the courts located in Bali, Indonesia.
          </p>
        </Section>

        <Section title="11. Changes to Terms">
          <p>
            We may update these Terms at any time. Changes will be posted on
            this page with a revised "Last updated" date. Continued use of our
            Site after changes are posted constitutes your acceptance of the
            revised Terms.
          </p>
        </Section>

        <Section title="12. Contact Us">
          <p>
            If you have any questions about these Terms, please contact us at{" "}
            <a
              href="mailto:office@amiralaligroup.com"
              className="text-[#46171A] font-semibold underline underline-offset-2"
            >
              office@amiralaligroup.com
            </a>
            .
          </p>
        </Section>

        <div className="border-t border-[#46171A]/20 pt-8 flex flex-wrap gap-4 text-sm inter text-[#46171A]/60">
          <Link to="/privacy" className="hover:text-[#46171A] underline underline-offset-2 transition-colors">
            Privacy Policy
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

export default TermsAndConditions;

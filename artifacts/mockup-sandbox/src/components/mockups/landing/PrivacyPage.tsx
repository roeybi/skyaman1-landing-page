const GOLD = "#B8914A";
const DARK_BROWN = "#2A1F17";
const CHARCOAL = "#1C1B1A";
const BEIGE = "#F2EDE3";
const FOOTER_BG = "#CEC9BF";

export function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: BEIGE, fontFamily: "'Georgia', serif" }}>
      {/* Header */}
      <header className="py-10 px-6 text-center" style={{ background: CHARCOAL }}>
        <p className="text-xs tracking-[0.4em] mb-2" style={{ color: GOLD }}>SKY AMAN 1 RESIDENCES</p>
        <h1 className="text-3xl font-light tracking-widest" style={{ color: BEIGE }}>Privacy Policy</h1>
        <div className="w-16 h-0.5 mx-auto mt-3" style={{ background: GOLD }} />
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto py-14 px-6 space-y-8 text-sm leading-relaxed" style={{ color: "#3A2E24" }}>

        <div className="text-xs tracking-wider text-right" style={{ color: "#7A6A5A" }}>Last Updated: May 2026</div>

        <section>
          <h2 className="text-base font-semibold mb-3 tracking-wider uppercase" style={{ color: DARK_BROWN }}>1. Introduction</h2>
          <p>
            Sky Alliance Enterprise ("we", "our", or "us") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit this website or submit an enquiry form.
          </p>
          <p className="mt-3">
            This website is independently operated by a real estate agent from the appointed agency Sky Alliance Enterprise, and is not the official website of the developer. All information provided is for reference only.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3 tracking-wider uppercase" style={{ color: DARK_BROWN }}>2. Information We Collect</h2>
          <p>We may collect the following types of personal information when you interact with this website:</p>
          <ul className="mt-3 space-y-1.5 list-disc list-inside" style={{ color: "#4A3B2C" }}>
            <li>Full name (first and last name)</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Message or enquiry content</li>
            <li>Browser type, IP address, and usage data (collected automatically)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3 tracking-wider uppercase" style={{ color: DARK_BROWN }}>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="mt-3 space-y-1.5 list-disc list-inside" style={{ color: "#4A3B2C" }}>
            <li>Respond to your enquiries and provide requested information</li>
            <li>Contact you regarding your interest in Sky Aman 1 Residences</li>
            <li>Send you updates, promotional materials, and property-related information (with your consent)</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3 tracking-wider uppercase" style={{ color: DARK_BROWN }}>4. Legal Basis for Processing</h2>
          <p>
            We process your personal data based on your explicit consent provided when you submit the enquiry form. You have the right to withdraw your consent at any time by contacting us.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3 tracking-wider uppercase" style={{ color: DARK_BROWN }}>5. Disclosure of Information</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
          <ul className="mt-3 space-y-1.5 list-disc list-inside" style={{ color: "#4A3B2C" }}>
            <li>The property developer (for the purpose of your enquiry)</li>
            <li>Service providers who assist us in operating our website and conducting our business</li>
            <li>Legal or regulatory authorities when required by law</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3 tracking-wider uppercase" style={{ color: DARK_BROWN }}>6. Data Retention</h2>
          <p>
            We retain your personal data only for as long as necessary to fulfil the purposes outlined in this Privacy Policy, or as required by law. Enquiry data is typically retained for 24 months from the date of collection.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3 tracking-wider uppercase" style={{ color: DARK_BROWN }}>7. Your Rights</h2>
          <p>Under applicable data protection laws, you have the right to:</p>
          <ul className="mt-3 space-y-1.5 list-disc list-inside" style={{ color: "#4A3B2C" }}>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate or incomplete data</li>
            <li>Request deletion of your personal data</li>
            <li>Withdraw your consent at any time</li>
            <li>Lodge a complaint with a supervisory authority</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3 tracking-wider uppercase" style={{ color: DARK_BROWN }}>8. Cookies</h2>
          <p>
            This website may use cookies to enhance your browsing experience. You can control cookie settings through your browser settings. Disabling cookies may affect some features of this website.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3 tracking-wider uppercase" style={{ color: DARK_BROWN }}>9. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:</p>
          <div className="mt-4 p-4 text-sm space-y-1" style={{ background: "rgba(42,31,23,0.06)", borderLeft: `3px solid ${GOLD}` }}>
            <p className="font-semibold" style={{ color: DARK_BROWN }}>Sky Alliance Enterprise</p>
            <p>Lot 17899, Jalan Ayer Jerneh, Taman Ayer Panas, 53200 Kuala Lumpur</p>
            <p>Phone: 017-2130 612 (Franky)</p>
            <p>Email: skyalliance.acc@gmail.com</p>
          </div>
        </section>

        <div className="pt-4">
          <a
            href="/__mockup/preview/landing/LandingPage"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase"
            style={{ color: DARK_BROWN, textDecoration: "underline" }}
          >
            ← Back to Main Page
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 text-center" style={{ background: FOOTER_BG }}>
        <p className="text-xs" style={{ color: "#4A3728" }}>
          © 2026 Sky Aman 1 Residences. All Rights Reserved.
        </p>
        <p className="text-xs mt-2 italic" style={{ color: "#6A5848" }}>
          Sky Alliance Enterprise (202603044120) (IP0620548-A) &nbsp;|&nbsp; 017-2130 612 (Franky) &nbsp;|&nbsp; skyalliance.acc@gmail.com
        </p>
        <p className="text-xs mt-3 italic max-w-xl mx-auto" style={{ color: "#6A5848" }}>
          <strong className="not-italic">Disclaimer:</strong> This website is independently operated by a real estate agent from appointed agency Sky Alliance Enterprise, and is not the official website of the developer. All information provided is for reference only.
        </p>
      </footer>
    </div>
  );
}

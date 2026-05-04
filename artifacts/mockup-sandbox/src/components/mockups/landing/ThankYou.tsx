const GOLD = "#B8914A";
const DARK_BROWN = "#2A1F17";
const CHARCOAL = "#1C1B1A";
const BEIGE = "#F2EDE3";
const FOOTER_BG = "#CEC9BF";

export function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: CHARCOAL, fontFamily: "'Georgia', serif" }}>
      {/* Header */}
      <header className="py-8 px-6 text-center" style={{ borderBottom: "1px solid #2E2E2E" }}>
        <p className="text-xs tracking-[0.4em]" style={{ color: GOLD }}>SKY AMAN 1 RESIDENCES</p>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center py-20 px-6 text-center">
        {/* Gold Checkmark Circle */}
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8"
          style={{ border: `2px solid ${GOLD}`, background: "rgba(184,145,74,0.08)" }}
        >
          <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
            <path d="M10 26L20 36L38 14" stroke={GOLD} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <p className="text-xs tracking-[0.4em] mb-4" style={{ color: GOLD }}>ENQUIRY RECEIVED</p>
        <h1 className="text-4xl md:text-5xl font-light tracking-widest mb-4" style={{ color: BEIGE }}>
          Thank You
        </h1>
        <div className="w-16 h-0.5 mx-auto mb-6" style={{ background: GOLD }} />

        <p className="text-base leading-relaxed max-w-md" style={{ color: "#9A8C7E" }}>
          We have successfully received your registration. Our team will be in touch with you shortly to discuss your interest in Sky Aman 1 Residences.
        </p>

        <div
          className="mt-10 px-8 py-6 max-w-md w-full text-sm space-y-2"
          style={{ border: `1px solid #2E2E2E`, background: "rgba(184,145,74,0.04)" }}
        >
          <p className="text-xs tracking-widest mb-4" style={{ color: GOLD }}>WHAT HAPPENS NEXT</p>
          <div className="space-y-3 text-left">
            {[
              "Our consultant will reach out within 24 hours",
              "Receive exclusive project brochure and floor plans",
              "Schedule a private viewing at your convenience",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <span
                  className="w-5 h-5 flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5"
                  style={{ background: GOLD, color: CHARCOAL, borderRadius: "50%" }}
                >
                  {i + 1}
                </span>
                <span style={{ color: "#C8C2B5" }}>{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-10 text-sm space-y-1" style={{ color: "#7A6A5A" }}>
          <p>For immediate assistance, contact us at:</p>
          <p className="font-semibold" style={{ color: "#C8C2B5" }}>017-2130 612</p>
          <p style={{ color: "#9A8C7E" }}>jaysonmjs@skyworld.my</p>
        </div>

        <a
          href="/__mockup/preview/landing/LandingPage"
          className="mt-10 inline-block px-8 py-3 text-xs tracking-widest uppercase transition-opacity hover:opacity-80"
          style={{ border: `1px solid ${GOLD}`, color: GOLD }}
        >
          Return to Main Page
        </a>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 text-center" style={{ background: FOOTER_BG }}>
        <div className="space-y-1">
          <p className="text-xs font-semibold" style={{ color: "#4A3728" }}>Sky Alliance Enterprise (202603044120) (IP0620548-A)</p>
          <p className="text-xs" style={{ color: "#6A5848" }}>
            Lot 17899, Jalan Ayer Jerneh, Taman Ayer Panas, 53200 Kuala Lumpur
          </p>
          <p className="text-xs" style={{ color: "#6A5848" }}>017-2130 612 &nbsp;|&nbsp; jaysonmjs@skyworld.my</p>
          <p className="text-xs mt-3 italic max-w-xl mx-auto" style={{ color: "#7A6A5A" }}>
            <strong className="not-italic">Disclaimer:</strong> This website is independently operated by a real estate agent from appointed agency Sky Alliance Enterprise, and is not the official website of the developer.
          </p>
        </div>
      </footer>
    </div>
  );
}

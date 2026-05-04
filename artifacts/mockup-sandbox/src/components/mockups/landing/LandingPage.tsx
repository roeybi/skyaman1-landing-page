import { useState } from "react";

const GOLD = "#B8914A";
const CHARCOAL = "#1C1B1A";
const DARK_BROWN = "#2A1F17";
const BEIGE = "#F2EDE3";
const GREY_BG = "#E8E4DC";
const FOOTER_BG = "#CEC9BF";
const DARK_GREY = "#2D2D2D";
const PILL_INACTIVE = "#3A3A3A";
const PILL_ACTIVE = "#4A4A4A";

const locationTabs = [
  "Shopping Mall",
  "Health Centers",
  "Surrounding Amenities",
  "Education",
];

const locationContent: Record<string, string[]> = {
  "Shopping Mall": [
    "PAVILION MALL BUKIT JALIL",
    "MID VALLEY MEGAMALL",
    "THE GARDENS MALL",
    "BERJAYA TIMES SQUARE",
  ],
  "Health Centers": [
    "COLUMBIA ASIA HOSPITAL CHERAS",
    "PANTAI HOSPITAL CHERAS",
    "KPJ PUSAT PAKAR CHERAS",
    "HOSPITAL UNIVERSITI KEBANGSAAN MALAYSIA",
  ],
  "Surrounding Amenities": [
    "KETUMBAR HILLS",
    "BUBBLE SPORTS COMPLEX CHERAS",
    "TAMAN TASIK PERMAISURI",
    "ALAM DAMAI RECREATION PARK",
    "STADIUM KUALA LUMPUR",
    "TAMAN PUDU ULU",
  ],
  "Education": [
    "INTERNATIONAL ISLAMIC UNIVERSITY MALAYSIA",
    "KOLEJ UNIVERSITI STRATEGI",
    "SMK CHERAS",
    "SJK(C) CHERAS",
  ],
};

const floorPlanTabs = ["Type A", "Type B", "Type C1", "Type C2", "Type D1", "Type D2"];

const floorPlanData: Record<string, { builtUp: string; bedrooms: number; bathrooms: number }> = {
  "Type A":  { builtUp: "1,097 sqft", bedrooms: 3, bathrooms: 2 },
  "Type B":  { builtUp: "1,184 sqft", bedrooms: 3, bathrooms: 2 },
  "Type C1": { builtUp: "1,302 sqft", bedrooms: 4, bathrooms: 2 },
  "Type C2": { builtUp: "1,345 sqft", bedrooms: 4, bathrooms: 3 },
  "Type D1": { builtUp: "1,476 sqft", bedrooms: 4, bathrooms: 3 },
  "Type D2": { builtUp: "1,548 sqft", bedrooms: 4, bathrooms: 3 },
};

const usps = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 mx-auto mb-4">
        <rect x="5" y="5" width="30" height="30" rx="3" stroke={GOLD} strokeWidth="2" fill="none" />
        <path d="M12 20h16M20 12v16" stroke={GOLD} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    text: "Low Density with Residential Title",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 mx-auto mb-4">
        <path d="M5 30 L5 20 L20 8 L35 20 L35 30" stroke={GOLD} strokeWidth="2" fill="none" strokeLinejoin="round" />
        <rect x="14" y="22" width="12" height="8" stroke={GOLD} strokeWidth="2" fill="none" />
      </svg>
    ),
    text: "Wide Frontage with North-South Orientation from 1,097 – 1,548 sq.ft.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 mx-auto mb-4">
        <circle cx="20" cy="20" r="14" stroke={GOLD} strokeWidth="2" fill="none" />
        <path d="M20 8 L20 20 L28 20" stroke={GOLD} strokeWidth="2" strokeLinecap="round" />
        <path d="M8 32 L32 32" stroke={GOLD} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    text: "Adjacent to the MRT Station",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 mx-auto mb-4">
        <rect x="5" y="12" width="30" height="20" rx="2" stroke={GOLD} strokeWidth="2" fill="none" />
        <path d="M12 12 L12 8 L28 8 L28 12" stroke={GOLD} strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="22" r="4" stroke={GOLD} strokeWidth="2" fill="none" />
      </svg>
    ),
    text: "Direct Car Park Access for Added Convenience",
  },
];

const facilityGrounds = [
  { label: "Ground Floor", items: ["Entrance Statement", "Drop-Off Area", "Terrace Garden", "Creek Deck", "Fitness Point", "Playground", "Urban Farm"] },
  { label: "Level 5, 6 & 6A", items: ["Indoor Sports Centre", "Sauna Retreat", "Cyber Den", "Co-Working Suite"] },
  { label: "Level 7 & 8", items: ["Swimming Pool", "Jacuzzi", "Wading Pool", "Multipurpose Hall", "Bonsai Garden", "Garden Lanai", "Playground", "Reading Rooms"] },
  { label: "Level 43", items: ["Gymnasium", "Qi Chamber", "Reflexology Path", "Horizon Deck", "BBQ Area"] },
];

function GoldDivider() {
  return <div className="w-16 h-0.5 mx-auto mt-3" style={{ background: GOLD }} />;
}

export function LandingPage() {
  const [locationTab, setLocationTab] = useState("Surrounding Amenities");
  const [floorTab, setFloorTab] = useState("Type A");
  const [submitted, setSubmitted] = useState(false);

  let itemNumber = 1;

  return (
    <div className="min-h-screen font-sans" style={{ fontFamily: "'Georgia', serif", background: CHARCOAL }}>

      {/* ── Hero Banner ─────────────────────────────────────── */}
      <header
        className="w-full flex flex-col items-center justify-center py-16 px-4 text-center relative"
        style={{ background: `linear-gradient(135deg, ${DARK_BROWN} 0%, ${CHARCOAL} 60%, #1a1510 100%)`, minHeight: 220 }}
      >
        <div className="text-xs tracking-[0.4em] mb-3" style={{ color: GOLD }}>EXCLUSIVE RESIDENTIAL DEVELOPMENT</div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide" style={{ color: BEIGE, letterSpacing: "0.08em" }}>
          SKY AMAN 1
        </h1>
        <div className="text-2xl md:text-3xl mt-1 font-light tracking-widest" style={{ color: GOLD }}>RESIDENCES</div>
        <div className="mt-4 w-24 h-px" style={{ background: GOLD }} />
        <p className="mt-4 text-sm tracking-widest" style={{ color: "#9A8C7E" }}>CHERAS · KUALA LUMPUR</p>
      </header>

      {/* ── Section 1: USPs ─────────────────────────────────── */}
      <section className="w-full py-16 px-4" style={{ background: CHARCOAL }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {usps.map((usp, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-8"
              style={{
                border: `1.5px solid ${GOLD}`,
                background: "rgba(184,145,74,0.04)",
              }}
            >
              {usp.icon}
              <p className="text-sm leading-relaxed mt-2" style={{ color: "#D6CFC5", letterSpacing: "0.02em" }}>
                {usp.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 2: Location ─────────────────────────────── */}
      <section className="w-full py-16" style={{ background: GREY_BG }}>
        <h2 className="text-4xl text-center font-light mb-2 tracking-widest" style={{ color: "#3B3329", fontFamily: "'Georgia', serif" }}>
          Location
        </h2>
        <GoldDivider />

        <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Map Placeholder */}
          <div
            className="relative flex items-center justify-center"
            style={{ background: "#C8C2B5", minHeight: 420 }}
          >
            <div className="text-center" style={{ color: "#7A7060" }}>
              <svg viewBox="0 0 64 64" className="w-16 h-16 mx-auto mb-3 opacity-40">
                <path d="M32 4 C18 4 8 14 8 28 C8 44 32 60 32 60 C32 60 56 44 56 28 C56 14 46 4 32 4Z" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="32" cy="28" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
              <p className="text-sm tracking-widest opacity-60">AREA MAP</p>
            </div>
          </div>

          {/* Tabbed Panel */}
          <div className="p-8 flex flex-col" style={{ background: CHARCOAL, minHeight: 420 }}>
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-6 border-b pb-4" style={{ borderColor: "#3A3330" }}>
              {locationTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setLocationTab(tab)}
                  className="text-xs px-3 py-1.5 tracking-wider transition-all"
                  style={{
                    background: locationTab === tab ? GOLD : "transparent",
                    color: locationTab === tab ? CHARCOAL : "#9A8C7E",
                    border: `1px solid ${locationTab === tab ? GOLD : "#4A4540"}`,
                    fontWeight: locationTab === tab ? 700 : 400,
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
            {/* Content */}
            <ul className="space-y-3 flex-1">
              {(locationContent[locationTab] || []).map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 w-4 h-4 flex-shrink-0 flex items-center justify-center rounded-full text-xs font-bold"
                    style={{ background: GOLD, color: CHARCOAL }}>
                    {i + 1}
                  </span>
                  <span className="text-sm tracking-wider" style={{ color: "#D6CFC5" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Section 3: Floor Plan ───────────────────────────── */}
      <section className="w-full py-16 px-4" style={{ background: CHARCOAL }}>
        <h2 className="text-4xl text-center font-light mb-2 tracking-widest" style={{ color: BEIGE, fontFamily: "'Georgia', serif" }}>
          Floor Plan
        </h2>
        <GoldDivider />

        {/* Pill Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mt-10 mb-8">
          {floorPlanTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setFloorTab(tab)}
              className="px-6 py-2 rounded-full text-sm tracking-widest font-medium transition-all"
              style={{
                background: floorTab === tab ? GOLD : PILL_INACTIVE,
                color: floorTab === tab ? CHARCOAL : "#9A8C7E",
                border: `1.5px solid ${floorTab === tab ? GOLD : "#4A4540"}`,
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-light text-center mb-3 tracking-widest" style={{ color: BEIGE }}>{floorTab}</h3>
          <p className="text-center text-sm tracking-widest mb-8" style={{ color: GOLD }}>
            BUILT-UP: {floorPlanData[floorTab].builtUp}
            &nbsp;|&nbsp; BEDROOMS: {floorPlanData[floorTab].bedrooms}
            &nbsp;|&nbsp; BATHROOMS: {floorPlanData[floorTab].bathrooms}
          </p>
          {/* Floorplan Placeholder */}
          <div
            className="w-full flex items-center justify-center"
            style={{ background: DARK_GREY, minHeight: 480, border: `1px solid #3A3330` }}
          >
            <div className="text-center" style={{ color: "#5A5550" }}>
              <svg viewBox="0 0 80 80" className="w-20 h-20 mx-auto mb-3 opacity-30">
                <rect x="8" y="8" width="64" height="64" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M8 32 L72 32" stroke="currentColor" strokeWidth="1.5" />
                <path d="M8 56 L72 56" stroke="currentColor" strokeWidth="1.5" />
                <path d="M36 8 L36 72" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <p className="text-sm tracking-widest opacity-50">FLOOR PLAN — {floorTab}</p>
              <p className="text-xs mt-1 opacity-30">floorplan-placeholder.jpg</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Facilities ───────────────────────────── */}
      <section className="w-full py-16 px-4" style={{ background: DARK_GREY }}>
        <h2 className="text-4xl text-center font-light mb-2 tracking-widest" style={{ color: BEIGE, fontFamily: "'Georgia', serif" }}>
          Facilities
        </h2>
        <GoldDivider />

        <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Facility Lists */}
          <div className="space-y-6">
            {facilityGrounds.map((group) => {
              const startNum = itemNumber;
              itemNumber += group.items.length;
              return (
                <div key={group.label}>
                  <h4 className="text-xs tracking-[0.3em] font-bold mb-3 uppercase" style={{ color: GOLD }}>
                    {group.label}
                  </h4>
                  <ul className="space-y-1.5">
                    {group.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm" style={{ color: "#C8C2B5" }}>
                        <span className="text-xs font-bold w-5 text-right flex-shrink-0" style={{ color: GOLD }}>
                          {startNum + i}.
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Facilities Plan Placeholder */}
          <div
            className="flex items-center justify-center"
            style={{ background: "#252525", border: `1px solid #3A3330`, minHeight: 480 }}
          >
            <div className="text-center" style={{ color: "#5A5550" }}>
              <svg viewBox="0 0 80 80" className="w-20 h-20 mx-auto mb-3 opacity-30">
                <rect x="8" y="8" width="64" height="64" stroke="currentColor" strokeWidth="2" fill="none" />
                <rect x="16" y="16" width="20" height="20" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <rect x="44" y="16" width="20" height="20" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <rect x="16" y="44" width="20" height="20" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <rect x="44" y="44" width="20" height="20" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
              <p className="text-sm tracking-widest opacity-50">FACILITIES PLAN</p>
              <p className="text-xs mt-1 opacity-30">facilities-placeholder.jpg</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Registration Form ────────────────────── */}
      <section className="w-full py-16 px-4" style={{ background: GREY_BG }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Heading + Pine Tree */}
          <div className="flex flex-col justify-center">
            <p className="text-xs tracking-[0.3em] mb-3 uppercase" style={{ color: "#8A7D6A" }}>EXCLUSIVE OFFER</p>
            <h2 className="text-3xl md:text-4xl font-light leading-tight mb-6" style={{ color: "#2A1F17", fontFamily: "'Georgia', serif" }}>
              Be the first to know:<br />
              <span className="font-bold" style={{ color: DARK_BROWN }}>Register Now</span>
            </h2>
            <div className="w-12 h-0.5 mb-6" style={{ background: GOLD }} />
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#5A5040" }}>
              Register your interest today and receive priority updates, exclusive previews, and special early-bird offers for Sky Aman 1 Residences.
            </p>
            {/* Pine Tree Placeholder */}
            <div className="flex justify-center md:justify-start">
              <svg viewBox="0 0 120 160" className="w-24 h-32 opacity-20">
                <polygon points="60,10 95,70 25,70" fill="#4A3728" />
                <polygon points="60,40 100,110 20,110" fill="#4A3728" />
                <polygon points="60,70 105,140 15,140" fill="#4A3728" />
                <rect x="50" y="140" width="20" height="16" fill="#4A3728" />
              </svg>
            </div>
          </div>

          {/* Right: Form */}
          <div
            className="p-8"
            style={{ background: "white", boxShadow: "0 4px 32px rgba(42,31,23,0.08)" }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ background: GOLD }}>
                  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: DARK_BROWN }}>Thank You!</h3>
                <p className="text-sm" style={{ color: "#7A6A5A" }}>We have received your enquiry and will contact you shortly.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs tracking-widest mb-1 uppercase" style={{ color: "#5A5040" }}>First Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 py-2.5 text-sm border outline-none focus:ring-1"
                      style={{ border: "1px solid #D4CFC4", borderRadius: 0, color: "#2A1F17" }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest mb-1 uppercase" style={{ color: "#5A5040" }}>Last Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 py-2.5 text-sm border outline-none focus:ring-1"
                      style={{ border: "1px solid #D4CFC4", borderRadius: 0, color: "#2A1F17" }}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs tracking-widest mb-1 uppercase" style={{ color: "#5A5040" }}>Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full px-3 py-2.5 text-sm border outline-none"
                    style={{ border: "1px solid #D4CFC4", borderRadius: 0, color: "#2A1F17" }}
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest mb-1 uppercase" style={{ color: "#5A5040" }}>Phone Number</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-3 py-2.5 text-sm border outline-none"
                    style={{ border: "1px solid #D4CFC4", borderRadius: 0, color: "#2A1F17" }}
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest mb-1 uppercase" style={{ color: "#5A5040" }}>Message</label>
                  <textarea
                    rows={3}
                    className="w-full px-3 py-2.5 text-sm border outline-none resize-none"
                    style={{ border: "1px solid #D4CFC4", borderRadius: 0, color: "#2A1F17" }}
                  />
                </div>
                {/* Compliance Checkbox */}
                <div className="flex items-start gap-3 pt-1">
                  <input
                    type="checkbox"
                    required
                    id="consent"
                    className="mt-1 flex-shrink-0"
                    style={{ accentColor: DARK_BROWN }}
                  />
                  <label htmlFor="consent" className="text-xs leading-relaxed" style={{ color: "#5A5040" }}>
                    I agree to the{" "}
                    <a href="/__mockup/preview/landing/PrivacyPage" target="_blank" rel="noopener noreferrer" style={{ color: DARK_BROWN, textDecoration: "underline" }}>
                      Privacy Policy
                    </a>
                    {" "}and consent to Sky Alliance Enterprise contacting me regarding my inquiry.{" "}
                    <a href="/__mockup/preview/landing/PrivacyPage" target="_blank" rel="noopener noreferrer" style={{ color: DARK_BROWN, textDecoration: "underline" }}>
                      View Privacy Policy
                    </a>
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 text-sm tracking-widest font-semibold uppercase transition-opacity hover:opacity-90"
                  style={{ background: DARK_BROWN, color: BEIGE }}
                >
                  Send
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── Section 6: Footer ───────────────────────────────── */}
      <footer className="w-full py-12 px-4 text-center" style={{ background: FOOTER_BG }}>
        {/* Logo Placeholder */}
        <div
          className="inline-flex items-center justify-center w-40 h-16 mx-auto mb-6"
          style={{ border: `1.5px solid #9A8C7E`, background: "rgba(255,255,255,0.3)" }}
        >
          <span className="text-xs tracking-widest font-bold" style={{ color: "#4A3728" }}>
            SKY ALLIANCE<br />TITAN
          </span>
        </div>

        <div className="space-y-2 text-sm" style={{ color: "#4A3728" }}>
          <p className="font-semibold tracking-wide">Sky Alliance Enterprise (202603044120) (IP0620548-A)</p>
          <p className="text-xs" style={{ color: "#6A5848" }}>
            Lot 17899, Jalan Ayer Jerneh, Taman Ayer Panas, 53200 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur
          </p>
          <p className="text-xs" style={{ color: "#6A5848" }}>
            Contact Number: 017-2130 612 &nbsp;|&nbsp; Email: jaysonmjs@skyworld.my
          </p>
          <p className="text-xs mt-4" style={{ color: "#6A5848" }}>
            © 2026 Sky Aman 1 Residences. All Rights Reserved.{" "}
            <a href="/__mockup/preview/landing/PrivacyPage" target="_blank" rel="noopener noreferrer" style={{ color: "#4A3728", textDecoration: "underline" }}>
              Privacy Policy
            </a>
          </p>
        </div>

        {/* Google Ads Disclaimer Block */}
        <div
          className="mt-8 mx-auto max-w-3xl px-6 py-5"
          style={{ background: "rgba(74,55,40,0.08)", border: "1px solid rgba(74,55,40,0.2)" }}
        >
          <p className="text-sm italic leading-relaxed" style={{ color: "#4A3728" }}>
            <strong className="not-italic font-semibold">Disclaimer:</strong>{" "}
            This website is independently operated by a real estate agent from appointed agency Sky Alliance Enterprise, and is not the official website of the developer. All information provided is for reference only.
          </p>
        </div>
      </footer>
    </div>
  );
}

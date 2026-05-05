import { useState, useEffect } from "react";

const BASE = import.meta.env.BASE_URL;

const GOLD = "#B8914A";
const CHARCOAL = "#1C1B1A";
const DARK_BROWN = "#2A1F17";
const BEIGE = "#F2EDE3";
const GREY_BG = "#E8E4DC";
const FOOTER_BG = "#CEC9BF";
const DARK_GREY = "#2D2D2D";
const PILL_INACTIVE = "#3A3A3A";

const locationTabs = ["Shopping Mall", "Health Centers", "Surrounding Amenities", "Education"];

const locationContent: Record<string, string[]> = {
  "Shopping Mall": ["PAVILION MALL BUKIT JALIL", "MID VALLEY MEGAMALL", "THE GARDENS MALL", "BERJAYA TIMES SQUARE"],
  "Health Centers": ["COLUMBIA ASIA HOSPITAL CHERAS", "PANTAI HOSPITAL CHERAS", "KPJ PUSAT PAKAR CHERAS", "HOSPITAL UNIVERSITI KEBANGSAAN MALAYSIA"],
  "Surrounding Amenities": ["KETUMBAR HILLS", "BUBBLE SPORTS COMPLEX CHERAS", "TAMAN TASIK PERMAISURI", "ALAM DAMAI RECREATION PARK", "STADIUM KUALA LUMPUR", "TAMAN PUDU ULU"],
  "Education": ["INTERNATIONAL ISLAMIC UNIVERSITY MALAYSIA", "KOLEJ UNIVERSITI STRATEGI", "SMK CHERAS", "SJK(C) CHERAS"],
};

const floorPlanTabs = ["Type A", "Type B", "Type C1", "Type C2", "Type D1", "Type D2"];
const floorPlanImages: Record<string, string> = {
  "Type A": `${BASE}Type_A_Sky_Aman_1_Floor_Plan_1777887439461.avif`,
  "Type B": `${BASE}Type_B_Sky_Aman_1_Floor_Plan_1777887439460.avif`,
  "Type C1": `${BASE}Type_C1_Sky_Aman_1_Floor_Plan_1777887439460.avif`,
  "Type C2": `${BASE}Type_C2_Sky_Aman_1_Floor_Plan_1777887439460.avif`,
  "Type D1": `${BASE}Type_D1_Sky_Aman_1_Floor_Plan_1777887439459.avif`,
  "Type D2": `${BASE}Type_D2_Sky_Aman_1_Floor_Plan_1777887439457.avif`,
};

const floorPlanData: Record<string, { builtUp: string; bedrooms: string; bathrooms: number }> = {
  "Type A":  { builtUp: "1,097 sqft", bedrooms: "3", bathrooms: 2 },
  "Type B":  { builtUp: "1,275 sqft", bedrooms: "3 [+1 Utility]", bathrooms: 2 },
  "Type C1": { builtUp: "1,548 sqft", bedrooms: "4", bathrooms: 3 },
  "Type C2": { builtUp: "1,541 sqft", bedrooms: "4", bathrooms: 3 },
  "Type D1": { builtUp: "2,674 sqft", bedrooms: "4 [+2 Utility]", bathrooms: 5 },
  "Type D2": { builtUp: "2,909 sqft", bedrooms: "4 [+2 Utility]", bathrooms: 5 },
};

const usps = [
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12 mx-auto mb-4">
        <path d="M8 50C10 37 18 30 32 30s22 7 24 20" stroke="#F2EDE3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="32" cy="22" r="8" stroke="#F2EDE3" strokeWidth="2.5" fill="none" />
        <circle cx="18" cy="24" r="5" stroke="#F2EDE3" strokeWidth="2.5" fill="none" />
        <circle cx="46" cy="24" r="5" stroke="#F2EDE3" strokeWidth="2.5" fill="none" />
        <path d="M18 29v5M46 29v5" stroke="#F2EDE3" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    text: "Low Density with Residential Title",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12 mx-auto mb-4">
        <path d="M12 42c0-7 5-12 12-12 5 0 9 2 11 6 2-5 6-8 11-8 7 0 12 5 12 12" stroke="#F2EDE3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M31 16v18" stroke="#F2EDE3" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M31 18h6M31 22h6M31 26h6M31 30h6" stroke="#F2EDE3" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M42 16v18" stroke="#F2EDE3" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M42 16c4 3 4 15 0 18" stroke="#F2EDE3" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    text: "Wide Frontage with North-South Orientation from 1,097 – 1,548 sq.ft.",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12 mx-auto mb-4">
        <path d="M10 34h14l6-10h10l-4 10h18" stroke="#F2EDE3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 34l-4 8h10l4-8" stroke="#F2EDE3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M40 26l8 8" stroke="#F2EDE3" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M14 42h38" stroke="#F2EDE3" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    text: "Adjacent to the MRT Station",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12 mx-auto mb-4">
        <circle cx="20" cy="42" r="6" stroke="#F2EDE3" strokeWidth="2.5" fill="none" />
        <circle cx="46" cy="42" r="6" stroke="#F2EDE3" strokeWidth="2.5" fill="none" />
        <path d="M20 36V25M46 36V25" stroke="#F2EDE3" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M20 25h18l8 7v10" stroke="#F2EDE3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M48 25h7v11" stroke="#F2EDE3" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M14 48h10M40 48h12" stroke="#F2EDE3" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="48" cy="18" r="6" stroke="#F2EDE3" strokeWidth="2.5" fill="none" />
        <path d="M48 14v8M44 18h8" stroke="#F2EDE3" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    text: "Direct Car Park Access for Added Convenience",
  },
];

const facilityTabData: Record<string, {
  src: string;
  groups: { label: string; color: string; startNum: number; items: string[] }[];
}> = {
  "Ground Floor": {
    src: `${BASE}facility-g-floor.png`,
    groups: [
      {
        label: "Ground Floor",
        color: "#8B1A1A",
        startNum: 1,
        items: ["Entrance Statement", "Drop-Off Area", "Terrace Garden", "Creek Deck", "Fitness Point", "Playground", "Urban Farm"],
      },
      {
        label: "Level 5, 6 & 6A",
        color: "#1E3A6E",
        startNum: 8,
        items: ["Indoor Sports Centre", "Sauna Retreat", "Cyber Den", "Co-Working Suites"],
      },
    ],
  },
  "Podium Deck": {
    src: `${BASE}facility-podium.png`,
    groups: [
      {
        label: "Level 7 & 8",
        color: "#2D6A4F",
        startNum: 12,
        items: ["Swimming Pool", "Jacuzzi", "Wading Pool", "Multipurpose Hall", "Bonsai Garden", "Garden Lanai", "Playground", "Reading Rooms"],
      },
      {
        label: "Level 43",
        color: "#6B3FA0",
        startNum: 20,
        items: ["Gymnasium", "Qi Chamber", "Reflexology Path", "Horizon Deck", "BBQ Area"],
      },
    ],
  },
};

function GoldDivider() {
  return <div className="w-16 h-0.5 mx-auto mt-3" style={{ background: GOLD }} />;
}

const heroNavLinks = [
  { label: "Location", href: "#location" },
  { label: "Floor Plans", href: "#floor-plans" },
  { label: "Facilities", href: "#facilities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Register", href: "#register" },
];

function LightboxImage({
  src,
  alt,
  className = "",
  imgStyle = {},
  wrapperStyle = {},
  wrapperClassName = "",
}: {
  src: string;
  alt: string;
  className?: string;
  imgStyle?: React.CSSProperties;
  wrapperStyle?: React.CSSProperties;
  wrapperClassName?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={`relative group ${wrapperClassName}`}
        style={{ cursor: "zoom-in", ...wrapperStyle }}
        onClick={() => setOpen(true)}
      >
        <img src={src} alt={alt} className={className} style={imgStyle} />
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ background: "rgba(0,0,0,0.38)" }}
        >
          <span className="text-xs tracking-[0.25em] uppercase font-bold px-4 py-2" style={{ color: GOLD, border: `1px solid ${GOLD}` }}>
            View Full Screen
          </span>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.93)" }}
          onClick={() => setOpen(false)}
        >
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 flex items-center justify-center z-50"
            style={{ background: "#1E1D1C", border: `1px solid ${GOLD}`, color: GOLD, width: 44, height: 44, borderRadius: "50%", cursor: "pointer", fontSize: 20, lineHeight: 1 }}
            aria-label="Close fullscreen"
          >✕</button>
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-full object-contain"
            style={{ padding: "4rem 1.5rem 1.5rem", cursor: "default" }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

const galleryImages = [
  { src: `${BASE}gallery-rooftop-facade.png`,       label: "Rooftop Facade" },
  { src: `${BASE}gallery-swimming-pool.png`,        label: "Swimming Pool With Eternity Portal Reflection" },
  { src: `${BASE}gallery-facilities-overview.png`,  label: "Facilities Overview" },
  { src: `${BASE}gallery-lanai-bonsai.png`,         label: "Lanai Overlooking Bonsai Garden" },
  { src: `${BASE}gallery-aman-park.png`,            label: "Aman Park" },
  { src: `${BASE}gallery-gym.png`,                  label: "Gym" },
  { src: `${BASE}gallery-creek-deck.png`,           label: "Cascading Water With Creek Deck" },
  { src: `${BASE}gallery-entrance.png`,             label: "Entrance Statement" },
];

function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const close = () => setLightboxIdx(null);
  const prev = () => setLightboxIdx((i) => (i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : null));
  const next = () => setLightboxIdx((i) => (i !== null ? (i + 1) % galleryImages.length : null));

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-10">
        {galleryImages.map((img, i) => (
          <div
            key={i}
            className="aspect-square overflow-hidden cursor-pointer relative group"
            style={{ borderRadius: 6, border: "1.5px solid transparent", transition: "border-color 0.2s, transform 0.2s" }}
            onClick={() => setLightboxIdx(i)}
            onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = GOLD; (e.currentTarget as HTMLDivElement).style.transform = "scale(1.025)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "transparent"; (e.currentTarget as HTMLDivElement).style.transform = "scale(1)"; }}
          >
            <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 55%)" }}>
              <span className="w-full px-3 py-2 text-xs tracking-wider leading-tight" style={{ color: "#F2EDE3" }}>{img.label}</span>
            </div>
          </div>
        ))}
      </div>

      {lightboxIdx !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ background: "rgba(0,0,0,0.93)" }} onClick={close}>
          <button onClick={close} className="absolute top-4 right-4 flex items-center justify-center z-50" style={{ background: "rgba(30,29,28,0.9)", border: `1px solid ${GOLD}`, color: GOLD, width: 44, height: 44, borderRadius: "50%", cursor: "pointer", fontSize: 20, lineHeight: 1 }} aria-label="Close">✕</button>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 top-1/2 flex items-center justify-center" style={{ transform: "translateY(-50%)", background: "rgba(30,29,28,0.85)", border: `1px solid ${GOLD}`, color: GOLD, width: 44, height: 44, borderRadius: "50%", cursor: "pointer", fontSize: 20 }} aria-label="Previous">‹</button>
          <img src={galleryImages[lightboxIdx].src} alt={galleryImages[lightboxIdx].label} className="max-w-full max-h-full object-contain" style={{ padding: "4rem 5rem 3rem", cursor: "default" }} onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 top-1/2 flex items-center justify-center" style={{ transform: "translateY(-50%)", background: "rgba(30,29,28,0.85)", border: `1px solid ${GOLD}`, color: GOLD, width: 44, height: 44, borderRadius: "50%", cursor: "pointer", fontSize: 20 }} aria-label="Next">›</button>
          <div className="absolute bottom-4 left-1/2 flex flex-col items-center gap-1" style={{ transform: "translateX(-50%)", whiteSpace: "nowrap" }} onClick={(e) => e.stopPropagation()}>
            <span className="text-sm tracking-wider" style={{ color: BEIGE }}>{galleryImages[lightboxIdx].label}</span>
            <span className="text-xs tracking-widest" style={{ color: "#9A8E80" }}>{lightboxIdx + 1} / {galleryImages.length}</span>
          </div>
        </div>
      )}
    </>
  );
}

const facilityTabs = Object.keys(facilityTabData);

function FacilitiesSection() {
  const [activeTab, setActiveTab] = useState(facilityTabs[0]);
  const [lightbox, setLightbox] = useState(false);
  const current = facilityTabData[activeTab];

  return (
    <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      <div className="space-y-8">
        {current.groups.map((group) => (
          <div key={group.label}>
            <h4 className="text-base font-bold mb-4 tracking-wide" style={{ color: BEIGE, fontFamily: "'Georgia', serif", fontStyle: "italic" }}>{group.label}</h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {group.items.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: group.color, color: "#fff" }}>{group.startNum + i}</span>
                  <span className="text-sm" style={{ color: "#C8C2B5" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col" style={{ background: "#1E1D1C", border: `1px solid #3A3330` }}>
        <div className="flex">
          {facilityTabs.map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className="flex-1 py-3 text-xs tracking-[0.25em] uppercase font-bold transition-colors" style={{ background: activeTab === tab ? "#2D2D2D" : "#1E1D1C", color: activeTab === tab ? GOLD : "#6A635A", borderBottom: activeTab === tab ? `2px solid ${GOLD}` : "2px solid transparent", cursor: "pointer" }}>
              {tab}
            </button>
          ))}
        </div>
        <div className="flex items-center justify-center p-4 relative group" style={{ minHeight: 420, cursor: "zoom-in" }} onClick={() => setLightbox(true)}>
          <img src={current.src} alt={activeTab + " facility plan"} className="w-full h-auto object-contain" style={{ maxHeight: 420 }} />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "rgba(0,0,0,0.35)" }}>
            <span className="text-xs tracking-[0.25em] uppercase font-bold px-4 py-2" style={{ color: GOLD, border: `1px solid ${GOLD}` }}>View Full Screen</span>
          </div>
        </div>
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ background: "rgba(0,0,0,0.93)" }} onClick={() => setLightbox(false)}>
          <button onClick={() => setLightbox(false)} className="absolute top-4 right-4 flex items-center justify-center z-50" style={{ background: "#1E1D1C", border: `1px solid ${GOLD}`, color: GOLD, width: 44, height: 44, borderRadius: "50%", cursor: "pointer", fontSize: 20, lineHeight: 1 }} aria-label="Close fullscreen">✕</button>
          <div className="absolute top-4 left-1/2 flex gap-2" style={{ transform: "translateX(-50%)" }} onClick={(e) => e.stopPropagation()}>
            {facilityTabs.map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)} className="px-4 py-1.5 text-xs tracking-[0.2em] uppercase font-bold transition-colors" style={{ background: activeTab === tab ? GOLD : "rgba(30,29,28,0.85)", color: activeTab === tab ? "#1E1D1C" : "#9A8E80", border: `1px solid ${activeTab === tab ? GOLD : "#3A3330"}`, cursor: "pointer" }}>
                {tab}
              </button>
            ))}
          </div>
          <img src={current.src} alt={activeTab + " facility plan"} className="max-w-full max-h-full object-contain" style={{ padding: "4rem 1.5rem 1.5rem", cursor: "default" }} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
}

export function LandingPage() {
  const [locationTab, setLocationTab] = useState("Surrounding Amenities");
  const [floorTab, setFloorTab] = useState("Type A");
  const [sending, setSending] = useState(false);
  const [navSolid, setNavSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setNavSolid(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans" style={{ fontFamily: "'Georgia', serif", background: CHARCOAL }}>

      {/* ── Fixed Nav ─────────────────────────────────────── */}
      <header
        id="hero"
        className={`fixed w-full z-50 top-0 transition-all duration-300`}
        style={{ background: navSolid ? "rgba(0,0,0,0.85)" : "transparent", backdropFilter: navSolid ? "blur(8px)" : "none" }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24 py-5 flex items-center justify-between gap-6">
          <div className="text-white leading-tight">
            <div className="text-base md:text-lg tracking-wide font-medium">Sky Alliance Enterprise</div>
            <div className="text-[10px] md:text-xs tracking-[0.25em] uppercase opacity-90 mt-1">Authorized Appointed Agency</div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm tracking-wide text-white">
            {heroNavLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition-opacity hover:opacity-80">{link.label}</a>
            ))}
          </nav>
        </div>
      </header>

      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        className="w-full min-h-screen flex items-center justify-center text-center relative pt-24 md:pt-28"
        style={{ backgroundImage: `url('${BASE}gallery-entrance.png')`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        <div className="relative z-10 flex flex-col items-center px-4 py-16">
          <div className="text-xs tracking-[0.4em] mb-3" style={{ color: GOLD }}>EXCLUSIVE RESIDENTIAL DEVELOPMENT</div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide" style={{ color: BEIGE, letterSpacing: "0.08em" }}>SKY AMAN 1</h1>
          <div className="text-2xl md:text-3xl mt-1 font-light tracking-widest" style={{ color: BEIGE }}>RESIDENCES</div>
          <div className="mt-4 text-2xl md:text-3xl italic" style={{ color: "#FFFFFF", fontFamily: "'Georgia', serif" }}>Living within a Masterpiece of Nature</div>
          <div className="mt-4 w-24 h-px" style={{ background: GOLD }} />
          <p className="mt-4 text-sm tracking-widest" style={{ color: "#C7B7A5" }}>CHERAS . KUALA LUMPUR</p>
          <button
            onClick={() => { const el = document.getElementById("register"); if (el) el.scrollIntoView({ behavior: "smooth" }); }}
            className="mt-8 px-10 py-3 text-sm tracking-[0.25em] uppercase font-semibold transition-all duration-200"
            style={{ background: GOLD, color: CHARCOAL, border: "none", cursor: "pointer", letterSpacing: "0.25em" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#CDA35A"; (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.04)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = GOLD; (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)"; }}
          >
            Register Now
          </button>
        </div>
      </section>

      {/* ── USPs ─────────────────────────────────────────── */}
      <section className="w-full py-16 px-4" style={{ background: CHARCOAL }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {usps.map((usp, i) => (
            <div key={i} className="flex flex-col items-center text-center p-8" style={{ border: `1.5px solid ${GOLD}`, background: "rgba(184,145,74,0.04)" }}>
              {usp.icon}
              <p className="text-sm leading-relaxed mt-2" style={{ color: "#D6CFC5", letterSpacing: "0.02em" }}>{usp.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Gallery ──────────────────────────────────────── */}
      <section id="gallery" className="w-full py-16 px-4" style={{ background: DARK_GREY }}>
        <h2 className="text-4xl text-center font-light mb-2 tracking-widest" style={{ color: BEIGE, fontFamily: "'Georgia', serif" }}>Gallery</h2>
        <GoldDivider />
        <div className="max-w-6xl mx-auto"><Gallery /></div>
      </section>

      {/* ── Location ─────────────────────────────────────── */}
      <section id="location" className="w-full py-16" style={{ background: GREY_BG }}>
        <h2 className="text-4xl text-center font-light mb-2 tracking-widest" style={{ color: "#3B3329", fontFamily: "'Georgia', serif" }}>Location</h2>
        <GoldDivider />
        <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-0">
          <LightboxImage
            src={`${BASE}location-map.avif`}
            alt="Sky Aman 1 Cheras location map"
            className="absolute inset-0 h-full w-full object-cover"
            wrapperClassName="relative overflow-hidden"
            wrapperStyle={{ minHeight: 420 }}
          />
          <div className="p-8 flex flex-col" style={{ background: CHARCOAL, minHeight: 420 }}>
            <div className="flex flex-wrap gap-2 mb-6 border-b pb-4" style={{ borderColor: "#3A3330" }}>
              {locationTabs.map((tab) => (
                <button key={tab} onClick={() => setLocationTab(tab)} className="text-xs px-3 py-1.5 tracking-wider transition-all" style={{ background: locationTab === tab ? GOLD : "transparent", color: locationTab === tab ? CHARCOAL : "#9A8C7E", border: `1px solid ${locationTab === tab ? GOLD : "#4A4540"}`, fontWeight: locationTab === tab ? 700 : 400 }}>
                  {tab}
                </button>
              ))}
            </div>
            <ul className="space-y-3 flex-1">
              {(locationContent[locationTab] || []).map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 w-4 h-4 flex-shrink-0 flex items-center justify-center rounded-full text-xs font-bold" style={{ background: GOLD, color: CHARCOAL }}>{i + 1}</span>
                  <span className="text-sm tracking-wider" style={{ color: "#D6CFC5" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Floor Plans ──────────────────────────────────── */}
      <section id="floor-plans" className="w-full py-16 px-4" style={{ background: CHARCOAL }}>
        <h2 className="text-4xl text-center font-light mb-2 tracking-widest" style={{ color: BEIGE, fontFamily: "'Georgia', serif" }}>Floor Plan</h2>
        <GoldDivider />
        <div className="flex flex-wrap justify-center gap-3 mt-10 mb-8">
          {floorPlanTabs.map((tab) => (
            <button key={tab} onClick={() => setFloorTab(tab)} className="px-6 py-2 rounded-full text-sm tracking-widest font-medium transition-all" style={{ background: floorTab === tab ? GOLD : PILL_INACTIVE, color: floorTab === tab ? CHARCOAL : "#9A8C7E", border: `1.5px solid ${floorTab === tab ? GOLD : "#4A4540"}` }}>
              {tab}
            </button>
          ))}
        </div>
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-light text-center mb-3 tracking-widest" style={{ color: BEIGE }}>{floorTab}</h3>
          <p className="text-center text-sm tracking-widest mb-8" style={{ color: GOLD }}>
            BUILT-UP: {floorPlanData[floorTab].builtUp} &nbsp;|&nbsp; BEDROOMS: {floorPlanData[floorTab].bedrooms} &nbsp;|&nbsp; BATHROOMS: {floorPlanData[floorTab].bathrooms}
          </p>
          <LightboxImage
            src={floorPlanImages[floorTab]}
            alt={`${floorTab} floor plan`}
            className="w-full h-full object-contain"
            wrapperClassName="w-full flex items-center justify-center overflow-hidden"
            wrapperStyle={{ background: DARK_GREY, minHeight: 480, border: `1px solid #3A3330` }}
          />
        </div>
      </section>

      {/* ── Facilities ───────────────────────────────────── */}
      <section id="facilities" className="w-full py-16 px-4" style={{ background: DARK_GREY }}>
        <h2 className="text-4xl text-center font-light mb-2 tracking-widest" style={{ color: BEIGE, fontFamily: "'Georgia', serif" }}>Facilities</h2>
        <GoldDivider />
        <FacilitiesSection />
      </section>

      {/* ── Registration Form ────────────────────────────── */}
      <section id="register" className="w-full py-16 px-4" style={{ background: GREY_BG }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
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
            <div className="flex justify-center md:justify-start">
              <svg viewBox="0 0 120 160" className="w-24 h-32 opacity-20">
                <polygon points="60,10 95,70 25,70" fill="#4A3728" />
                <polygon points="60,40 100,110 20,110" fill="#4A3728" />
                <polygon points="60,70 105,140 15,140" fill="#4A3728" />
                <rect x="50" y="140" width="20" height="16" fill="#4A3728" />
              </svg>
            </div>
          </div>

          <div className="p-8" style={{ background: "white", boxShadow: "0 4px 32px rgba(42,31,23,0.08)" }}>
            <form
              id="leadForm"
              className="space-y-4"
              onSubmit={async (e) => {
                e.preventDefault();
                setSending(true);
                const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxcS3VPdicyVOz4W6uwJ5FxItJBgG6hscEdKLg2GuddBuXmub8VU1kbxLU3pzj2lO94/exec";
                try {
                  const formData = new FormData(e.currentTarget);
                  await fetch(SCRIPT_URL, { method: "POST", body: formData });
                  window.location.href = "/thank-you";
                } catch {
                  alert("Something went wrong. Please try again or contact us directly.");
                  setSending(false);
                }
              }}
            >
              <div>
                <label className="block text-xs tracking-widest mb-1 uppercase" style={{ color: "#5A5040" }}>Full Name</label>
                <input type="text" name="Name" required className="w-full px-3 py-2.5 text-sm border outline-none" style={{ border: "1px solid #D4CFC4", borderRadius: 0, color: "#2A1F17" }} />
              </div>
              <div>
                <label className="block text-xs tracking-widest mb-1 uppercase" style={{ color: "#5A5040" }}>Email Address</label>
                <input type="email" name="Email" required className="w-full px-3 py-2.5 text-sm border outline-none" style={{ border: "1px solid #D4CFC4", borderRadius: 0, color: "#2A1F17" }} />
              </div>
              <div>
                <label className="block text-xs tracking-widest mb-1 uppercase" style={{ color: "#5A5040" }}>Phone Number</label>
                <input type="tel" name="Phone" required className="w-full px-3 py-2.5 text-sm border outline-none" style={{ border: "1px solid #D4CFC4", borderRadius: 0, color: "#2A1F17" }} />
              </div>
              <div>
                <label className="block text-xs tracking-widest mb-1 uppercase" style={{ color: "#5A5040" }}>Message</label>
                <textarea name="Message" rows={3} className="w-full px-3 py-2.5 text-sm border outline-none resize-none" style={{ border: "1px solid #D4CFC4", borderRadius: 0, color: "#2A1F17" }} />
              </div>
              <div className="flex items-start gap-3 pt-1">
                <input type="checkbox" required id="consent" className="mt-1 flex-shrink-0" style={{ accentColor: DARK_BROWN }} />
                <label htmlFor="consent" className="text-xs leading-relaxed" style={{ color: "#5A5040" }}>
                  I agree to the{" "}
                  <a href="/privacy" target="_blank" rel="noopener noreferrer" style={{ color: DARK_BROWN, textDecoration: "underline" }}>Privacy Policy</a>
                  {" "}and consent to Sky Alliance Enterprise contacting me regarding my inquiry.{" "}
                  <a href="/privacy" target="_blank" rel="noopener noreferrer" style={{ color: DARK_BROWN, textDecoration: "underline" }}>View Privacy Policy</a>
                </label>
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full py-3 text-sm tracking-widest font-semibold uppercase transition-opacity"
                style={{ background: DARK_BROWN, color: BEIGE, opacity: sending ? 0.65 : 1, cursor: sending ? "not-allowed" : "pointer" }}
              >
                {sending ? "Sending…" : "Send"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────── */}
      <footer className="w-full py-12 px-4 text-center" style={{ background: FOOTER_BG }}>
        <div className="flex justify-center mb-6">
          <img src={`${BASE}skyalliance-logo.avif`} alt="Sky Alliance Enterprise" className="h-20 w-auto object-contain" />
        </div>
        <div className="space-y-2 text-sm" style={{ color: "#4A3728" }}>
          <p className="font-semibold tracking-wide">Sky Alliance Enterprise (202603044120) (IP0620548-A)</p>
          <p className="text-xs" style={{ color: "#6A5848" }}>Lot 17899, Jalan Ayer Jerneh, Taman Ayer Panas, 53200 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur</p>
          <p className="text-xs" style={{ color: "#6A5848" }}>Contact Number: 017-2130 612 (Franky) &nbsp;|&nbsp; Email: skyalliance.acc@gmail.com</p>
          <p className="text-xs mt-4" style={{ color: "#6A5848" }}>
            © 2026 Sky Aman 1 Residences. All Rights Reserved.{" "}
            <a href="/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "#4A3728", textDecoration: "underline" }}>Privacy Policy</a>
          </p>
        </div>

        <section className="mt-10 px-4 md:px-12 lg:px-24 text-left">
          <h2 className="text-3xl md:text-4xl font-light mb-3 tracking-widest" style={{ color: "#3B3329", fontFamily: "'Georgia', serif" }}>Visit Our Agency</h2>
          <p className="text-sm mb-5" style={{ color: "#4A3728", whiteSpace: "pre-line" }}>Sky Alliance Enterprise{"\n\n"}Lot 17899, Jalan Ayer Jerneh, Taman Ayer Panas, 53200 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur</p>
          <iframe
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: 0, borderRadius: "12px", boxShadow: "0 4px 6px rgba(0,0,0,0.3)" }}
            src="https://maps.google.com/maps?q=Sky+Alliance+Enterprise,+Lot+17899,+Jalan+Ayer+Jerneh,+Taman+Ayer+Panas,+53200+Kuala+Lumpur&t=&z=15&ie=UTF8&iwloc=&output=embed"
            allowFullScreen
          />
        </section>

        <div className="mt-8 mx-auto max-w-3xl px-6 py-5" style={{ background: "rgba(74,55,40,0.08)", border: "1px solid rgba(74,55,40,0.2)" }}>
          <p className="text-sm italic leading-relaxed" style={{ color: "#4A3728" }}>
            <strong className="not-italic font-semibold">Disclaimer:</strong>{" "}
            This website is independently operated by a real estate agent from appointed agency Sky Alliance Enterprise, and is not the official website of the developer. All information provided is for reference only.
          </p>
        </div>
      </footer>

      {/* ── WhatsApp Button ──────────────────────────────── */}
      <a
        href="https://wa.me/601154481426?text=Hi.%20I%20saw%20your%20ads%20on%20Google%20and%20I'm%20interested%20in%20The%20SkyAman%201%20Residences%20project.%20Please%20contact%20me.%20Thanks!"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        style={{ position: "fixed", bottom: 28, right: 28, zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", width: 60, height: 60, borderRadius: "50%", background: "#25D366", boxShadow: "0 4px 20px rgba(37,211,102,0.45), 0 2px 8px rgba(0,0,0,0.25)", transition: "transform 0.2s ease, box-shadow 0.2s ease" }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.12)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 6px 28px rgba(37,211,102,0.6), 0 4px 12px rgba(0,0,0,0.3)"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 20px rgba(37,211,102,0.45), 0 2px 8px rgba(0,0,0,0.25)"; }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="white" aria-hidden="true">
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.49.648 4.83 1.783 6.863L2 30l7.338-1.762A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.847-1.607l-.419-.249-4.352 1.045 1.074-4.24-.273-.435A11.46 11.46 0 0 1 4.5 16C4.5 9.649 9.649 4.5 16 4.5S27.5 9.649 27.5 16 22.351 27.5 16 27.5zm6.29-8.61c-.344-.172-2.036-1.004-2.352-1.119-.316-.115-.546-.172-.776.172-.23.344-.893 1.119-1.094 1.349-.201.23-.402.258-.746.086-.344-.172-1.452-.535-2.767-1.707-1.022-.912-1.712-2.038-1.912-2.382-.201-.344-.021-.53.151-.701.155-.154.344-.402.516-.603.172-.201.23-.344.344-.574.115-.23.058-.431-.029-.603-.086-.172-.776-1.87-1.063-2.562-.28-.672-.564-.58-.776-.591l-.661-.012c-.23 0-.603.086-.919.431-.316.344-1.207 1.179-1.207 2.876 0 1.697 1.236 3.337 1.408 3.567.172.23 2.432 3.713 5.893 5.207.824.356 1.467.568 1.968.728.827.263 1.58.226 2.175.137.663-.099 2.036-.832 2.323-1.635.287-.803.287-1.491.201-1.635-.086-.143-.316-.23-.66-.402z" />
        </svg>
      </a>
    </div>
  );
}

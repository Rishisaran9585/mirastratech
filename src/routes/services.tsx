import { createFileRoute, Link } from "@tanstack/react-router";
import Nav from "../components/Nav";
import React, { useState, useEffect } from "react";
import { ArrowUpRight, ChevronDown, Laptop, Code, Zap, Star } from "lucide-react";
import Antigravity from "../components/reactbits/Antigravity";
import SplitText from "../components/reactbits/SplitText";
import FadeContent from "../components/reactbits/FadeContent";
import TiltedCard from "../components/reactbits/TiltedCard";
import SpotlightCard from "../components/reactbits/SpotlightCard";
import StarBorder from "../components/reactbits/StarBorder";
import CountUp from "../components/reactbits/CountUp";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Mirastra Tech" },
      { name: "description", content: "Explore our technology solutions: website development, web apps, custom software, browser extensions, automation, QA, and digital marketing." },
    ],
  }),
  component: Services,
});

const SERVICES = [
  { num: "01", title: "Website Development", tags: ["Static", "Dynamic", "Animated", "SEO-Ready"], img: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=600&h=500&q=80" },
  { num: "02", title: "Web Applications", tags: ["SaaS", "Dashboards", "Portals", "Analytics"], img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=500&q=80" },
  { num: "03", title: "Mobile Apps", tags: ["Android", "iOS", "Cross-Platform", "Enterprise"], img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&h=500&q=80" },
  { num: "04", title: "Custom Software", tags: ["CRM", "ERP", "HRM", "Billing"], img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=500&q=80" },
  { num: "05", title: "Automation & Extensions", tags: ["Chrome Ext.", "Bots", "Pipelines", "Scripts"], img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&h=500&q=80" },
  { num: "06", title: "Digital Marketing", tags: ["Meta Ads", "Social Media", "Video", "SEO"], img: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=600&h=500&q=80" },
  { num: "07", title: "QA & Testing", tags: ["Manual", "Automated", "Performance", "Audits"], img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=600&h=500&q=80" },
  { num: "08", title: "UI/UX Design", tags: ["Wireframes", "Prototypes", "Design", "Brand"], img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&h=500&q=80" },
];

const METRICS = [
  { icon: "⚡", label: "Launch Speed", value: "7", unit: "days avg", sub: "First delivery" },
  { icon: "🛡️", label: "Code Quality", value: "100%", unit: "", sub: "Custom, no templates" },
  { icon: "🔋", label: "On-Time Delivery", value: "100%", unit: "", sub: "Across all projects" },
  { icon: "🔄", label: "Revision Cycles", value: "∞", unit: "", sub: "Until you're satisfied" },
];

const STANDARDS = [
  { badge: "🥇", title: "MSME Registered", sub: "Govt. of India Certified", stat: "Est. 2026" },
  { badge: "🥈", title: "25+ Projects", sub: "Live client launches", stat: "Worldwide" },
  { badge: "🥉", title: "100% Remote", sub: "Serving globally", stat: "Certified Delivery" },
];

const FAQS = [
  { q: "How long does a website take to build?", a: "Static websites are delivered in 3–5 days. Dynamic and animated sites take 1–2 weeks. Web applications and custom software range from 3–8 weeks." },
  { q: "What does website development pricing include?", a: "All packages include custom UI/UX design, responsive layout, contact forms, WhatsApp integration, SEO structure, and 30 days post-launch support." },
  { q: "Do you offer post-deployment support?", a: "Yes. Every project includes 30 days of complimentary monitoring, bug fixes, and backup support. We also offer affordable monthly retainer packages." },
  { q: "Can I pause or cancel a digital marketing package?", a: "Absolutely. Marketing operates on month-to-month contracts — pause or cancel at any month-end to match your active budget." },
  { q: "Do you build cross-platform mobile apps?", a: "Yes. We build Android and iOS apps using React Native, ensuring a single codebase delivers a native experience on both platforms." },
];

function ServiceCard({ svc, idx, hoveredCard, setHoveredCard }: {
  svc: typeof SERVICES[0]; idx: number;
  hoveredCard: number | null; setHoveredCard: (v: number | null) => void;
}) {
  const isHovered = hoveredCard === idx;
  return (
    <div
      onMouseEnter={() => setHoveredCard(idx)}
      onMouseLeave={() => setHoveredCard(null)}
      className="relative flex flex-col justify-between rounded-[20px] overflow-hidden cursor-pointer select-none"
      style={{ minHeight: "220px", background: isHovered ? "#0e0e0e" : "#e4e4e2", transition: "background 0.35s ease" }}
    >
      <img src={svc.img} alt="" aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ opacity: isHovered ? 1 : 0, filter: "brightness(0.32) saturate(0.7)", transition: "opacity 0.4s ease" }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to top,rgba(0,0,0,0.92) 0%,rgba(191,255,0,0.03) 65%,transparent 100%)", opacity: isHovered ? 1 : 0, transition: "opacity 0.4s ease" }} />
      <div className="relative z-10 p-4">
        <span className="inline-flex text-[9px] font-semibold tracking-[0.15em] uppercase px-2.5 py-1 rounded-full"
          style={{ background: isHovered ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.06)", color: isHovered ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.40)", border: isHovered ? "1px solid rgba(255,255,255,0.14)" : "1px solid rgba(0,0,0,0.08)", transition: "all 0.3s ease" }}>
          {svc.tags[0]}
        </span>
      </div>
      <div className="relative z-10 p-4">
        <h3 className="font-bold leading-tight mb-3"
          style={{ fontSize: "clamp(14px,1.5vw,17px)", color: isHovered ? "#ffffff" : "#111111", transition: "color 0.3s ease" }}>
          {svc.title}
        </h3>
        <div style={{ maxHeight: isHovered ? "40px" : "0px", opacity: isHovered ? 1 : 0, overflow: "hidden", transition: "max-height 0.35s ease, opacity 0.3s ease" }}>
          <Link to="/contact" className="inline-flex items-center bg-white text-black text-[10px] font-black px-4 py-1.5 rounded-full hover:bg-[#bfff00] transition-colors decoration-none cursor-pointer">
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
}

const ACCORDION_ITEMS = [
  {
    title: "CUSTOM\nCODE &\nDELIVERY",
    body: "We write every line from scratch — tailored to your product, your workflow, and your users. No templates, no limits.",
    bg: "#bfff00",
    textColor: "#000",
    bodyColor: "rgba(0,0,0,0.55)",
    // Code editor window illustration
    visual: (
      <svg width="120" height="90" viewBox="0 0 120 90" fill="none" aria-hidden="true">
        {/* Window frame */}
        <rect x="0" y="0" width="120" height="90" rx="8" fill="rgba(0,0,0,0.18)" />
        {/* Title bar */}
        <rect x="0" y="0" width="120" height="18" rx="8" fill="rgba(0,0,0,0.25)" />
        <rect x="6" y="6" width="6" height="6" rx="3" fill="rgba(0,0,0,0.4)" />
        <rect x="16" y="6" width="6" height="6" rx="3" fill="rgba(0,0,0,0.3)" />
        <rect x="26" y="6" width="6" height="6" rx="3" fill="rgba(0,0,0,0.2)" />
        {/* Code lines */}
        <rect x="8" y="26" width="30" height="3" rx="1.5" fill="rgba(0,0,0,0.35)" />
        <rect x="42" y="26" width="20" height="3" rx="1.5" fill="rgba(0,0,0,0.5)" />
        <rect x="8" y="34" width="14" height="3" rx="1.5" fill="rgba(0,0,0,0.25)" />
        <rect x="26" y="34" width="36" height="3" rx="1.5" fill="rgba(0,0,0,0.4)" />
        <rect x="8" y="42" width="50" height="3" rx="1.5" fill="rgba(0,0,0,0.3)" />
        <rect x="8" y="50" width="22" height="3" rx="1.5" fill="rgba(0,0,0,0.45)" />
        <rect x="34" y="50" width="28" height="3" rx="1.5" fill="rgba(0,0,0,0.25)" />
        <rect x="8" y="58" width="40" height="3" rx="1.5" fill="rgba(0,0,0,0.3)" />
        <rect x="8" y="66" width="16" height="3" rx="1.5" fill="rgba(0,0,0,0.4)" />
        {/* Cursor blink */}
        <rect x="28" y="66" width="2" height="10" rx="1" fill="rgba(0,0,0,0.6)" />
        {/* Deploy button */}
        <rect x="74" y="60" width="38" height="20" rx="5" fill="rgba(0,0,0,0.5)" />
        <rect x="78" y="67" width="20" height="3" rx="1.5" fill="rgba(0,0,0,0.5)" />
        <rect x="100" y="67" width="6" height="3" rx="1.5" fill="rgba(0,0,0,0.7)" />
      </svg>
    ),
  },
  {
    title: "SPRINT\nBASED\nLAUNCH",
    body: "Agile two-week sprints keep your project moving fast. You always know what ships next and exactly when.",
    bg: "#1a1a1a",
    textColor: "#fff",
    bodyColor: "rgba(255,255,255,0.45)",
    // Rocket launch illustration
    visual: (
      <svg width="90" height="110" viewBox="0 0 90 110" fill="none" aria-hidden="true">
        {/* Rocket body */}
        <path d="M45 10 C45 10, 62 28, 62 55 L45 65 L28 55 C28 28, 45 10, 45 10Z" fill="rgba(191,255,0,0.15)" stroke="rgba(191,255,0,0.6)" strokeWidth="1.5" />
        {/* Nose cone */}
        <path d="M45 10 C38 22, 35 35, 35 45 L45 50 L55 45 C55 35, 52 22, 45 10Z" fill="rgba(191,255,0,0.3)" />
        {/* Window */}
        <circle cx="45" cy="42" r="7" fill="none" stroke="rgba(191,255,0,0.7)" strokeWidth="1.5" />
        <circle cx="45" cy="42" r="4" fill="rgba(191,255,0,0.2)" />
        {/* Left fin */}
        <path d="M28 55 L16 68 L28 65Z" fill="rgba(191,255,0,0.25)" stroke="rgba(191,255,0,0.4)" strokeWidth="1" />
        {/* Right fin */}
        <path d="M62 55 L74 68 L62 65Z" fill="rgba(191,255,0,0.25)" stroke="rgba(191,255,0,0.4)" strokeWidth="1" />
        {/* Exhaust flames */}
        <path d="M38 65 Q40 82 45 88 Q50 82 52 65" fill="rgba(191,255,0,0.12)" stroke="rgba(191,255,0,0.35)" strokeWidth="1" />
        <path d="M41 65 Q43 77 45 82 Q47 77 49 65" fill="rgba(191,255,0,0.25)" />
        {/* Speed lines */}
        <line x1="8" y1="30" x2="22" y2="30" stroke="rgba(191,255,0,0.3)" strokeWidth="1" strokeDasharray="3 2" />
        <line x1="6" y1="40" x2="18" y2="40" stroke="rgba(191,255,0,0.2)" strokeWidth="1" strokeDasharray="2 3" />
        <line x1="68" y1="35" x2="82" y2="35" stroke="rgba(191,255,0,0.3)" strokeWidth="1" strokeDasharray="3 2" />
        <line x1="70" y1="45" x2="82" y2="45" stroke="rgba(191,255,0,0.2)" strokeWidth="1" strokeDasharray="2 3" />
      </svg>
    ),
  },
  {
    title: "FULL\nSTACK\nEXECUTION",
    body: "We handle front-end, back-end, database, DevOps, and cloud deploy — one team, zero handoff friction.",
    bg: "#111",
    textColor: "#fff",
    bodyColor: "rgba(255,255,255,0.45)",
    // Stacked layers / tech stack illustration
    visual: (
      <svg width="110" height="100" viewBox="0 0 110 100" fill="none" aria-hidden="true">
        {/* Layer 1 — Cloud */}
        <rect x="10" y="8" width="90" height="18" rx="5" fill="rgba(191,255,0,0.18)" stroke="rgba(191,255,0,0.5)" strokeWidth="1.5" />
        <text x="18" y="21" fontFamily="monospace" fontSize="8" fill="rgba(191,255,0,0.8)">CLOUD / DEVOPS</text>
        {/* Connector */}
        <line x1="55" y1="26" x2="55" y2="34" stroke="rgba(191,255,0,0.3)" strokeWidth="1" strokeDasharray="2 2" />
        {/* Layer 2 — Backend */}
        <rect x="10" y="34" width="90" height="18" rx="5" fill="rgba(191,255,0,0.12)" stroke="rgba(191,255,0,0.4)" strokeWidth="1.5" />
        <text x="18" y="47" fontFamily="monospace" fontSize="8" fill="rgba(191,255,0,0.7)">BACKEND / API</text>
        {/* Connector */}
        <line x1="55" y1="52" x2="55" y2="60" stroke="rgba(191,255,0,0.3)" strokeWidth="1" strokeDasharray="2 2" />
        {/* Layer 3 — Database */}
        <rect x="10" y="60" width="90" height="18" rx="5" fill="rgba(191,255,0,0.08)" stroke="rgba(191,255,0,0.3)" strokeWidth="1.5" />
        <text x="18" y="73" fontFamily="monospace" fontSize="8" fill="rgba(191,255,0,0.55)">DATABASE / STORE</text>
        {/* Connector */}
        <line x1="55" y1="78" x2="55" y2="86" stroke="rgba(191,255,0,0.3)" strokeWidth="1" strokeDasharray="2 2" />
        {/* Layer 4 — Frontend */}
        <rect x="10" y="86" width="90" height="12" rx="5" fill="rgba(191,255,0,0.05)" stroke="rgba(191,255,0,0.2)" strokeWidth="1" />
        <text x="18" y="95" fontFamily="monospace" fontSize="7" fill="rgba(191,255,0,0.4)">FRONT-END / UI</text>
      </svg>
    ),
  },
  {
    title: "MULTI-\nCHANNEL\nGROWTH\nSTRATEGY",
    body: "Ready to scale? We help you build and manage a network of channels that multiply reach, revenue, and market dominance.",
    bg: "#0a0a0a",
    textColor: "#fff",
    bodyColor: "rgba(255,255,255,0.45)",
    // 3D-style orbit / globe illustration
    visual: (
      <svg width="110" height="110" viewBox="0 0 110 110" fill="none" aria-hidden="true">
        {/* Outer glow circle */}
        <circle cx="55" cy="55" r="48" fill="rgba(191,255,0,0.04)" stroke="rgba(191,255,0,0.12)" strokeWidth="1" />
        {/* Orbital rings */}
        <ellipse cx="55" cy="55" rx="44" ry="16" stroke="rgba(191,255,0,0.35)" strokeWidth="1.5" fill="none" />
        <ellipse cx="55" cy="55" rx="44" ry="16" stroke="rgba(191,255,0,0.15)" strokeWidth="1" fill="none" transform="rotate(60 55 55)" />
        <ellipse cx="55" cy="55" rx="44" ry="16" stroke="rgba(191,255,0,0.1)" strokeWidth="1" fill="none" transform="rotate(120 55 55)" />
        {/* Centre planet */}
        <circle cx="55" cy="55" r="14" fill="rgba(191,255,0,0.12)" stroke="rgba(191,255,0,0.5)" strokeWidth="2" />
        <circle cx="55" cy="55" r="8" fill="rgba(191,255,0,0.2)" />
        {/* Highlight on planet */}
        <circle cx="50" cy="50" r="4" fill="rgba(255,255,255,0.15)" />
        {/* Orbiting dots */}
        <circle cx="99" cy="55" r="4" fill="#bfff00" opacity="0.8" />
        <circle cx="27" cy="38" r="3" fill="#bfff00" opacity="0.5" />
        <circle cx="72" cy="18" r="2.5" fill="#bfff00" opacity="0.4" />
        {/* Connection lines to dots */}
        <line x1="55" y1="55" x2="99" y2="55" stroke="rgba(191,255,0,0.2)" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="55" y1="55" x2="27" y2="38" stroke="rgba(191,255,0,0.15)" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="55" y1="55" x2="72" y2="18" stroke="rgba(191,255,0,0.1)" strokeWidth="1" strokeDasharray="3 3" />
      </svg>
    ),
  },
];

function AccordionCards() {
  const [active, setActive] = useState<number>(3);
  return (
    <div className="flex flex-col md:flex-row gap-3 min-h-[460px] md:h-[380px]">
      {ACCORDION_ITEMS.map((item, i) => {
        const isActive = active === i;
        return (
          <div
            key={i}
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
            className={`relative flex flex-col justify-between rounded-[20px] overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
              isActive
                ? "flex-grow h-[260px] md:h-full md:flex-[4_1_0%] p-6 md:p-7"
                : "h-[72px] md:h-full md:flex-[1_1_0%] md:min-w-[60px] p-5 md:p-7"
            }`}
            style={{
              background: item.bg,
            }}
          >
            {/* Title / Header */}
            <div className="flex justify-between items-center md:block">
              <h3
                className={`font-black uppercase tracking-tight transition-all duration-300 md:whitespace-pre-line ${
                  isActive
                    ? "text-lg sm:text-xl md:text-[2rem] md:leading-[1.0]"
                    : "text-sm sm:text-base md:text-[11px] lg:text-[13px] md:leading-[1.1]"
                }`}
                style={{
                  color: item.textColor,
                  letterSpacing: isActive ? "-0.5px" : "0px",
                }}
              >
                <span className="md:hidden">{item.title.replace(/\n/g, " ")}</span>
                <span className="hidden md:inline">{item.title}</span>
              </h3>
              
              {!isActive && (
                <div className="md:hidden w-6 h-6 rounded-full flex items-center justify-center border transition-all duration-300"
                  style={{
                    borderColor: item.textColor,
                    opacity: 0.3
                  }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M5 1V9M1 5H9" stroke={item.textColor} strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
              )}
            </div>

            {/* Body + visual — only visible when active */}
            <div
              className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                isActive ? "opacity-100 mt-4 md:mt-0" : "opacity-0 h-0 overflow-hidden pointer-events-none"
              }`}
            >
              <div className="flex items-end justify-between gap-4">
                <p className="text-xs sm:text-sm md:text-xs leading-relaxed max-w-[240px] md:max-w-[200px]" style={{ color: item.bodyColor }}>
                  {item.body}
                </p>
                {item.visual && (
                  <div className="scale-75 sm:scale-90 md:scale-100 origin-bottom-right flex-shrink-0">
                    {item.visual}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Services() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <main className="w-full bg-black text-white min-h-screen font-sans overflow-hidden">
      <Nav theme="dark" />

      {/* ── HERO ── */}
      <section className="w-full min-h-screen relative overflow-hidden flex flex-col justify-between bg-[#050508]" style={{ minHeight: "100svh" }}>
        
        {/* Background WebGL Particle Network */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-45">
          {isMounted && (
            <Antigravity
              count={300}
              magnetRadius={6}
              ringRadius={7}
              waveSpeed={0.4}
              waveAmplitude={1}
              particleSize={1.5}
              lerpSpeed={0.15}
              color="#bfff00"
              autoAnimate={true}
              particleVariance={1}
              rotationSpeed={0}
              depthFactor={1}
              pulseSpeed={3}
              particleShape="capsule"
              fieldStrength={10}
            />
          )}
        </div>

        {/* Ambient Gradient Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-500/10 blur-[130px] pointer-events-none z-0" />
        <div className="absolute bottom-[20%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none z-0" />
        <div className="absolute top-[40%] left-[30%] w-[35vw] h-[35vw] rounded-full bg-[#bfff00]/5 blur-[100px] pointer-events-none z-0" />

        {/* Grid Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
          <svg className="w-full h-full" aria-hidden="true">
            <defs>
              <pattern id="services-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(191,255,0,0.4)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#services-grid)" />
          </svg>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-14 pt-24 pb-4 flex-grow flex flex-col justify-center">
          
          {/* Tagline Badge */}
          <FadeContent delay={0.1} y={15}>
            <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] backdrop-blur-md rounded-full px-4 py-1.5 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#bfff00] animate-pulse" />
              <span className="text-white/60 text-[10px] font-mono tracking-[0.15em] uppercase">
                ENGINEERING &amp; ARCHITECTURE
              </span>
            </div>
          </FadeContent>

          {/* Headline & Subtitle */}
          <div className="max-w-4xl mb-6">
            <h1 className="text-[clamp(30px,5vw,60px)] font-black text-white leading-[0.95] tracking-tight uppercase flex flex-col gap-1">
              <span className="block overflow-hidden">
                <SplitText
                  text="WE BUILD &amp; DEPLOY"
                  delay={0.012}
                  duration={0.4}
                />
              </span>
              <span className="block overflow-hidden text-[#bfff00]">
                <SplitText
                  text="HIGH-PERFORMANCE"
                  delay={0.012}
                  duration={0.4}
                />
              </span>
              <span className="italic font-light tracking-wide font-instrument block mt-1 lowercase text-white">
                digital ecosystems.
              </span>
            </h1>
            <FadeContent delay={0.3} y={15}>
              <p className="text-white/50 text-xs sm:text-sm leading-relaxed max-w-xl mt-3">
                From high-converting web apps and custom enterprise tools to browser extensions, automation pipelines, and marketing funnels. We construct modern software optimized to scale.
              </p>
            </FadeContent>

            {/* CTAs */}
            <FadeContent delay={0.4} y={15}>
              <div className="flex items-center gap-4 mt-5 flex-wrap">
                <Link to="/contact">
                  <StarBorder color="#bfff00" speed={3.5} borderRadius="9999px" borderWidth={1.5} className="cursor-pointer">
                    <span className="inline-flex items-center bg-[#bfff00] text-black text-xs font-black px-7 py-3 rounded-full hover:bg-white transition-colors duration-300">
                      Book a Discovery Call
                    </span>
                  </StarBorder>
                </Link>
                <button
                  onClick={() => {
                    const pricingSection = document.getElementById("pricing-section") || document.querySelector("section.py-20");
                    pricingSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold px-7 py-3.5 rounded-full transition-all duration-300 cursor-pointer"
                >
                  Explore Capabilities
                </button>
              </div>
            </FadeContent>
          </div>


          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-4">
            
            {/* Sector 1: Software & Apps */}
            <FadeContent delay={0.5} y={20}>
              <TiltedCard maxTilt={10} scale={1.02}>
                <SpotlightCard
                  className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] hover:border-[#bfff00]/20 rounded-[24px] p-6 shadow-2xl transition-all duration-300 min-h-[190px] flex flex-col justify-between"
                  spotlightColor="rgba(191, 255, 0, 0.08)"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#bfff00]/10 flex items-center justify-center text-[#bfff00]">
                        <Laptop size={18} />
                      </div>
                      <span className="text-[9px] font-mono text-white/40 tracking-wider">SECTOR 01</span>
                    </div>
                    <h3 className="text-white font-bold text-base leading-snug tracking-tight">
                      Software &amp; Web Apps
                    </h3>
                    <p className="text-white/45 text-[11px] leading-relaxed mt-2">
                      SaaS architectures, custom billing engines, responsive business sites, and multi-tenant portals.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/[0.05] flex justify-between items-center text-[10px] text-white/35 font-mono">
                    <span>STACK</span>
                    <span className="text-white/60">React / Node / Next.js</span>
                  </div>
                </SpotlightCard>
              </TiltedCard>
            </FadeContent>

            {/* Sector 2: Automation & Intelligence */}
            <FadeContent delay={0.6} y={20}>
              <TiltedCard maxTilt={10} scale={1.02}>
                <SpotlightCard
                  className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] hover:border-[#bfff00]/20 rounded-[24px] p-6 shadow-2xl transition-all duration-300 min-h-[190px] flex flex-col justify-between"
                  spotlightColor="rgba(191, 255, 0, 0.08)"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#bfff00]/10 flex items-center justify-center text-[#bfff00]">
                        <Zap size={18} />
                      </div>
                      <span className="text-[9px] font-mono text-white/40 tracking-wider">SECTOR 02</span>
                    </div>
                    <h3 className="text-white font-bold text-base leading-snug tracking-tight">
                      Automation &amp; Extensions
                    </h3>
                    <p className="text-white/45 text-[11px] leading-relaxed mt-2">
                      Chrome &amp; Edge extensions, automated scraping engines, internal workflow bots, and script architecture.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/[0.05] flex justify-between items-center text-[10px] text-white/35 font-mono">
                    <span>STACK</span>
                    <span className="text-white/60">Python / Puppeteer / APIs</span>
                  </div>
                </SpotlightCard>
              </TiltedCard>
            </FadeContent>

            {/* Sector 3: Digital Marketing & Funnels */}
            <FadeContent delay={0.7} y={20}>
              <TiltedCard maxTilt={10} scale={1.02}>
                <SpotlightCard
                  className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] hover:border-[#bfff00]/20 rounded-[24px] p-6 shadow-2xl transition-all duration-300 min-h-[190px] flex flex-col justify-between"
                  spotlightColor="rgba(191, 255, 0, 0.08)"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#bfff00]/10 flex items-center justify-center text-[#bfff00]">
                        <Star size={18} />
                      </div>
                      <span className="text-[9px] font-mono text-white/40 tracking-wider">SECTOR 03</span>
                    </div>
                    <h3 className="text-white font-bold text-base leading-snug tracking-tight">
                      Growth &amp; Analytics
                    </h3>
                    <p className="text-white/45 text-[11px] leading-relaxed mt-2">
                      High-converting landing pages, Meta/Google ad networks, custom dashboards, and SEO frameworks.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/[0.05] flex justify-between items-center text-[10px] text-white/35 font-mono">
                    <span>STACK</span>
                    <span className="text-white/60">SEO / Ads / Funnels</span>
                  </div>
                </SpotlightCard>
              </TiltedCard>
            </FadeContent>

          </div>
        </div>

        {/* Bottom System Status Bar */}
        <div className="relative z-10 w-full border-t border-white/5 bg-black/40 backdrop-blur-md py-5 px-6 sm:px-10 md:px-14">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-white/45 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>REGISTRY: MSME Registered</span>
              </div>
              <div className="flex items-center gap-2">
                <span>ESTABLISHED: 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <span>ACTIVE DEPLOYMENTS:</span>
                <span className="text-white font-black">
                  <CountUp to={25} duration={1200} />+ Projects
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span>ON-TIME SLA:</span>
                <span className="text-white font-black">
                  <CountUp to={100} duration={1200} />%
                </span>
              </div>
            </div>
            <div className="text-white/35 font-mono text-[10px] md:text-right w-full md:w-auto">
              STATUS // ALL_SYSTEMS_OPERATIONAL
            </div>
          </div>
        </div>

      </section>


      {/* ── CRAFTING INTRO + AUTO-SCROLL CARDS ── */}
      <section className="w-full bg-[#0a0a0a] py-20 overflow-hidden border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-14 mb-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-end">
            {/* Left: image visual */}
            <div className="relative rounded-[20px] overflow-hidden min-h-[320px] md:min-h-[380px] bg-[#111]">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=700&h=600&q=80"
                alt="Mirastra team at work"
                className="w-full h-full object-cover absolute inset-0"
                style={{ filter: "brightness(0.6) saturate(0.8)" }}
              />
              {/* Lime overlay tint at bottom */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(191,255,0,0.08) 0%, transparent 60%)" }} />
              {/* Bottom label */}
              <div className="absolute bottom-5 left-5 z-10">
                <div className="w-10 h-px bg-[#bfff00] mb-3" />
                <p className="text-white/50 text-[10px] font-mono uppercase tracking-widest">Mirastra Tech · Est. 2026</p>
              </div>
              {/* Top-right stat chip */}
              <div className="absolute top-5 right-5 z-10 bg-black/50 backdrop-blur-md border border-white/15 rounded-[14px] px-4 py-3">
                <p className="text-[#bfff00] font-black text-xl leading-none">25+</p>
                <p className="text-white/40 text-[9px] mt-1 font-mono uppercase tracking-wider">Projects Live</p>
              </div>
            </div>
            {/* Right: headline + body + CTA */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-[1.05] mb-5"
                style={{ letterSpacing: "-1.5px" }}>
                Crafting Meaningful<br />
                Brands &amp; Intuitive<br />
                <span className="text-[#bfff00]">Digital Experiences</span><br />
                That Stand Out
              </h2>
              <p className="text-white/40 text-sm leading-relaxed max-w-sm mb-7">
                At Mirastra, a full-service tech agency, we're passionate about crafting visually
                compelling identities and immersive digital experiences. With a strategic approach,
                we help businesses stand out and connect with their audience.
              </p>
              <Link to="/contact"
                className="inline-flex items-center gap-3 bg-[#bfff00] hover:bg-[#d4ff33] text-black text-sm font-black px-7 py-3 rounded-full transition-all decoration-none cursor-pointer"
                style={{ boxShadow: "0 6px 20px rgba(191,255,0,0.3)" }}>
                <span className="w-6 h-6 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                  <ArrowUpRight size={12} className="text-[#bfff00]" />
                </span>
                Start with us
              </Link>
            </div>
          </div>
        </div>

        {/* Auto-scrolling image cards strip */}
        <div className="relative overflow-hidden">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

          {/* Scrolling track */}
          <div
            className="flex gap-4"
            style={{ animation: "serviceScroll 28s linear infinite", width: "max-content" }}
          >
            {/* Duplicate the card set twice for seamless loop */}
            {[...Array(2)].map((_, setIdx) => (
              [
                { img: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=500&h=640&q=80", label: "Website Dev" },
                { img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=500&h=640&q=80", label: "Web Apps" },
                { img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=500&h=640&q=80", label: "Mobile Apps" },
                { img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&h=640&q=80", label: "Custom Software" },
                { img: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=500&h=640&q=80", label: "Digital Marketing" },
                { img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&h=640&q=80", label: "Automation" },
                { img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=500&h=640&q=80", label: "UI/UX Design" },
              ].map((card, i) => (
                <div key={`${setIdx}-${i}`}
                  className="relative flex-shrink-0 rounded-[20px] overflow-hidden group cursor-default"
                  style={{ width: "220px", height: "300px" }}>
                  <img
                    src={card.img}
                    alt={card.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ filter: "brightness(0.75) saturate(0.9)" }}
                  />
                  {/* Label chip bottom-left */}
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm border border-white/15 rounded-full px-3 py-1.5">
                    <span className="text-white text-[10px] font-semibold tracking-wide">{card.label}</span>
                  </div>
                  {/* Lime top-right dot */}
                  <div className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-[#bfff00]" />
                </div>
              ))
            ))}
          </div>

          <style>{`
            @keyframes serviceScroll {
              0%   { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
        </div>
      </section>

      {/* ── SERVICES HEADING + HOVER CARDS ── */}
      <section className="w-full bg-[#f0f0ee] py-20 px-6 sm:px-10 md:px-14 border-t border-black/6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-6">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <rect x="0" y="0" width="12" height="12" rx="2" fill="#bfff00" /><rect x="16" y="0" width="12" height="12" rx="2" fill="#bfff00" />
              <rect x="0" y="16" width="12" height="12" rx="2" fill="#bfff00" opacity="0.5" /><rect x="16" y="16" width="12" height="12" rx="2" fill="#bfff00" opacity="0.5" />
            </svg>
          </div>
          <div className="relative text-center mb-14">
            <h2 className="font-black text-black leading-[0.97] block" style={{ fontSize: "clamp(38px,7vw,92px)", letterSpacing: "-3px" }}>We build scalable software</h2>
            <h2 className="font-black text-black/18 leading-[0.97] block" style={{ fontSize: "clamp(38px,7vw,92px)", letterSpacing: "-3px" }}>that launches your business</h2>
            <h2 className="font-black text-black/18 leading-[0.97] block" style={{ fontSize: "clamp(38px,7vw,92px)", letterSpacing: "-3px" }}>beyond limits</h2>
            <div className="hidden md:block absolute left-0 top-[50%] -translate-y-1/2 max-w-[190px] text-left">
              <p className="text-black/35 text-[11px] leading-relaxed">We combine strategy, design, and code to build brands that inspire, connect, and grow across every platform.</p>
            </div>
            <div className="hidden md:block absolute right-0 top-[50%] -translate-y-1/2 max-w-[190px] text-left">
              <p className="text-black/35 text-[11px] leading-relaxed">Our creative process blends innovation with research — delivering measurable results for modern businesses.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
            {SERVICES.slice(0, 4).map((svc, i) => <ServiceCard key={i} svc={svc} idx={i} hoveredCard={hoveredCard} setHoveredCard={setHoveredCard} />)}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {SERVICES.slice(4, 8).map((svc, i) => <ServiceCard key={i + 4} svc={svc} idx={i + 4} hoveredCard={hoveredCard} setHoveredCard={setHoveredCard} />)}
          </div>
        </div>
      </section>

      {/* ── WHY MIRASTRA (USD Bloom style) ── */}
      <section className="w-full py-20 px-6 sm:px-10 md:px-16 bg-[#f0f0ee] border-t border-black/6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-12">
            <div>
              <h2 className="text-4xl sm:text-5xl font-black text-black leading-[1.06] mb-6" style={{ letterSpacing: "-1.5px" }}>
                What is<br />Mirastra Tech?
              </h2>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-black hover:bg-zinc-800 text-white text-xs font-bold px-6 py-2.5 rounded-full transition-all decoration-none cursor-pointer">
                Explore now
              </Link>
            </div>
            <div className="flex items-start md:pt-2">
              <p className="text-black/50 text-base sm:text-lg leading-relaxed">
                Mirastra Tech is a full-service digital agency that builds scalable websites, apps, and automation systems — helping your business grow faster while staying lean and fully in control.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1.35fr_1fr_1fr] gap-4 items-stretch">
            {/* Card 1 — wide lime-tinted */}
            <div className="relative rounded-[24px] overflow-hidden flex flex-col justify-between p-7 min-h-[300px]"
              style={{ background: "linear-gradient(140deg, #d6f5a8 0%, #c8ed94 50%, #bfe884 100%)" }}>
              <div className="absolute bottom-0 right-0 w-[55%] h-[75%] pointer-events-none flex items-end justify-end pr-4 pb-4" aria-hidden="true">
                <div className="relative w-32 h-32">
                  <div className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.9) 0%, rgba(191,255,0,0.6) 40%, rgba(120,200,0,0.3) 70%, transparent 100%)", boxShadow: "0 8px 32px rgba(100,180,0,0.4), inset 0 -4px 12px rgba(0,0,0,0.12)" }} />
                  <div className="absolute top-3 left-4 w-8 h-5 rounded-full" style={{ background: "rgba(255,255,255,0.55)", filter: "blur(4px)" }} />
                  <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-2 h-10 rounded-full" style={{ background: "rgba(80,140,0,0.5)" }} />
                </div>
              </div>
              <div className="relative z-10">
                <h3 className="text-black font-black text-2xl leading-tight mb-2" style={{ letterSpacing: "-0.5px" }}>Code that<br />scales with you</h3>
              </div>
              <p className="text-black/55 text-xs leading-relaxed max-w-[200px] relative z-10">
                Custom-built around your business goals — no templates, no vendor lock-in, full ownership of your source code.
              </p>
            </div>

            {/* Card 2 — dark */}
            <div className="rounded-[24px] flex flex-col justify-between p-7 min-h-[300px]" style={{ background: "#111111" }}>
              <h3 className="text-white font-black text-[1.6rem] leading-[1.1]" style={{ letterSpacing: "-0.5px" }}>
                Always shipped,<br />always stable
              </h3>
              <p className="text-white/40 text-xs leading-relaxed">
                Stay fully on-schedule with structured sprint delivery and instant access to your project status — no delays, no surprises.
              </p>
            </div>

            {/* Card 3 — dark with arrows + partial disc */}
            <div className="relative rounded-[24px] flex flex-col justify-between p-7 min-h-[300px] overflow-hidden" style={{ background: "#111111" }}>
              <div className="absolute bottom-5 right-5 flex items-center gap-1" aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M26 6 L6 26" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M8 6 H26 V24" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.35" />
                </svg>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M6 26 L26 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M24 26 H6 V8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.35" />
                </svg>
              </div>
              <div className="absolute bottom-[-36px] right-[-36px] w-32 h-32 rounded-full pointer-events-none" style={{ background: "#2a2a2a" }} />
              <h3 className="text-white font-black text-[1.6rem] leading-[1.1]" style={{ letterSpacing: "-0.5px" }}>
                100%<br />hands-free ops
              </h3>
              <p className="text-white/40 text-xs leading-relaxed max-w-[180px] relative z-10">
                No need to manage technical complexity manually. Mirastra handles deployment, security, and ongoing support for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PERFORMANCE METRICS — accordion fan ── */}
      <section className="w-full py-20 px-6 sm:px-10 md:px-16 border-t border-white/8 bg-[#080808]">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <h2
            className="text-4xl sm:text-5xl md:text-[3.2rem] font-black text-white text-center leading-[1.05] mb-14 uppercase"
            style={{ letterSpacing: "-1px" }}
          >
            PRECISION, DELIVERY,<br />
            <span className="text-[#bfff00]">RESULTS</span> — WE'VE GOT YOU COVERED.
          </h2>

          {/* Accordion cards row */}
          <AccordionCards />

        </div>
      </section>

      {/* ── STANDARDS — stats dashboard style ── */}
      <section className="w-full py-16 px-6 sm:px-10 md:px-16 border-t border-black/6 bg-[#f0f0ee]">
        <div className="max-w-5xl mx-auto flex flex-col gap-4">

          {/* ── Top card: globe + statement + 3 big stats ── */}
          <div className="rounded-[24px] border border-black/8 bg-white overflow-hidden">

            {/* Upper row: globe label left, statement right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 pb-4">
              {/* Left: globe icon + label + social dots */}
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                    <circle cx="14" cy="14" r="12" stroke="rgba(0,0,0,0.25)" strokeWidth="1.5" fill="none" />
                    <ellipse cx="14" cy="14" rx="6" ry="12" stroke="rgba(0,0,0,0.15)" strokeWidth="1" fill="none" />
                    <line x1="2" y1="14" x2="26" y2="14" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
                    <line x1="4" y1="8" x2="24" y2="8" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
                    <line x1="4" y1="20" x2="24" y2="20" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
                  </svg>
                  <div>
                    <p className="text-black/45 text-[11px] font-mono leading-tight">We support people from all</p>
                    <p className="text-black/45 text-[11px] font-mono leading-tight">over the world</p>
                  </div>
                </div>
                {/* Social icon dots */}
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#bfff00] flex items-center justify-center">
                    <svg className="w-4 h-4" fill="black" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622z" /></svg>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-black/8 border border-black/10 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5" fill="black" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-black/8 border border-black/10 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5" fill="black" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                  </div>
                </div>
              </div>

              {/* Right: bold statement */}
              <div>
                <p className="text-black font-bold text-xl sm:text-2xl leading-[1.2]" style={{ letterSpacing: "-0.5px" }}>
                  We're a <span className="text-black">results-driven tech agency passionate</span>{" "}
                  <span className="text-black/35">about building impactful digital products that drive growth for our clients</span>
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="mx-8 h-px bg-black/6" />

            {/* Stats row */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/6 px-8 py-4 md:py-8">
              {[
                { value: "25+", label: "Projects Done", sub: "Live & delivered" },
                { value: "100%", label: "Successful Rating", sub: "On-time delivery" },
                { value: "8+", label: "Service Domains", sub: "End-to-end stack" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col py-6 md:py-0 md:px-4 first:pt-0 last:pb-0 md:first:pl-0 md:last:pr-0">
                  <span className="text-black font-black leading-none mb-3"
                    style={{ fontSize: "clamp(42px,6vw,72px)", fontFamily: "'Courier New','Lucida Console',monospace", letterSpacing: "-2px" }}>
                    {stat.value}
                  </span>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#bfff00] flex-shrink-0" />
                    <span className="text-black/50 text-xs font-medium">{stat.label}</span>
                  </div>
                  <div className="h-px bg-black/10 mb-2" />
                  <span className="text-black/30 text-[10px] font-mono">{stat.sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Bottom row ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Left: tenure statement */}
            <div className="rounded-[24px] border border-black/8 bg-white p-8 flex flex-col justify-between min-h-[200px]">
              <div>
                <p className="text-black font-black leading-[0.95]"
                  style={{ fontSize: "clamp(42px,6vw,72px)", letterSpacing: "-2px" }}>
                  Over <span className="text-[#bfff00]" style={{ WebkitTextStroke: "1px #111" }}>1</span><br />year
                </p>
                <p className="text-black/35 text-sm mt-3">become the partners</p>
              </div>
              <Link to="/contact"
                className="self-start inline-flex items-center gap-2 bg-black hover:bg-zinc-800 text-white text-xs font-bold px-5 py-2.5 rounded-full transition-all decoration-none cursor-pointer mt-6">
                <ArrowUpRight size={13} /> Start a project
              </Link>
            </div>

            {/* Right: circular tech icon grid */}
            <div className="rounded-[24px] border border-black/8 bg-white p-6 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "React", bg: "#61dafb18", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="2.5" fill="#61dafb" /><ellipse cx="12" cy="12" rx="10" ry="3.5" fill="none" stroke="#61dafb" strokeWidth="1.2" /><ellipse cx="12" cy="12" rx="10" ry="3.5" fill="none" stroke="#61dafb" strokeWidth="1.2" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="10" ry="3.5" fill="none" stroke="#61dafb" strokeWidth="1.2" transform="rotate(120 12 12)" /></svg> },
                  { label: "Node", bg: "#33993318", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#339933"><path d="M12 2L2 7v10l10 5 10-5V7L12 2z" /></svg> },
                  { label: "AWS", bg: "#ff990018", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#ff9900"><path d="M12 2L2 8v8l10 6 10-6V8L12 2z" /></svg> },
                  { label: "Flutter", bg: "#54c5f818", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#54c5f8"><path d="M14 2L4 12l3 3 10-10-3-3zM10 16l4 4-3 3L4 16l3-3 3 3z" /></svg> },
                  { label: "Mongo", bg: "#47a24818", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#47a248"><path d="M12 2C9 2 7 6 7 10c0 3.5 2 6 5 7v3h1v-3c3-1 5-3.5 5-7 0-4-2-8-6-8z" /></svg> },
                  { label: "Next", bg: "#00000010", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="black"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.5 14.5V8l7 8.5H10.5z" /></svg> },
                  { label: "Vite", bg: "#646cff18", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#646cff"><path d="M12 2l10 18H2L12 2z" /></svg> },
                  { label: "TS", bg: "#3178c618", icon: <svg className="w-5 h-5" viewBox="0 0 24 24"><rect width="24" height="24" rx="3" fill="#3178c6" /><text x="4" y="18" fontSize="10" fontWeight="bold" fill="white">TS</text></svg> },
                  { label: "PG", bg: "#4169e118", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="6" rx="8" ry="3" fill="#4169e1" /><path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6" fill="none" stroke="#4169e1" strokeWidth="1.5" /></svg> },
                ].map((tech, i) => (
                  <div key={i}
                    className="w-16 h-16 rounded-full flex flex-col items-center justify-center gap-1 hover:scale-110 transition-transform duration-200 cursor-default"
                    style={{ background: tech.bg, border: "1px solid rgba(0,0,0,0.06)" }}>
                    {tech.icon}
                    <span className="text-[8px] font-mono text-black/40">{tech.label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* ── FAQ ── */}
      <section className="w-full py-20 px-6 sm:px-10 md:px-16 bg-[#eeeeec]">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <div className="flex flex-col items-center mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-white border border-black/10 rounded-full px-4 py-1.5 mb-6 shadow-sm">
              <span className="text-black/40 text-[10px] font-mono tracking-[0.15em] uppercase">010</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#bfff00]" />
              <span className="text-black/40 text-[10px] font-mono tracking-[0.15em] uppercase">FAQs</span>
            </div>
            <h2
              className="text-5xl sm:text-6xl font-black text-black leading-[1.0]"
              style={{ letterSpacing: "-2px", fontFamily: "'Georgia', serif" }}
            >
              Common Questions
            </h2>
          </div>

          {/* FAQ items */}
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-[18px] overflow-hidden transition-all duration-300"
                  style={{
                    boxShadow: isOpen
                      ? "0 0 0 1.5px rgba(100,120,255,0.5), 0 4px 20px rgba(100,120,255,0.10)"
                      : "0 1px 3px rgba(0,0,0,0.06)",
                    border: isOpen ? "none" : "1px solid rgba(0,0,0,0.07)",
                  }}
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center gap-4 bg-transparent border-none outline-none cursor-pointer text-left"
                  >
                    {/* Number */}
                    <span className="text-black/25 text-xs font-mono w-4 flex-shrink-0 text-right">
                      {idx + 1}
                    </span>
                    {/* Question */}
                    <span
                      className="flex-1 text-black leading-snug pr-4"
                      style={{
                        fontSize: "clamp(14px,1.8vw,16px)",
                        fontWeight: isOpen ? 700 : 500,
                      }}
                    >
                      {faq.q}
                    </span>
                    {/* +/× button */}
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200"
                      style={{
                        background: isOpen ? "white" : "#111",
                        border: isOpen ? "1.5px solid rgba(100,120,255,0.4)" : "none",
                      }}
                    >
                      {isOpen ? (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M1 1L11 11M11 1L1 11" stroke="#666" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                      ) : (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M6 1V11M1 6H11" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                      )}
                    </div>
                  </button>

                  {/* Answer — slides open */}
                  {isOpen && (
                    <div className="px-6 pb-6 pl-[3.25rem]">
                      <p className="text-black/45 text-sm leading-[1.8]">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-black/40 text-sm mb-2">Have any other questions?</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-black text-sm font-semibold underline underline-offset-4 decoration-black/30 hover:decoration-black transition-all decoration-none cursor-pointer"
            >
              Contact Us
              <div className="w-5 h-5 rounded-full border border-black/20 flex items-center justify-center">
                <ArrowUpRight size={10} className="text-black/50" />
              </div>
            </Link>
          </div>

        </div>
      </section>

      {/* ── CTA SECTION (same as homepage) ── */}
      <section className="w-full bg-black px-6 sm:px-12 md:px-20 py-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div
            className="relative rounded-[28px] overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 px-10 py-12 md:py-14"
            style={{ background: "linear-gradient(135deg, #1c1c1e 0%, #2a2a2e 50%, #1a1a1c 100%)" }}
          >
            <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjY1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')] pointer-events-none" />

            {/* Left: text + CTA */}
            <div className="relative z-10 flex flex-col gap-5 max-w-lg">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight">
                Ready to Build Your<br />
                <span className="text-white/60">Digital Presence?</span>
              </h2>
              <p className="text-white/45 text-sm leading-relaxed">
                Partner with Mirastra Tech to craft scalable websites, apps, and automation solutions. Start your project today — fast delivery, expert execution.
              </p>
              <div className="flex items-center gap-4 mt-1">
                <Link to="/contact"
                  className="bg-white hover:bg-white/90 text-black text-xs font-bold px-7 py-3.5 rounded-full tracking-widest uppercase decoration-none cursor-pointer inline-flex items-center gap-2 transition-all">
                  Get Started <ArrowUpRight size={13} />
                </Link>
                <a href="mailto:mirastratech@gmail.com"
                  className="text-white/40 text-xs font-semibold hover:text-white transition-colors decoration-none cursor-pointer">
                  or Email Us →
                </a>
              </div>
            </div>

            {/* Right: floating UI mockup cards */}
            <div className="relative z-10 flex-shrink-0 w-full md:w-[420px] h-[220px] hidden md:block">
              <div className="absolute right-8 top-0 w-[220px] bg-[#111] border border-white/10 rounded-[16px] overflow-hidden shadow-2xl rotate-[3deg]">
                <div className="bg-zinc-900 px-3 py-2 flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500/60" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                  <div className="w-2 h-2 rounded-full bg-emerald-500/60" />
                  <div className="flex-1 h-3 bg-white/5 rounded-full ml-2" />
                </div>
                <div className="p-3 flex flex-col gap-1.5">
                  <div className="h-2 bg-white/10 rounded-full w-3/4" />
                  <div className="h-2 bg-white/6 rounded-full w-full" />
                  <div className="h-2 bg-white/6 rounded-full w-5/6" />
                  <div className="mt-1 h-12 bg-gradient-to-r from-[#bfff00]/10 to-emerald-900/20 rounded-lg border border-white/5" />
                  <div className="h-2 bg-white/6 rounded-full w-2/3" />
                </div>
              </div>
              <div className="absolute left-4 top-8 w-[160px] bg-[#bfff00] rounded-[14px] p-4 shadow-xl -rotate-[2deg]">
                <p className="text-black/50 text-[9px] font-mono uppercase tracking-widest">Project Status</p>
                <p className="text-black font-black text-2xl leading-tight mt-0.5">100%</p>
                <p className="text-black/60 text-[10px] font-medium">On-Time Delivery</p>
                <div className="mt-2 h-1.5 bg-black/15 rounded-full overflow-hidden">
                  <div className="h-full bg-black/40 rounded-full w-full" />
                </div>
              </div>
              <div className="absolute right-2 bottom-0 w-[180px] bg-white rounded-[14px] p-4 shadow-xl rotate-[1deg]">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#bfff00] flex items-center justify-center text-black text-[10px] font-bold flex-shrink-0">MT</div>
                  <div>
                    <p className="text-black font-bold text-xs leading-tight">Mirastra Tech</p>
                    <p className="text-black/40 text-[9px]">MSME Registered</p>
                  </div>
                </div>
                <div className="flex text-[#bfff00]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                  ))}
                </div>
                <p className="text-black/40 text-[9px] mt-1">Est. May 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER (same as homepage) ── */}
      <footer className="w-full bg-black relative overflow-hidden border-t border-white/5">
        {/* Giant brand name */}
        <div className="relative w-full overflow-hidden select-none" style={{ lineHeight: 0.85 }}>
          <h2 className="font-black text-center w-full px-4"
            style={{
              fontSize: "clamp(72px, 18vw, 260px)",
              letterSpacing: "-0.03em",
              paddingBottom: "0.05em",
              background: "linear-gradient(180deg, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.06) 55%, rgba(255,255,255,0.02) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
            Mirastra
          </h2>
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </div>

        {/* Bottom info bar */}
        <div className="relative z-10 border-t border-white/6 px-8 sm:px-12 md:px-16 py-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">

            {/* Col 1: logo + address + status + socials */}
            <div className="md:col-span-3 flex flex-col gap-5">
              <img src="/mirastra_wlogo.png" alt="Mirastra Tech" className="h-25 w-auto object-contain object-left" />
              <p className="text-white/30 text-xs leading-relaxed font-mono">
                Mirastra Tech<br />MSME Registered, India<br />Serving Clients Worldwide
              </p>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/8 rounded-full px-3 py-1.5 self-start">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_4px_rgba(52,211,153,0.8)] animate-pulse" />
                <span className="text-white/50 text-[10px] font-mono uppercase tracking-wider">All systems operational</span>
              </div>
              <div className="flex items-center gap-3">
                {[
                  { href: "https://www.facebook.com/profile.php?id=61590068837109", icon: <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/></svg> },
                  { href: "https://www.instagram.com/mirastratech/", icon: <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-white/15 transition-all duration-200">{s.icon}</a>
                ))}
              </div>
            </div>

            {/* Nav columns */}
            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
              {/* Services Column */}
              <div className="flex flex-col gap-3">
                <p className="text-white/60 text-[11px] font-semibold uppercase tracking-[0.18em]">Services</p>
                <Link to="/services" className="text-white/28 text-xs hover:text-white/70 transition-colors decoration-none leading-snug">Website Development</Link>
                <Link to="/services" className="text-white/28 text-xs hover:text-white/70 transition-colors decoration-none leading-snug">Web Applications</Link>
                <Link to="/services" className="text-white/28 text-xs hover:text-white/70 transition-colors decoration-none leading-snug">Mobile Apps</Link>
                <Link to="/services" className="text-white/28 text-xs hover:text-white/70 transition-colors decoration-none leading-snug">Custom Software</Link>
                <Link to="/services" className="text-white/28 text-xs hover:text-white/70 transition-colors decoration-none leading-snug">Browser Extensions</Link>
              </div>
              {/* Solutions Column */}
              <div className="flex flex-col gap-3">
                <p className="text-white/60 text-[11px] font-semibold uppercase tracking-[0.18em]">Solutions</p>
                <Link to="/services" className="text-white/28 text-xs hover:text-white/70 transition-colors decoration-none leading-snug">Automation</Link>
                <Link to="/services" className="text-white/28 text-xs hover:text-white/70 transition-colors decoration-none leading-snug">Digital Marketing</Link>
                <Link to="/services" className="text-white/28 text-xs hover:text-white/70 transition-colors decoration-none leading-snug">QA Testing</Link>
                <Link to="/services" className="text-white/28 text-xs hover:text-white/70 transition-colors decoration-none leading-snug">UI/UX Design</Link>
                <Link to="/contact" className="text-white/28 text-xs hover:text-white/70 transition-colors decoration-none leading-snug">Consulting</Link>
              </div>
              {/* Company Column */}
              <div className="flex flex-col gap-3">
                <p className="text-white/60 text-[11px] font-semibold uppercase tracking-[0.18em]">Company</p>
                <Link to="/about" className="text-white/28 text-xs hover:text-white/70 transition-colors decoration-none leading-snug">About Us</Link>
                <Link to="/works" className="text-white/28 text-xs hover:text-white/70 transition-colors decoration-none leading-snug">Our Works</Link>
                <Link to="/contact" className="text-white/28 text-xs hover:text-white/70 transition-colors decoration-none leading-snug">Contact</Link>
              </div>
              {/* Legal Column */}
              <div className="flex flex-col gap-3">
                <p className="text-white/60 text-[11px] font-semibold uppercase tracking-[0.18em]">Legal</p>
                <span className="text-white/28 text-xs leading-snug cursor-default">Privacy Policy</span>
                <span className="text-white/28 text-xs leading-snug cursor-default">Terms of Service</span>
                <span className="text-white/28 text-xs leading-snug cursor-default">Refund Policy</span>
                <span className="text-white/28 text-xs leading-snug cursor-default">Cookie Policy</span>
              </div>
            </div>

            {/* Right: email + WhatsApp icon buttons */}
            <div className="md:col-span-2 flex flex-col gap-3 items-end justify-start">
              <a href="mailto:mirastratech@gmail.com"
                className="w-14 h-14 rounded-[16px] bg-[#1c1c1e] border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/8 hover:border-white/20 transition-all duration-200" title="Email Us">
                <ArrowUpRight size={22} />
              </a>
              <a href="https://wa.me/917871873038" target="_blank" rel="noopener noreferrer"
                className="w-14 h-14 rounded-[16px] bg-[#1c1c1e] border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/8 hover:border-white/20 transition-all duration-200" title="WhatsApp">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              </a>
            </div>
          </div>

          {/* Copyright strip */}
          <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/20 text-[10px] font-mono uppercase tracking-widest">© 2026 Mirastra Tech — MSME Registered</p>
            <p className="text-white/15 text-[10px] font-mono">Building the Future. Beyond Limits.</p>
          </div>
        </div>
      </footer>

    </main>
  );
}

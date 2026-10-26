import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import Nav from "../components/Nav";
import {
  ArrowUpRight,
  Target,
  Compass,
} from "lucide-react";
import Antigravity from "../components/reactbits/Antigravity";
import SplitText from "../components/reactbits/SplitText";
import FadeContent from "../components/reactbits/FadeContent";
import TiltedCard from "../components/reactbits/TiltedCard";
import SpotlightCard from "../components/reactbits/SpotlightCard";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Mirastra Tech" },
      {
        name: "description",
        content:
          "Learn about Mirastra Tech — an MSME-registered technology solutions company. Discover our mission, vision, and 7-stage development process.",
      },
    ],
  }),
  component: About,
});

function About() {
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const homeTags = [
    "Web Dev",
    "Mobile Apps",
    "SaaS Dashboards",
    "QA Testing",
    "CRM & ERP",
    "Workflow Automation"
  ];

  return (
    <main className="w-full bg-[#eeeeec] text-black min-h-screen relative font-sans overflow-hidden">
      {/* Navigation */}
      <Nav theme={isScrolled ? "light" : "dark"} />

      {/* 1. REDESIGNED HERO SECTION (Cinematic Dark Theme) */}
      <div className="w-full min-h-screen relative overflow-hidden flex flex-col items-center justify-center bg-[#080809] text-white pt-28 pb-16 px-6 sm:px-12">
        
        {/* Background WebGL Particle Network */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          {isMounted && (
            <Antigravity
              count={300}
              magnetRadius={6}
              ringRadius={7}
              waveSpeed={0.4}
              waveAmplitude={1}
              particleSize={1.5}
              lerpSpeed={0.15}
              color="#5227FF"
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
        <div className="absolute top-[-20%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none z-0" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#bfff00]/5 blur-[120px] pointer-events-none z-0" />

        {/* Hero Content Wrapper */}
        <div className="relative z-10 max-w-7xl w-full flex flex-col items-center">
          
          {/* Pill Badge */}
          <FadeContent delay={0.1} y={15}>
            <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] backdrop-blur-md rounded-full px-4 py-1.5 mb-6 shadow-xl">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bfff00] animate-pulse flex-shrink-0" />
              <span className="text-white/60 text-[10px] font-mono tracking-[0.15em] uppercase">
                Welcome to Mirastra Tech
              </span>
            </div>
          </FadeContent>

          {/* Headline */}
          <h1 className="flex flex-col items-center justify-center text-center">
            <SplitText
              text="WE CRAFT DIGITAL"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] uppercase"
              delay={0.03}
              duration={0.6}
            />
            <FadeContent delay={0.35} y={12}>
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-instrument italic font-light tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-[#bfff00] mt-2 block">
                experiences that last.
              </span>
            </FadeContent>
          </h1>

          {/* Subheading */}
          <FadeContent delay={0.5} y={15}>
            <p className="text-white/55 text-sm sm:text-base max-w-lg text-center leading-relaxed mt-6 mb-8 font-sans">
              We bridge the gap between robust engineering and intuitive interface design, building digital platforms that enable growing businesses to thrive.
            </p>
          </FadeContent>

          {/* Action Buttons */}
          <FadeContent delay={0.6} y={15}>
            <div className="flex items-center gap-4 flex-wrap justify-center mb-16">
              <Link
                to="/contact"
                className="bg-[#bfff00] hover:bg-[#d4ff33] text-black text-xs font-bold px-8 py-3.5 rounded-full inline-flex items-center gap-2 transition-all tracking-wider uppercase shadow-lg shadow-lime-500/20 active:scale-95 cursor-pointer border-none outline-none"
                style={{ boxShadow: "0 6px 20px rgba(191,255,0,0.25)" }}
              >
                Start a Project
                <div className="w-4 h-4 rounded-full bg-black/10 flex items-center justify-center">
                  <ArrowUpRight size={10} className="text-black" />
                </div>
              </Link>
              <Link
                to="/services"
                className="bg-white/[0.04] hover:bg-white/[0.08] text-white text-xs font-bold px-8 py-3.5 rounded-full border border-white/[0.08] inline-flex items-center gap-2 transition-all tracking-wider uppercase cursor-pointer"
              >
                Our Services
              </Link>
            </div>
          </FadeContent>

          {/* Core Values / Cards Layout */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mt-4">
            
            {/* Card 1: Our Mission */}
            <FadeContent delay={0.7} y={20}>
              <TiltedCard maxTilt={10} scale={1.02} className="h-full">
                <SpotlightCard
                  className="h-full bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-[24px] p-8 shadow-2xl transition-all duration-300 hover:border-[#3a8cd7]/30"
                  spotlightColor="rgba(58, 140, 215, 0.12)"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#3a8cd7]/15 flex items-center justify-center text-[#3a8cd7]">
                      <Target size={24} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Pillar One</span>
                      <h3 className="text-white font-bold text-lg leading-tight">Our Mission</h3>
                    </div>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">
                    To accelerate business growth by delivering performant custom software, user-centric web applications, and workflow automations that run autonomously.
                  </p>
                </SpotlightCard>
              </TiltedCard>
            </FadeContent>

            {/* Card 2: Our Approach */}
            <FadeContent delay={0.8} y={20}>
              <TiltedCard maxTilt={10} scale={1.02} className="h-full">
                <SpotlightCard
                  className="h-full bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-[24px] p-8 shadow-2xl transition-all duration-300 hover:border-[#bfff00]/30"
                  spotlightColor="rgba(191, 255, 0, 0.1)"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#bfff00]/15 flex items-center justify-center text-[#bfff00]">
                      <Compass size={24} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Pillar Two</span>
                      <h3 className="text-white font-bold text-lg leading-tight">Our Approach</h3>
                    </div>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">
                    A detailed 7-stage software development lifecycle that bridges strategic business goals with solid engineering to ensure on-time, zero-defect delivery.
                  </p>
                </SpotlightCard>
              </TiltedCard>
            </FadeContent>

          </div>

        </div>

      </div>

      {/* 2. ABOUT US SECTION */}
      <section className="w-full bg-[#eeeeec] py-16 px-6 sm:px-10 md:px-16 z-10 relative mt-6">
        <div className="max-w-6xl mx-auto flex flex-col gap-4">

          {/* ── ROW 1: Text left + Photo right ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">

            {/* Left: label + headline + body */}
            <div className="bg-white rounded-[24px] p-8 md:p-10 flex flex-col justify-between min-h-[280px]">
              {/* Label pill */}
              <div className="inline-flex self-start items-center border border-black/15 rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-widest text-black/50 uppercase mb-6">
                About us
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <h2
                  className="text-3xl sm:text-4xl font-black tracking-tight text-black leading-[1.1] mb-5"
                  style={{ letterSpacing: "-1px" }}
                >
                  Meet Mirastra: Your Tech Partners
                </h2>
                <p className="text-black/50 text-sm leading-relaxed max-w-md">
                  We're not just developers — we're creators, problem solvers, and your brand's best
                  allies. At Mirastra Tech, we live and breathe technology, from captivating websites
                  to seamless software experiences. Think of us as an extension of your team, ready
                  to bring your ideas to life.
                </p>
              </div>
            </div>

            {/* Right: team photo with star doodle */}
            <div className="relative rounded-[24px] overflow-hidden min-h-[280px]">
              {/* Star / sparkle doodle — top-left corner */}
              <div className="absolute top-4 left-4 z-10 pointer-events-none" aria-hidden="true">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                  <path d="M26 4 L28.5 22 L46 26 L28.5 30 L26 48 L23.5 30 L6 26 L23.5 22 Z" stroke="black" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
                  <path d="M26 14 L27.2 23 L36 26 L27.2 29 L26 38 L24.8 29 L16 26 L24.8 23 Z" stroke="black" strokeWidth="1" fill="none" strokeLinejoin="round" opacity="0.4"/>
                </svg>
              </div>

              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=700&h=500&q=80"
                alt="Mirastra team collaborating"
                className="w-full h-full object-cover"
                style={{ filter: "grayscale(100%) contrast(0.88) brightness(1.04)" }}
              />
              {/* Subtle vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
            </div>

          </div>

          {/* ── ROW 2: Wide dark card ── */}
          <div
            className="w-full rounded-[24px] overflow-hidden relative min-h-[280px] flex flex-col md:flex-row"
            style={{ background: "#0e0e0e" }}
          >
            {/* ── Concentric wavy lines background ── */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
              <svg
                className="absolute left-[-10%] top-[-20%] w-[85%] h-[140%] opacity-[0.18]"
                viewBox="0 0 500 500"
                fill="none"
              >
                {Array.from({ length: 18 }).map((_, i) => (
                  <ellipse
                    key={i}
                    cx="250"
                    cy="500"
                    rx={80 + i * 22}
                    ry={60 + i * 18}
                    stroke="white"
                    strokeWidth="1"
                    fill="none"
                  />
                ))}
              </svg>
            </div>

            {/* Left content: stat + tags */}
            <div className="relative z-10 flex flex-col justify-between p-8 md:p-10 md:w-[58%]">
              {/* Stat */}
              <div>
                <p
                  className="text-white font-black leading-none mb-2"
                  style={{ fontSize: "clamp(52px, 8vw, 80px)", letterSpacing: "-2px" }}
                >
                  14+
                </p>
                <p className="text-white/45 text-xs font-medium tracking-wide">
                  Clients launched and counting
                </p>
              </div>

              {/* Slanted white pill tags */}
              <div className="flex flex-wrap gap-2.5 mt-10">
                {[
                  { label: "Web Dev",            rot: "-rotate-2" },
                  { label: "App Design",         rot: "rotate-2"  },
                  { label: "SaaS Builds",        rot: "-rotate-1" },
                  { label: "Product Design",     rot: "rotate-3"  },
                  { label: "QA Testing",         rot: "-rotate-3" },
                  { label: "Brand Positioning",  rot: "rotate-1"  },
                ].map((tag, i) => (
                  <span
                    key={i}
                    className={`inline-block bg-white text-black text-[11px] font-bold tracking-wide px-5 py-2 rounded-full shadow-md transform ${tag.rot} hover:rotate-0 hover:scale-105 transition-all duration-300 cursor-default`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: photo inset — tucked into bottom-right corner */}
            <div className="relative md:w-[42%] flex items-end justify-end p-4 md:p-5 mt-auto">
              <div className="w-full rounded-[18px] overflow-hidden" style={{ maxHeight: "200px" }}>
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&h=380&q=80"
                  alt="Team at work"
                  className="w-full h-full object-cover object-top"
                  style={{
                    filter: "grayscale(100%) contrast(0.85) brightness(1.05)",
                    maxHeight: "200px",
                  }}
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FEATURE GRID SECTION — 2×2 bento cards */}
      <section className="w-full bg-white py-16 px-6 sm:px-12 md:px-20">
        <div className="max-w-5xl mx-auto">

          {/* Left-aligned headline like reference */}
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-black tracking-tight text-black leading-[1.1] mb-10 max-w-xl">
            Build. Launch. Scale.<br />
            Wherever your business grows.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Card 1 — Website Development */}
            <div className="bg-white rounded-[20px] p-6 flex flex-col gap-5 border border-black/6 hover:shadow-lg transition-all duration-300 min-h-[320px]">
              {/* Visual mockup */}
              <div className="flex-1 flex flex-col items-center justify-center gap-3 bg-[#f0f0ee] rounded-[14px] p-5 relative overflow-hidden">
                {/* Browser bar */}
                <div className="w-full bg-white rounded-xl px-4 py-2.5 shadow-sm border border-black/6 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-400/70" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400/70" />
                    <div className="w-2 h-2 rounded-full bg-green-400/70" />
                  </div>
                  <div className="bg-black text-white text-[9px] font-bold px-3 py-1 rounded-full">Book a Call ›</div>
                </div>
                {/* Nav icons row */}
                <div className="flex items-center gap-3 self-start px-1 text-black/25 text-xl">
                  <span>⌂</span><span>□</span><span>✕</span>
                </div>
                {/* Skeleton lines */}
                <div className="w-full space-y-2 px-1">
                  <div className="h-2 bg-black/8 rounded-full w-3/4" />
                  <div className="h-2 bg-black/5 rounded-full w-full" />
                  <div className="h-2 bg-black/5 rounded-full w-5/6" />
                </div>
                <div className="self-start pl-1 text-black/15 text-2xl select-none">↩</div>
              </div>
              <div>
                <h3 className="text-black font-bold text-lg leading-tight mb-1.5">Website Development</h3>
                <p className="text-black/45 text-xs leading-relaxed">Responsive, fast-loading websites built for conversion — static, dynamic, animated, and SEO-ready. Delivered to timeline.</p>
              </div>
            </div>

            {/* Card 2 — Mobile App Development */}
            <div className="bg-white rounded-[20px] p-6 flex flex-col gap-5 border border-black/6 hover:shadow-lg transition-all duration-300 min-h-[320px]">
              {/* Visual: feature list rows */}
              <div className="flex-1 flex flex-col gap-2.5 justify-center">
                {[
                  { icon: "📱", label: "Android & iOS", sub: "Cross-platform native builds" },
                  { icon: "⚡", label: "React Native", sub: "High-performance mobile UI" },
                  { icon: "🔗", label: "API Integrations", sub: "Backend connected & synced" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-[#f0f0ee] rounded-[12px] px-4 py-3 border border-black/5">
                    <div className="w-9 h-9 rounded-xl bg-white border border-black/8 flex items-center justify-center text-base flex-shrink-0 shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-black font-semibold text-xs leading-tight">{item.label}</p>
                      <p className="text-black/35 text-[10px] mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <h3 className="text-black font-bold text-lg leading-tight mb-1.5">Mobile App Development</h3>
                <p className="text-black/45 text-xs leading-relaxed">Android and iOS apps built with React Native — performant, intuitive, and ready for the Play Store &amp; App Store.</p>
              </div>
            </div>

            {/* Card 3 — Custom Software */}
            <div className="bg-white rounded-[20px] p-6 flex flex-col gap-5 border border-black/6 hover:shadow-lg transition-all duration-300 min-h-[320px]">
              {/* Visual: stacked pill arc */}
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="relative w-48 h-36 flex items-end justify-center">
                  {[
                    { label: "CRM System",    bg: "#111", w: "160px", bottom: "0px"  },
                    { label: "ERP Platform",  bg: "#2a2a2e", w: "124px", bottom: "26px" },
                    { label: "HRM Module",    bg: "#444",   w: "88px",  bottom: "52px" },
                  ].map((pill, i) => (
                    <div key={i} className="absolute h-10 rounded-full flex items-center justify-center shadow-md"
                      style={{ background: pill.bg, width: pill.w, bottom: pill.bottom }}>
                      <span className="text-white text-[11px] font-bold tracking-wide">{pill.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-black font-bold text-lg leading-tight mb-1.5">Custom Software Development</h3>
                <p className="text-black/45 text-xs leading-relaxed">Tailor-made CRM, ERP, HRM, and billing systems built to fit your exact workflow and scale with your business.</p>
              </div>
            </div>

            {/* Card 4 — Automation & Digital Marketing */}
            <div className="bg-white rounded-[20px] p-6 flex flex-col gap-5 border border-black/6 hover:shadow-lg transition-all duration-300 min-h-[320px]">
              {/* Visual: concentric orbit diagram */}
              <div className="flex-1 flex items-center justify-center">
                <div className="relative w-40 h-40">
                  <div className="absolute inset-0 rounded-full border border-black/8" />
                  <div className="absolute inset-5 rounded-full border border-black/6" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center shadow-lg">
                      <span className="text-white text-lg">⚙️</span>
                    </div>
                  </div>
                  {/* Orbit dots */}
                  {[0, 120, 240].map((deg, i) => (
                    <div key={i} className="absolute w-3 h-3 rounded-full bg-black/15 border-2 border-white shadow"
                      style={{
                        top:  `calc(50% + ${Math.sin(deg * Math.PI / 180) * 56}px - 6px)`,
                        left: `calc(50% + ${Math.cos(deg * Math.PI / 180) * 56}px - 6px)`,
                      }} />
                  ))}
                  {/* Floating labels */}
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-black text-white text-[9px] font-bold px-3 py-1 rounded-full whitespace-nowrap shadow-lg">Responsive</div>
                  <div className="absolute -bottom-5 right-0 bg-black text-white text-[9px] font-bold px-3 py-1 rounded-full whitespace-nowrap shadow-lg">Under 3s</div>
                </div>
              </div>
              <div>
                <h3 className="text-black font-bold text-lg leading-tight mb-1.5">Automation &amp; Digital Marketing</h3>
                <p className="text-black/45 text-xs leading-relaxed">Workflow bots, lead scrapers, Meta Ads, social media handling, and automation pipelines — always running, always live.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── GROWTH SECTION ── */}
      <section className="w-full bg-[#eeeeec] py-20 px-6 sm:px-12 md:px-20">
        <div className="max-w-5xl mx-auto">

          {/* Centered headline */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-[58px] font-black tracking-tight text-black leading-[1.06] mb-4">
              We drive growth to<br />
              your business{" "}
              <span className="inline-block align-middle text-3xl sm:text-4xl">↗</span>
            </h2>
            <p className="text-black/45 text-sm sm:text-base max-w-md mx-auto leading-relaxed mb-8">
              Unlock your brand's potential with our proven technology expertise. From strategy to execution, we build and ship what matters.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#bfff00] hover:bg-[#aee600] text-black text-sm font-bold px-7 py-3 rounded-full transition-all decoration-none cursor-pointer shadow-md"
            >
              Book a call
              <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight size={12} className="text-[#bfff00]" />
              </div>
            </Link>
          </div>

          {/* 3-col bento row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

            {/* Card 1 — Services tag cloud */}
            <div className="bg-white rounded-[20px] p-6 border border-black/6 flex flex-col gap-5 min-h-[260px]">
              <p className="text-black font-semibold text-sm">Services</p>
              <div className="flex-1 flex flex-wrap gap-2 content-center">
                {[
                  { label: "Web Design",       bg: "#111",      color: "white"  },
                  { label: "Social Media",     bg: "transparent", color: "black", border: true },
                  { label: "Marketing",        bg: "#111",      color: "white"  },
                  { label: "Paid Ads",         bg: "transparent", color: "black", border: true },
                  { label: "Branding",         bg: "#111",      color: "white"  },
                  { label: "Content Creation", bg: "transparent", color: "black", border: true },
                  { label: "SEO",              bg: "#bfff00",   color: "black"  },
                  { label: "Automation",       bg: "transparent", color: "black", border: true },
                ].map((tag, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-semibold px-3 py-1.5 rounded-full cursor-default"
                    style={{
                      background: tag.bg,
                      color: tag.color,
                      border: tag.border ? "1.5px solid rgba(0,0,0,0.15)" : "none",
                    }}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 2 — Stats */}
            <div className="flex flex-col gap-4">
              <div className="bg-black rounded-[20px] p-6 flex flex-col gap-1 flex-1">
                <span className="text-4xl font-black text-[#bfff00] leading-none">14+</span>
                <span className="text-white/50 text-xs leading-relaxed mt-1">clients have interacted with digital products built by us</span>
              </div>
              <div className="bg-[#bfff00] rounded-[20px] p-6 flex flex-col gap-1 flex-1">
                <span className="text-4xl font-black text-black leading-none">100%</span>
                <span className="text-black/60 text-xs leading-relaxed mt-1">on-time delivery across all projects shipped</span>
              </div>
            </div>

            {/* Card 3 — Testimonial */}
            <div className="bg-white rounded-[20px] p-6 border border-black/6 flex flex-col justify-between min-h-[260px]">
              <div className="text-3xl text-black/20 font-serif leading-none mb-3">"</div>
              <div className="flex-1">
                <p className="text-black font-semibold text-base leading-snug mb-1">
                  The final product exceeded my expectations.
                </p>
                <p className="text-black/50 text-sm">Impressed with the results!</p>
              </div>
              <div className="flex items-center gap-2 mt-4 pt-3 border-t border-black/6">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full bg-[#bfff00] border-2 border-white flex-shrink-0" />
                  <div className="w-7 h-7 rounded-full bg-black border-2 border-white flex-shrink-0" />
                </div>
                <span className="text-black/35 text-[10px] font-mono">Client Review</span>
                <div className="flex text-[#bfff00] ml-auto">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US — dark bg, 2×2 reasons grid ── */}
      <section className="w-full bg-black text-white py-20 px-6 sm:px-12 md:px-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

          {/* Left: headline */}
          <div className="md:col-span-4">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-[1.15]">
              Why our clients<br />choose us as<br />partners
            </h2>
          </div>

          {/* Right: 2×2 reasons */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <rect x="0"  y="0"  width="12" height="12" rx="2" fill="#bfff00"/>
                    <rect x="16" y="0"  width="12" height="12" rx="2" fill="#bfff00"/>
                    <rect x="0"  y="16" width="12" height="12" rx="2" fill="#bfff00" opacity="0.5"/>
                    <rect x="16" y="16" width="12" height="12" rx="2" fill="#bfff00" opacity="0.5"/>
                  </svg>
                ),
                title: "Expertise & Specialisation",
                desc: "Access a team with capabilities across web, mobile, software, and automation — ensuring your projects are well-rounded and effective.",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <rect x="0"  y="0"  width="12" height="12" rx="2" fill="#bfff00"/>
                    <rect x="16" y="0"  width="12" height="12" rx="2" fill="#bfff00" opacity="0.5"/>
                    <rect x="0"  y="16" width="12" height="12" rx="2" fill="#bfff00" opacity="0.5"/>
                    <rect x="16" y="16" width="12" height="12" rx="2" fill="#bfff00"/>
                  </svg>
                ),
                title: "Fresh Perspectives",
                desc: "We bring an outsider's perspective to your brand. This fresh viewpoint helps you stay ahead of competitors and adapt to changing digital trends.",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <rect x="0"  y="0"  width="12" height="12" rx="2" fill="#bfff00" opacity="0.5"/>
                    <rect x="16" y="0"  width="12" height="12" rx="2" fill="#bfff00"/>
                    <rect x="0"  y="16" width="12" height="12" rx="2" fill="#bfff00"/>
                    <rect x="16" y="16" width="12" height="12" rx="2" fill="#bfff00" opacity="0.5"/>
                  </svg>
                ),
                title: "Scalability & Flexibility",
                desc: "Whether you're a small startup or a large corporation, we scale our services to meet your needs — adapting as your business grows.",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <rect x="4"  y="4"  width="8"  height="8"  rx="2" fill="#bfff00"/>
                    <rect x="16" y="4"  width="8"  height="8"  rx="2" fill="#bfff00" opacity="0.6"/>
                    <rect x="4"  y="16" width="8"  height="8"  rx="2" fill="#bfff00" opacity="0.6"/>
                    <rect x="16" y="16" width="8"  height="8"  rx="2" fill="#bfff00"/>
                  </svg>
                ),
                title: "Resource Optimisation",
                desc: "Instead of hiring and training an in-house team, you gain top-tier expertise without the overhead — saving both time and money.",
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-3">
                <div>{item.icon}</div>
                <h3 className="text-white font-bold text-base leading-tight">{item.title}</h3>
                <p className="text-white/45 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── OUR ADVANTAGES ── */}
      <section className="w-full bg-[#f0f0ee] py-16 px-6 sm:px-10 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col gap-6">

          {/* Header row */}
          <div className="flex items-start justify-between gap-6">
            <p className="text-black/40 text-sm font-medium mt-1 max-w-[180px] leading-snug">
              Your Goals,<br />Our Expertise
            </p>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-black text-black tracking-tight text-right"
              style={{ letterSpacing: "-2px" }}
            >
              Our Advantages
            </h2>
          </div>

          {/* 3-column advantage cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                num: "01",
                title: "Tailored Digital Solutions",
                desc: "Every project is custom-built around your business goals — no templates, no shortcuts.",
              },
              {
                num: "02",
                title: "Precision And Speed",
                desc: "We ship fast without compromising on quality — clean code, pixel-perfect design, on-time delivery.",
              },
              {
                num: "03",
                title: "End-to-End Execution",
                desc: "From strategy and design to development and launch, we handle every step under one roof.",
              },
            ].map((adv, i) => (
              <div
                key={i}
                className="bg-white rounded-[20px] p-6 flex flex-col justify-between min-h-[260px] hover:shadow-md transition-all duration-300 group"
              >
                {/* Top row: pill + arrow */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center border border-black/15 rounded-full px-3 py-1 text-[10px] font-semibold tracking-widest text-black/45 uppercase">
                    Advantage
                  </span>
                  {/* Diagonal arrow */}
                  <div className="w-9 h-9 rounded-full border border-black/15 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all duration-300">
                    <svg
                      width="14" height="14" viewBox="0 0 14 14" fill="none"
                      className="group-hover:stroke-white transition-all duration-300"
                    >
                      <path d="M2.5 11.5 L11.5 2.5 M5 2.5 H11.5 V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-black font-bold text-xl leading-tight mt-4" style={{ letterSpacing: "-0.3px" }}>
                  {adv.title}
                </h3>

                {/* Large number + explore button */}
                <div className="flex items-end justify-between mt-auto pt-6">
                  <span
                    className="text-black font-black leading-none select-none"
                    style={{
                      fontSize: "clamp(56px, 8vw, 80px)",
                      letterSpacing: "-3px",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {adv.num}
                  </span>
                  <button className="inline-flex items-center gap-2 border border-black/15 rounded-full px-4 py-1.5 text-[11px] font-semibold text-black/50 hover:text-black hover:border-black/40 transition-all duration-200 cursor-pointer bg-transparent">
                    explore
                    <span className="w-4 h-4 rounded-full border border-black/20 flex items-center justify-center text-[9px]">↗</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Wide banner card */}
          <div
            className="relative w-full rounded-[24px] overflow-hidden min-h-[280px] md:min-h-[320px]"
            style={{ background: "#0d0d0d" }}
          >
            {/* Lime radial glow background */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 70% 60% at 70% 50%, rgba(191,255,0,0.08) 0%, transparent 70%)" }}
            />
            {/* Full-bleed tech image with dark blend */}
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&h=500&q=80"
              alt="Technology and innovation"
              className="absolute inset-0 w-full h-full object-cover object-center"
              style={{ mixBlendMode: "luminosity", opacity: 0.18 }}
            />

            {/* Top-right CTA buttons */}
            <div className="absolute top-5 right-5 flex items-center gap-2 z-10">
              <Link
                to="/contact"
                className="bg-[#bfff00] hover:bg-[#d4ff33] text-black text-[11px] font-bold px-5 py-2 rounded-full shadow transition-all decoration-none cursor-pointer"
              >
                Start a project
              </Link>
              <Link
                to="/services"
                className="bg-white/10 backdrop-blur-sm text-white text-[11px] font-bold px-5 py-2 rounded-full border border-white/15 hover:bg-white/20 transition-all decoration-none cursor-pointer"
              >
                Our Services →
              </Link>
            </div>

            {/* Bottom-left floating stat card */}
            <div className="absolute bottom-5 left-5 z-10">
              <div className="bg-white rounded-[16px] p-5 shadow-2xl" style={{ minWidth: "180px" }}>
                <p className="text-[10px] font-semibold text-black/40 uppercase tracking-widest mb-1">Satisfaction Rate</p>
                <p className="text-black/50 text-xs leading-snug mb-3 max-w-[150px]">
                  Average of client satisfaction across every project
                </p>
                <div className="mb-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="opacity-30">
                    <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="1.5"/>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="9" cy="10" r="1" fill="black"/>
                    <circle cx="15" cy="10" r="1" fill="black"/>
                  </svg>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black text-black leading-none tracking-tight">92</span>
                  <span className="text-black/50 text-sm font-semibold">%</span>
                </div>
              </div>
            </div>

            {/* Centre text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <p className="text-white/8 text-[80px] md:text-[120px] font-black tracking-tighter select-none leading-none">
                MIRASTRA
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. OPERATIONAL FLOW: PUSHPIN ROADMAP */}
      <section className="w-full bg-[#f0f0ee] text-black py-24 px-6 sm:px-12 md:px-20 z-10 relative overflow-hidden border-t border-black/5">

        <div className="max-w-4xl mx-auto relative">

          {/* Heading */}
          <div className="mb-16">
            {/* Label pill */}
            <div className="inline-flex items-center border border-black/20 rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-widest text-black/50 uppercase mb-8">
              How we work
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold leading-[1.05] text-black max-w-xl mb-6"
              style={{ letterSpacing: "-1.5px" }}
            >
              Let us show you how we drive your brand to new heights
            </h2>
            <div className="flex items-start gap-6">
              <p className="text-sm text-black/45 leading-relaxed max-w-xs">
                A structured 7-stage methodology ensuring every project is delivered on time, on spec, and beyond expectations.
              </p>
              {/* Squiggle arrow */}
              <svg className="w-16 h-10 mt-1 opacity-40 shrink-0" viewBox="0 0 80 40" fill="none" aria-hidden="true">
                <path d="M4 8 C18 2, 22 20, 36 14 C50 8, 54 26, 68 20" stroke="black" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                <path d="M62 14 L68 20 L60 24" stroke="black" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>
          </div>

          {/* Zigzag sticky-note cards */}
          <div className="relative flex flex-col gap-0">

            {/* Vertical dashed spine — desktop only */}
            <div
              className="absolute left-1/2 -translate-x-px top-8 bottom-8 w-px hidden md:block pointer-events-none z-0"
              style={{
                backgroundImage: "repeating-linear-gradient(to bottom, rgba(0,0,0,0.18) 0px, rgba(0,0,0,0.18) 6px, transparent 6px, transparent 13px)",
              }}
              aria-hidden="true"
            />

            {[
              { num: "01", title: "Discovery",             rot: "rotate-[2deg]",    side: "right",
                desc: "Understanding business goals, target audience, challenges, and project requirements before any planning begins." },
              { num: "02", title: "Planning",              rot: "rotate-[-2.5deg]", side: "left",
                desc: "Defining scope, features, timelines, architecture, and implementation strategy to set a clear path forward." },
              { num: "03", title: "Design",                rot: "rotate-[1.5deg]",  side: "right",
                desc: "Creating intuitive, user-friendly, and visually appealing interfaces that align with your brand and goals." },
              { num: "04", title: "Development",           rot: "rotate-[-2deg]",   side: "left",
                desc: "Building scalable, secure, high-performance solutions using modern technologies and clean coding practices." },
              { num: "05", title: "Testing",               rot: "rotate-[2.5deg]",  side: "right",
                desc: "Performing comprehensive quality assurance to ensure reliability, performance, and security across all platforms." },
              { num: "06", title: "Deployment",            rot: "rotate-[-1.5deg]", side: "left",
                desc: "Launching and configuring the solution in production with proper domain, hosting, SSL, and security setup." },
              { num: "07", title: "Support & Maintenance", rot: "rotate-[2deg]",    side: "right",
                desc: "Providing continuous updates, improvements, and technical support to keep your solution running at its best." },
            ].map((step, i, arr) => (
              <div key={i} className="relative mb-10 md:mb-14">

                {/* ── PIN dot on the spine — desktop ── */}
                <div
                  className="hidden md:block absolute left-1/2 -translate-x-1/2 z-20"
                  style={{ top: "32px" }}
                  aria-hidden="true"
                >
                  <div
                    className="w-[18px] h-[18px] rounded-full ring-4 ring-[#f0f0ee] shadow-md"
                    style={{ background: "radial-gradient(circle at 38% 35%, #5a5a5a, #111)" }}
                  />
                </div>

                {/* ── DESKTOP: two-column alternating layout ── */}
                <div className={`hidden md:flex items-start ${step.side === "right" ? "" : "flex-row-reverse"}`}>
                  {/* Card column */}
                  <div className="w-[calc(50%-44px)] relative">
                    {/* Dashed horizontal branch from spine to card */}
                    <div
                      className={`absolute top-[40px] ${step.side === "right" ? "right-[-44px] left-auto w-[44px]" : "left-[-44px] right-auto w-[44px]"} h-px z-10`}
                      style={{
                        backgroundImage: "repeating-linear-gradient(to right, rgba(0,0,0,0.18) 0px, rgba(0,0,0,0.18) 5px, transparent 5px, transparent 10px)",
                      }}
                      aria-hidden="true"
                    />
                    {/* Sticky-note card */}
                    <div
                      className={`bg-white ${step.rot} hover:rotate-0 hover:scale-[1.02] transition-all duration-300 cursor-default`}
                      style={{
                        borderRadius: "22px",
                        padding: "28px 28px 28px 28px",
                        boxShadow: "5px 8px 28px rgba(0,0,0,0.09), 1px 2px 6px rgba(0,0,0,0.05)",
                      }}
                    >
                      <span className="block text-[11px] font-semibold text-black/30 tracking-widest mb-3 font-mono">
                        {step.num}
                      </span>
                      <h3
                        className="text-2xl font-bold text-black mb-3 leading-tight"
                        style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.4px" }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-[13px] text-black/50 leading-relaxed font-light">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Centre gap (where the spine runs) */}
                  <div className="w-[88px] shrink-0" />
                  {/* Empty opposite half */}
                  <div className="flex-1" />
                </div>

                {/* ── MOBILE: full-width stacked cards ── */}
                <div className="md:hidden relative pt-5">
                  {/* Mobile pin */}
                  <div
                    className="absolute left-4 top-0 z-20 w-[18px] h-[18px] rounded-full shadow-md ring-4 ring-[#f0f0ee]"
                    style={{ background: "radial-gradient(circle at 38% 35%, #5a5a5a, #111)" }}
                    aria-hidden="true"
                  />
                  {/* Connector to next card */}
                  {i < arr.length - 1 && (
                    <div
                      className="absolute left-[12px] top-[18px] bottom-[-40px] w-px z-0"
                      style={{
                        backgroundImage: "repeating-linear-gradient(to bottom, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 5px, transparent 5px, transparent 11px)",
                      }}
                      aria-hidden="true"
                    />
                  )}
                  <div
                    className={`ml-9 bg-white ${step.rot} hover:rotate-0 hover:scale-[1.02] transition-all duration-300 cursor-default`}
                    style={{
                      borderRadius: "22px",
                      padding: "24px",
                      boxShadow: "5px 8px 28px rgba(0,0,0,0.09), 1px 2px 6px rgba(0,0,0,0.05)",
                    }}
                  >
                    <span className="block text-[11px] font-semibold text-black/30 tracking-widest mb-3 font-mono">
                      {step.num}
                    </span>
                    <h3
                      className="text-xl font-bold text-black mb-2 leading-tight"
                      style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.4px" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-[13px] text-black/50 leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>
                </div>

              </div>
            ))}

            {/* Sign-off */}
            <p
              className="text-right text-2xl sm:text-3xl text-black/50 font-light italic pr-2 mt-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              *Ready to be delivered!
            </p>

          </div>
        </div>
      </section>
      {/* 5. CTA SECTION */}
      <section className="w-full bg-black px-6 sm:px-12 md:px-20 py-12 relative z-10 mt-6">
        <div className="max-w-7xl mx-auto">
          <div
            className="relative rounded-[28px] overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 px-10 py-12 md:py-14"
            style={{ background: "linear-gradient(135deg, #1c1c1e 0%, #2a2a2e 50%, #1a1a1c 100%)" }}
          >
            {/* Subtle noise texture overlay */}
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
                <Link
                  to="/services"
                  className="bg-white hover:bg-white/90 text-black text-xs font-bold px-7 py-3.5 rounded-full tracking-widest uppercase decoration-none cursor-pointer inline-flex items-center gap-2 transition-all"
                >
                  Get Started <ArrowUpRight size={13} />
                </Link>
                <a
                  href="mailto:mirastratech@gmail.com"
                  className="text-white/40 text-xs font-semibold hover:text-white transition-colors decoration-none cursor-pointer"
                >
                  or Email Us →
                </a>
              </div>
            </div>

            {/* Right: floating UI mockup cards */}
            <div className="relative z-10 flex-shrink-0 w-full md:w-[420px] h-[220px] hidden md:block">
              {/* Card 1 — browser window mockup */}
              <div className="absolute right-8 top-0 w-[220px] bg-[#111] border border-white/10 rounded-[16px] overflow-hidden shadow-2xl rotate-[3deg]">
                <div className="bg-zinc-900 px-3 py-2 flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                  <div className="flex-1 h-3 bg-white/5 rounded-full ml-2" />
                </div>
                <div className="p-3 flex flex-col gap-1.5">
                  <div className="h-2 bg-white/10 rounded-full w-3/4" />
                  <div className="h-2 bg-white/6 rounded-full w-full" />
                  <div className="h-2 bg-white/6 rounded-full w-5/6" />
                  <div className="mt-1 h-12 bg-[#bfff00]/10 rounded-lg border border-white/5" />
                  <div className="h-2 bg-white/6 rounded-full w-2/3" />
                </div>
              </div>

              {/* Card 2 — stat chip */}
              <div className="absolute left-4 top-8 w-[160px] bg-[#bfff00] rounded-[14px] p-4 shadow-xl -rotate-[2deg]">
                <p className="text-black/50 text-[9px] font-mono uppercase tracking-widest">Project Status</p>
                <p className="text-black font-black text-2xl leading-tight mt-0.5">100%</p>
                <p className="text-black/60 text-[10px] font-medium font-mono">On-Time Delivery</p>
                <div className="mt-2 h-1.5 bg-black/15 rounded-full overflow-hidden">
                  <div className="h-full bg-black/40 rounded-full w-full" />
                </div>
              </div>

              {/* Card 3 — client badge */}
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
                    <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                  ))}
                </div>
                <p className="text-black/40 text-[9px] mt-1 font-mono">Est. May 2026</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. HOMEPAGE FOOTER INTEGRATION */}
      <footer className="w-full bg-black relative overflow-hidden border-t border-white/5">
        {/* Giant brand name */}
        <div className="relative w-full overflow-hidden select-none" style={{ lineHeight: 0.85 }}>
          <h2
            className="font-black text-center w-full px-4"
            style={{
              fontSize: "clamp(72px, 18vw, 260px)",
              letterSpacing: "-0.03em",
              paddingBottom: "0.05em",
              background: "linear-gradient(180deg, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.06) 55%, rgba(255,255,255,0.02) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Mirastra
          </h2>
          {/* Bottom fade into black */}
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </div>

        {/* Bottom info bar */}
        <div className="relative z-10 border-t border-white/6 px-8 sm:px-12 md:px-16 py-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">

            {/* Col 1: logo + address + status + socials */}
            <div className="md:col-span-3 flex flex-col gap-5">
              <img
                src="/mirastra_wlogo.png"
                alt="Mirastra Tech"
                className="h-25 w-auto object-contain object-left"
              />
              <div>
                <p className="text-white/30 text-xs leading-relaxed font-mono">
                  Mirastra Tech<br />
                  MSME Registered, India<br />
                  Serving Clients Worldwide
                </p>
              </div>
              
              {/* Status pill */}
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/8 rounded-full px-3 py-1.5 self-start">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_4px_rgba(52,211,153,0.8)] animate-pulse" />
                <span className="text-white/50 text-[10px] font-mono uppercase tracking-wider">All systems operational</span>
              </div>
              
              {/* Social links */}
              {/* Social links */}
              <div className="flex items-center gap-3">
                {[
                  { label: "FB", href: "https://www.facebook.com/profile.php?id=61590068837109", icon: <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/></svg> },
                  { label: "IG", href: "https://www.instagram.com/mirastratech/", icon: <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-white/15 transition-all duration-200">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Nav columns */}
            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
              {/* Services Column */}
              <div className="flex flex-col gap-3">
                <p className="text-white/60 text-[11px] font-semibold uppercase tracking-[0.18em] font-mono">Services</p>
                <Link to="/services" className="text-white/28 text-xs hover:text-white/70 transition-colors decoration-none leading-snug">Website Development</Link>
                <Link to="/services" className="text-white/28 text-xs hover:text-white/70 transition-colors decoration-none leading-snug">Web Applications</Link>
                <Link to="/services" className="text-white/28 text-xs hover:text-white/70 transition-colors decoration-none leading-snug">Mobile Apps</Link>
                <Link to="/services" className="text-white/28 text-xs hover:text-white/70 transition-colors decoration-none leading-snug">Custom Software</Link>
                <Link to="/services" className="text-white/28 text-xs hover:text-white/70 transition-colors decoration-none leading-snug">Browser Extensions</Link>
              </div>
              {/* Solutions Column */}
              <div className="flex flex-col gap-3">
                <p className="text-white/60 text-[11px] font-semibold uppercase tracking-[0.18em] font-mono">Solutions</p>
                <Link to="/services" className="text-white/28 text-xs hover:text-white/70 transition-colors decoration-none leading-snug">Automation</Link>
                <Link to="/services" className="text-white/28 text-xs hover:text-white/70 transition-colors decoration-none leading-snug">Digital Marketing</Link>
                <Link to="/services" className="text-white/28 text-xs hover:text-white/70 transition-colors decoration-none leading-snug">QA Testing</Link>
                <Link to="/services" className="text-white/28 text-xs hover:text-white/70 transition-colors decoration-none leading-snug">UI/UX Design</Link>
                <Link to="/contact" className="text-white/28 text-xs hover:text-white/70 transition-colors decoration-none leading-snug">Consulting</Link>
              </div>
              {/* Company Column */}
              <div className="flex flex-col gap-3">
                <p className="text-white/60 text-[11px] font-semibold uppercase tracking-[0.18em] font-mono">Company</p>
                <Link to="/about" className="text-white/28 text-xs hover:text-white/70 transition-colors decoration-none leading-snug">About Us</Link>
                <Link to="/works" className="text-white/28 text-xs hover:text-white/70 transition-colors decoration-none leading-snug">Our Works</Link>
                <Link to="/contact" className="text-white/28 text-xs hover:text-white/70 transition-colors decoration-none leading-snug">Contact</Link>
              </div>
              {/* Legal Column */}
              <div className="flex flex-col gap-3">
                <p className="text-white/60 text-[11px] font-semibold uppercase tracking-[0.18em] font-mono">Legal</p>
                <span className="text-white/28 text-xs leading-snug cursor-default">Privacy Policy</span>
                <span className="text-white/28 text-xs leading-snug cursor-default">Terms of Service</span>
                <span className="text-white/28 text-xs leading-snug cursor-default">Refund Policy</span>
                <span className="text-white/28 text-xs leading-snug cursor-default">Cookie Policy</span>
              </div>
            </div>

            {/* Right contact links */}
            <div className="md:col-span-2 flex flex-col gap-3 items-end justify-start">
              <a
                href="mailto:mirastratech@gmail.com"
                className="w-14 h-14 rounded-[16px] bg-[#1c1c1e] border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/8 hover:border-white/20 transition-all duration-200"
                title="Email Us"
              >
                <ArrowUpRight size={22} />
              </a>
              <a
                href="https://wa.me/917871873038"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-[16px] bg-[#1c1c1e] border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/8 hover:border-white/20 transition-all duration-200"
                title="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>

          </div>

          {/* Bottom copyright strip */}
          <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/20 text-[10px] font-mono uppercase tracking-widest">
              © 2026 Mirastra Tech — MSME Registered
            </p>
            <p className="text-white/15 text-[10px] font-mono">
              Building the Future. Beyond Limits.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}


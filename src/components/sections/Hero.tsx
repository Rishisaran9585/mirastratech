"use client";
import React, { useEffect, useState } from "react";
import { Code2, Lightbulb, Star, Menu, X } from "lucide-react";

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="hero"
      className="min-h-screen bg-black w-full text-white font-sans overflow-hidden p-3 sm:p-5 md:p-6"
    >
      {/* Outer Panel Container (Framed Look) */}
      <div
        className="w-full min-h-[calc(100vh-24px)] md:min-h-[calc(100vh-48px)] rounded-[24px] md:rounded-[40px] border border-white/10 relative overflow-hidden flex flex-col justify-between"
        style={{
          background: "radial-gradient(circle at 65% 35%, #f2f7fc 0%, #d5e3f0 40%, #b4c9dc 100%)",
        }}
      >
        {/* 1. Header Section (Navbar) */}
        <header className="w-full flex items-center justify-between px-6 py-4 md:px-10 md:py-6 z-30 relative">
          {/* Logo */}
          <div
            className="flex items-center gap-2 select-none cursor-pointer"
            onClick={() => handleScrollTo("hero")}
          >
            <div className="w-5 h-5 border border-black/80 rounded-sm flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-black/80 rounded-2xs" />
            </div>
            <span className="text-black font-semibold text-lg tracking-tight">MetaLeaf</span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-10">
            {["Explore", "Experiences", "Technology", "About Us"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo("services");
                }}
                className="text-black/60 hover:text-black text-sm font-medium transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden md:block">
            <button
              onClick={() => handleScrollTo("contact")}
              className="border border-black/30 hover:border-black text-black hover:bg-black hover:text-white transition-all text-xs font-semibold px-6 py-2 rounded-full cursor-pointer"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-black hover:opacity-80 p-2 z-40 cursor-pointer bg-transparent border-none outline-none"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Mobile Drawer Menu */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 bg-[#dbe4ee] flex flex-col justify-center items-center gap-8 z-30 md:hidden">
              {["Explore", "Experiences", "Technology", "About Us"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    handleScrollTo("services");
                  }}
                  className="text-black text-xl font-medium hover:text-black/60 tracking-wider transition-colors"
                >
                  {link}
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleScrollTo("contact");
                }}
                className="border border-black text-black text-sm font-semibold px-8 py-3 rounded-full hover:bg-black hover:text-white transition-all cursor-pointer mt-4"
              >
                Get Started
              </button>
            </div>
          )}
        </header>

        {/* 2. Main Hero Body */}
        <div className="flex-1 relative flex items-center justify-center px-4 md:px-8 py-10 md:py-2">
          {/* Giant Background Text: BUILD (Left) */}
          <div className="absolute left-[6%] top-[18%] md:top-[12%] select-none pointer-events-none z-0">
            <span className="text-[12vw] font-light text-white tracking-widest leading-none select-none opacity-90 font-sans">
              BUILD
            </span>
          </div>

          {/* Giant Background Text: LAUNCH (Right) */}
          <div className="absolute right-[8%] bottom-[32%] md:bottom-[24%] select-none pointer-events-none z-0">
            <span className="text-[12vw] font-light text-white tracking-widest leading-none select-none opacity-90 font-sans">
              LAUNCH
            </span>
          </div>

          {/* Central VR wearer image */}
          <div className="relative w-full max-w-4xl h-full flex items-center justify-center z-10 py-6">
            <div className="relative w-full max-w-[500px] aspect-[4/5] sm:aspect-square flex items-center justify-center">
              <img
                src="/assets/hero_vr_headset.png"
                alt="Futuristic VR Headset Concept"
                className="w-full h-full object-contain mix-blend-multiply scale-110 sm:scale-125"
              />
            </div>
          </div>

          {/* Floating Stat Cards (Only visible on Desktop / Tablet md and up) */}
          {!isMobile && (
            <>
              {/* Left Stat Card: Clients & Projects */}
              <div className="absolute left-[5%] top-[48%] z-20">
                <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-[20px] p-4 shadow-lg w-[210px] transform hover:scale-105 transition-transform">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {["WEB", "MOBILE", "SaaS", "CUSTOM"].map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-bold uppercase tracking-wider bg-black/10 text-black/70 rounded-full px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-[9px] uppercase tracking-widest text-black/55 font-semibold mb-1">
                    Clients Launched
                  </p>
                  <p className="text-3xl font-extrabold text-black tracking-tight leading-none">
                    25+
                  </p>
                </div>
              </div>

              {/* Right Stat Card: Live Projects */}
              <div className="absolute right-[5%] top-[20%] z-20">
                <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-[20px] p-4 shadow-lg w-[210px] transform hover:scale-105 transition-transform">
                  {/* Live badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[9px] font-bold uppercase tracking-wider bg-emerald-400/20 text-emerald-700 rounded-full px-2 py-0.5 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
                      Live Delivery
                    </span>
                  </div>
                  <p className="text-xs font-bold text-black leading-snug mb-2">
                    End-to-End Digital<br />Solutions
                  </p>
                  {/* Progress bar */}
                  <div className="w-full h-1.5 bg-black/10 rounded-full overflow-hidden">
                    <div className="h-full bg-black/60 rounded-full" style={{ width: "88%" }} />
                  </div>
                  <p className="text-[9px] text-black/50 mt-1 font-medium">
                    100% Remote · 7-Stage Process
                  </p>
                </div>
              </div>

              {/* Dynamic SVG Connection Lines & Dots */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-15"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                {/* Left dot */}
                <g>
                  <circle
                    cx="37"
                    cy="55"
                    r="1.8"
                    fill="none"
                    stroke="rgba(255,255,255,0.7)"
                    strokeWidth="0.3"
                    className="animate-pulse"
                  />
                  <circle cx="37" cy="55" r="0.8" fill="white" />
                  <path
                    d="M 37 55 L 24 62 L 18 62"
                    fill="none"
                    stroke="rgba(255,255,255,0.5)"
                    strokeWidth="0.3"
                    strokeDasharray="1 1"
                  />
                </g>
                {/* Right dot */}
                <g>
                  <circle
                    cx="62"
                    cy="38"
                    r="1.8"
                    fill="none"
                    stroke="rgba(255,255,255,0.7)"
                    strokeWidth="0.3"
                    className="animate-pulse"
                  />
                  <circle cx="62" cy="38" r="0.8" fill="white" />
                  <path
                    d="M 62 38 L 78 38"
                    fill="none"
                    stroke="rgba(255,255,255,0.5)"
                    strokeWidth="0.3"
                    strokeDasharray="1 1"
                  />
                </g>
              </svg>
            </>
          )}
        </div>

        {/* 3. Bottom Cards Section with Slanted Layout (Desktop) */}
        <div className="w-full relative z-20 flex flex-col md:flex-row bg-white">
          {/* Overlapping 'Buy Now' Button */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-6 z-30">
            <button
              onClick={() => handleScrollTo("contact")}
              className="bg-black hover:bg-black/90 text-white text-xs font-semibold px-8 py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border-none outline-none tracking-wider cursor-pointer"
              style={{ boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
            >
              Start a Project →
            </button>
          </div>

          {/* Left Card */}
          <div
            className="w-full md:w-[34%] bg-white p-6 sm:p-8 md:p-10 flex flex-col justify-between items-start z-10"
            style={
              !isMobile
                ? { clipPath: "polygon(0 0, 100% 0, calc(100% - 50px) 100%, 0 100%)" }
                : undefined
            }
          >
            <div className="flex gap-3">
              <div className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-black/70">
                <Code2 size={16} strokeWidth={1.5} />
              </div>
              <div className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-black/70">
                <Star size={16} strokeWidth={1.5} />
              </div>
            </div>

            <div>
              <p className="text-black font-semibold text-base sm:text-[17px] leading-snug tracking-tight mt-6 max-w-[280px]">
                Building Scalable Digital Products For Businesses Worldwide.
              </p>
              <button
                onClick={() => handleScrollTo("services")}
                className="text-[11px] font-bold uppercase tracking-wider text-black/60 hover:text-black transition-colors underline underline-offset-4 mt-8 inline-block cursor-pointer border-none bg-transparent outline-none p-0"
              >
                Our Services
              </button>
            </div>
          </div>

          {/* Center Card */}
          <div
            className="w-full md:w-[38%] bg-white p-8 sm:p-10 md:p-12 md:-ml-[50px] flex flex-col justify-center items-center z-20 relative min-h-[180px]"
            style={
              !isMobile
                ? { clipPath: "polygon(50px 0, calc(100% - 50px) 0, 100% 100%, 0 100%)" }
                : undefined
            }
          >
            {/* Slanted dividers inside (visual) */}
            {!isMobile && (
              <>
                {/* Left divider line */}
                <svg
                  className="absolute top-0 left-0 h-full w-[50px] pointer-events-none"
                  viewBox="0 0 50 100"
                  preserveAspectRatio="none"
                >
                  <line x1="50" y1="0" x2="0" y2="100" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
                </svg>
                {/* Right divider line */}
                <svg
                  className="absolute top-0 right-0 h-full w-[50px] pointer-events-none"
                  viewBox="0 0 50 100"
                  preserveAspectRatio="none"
                >
                  <line x1="0" y1="0" x2="50" y2="100" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
                </svg>
              </>
            )}

            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black tracking-tight text-center leading-tight max-w-[280px]">
              Strategy, Code &amp; Growth — All Under One Roof
            </h2>
            <p className="text-xs text-black/50 text-center max-w-[320px] mt-3 leading-relaxed">
              From ideation to deployment, Mirastra Tech delivers end-to-end web, mobile, and
              software solutions that drive real business impact.
            </p>
          </div>

          {/* Right Card */}
          <div
            className="w-full md:w-[34%] bg-white p-6 sm:p-8 md:p-10 md:-ml-[50px] flex flex-col justify-between items-start md:items-end z-10 text-left md:text-right"
            style={
              !isMobile ? { clipPath: "polygon(0 0, 100% 0, 100% 100%, 50px 100%)" } : undefined
            }
          >
            <div className="flex flex-col items-start md:items-end w-full">
              {/* MSME Badge */}
              <div className="flex items-center gap-1.5 text-black font-bold text-sm">
                <Star size={14} className="fill-amber-400 stroke-amber-400" />
                <span className="text-xs font-semibold text-black/70 uppercase tracking-widest">MSME Registered</span>
              </div>

              {/* Stats row */}
              <div className="flex items-center gap-5 mt-3">
                <div className="text-right">
                  <div className="text-black font-extrabold text-lg leading-none">14+</div>
                  <div className="text-[10px] text-black/50 font-normal mt-0.5">Launches</div>
                </div>
                <div className="text-right">
                  <div className="text-black font-extrabold text-lg leading-none">8+</div>
                  <div className="text-[10px] text-black/50 font-normal mt-0.5">Services</div>
                </div>
                <div className="text-right">
                  <div className="text-black font-extrabold text-lg leading-none">100%</div>
                  <div className="text-[10px] text-black/50 font-normal mt-0.5">Remote</div>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-start md:justify-end">
              <p className="text-xs text-black/50 leading-relaxed mt-6 max-w-[240px]">
                A trusted tech partner for startups, SMEs, and growing enterprises across India and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

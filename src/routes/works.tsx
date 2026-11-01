import { createFileRoute, Link } from "@tanstack/react-router";
import Nav from "../components/Nav";
import React, { useState, useEffect } from "react";
import { ArrowUpRight, Laptop, Code, Zap, Star, CheckCircle, Puzzle, Globe, ShieldCheck } from "lucide-react";
import Antigravity from "../components/reactbits/Antigravity";
import SplitText from "../components/reactbits/SplitText";
import FadeContent from "../components/reactbits/FadeContent";
import TiltedCard from "../components/reactbits/TiltedCard";
import SpotlightCard from "../components/reactbits/SpotlightCard";
import StarBorder from "../components/reactbits/StarBorder";
import CountUp from "../components/reactbits/CountUp";

export const Route = createFileRoute("/works")({
  head: () => ({
    meta: [
      { title: "Our Works — Mirastra Tech" },
      { name: "description", content: "Explore our delivery track record: 25+ custom websites launched and 7+ proprietary browser extensions and automation tools built by Mirastra Tech." },
    ],
  }),
  component: Works,
});

const EXTENSIONS = [
  {
    title: "Automate Commentor",
    category: "Social Automation",
    badge: "Chrome Extension",
    desc: "Intelligent social interaction extension that automates personalized commenting, reaction sequences, and engagement warming to boost profile reach.",
    features: ["Smart AI Sentiment Replies", "Human-like Delay Randomizer", "Target Post Filtering", "Automated Reaction Sequences"],
    img: "/extensions/automate-commentor.png",
  },
  {
    title: "Autopost Authority",
    category: "SaaS & Content Queue",
    badge: "SaaS Extension",
    desc: "Multi-profile social distribution tool to batch-schedule, format, and syndicate authority content across key platforms simultaneously.",
    features: ["Cross-platform Publishing", "Content Library Storage", "Peak Engagement Scheduling", "Bulk Queue Management"],
    img: "/extensions/autopost-authority.png",
  },
  {
    title: "Facebook Lead Builder",
    category: "Growth & Prospecting",
    badge: "Growth Tool",
    desc: "Extracts verified buyer profiles and decision-makers from niche groups with automated CRM export and DM sequences.",
    features: ["Targeted Group Scraping", "Tier-1 Country Audience Match", "Automated Outreach Sequences", "Direct CSV Export"],
    img: "/extensions/facebook-lead-builder.png",
  },
  {
    title: "FocusFlow",
    category: "Deep Work Productivity",
    badge: "Productivity",
    desc: "High-performance productivity suite combining Pomodoro workflows, ambient noise generators, and strict distracting site blocking.",
    features: ["Domain Blocklists", "Custom Focus Timers", "Ambient Soundscapes", "Session Analytics & Streaks"],
    img: "/extensions/focusflow.png",
  },
  {
    title: "Friend Disconnector",
    category: "Account Utility & Cleanup",
    badge: "Utility Tool",
    desc: "Cleanses social profiles by identifying inactive, dormant, or restricted friends to boost organic algorithm reach.",
    features: ["Inactivity & Dormancy Detection", "Safe Rate-Limited Unfriending", "Whitelist Protection", "Profile Health Score"],
    img: "/extensions/friend-disconnector.png",
  },
  {
    title: "Group Chimp",
    category: "Community Management",
    badge: "Community Tool",
    desc: "Automates Facebook group screening questions, captures member email leads instantly, and pushes to Google Sheets/CRM.",
    features: ["1-Click Member Approval", "Email Verification & Capture", "Google Sheets & Webhook Integration", "Spam Defense Filter"],
    img: "/extensions/group-chimp.png",
  },
  {
    title: "InstaLeads",
    category: "Marketing & Lead Gen",
    badge: "Lead Gen Tool",
    desc: "High-speed Instagram audience discovery extension that identifies targeted followers, hashtags, and business contact info.",
    features: ["Follower & Bio Extractor", "Public Email & Phone Finder", "CSV / Sheets Direct Export", "Audience Engagement Filters"],
    img: "/extensions/instaleads.png",
  },
];

const FEATURE_CARDS = [
  { title: "Branding Strategy", label: "Plan the story", img: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&h=700&q=80" },
  { title: "Visual Identity", label: "Design systems", img: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&h=700&q=80" },
  { title: "Creative Direction", label: "Execute with precision", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&h=700&q=80" },
  { title: "Art Direction", label: "Own the moment", img: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=600&h=700&q=80" },
];

function Works() {
  const [selectedExtCategory, setSelectedExtCategory] = useState("All");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const EXT_CATEGORIES = [
    "All",
    "Social Automation",
    "SaaS & Content Queue",
    "Growth & Prospecting",
    "Deep Work Productivity",
    "Account Utility & Cleanup",
    "Community Management",
    "Marketing & Lead Gen",
  ];

  const filteredExtensions = selectedExtCategory === "All"
    ? EXTENSIONS
    : EXTENSIONS.filter((ext) => ext.category === selectedExtCategory);

  return (
    <main className="w-full bg-[#f0f0ee] text-black min-h-screen font-sans overflow-hidden">
      <Nav theme="dark" />

      {/* ── HERO ── */}
      <section className="w-full min-h-screen relative overflow-hidden flex flex-col justify-between bg-[#050508]" style={{ minHeight: "100svh" }}>
        
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
        <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none z-0" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none z-0" />
        <div className="absolute top-[30%] left-[20%] w-[35vw] h-[35vw] rounded-full bg-[#bfff00]/5 blur-[100px] pointer-events-none z-0" />

        {/* Grid Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
          <svg className="w-full h-full" aria-hidden="true">
            <defs>
              <pattern id="works-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(58,140,215,0.3)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#works-grid)" />
          </svg>
        </div>

        {/* Hero Content Wrapper */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-14 pt-24 pb-4 flex-grow flex flex-col justify-center">
          
          {/* Top Pill Tag */}
          <FadeContent delay={0.1} y={15}>
            <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] backdrop-blur-md rounded-full px-4 py-1.5 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#3a8cd7] animate-pulse" />
              <span className="text-white/60 text-[10px] font-mono tracking-[0.15em] uppercase">
                PRODUCTION REGISTRY &bull; 25+ WEBSITES DELIVERED
              </span>
            </div>
          </FadeContent>

          {/* Title & Subtitle */}
          <div className="max-w-4xl mb-6">
            <h1 className="text-[clamp(30px,5vw,60px)] font-black text-white leading-[0.95] tracking-tight uppercase flex flex-col gap-1">
              <span className="block overflow-hidden">
                <SplitText
                  text="WE CONSTRUCT"
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
                digital products.
              </span>
            </h1>

            <FadeContent delay={0.3} y={15}>
              <p className="text-white/50 text-xs sm:text-sm leading-relaxed max-w-xl mt-3">
                Explore our verified track record — over 25+ bespoke client websites built and deployed, alongside 7+ proprietary browser extensions and automated growth tools engineered worldwide.
              </p>
            </FadeContent>

            {/* CTAs */}
            <FadeContent delay={0.4} y={15}>
              <div className="flex items-center gap-4 mt-5 flex-wrap">
                <Link to="/contact">
                  <StarBorder color="#3a8cd7" speed={3.5} borderRadius="9999px" borderWidth={1.5} className="cursor-pointer">
                    <span className="inline-flex items-center bg-[#3a8cd7] text-white text-xs font-black px-7 py-3 rounded-full hover:bg-white hover:text-black transition-colors duration-300">
                      Deploy Your Project
                    </span>
                  </StarBorder>
                </Link>
                <button
                  onClick={() => {
                    const el = document.getElementById("track-record");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-semibold px-6 py-3.5 rounded-full transition-all duration-300 cursor-pointer inline-flex items-center gap-2"
                >
                  <Globe size={13} className="text-[#3a8cd7]" />
                  25+ Websites Done
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById("extensions");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-[#bfff00]/20 hover:bg-[#bfff00]/30 border border-[#bfff00]/50 text-[#bfff00] text-xs font-bold px-6 py-3.5 rounded-full transition-all duration-300 cursor-pointer inline-flex items-center gap-2 shadow-[0_0_15px_rgba(191,255,0,0.15)]"
                >
                  <Puzzle size={13} />
                  Chrome Extensions &amp; Tools ({EXTENSIONS.length})
                </button>
              </div>
            </FadeContent>
          </div>

          {/* Asymmetrical Dashboard/Mockup Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-4">
            
            {/* Card 1: Code Console */}
            <FadeContent delay={0.5} y={20}>
              <TiltedCard maxTilt={10} scale={1.02}>
                <SpotlightCard
                  className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] hover:border-[#3a8cd7]/20 rounded-[24px] p-6 shadow-2xl transition-all duration-300 min-h-[200px] flex flex-col justify-between"
                  spotlightColor="rgba(58, 140, 215, 0.08)"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
                      </div>
                      <span className="text-[9px] font-mono text-white/35">registry/builds.ts</span>
                    </div>
                    <div className="font-mono text-[9px] text-white/50 space-y-1 mt-1">
                      <p className="text-[#3a8cd7]">const trackRecord = &#123;</p>
                      <p className="pl-3">websitesCompleted: "25+",</p>
                      <p className="pl-3">automationTools: "7+",</p>
                      <p className="pl-3">clientRetention: "85%",</p>
                      <p className="text-[#3a8cd7]">&#125;;</p>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-white/[0.05] flex justify-between items-center text-[10px] text-white/35 font-mono">
                    <span>TRACK RECORD</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      VERIFIED
                    </span>
                  </div>
                </SpotlightCard>
              </TiltedCard>
            </FadeContent>

            {/* Card 2: Metrics Dashboard */}
            <FadeContent delay={0.6} y={20}>
              <TiltedCard maxTilt={10} scale={1.02}>
                <SpotlightCard
                  className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] hover:border-[#3a8cd7]/20 rounded-[24px] p-6 shadow-2xl transition-all duration-300 min-h-[200px] flex flex-col justify-between"
                  spotlightColor="rgba(58, 140, 215, 0.08)"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[#3a8cd7]/10 flex items-center justify-center text-[#3a8cd7]">
                        <CheckCircle size={18} />
                      </div>
                      <span className="text-[9px] font-mono text-white/40 tracking-wider">DELIVERED</span>
                    </div>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-3xl font-black text-white leading-none tracking-tight">
                        <CountUp to={32} duration={1400} />+
                      </span>
                      <span className="text-[10px] text-white/40 font-mono">TOTAL BUILDS</span>
                    </div>
                    <div className="mt-2.5 space-y-1 text-[11px] font-mono text-white/60">
                      <p className="flex items-center justify-between">
                        <span>Websites Built:</span>
                        <span className="text-[#bfff00] font-bold">25+ Done</span>
                      </p>
                      <p className="flex items-center justify-between">
                        <span>Automation Tools:</span>
                        <span className="text-[#3a8cd7] font-bold">7+ Active</span>
                      </p>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-white/[0.05] flex justify-between items-center text-[10px] text-white/35 font-mono">
                    <span>ON-TIME SLA</span>
                    <span className="text-white/70">100% Guaranteed</span>
                  </div>
                </SpotlightCard>
              </TiltedCard>
            </FadeContent>

            {/* Card 3: Stack Integrations */}
            <FadeContent delay={0.7} y={20}>
              <TiltedCard maxTilt={10} scale={1.02}>
                <SpotlightCard
                  className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] hover:border-[#3a8cd7]/20 rounded-[24px] p-6 shadow-2xl transition-all duration-300 min-h-[200px] flex flex-col justify-between"
                  spotlightColor="rgba(58, 140, 215, 0.08)"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[#3a8cd7]/10 flex items-center justify-center text-[#3a8cd7]">
                        <Code size={18} />
                      </div>
                      <span className="text-[9px] font-mono text-white/40 tracking-wider">TECHNOLOGIES</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {["React", "Node", "TypeScript", "Next.js", "Python", "Tailwind"].map((t, i) => (
                        <span key={i} className="text-[9px] font-semibold bg-white/5 border border-white/8 text-white/50 rounded-full px-2 py-0.5">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-3 border-t border-white/[0.05] flex justify-between items-center text-[10px] text-white/35 font-mono">
                    <span>SOURCE CODE</span>
                    <span className="text-white/60">100% Client Owned</span>
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
                <span>WEBSITES COMPLETED:</span>
                <span className="text-white font-black">
                  <CountUp to={25} duration={1200} />+ Done
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span>AUTOMATION TOOLS:</span>
                <span className="text-[#bfff00] font-black">
                  <CountUp to={7} duration={1200} /> Active
                </span>
              </div>
            </div>
            <div className="text-white/35 font-mono text-[10px] md:text-right w-full md:w-auto">
              STATUS // ALL_SYSTEMS_OPERATIONAL
            </div>
          </div>
        </div>

      </section>

      {/* ── BRAND NEEDS MARQUEE ── */}
      <section className="w-full bg-white py-16 border-t border-black/6">
        <div className="text-center mb-10 px-6">
          <h2 className="font-black uppercase text-black" style={{ fontSize: "clamp(28px,4vw,64px)", letterSpacing: "-1.2px", lineHeight: "0.95" }}>
            EVERYTHING YOUR BRAND NEEDS TO GROW
          </h2>
          <p className="mx-auto mt-4 text-[11px] uppercase tracking-[0.32em] text-black/40" style={{ maxWidth: "34rem", letterSpacing: "0.18em", lineHeight: "1.8" }}>
            Mirastra Tech delivers strategic branding, visual identity, and custom digital systems built to cut through noise and deliver results. From architecture to execution, we build software that scales with your business.
          </p>
        </div>

        <div className="relative overflow-hidden py-4">
          <div className="absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-24 sm:w-36 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

          <div
            className="flex gap-6 works-auto-scroll cursor-grab active:cursor-grabbing"
            style={{
              animation: "worksFeatureScroll 32s linear infinite",
              width: "max-content",
            }}
          >
            {[...FEATURE_CARDS, ...FEATURE_CARDS, ...FEATURE_CARDS].map((card, idx) => (
              <article
                key={idx}
                className="flex-shrink-0 w-[300px] sm:w-[350px] lg:w-[380px] rounded-[30px] overflow-hidden border border-black/10 bg-[#1b0706] shadow-[0_20px_50px_rgba(0,0,0,0.12)] group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="relative h-[380px] sm:h-[420px] overflow-hidden bg-slate-900">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: "brightness(0.68) contrast(1.1)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
                  <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-black/60 px-3.5 py-1.5 text-[10px] uppercase tracking-[0.25em] text-white/80 backdrop-blur-md">
                    {card.label}
                  </div>
                </div>
                <div className="p-6 pb-7">
                  <p className="text-white/50 text-[10px] uppercase tracking-[0.25em] font-mono mb-2">{card.label}</p>
                  <h3 className="text-white font-black text-2xl sm:text-3xl tracking-tight" style={{ lineHeight: "0.95" }}>
                    {card.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>

          <style>{`
            @keyframes worksFeatureScroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-33.333333%); }
            }
            .works-auto-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>
        </div>
      </section>

      {/* ── TRACK RECORD & PROJECT COUNTS ── */}
      <section id="track-record" className="w-full bg-white text-black py-20 px-6 sm:px-10 md:px-16 border-b border-black/10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-8 border-b border-black/10">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-emerald-700 text-[10px] font-mono tracking-[0.2em] uppercase font-bold">
                  DELIVERY RECORD &bull; VERIFIED METRICS
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black leading-none">
                25+ WEBSITES DELIVERED &amp; <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-[#3a8cd7]">
                  PROVEN CLIENT MILESTONES
                </span>
              </h2>
            </div>
            <p className="text-black/60 text-xs sm:text-sm font-mono max-w-md leading-relaxed">
              We have designed, engineered, and launched over 25+ custom websites across diverse industries worldwide — built for ultra-fast load times, responsive UI/UX, seamless lead generation, and scalable architecture.
            </p>
          </div>

          {/* Big Stat Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <div className="rounded-[24px] bg-[#f7f7f5] border border-black/8 p-7 flex flex-col justify-between hover:border-black/20 transition-all">
              <span className="text-[10px] font-mono uppercase tracking-widest text-black/40">Core Milestone</span>
              <div className="my-6">
                <span className="text-5xl font-black text-black tracking-tight flex items-baseline gap-1 font-mono">
                  <CountUp to={25} duration={1200} />+
                </span>
                <h3 className="text-base font-bold text-black mt-2">Websites Delivered</h3>
                <p className="text-black/50 text-xs leading-relaxed mt-1">
                  High-converting corporate, dynamic, e-commerce, and booking platforms.
                </p>
              </div>
              <span className="text-[10px] font-mono text-emerald-600 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> 100% Custom Code
              </span>
            </div>

            <div className="rounded-[24px] bg-[#f7f7f5] border border-black/8 p-7 flex flex-col justify-between hover:border-black/20 transition-all">
              <span className="text-[10px] font-mono uppercase tracking-widest text-black/40">Tooling &amp; SaaS</span>
              <div className="my-6">
                <span className="text-5xl font-black text-black tracking-tight flex items-baseline gap-1 font-mono">
                  <CountUp to={7} duration={1200} />+
                </span>
                <h3 className="text-base font-bold text-black mt-2">Automation Engines</h3>
                <p className="text-black/50 text-xs leading-relaxed mt-1">
                  Chrome extensions, lead scrapers, and workflow pipelines.
                </p>
              </div>
              <span className="text-[10px] font-mono text-[#3a8cd7] font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3a8cd7]" /> Active Production Tools
              </span>
            </div>

            <div className="rounded-[24px] bg-[#f7f7f5] border border-black/8 p-7 flex flex-col justify-between hover:border-black/20 transition-all">
              <span className="text-[10px] font-mono uppercase tracking-widest text-black/40">Quality SLA</span>
              <div className="my-6">
                <span className="text-5xl font-black text-black tracking-tight flex items-baseline gap-1 font-mono">
                  <CountUp to={100} duration={1200} />%
                </span>
                <h3 className="text-base font-bold text-black mt-2">On-Time Delivery</h3>
                <p className="text-black/50 text-xs leading-relaxed mt-1">
                  Agile two-week sprint cycles with guaranteed delivery checkpoints.
                </p>
              </div>
              <span className="text-[10px] font-mono text-emerald-600 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Zero Delivery Delays
              </span>
            </div>

            <div className="rounded-[24px] bg-[#f7f7f5] border border-black/8 p-7 flex flex-col justify-between hover:border-black/20 transition-all">
              <span className="text-[10px] font-mono uppercase tracking-widest text-black/40">Industry Spread</span>
              <div className="my-6">
                <span className="text-5xl font-black text-black tracking-tight flex items-baseline gap-1 font-mono">
                  <CountUp to={10} duration={1200} />+
                </span>
                <h3 className="text-base font-bold text-black mt-2">Industry Verticals</h3>
                <p className="text-black/50 text-xs leading-relaxed mt-1">
                  Travel, Healthcare, E-Commerce, SaaS, EdTech, Real Estate &amp; Exports.
                </p>
              </div>
              <span className="text-[10px] font-mono text-black/50 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-black/40" /> Global Footprint
              </span>
            </div>
          </div>

          {/* Breakdown by Website Domain / Industry (Counts Only, No Client Names) */}
          <div className="rounded-[28px] border border-black/10 bg-black text-white p-8 md:p-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
              <div>
                <p className="text-[#bfff00] text-[10px] font-mono uppercase tracking-widest font-bold">Domain Breakdown</p>
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mt-1">
                  Websites Done By Sector
                </h3>
              </div>
              <div className="text-xs font-mono text-white/50">
                Total: <span className="text-[#bfff00] font-bold">25+ Verified Websites Delivered</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { sector: "Travel, Tours & Hospitality", count: "5+ Websites", desc: "Custom international tour planners, luxury holiday packages, itinerary curators, and flight inquiry systems." },
                { sector: "Healthcare & MedTech", count: "4+ Websites", desc: "Physiotherapy clinics, hospital mobility platforms, rehabilitation centers, and medical equipment rental systems." },
                { sector: "E-Commerce & Fashion", count: "4+ Websites", desc: "High-conversion designer silk apparel stores, bespoke wedding couture, and wholesale garment catalog platforms." },
                { sector: "Industrial, Manufacturing & Trade", count: "5+ Websites", desc: "Commercial import-export hubs, sustainable packaging manufacturing, and architectural metal installations." },
                { sector: "Tech & SaaS Platforms", count: "4+ Websites", desc: "Automotive vehicle safety intelligence, cloud infrastructure portals, and multi-tenant billing engines." },
                { sector: "Education & Media Publishing", count: "4+ Websites", desc: "Civil service coaching academies, real-time news outlets, and interactive language mastery training hubs." },
              ].map((domain, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white/[0.04] border border-white/8 hover:border-[#bfff00]/30 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-[#bfff00] uppercase tracking-wider font-semibold">Sector 0{i + 1}</span>
                      <span className="text-xs font-mono font-bold bg-[#bfff00]/15 text-[#bfff00] border border-[#bfff00]/30 px-2.5 py-0.5 rounded-full">
                        {domain.count}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-white tracking-tight mt-1">{domain.sector}</h4>
                    <p className="text-white/50 text-xs leading-relaxed mt-2">{domain.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Fully Completed &amp; Live
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SHOWCASE NAVIGATION BAR ── */}
      <div id="portfolio-tabs" className="sticky top-0 z-30 w-full bg-white/95 backdrop-blur-md border-t border-b border-black/10 py-4 px-6 sm:px-10 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#bfff00] shadow-[0_0_6px_rgba(191,255,0,0.8)] animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-black">
              Proprietary Tools &amp; Automation
            </span>
            <span className="text-xs font-mono text-black/50 hidden sm:inline">
              ({EXTENSIONS.length} Active Extensions &amp; Growth Tools)
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-black/60">
            <span className="flex items-center gap-1.5 text-black font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> All Tools Live &amp; Ready to Deploy
            </span>
          </div>
        </div>
      </div>

      {/* ── BROWSER EXTENSIONS & AUTOMATION SECTION ── */}
      <section id="extensions" className="relative w-full bg-[#07070a] text-white py-24 px-6 sm:px-10 md:px-16 border-t border-white/10 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-[20%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-[#bfff00]/5 blur-[140px] pointer-events-none z-0" />
        <div className="absolute bottom-[10%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-[#3a8cd7]/10 blur-[130px] pointer-events-none z-0" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 pb-8 border-b border-white/10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-[#bfff00]/10 border border-[#bfff00]/25 rounded-full px-4 py-1.5 mb-4">
                <Puzzle size={13} className="text-[#bfff00]" />
                <span className="text-[#bfff00] text-[10px] font-mono tracking-[0.2em] uppercase font-bold">
                  PROPRIETARY BROWSER EXTENSIONS &amp; AUTOMATION TOOLS
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
                CHROME EXTENSIONS &amp; <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bfff00] via-white to-white/60">
                  GROWTH AUTOMATION TOOLS
                </span>
              </h2>
              <p className="text-white/50 text-xs sm:text-sm font-mono mt-4 leading-relaxed">
                High-performance, purpose-built browser extensions engineered to automate client outreach, lead scraping, scheduled content syndication, and distraction-free deep work.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white/60">
                <span className="text-[#bfff00] font-bold">{EXTENSIONS.length}</span> Active Tools Deployed
              </div>
              <Link
                to="/contact"
                className="bg-[#bfff00] hover:bg-white text-black text-xs font-bold font-mono px-6 py-3 rounded-full uppercase tracking-wider transition-colors decoration-none"
              >
                Build Custom Extension
              </Link>
            </div>
          </div>

          {/* Extension Category Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {EXT_CATEGORIES.map((cat) => {
              const count = cat === "All" ? EXTENSIONS.length : EXTENSIONS.filter(e => e.category === cat).length;
              const isActive = selectedExtCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedExtCategory(cat)}
                  className={`rounded-full px-4 py-2 text-[10px] uppercase font-mono tracking-wider transition-all duration-200 cursor-pointer border ${
                    isActive
                      ? "bg-[#bfff00] text-black border-[#bfff00] font-bold shadow-md scale-105"
                      : "bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>

          {/* Extension cards grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredExtensions.map((ext, idx) => (
              <div
                key={idx}
                className="group relative rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 flex flex-col justify-between hover:border-[#bfff00]/40 hover:bg-white/[0.05] transition-all duration-300 shadow-2xl hover:-translate-y-1"
              >
                <div>
                  {/* Screenshot frame */}
                  <div className="relative h-[220px] w-full rounded-2xl overflow-hidden bg-black/60 border border-white/10 mb-5">
                    <img
                      src={ext.img}
                      alt={ext.title}
                      className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-mono tracking-wider text-[#bfff00] border border-[#bfff00]/30 uppercase font-semibold">
                      {ext.badge}
                    </div>
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-[10px] font-mono text-white/80 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#bfff00] animate-pulse" />
                      Active Automation
                    </div>
                  </div>

                  {/* Meta */}
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-mono mb-1">{ext.category}</p>
                  <h3 className="text-xl font-black text-white group-hover:text-[#bfff00] transition-colors">{ext.title}</h3>
                  <p className="text-white/60 text-xs font-mono leading-relaxed mt-2.5">{ext.desc}</p>

                  {/* Feature Bullets */}
                  <div className="mt-4 pt-4 border-t border-white/5 space-y-1.5">
                    {ext.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-[11px] text-white/70 font-mono">
                        <span className="w-1 h-1 rounded-full bg-[#bfff00]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action button */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider">Ready to deploy</span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#bfff00] hover:text-white transition-colors decoration-none"
                  >
                    Inquire Extension <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
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
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 border-t border-white/6 px-8 sm:px-12 md:px-16 py-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">

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
              
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/8 rounded-full px-3 py-1.5 self-start">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_4px_rgba(52,211,153,0.8)] animate-pulse" />
                <span className="text-white/50 text-[10px] font-mono uppercase tracking-wider">All systems operational</span>
              </div>
              
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

            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
              <div className="flex flex-col gap-3">
                <p className="text-white/60 text-[11px] font-semibold uppercase tracking-[0.18em] font-mono">Services</p>
                <Link to="/services" className="text-white/28 text-xs hover:text-white/70 transition-colors decoration-none leading-snug">Website Development</Link>
                <Link to="/services" className="text-white/28 text-xs hover:text-white/70 transition-colors decoration-none leading-snug">Web Applications</Link>
                <Link to="/services" className="text-white/28 text-xs hover:text-white/70 transition-colors decoration-none leading-snug">Mobile Apps</Link>
                <Link to="/services" className="text-white/28 text-xs hover:text-white/70 transition-colors decoration-none leading-snug">Custom Software</Link>
                <Link to="/services" className="text-white/28 text-xs hover:text-white/70 transition-colors decoration-none leading-snug">Browser Extensions</Link>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-white/60 text-[11px] font-semibold uppercase tracking-[0.18em] font-mono">Solutions</p>
                <Link to="/services" className="text-white/28 text-xs hover:text-white/70 transition-colors decoration-none leading-snug">Automation</Link>
                <Link to="/services" className="text-white/28 text-xs hover:text-white/70 transition-colors decoration-none leading-snug">Digital Marketing</Link>
                <Link to="/services" className="text-white/28 text-xs hover:text-white/70 transition-colors decoration-none leading-snug">QA Testing</Link>
                <Link to="/services" className="text-white/28 text-xs hover:text-white/70 transition-colors decoration-none leading-snug">UI/UX Design</Link>
                <Link to="/contact" className="text-white/28 text-xs hover:text-white/70 transition-colors decoration-none leading-snug">Consulting</Link>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-white/60 text-[11px] font-semibold uppercase tracking-[0.18em] font-mono">Company</p>
                <Link to="/about" className="text-white/28 text-xs hover:text-white/70 transition-colors decoration-none leading-snug">About Us</Link>
                <Link to="/works" className="text-white/28 text-xs hover:text-white/70 transition-colors decoration-none leading-snug">Our Works</Link>
                <Link to="/contact" className="text-white/28 text-xs hover:text-white/70 transition-colors decoration-none leading-snug">Contact</Link>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-white/60 text-[11px] font-semibold uppercase tracking-[0.18em] font-mono">Legal</p>
                <span className="text-white/28 text-xs leading-snug cursor-default">Privacy Policy</span>
                <span className="text-white/28 text-xs leading-snug cursor-default">Terms of Service</span>
                <span className="text-white/28 text-xs leading-snug cursor-default">Refund Policy</span>
                <span className="text-white/28 text-xs leading-snug cursor-default">Cookie Policy</span>
              </div>
            </div>

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

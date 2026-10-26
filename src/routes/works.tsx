import { createFileRoute, Link } from "@tanstack/react-router";
import Nav from "../components/Nav";
import React, { useState, useEffect } from "react";
import { ArrowUpRight, Laptop, Code, Zap, Star, CheckCircle, Globe, Puzzle, ExternalLink, Sparkles, Layers } from "lucide-react";
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
      { name: "description", content: "Browse our portfolio of custom software, websites, SaaS projects, and mobile applications built by Mirastra Tech." },
    ],
  }),
  component: Works,
});

const WEBSITES_PORTFOLIO = [
  {
    title: "First Dream Destinations",
    category: "Travel & Tours",
    filterGroup: "Travel & Tourism",
    url: "https://firstdreamdestinations.com/",
    displayUrl: "firstdreamdestinations.com",
    desc: "Luxury international tour curator, custom holiday packages, honeymoon travels, and global flight bookings.",
    img: "/screenshots/firstdreamdestinations.png",
  },
  {
    title: "Evergreen Industry",
    category: "Sustainable Packaging",
    filterGroup: "Industrial & Trade",
    url: "https://evergreenindustry.com/",
    displayUrl: "evergreenindustry.com",
    desc: "Eco-friendly, biodegradable manufacturing and sustainable industrial packaging solutions worldwide.",
    img: "/screenshots/evergreenindustry.png",
  },
  {
    title: "Stretch Wheels",
    category: "Healthcare & MedTech",
    filterGroup: "Healthcare & MedTech",
    url: "https://stretchwheels.com/",
    displayUrl: "stretchwheels.com",
    desc: "Reinventing ergonomic patient transfer mobility and modern hospital transport equipment.",
    img: "/screenshots/stretchwheels.png",
  },
  {
    title: "Just In Travels",
    category: "Luxury Travel",
    filterGroup: "Travel & Tourism",
    url: "https://justintravels.in/",
    displayUrl: "justintravels.in",
    desc: "Bespoke South India private journeys, temple trails, hill station retreats, and private luxury chauffeur tours.",
    img: "/screenshots/justintravels.png",
  },
  {
    title: "Diyaa Holidays",
    category: "Tours & Travel",
    filterGroup: "Travel & Tourism",
    url: "https://diyaaholidays.com/",
    displayUrl: "diyaaholidays.com",
    desc: "Curated vacation packages, pilgrimage journeys, family vacation itineraries, and honeymoon getaways.",
    img: "/screenshots/diyaaholidays.png",
  },
  {
    title: "Dev Krishna Tex",
    category: "Textile & Garments",
    filterGroup: "E-Commerce & Fashion",
    url: "https://devkrishnatex.in/",
    displayUrl: "devkrishnatex.in",
    desc: "Leading wholesale textile manufacturer, bulk fabric distribution, and traditional & modern attire supplies.",
    img: "/screenshots/devkrishnatex.png",
  },
  {
    title: "MR Import & Exports",
    category: "Global Trade",
    filterGroup: "Industrial & Trade",
    url: "https://mrimportandexports.com/",
    displayUrl: "mrimportandexports.com",
    desc: "Worldwide commercial trade partner, bulk wholesale commodities, and cross-border import-export operations.",
    img: "/screenshots/mrimportandexports.png",
  },
  {
    title: "Proactive Physiotherapy",
    category: "Healthcare & Rehab",
    filterGroup: "Healthcare & MedTech",
    url: "https://proactivept.in/",
    displayUrl: "proactivept.in",
    desc: "Senior-led one-on-one sports rehabilitation, orthopedic recovery, and post-surgical physical therapy clinic.",
    img: "/screenshots/proactivept.png",
  },
  {
    title: "Reporter World",
    category: "Digital Media & News",
    filterGroup: "Media & EdTech",
    url: "https://reporterworld.in/",
    displayUrl: "reporterworld.in",
    desc: "Real-time news coverage, political analysis, technology journalism, and breaking updates delivered instantly.",
    img: "/screenshots/reporterworld.png",
  },
  {
    title: "Zion Medicare",
    category: "Medical Equipment",
    filterGroup: "Healthcare & MedTech",
    url: "https://zionmedicare.in/",
    displayUrl: "zionmedicare.in",
    desc: "Certified hospital-grade medical equipment sales, home healthcare rentals, and patient recovery support.",
    img: "/screenshots/zionmedicare.png",
  },
  {
    title: "Porko Construction & Estate",
    category: "Real Estate & Architecture",
    filterGroup: "Industrial & Trade",
    url: "https://porkoconstructionestate.com/",
    displayUrl: "porkoconstructionestate.com",
    desc: "Turnkey residential and commercial construction, architectural blueprints, and prime real estate assets.",
    img: "/screenshots/porkoconstructionestate.png",
  },
  {
    title: "Nora Architectural Industries",
    category: "Industrial & Architecture",
    filterGroup: "Industrial & Trade",
    url: "http://noraarchitecturalindustries.in/",
    displayUrl: "noraarchitecturalindustries.in",
    desc: "Architectural metal fabrication, facade structures, and precision engineering installations.",
    img: "/screenshots/noraarchitecturalindustries.png",
  },
  {
    title: "Lishan Sarees",
    category: "E-Commerce & Fashion",
    filterGroup: "E-Commerce & Fashion",
    url: "https://lishansarees.com/",
    displayUrl: "lishansarees.com",
    desc: "Handcrafted luxury silk sarees, bridal Kanjivarams, and designer ethnic wear shopping.",
    img: "/screenshots/lishansarees.png",
  },
  {
    title: "Wizard IAS Academy",
    category: "EdTech & Education",
    filterGroup: "Media & EdTech",
    url: "https://wizardias.in/",
    displayUrl: "wizardias.in",
    desc: "Premier civil services coaching academy, mock test series, expert mentorship, and online study ecosystem.",
    img: "/screenshots/wizardias.png",
  },
  {
    title: "Sarrahh Bridal Studio",
    category: "Bridal & Haute Couture",
    filterGroup: "E-Commerce & Fashion",
    url: "https://sarrahh.in/",
    displayUrl: "sarrahh.in",
    desc: "Custom Aari hand embroidery, designer bridal blouses, and bespoke wedding couture appointments.",
    img: "/screenshots/sarrahh.png",
  },
  {
    title: "Mugai Technologies",
    category: "Tech Agency & Cloud",
    filterGroup: "Tech & SaaS",
    url: "https://mugaitechnologies.in/",
    displayUrl: "mugaitechnologies.in",
    desc: "Digital technology studio crafting scalable cloud architectures, software engineering, and web systems.",
    img: "/screenshots/mugaitechnologies.png",
  },
  {
    title: "JORO IQ Platform",
    category: "Automotive SaaS & AI",
    filterGroup: "Tech & SaaS",
    url: "https://jorosystems.com/",
    displayUrl: "jorosystems.com",
    desc: "Vehicle safety intelligence transforming real-world vehicle data into accident prevention insights.",
    img: "/screenshots/jorosystems.png",
  },
  {
    title: "Aghora Engineering",
    category: "Corporate Engineering",
    filterGroup: "Industrial & Trade",
    url: "https://aghoraengineeringconsultants.com/",
    displayUrl: "aghoraengineeringconsultants.com",
    desc: "Consultancy and structural engineering audits for large-scale infrastructure and industrial projects.",
    img: new URL("../wesbite/AEC.png", import.meta.url).href,
  },
  {
    title: "IELTS Horizon",
    category: "Global Education",
    filterGroup: "Media & EdTech",
    url: "https://ieltshorizon.com/",
    displayUrl: "ieltshorizon.com",
    desc: "Online training portal, exam simulations, and international language mastery programs.",
    img: new URL("../wesbite/ielts.png", import.meta.url).href,
  },
  {
    title: "Medai The Stage",
    category: "Cultural & Events",
    filterGroup: "Media & EdTech",
    url: "https://medaithestage.com/",
    displayUrl: "medaithestage.com",
    desc: "Performing arts theater venue, booking platform, and creative festival production.",
    img: new URL("../wesbite/medai.png", import.meta.url).href,
  },
  {
    title: "Kinngs Network",
    category: "Business Networking",
    filterGroup: "Tech & SaaS",
    url: "https://kinngsnetwork.com/",
    displayUrl: "kinngsnetwork.com",
    desc: "High-level business networking platform connecting founders, executives, and investors.",
    img: new URL("../wesbite/kinngs.png", import.meta.url).href,
  },
  {
    title: "Find You Counselling",
    category: "Mental Health & Therapy",
    filterGroup: "Healthcare & MedTech",
    url: "https://findyoucounselling.com/",
    displayUrl: "findyoucounselling.com",
    desc: "Certified psychotherapy, emotional wellness counseling, and virtual therapy sessions.",
    img: new URL("../wesbite/find you cousnelling center.png", import.meta.url).href,
  },
  {
    title: "Tamil Oviyam",
    category: "Arts & Culture",
    filterGroup: "Media & EdTech",
    url: "https://grey-boar-606830.hostingersite.com/",
    displayUrl: "tamiloviyam.com",
    desc: "Rich cultural publishing portal dedicated to classical Tamil heritage, literature, and art.",
    img: new URL("../wesbite/tamil oviyam.png", import.meta.url).href,
  },
  {
    title: "KleanKlub CRM",
    category: "Enterprise CRM",
    filterGroup: "Tech & SaaS",
    url: "https://cornflowerblue-grasshopper-952998.hostingersite.com/",
    displayUrl: "kleanklub.app",
    desc: "Full-cycle customer relationship platform with automated invoicing and schedule workflows.",
    img: new URL("../wesbite/KleanKlub crm.png", import.meta.url).href,
  },
];

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

const BRAND_IMAGES = [
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&h=520&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&h=520&q=80",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&h=520&q=80",
];

function Works() {
  const [activeTab, setActiveTab] = useState<"all" | "websites" | "extensions">("all");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedExtCategory, setSelectedExtCategory] = useState("All");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const CATEGORIES = [
    "All",
    "Travel & Tourism",
    "Healthcare & MedTech",
    "E-Commerce & Fashion",
    "Tech & SaaS",
    "Industrial & Trade",
    "Media & EdTech",
  ];

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

  const filteredWebsites = selectedCategory === "All"
    ? WEBSITES_PORTFOLIO
    : WEBSITES_PORTFOLIO.filter((site) => site.filterGroup === selectedCategory);

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
                PRODUCTION REGISTRY &amp; BUILDS
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
                Explore our catalog of custom-built web systems, software architectures, chrome extensions, automation scripts, and conversion funnels deployed worldwide.
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
                    setActiveTab("websites");
                    const el = document.getElementById("portfolio-tabs") || document.getElementById("projects");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-semibold px-6 py-3.5 rounded-full transition-all duration-300 cursor-pointer inline-flex items-center gap-2"
                >
                  <Globe size={13} className="text-[#3a8cd7]" />
                  Live Websites ({WEBSITES_PORTFOLIO.length})
                </button>
                <button
                  onClick={() => {
                    setActiveTab("extensions");
                    const el = document.getElementById("portfolio-tabs") || document.getElementById("extensions");
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
                      <span className="text-[9px] font-mono text-white/35">src/App.tsx</span>
                    </div>
                    <div className="font-mono text-[9px] text-white/50 space-y-1 mt-1">
                      <p className="text-[#3a8cd7]">const deployment = &#123;</p>
                      <p className="pl-3">client: "Worldwide",</p>
                      <p className="pl-3">status: "100%_Success",</p>
                      <p className="pl-3">onTime: true,</p>
                      <p className="text-[#3a8cd7]">&#125;;</p>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-white/[0.05] flex justify-between items-center text-[10px] text-white/35 font-mono">
                    <span>STATUS</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      COMPILING
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
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#3a8cd7]/10 flex items-center justify-center text-[#3a8cd7]">
                        <CheckCircle size={18} />
                      </div>
                      <span className="text-[9px] font-mono text-white/40 tracking-wider">OUTCOMES</span>
                    </div>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-3xl font-black text-white leading-none tracking-tight">
                        <CountUp to={31} duration={1400} />+
                      </span>
                      <span className="text-[10px] text-white/40 font-mono">LIVE BUILDS</span>
                    </div>
                    <p className="text-white/45 text-[11px] leading-relaxed mt-2">
                      Successfully delivered scalable systems, from startup MVPs to enterprise platforms.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-white/[0.05] flex justify-between items-center text-[10px] text-white/35 font-mono">
                    <span>COMPLIANCE</span>
                    <span className="text-white/60">100% On-Time</span>
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
                      {["React", "Node", "TypeScript", "Next.js", "Flutter", "Tailwind"].map((t, i) => (
                        <span key={i} className="text-[9px] font-semibold bg-white/5 border border-white/8 text-white/50 rounded-full px-2 py-0.5">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-3 border-t border-white/[0.05] flex justify-between items-center text-[10px] text-white/35 font-mono">
                    <span>ARCHITECTURES</span>
                    <span className="text-white/60">Custom Built</span>
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
                <span>REGISTRY STATUS: MSME Registered</span>
              </div>
              <div className="flex items-center gap-2">
                <span>ESTABLISHED: 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <span>DELIVERY METRICS:</span>
                <span className="text-white font-black">
                  <CountUp to={85} duration={1200} />% Client Retention
                </span>
              </div>
            </div>
            <div className="text-white/35 font-mono text-[10px] md:text-right w-full md:w-auto">
              SYSTEM // ACTIVE_BUILDS_ONLINE
            </div>
          </div>
        </div>

      </section>



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
          {/* Gradient fade masks on left and right */}
          <div className="absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-24 sm:w-36 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

          {/* Continuous auto-scrolling track */}
          <div
            className="flex gap-6 works-auto-scroll cursor-grab active:cursor-grabbing"
            style={{
              animation: "worksFeatureScroll 32s linear infinite",
              width: "max-content",
            }}
          >
            {/* Duplicate set 3 times for a perfectly seamless, infinite marquee loop */}
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
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-33.333333%);
              }
            }
            .works-auto-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>
        </div>
      </section>

      {/* ── SHOWCASE SWITCHER NAVIGATION BAR ── */}
      <div id="portfolio-tabs" className="sticky top-0 z-30 w-full bg-white/95 backdrop-blur-md border-t border-b border-black/10 py-4 px-6 sm:px-10 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-black">
              Showcase Filter:
            </span>
            <span className="text-xs font-mono text-black/40 hidden sm:inline">
              ({activeTab === "all" ? "All 31 Works" : activeTab === "websites" ? "24 Client Websites" : "7 Browser Extensions & Tools"})
            </span>
          </div>

          {/* View Mode Pills */}
          <div className="inline-flex p-1 bg-black/[0.06] rounded-full border border-black/10 shadow-inner">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-5 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === "all"
                  ? "bg-black text-white shadow-md scale-102"
                  : "text-black/60 hover:text-black"
              }`}
            >
              All Works (31)
            </button>
            <button
              onClick={() => {
                setActiveTab("websites");
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`px-5 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer inline-flex items-center gap-1.5 ${
                activeTab === "websites"
                  ? "bg-black text-white shadow-md scale-102"
                  : "text-black/60 hover:text-black"
              }`}
            >
              <Globe size={13} className={activeTab === "websites" ? "text-emerald-400" : ""} />
              Websites (24)
            </button>
            <button
              onClick={() => {
                setActiveTab("extensions");
                document.getElementById("extensions")?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`px-5 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer inline-flex items-center gap-1.5 ${
                activeTab === "extensions"
                  ? "bg-[#bfff00] text-black shadow-md scale-102 font-black"
                  : "text-black/70 hover:text-black"
              }`}
            >
              <Puzzle size={13} className={activeTab === "extensions" ? "text-black" : "text-emerald-600"} />
              Extensions &amp; Tools (7)
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-3 text-xs font-mono text-black/50">
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> 24 Websites</span>
            <span>&bull;</span>
            <span className="flex items-center gap-1 text-black font-semibold"><span className="w-1.5 h-1.5 rounded-full bg-[#bfff00]" /> 7 Automation Tools</span>
          </div>
        </div>
      </div>

      {/* ── CLIENT WEBSITES SHOWCASE ── */}
      {(activeTab === "all" || activeTab === "websites") && (
        <section id="projects" className="relative w-full bg-white text-black overflow-hidden border-b border-black/10">
          <div className="relative max-w-7xl mx-auto px-6 sm:px-10 md:px-16 py-20">
            <div className="grid gap-10 xl:grid-cols-[0.95fr_1.05fr] items-start">
              <div className="space-y-6">
                <p className="text-[10px] uppercase tracking-[0.35em] text-[#22c55e]/90 font-mono font-bold">Featured Client Work</p>
                <div>
                  <h2 className="font-black uppercase tracking-[-0.04em] text-black" style={{ fontSize: "clamp(2.8rem,5vw,4.8rem)", lineHeight: "0.94" }}>
                    WE TURN AMBITIONS INTO HIGH-PERFORMANCE<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-[#3a8cd7]">
                      DIGITAL EXPERIENCES
                    </span>
                  </h2>
                  <p className="mt-4 text-black/60 uppercase tracking-[0.22em] leading-[1.4] text-xs font-mono">
                    VERIFIED LIVE WEBSITES &bull; GLOBAL CLIENT FOOTPRINT
                  </p>
                </div>

                <p className="max-w-xl text-black/70 text-sm leading-relaxed">
                  Every website built by Mirastra Tech is engineered for ultra-fast load times, responsive UI/UX, seamless lead capture, and immediate business impact. Click any site to visit the live deployment.
                </p>

                {/* Category Filter Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {CATEGORIES.map((cat) => {
                    const count = cat === "All" ? WEBSITES_PORTFOLIO.length : WEBSITES_PORTFOLIO.filter(s => s.filterGroup === cat).length;
                    const isActive = selectedCategory === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`rounded-full px-4 py-2 text-[10px] uppercase font-mono tracking-wider transition-all duration-200 cursor-pointer border ${
                          isActive
                            ? "bg-black text-white border-black shadow-md scale-105"
                            : "bg-black/5 text-black/60 border-black/10 hover:bg-black/10 hover:text-black"
                        }`}
                      >
                        {cat} ({count})
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Top Featured Highlights */}
              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href={WEBSITES_PORTFOLIO[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-[32px] border border-black/10 bg-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.08)] block decoration-none"
                >
                  <img
                    src={WEBSITES_PORTFOLIO[0].img}
                    alt={WEBSITES_PORTFOLIO[0].title}
                    className="h-[520px] w-full object-cover object-top transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute left-6 bottom-6 right-6 rounded-[24px] border border-white/20 bg-black/80 p-6 backdrop-blur-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#bfff00] font-semibold">{WEBSITES_PORTFOLIO[0].category}</span>
                      <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:bg-[#bfff00] group-hover:text-black transition-colors">
                        <ArrowUpRight size={15} />
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-white leading-tight">{WEBSITES_PORTFOLIO[0].title}</h3>
                    <p className="text-white/60 text-xs font-mono mt-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {WEBSITES_PORTFOLIO[0].displayUrl}
                    </p>
                  </div>
                </a>

                <div className="grid gap-4">
                  {/* Secondary Highlight 1 */}
                  <a
                    href={WEBSITES_PORTFOLIO[16].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-[28px] border border-black/10 bg-[#09090d] text-white p-6 flex flex-col justify-between shadow-lg decoration-none"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-[#3a8cd7] font-mono">{WEBSITES_PORTFOLIO[16].category}</span>
                      <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-[#3a8cd7] transition-colors">
                        <ArrowUpRight size={13} />
                      </span>
                    </div>
                    <div className="my-4">
                      <h4 className="text-xl font-black text-white leading-tight">{WEBSITES_PORTFOLIO[16].title}</h4>
                      <p className="text-white/50 text-xs font-mono mt-1">{WEBSITES_PORTFOLIO[16].displayUrl}</p>
                      <p className="text-white/60 text-xs mt-2 leading-relaxed">{WEBSITES_PORTFOLIO[16].desc}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Click to Open Live Platform →
                    </div>
                  </a>

                  {/* Secondary Highlight 2 */}
                  <a
                    href={WEBSITES_PORTFOLIO[2].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_20px_60px_rgba(34,38,49,0.06)] decoration-none block"
                  >
                    <div className="relative h-[220px] overflow-hidden bg-zinc-100">
                      <img
                        src={WEBSITES_PORTFOLIO[2].img}
                        alt={WEBSITES_PORTFOLIO[2].title}
                        className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                      <div className="absolute left-5 bottom-4 right-5 flex items-center justify-between text-white">
                        <div>
                          <p className="text-[9px] uppercase tracking-[0.25em] text-[#bfff00] font-mono">{WEBSITES_PORTFOLIO[2].category}</p>
                          <h4 className="text-lg font-black text-white leading-tight mt-0.5">{WEBSITES_PORTFOLIO[2].title}</h4>
                        </div>
                        <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                          <ArrowUpRight size={13} />
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* All Live Websites Grid */}
            <div className="mt-16">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-black/10">
                <div className="flex items-center gap-2">
                  <Globe size={18} className="text-emerald-600" />
                  <h3 className="text-xl font-bold font-mono uppercase tracking-wider text-black">
                    Live Websites Portfolio ({filteredWebsites.length})
                  </h3>
                </div>
                <span className="text-xs font-mono text-black/50 hidden sm:inline-block">
                  All links redirect directly to live client domains
                </span>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredWebsites.map((proj) => (
                  <a
                    key={proj.title}
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col justify-between overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_15px_35px_rgba(34,38,49,0.05)] transition-all duration-300 hover:border-[#3a8cd7]/50 hover:shadow-[0_25px_60px_rgba(58,140,215,0.18)] hover:-translate-y-1 decoration-none"
                  >
                    <div className="relative h-[250px] overflow-hidden bg-zinc-100">
                      <img
                        src={proj.img}
                        alt={proj.title}
                        className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                      <div className="absolute left-4 top-4 rounded-full bg-black/75 backdrop-blur-md px-3 py-1.5 text-[10px] uppercase font-mono tracking-wider text-white border border-white/10">
                        {proj.category}
                      </div>
                      <div className="absolute right-4 top-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-black group-hover:bg-[#3a8cd7] group-hover:text-white transition-all shadow-md">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2 text-emerald-600 font-mono text-[11px] font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span>{proj.displayUrl}</span>
                        </div>
                        <h3 className="text-xl font-black text-black tracking-tight leading-snug group-hover:text-[#3a8cd7] transition-colors">
                          {proj.title}
                        </h3>
                        <p className="text-black/60 text-xs leading-relaxed mt-2 line-clamp-2">
                          {proj.desc}
                        </p>
                      </div>
                      <div className="pt-4 border-t border-black/5 flex items-center justify-between text-xs font-semibold text-black/70 group-hover:text-black">
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-[#3a8cd7]">
                          Visit Live Site <ArrowUpRight size={12} />
                        </span>
                        <span className="text-[10px] font-mono text-black/40">Verified Live</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── BROWSER EXTENSIONS & AUTOMATION SECTION ── */}
      {(activeTab === "all" || activeTab === "extensions") && (
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
      )}

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

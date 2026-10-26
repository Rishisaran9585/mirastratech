"use client";
import React, { useState } from "react";
import {
  Mail,
  Phone,
  ExternalLink,
  ChevronRight,
  Check,
  Globe,
  Heart,
  ShoppingBag,
} from "lucide-react";
import CTAButton from "../CTAButton";
import SpotlightCard from "../reactbits/SpotlightCard";
import TiltedCard from "../reactbits/TiltedCard";
import ScrollReveal from "../reactbits/ScrollReveal";
import FadeContent from "../reactbits/FadeContent";
import StarBorder from "../reactbits/StarBorder";

const FEATURED_PROJECTS = [
  {
    name: "Mugai Technologies",
    cat: "Business & Corporate",
    url: "https://aliceblue-tiger-698743.hostingersite.com/",
    initials: "MT",
    icon: Globe,
  },
  {
    name: "Sri Sukhalaya Matrimony",
    cat: "Matrimony Platform",
    url: "https://limegreen-antelope-183177.hostingersite.com/",
    initials: "SM",
    icon: Heart,
  },
  {
    name: "Lishan Sarees",
    cat: "E-Commerce",
    url: "https://lishansarees.com/",
    initials: "LS",
    icon: ShoppingBag,
  },
];

const OTHER_PROJECTS = [
  {
    name: "Aghora Engineering Consultants",
    cat: "Business & Corporate",
    url: "https://aghoraengineeringconsultants.com/",
  },
  {
    name: "District Bar Association",
    cat: "Legal & Associations",
    url: "https://hotpink-wasp-145065.hostingersite.com/",
  },
  {
    name: "Diocese of Indian Christian Church",
    cat: "Organizations",
    url: "https://lavender-bear-754863.hostingersite.com/",
  },
  { name: "IELTS Horizon", cat: "Education & Training", url: "https://ieltshorizon.com/" },
  {
    name: "Find You Counselling Center",
    cat: "Healthcare & Wellness",
    url: "https://lime-spoonbill-743959.hostingersite.com/",
  },
  {
    name: "Tamil Oviyam",
    cat: "Media & Culture",
    url: "https://grey-boar-606830.hostingersite.com/",
  },
  { name: "Medai The Stage", cat: "Entertainment & Creative", url: "https://medaithestage.com/" },
  { name: "Kinngs Network", cat: "Media & Networking", url: "https://kinngsnetwork.com/" },
  { name: "Just In Travels", cat: "Travel & Tourism", url: "https://justintravels.in/" },
  {
    name: "First Dream Destination Tours",
    cat: "Travel & Tourism",
    url: "https://www.firstdreamdestinations.com/",
  },
  {
    name: "Kleen Kulb",
    cat: "SaaS Platform",
    url: "https://cornflowerblue-grasshopper-952998.hostingersite.com/",
  },
];

const SERVICES = [
  {
    title: "Website Development",
    details: "Static (from ₹5,000), Dynamic (₹7,000-₹10,000+), Animated (from ₹10,000+).",
    bullets: ["Responsive Design", "Mobile Friendly", "WhatsApp Integration", "SEO-Friendly"],
  },
  {
    title: "Web Applications",
    details: "Custom applications designed for business management and scalability.",
    bullets: ["SaaS Platforms", "Admin Dashboards", "Booking Systems", "Analytics Panels"],
  },
  {
    title: "Mobile App Development",
    details: "Custom mobile applications built for performance and user engagement.",
    bullets: ["Android Applications", "iOS Applications", "Cross-Platform", "Business Apps"],
  },
  {
    title: "Custom Software",
    details: "Tailor-made systems integrated perfectly with your standard workflow.",
    bullets: ["CRM Systems", "HRM Systems", "ERP Solutions", "Inventory & Billing"],
  },
  {
    title: "Browser Extensions",
    details: "Chrome extensions built to automate web workflows and boost productivity.",
    bullets: ["Chrome Extensions", "Workflow Automation", "Lead Gen Tools", "Social Media Tools"],
  },
  {
    title: "Automation Solutions",
    details: "Reduce manual workflows with automated integrations.",
    bullets: ["Lead Generation", "Data Processing", "Business Process", "Engagement Setup"],
  },
  {
    title: "Digital Marketing",
    details: "Social handling, Meta Ads, & shoots starting from ₹7,000 up to ₹25,000/month.",
    bullets: [
      "Meta Ads Management",
      "Social Media Handling",
      "Video Shoot + Editing",
      "Lead Generation campaigns",
    ],
  },
  {
    title: "QA Testing & Audits",
    details: "Ensure software security, reliability, and speed before launch day.",
    bullets: [
      "Manual Testing",
      "Automation Testing",
      "Functional & Regression",
      "Performance Audits",
    ],
  },
];

export default function ServicesPortfolioContact() {
  const [formState, setFormState] = useState({ name: "", email: "", details: "" });
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email) {
      return;
    }
    
    setStatus("sending");

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formState.name,
          email: formState.email,
          message: formState.details || "No project details provided.",
          from_name: "Mirastra Portfolio Page Contact Form",
          subject: `New Lead: ${formState.name} (Portfolio Page)`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormState({ name: "", email: "", details: "" });
        setStatus("idle");
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        console.error("Web3Forms error:", result);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full relative" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* SECTION 2.1: SERVICES (White Background, Black Text) */}
      <section
        id="services"
        className="w-full bg-white text-black py-32 border-t border-black/10 relative overflow-hidden"
      >
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 w-full mb-20">
            <ScrollReveal y={30} delay={0.05} duration={0.8}>
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-black/55 mb-4">
                  //01 Capabilities
                </p>
                <h2 className="font-instrument text-5xl sm:text-7xl md:text-8xl tracking-tight leading-none text-black">
                  Core Services.
                </h2>
              </div>
            </ScrollReveal>
            <ScrollReveal y={35} delay={0.15} duration={0.8} className="self-end">
              <p className="text-sm sm:text-base text-black/75 max-w-[320px] leading-relaxed font-light">
                Static websites, custom web applications, native mobile apps, browser extensions,
                and business process automation solutions built to scale.
              </p>
            </ScrollReveal>
          </div>

          {/* Grid of 8 Services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full relative z-20">
            {SERVICES.map((srv, idx) => (
              <ScrollReveal key={idx} y={30} delay={0.05 * idx} duration={0.7}>
                <SpotlightCard
                  spotlightColor="rgba(0, 0, 0, 0.05)"
                  spotlightSize={250}
                  className="border border-black/15 bg-white rounded-[24px] p-8 hover:scale-[1.02] transition-transform duration-300"
                >
                  <span className="text-[10px] tracking-widest text-black/55 uppercase font-bold block mb-2">
                    // 0{idx + 1} CAPABILITY
                  </span>
                  <h4 className="font-instrument text-2xl text-black mb-2 leading-none">
                    {srv.title}
                  </h4>
                  <p className="text-[11px] text-black/75 leading-relaxed mb-6 h-12 overflow-hidden">
                    {srv.details}
                  </p>
                  <ul className="space-y-1.5 border-t border-black/10 pt-4">
                    {srv.bullets.map((b, bIdx) => (
                      <li
                        key={bIdx}
                        className="text-[10px] text-black/75 flex items-center gap-1.5 font-light"
                      >
                        <span className="w-1.5 h-1.5 bg-black rounded-full" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2.2: PORTFOLIO & WORK (Black Background, White Text) */}
      <section
        id="portfolio"
        className="w-full bg-black text-white py-32 border-t border-white/10 relative overflow-hidden"
      >
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
            <ScrollReveal y={30} delay={0.05} duration={0.8}>
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-white/55 mb-4">
                  //02 Launches
                </p>
                <h2 className="font-instrument text-5xl sm:text-7xl md:text-8xl tracking-tight leading-none text-white">
                  Client Portfolio
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal y={20} delay={0.15} duration={0.8}>
              <button
                onClick={() => handleScrollTo("contact")}
                className="font-instrument text-xl text-white hover:text-white/60 transition-colors cursor-pointer select-none bg-transparent border-none border-b border-white/20 pb-1"
              >
                Start Project →
              </button>
            </ScrollReveal>
          </div>

          {/* Featured Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {FEATURED_PROJECTS.map((card, idx) => {
              const Icon = card.icon;
              return (
                <ScrollReveal key={idx} y={35} delay={0.05 * idx} duration={0.8}>
                  <TiltedCard
                    maxTilt={12}
                    scale={1.03}
                    glare={true}
                    glareOpacity={0.15}
                    className="border border-white/15 bg-black rounded-[32px] p-[18px] flex flex-col justify-between h-full"
                  >
                    <div className="w-full flex flex-col justify-between h-full">
                      {/* solid fallbacks for stock video - display initials card */}
                      <div className="relative pb-[100%] rounded-[24px] bg-[#121212] border border-white/5 flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden mb-5">
                        <div className="absolute inset-x-0 top-6 text-[10px] tracking-[0.25em] opacity-40 select-none">
                          FEATURED // 0{idx + 1}
                        </div>
                        <div className="font-playfair italic text-6xl sm:text-7xl select-none leading-none text-white mb-2">
                          {card.initials}
                        </div>
                        <Icon size={24} className="text-white/40" />
                      </div>

                      <div className="border border-white/15 bg-black rounded-[20px] px-5 py-4 flex items-center justify-between">
                        <div className="max-w-[70%]">
                          <div className="text-[10px] text-white/55 uppercase tracking-widest select-none">
                            {card.cat}
                          </div>
                          <div className="text-base font-bold text-white mt-0.5 tracking-wide truncate">
                            {card.name}
                          </div>
                        </div>

                        <a
                          href={card.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-[48px] h-[48px] rounded-full bg-white text-black flex items-center justify-center hover:scale-110 active:scale-95 transition-transform cursor-pointer"
                        >
                          <ChevronRight size={22} strokeWidth={2.5} />
                        </a>
                      </div>
                    </div>
                  </TiltedCard>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Other Portfolio List */}
          <ScrollReveal
            y={30}
            delay={0.05}
            duration={0.8}
            className="border-t border-white/10 pt-16 mt-20"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-white/55 mb-6">
              // Launcher Directory
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {OTHER_PROJECTS.map((proj, idx) => (
                <a
                  key={idx}
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/15 bg-black/60 rounded-[16px] px-6 py-4 flex justify-between items-center hover:bg-white/5 transition-all group"
                >
                  <div>
                    <div className="text-[10px] text-white/55 uppercase tracking-widest">
                      {proj.cat}
                    </div>
                    <div className="text-sm font-medium text-white group-hover:text-white/60 transition-colors mt-0.5">
                      {proj.name}
                    </div>
                  </div>
                  <ExternalLink
                    size={14}
                    className="text-white/40 group-hover:text-white transition-colors"
                  />
                </a>
              ))}
            </div>
          </ScrollReveal>

          {/* Technology Expertise Section */}
          <ScrollReveal
            y={30}
            delay={0.05}
            duration={0.8}
            className="border-t border-white/10 pt-16 mt-24"
          >
            <div id="tech-stack-section">
              <p className="text-xs tracking-[0.3em] uppercase text-white/55 mb-10">
                // Technology Expertise
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                  <h4 className="text-sm tracking-widest uppercase mb-4 text-white font-bold pb-2 border-b border-white/10">
                    Frontend
                  </h4>
                  <ul className="space-y-1.5 text-xs text-white/70">
                    {[
                      "React.js",
                      "Next.js",
                      "Angular",
                      "JavaScript",
                      "TypeScript",
                      "Tailwind CSS",
                    ].map((t) => (
                      <li key={t} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-white rounded-full" /> {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm tracking-widest uppercase mb-4 text-white font-bold pb-2 border-b border-white/10">
                    Backend
                  </h4>
                  <ul className="space-y-1.5 text-xs text-white/70">
                    {["Node.js", "Express.js", "PHP", "REST APIs", "Custom API Development"].map(
                      (t) => (
                        <li key={t} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-white rounded-full" /> {t}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm tracking-widest uppercase mb-4 text-white font-bold pb-2 border-b border-white/10">
                    Database
                  </h4>
                  <ul className="space-y-1.5 text-xs text-white/70">
                    {["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Real-Time Databases"].map(
                      (t) => (
                        <li key={t} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-white rounded-full" /> {t}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm tracking-widest uppercase mb-4 text-white font-bold pb-2 border-b border-white/10">
                    Infrastructure
                  </h4>
                  <ul className="space-y-1.5 text-xs text-white/70">
                    {[
                      "Cloud Deployment",
                      "VPS Servers",
                      "SSL Config",
                      "Performance Optimisation",
                      "Security Audits",
                    ].map((t) => (
                      <li key={t} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-white rounded-full" /> {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Industries We Serve */}
          <ScrollReveal
            y={30}
            delay={0.05}
            duration={0.8}
            className="border-t border-white/10 pt-16 mt-24"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-white/55 mb-8">
              // Industries We Serve
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Education & E-Learning",
                "Healthcare & Wellness",
                "Legal & Associations",
                "Travel & Tourism",
                "Matrimony Platforms",
                "Media & Entertainment",
                "Retail & E-Commerce",
                "Consulting & SaaS Products",
                "Small & Medium Businesses",
              ].map((ind) => (
                <span
                  key={ind}
                  className="border border-white/15 bg-black rounded-full px-5 py-2 text-xs text-white/80 uppercase select-none hover:bg-white/5 transition-colors"
                >
                  {ind}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 2.3: CONTACT & DETAILS (White Background, Black Text) */}
      <section
        id="contact"
        className="w-full bg-white text-black py-32 border-t border-black/10 relative overflow-hidden"
      >
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Info Panel */}
            <ScrollReveal y={30} delay={0.05} duration={0.8}>
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-black/55 mb-4">
                  //03 Contact
                </p>
                <h2 className="font-instrument text-5xl sm:text-7xl md:text-8xl tracking-tight leading-none text-black mb-8">
                  Let's build.
                </h2>

                <div className="relative inline-block mb-10 select-none">
                  <span className="font-playfair italic font-normal text-black/60 text-lg">
                    Partner with us
                  </span>
                </div>

                {/* Direct links box */}
                <div className="flex flex-col border border-black/15 bg-white rounded-[20px] max-w-xs mt-6">
                  <a
                    href="mailto:mirastratech@gmail.com"
                    className="px-6 py-4 flex items-center hover:bg-black/5 transition-colors duration-200 cursor-pointer border-b border-black/10"
                  >
                    <Mail className="text-black w-5 h-5 mr-3" />
                    <span className="text-xs text-black uppercase font-bold tracking-widest">
                      mirastratech@gmail.com
                    </span>
                  </a>
                  <a
                    href="tel:+917871873038"
                    className="px-6 py-4 flex items-center hover:bg-black/5 transition-colors duration-200 cursor-pointer"
                  >
                    <Phone className="text-black w-5 h-5 mr-3" />
                    <span className="text-xs text-black uppercase font-bold tracking-widest">
                      +91 78718 73038
                    </span>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Form Panel */}
            <ScrollReveal y={30} delay={0.15} duration={0.8} className="w-full">
              {submitted ? (
                <div className="border border-black/15 bg-white rounded-[24px] p-8 text-left max-w-md shadow-lg animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center mb-4">
                    <Check className="text-black" size={24} />
                  </div>
                  <h3 className="font-instrument text-2xl text-black mb-2 uppercase">
                    Message sent.
                  </h3>
                  <p className="text-xs text-black/75 leading-relaxed uppercase">
                    We have received your details. A project manager will establish contact shortly.
                  </p>
                </div>
              ) : (
                <StarBorder
                  color="#000000"
                  speed={3.5}
                  borderRadius="24px"
                  borderWidth={1}
                  className="max-w-md shadow-sm border border-black/15"
                >
                  <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8">
                    <h3 className="font-instrument text-xl text-black text-center border-b border-black/10 pb-4 mb-4 select-none uppercase">
                      Project Brief
                    </h3>

                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-black/55 mb-2 block select-none">
                        Full Name
                      </label>
                      <input
                        value={formState.name}
                        onChange={(e) =>
                          setFormState((prev) => ({ ...prev, name: e.target.value }))
                        }
                        type="text"
                        required
                        className="w-full bg-transparent border-b border-black/25 focus:border-black outline-none py-2 text-sm text-black transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-black/55 mb-2 block select-none">
                        Email Address
                      </label>
                      <input
                        value={formState.email}
                        onChange={(e) =>
                          setFormState((prev) => ({ ...prev, email: e.target.value }))
                        }
                        type="email"
                        required
                        className="w-full bg-transparent border-b border-black/25 focus:border-black outline-none py-2 text-sm text-black transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-black/55 mb-2 block select-none">
                        Project Details
                      </label>
                      <textarea
                        value={formState.details}
                        onChange={(e) =>
                          setFormState((prev) => ({ ...prev, details: e.target.value }))
                        }
                        rows={3}
                        className="w-full bg-transparent border-b border-black/25 focus:border-black outline-none py-2 text-sm text-black transition-colors resize-none"
                      />
                    </div>

                    <div className="pt-4">
                      <CTAButton type="submit" theme="white" disabled={status === "sending"}>
                        {status === "sending" ? "Sending..." : "Send Message →"}
                      </CTAButton>
                    </div>
                  </form>
                </StarBorder>
              )}
            </ScrollReveal>
          </div>

          <div className="mt-20 border-t border-black/10 pt-8 text-[10px] tracking-widest text-black/55 uppercase select-none text-center">
            © 2026 MIRASTRA TECH — MSME Registered
          </div>
        </div>
      </section>
    </div>
  );
}

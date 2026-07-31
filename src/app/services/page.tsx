"use client";

import React, { useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { 
  Wrench,
  Brain,
  Palette,
  Film,
  Shield,
  Box,
  Cpu,
  TrendingUp,
  CheckSquare,
  FileText,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { AGENCY_CONFIG } from "@/config/agency";
import ServiceWidget from "@/components/ServiceWidgets";

function ServicesContent() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service") || "";
  const services = AGENCY_CONFIG.services;

  // Auto scroll to card matching service query param
  useEffect(() => {
    if (serviceParam) {
      const element = document.getElementById(serviceParam);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 150);
      }
    }
  }, [serviceParam]);

  // Icon mapping helper
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Wrench": return <Wrench size={20} />;
      case "Brain": return <Brain size={20} />;
      case "Palette": return <Palette size={20} />;
      case "Film": return <Film size={20} />;
      case "Shield": return <Shield size={20} />;
      case "Box": return <Box size={20} />;
      case "Cpu": return <Cpu size={20} />;
      case "TrendingUp": return <TrendingUp size={20} />;
      case "CheckSquare": return <CheckSquare size={20} />;
      case "FileText": return <FileText size={20} />;
      default: return <Wrench size={20} />;
    }
  };

  const servicePoints: Record<string, string[]> = {
    "web-maint-dev": [
      "Dynamic Next.js/React website creation and MERN stack.",
      "Uptime checks, weekly database backups, security patches.",
      "Strict PageSpeed audits targeting sub-second load times."
    ],
    "ai-ml-dev": [
      "Smart chatbot pipelines (OpenAI API/LLM models).",
      "Semantic similarity search and auto content tools.",
      "Custom NLP text classifiers and workflow scripts."
    ],
    "ui-ux-design": [
      "High-fidelity Figma wireframes, vectors, and prototypes.",
      "Real-time customer feedback layout sharing configurations.",
      "Custom responsive layouts mapping global design aesthetics."
    ],
    "video-photo-edit": [
      "Corporate video logs edits, reel sequences, product cuts.",
      "Professional color grading, exposure, contrast grades.",
      "High-impact visual branding assets and graphics support."
    ],
    "web-security": [
      "SSL config checking, DNS routing, secure keys setup.",
      "DDoS firewall protections and API rate limit layers.",
      "SQL Injection safeguards securing local database spaces."
    ],
    "three-d-websites": [
      "Interactive CSS 3D cards and Three.js canvas modules.",
      "Mouse tracking vector tilts and custom parallax landing pages.",
      "Optimized loaders to stream massive asset sizes."
    ],
    "complex-ai-ml": [
      "Custom neural networks fitted on local dataset indexes.",
      "Regression, predictive grids, and group cluster algorithms.",
      "Model evaluation summaries and cloud export modules."
    ],
    "digital-marketing": [
      "Transactional local keyword targeting (Vizag, Rajam AP).",
      "Google Business NAP citations and map placements.",
      "High conversion landing setups tracking actual lead ROI."
    ],
    "projects-completion": [
      "Code rescue workflows for delayed college/business sites.",
      "Rapid bug resolution, API repairs, and structure cleanup.",
      "Final handovers backed by strict deployment SLAs."
    ],
    "research-paper": [
      "Academic literature indexes tracking and paper wire outlines.",
      "Citation styling rules mapping (IEEE, APA, MLA formats).",
      "Technical audits checking vocabulary before journal drafts."
    ]
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 mt-8 w-full">
      {services.map((service) => {
        const points = servicePoints[service.id] || [];
        return (
          <div
            key={service.id}
            id={service.id}
            className="glass rounded-3xl border border-border/50 p-6 sm:p-8 flex flex-col justify-between gap-6 hover:border-primary/45 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 scroll-mt-24 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md"
          >
            <div className="flex flex-col gap-5">
              {/* Card Header */}
              <div className="flex items-center justify-between gap-4 border-b border-border/30 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    {getIcon(service.icon)}
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-foreground leading-tight">{service.title}</h2>
                </div>
                {/* Keywords/Badge */}
                <div className="hidden sm:block shrink-0">
                  <span className="text-[9px] italic font-semibold text-accent bg-accent/10 py-1 px-2.5 rounded-full border border-accent/20">
                    🎯 {service.keywords[0]}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                {service.description}
              </p>

              {/* Checklist & Embed Widget */}
              <div className="flex flex-col gap-5 mt-2">
                <div>
                  <h3 className="text-[10px] font-extrabold text-foreground uppercase tracking-wider mb-2">Key Features</h3>
                  <ul className="flex flex-col gap-2.5 text-xs">
                    {points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground/90 leading-normal">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-50/50 dark:bg-slate-950/20 p-1 rounded-2xl border border-border/20 shadow-inner">
                  <ServiceWidget serviceId={service.id} />
                </div>
              </div>
            </div>

            {/* Action Button */}
            <Link
              href={`/contact?service=${service.id}`}
              className="w-full mt-2 py-3.5 rounded-2xl text-xs font-bold bg-primary hover:bg-primary-hover text-white text-center flex items-center justify-center gap-1.5 transition-all shadow-md shadow-primary/10 cursor-pointer"
            >
              <span>Hire Us for {service.title}</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default function Services() {
  return (
    <div className="flex flex-col w-full font-sans">
      
      {/* Header */}
      <section className="relative overflow-hidden py-16 bg-gradient-to-b from-slate-50 to-white dark:from-[#040814] dark:to-background border-b border-border/20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[80px] pointer-events-none -z-10 animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            Our Professional Digital Capabilities
          </h1>
          <p className="text-sm sm:text-base text-muted leading-relaxed">
            We provide 10 specialized services designed to scale your startup, local shop, restaurant, or academic portal. 
            Interact with our live simulations below and book a technical callback with our AP student team.
          </p>
        </div>
      </section>

      {/* Services List Panel */}
      <section className="py-12 bg-white dark:bg-[#040814] flex-grow">
        <Suspense fallback={
          <div className="flex justify-center py-20">
            <span className="w-8 h-8 rounded-full border-4 border-primary border-t-transparent animate-spin"></span>
          </div>
        }>
          <ServicesContent />
        </Suspense>
      </section>

    </div>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { 
  Code, 
  ShoppingBag, 
  TrendingUp, 
  Megaphone, 
  Share2, 
  Layers, 
  Paintbrush, 
  Cpu, 
  Cloud, 
  Wrench, 
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { AGENCY_CONFIG } from "@/config/agency";

export default function Services() {
  const services = AGENCY_CONFIG.services;

  // Icon mapping helper
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code": return <Code size={24} />;
      case "ShoppingBag": return <ShoppingBag size={24} />;
      case "TrendingUp": return <TrendingUp size={24} />;
      case "Megaphone": return <Megaphone size={24} />;
      case "Share2": return <Share2 size={24} />;
      case "Layers": return <Layers size={24} />;
      case "Figma": return <Paintbrush size={24} />;
      case "Cpu": return <Cpu size={24} />;
      case "Cloud": return <Cloud size={24} />;
      case "Wrench": return <Wrench size={24} />;
      default: return <Code size={24} />;
    }
  };

  const servicePoints: Record<string, string[]> = {
    "web-dev": [
      "Custom static and dynamic sites built on Next.js/React.",
      "Optimized for 100/100 Core Web Vitals to improve Google rankings.",
      "Targeted local landing pages: Website Development in Vizag, Website Developers in Rajam."
    ],
    "ecommerce-dev": [
      "Secure integrations with Razorpay, PayU, and Indian UPI systems.",
      "Responsive inventory lists with dashboard options for administrators.",
      "Fast checkout tunnels optimized for mobile networks in AP."
    ],
    "seo-services": [
      "Targeted local SEO mapping for Vizag, Rajam, and Vijayawada search fields.",
      "Comprehensive JSON-LD schema injections and automated sitemap indices.",
      "Cost-effective local ranking plans: Affordable SEO Services in Andhra Pradesh."
    ],
    "digital-marketing": [
      "Targeted local pay-per-click Google Search Campaign setup.",
      "Strategic listing creation in map databases and business indexes.",
      "Inbound lead pipelines designed for restaurants, colleges, and clinics."
    ],
    "social-media": [
      "Engaging graphic templates for Instagram, LinkedIn, and Facebook pages.",
      "Consistent schedule planners optimized for peak Indian user engagement.",
      "Localized brand storytelling combining English and Telugu content."
    ],
    "mern-stack": [
      "Scalable full stack architecture built with MongoDB, Express, React, Node.js.",
      "Secure backend APIs with JWT user token verifications.",
      "Custom SaaS features, dashboards, and complex analytical reports."
    ],
    "ui-ux": [
      "Modern wireframes, interactive UI workflows, and visual design layouts.",
      "Figma workspace shares for real-time customer feedback review.",
      "Responsive design maps matching latest visual aesthetic standards."
    ],
    "ai-solutions": [
      "Intelligent chatbot installations to capture website visitor leads.",
      "Custom Open AI / LLM prompt integrations to automate workflows.",
      "Simple local data parsers and email automations."
    ],
    "cloud-deployment": [
      "Domain registrations, SSL secure integrations, and DNS setups.",
      "Host configurations on Next.js edge routers (Vercel/AWS).",
      "Git integrations for automatic code deployments on pushes."
    ],
    "website-maintenance": [
      "Periodic library and framework updates to avoid vulnerabilities.",
      "Automated cloud database backups and downtime monitors.",
      "On-demand graphic updates and content modifications."
    ]
  };

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
            Compare our offerings and book a consultation with our AP student entrepreneurs.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white dark:bg-[#040814]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col gap-16">
            {services.map((service, index) => {
              const points = servicePoints[service.id] || [];
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={service.id} 
                  id={service.id}
                  className={`scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12 border-b border-border/40 last:border-0`}
                >
                  {/* Text Column */}
                  <div className={`lg:col-span-7 flex flex-col gap-5 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                        {getIcon(service.icon)}
                      </div>
                      <h2 className="text-xl sm:text-2xl font-bold text-foreground">{service.title}</h2>
                    </div>

                    <p className="text-sm text-muted leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="flex flex-col gap-2.5 text-xs sm:text-sm">
                      {points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5">
                          <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                          <span className="text-foreground/90">{pt}</span>
                        </li>
                      ))}
                    </ul>

                    {/* SEO Terms indicator */}
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {service.keywords.map((kw, kwIdx) => (
                        <span key={kwIdx} className="text-[10px] italic font-semibold text-accent/90 bg-accent/5 py-1 px-2.5 rounded-full border border-accent/10">
                          🎯 {kw}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* Visual CTA Card Column */}
                  <div className={`lg:col-span-5 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}>
                    <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-border/60 hover:border-primary/20 shadow-sm flex flex-col justify-between gap-6">
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-muted">Consultation Package</span>
                        <h3 className="text-lg font-bold text-foreground mt-1 mb-2">Estimate Proposal</h3>
                        <p className="text-xs text-muted leading-relaxed">
                          Interested in our {service.title} capabilities? 
                          Book a 15-minute Google Meet/WhatsApp callback with our AP student team. We supply wire mockups entirely free.
                        </p>
                      </div>

                      <Link
                        href={`/contact?service=${service.id}`}
                        className="w-full py-3.5 rounded-xl text-xs font-semibold bg-primary hover:bg-primary-hover text-white text-center flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                      >
                        <span>Inquire About {service.title}</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}

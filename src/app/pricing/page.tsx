"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, HelpCircle, ArrowRight, Sparkles } from "lucide-react";

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly");

  const plans = [
    {
      name: "Starter Site",
      priceMonthly: 9999,
      priceAnnual: 7999,
      desc: "Perfect for local shops, cafes, clinics, and personal branding profiles looking for visual layouts.",
      features: [
        "100% Custom Next.js Landing Page",
        "Tailwind CSS Premium Aesthetics",
        "Fully Mobile Responsive UI",
        "WhatsApp Floating Integration",
        "Google Business & Maps Listing Setup",
        "Dynamic Contact Inquiry Form",
        "Basic Google Console Indexing",
        "1 Month Bug Fix Support"
      ],
      cta: "Get Started Now",
      srv: "web-maint-dev",
      popular: false
    },
    {
      name: "Growth Dynamic",
      priceMonthly: 24999,
      priceAnnual: 19999,
      desc: "Perfect for growing AP startups, e-commerce storefronts, and private academic colleges.",
      features: [
        "Up to 5 Fully Responsive Pages",
        "Razorpay Payments & Checkout APIs",
        "Dynamic Database Integrations (MongoDB)",
        "Standard Admin Lead Dashboards",
        "Affordable SEO Setup & Keyword Mapping",
        "Automated XML Sitemaps & robots.txt",
        "Custom Animated Statistics Blocks",
        "3 Months SLA Support Policy"
      ],
      cta: "Go Popular Choice",
      srv: "ui-ux-design",
      popular: true
    },
    {
      name: "Enterprise Custom",
      priceMonthly: 59999,
      priceAnnual: 47999,
      desc: "Complete customized full-stack systems, custom software-as-a-service (SaaS) and AI chatbot configurations.",
      features: [
        "Unlimited UI View Portals",
        "Complete MERN Stack Architecture",
        "Advanced Interactive AI Chatbots",
        "Custom Multi-role Dashboards",
        "Premium Cloud Hosting Setup (Vercel/AWS)",
        "Deep Core Web Vitals Audits & Edits",
        "Weekly Cloud Database Backup Systems",
        "1 Year Dedicated Maintenance Support"
      ],
      cta: "Book Technical Call",
      srv: "ai-ml-dev",
      popular: false
    }
  ];

  return (
    <div className="flex flex-col w-full font-sans">
      
      {/* Header */}
      <section className="relative overflow-hidden py-16 bg-gradient-to-b from-slate-50 to-white dark:from-[#040814] dark:to-background border-b border-border/20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[80px] pointer-events-none -z-10 animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl flex flex-col items-center gap-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Simple, Value-Packed Pricing Tiers
          </h1>
          <p className="text-sm sm:text-base text-muted leading-relaxed max-w-2xl">
            Get premium enterprise code at student rates. No hidden management charges. 
            Select billing commitment to secure a 20% discount on annual commitments.
          </p>

          {/* Toggle */}
          <div className="flex items-center gap-3 bg-slate-100 dark:bg-slate-900 border border-border p-1.5 rounded-full mt-6">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                billingPeriod === "monthly"
                  ? "bg-primary text-white shadow-sm"
                  : "text-muted hover:text-foreground"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingPeriod("annual")}
              className={`px-5 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                billingPeriod === "annual"
                  ? "bg-primary text-white shadow-sm"
                  : "text-muted hover:text-foreground"
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[9px] bg-accent/20 dark:bg-accent/30 text-accent font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                -20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Cards Pricing */}
      <section className="py-20 bg-white dark:bg-[#040814]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan) => {
              const price = billingPeriod === "monthly" ? plan.priceMonthly : plan.priceAnnual;
              return (
                <div
                  key={plan.name}
                  className={`group relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl border transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-b from-primary/5 to-transparent dark:from-primary/10 dark:to-slate-950/20 border-primary shadow-lg shadow-primary/5 -translate-y-1"
                      : "bg-slate-50 dark:bg-slate-900/60 border-border/60 hover:border-primary/30 shadow-sm"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-3 py-1 rounded-full text-[9px] font-extrabold bg-primary text-white uppercase tracking-wider">
                      <Sparkles size={10} />
                      Most Popular Plan
                    </span>
                  )}

                  <div>
                    <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                    <p className="text-xs text-muted leading-relaxed mt-2.5 mb-6">
                      {plan.desc}
                    </p>

                    <div className="flex items-baseline gap-1 mb-8">
                      <span className="text-sm font-semibold text-foreground/80">₹</span>
                      <span className="text-4xl font-black text-foreground tracking-tight">
                        {price.toLocaleString("en-IN")}
                      </span>
                      <span className="text-xs text-muted">/{billingPeriod === "monthly" ? "mo" : "mo, billed annually"}</span>
                    </div>

                    <div className="flex flex-col gap-3">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-muted mb-1">What's Included</div>
                      {plan.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-2.5 text-xs text-foreground/90">
                          <Check size={14} className="text-primary shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border/40">
                    <Link
                      href={`/contact?service=${plan.srv}`}
                      className={`w-full py-3.5 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-colors ${
                        plan.popular
                          ? "bg-primary hover:bg-primary-hover text-white shadow-md shadow-primary/10"
                          : "bg-white dark:bg-slate-950 border border-border text-foreground hover:bg-slate-50 dark:hover:bg-slate-900"
                      }`}
                    >
                      <span>{plan.cta}</span>
                      <ArrowRight size={14} />
                    </Link>
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

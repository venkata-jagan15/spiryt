"use client";

import React, { useState } from "react";
import { ChevronDown, Search, HelpCircle, Layers } from "lucide-react";
import SchemaMarkup from "@/components/SchemaMarkup";

export default function Faqs() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const categories = ["All", "General", "Technical", "SEO & Marketing", "Billing"];

  const faqs = [
    {
      id: "faq_1",
      category: "General",
      q: "Who is Beyond the Timeline?",
      a: "Beyond the Timeline is a premium digital development agency comprised of highly skilled student entrepreneurs from colleges in Andhra Pradesh, India (e.g. GMRIT, Vignan, Andhra University). We build clean, high-performance web products for local enterprises."
    },
    {
      id: "faq_2",
      category: "Technical",
      q: "What programming languages and frameworks do you use?",
      a: "We specialize in modern frontend and backend architectures: React.js, Next.js (App Router), Node.js, Express, MongoDB, and Tailwind CSS. We use TypeScript for strict compilations and deploy on AWS, Vercel, or GCP."
    },
    {
      id: "faq_3",
      category: "SEO & Marketing",
      q: "How do your affordable SEO services in Andhra Pradesh work?",
      a: "Our SEO services are focused on search queries representing high transactional intent in regional AP markets (like 'Website Development in Vizag' or 'Website Developers in Rajam'). We perform deep keyphrase research, optimize Core Web Vitals, write schema structured descriptions, and set up Google Console listings."
    },
    {
      id: "faq_4",
      category: "Billing",
      q: "Why are your rates so affordable compared to other agencies?",
      a: "As student developers, we operate with low overhead. We are building a stellar track record and portfolio. Therefore, we offer professional, enterprise-grade code templates at pricing models designed to suit startups."
    },
    {
      id: "faq_5",
      category: "General",
      q: "Where can we meet the Beyond the Timeline team in person?",
      a: "We are physically based in the Vizag Tech Corridor and GMRIT campus area in Rajam. We can arrange face-to-face consults in Visakhapatnam, Rajam, and Kakinada, or collaborate via standard video meetings."
    },
    {
      id: "faq_6",
      category: "Technical",
      q: "Will our website load fast on standard mobile networks?",
      a: "Yes! Every website we write is engineered for Core Web Vitals. We optimize image weight (using Next.js <Image>), cache assets globally, and bundle CSS variables, resulting in sub-2 second rendering speeds even on 4G lines."
    },
    {
      id: "faq_7",
      category: "Billing",
      q: "Do you offer monthly payment options?",
      a: "Yes! We support monthly billing cycles for our Growth and Enterprise services, as well as a 20% discount on annual commitments."
    },
    {
      id: "faq_8",
      category: "SEO & Marketing",
      q: "Will we get a custom Google Maps listing?",
      a: "Absolutely. For local businesses, a verified Google Maps coordinate is critical. We compile names, addresses, and telephone details (NAP) to ensure you rank on local map blocks."
    }
  ];

  const filteredFaqs = faqs.filter((f) => {
    const matchesSearch = 
      f.q.toLowerCase().includes(search.toLowerCase()) || 
      f.a.toLowerCase().includes(search.toLowerCase());
      
    const matchesCat = activeCategory === "All" || f.category === activeCategory;

    return matchesSearch && matchesCat;
  });

  // Dynamic FAQ schema generator
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  return (
    <div className="flex flex-col w-full font-sans">
      <SchemaMarkup schema={faqSchema} />

      {/* Header */}
      <section className="relative overflow-hidden py-16 bg-gradient-to-b from-slate-50 to-white dark:from-[#040814] dark:to-background border-b border-border/20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[80px] pointer-events-none -z-10 animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl flex flex-col items-center gap-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Frequently Answered FAQ Help
          </h1>
          <p className="text-sm sm:text-base text-muted leading-relaxed">
            Read detailed specifications about our agency structure, tech stacks, local SEO techniques, 
            and post-launch SLAs. Use filters to narrow queries.
          </p>
        </div>
      </section>

      {/* Accordions */}
      <section className="py-16 bg-white dark:bg-[#040814]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 pb-6 border-b border-border/40">
            {/* Search */}
            <div className="relative w-full md:max-w-xs">
              <input
                type="text"
                placeholder="Search FAQs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-border bg-slate-50 dark:bg-slate-900 text-foreground text-xs focus:outline-none focus:border-primary"
              />
              <Search size={14} className="absolute left-3.5 top-3.5 text-muted" />
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setActiveFaq(null);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-primary text-white shadow-md"
                      : "bg-slate-100 dark:bg-slate-900 text-muted hover:text-foreground border border-border/40"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Accordion List */}
          <div className="flex flex-col gap-4">
            {filteredFaqs.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-border/50 bg-slate-50 dark:bg-slate-900/60 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between text-xs sm:text-sm font-bold text-foreground hover:text-primary transition-colors focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={16}
                      className={`text-muted transition-transform duration-300 shrink-0 ml-2 ${
                        isOpen ? "transform rotate-180 text-primary" : ""
                      }`}
                    />
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs text-muted leading-relaxed border-t border-border/20 animate-in slide-in-from-top-4 duration-300">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}

            {filteredFaqs.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted">No FAQs found matching your query.</p>
              </div>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}

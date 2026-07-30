"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertCircle, Sparkles, MapPin, Calendar, Clock } from "lucide-react";
import { PORTFOLIO_PROJECTS } from "@/data/portfolioData";

export default function CaseStudies() {
  const projects = PORTFOLIO_PROJECTS;

  return (
    <div className="flex flex-col w-full font-sans">
      
      {/* Header */}
      <section className="relative overflow-hidden py-16 bg-gradient-to-b from-slate-50 to-white dark:from-[#040814] dark:to-background border-b border-border/20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[80px] pointer-events-none -z-10 animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            Detailed Customer Case Studies
          </h1>
          <p className="text-sm sm:text-base text-muted leading-relaxed">
            Read how Spiryt resolves complex operations, implements e-commerce checkouts, 
            builds high-volume academic nodes, and elevates local visibility across Andhra Pradesh.
          </p>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-20 bg-white dark:bg-[#040814]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col gap-24">
            {projects.map((project, idx) => (
              <div 
                key={project.id} 
                id={project.id}
                className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-border/40 last:border-0 last:pb-0"
              >
                
                {/* Visual Stats Sidebar - Left or Right */}
                <div className="lg:col-span-4 flex flex-col gap-6 lg:order-2">
                  <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-border/50 shadow-sm flex flex-col gap-6">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary">Key Outcomes</span>
                      <h3 className="text-lg font-bold text-foreground mt-1 mb-4">Project Metrics</h3>
                      
                      <div className="grid grid-cols-2 gap-4">
                        {project.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="p-3 bg-white dark:bg-slate-950 border border-border/40 rounded-2xl flex flex-col">
                            <span className="text-lg font-black text-foreground">{m.value}</span>
                            <span className="text-[9px] text-muted font-bold uppercase tracking-wider">{m.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3.5 pt-4 border-t border-border/30 text-xs text-muted">
                      <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-primary shrink-0" />
                        <span>Client: <span className="font-semibold text-foreground/80">{project.client}</span></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-primary shrink-0" />
                        <span>Location: <span className="font-semibold text-foreground/80">{project.location}</span></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={14} className="text-primary shrink-0" />
                        <span>Duration: <span className="font-semibold text-foreground/80">{project.duration}</span></span>
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="w-full py-3 text-xs font-semibold bg-primary hover:bg-primary-hover text-white text-center rounded-xl transition-colors shadow-sm"
                    >
                      Request Similar Solution
                    </Link>
                  </div>
                </div>

                {/* Content Core - Left or Right */}
                <div className="lg:col-span-8 flex flex-col gap-6 lg:order-1">
                  <div>
                    <span className="text-[10px] font-extrabold bg-accent/10 text-accent py-1 px-3.5 rounded-full border border-accent/20 uppercase tracking-widest">
                      {project.category}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-4 mb-2">
                      {project.title}
                    </h2>
                    <p className="text-sm text-muted leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Challenge */}
                  <div className="flex gap-4 p-5 rounded-2xl bg-red-50/50 dark:bg-red-950/5 border border-red-200/50 dark:border-red-900/10">
                    <AlertCircle size={20} className="text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-foreground mb-1">The Operational Challenge</h4>
                      <p className="text-xs sm:text-sm text-muted leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>
                  </div>

                  {/* Solution */}
                  <div className="flex gap-4 p-5 rounded-2xl bg-primary/5 dark:bg-primary/5 border border-primary/20 dark:border-primary/10">
                    <Sparkles size={20} className="text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-foreground mb-1">Our Technical Solution</h4>
                      <p className="text-xs sm:text-sm text-muted leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="flex flex-col gap-3">
                    <h4 className="font-bold text-sm text-foreground">Tangible Business Results</h4>
                    <ul className="flex flex-col gap-2.5">
                      {project.results.map((r, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                          <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-foreground/90">{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, ArrowRight, Layers, SlidersHorizontal } from "lucide-react";
import { PORTFOLIO_PROJECTS } from "@/data/portfolioData";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Web Development", "MERN Stack", "E-Commerce", "UI/UX & Web Dev"];

  const filteredProjects = PORTFOLIO_PROJECTS.filter((project) => {
    if (filter === "All") return true;
    if (filter === "UI/UX & Web Dev") return project.category.includes("UI/UX");
    return project.category === filter;
  });

  return (
    <div className="flex flex-col w-full font-sans">
      
      {/* Header */}
      <section className="relative overflow-hidden py-16 bg-gradient-to-b from-slate-50 to-white dark:from-[#040814] dark:to-background border-b border-border/20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[80px] pointer-events-none -z-10 animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            Our Portfolio Showcase
          </h1>
          <p className="text-sm sm:text-base text-muted leading-relaxed">
            Discover real-world projects we've designed, developed, and optimized. Filter projects to inspect 
            our Web, E-Commerce, MERN, and local SEO integrations in Andhra Pradesh.
          </p>
        </div>
      </section>

      {/* Filter and Grid */}
      <section className="py-16 bg-white dark:bg-[#040814]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filters Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12 pb-6 border-b border-border/40">
            <div className="flex items-center gap-2 text-xs font-bold text-muted uppercase tracking-wider">
              <SlidersHorizontal size={14} className="text-primary" />
              <span>Filter Categories</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4.5 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                    filter === cat
                      ? "bg-primary text-white shadow-md shadow-primary/10"
                      : "bg-slate-100 dark:bg-slate-900 text-muted hover:text-foreground border border-border/40"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl bg-slate-50 dark:bg-slate-900 border border-border/50 hover:border-primary/40 hover:shadow-xl transition-all duration-300"
              >
                <div>
                  {/* Banner */}
                  <div className="h-44 bg-gradient-to-br from-primary/15 to-accent/10 flex flex-col items-center justify-center p-6 border-b border-border/30 relative">
                    <span className="absolute top-4 left-4 text-[9px] font-extrabold bg-slate-900/90 text-white py-1 px-2.5 rounded-full uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h4 className="text-lg font-bold text-center text-foreground group-hover:text-primary transition-colors leading-snug max-w-[240px]">
                      {project.title}
                    </h4>
                    <span className="text-xs text-muted flex items-center gap-1 mt-2">
                      <MapPin size={11} />
                      {project.location}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="p-6">
                    <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6">
                      {project.description}
                    </p>
                    
                    {/* Points */}
                    <div className="flex flex-col gap-2 mb-6">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-muted">Problem Statement</div>
                      <p className="text-xs text-foreground/80 line-clamp-2 italic leading-relaxed">
                        "{project.challenge}"
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="text-[9px] font-semibold px-2 py-0.5 bg-white dark:bg-slate-950 border border-border rounded-full text-muted">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Metrics & Link */}
                <div className="px-6 py-4 bg-slate-100/50 dark:bg-slate-950/20 border-t border-border/30 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    {project.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-xs font-black text-foreground leading-none">{m.value}</span>
                        <span className="text-[8px] text-muted font-bold uppercase tracking-wider">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/case-studies#${project.id}`}
                    className="font-bold text-primary hover:text-primary-hover flex items-center gap-1 shrink-0"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>

              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted">No projects found in this category.</p>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users, GraduationCap, Compass, Heart, Award, ArrowRight } from "lucide-react";
import { AGENCY_CONFIG } from "@/config/agency";

export default function About() {
  const team = [
    {
      name: "S. Kalyan Kumar",
      role: "Lead Full-Stack Developer",
      edu: "B.Tech CSE, GMRIT",
      spec: "MERN Stack, Next.js, Cloud Architectures",
      initials: "KK"
    },
    {
      name: "B. Harini",
      role: "UI/UX & Frontend Designer",
      edu: "B.Tech IT, VIGNAN",
      spec: "Figma Prototypes, Tailwind Styling, Accessibility",
      initials: "BH"
    },
    {
      name: "P. Rakesh Patnaik",
      role: "SEO & Growth Lead",
      edu: "B.Tech CSE, AU College of Eng.",
      spec: "Local SEO, Core Web Vitals Optimization, Analytics",
      initials: "RP"
    }
  ];

  return (
    <div className="flex flex-col w-full font-sans">
      
      {/* Hero Header */}
      <section className="relative overflow-hidden py-16 bg-gradient-to-b from-slate-50 to-white dark:from-[#040814] dark:to-background border-b border-border/20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-primary/10 blur-[80px] pointer-events-none -z-10 animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 dark:bg-primary/20 mb-4">
            <GraduationCap size={12} />
            <span>Empowering Young Engineers</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            Meet the Student Minds Behind Beyond the Timeline
          </h1>
          <p className="text-sm sm:text-base text-muted leading-relaxed">
            We are a collaborative network of elite student entrepreneurs from Andhra Pradesh, India, 
            bridging academic software concepts with high-value enterprise deliverables.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white dark:bg-[#040814]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Visual Column */}
            <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-border/50 flex flex-col justify-center gap-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-bl-full pointer-events-none"></div>
              
              <span className="text-5xl sm:text-6xl font-black gradient-text">Beyond the Timeline</span>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                How We Started
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Beyond the Timeline began as a group of classmates doing freelance web assignments in college computer labs. 
                Recognizing the demand from local Vizag companies and AP startups for fast, responsive web systems that are 
                actually structured to rank on Google, we established Beyond the Timeline.
              </p>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Today, our agency connects top-ranking student developers and UI/UX designers, enabling small businesses in 
                Vizag, Rajam, and Vijayawada to secure premium custom sites at accessible, student-budget pricing.
              </p>
            </div>

            {/* Content Column */}
            <div className="flex flex-col gap-6">
              <span className="text-xs font-extrabold text-primary uppercase tracking-widest">Our Blueprint</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                Bridging Technology & Local Indian Entrepreneurship
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                Every business deserves a fast, functional web setup. We harness next-gen React frameworks, 
                advanced Node.js backends, and semantic SEO frameworks to support your local store's conversion stats.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Compass size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-foreground mb-1">Our Mission</h4>
                    <p className="text-xs text-muted leading-relaxed">
                      Deliver elite MERN stack and Next.js applications at prices local AP startups can easily afford.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    <Heart size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-foreground mb-1">Core Values</h4>
                    <p className="text-xs text-muted leading-relaxed">
                      Absolute transparency, production-ready coding style, and local dedication to client success.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-slate-50 dark:bg-background border-t border-border/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-3">
            <span className="text-xs font-extrabold text-primary uppercase tracking-widest">Student Founders</span>
            <h3 className="text-3xl font-extrabold text-foreground">Meet the Core Team</h3>
            <p className="text-sm text-muted">
              Talented engineers from Andhra Pradesh engineering universities building your web solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group p-6 sm:p-8 rounded-3xl bg-card-bg border border-border/50 hover:border-primary/40 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {member.initials}
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-1">{member.name}</h4>
                  <p className="text-xs font-semibold text-primary mb-3">{member.role}</p>
                  <span className="inline-block text-[10px] font-bold bg-slate-100 dark:bg-slate-900 border border-border py-1 px-2.5 rounded-full text-muted mb-4">
                    {member.edu}
                  </span>
                  <p className="text-xs text-muted leading-relaxed">
                    Specializing in: <span className="font-semibold text-foreground/80">{member.spec}</span>
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-border/30 flex gap-2">
                  <a href="#" className="text-[10px] font-semibold text-muted hover:text-primary">LinkedIn</a>
                  <span className="text-muted">•</span>
                  <a href="#" className="text-[10px] font-semibold text-muted hover:text-primary">GitHub Port</a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Box */}
      <section className="py-20 bg-white dark:bg-[#040814] border-t border-border/25">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-tr from-primary/15 to-accent/10 dark:from-primary/5 dark:to-accent/5 border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="flex flex-col gap-2 max-w-xl">
              <h3 className="text-2xl font-bold text-foreground">Want to hire student web developers in India?</h3>
              <p className="text-xs sm:text-sm text-muted">
                Contact Beyond the Timeline today. Get direct WhatsApp support, visual proposals and fair estimates tailored for startups.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full text-sm font-semibold bg-primary hover:bg-primary-hover text-white flex items-center justify-center gap-1.5 shrink-0 transition-colors shadow-md hover:shadow-primary/20"
            >
              <span>Get Free Consultation</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

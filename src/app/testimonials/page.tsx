"use client";

import React, { useState } from "react";
import Link from "next/font/google";
import { Star, Quote, MapPin, Map } from "lucide-react";

export default function Testimonials() {
  const [activeLoc, setActiveLoc] = useState("All");

  const locations = ["All", "Visakhapatnam", "Rajam", "Vijayawada"];

  const reviews = [
    {
      text: "The student team at Beyond the Timeline delivered a stellar website for our restaurant. Our reservations grew by 42%, and we rank #1 in local searches in Vizag! Highly professional and cost-effective.",
      author: "M. Jagannadha Rao",
      role: "General Manager",
      company: "Spice Garden Culinary",
      location: "Visakhapatnam",
      rating: 5
    },
    {
      text: "We needed a student portal directory for Apex Engineering College. Beyond the Timeline's Next.js portal is robust, fully accessible, and handled peak exam results day without a single crash.",
      author: "Dr. K. Somasekhar",
      role: "Principal",
      company: "Apex Institute",
      location: "Rajam",
      rating: 5
    },
    {
      text: "Stunning fashion website! The Razorpay payment process is seamless, order management is extremely clear, and mobile loading is near instantaneous. Outstanding MERN stack developers.",
      author: "N. Lakshmi Prasanna",
      role: "Founder",
      company: "Vastra Alankara Wear",
      location: "Vijayawada",
      rating: 5
    },
    {
      text: "We hired Beyond the Timeline to build an e-commerce platform for our local electronics boutique. Excellent support, great communication on WhatsApp, and very clean code structure.",
      author: "T. Srinivasa Rao",
      role: "Owner",
      company: "Rao Electronics",
      location: "Visakhapatnam",
      rating: 5
    },
    {
      text: "Dr. Rao's Ortho portfolio ranks first for orthopedic search terms in Rajam. We've seen an increase in consultation bookings from villages up to 50km away.",
      author: "Dr. K. Someswara Rao",
      role: "Orthopedist",
      company: "Ortho Clinic",
      location: "Rajam",
      rating: 5
    },
    {
      text: "Beyond the Timeline handled our wedding and corporate event portal. The multi-step cost calculator widget has increased inbound bookings by 75%. Outstanding performance.",
      author: "K. Anuradha",
      role: "Creative Director",
      company: "Utsav Celebrations",
      location: "Visakhapatnam",
      rating: 5
    }
  ];

  const filteredReviews = reviews.filter((r) => activeLoc === "All" || r.location === activeLoc);

  return (
    <div className="flex flex-col w-full font-sans">
      
      {/* Header */}
      <section className="relative overflow-hidden py-16 bg-gradient-to-b from-slate-50 to-white dark:from-[#040814] dark:to-background border-b border-border/20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[80px] pointer-events-none -z-10 animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            Verified Local Customer Reviews
          </h1>
          <p className="text-sm sm:text-base text-muted leading-relaxed">
            See how small businesses, clinics, colleges, and startups in Andhra Pradesh grow their lead conversion metrics 
            using Beyond the Timeline. Filter reviews by regional centers.
          </p>
        </div>
      </section>

      {/* Grid Reviews */}
      <section className="py-16 bg-white dark:bg-[#040814]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Location Selector */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12 pb-6 border-b border-border/40">
            <div className="flex items-center gap-2 text-xs font-bold text-muted uppercase tracking-wider">
              <Map size={14} className="text-primary" />
              <span>Filter AP Locations</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {locations.map((loc) => (
                <button
                  key={loc}
                  onClick={() => setActiveLoc(loc)}
                  className={`px-4.5 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                    activeLoc === loc
                      ? "bg-primary text-white shadow-md"
                      : "bg-slate-100 dark:bg-slate-900 text-muted hover:text-foreground border border-border/40"
                  }`}
                >
                  {loc === "All" ? "All Locations" : loc}
                </button>
              ))}
            </div>
          </div>

          {/* Reviews list */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReviews.map((rev, idx) => (
              <div
                key={idx}
                className="group relative p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-border/50 hover:border-primary/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/20 transition-colors pointer-events-none">
                  <Quote size={40} className="fill-current" />
                </div>

                <div className="flex flex-col gap-4">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-0.5 text-yellow-500">
                    {[...Array(rev.rating)].map((_, sIdx) => (
                      <Star key={sIdx} size={14} className="fill-current" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-foreground/90 italic leading-relaxed relative z-10">
                    "{rev.text}"
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-border/30 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm shrink-0">
                    {rev.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-foreground leading-tight">{rev.author}</h4>
                    <p className="text-[10px] text-muted">{rev.role}, {rev.company}</p>
                    <span className="text-[9px] font-semibold text-accent flex items-center gap-0.5 mt-0.5">
                      <MapPin size={9} />
                      {rev.location}, AP
                    </span>
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

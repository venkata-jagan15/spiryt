"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { AGENCY_CONFIG } from "@/config/agency";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Retrieve existing subscribers or initialize new list
    const existing = localStorage.getItem("beyondthetimeline_subscribers");
    const list = existing ? JSON.parse(existing) : [];
    
    // Save to list
    const newEntry = {
      email,
      date: new Date().toLocaleString(),
    };
    
    list.push(newEntry);
    localStorage.setItem("beyondthetimeline_subscribers", JSON.stringify(list));
    
    setSubscribed(true);
    setEmail("");
    
    setTimeout(() => {
      setSubscribed(false);
    }, 5000);
  };

  return (
    <footer className="bg-slate-50 dark:bg-[#030610] border-t border-border/40 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Agency Brief */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-2xl font-bold tracking-tight text-foreground">
              Spi<span className="text-primary">ryt</span>
            </Link>
            <p className="text-sm text-muted leading-relaxed">
              {AGENCY_CONFIG.description}
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2">
              {Object.entries(AGENCY_CONFIG.socials).map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-200/50 dark:bg-slate-900/80 border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-all duration-300 capitalize text-xs font-semibold"
                >
                  {name.substring(0, 2)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-base font-bold text-foreground">Explore Agency</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="/about" className="text-muted hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted hover:text-primary transition-colors">
                  Core Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted hover:text-primary transition-colors">
                  Our Portfolio
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-muted hover:text-primary transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted hover:text-primary transition-colors">
                  Latest Blog Posts
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-muted hover:text-primary transition-colors">
                  Pricing Plans
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-4">
            <h4 className="text-base font-bold text-foreground">Get In Touch</h4>
            <ul className="flex flex-col gap-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="text-muted leading-relaxed">{AGENCY_CONFIG.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary shrink-0" />
                <a href={`tel:${AGENCY_CONFIG.phone}`} className="text-muted hover:text-primary transition-colors">
                  {AGENCY_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary shrink-0" />
                <a href={`mailto:${AGENCY_CONFIG.email}`} className="text-muted hover:text-primary transition-colors">
                  {AGENCY_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="flex flex-col gap-4">
            <h4 className="text-base font-bold text-foreground">Newsletter</h4>
            <p className="text-sm text-muted leading-relaxed">
              Subscribe to stay updated with web trends, search engine strategies, and local commercial resources.
            </p>
            
            <form onSubmit={handleSubscribe} className="relative mt-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-4 pr-12 py-3 rounded-xl border border-border bg-white dark:bg-slate-950 text-foreground text-sm focus:outline-none focus:border-primary transition-all duration-300"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 px-3.5 rounded-lg bg-primary hover:bg-primary-hover text-white flex items-center justify-center transition-colors"
                aria-label="Subscribe"
              >
                <Send size={16} />
              </button>
            </form>

            {subscribed && (
              <div className="flex items-center gap-2 text-emerald-500 text-xs mt-1 animate-pulse">
                <CheckCircle2 size={14} />
                <span>Subscription successful! Thank you.</span>
              </div>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© {new Date().getFullYear()} Beyond The Timeline. All rights reserved. Built by Student Entrepreneurs from AP.</p>
          <div className="flex gap-4">
            <Link href="/admin" className="hover:text-primary font-semibold transition-colors">
              Admin Area Dashboard
            </Link>
            <span>•</span>
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

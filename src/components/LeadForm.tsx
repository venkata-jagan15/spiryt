"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Send, CheckCircle2, ChevronRight } from "lucide-react";
import { AGENCY_CONFIG } from "@/config/agency";

export default function LeadForm({ defaultService = "" }: { defaultService?: string }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    service: defaultService || "web-dev",
    message: "",
  });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const servicesList = AGENCY_CONFIG.services;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    setLoading(true);

    // Simulate server request
    setTimeout(() => {
      // Save lead to local storage
      const existing = localStorage.getItem("spiryt_leads");
      const leads = existing ? JSON.parse(existing) : [];
      
      const newLead = {
        ...formData,
        id: "lead_" + Math.random().toString(36).substring(2, 9),
        date: new Date().toLocaleString(),
      };
      
      leads.push(newLead);
      localStorage.setItem("spiryt_leads", JSON.stringify(leads));
      
      setLoading(false);
      setSuccess(true);
      
      // Trigger premium celebration confetti!
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });

      // Reset Form
      setFormData({
        name: "",
        email: "",
        phone: "",
        businessName: "",
        service: "web-dev",
        message: "",
      });

      setTimeout(() => {
        setSuccess(false);
      }, 6000);
    }, 1200);
  };

  return (
    <div className="w-full glass rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden transition-all duration-300">
      {success ? (
        <div className="flex flex-col items-center justify-center py-12 text-center animate-in zoom-in-95 duration-500">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mb-6">
            <CheckCircle2 size={36} className="animate-bounce" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">Proposal Received!</h3>
          <p className="text-muted text-sm max-w-sm leading-relaxed mb-6">
            Our team of student entrepreneurs will review your specifications and contact you on WhatsApp/Email within 12 hours.
          </p>
          <button
            onClick={() => setSuccess(false)}
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-hover group transition-colors"
          >
            Submit Another Request
            <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs font-semibold text-foreground/80">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                required
                placeholder="e.g. Rama Rao"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-white dark:bg-slate-950 text-foreground text-sm focus:outline-none focus:border-primary transition-all"
              />
            </div>
            
            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-semibold text-foreground/80">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="e.g. ramarao@gmail.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-white dark:bg-slate-950 text-foreground text-sm focus:outline-none focus:border-primary transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone" className="text-xs font-semibold text-foreground/80">
                Phone / WhatsApp <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                required
                placeholder="e.g. +91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-white dark:bg-slate-950 text-foreground text-sm focus:outline-none focus:border-primary transition-all"
              />
            </div>

            {/* Business Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="business" className="text-xs font-semibold text-foreground/80">
                Company / Institution Name
              </label>
              <input
                type="text"
                id="business"
                placeholder="e.g. Vizag Organic Foods"
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-white dark:bg-slate-950 text-foreground text-sm focus:outline-none focus:border-primary transition-all"
              />
            </div>
          </div>

          {/* Service Needed */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="service" className="text-xs font-semibold text-foreground/80">
              Select Required Service <span className="text-red-500">*</span>
            </label>
            <select
              id="service"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-border bg-white dark:bg-slate-950 text-foreground text-sm focus:outline-none focus:border-primary transition-all"
            >
              {servicesList.map((srv) => (
                <option key={srv.id} value={srv.id}>
                  {srv.title}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-xs font-semibold text-foreground/80">
              Briefly describe your requirements
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Detail your requirements here (budget range, visual references, timelines)..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-border bg-white dark:bg-slate-950 text-foreground text-sm focus:outline-none focus:border-primary transition-all resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 inline-flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-semibold bg-primary hover:bg-primary-hover text-white transition-all shadow-md shadow-primary/10 disabled:opacity-50 cursor-pointer"
          >
            {loading ? (
              <span className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
            ) : (
              <>
                <span>Get a Free Consultation</span>
                <Send size={15} />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}

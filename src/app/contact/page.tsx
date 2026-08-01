"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import { AGENCY_CONFIG } from "@/config/agency";
import LeadForm from "@/components/LeadForm";

// Wrap search params logic in a client subcomponent so we can suspend it correctly
function ContactContent() {
  const searchParams = useSearchParams();
  const service = searchParams.get("service") || "";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
      {/* Contact Details Left */}
      <div className="lg:col-span-6 flex flex-col justify-between gap-8">
        
        <div className="flex flex-col gap-6">
          <span className="text-xs font-extrabold text-primary uppercase tracking-widest">Contact Info</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground leading-tight">
            Let's Shape Your Business's Digital Success
          </h2>
          <p className="text-xs sm:text-sm text-muted leading-relaxed">
            Fill out the consultation form on the right. We will analyze your inputs and contact you 
            via WhatsApp or Email with customized design drafts and budget outlines.
          </p>

          <div className="flex flex-col gap-4 mt-4 text-xs sm:text-sm">
            
            <div className="flex gap-3.5 items-start">
              <Mail size={18} className="text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-foreground mb-0.5">Corporate Email</h4>
                <a href={`mailto:${AGENCY_CONFIG.email}`} className="text-muted hover:text-primary transition-colors">
                  {AGENCY_CONFIG.email}
                </a>
              </div>
            </div>

            <div className="flex gap-3.5 items-start">
              <Phone size={18} className="text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-foreground mb-0.5">Callback Support</h4>
                <a href={`tel:${AGENCY_CONFIG.phone}`} className="text-muted hover:text-primary transition-colors">
                  {AGENCY_CONFIG.phone}
                </a>
              </div>
            </div>

            <div className="flex gap-3.5 items-start">
              <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-foreground mb-0.5">HQ Address</h4>
                <p className="text-muted leading-relaxed">{AGENCY_CONFIG.address}</p>
              </div>
            </div>

            <div className="flex gap-3.5 items-start">
              <Clock size={18} className="text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-foreground mb-0.5">Response Time SLA</h4>
                <p className="text-muted leading-relaxed">All queries answered on WhatsApp or Email within 12 hours.</p>
              </div>
            </div>

          </div>
        </div>

        {/* Maps Container */}
        <div className="w-full h-64 rounded-3xl overflow-hidden border border-border/40 shadow-inner relative bg-slate-100">
          <iframe
            title="Beyond The Timeline Visakhapatnam Hub Map"
            src={AGENCY_CONFIG.googleMapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          />
        </div>

      </div>

      {/* Form Card Right */}
      <div className="lg:col-span-6 flex items-center">
        <div className="w-full bg-slate-50 dark:bg-slate-900 rounded-3xl p-1 border border-border/30">
          <LeadForm defaultService={service} />
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <div className="flex flex-col w-full font-sans">
      
      {/* Header */}
      <section className="relative overflow-hidden py-16 bg-gradient-to-b from-slate-50 to-white dark:from-[#040814] dark:to-background border-b border-border/20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[80px] pointer-events-none -z-10 animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            Get a Free Digital Consultation
          </h1>
          <p className="text-sm sm:text-base text-muted leading-relaxed">
            Let's collaborate! Message us via our form, call our hotlines, or directly start a 
            WhatsApp conversation for swift project scopes.
          </p>
        </div>
      </section>

      {/* Forms & Coordinates */}
      <section className="py-20 bg-white dark:bg-[#040814]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={
            <div className="flex justify-center py-20">
              <span className="w-8 h-8 rounded-full border-4 border-primary border-t-transparent animate-spin"></span>
            </div>
          }>
            <ContactContent />
          </Suspense>
        </div>
      </section>

    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { Users, Mail, Database, Trash2, Shield, Calendar, Layers, Eye } from "lucide-react";

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  businessName?: string;
  service: string;
  message?: string;
  date: string;
}

interface Subscriber {
  email: string;
  date: string;
}

export default function AdminDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [activeTab, setActiveTab] = useState<"leads" | "subscribers">("leads");

  // Load from local storage on mount
  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    const localLeads = localStorage.getItem("beyondthetimeline_leads");
    const localSubscribers = localStorage.getItem("beyondthetimeline_subscribers");

    if (localLeads) setLeads(JSON.parse(localLeads));
    if (localSubscribers) setSubscribers(JSON.parse(localSubscribers));
  };

  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to clear all dashboard data?")) {
      localStorage.removeItem("beyondthetimeline_leads");
      localStorage.removeItem("beyondthetimeline_subscribers");
      setLeads([]);
      setSubscribers([]);
    }
  };

  const handleDeleteLead = (id: string) => {
    const updated = leads.filter((l) => l.id !== id);
    setLeads(updated);
    localStorage.setItem("beyondthetimeline_leads", JSON.stringify(updated));
  };

  const handleLoadMock = () => {
    const mockLeads: Lead[] = [
      {
        id: "mock_1",
        name: "Vijay Kumar",
        email: "vijay@vizagfoods.com",
        phone: "+91 99887 76655",
        businessName: "Vizag Fresh Foods",
        service: "web-dev",
        message: "Need a Next.js catalog site with local search optimizations in Visakhapatnam.",
        date: new Date(Date.now() - 3600000 * 2).toLocaleString(),
      },
      {
        id: "mock_2",
        name: "Dr. Somasekhar",
        email: "admin@apexinstitutes.edu.in",
        phone: "+91 88776 65544",
        businessName: "Apex Engineering College",
        service: "mern-stack",
        message: "Looking for MERN stack developers to code our student exam portals.",
        date: new Date(Date.now() - 3600000 * 24).toLocaleString(),
      }
    ];

    const mockSubs: Subscriber[] = [
      { email: "newsletter1@gmail.com", date: new Date(Date.now() - 3600000 * 5).toLocaleString() },
      { email: "subscriber2@yahoo.co.in", date: new Date(Date.now() - 3600000 * 48).toLocaleString() }
    ];

    localStorage.setItem("beyondthetimeline_leads", JSON.stringify(mockLeads));
    localStorage.setItem("beyondthetimeline_subscribers", JSON.stringify(mockSubs));
    
    setLeads(mockLeads);
    setSubscribers(mockSubs);
  };

  const serviceLabels: Record<string, string> = {
    "web-maint-dev": "Web Maintenance & Dev",
    "ai-ml-dev": "AI & ML Development",
    "ui-ux-design": "UI/UX Design",
    "video-photo-edit": "Video & Photo Editing",
    "web-security": "Web Security",
    "three-d-websites": "3D Websites",
    "complex-ai-ml": "Complex AI/ML Models",
    "digital-marketing": "Digital Marketing",
    "projects-completion": "Projects Completion",
    "research-paper": "Research Paper Writing",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-sans flex-grow">
      
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-border mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
            <Shield size={20} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Beyond The Timeline Lead Console</h1>
            <p className="text-xs text-muted">Student Agency Leads & Communications Database</p>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleLoadMock}
            className="px-4 py-2 rounded-lg text-xs font-semibold bg-primary/10 hover:bg-primary/20 text-primary transition-colors cursor-pointer"
          >
            Load Sample Mock Data
          </button>
          <button
            onClick={handleClearAll}
            className="px-4 py-2 rounded-lg text-xs font-semibold bg-red-500/10 hover:bg-red-500/20 text-red-500 transition-colors cursor-pointer"
          >
            Clear Database
          </button>
        </div>
      </div>

      {/* Analytics Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-8">
        
        <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-border/40 flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
            <Database size={18} />
          </div>
          <div>
            <span className="text-[10px] text-muted font-bold uppercase tracking-wider block">Captured Leads</span>
            <span className="text-xl font-black text-foreground">{leads.length}</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-border/40 flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">
            <Mail size={18} />
          </div>
          <div>
            <span className="text-[10px] text-muted font-bold uppercase tracking-wider block">Newsletters</span>
            <span className="text-xl font-black text-foreground">{subscribers.length}</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-border/40 flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
            <Eye size={18} />
          </div>
          <div>
            <span className="text-[10px] text-muted font-bold uppercase tracking-wider block">Mock Page Views</span>
            <span className="text-xl font-black text-foreground">1,248</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-border/40 flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
            <Users size={18} />
          </div>
          <div>
            <span className="text-[10px] text-muted font-bold uppercase tracking-wider block">Active Admins</span>
            <span className="text-xl font-black text-foreground">3 (AP Core)</span>
          </div>
        </div>

      </div>

      {/* Tabs Selector */}
      <div className="flex border-b border-border/40 mb-6">
        <button
          onClick={() => setActiveTab("leads")}
          className={`px-6 py-3 text-xs font-bold transition-all relative cursor-pointer ${
            activeTab === "leads"
              ? "text-primary border-b-2 border-primary"
              : "text-muted hover:text-foreground"
          }`}
        >
          Contact Submissions ({leads.length})
        </button>
        <button
          onClick={() => setActiveTab("subscribers")}
          className={`px-6 py-3 text-xs font-bold transition-all relative cursor-pointer ${
            activeTab === "subscribers"
              ? "text-primary border-b-2 border-primary"
              : "text-muted hover:text-foreground"
          }`}
        >
          Newsletter Subscribers ({subscribers.length})
        </button>
      </div>

      {/* Leads Table */}
      {activeTab === "leads" && (
        <div className="glass rounded-2xl border border-border/50 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-950/80 border-b border-border text-muted">
                  <th className="p-4 font-bold uppercase tracking-wider">Client Info</th>
                  <th className="p-4 font-bold uppercase tracking-wider">Required Service</th>
                  <th className="p-4 font-bold uppercase tracking-wider">Requirements Detail</th>
                  <th className="p-4 font-bold uppercase tracking-wider">Date Captured</th>
                  <th className="p-4 text-center font-bold uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20 transition-colors">
                    <td className="p-4">
                      <div className="font-bold text-foreground">{lead.name}</div>
                      <div className="text-[10px] text-muted">{lead.email}</div>
                      <div className="text-[10px] text-primary mt-0.5">{lead.phone}</div>
                      {lead.businessName && (
                        <span className="inline-block text-[9px] bg-accent/10 text-accent font-semibold px-2 py-0.5 rounded-full mt-1.5 border border-accent/20">
                          {lead.businessName}
                        </span>
                      )}
                    </td>
                    <td className="p-4 font-semibold text-foreground/80">
                      {serviceLabels[lead.service] || lead.service}
                    </td>
                    <td className="p-4 text-xs text-muted max-w-xs truncate leading-relaxed" title={lead.message}>
                      {lead.message || <span className="italic">No specifications provided.</span>}
                    </td>
                    <td className="p-4 text-xs text-muted">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={12} className="text-primary" />
                        {lead.date}
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <button
                        onClick={() => handleDeleteLead(lead.id)}
                        className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-500 transition-colors cursor-pointer"
                        aria-label="Delete Lead"
                      >
                        <Trash2 size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
                {leads.length === 0 && (
                  <tr>
                    <td colSpan={5} className="p-12 text-center text-muted">
                      No customer leads captured yet. Go submit the contact form on the home page!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Subscribers Table */}
      {activeTab === "subscribers" && (
        <div className="glass rounded-2xl border border-border/50 overflow-hidden shadow-sm max-w-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-950/80 border-b border-border text-muted">
                  <th className="p-4 font-bold uppercase tracking-wider">Email Address</th>
                  <th className="p-4 font-bold uppercase tracking-wider">Subscription Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {subscribers.map((sub, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20 transition-colors">
                    <td className="p-4 font-semibold text-foreground/80">{sub.email}</td>
                    <td className="p-4 text-xs text-muted">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={12} className="text-primary" />
                        {sub.date}
                      </div>
                    </td>
                  </tr>
                ))}
                {subscribers.length === 0 && (
                  <tr>
                    <td colSpan={2} className="p-12 text-center text-muted">
                      No newsletter subscriptions captured yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
}

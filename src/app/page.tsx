"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Wrench,
  Brain,
  Palette,
  Film,
  Shield,
  Box,
  Cpu,
  TrendingUp,
  CheckSquare,
  FileText,
  ArrowRight,
  CheckCircle,
  Users,
  Sparkles,
  ChevronDown,
  MapPin,
  Layers 
} from "lucide-react";
import { AGENCY_CONFIG } from "@/config/agency";
import { PORTFOLIO_PROJECTS } from "@/data/portfolioData";
import { BLOG_POSTS } from "@/data/blogData";
import LeadForm from "@/components/LeadForm";

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Take first 3 featured portfolio items for homepage
  const featuredProjects = PORTFOLIO_PROJECTS.slice(0, 3);
  
  // Take first 3 blogs for homepage
  const recentBlogs = BLOG_POSTS.slice(0, 3);

  // Icon mapping helper
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Wrench": return <Wrench size={22} />;
      case "Brain": return <Brain size={22} />;
      case "Palette": return <Palette size={22} />;
      case "Film": return <Film size={22} />;
      case "Shield": return <Shield size={22} />;
      case "Box": return <Box size={22} />;
      case "Cpu": return <Cpu size={22} />;
      case "TrendingUp": return <TrendingUp size={22} />;
      case "CheckSquare": return <CheckSquare size={22} />;
      case "FileText": return <FileText size={22} />;
      default: return <Wrench size={22} />;
    }
  };

  // Take top 5 FAQ items
  const homeFaqs = [
    {
      q: "Why should we hire student web developers in India?",
      a: "Hiring student developers from Beyond the Timeline gives you access to top-tier technical minds specializing in the latest frameworks (Next.js, Node.js, Tailwind v4) at highly competitive prices. We work under professional project structures, delivering clean, production-ready code with flexible budgets suitable for startups and local businesses."
    },
    {
      q: "Where is Beyond the Timeline located in Andhra Pradesh?",
      a: "Our core team operates in the Vizag Tech Corridor and GMRIT campus, Rajam, Andhra Pradesh. We offer face-to-face consultancies in Visakhapatnam and surrounding areas, while collaborating remotely with clients nationwide."
    },
    {
      q: "Do you offer affordable SEO services in Andhra Pradesh?",
      a: "Yes! SEO is built into our core framework. We focus on search intent, local citations, page speed optimizations, and schema listings to help you rank for high-value search keywords without burning budget on continuous ads."
    },
    {
      q: "What is your primary web stack?",
      a: "We are expert MERN Stack Developers in Vizag. We build full-stack web applications using MongoDB, Express.js, React, and Node.js, and build modern static/server-rendered frontends using Next.js for maximum performance and Core Web Vitals optimization."
    },
    {
      q: "How do you handle website maintenance?",
      a: "We provide structured maintenance programs that cover security updates, weekly backups, page speed audits, content modifications, and round-the-clock uptime monitoring."
    }
  ];

  return (
    <div className="flex flex-col w-full relative">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white dark:from-[#040814] dark:to-background border-b border-border/20">
        {/* Background glow animations */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] rounded-full bg-primary/10 dark:bg-primary/5 blur-[80px] sm:blur-[120px] pointer-events-none -z-10 animate-pulse"></div>
        <div className="absolute top-1/3 left-1/3 w-[200px] h-[200px] rounded-full bg-accent/15 dark:bg-accent/5 blur-[100px] pointer-events-none -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Copy */}
            <div className="lg:col-span-7 flex flex-col text-center lg:text-left items-center lg:items-start gap-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 dark:bg-primary/20">
                <Sparkles size={12} className="animate-spin" />
                <span>Premium Student-Led Tech Agency AP</span>
              </div>
              
              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-foreground">
                Transforming Ideas into <br className="hidden sm:inline" />
                <span className="gradient-text font-black">Digital Success</span>
              </h1>
              
              {/* Description */}
              <p className="text-base sm:text-lg text-muted max-w-xl leading-relaxed">
                Beyond the Timeline is a premium agency of student entrepreneurs from Andhra Pradesh, India. 
                We craft high-performance websites, deliver affordable SEO services, and build MERN stack systems 
                tailored for local startups and global brands.
              </p>
              
              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto">
                <Link
                  href="#contact-section"
                  className="px-8 py-4 rounded-full text-sm font-semibold bg-primary hover:bg-primary-hover text-white text-center shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Get a Free Consultation
                </Link>
                <Link
                  href="/portfolio"
                  className="px-8 py-4 rounded-full text-sm font-semibold border border-border bg-card-bg text-foreground hover:bg-slate-100 dark:hover:bg-slate-900 text-center transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  View Case Studies
                </Link>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-3 gap-4 sm:gap-10 mt-6 pt-8 border-t border-border/40 w-full max-w-md">
                {AGENCY_CONFIG.stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col text-center lg:text-left gap-1">
                    <span className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">{stat.value}</span>
                    <span className="text-[10px] sm:text-xs text-muted uppercase font-bold tracking-wider leading-tight">{stat.label}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Hero Right Visual Form */}
            <div className="lg:col-span-5 w-full max-w-lg mx-auto lg:mx-0">
              <LeadForm defaultService="web-maint-dev" />
            </div>

          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="py-20 bg-white dark:bg-[#040814]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-3">
            <h2 className="text-xs font-extrabold text-primary uppercase tracking-widest">Our Expertise</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-foreground">
              Core Services We Specialize In
            </h3>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              We leverage modern technology stacks to deliver beautiful, accessible, and fast web portals. 
              Our team of <span className="text-foreground font-semibold">Student Web Developers in India</span> supports your growth metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AGENCY_CONFIG.services.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="group flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {getServiceIcon(service.icon)}
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-3">{service.title}</h4>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-border/30 text-xs font-semibold text-muted">
                  <span className="italic text-[10px] text-primary/80 truncate pr-2">
                    {service.keywords[0]}
                  </span>
                  <Link
                    href={`/services#${service.id}`}
                    className="flex items-center gap-1 text-primary hover:text-primary-hover shrink-0"
                  >
                    <span>Read Details</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-hover group"
            >
              <span>Explore All 10 Core Services</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* 3. PORTFOLIO SHOWCASE */}
      <section className="py-20 bg-slate-50 dark:bg-background border-y border-border/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div className="max-w-2xl flex flex-col gap-3">
              <span className="text-xs font-extrabold text-accent uppercase tracking-widest">Recent Deployments</span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-foreground">Featured Customer Success Stories</h3>
              <p className="text-xs sm:text-sm text-muted">
                From fast restaurant menus in Vizag to complex college directories in Rajam, 
                our student entrepreneurs have successfully built custom portals.
              </p>
            </div>
            <div>
              <Link
                href="/portfolio"
                className="px-6 py-3 rounded-full text-sm font-semibold border border-border bg-card-bg hover:bg-slate-100 dark:hover:bg-slate-900 flex items-center gap-2 text-foreground transition-all duration-300"
              >
                <span>View Full Portfolio</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div 
                key={project.id}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl bg-card-bg border border-border/50 hover:border-accent/40 shadow-md hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  {/* Visual Box */}
                  <div className="h-48 w-full bg-gradient-to-br from-primary/10 to-accent/10 flex flex-col items-center justify-center p-6 border-b border-border/30 relative">
                    <span className="absolute top-4 left-4 text-[10px] font-extrabold bg-slate-900/90 text-white py-1 px-2.5 rounded-full uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h4 className="text-xl font-bold text-center text-foreground group-hover:text-primary transition-colors max-w-xs leading-snug">
                      {project.title}
                    </h4>
                    <span className="text-xs text-muted flex items-center gap-1 mt-2">
                      <MapPin size={12} />
                      {project.location}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6">
                      {project.description}
                    </p>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="text-[10px] font-medium px-2 py-1 bg-slate-100 dark:bg-slate-900 border border-border rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Metrics Footer */}
                <div className="px-6 py-4 bg-slate-50/50 dark:bg-slate-950/20 border-t border-border/30 flex items-center justify-between text-xs">
                  <div className="flex flex-col">
                    <span className="text-sm font-extrabold text-foreground">{project.metrics[0].value}</span>
                    <span className="text-[9px] text-muted uppercase font-bold tracking-wider">{project.metrics[0].label}</span>
                  </div>
                  <Link
                    href="/case-studies"
                    className="font-semibold text-primary hover:text-primary-hover flex items-center gap-1"
                  >
                    <span>Case Study</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-20 bg-white dark:bg-[#040814]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Visual Text Left */}
            <div className="flex flex-col gap-6">
              <span className="text-xs font-extrabold text-primary uppercase tracking-widest">Our Value Proposition</span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
                High-End Web Services Tailored for Startups and Local Companies
              </h3>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                As young entrepreneurs based in Rajam and Visakhapatnam, we combine academic rigor with production-grade technology. 
                We don't sell recycled templates; we craft customized, super-fast Next.js portals that bring real business leads.
              </p>
              
              <ul className="flex flex-col gap-3.5">
                {[
                  "Premium SaaS-style responsive user interfaces built with Tailwind CSS.",
                  "Strict optimization for Core Web Vitals (sub-second mobile loading).",
                  "Affordable SEO Services in Andhra Pradesh targeting local buyers.",
                  "Structured, clean MERN Stack Development with MongoDB & Node.js.",
                  "Transparent code quality, direct support channels, and reliable SLAs."
                ].map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm">
                    <CheckCircle size={18} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground/90">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why Cards Right */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-border/40 hover:shadow-lg hover:shadow-primary/5 transition-all">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Users size={18} />
                </div>
                <h4 className="font-bold text-base text-foreground mb-2">Student Innovators</h4>
                <p className="text-xs text-muted leading-relaxed">
                  Passionate, adaptable student developers studying at elite AP institutes, delivering top tech stacks.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-border/40 hover:shadow-lg hover:shadow-primary/5 transition-all">
                <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                  <TrendingUp size={18} />
                </div>
                <h4 className="font-bold text-base text-foreground mb-2">Lead Focused</h4>
                <p className="text-xs text-muted leading-relaxed">
                  We build for user conversions—incorporating simple quotes engines, local call buttons, and fast checkout paths.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-border/40 hover:shadow-lg hover:shadow-primary/5 transition-all">
                <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                  <Layers size={18} />
                </div>
                <h4 className="font-bold text-base text-foreground mb-2">Scalable Tech</h4>
                <p className="text-xs text-muted leading-relaxed">
                  Full stack React platforms and robust cloud deployment pipelines on Vercel and AWS servers.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-border/40 hover:shadow-lg hover:shadow-primary/5 transition-all">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Cpu size={18} />
                </div>
                <h4 className="font-bold text-base text-foreground mb-2">SEO Driven</h4>
                <p className="text-xs text-muted leading-relaxed">
                  We target low-competition search keywords in Vizag and Rajam to rank your business without expensive ad campaigns.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 5. CLIENT TESTIMONIALS */}
      <section className="py-20 bg-slate-50 dark:bg-background border-t border-border/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-3">
            <span className="text-xs font-extrabold text-accent uppercase tracking-widest">Client Feedback</span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-foreground">Verified Local Business Testimonials</h3>
            <p className="text-sm text-muted">
              Discover how AP startups and institutions thrive online using our websites and search optimization solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                text: "The student team at Beyond the Timeline delivered a stellar website for our restaurant. Our reservations grew by 42%, and we rank #1 in local searches in Vizag! Highly professional and cost-effective.",
                author: "M. Jagannadha Rao",
                role: "General Manager, Spice Garden",
                loc: "Visakhapatnam, AP",
                rating: 5
              },
              {
                text: "We needed a student portal directory for Apex Engineering College. Beyond the Timeline's Next.js portal is robust, fully accessible, and handled peak exam results day without a single crash.",
                author: "Dr. K. Somasekhar",
                role: "Principal, Apex Institute",
                loc: "Rajam, AP",
                rating: 5
              },
              {
                text: "Stunning fashion website! The Razorpay payment process is seamless, order management is extremely clear, and mobile loading is near instantaneous. Outstanding MERN stack developers.",
                author: "N. Lakshmi Prasanna",
                role: "Founder, Vastra Alankara",
                loc: "Vijayawada, AP",
                rating: 5
              }
            ].map((t, idx) => (
              <div 
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-card-bg border border-border/50 hover:border-accent/40 shadow-sm flex flex-col justify-between gap-6"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex gap-0.5 text-yellow-500 text-sm">
                    {"★".repeat(t.rating)}
                  </div>
                  <p className="text-xs sm:text-sm text-foreground/90 italic leading-relaxed">
                    "{t.text}"
                  </p>
                </div>
                
                <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                  <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-foreground leading-tight">{t.author}</h4>
                    <p className="text-[10px] text-muted">{t.role} • <span className="font-semibold text-accent">{t.loc}</span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-hover group"
            >
              <span>Read More Verified AP Reviews</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* 6. LATEST BLOG POSTS */}
      <section className="py-20 bg-white dark:bg-[#040814]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div className="max-w-2xl flex flex-col gap-3">
              <span className="text-xs font-extrabold text-primary uppercase tracking-widest">Free Knowledge</span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-foreground">Recent Regional SEO Insights</h3>
              <p className="text-xs sm:text-sm text-muted">
                Learn search engine optimization tips, full stack web benchmarks, and digital startup cost guides in India.
              </p>
            </div>
            <div>
              <Link
                href="/blog"
                className="px-6 py-3 rounded-full text-sm font-semibold border border-border bg-card-bg hover:bg-slate-100 dark:hover:bg-slate-900 flex items-center gap-2 text-foreground transition-all duration-300"
              >
                <span>Read Blog (20 Posts)</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentBlogs.map((blog) => (
              <article 
                key={blog.slug}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl bg-slate-50 dark:bg-slate-900 border border-border/40 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between text-[10px] font-bold text-primary mb-4 uppercase tracking-wider">
                    <span>{blog.category}</span>
                    <span className="text-muted">{blog.date}</span>
                  </div>
                  <h4 className="text-base font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                    <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                  </h4>
                  <p className="text-xs text-muted leading-relaxed mb-4">
                    {blog.summary}
                  </p>
                </div>

                <div className="px-6 py-4 bg-slate-100/50 dark:bg-slate-950/20 border-t border-border/30 flex items-center justify-between text-xs">
                  <span className="text-[10px] text-muted italic font-medium truncate pr-2">
                    Tag: {blog.tags[0]}
                  </span>
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="font-bold text-primary hover:text-primary-hover flex items-center gap-0.5 shrink-0"
                  >
                    <span>Read Article</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-20 bg-slate-50 dark:bg-background border-t border-border/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 flex flex-col items-center gap-3">
            <span className="text-xs font-extrabold text-accent uppercase tracking-widest">Got Questions?</span>
            <h3 className="text-3xl font-extrabold text-foreground">Frequently Asked Questions</h3>
            <p className="text-xs sm:text-sm text-muted">
              Get answers about our student team structure, Vizag web development, SEO costs, and support SLAs.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {homeFaqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl border border-border/50 bg-card-bg overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between text-sm sm:text-base font-bold text-foreground hover:text-primary transition-colors focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown 
                      size={18} 
                      className={`text-muted transition-transform duration-300 shrink-0 ml-2 ${
                        isOpen ? "transform rotate-180 text-primary" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-muted leading-relaxed border-t border-border/20 animate-in slide-in-from-top-4 duration-300">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/faqs"
              className="text-xs sm:text-sm font-bold text-primary hover:text-primary-hover inline-flex items-center gap-1.5"
            >
              <span>View All FAQ Categories</span>
              <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </section>

      {/* 8. CONTACT FORM SECTION */}
      <section id="contact-section" className="py-20 bg-white dark:bg-[#040814] border-t border-border/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Contact Details Left */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-8">
              <div className="flex flex-col gap-5">
                <span className="text-xs font-extrabold text-primary uppercase tracking-widest">Connect with Us</span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
                  Ready to Kickstart Your Project? Reach Out!
                </h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  Fill out our brief consultation questionnaire, or contact us directly on phone/WhatsApp. 
                  We analyze your requirements and provide detailed visual wires and price estimates completely free of cost.
                </p>
                
                <div className="flex flex-col gap-3 mt-4 text-xs sm:text-sm">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-foreground w-20 shrink-0">Email:</span>
                    <a href={`mailto:${AGENCY_CONFIG.email}`} className="text-primary hover:underline">{AGENCY_CONFIG.email}</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-foreground w-20 shrink-0">Phone:</span>
                    <a href={`tel:${AGENCY_CONFIG.phone}`} className="text-muted">{AGENCY_CONFIG.phone}</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-foreground w-20 shrink-0">Location:</span>
                    <span className="text-muted">{AGENCY_CONFIG.address}</span>
                  </div>
                </div>
              </div>

              {/* Map Preview */}
              <div className="w-full h-64 rounded-3xl overflow-hidden border border-border/40 shadow-inner relative bg-slate-100">
                <iframe
                  title="Beyond the Timeline Visakhapatnam Location Map"
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

            {/* Form Right */}
            <div className="lg:col-span-6 flex items-center">
              <div className="w-full bg-slate-50 dark:bg-slate-900 rounded-3xl p-1 border border-border/30">
                <LeadForm defaultService="web-maint-dev" />
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

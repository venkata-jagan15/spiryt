"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Calendar, User, ArrowRight, BookOpen } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogData";

export default function Blog() {
  const [search, setSearch] = useState("");
  const [activeCat, setActiveCat] = useState("All");

  const categories = ["All", "Business", "Technology", "SEO", "Pricing", "Marketing", "UI/UX & Web Dev"];

  const filteredBlogs = BLOG_POSTS.filter((post) => {
    const matchesSearch = 
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.summary.toLowerCase().includes(search.toLowerCase()) ||
      post.content.toLowerCase().includes(search.toLowerCase());
      
    const matchesCat = 
      activeCat === "All" ||
      (activeCat === "UI/UX & Web Dev" ? post.category.includes("UI/UX") : post.category === activeCat);

    return matchesSearch && matchesCat;
  });

  return (
    <div className="flex flex-col w-full font-sans">
      
      {/* Header */}
      <section className="relative overflow-hidden py-16 bg-gradient-to-b from-slate-50 to-white dark:from-[#040814] dark:to-background border-b border-border/20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[80px] pointer-events-none -z-10 animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            Beyond the Timeline SEO & Tech Blog
          </h1>
          <p className="text-sm sm:text-base text-muted leading-relaxed">
            20 high-value articles written by our student core team targeting regional search queries in Andhra Pradesh. 
            Learn local SEO, e-commerce configurations, Node.js benchmarks, and web budget guides.
          </p>
        </div>
      </section>

      {/* Grid and Search */}
      <section className="py-16 bg-white dark:bg-[#040814]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Search and Filters Bar */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12 pb-6 border-b border-border/40">
            {/* Search */}
            <div className="relative w-full lg:max-w-xs">
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-border bg-slate-50 dark:bg-slate-900 text-foreground text-xs focus:outline-none focus:border-primary"
              />
              <Search size={14} className="absolute left-3.5 top-3 text-muted" />
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-1.5 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCat(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                    activeCat === cat
                      ? "bg-primary text-white shadow-md"
                      : "bg-slate-50 dark:bg-slate-900 text-muted hover:text-foreground border border-border/40"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid list */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <article 
                key={blog.slug}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl bg-slate-50 dark:bg-slate-900 border border-border/50 hover:border-primary/40 hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  {/* Category and Date */}
                  <div className="flex items-center justify-between text-[10px] font-bold text-primary mb-4 uppercase tracking-wider">
                    <span>{blog.category}</span>
                    <span className="text-muted">{blog.date}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                    <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6">
                    {blog.summary}
                  </p>
                </div>

                {/* Footer details */}
                <div className="px-6 py-4 bg-slate-100/50 dark:bg-slate-950/20 border-t border-border/30 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-[10px] text-muted">
                    <BookOpen size={12} className="text-primary shrink-0" />
                    <span>{blog.readTime}</span>
                  </div>
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="font-bold text-primary hover:text-primary-hover flex items-center gap-0.5"
                  >
                    <span>Read Article</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>

              </article>
            ))}
          </div>

          {filteredBlogs.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted">No search results found. Try using keywords like 'SEO' or 'Website'.</p>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}

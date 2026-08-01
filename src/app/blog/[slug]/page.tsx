import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, User, ArrowLeft, Clock, Tag } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogData";
import SchemaMarkup from "@/components/SchemaMarkup";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Generate dynamic schema.org JSON-LD Article structure
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.summary,
    "datePublished": post.date,
    "author": {
      "@type": "Organization",
      "name": "Beyond The Timeline Core Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Beyond The Timeline",
      "logo": {
        "@type": "ImageObject",
        "url": "https://beyondthetimeline.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://beyondthetimeline.com/blog/${post.slug}`
    }
  };

  // Convert custom content text blocks into HTML structure
  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, index) => {
      const trimmed = block.trim();
      if (!trimmed) return null;

      // Handle headings
      if (trimmed.startsWith("###")) {
        return (
          <h3 key={index} className="text-xl font-bold text-foreground mt-8 mb-4">
            {trimmed.replace("###", "").trim()}
          </h3>
        );
      }
      if (trimmed.startsWith("##")) {
        return (
          <h2 key={index} className="text-2xl font-extrabold text-foreground mt-10 mb-4 border-b border-border/20 pb-2">
            {trimmed.replace("##", "").trim()}
          </h2>
        );
      }
      
      // Handle list items
      if (trimmed.startsWith("*") || trimmed.startsWith("-")) {
        const items = trimmed.split("\n").map((li, liIdx) => (
          <li key={liIdx} className="list-disc list-inside text-xs sm:text-sm text-muted leading-relaxed mb-2.5 ml-4">
            {li.replace(/^[\s*-]+/, "").trim()}
          </li>
        ));
        return <ul key={index} className="my-4">{items}</ul>;
      }
      
      // Handle numbered lists
      if (/^\d+\./.test(trimmed)) {
        const items = trimmed.split("\n").map((li, liIdx) => (
          <li key={liIdx} className="list-decimal list-inside text-xs sm:text-sm text-muted leading-relaxed mb-2.5 ml-4">
            {li.replace(/^\d+\.\s*/, "").trim()}
          </li>
        ));
        return <ol key={index} className="my-4">{items}</ol>;
      }

      // Handle bold lines or callouts
      if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
        return (
          <p key={index} className="text-xs sm:text-sm text-primary font-bold bg-primary/5 p-4 rounded-xl border border-primary/10 my-6">
            {trimmed.replace(/\*\*/g, "").trim()}
          </p>
        );
      }

      // Default paragraph
      return (
        <p key={index} className="text-xs sm:text-sm text-muted leading-relaxed mb-4">
          {trimmed}
        </p>
      );
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-sans">
      <SchemaMarkup schema={articleSchema} />

      {/* Back to Blog */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-hover mb-8 group"
      >
        <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
        <span>Back to Blog Listing</span>
      </Link>

      <article className="glass rounded-3xl p-6 sm:p-10 shadow-lg border border-border/40">
        {/* Header Metadata */}
        <header className="mb-8 pb-6 border-b border-border/40">
          <div className="flex items-center gap-2.5 text-xs font-semibold text-primary uppercase tracking-wider mb-3">
            <span>{post.category}</span>
            <span>•</span>
            <span className="text-muted">{post.readTime}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-tight mb-4">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-muted">
            <span className="flex items-center gap-1.5">
              <User size={13} className="text-primary" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={13} className="text-primary" />
              {post.date}
            </span>
          </div>
        </header>

        {/* Content Body */}
        <div className="prose prose-slate dark:prose-invert max-w-none">
          {renderContent(post.content)}
        </div>

        {/* Footer Tags */}
        <footer className="mt-12 pt-8 border-t border-border/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <Tag size={13} className="text-muted shrink-0" />
            {post.tags.map((tag) => (
              <span key={tag} className="text-[10px] font-semibold bg-slate-100 dark:bg-slate-900 border border-border text-muted py-1 px-3 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-full text-xs font-semibold bg-primary hover:bg-primary-hover text-white text-center shadow-md transition-colors"
          >
            Hire Our Developers
          </Link>
        </footer>

      </article>

    </div>
  );
}

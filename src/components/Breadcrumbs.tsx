"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  const paths = pathname.split("/").filter((path) => path !== "");

  const breadcrumbsListSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://beyondthetimeline.com"
      },
      ...paths.map((path, index) => {
        const url = `/${paths.slice(0, index + 1).join("/")}`;
        const name = path
          .replace(/-/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase());
        return {
          "@type": "ListItem",
          "position": index + 2,
          "name": name,
          "item": `https://beyondthetimeline.com${url}`
        };
      })
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsListSchema) }}
      />
      <nav aria-label="Breadcrumb" className="py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex items-center gap-1.5 text-xs text-muted">
        <Link
          href="/"
          className="flex items-center gap-1 hover:text-primary transition-colors duration-200"
        >
          <Home size={13} />
          <span>Home</span>
        </Link>

        {paths.map((path, index) => {
          const url = `/${paths.slice(0, index + 1).join("/")}`;
          const isLast = index === paths.length - 1;
          const label = path
            .replace(/-/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase());

          return (
            <React.Fragment key={url}>
              <ChevronRight size={12} className="text-muted shrink-0" />
              {isLast ? (
                <span className="text-foreground font-medium truncate" aria-current="page">
                  {label}
                </span>
              ) : (
                <Link
                  href={url}
                  className="hover:text-primary transition-colors duration-200 capitalize truncate"
                >
                  {label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </nav>
    </>
  );
}

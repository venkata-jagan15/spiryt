export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  category: string;
  client: string;
  location: string;
  duration: string;
  challenge: string;
  solution: string;
  results: string[];
  tags: string[];
  metrics: { label: string; value: string }[];
  image: string;
  featured: boolean;
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "restaurant-website",
    title: "Spice Garden Restaurant Website",
    description: "A fast, SEO-optimized, responsive website with an interactive digital menu, table booking system, and local SEO optimizations for a premier restaurant in Vizag.",
    category: "Web Development",
    client: "Spice Garden Culinary Group",
    location: "Visakhapatnam, Andhra Pradesh",
    duration: "4 Weeks",
    challenge: "The client was losing customers to aggregators and lacked a direct online reservation system. Their old site was slow, not mobile-friendly, and didn't rank for local searches like 'best restaurants in Vizag'.",
    solution: "We engineered a ultra-fast Next.js website featuring a visually rich, categorized menu, built-in table reservations via email triggers, and schema-structured menu markup for Google Search Rich Snippets.",
    results: [
      "Boosted direct table bookings by 42% in the first two months.",
      "Achieved #1 ranking on Google Map Pack for target keywords in Vizag.",
      "Reduced website loading speed from 5.4 seconds to 1.1 seconds."
    ],
    tags: ["Next.js", "Tailwind CSS", "Local SEO", "Framer Motion"],
    metrics: [
      { label: "Bookings Increase", value: "+42%" },
      { label: "Load Time", value: "1.1s" },
      { label: "Organic Reach", value: "+180%" }
    ],
    image: "/portfolio/restaurant.jpg",
    featured: true
  },
  {
    id: "hospital-management",
    title: "CarePlus Hospital Portal",
    description: "A custom patient portal, doctor scheduling panel, and medical records dashboard built with the MERN stack for a multi-specialty hospital.",
    category: "MERN Stack",
    client: "CarePlus Multi-Specialty Hospital",
    location: "Vizag, Andhra Pradesh",
    duration: "10 Weeks",
    challenge: "Hospital administrators were dealing with massive queues, overlapping appointment slots, and manual file searches, leading to operational inefficiencies and low patient satisfaction.",
    solution: "We designed and developed a secure MERN stack web app featuring doctor profile dashboards, live slot allocations, auto-reminders via SMS/WhatsApp, and role-based panels for billing, doctors, and patients.",
    results: [
      "Reduced patient wait times by 50% via online token generation.",
      "Fully digitalized patient records, cutting physical paper reliance entirely.",
      "Handled over 5,000+ monthly active booking requests seamlessly."
    ],
    tags: ["React.js", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    metrics: [
      { label: "Wait Time Cut", value: "50%" },
      { label: "Monthly Users", value: "5,000+" },
      { label: "Data Security", value: "100%" }
    ],
    image: "/portfolio/hospital.jpg",
    featured: true
  },
  {
    id: "college-website",
    title: "Apex Institute College Portal",
    description: "An accessible, high-traffic website with integrated student notice boards, academic calendars, and department directories, optimized for mobile devices.",
    category: "Web Development",
    client: "Apex Engineering College",
    location: "Rajam, Andhra Pradesh",
    duration: "6 Weeks",
    challenge: "The college website would crash during exam result releases due to sudden traffic spikes, and it lacked modern mobile-friendly interfaces for students to read notices.",
    solution: "We rebuilt the portal on Next.js, utilizing Static Site Generation (SSG) for static pages and CDN caching to withstand traffic surges. We added clean breadcrumbs and simplified directories.",
    results: [
      "Zero crashes during peak results day with 15,000 concurrent student hits.",
      "Accessibility compliance (WCAG 2.1 AA) achieved, benefiting all student cohorts.",
      "Improved search rankings, making academic syllabus documents easily discoverable."
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "CDN Caching", "Accessibility"],
    metrics: [
      { label: "Uptime on Traffic Peaks", value: "100%" },
      { label: "Concurrent Visits", value: "15k" },
      { label: "Mobile Accessibility", value: "100%" }
    ],
    image: "/portfolio/college.jpg",
    featured: true
  },
  {
    id: "ecommerce-platform",
    title: "Vastra Alankara E-Commerce",
    description: "A premium fashion e-commerce store with full payment gateway integration, admin inventory dashboards, and order tracking workflows.",
    category: "E-Commerce",
    client: "Vastra Alankara Ethnic Wear",
    location: "Vijayawada, Andhra Pradesh",
    duration: "8 Weeks",
    challenge: "The client wanted to expand their brick-and-mortar storefront online but needed a premium feel that loads instantaneously and integrates with popular Indian payment gateways (UPI, Cards).",
    solution: "We built a customized React & Node.js store with an optimized image pipeline, local payment processor integrations (Razorpay), and a dashboard for listing products and managing orders.",
    results: [
      "Processed over 1,200 orders in the launch week without single failure.",
      "Vibrant image optimization ensured high-fidelity zoom at low data costs.",
      "SEO setup triggered local search placements for traditional clothing."
    ],
    tags: ["React", "Node.js", "Razorpay", "Tailwind CSS", "MongoDB"],
    metrics: [
      { label: "Launch Week Orders", value: "1,200+" },
      { label: "Page Weight Reduced", value: "65%" },
      { label: "UPI Checkout Success", value: "99.8%" }
    ],
    image: "/portfolio/ecommerce.jpg",
    featured: true
  },
  {
    id: "personal-portfolio",
    title: "Dr. Rao's Ortho Portfolio",
    description: "A premium personal branding website for a leading orthopedist in Rajam, featuring medical blogs, case write-ups, and patient consultation booking.",
    category: "UI/UX & Web Dev",
    client: "Dr. K. Someswara Rao",
    location: "Rajam, Andhra Pradesh",
    duration: "3 Weeks",
    challenge: "Dr. Rao wanted to establish online authority, publish medical guides, and allow patients from nearby villages to schedule consultations directly.",
    solution: "We crafted a clean, premium personal portfolio with a trust-inducing color scheme, direct WhatsApp-based booking links, and static medical articles optimized for Telugu and English searches.",
    results: [
      "Gained #1 rank on Google Search for 'best orthopedic doctor in Rajam'.",
      "Attracted patients from a 50km radius through localized landing page SEO.",
      "Simple one-click WhatsApp action enabled easy rural patient booking."
    ],
    tags: ["Next.js", "Tailwind CSS", "WhatsApp API", "Static Generation"],
    metrics: [
      { label: "Local Google Rank", value: "#1" },
      { label: "Rural Inquiries", value: "+110%" },
      { label: "Page Load Speed", value: "0.9s" }
    ],
    image: "/portfolio/portfolio.jpg",
    featured: false
  },
  {
    id: "event-management",
    title: "Utsav Event Management Portal",
    description: "A booking and showcase portal for a premium wedding and corporate event management company, featuring high-res media galleries and quotation builders.",
    category: "Web Development",
    client: "Utsav Celebrations & Events",
    location: "Visakhapatnam, Andhra Pradesh",
    duration: "5 Weeks",
    challenge: "The client needed a way to present their beautiful decors and catering designs without slowing down the site, while giving users an automated price estimate calculator.",
    solution: "We built an image-heavy site using Next.js Image optimization (WebP, lazy-loaded) with an interactive multi-step cost calculator widget that generates automated quotes.",
    results: [
      "Inbound lead volume surged by 75% via the online quote builder.",
      "Media-rich portfolio loads under 1.5 seconds even on 4G connections.",
      "High client retention due to clear pricing expectations set beforehand."
    ],
    tags: ["Next.js", "Tailwind CSS", "Image Optimization", "Quote Engine"],
    metrics: [
      { label: "Leads Growth", value: "+75%" },
      { label: "Media Load Speed", value: "1.4s" },
      { label: "Quote Completion", value: "85%" }
    ],
    image: "/portfolio/events.jpg",
    featured: false
  }
];

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
  year: number;
}

export const projects: Project[] = [
  {
    id: "crypto-chat",
    title: "Crypto Dashboard with AI Chatbot",
    description:
      "A modern cryptocurrency dashboard with an intelligent AI chatbot that provides real-time market data, detailed coin insights, and smart crypto analysis.",
    longDescription:
      "Built with Next.js 15 and TypeScript, this comprehensive crypto dashboard features real-time price updates, interactive charts with multiple time periods, paginated coin listings, and an intelligent AI chatbot powered by Hugging Face API. The chatbot can answer questions about any cryptocurrency, provide market analysis, and offer crypto education.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React Query",
      "Tailwind CSS",
      "Recharts",
      "Framer Motion",
      "CoinGecko API",
      "Hugging Face API",
    ],
    githubUrl: "https://github.com/Blake-Pfaff/crypto-chat",
    liveUrl:
      "https://crypto-dashboard-ms5xhcs8l-blakeapfaff2-gmailcoms-projects.vercel.app/",
    imageUrl: "/images/crypto-chat.svg",
    featured: true,
    year: 2024,
  },
  {
    id: "expense-pilot",
    title: "ExpensePilot",
    description:
      "A secure REST API for managing and analyzing personal expenses and income with comprehensive financial tracking.",
    longDescription:
      "ExpensePilot is a robust backend application built with Node.js and Express that provides a complete solution for managing personal finances. Features include expense and income tracking, category management, detailed analytics, and secure user authentication.",
    technologies: ["Node.js", "Express", "REST API", "JavaScript"],
    githubUrl: "https://github.com/Blake-Pfaff/ExpensePilot",
    imageUrl: "/images/expense-pilot.svg",
    featured: true,
    year: 2024,
  },
  {
    id: "gl2",
    title: "GL2 Dating App",
    description:
      "A modern, full-stack dating application featuring user authentication, profile management, photo sharing, and matching capabilities.",
    longDescription:
      "GL2 is a comprehensive dating application built with modern web technologies. Currently under construction, it will feature user profiles, photo uploads, advanced matching algorithms, real-time chat, and an intuitive user interface for connecting people.",
    technologies: ["Next.js", "TypeScript", "React", "Node.js"],
    githubUrl: "https://github.com/Blake-Pfaff/gl2",
    imageUrl: "/images/gl2.svg",
    featured: false,
    year: 2024,
  },
  {
    id: "next-mtg-index",
    title: "Next MTG Index",
    description:
      "A Magic: The Gathering card index and deck builder application built with Next.js (Under Construction).",
    longDescription:
      "Next MTG Index is a comprehensive tool for Magic: The Gathering players to browse cards, build decks, and manage their collection. This project is currently under construction and will feature card search, deck building tools, and collection management.",
    technologies: ["Next.js", "TypeScript", "React"],
    githubUrl: "https://github.com/Blake-Pfaff/next-mtg-inded",
    imageUrl: "/images/next-mtg-index.svg",
    featured: false,
    year: 2024,
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "This modern portfolio website built with Next.js, featuring smooth animations, responsive design, and a clean user interface.",
    longDescription:
      "Designed and developed a personal portfolio website showcasing projects, experience, and skills. Built with Next.js 15, TypeScript, Framer Motion for animations, and Tailwind CSS for styling. Features include smooth scroll animations, interactive project cards, and a fully responsive design.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Framer Motion",
      "Tailwind CSS",
      "React",
    ],
    githubUrl: "https://github.com/Blake-Pfaff/portfolio",
    liveUrl: "https://blakepfaff.dev",
    imageUrl: "/images/portfolio.svg",
    featured: true,
    year: 2024,
  },
];

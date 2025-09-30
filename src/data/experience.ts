export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string | null;
  description: string;
  achievements: string[];
  technologies: string[];
  current?: boolean;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  honors?: string[];
}

export const experiences: Experience[] = [
  {
    id: "senior-frontend-engineer",
    company: "TechCorp Inc.",
    position: "Senior Frontend Engineer",
    startDate: "2022-01",
    endDate: null,
    description: "Lead frontend development for critical customer-facing applications, focusing on performance optimization and user experience improvements.",
    achievements: [
      "Improved application performance by 40% through code splitting and lazy loading",
      "Led a team of 4 developers in migrating legacy codebase to modern React architecture",
      "Implemented comprehensive testing strategy resulting in 90% test coverage",
      "Mentored junior developers and conducted code reviews for 15+ team members"
    ],
    technologies: ["React", "TypeScript", "Next.js", "GraphQL", "Jest", "Cypress"],
    current: true,
  },
  {
    id: "fullstack-developer",
    company: "StartupXYZ",
    position: "Full Stack Developer",
    startDate: "2020-06",
    endDate: "2021-12",
    description: "Developed and maintained multiple web applications using modern JavaScript frameworks and cloud technologies.",
    achievements: [
      "Built responsive web applications serving 10,000+ daily active users",
      "Integrated third-party APIs and payment systems (Stripe, PayPal)",
      "Optimized database queries reducing response time by 60%",
      "Collaborated with design team to implement pixel-perfect UI components"
    ],
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "AWS", "Docker"],
  },
  {
    id: "frontend-developer",
    company: "Digital Agency Pro",
    position: "Frontend Developer",
    startDate: "2019-03",
    endDate: "2020-05",
    description: "Specialized in creating responsive websites and web applications for various clients across different industries.",
    achievements: [
      "Developed 20+ client websites using modern web technologies",
      "Implemented SEO best practices improving client search rankings",
      "Created reusable component library reducing development time by 30%",
      "Worked directly with clients to gather requirements and provide technical solutions"
    ],
    technologies: ["JavaScript", "React", "Vue.js", "Sass", "WordPress", "Shopify"],
  },
  {
    id: "junior-developer",
    company: "WebSolutions Ltd.",
    position: "Junior Web Developer",
    startDate: "2018-08",
    endDate: "2019-02",
    description: "Started career in web development, focusing on frontend technologies and responsive design principles.",
    achievements: [
      "Built first professional website from concept to deployment",
      "Learned modern JavaScript frameworks and best practices",
      "Participated in agile development processes and daily standups",
      "Contributed to open source projects and coding communities"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "PHP"],
  },
];

export const education: Education[] = [
  {
    id: "computer-science-degree",
    institution: "University of Technology",
    degree: "Bachelor of Science",
    field: "Computer Science",
    startDate: "2014-09",
    endDate: "2018-05",
    gpa: "3.8",
    honors: ["Dean's List", "Magna Cum Laude", "Computer Science Honor Society"],
  },
];

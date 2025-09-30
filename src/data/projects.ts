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
    id: "spotify-clone",
    title: "Spotify Clone",
    description: "A full-stack music streaming application with user authentication, playlist management, and real-time playback.",
    longDescription: "Built a comprehensive Spotify clone featuring user authentication, playlist creation and management, real-time music playback, search functionality, and a responsive design that adapts to different screen sizes.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Spotify API", "Socket.io"],
    githubUrl: "https://github.com/blakepfaff/spotify-clone",
    liveUrl: "https://spotify-clone-demo.vercel.app",
    imageUrl: "/images/spotify-clone.png",
    featured: true,
    year: 2024,
  },
  {
    id: "ecommerce-dashboard",
    title: "E-commerce Dashboard",
    description: "Admin dashboard for managing products, orders, and analytics with real-time updates and data visualization.",
    longDescription: "Developed a comprehensive admin dashboard for e-commerce platforms featuring product management, order tracking, sales analytics, inventory management, and real-time notifications.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Chart.js", "Stripe"],
    githubUrl: "https://github.com/blakepfaff/ecommerce-dashboard",
    liveUrl: "https://ecommerce-dashboard-demo.vercel.app",
    imageUrl: "/images/ecommerce-dashboard.png",
    featured: true,
    year: 2024,
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description: "Collaborative task management tool with drag-and-drop functionality and team collaboration features.",
    longDescription: "Created a modern task management application with drag-and-drop kanban boards, team collaboration, time tracking, and project analytics.",
    technologies: ["React", "Redux", "Node.js", "Socket.io", "Dnd Kit", "Tailwind CSS"],
    githubUrl: "https://github.com/blakepfaff/task-manager",
    liveUrl: "https://taskmanager-demo.vercel.app",
    imageUrl: "/images/task-manager.png",
    featured: false,
    year: 2023,
  },
  {
    id: "weather-app",
    title: "Weather Forecast App",
    description: "Beautiful weather application with location-based forecasts and interactive maps.",
    longDescription: "Built a responsive weather application with current conditions, 7-day forecasts, interactive maps, and location search functionality.",
    technologies: ["React", "TypeScript", "OpenWeather API", "Mapbox", "Styled Components"],
    githubUrl: "https://github.com/blakepfaff/weather-app",
    liveUrl: "https://weather-app-demo.vercel.app",
    imageUrl: "/images/weather-app.png",
    featured: false,
    year: 2023,
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "Modern portfolio website built with Next.js, featuring smooth animations and responsive design.",
    longDescription: "Designed and developed a personal portfolio website showcasing projects, experience, and skills with modern animations and responsive design.",
    technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    githubUrl: "https://github.com/blakepfaff/portfolio",
    liveUrl: "https://blakepfaff.dev",
    imageUrl: "/images/portfolio.png",
    featured: false,
    year: 2024,
  },
  {
    id: "chat-application",
    title: "Real-time Chat App",
    description: "Full-stack chat application with real-time messaging, file sharing, and group conversations.",
    longDescription: "Developed a real-time chat application with instant messaging, file sharing, group conversations, and user presence indicators.",
    technologies: ["React", "Node.js", "Socket.io", "Express", "MongoDB", "Cloudinary"],
    githubUrl: "https://github.com/blakepfaff/chat-app",
    liveUrl: "https://chat-app-demo.vercel.app",
    imageUrl: "/images/chat-app.png",
    featured: false,
    year: 2023,
  },
];

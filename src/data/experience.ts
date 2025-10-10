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
    id: "agilant-solutions",
    company: "Agilant Solutions",
    position: "Sr React Developer",
    startDate: "Dec. 2022",
    endDate: null,
    description:
      "Work with React and TypeScript to create multiple applications that help keep track of client inventory needs.",
    achievements: [
      "Architect and high-level planning of data movement in applications",
      "Created reusable and flexible UI components",
      "Mentored developers, enforcing coding standards",
      "Ensure coding standards are in place and followed",
    ],
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "jQuery",
      "Express",
      "UI Components",
      "WordPress",
    ],
    current: true,
  },
  {
    id: "platypus-technologies",
    company: "Platypus Technologies",
    position: "Application Developer",
    startDate: "Oct. 2021",
    endDate: "Oct. 2022",
    description:
      "Worked with React and React Native to create and maintain web and mobile applications for various clients.",
    achievements: [
      "Performed work in TypeScript while working with React and React Native",
      "Worked with React Admin to create an interactive dashboard",
      "Developed unit and end-to-end tests to ensure code reliability",
      "Performed back-end tasks in Nest.js and Laravel",
    ],
    technologies: [
      "React",
      "React Native",
      "TypeScript",
      "React Admin",
      "Nest.js",
      "Laravel",
    ],
  },
  {
    id: "daprile-properties",
    company: "D'aprile Properties",
    position: "Full Stack Developer",
    startDate: "Nov. 2020",
    endDate: "Sept. 2021",
    description:
      "Worked with Laravel 8 as a full-stack developer and created a custom CMS for real estate sites. Maintained and developed features for an application using Tailwind, Vue.js, and Laravel that helps real estate agents track performance.",
    achievements: [
      "Created a custom CMS for real estate sites using Laravel 8",
      "Maintained and developed features for real estate agent performance tracking application",
      "Utilized Tailwind CSS for modern, responsive designs",
      "Integrated Vue.js with Laravel for interactive user interfaces",
    ],
    technologies: ["Laravel", "Vue.js", "Tailwind CSS", "PHP", "JavaScript"],
  },
  {
    id: "dealer-inspire",
    company: "Dealer Inspire",
    position: "Front-end Web Developer",
    startDate: "June 2018",
    endDate: "Apr. 2020",
    description:
      "Front-end WordPress Web Developer creating and maintaining websites for automotive dealerships.",
    achievements: [
      "Created front-end websites for automotive dealerships using HTML, SCSS, and jQuery",
      "Maintained front-end websites for automotive dealerships",
      "Worked closely with project managers to make sure goals are hit for websites in a timely manner",
      "Delivered consistent, high-quality work across multiple client projects",
    ],
    technologies: ["HTML", "SCSS", "jQuery", "WordPress", "JavaScript"],
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
    honors: [
      "Dean's List",
      "Magna Cum Laude",
      "Computer Science Honor Society",
    ],
  },
];

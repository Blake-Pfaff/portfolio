Project Name: blake-portfolio
Framework: Next.js (App Router)
Language: TypeScript
Styling: Tailwind CSS
Deployment: Vercel

blake-portfolio/
├── app/
│ ├── layout.tsx
│ ├── page.tsx
│ ├── globals.css
│ ├── (sections)/
│ │ ├── Hero.tsx
│ │ ├── About.tsx
│ │ ├── Experience.tsx
│ │ ├── Projects.tsx
│ │ └── Contact.tsx
│ ├── projects/
│ │ └── [slug]/page.tsx // Optional: Project detail pages
├── components/
│ ├── Navbar.tsx
│ ├── Footer.tsx
│ ├── SectionHeading.tsx
│ ├── ProjectCard.tsx
│ ├── ExperienceTab.tsx
│ ├── ThemeToggle.tsx
│ └── MotionWrapper.tsx
├── data/
│ ├── projects.ts
│ └── experience.ts
├── public/
│ ├── images/
│ │ ├── avatar.jpg
│ │ └── project-1.png
│ └── favicon.ico
├── utils/
│ ├── animations.ts
│ └── constants.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md

Component Overview
Component Purpose
Hero.tsx Landing intro with animated text + CTA buttons
About.tsx Short personal bio + skills grid
Experience.tsx Timeline or tabbed job history section
Projects.tsx Displays project cards from /data/projects.ts
Contact.tsx Contact CTA with buttons for email, LinkedIn, GitHub
Navbar.tsx Sticky navigation bar with section anchors
Footer.tsx Minimal footer with social links
ThemeToggle.tsx Dark/light mode switch
ProjectCard.tsx Animated hover card for each project
MotionWrapper.tsx Wrapper using Framer Motion for scroll animations
SectionHeading.tsx Consistent heading style per section

Design & Tailwind Notes

Tailwind Theme

Base font: font-sans (Inter or Space Grotesk)

Colors:

Background: #0a192f (dark navy)

Text: #ccd6f6 / #8892b0

Accent: #64ffda

Add custom tailwind.config.ts palette for brand colors

Enable darkMode: 'class'

Motion

Use Framer Motion for:

Fade-up on scroll (initial, whileInView, transition)

Hero intro animation sequence

Hover elevation on project cards

Interaction Plan
Interaction Behavior
Scroll nav Highlight active section
Theme toggle Persisted in localStorage
Hover on project Card elevates + shows buttons
Scroll reveal Sections animate in with Framer Motion
Smooth scroll scroll-behavior: smooth enabled globally

Deployment Plan
Step Action
1 Push repo to GitHub
2 Connect repo to Vercel

3 Configure custom domain (e.g., blakepfaff.dev)
4 Enable analytics + preview deployment branches
5 Share final URL in resume + LinkedIn

for inspiration use https://brittanychiang.com/#projects

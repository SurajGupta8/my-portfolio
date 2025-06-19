export interface ContactInfo {
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
}
export const contactData: ContactInfo = {
    email: "surajkumargupta0092@gmail.com",
    phone: "+91-7481902859",
    location: "Bengaluru, IN",
    linkedin: "https://linkedin.com/in/suraj-k-gupta/",
    github: "https://github.com/SurajGupta8"
};

export const summaryData: string = "Results-driven Software Engineer with over 4.2 years of experience in designing, developing, optimizing, and securing scalable web applications and cloud-native solutions. Proven expertise in full-stack development, leveraging React.js, Node.js, TypeScript, and AWS services to enhance user experience, improve system stability, and drive operational efficiency. A collaborative team player adept at problem-solving in fast-paced Agile environments, consistently delivering high-quality software and contributing to significant performance improvements and vulnerability remediation.";

export interface ExperienceItem {
    id: string;
    title: string;
    company: string;
    location: string;
    duration: string;
    details: string[];
}
export const experienceData: ExperienceItem[] = [
    {
        id: "exp1",
        title: "Software Engineer I",
        company: "Deltek Replicon",
        location: "Bengaluru, IN",
        duration: "Oct 2021 – Present",
        details: [
            "Engineered a streamlined, user-friendly interface for the ZeroTime platform and ZeroTime Browser Extension using React.js, Material-UI, and TypeScript, achieving a **25% reduction in user support tickets** and enhancing overall user satisfaction by **40%** within 6 months.",
            "Collaborated within an Agile framework with cross-functional software engineering and QA teams to design, develop, and deploy five robust features for the ZeroTime SaaS platform, leveraging React.js and Node.js; directly contributed to a **40% uplift in user engagement metrics** and a **25% decrease in critical bug reports**.",
            "Implemented encryption at rest for **SQS queues using KMS**, including a thorough evaluation of **Customer Managed Keys (CMK)** versus AWS managed keys for optimal security posture and **FedRAMP compliance**.",
            "Enriched unit and system tests using Jest and React Testing Library for functional compliance of ZeroTime and various data collectors, achieving and maintaining over **85% code coverage**.",
            "Led the development of **responsive single landing pages** and internal applications using React.js, GraphQL, JavaScript, and TypeScript, focusing on performance and maintainability.",
            "Simplified and standardized reusable UI components, resulting in a **60% reduction in frontend development effort** for new features and accelerating project delivery timelines.",
            "Contributed to collector stabilization initiatives, optimizing performance by approximately **30%** through targeted refactoring and algorithmic improvements.",
            "Proactively monitored system health and performance using **Sumologic**, **xMatters** leading investigations and swift resolutions for production alarms ensuring high service reliability.",
            "Championed **WCAG compliance** by identifying and rectifying **keyboard navigation** issues within browser extension popup pages, ensuring an inclusive user experience."
        ]
    },
    {
        id: "exp2",
        title: "Software Engineer Intern",
        company: "Pantech Solutions Pvt Ltd",
        location: "Remote, IN",
        duration: "July 2020 – Dec 2020",
        details: [
            "Acquired and applied Python programming and machine learning concepts, significantly enhancing technical capabilities and contributing to the development of advanced project prototypes.",
            "Actively participated in **code reviews**, providing constructive feedback to improve code quality, maintainability, and adherence to best practices.",
            "Developed responsive **single-page web applications (SPAs)** using HTML5, CSS3, JavaScript (ES6+), and React.js, gaining foundational frontend development experience.",
            "Proactively enhanced **frontend technology** skills through dedicated learning and obtained relevant certifications via LinkedIn Learning.",
            "Optimized frontend data fetching and rendering, boosting web application performance and improving user-perceived loading speeds by **20%**.",
            "Collaborated with a team of 5 developers on various stages of the software development lifecycle, from conceptualization to deployment.",
        ]
    }
];

export interface SkillCategory {
    category: string;
    items: string[];
}
export const skillsData: SkillCategory[] = [
    { category: "Programming Languages", items: ["JavaScript (ES6+)", "TypeScript", "Python", "C"] },
    { category: "Frontend Technologies", items: ["HTML5", "CSS3", "React.js", "Next.js", "Redux", "Vite", "Material-UI", "Tailwind CSS", "Framer Motion", "WCAG Accessibility Standards"] },
    { category: "Backend & APIs", items: ["Node.js", "Express.js", "GraphQL", "RESTful APIs"] },
    { category: "Testing Frameworks", items: ["Jest", "Mocha", "React Testing Library", "Cypress (basic)"] },
    { category: "DevOps & Cloud", items: ["AWS (S3, Lambda, DynamoDB, SQS, ALB, KMS, CloudWatch)", "Docker", "CI/CD Pipelines (e.g., Jenkins, GitHub Actions)", "Git", "GitHub"] },
    { category: "Databases", items: ["MySQL", "PostgreSQL", "NoSQL (DynamoDB)"] },
    { category: "Development Tools", items: ["VSCode", "Jira", "Sumologic", "Postman"] },
    { category: "AI Development Tools", items: ["GitHub Copilot", "ChatGPT", "Cursor"] }
];

export interface Project {
    id: string;
    title: string;
    description: string;
    techStack: string;
    githubUrl?: string;
    deployUrl?: string;
}

export const projectsData: Project[] = [
     {
        id: "proj1",
        title: "Cron Job Scheduler UI",
        description: "Developed a visual cron job scheduler UI enabling users to input cron expressions, visualize components (hours, days, months), and generate human-readable descriptions from recurrence patterns. Features real-time validation and parsing.",
        techStack: "React.js, TypeScript, Node.js, Express.js, node-cron, Tailwind CSS, Material-UI",
        githubUrl: "https://github.com/SurajGupta8/cron_tsx",
        deployUrl: "https://cron-tsx.vercel.app/"
    },
    {
        id: "proj2",
        title: "Hierarchical Data Table Component",
        description: "Engineered a reusable React component for displaying and managing hierarchical/tree-like data in a tabular format. Implemented features such as expandable rows, dynamic value allocation, variance calculation, and efficient rendering for large datasets.",
        techStack: "React.js, TypeScript, JavaScript (ES6+), CSS Modules",
        githubUrl: "https://github.com/SurajGupta8/hierarchial-table-lumel",
        deployUrl: "https://hierarchial-table-lumel.vercel.app/"
    },
    {
        id: "proj3",
        title: "LSEG Stockbot",
        description: "Developed a proof-of-concept chatbot designed to simulate stock price retrieval and financial insight delivery, utilizing React.js for the frontend and JavaScript for interactive logic. Focused on UI/UX principles for intuitive interaction, using simulated data to demonstrate functionality without live API dependencies.",
        techStack: "React.js, JavaScript, CSS",
        githubUrl: "https://github.com/SurajGupta8/LSEG-Stockbot",
        deployUrl: "https://lseg-stockbot.vercel.app/"
    },
    {
        id: "proj4",
        title: "ToDo App using React.js & TypeScript",
        description: "Engineered a feature-rich, responsive ToDo application implementing CRUD operations. Leveraged React.js with TypeScript for type safety, Tailwind CSS for utility-first styling, and Framer Motion for smooth animations. Optimized for performance using Vite, with PostCSS for advanced CSS processing and ESLint for maintaining high code quality.",
        techStack: "React.js, TypeScript, Tailwind CSS, Framer Motion, Vite, PostCSS, ESLint",
        githubUrl: "https://github.com/SurajGupta8/todo-app",
        deployUrl: "https://coddeve-todo-app.netlify.app/"
    },
];

export interface Education {
    degree: string;
    university: string;
    duration: string;
}
export const educationData: Education = {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    university: "Mahatma Gandhi Central University",
    duration: "Sep 2017 – Aug 2021"
};

export interface Certification {
    id: string;
    name: string;
    issuer: string;
    description: string;
}
export const certificationsData: Certification[] = [
    { id: "cert1", name: "MERN Stack Development", issuer: "LinkedIn Learning", description: "Built and deployed full-stack applications using MongoDB, Express.js, React, and Node.js." },
    { id: "cert2", name: "AWS Cloud Practitioner Essentials", issuer: "LinkedIn Learning", description: "Gained proficiency in core AWS services including EC2, S3, Lambda, and foundational cloud concepts." },
    { id: "cert3", name: "Docker Essentials", issuer: "IBM", description: "Mastered Docker fundamentals, containerization techniques, and CI/CD integration practices." },
    { id: "cert4", name: "Software Development Life Cycle (SDLC)", issuer: "LinkedIn Learning", description: "Comprehensive understanding of SDLC methodologies, processes, and best practices." }
];

export const navItems = [
    { label: 'Summary', href: '#summary', id: 'summary' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
];
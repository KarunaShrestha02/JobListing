export type JobType = "Full-time" | "Internship" | "Remote" | "Part-time";

export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: JobType;
  description: string;
  skills: string[];
  postedDaysAgo: number;
}

export const jobs: Job[] = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "CodeforChange",
    location: "Bagdol, Lalitpur",
    type: "Full-time",
    description: "We are looking for a skilled Frontend Developer to join our growing team. You will be responsible for building and maintaining user interfaces using React.js, collaborating closely with designers and backend engineers to deliver seamless user experiences. The ideal candidate has a passion for clean code and modern web technologies.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Git"],
    postedDaysAgo: 2,
  },
  {
    id: 2,
    title: "UI/UX Design Intern",
    company: "Meteor Inc",
    location: "Bhageshwori, Swayambhu",
    type: "Internship",
    description: "Join our design team as a UI/UX Intern and work on real-world projects for top-tier clients. You'll learn to create wireframes, prototypes, and high-fidelity mockups while gaining hands-on experience with tools like Figma and Adobe XD. A great opportunity to kickstart your design career.",
    skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping"],
    postedDaysAgo: 5,
  },
  {
    id: 3,
    title: "Backend Engineer",
    company: "Fusemachines",
    location: "Remote",
    type: "Remote",
    description: "CloudStack is hiring a Backend Engineer to design, develop, and scale our cloud infrastructure services. You will work with Node.js and PostgreSQL to build robust APIs and microservices. Experience with containerization and CI/CD pipelines is a strong plus.",
    skills: ["Node.js", "PostgreSQL", "Docker", "AWS"],
    postedDaysAgo: 1,
  },
  {
    id: 4,
    title: "Full Stack Developer",
    company: "Progressive Labs",
    location: "Basundhara, Tokha",
    type: "Full-time",
    description: "Innovate Labs is seeking a Full Stack Developer who can work across the entire web application stack. From crafting responsive UIs with React to building scalable APIs with Express.js, you'll own features end-to-end. We value curiosity, collaboration, and continuous learning.",
    skills: ["React", "Node.js", "MongoDB", "Express.js"],
    postedDaysAgo: 3,
  },
  {
    id: 5,
    title: "Data Analyst Intern",
    company: "Data Cloud",
    location: "Pune, India",
    type: "Internship",
    description: "DataWise Analytics is offering a Data Analyst Internship for students and fresh graduates passionate about data. You will assist in cleaning, analyzing, and visualizing datasets to derive actionable business insights. Familiarity with Python and SQL is preferred.",
    skills: ["Python", "SQL", "Excel", "Tableau"],
    postedDaysAgo: 7,
  },
  {
    id: 6,
    title: "Mobile App Developer",
    company: "AppTech",
    location: "Remote",
    type: "Remote",
    description: "AppForge is looking for a Mobile App Developer experienced in React Native to build cross-platform mobile applications. You'll collaborate with product managers and designers to deliver polished, performant apps for both iOS and Android platforms.",
    skills: ["React Native", "JavaScript", "Firebase", "REST APIs"],
    postedDaysAgo: 4,
  },
];

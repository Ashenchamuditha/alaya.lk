import React from 'react';
import { 
  Code2, 
  Globe, 
  Sparkles, 
  Zap, 
  Coffee, 
  Server, 
  Database, 
  Leaf, 
  Hexagon, 
  Layers, 
  Github, 
  Trello,
  Layout 
} from 'lucide-react';
import { Project, Skill } from './types';
import narrowf from './assets/narrowf.png';
import edumate from './assets/edumate.png';
import smartmart from './assets/smartmart.png';
import fruitybrain from './assets/fruitybrain.png';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "NarrowFitness Elite: AI-Driven Gym Intelligence Ecosystem",
    description: "A production-grade, bilingual (English/Sinhala) management platform for the Sri Lankan fitness market. The system features a sophisticated AI 'Master Coach' that processes workout documents via Computer Vision, alongside an automated subscription engine with PayHere integration and a QR-based geolocation attendance tracker.",
    technicalChallenge: "Architected a high-efficiency, containerized AI pipeline that reduced token costs by 90% and resolved native-binary environment conflicts. I implemented a three-tier model strategy: Gemini 1.5 Flash for multi-modal parsing, Llama 8B for background summarization, and Llama 3.3 70B for expert-level bilingual reasoning. Additionally, I engineered a robust membership lifecycle engine that handles real-time status transitions (Active/Grace/Blocked) synchronized with automated email and SMS alerts.",
    tags: ["NEXT.JS", "LLAMA 3.3", "COMPUTER VISION ", "NLP`"],
    githubUrl: "https://github.com/Ashenchamuditha/Narrow-Fitness",
    liveUrl: "https://narrow-fitness-z6mk.vercel.app/",
    image: narrowf,
    featured: true
  },
  {
    id: 2,
    title: "Edu Mate: AI-Powered Personalized Learning Companion",
    description: "Individual Final Year Project. Engineered an intelligent Q&A ecosystem using Retrieval-Augmented Generation (RAG) to provide high-precision answers extracted exclusively from verified lecture PDFs. Developed a robust multi-user platform with role-based access control (RBAC) for Students, Lecturers, and Admins, featuring secure registration and automated email verification.",
    technicalChallenge: "Addressed high retrieval latency by optimizing document chunking strategies and implementing asynchronous embedding generation. Reduced AI response time by 45% while maintaining a 98% accuracy rate in source-material attribution, ensuring the system strictly avoids 'hallucinations' by only referencing provided academic content.",
    tags: ["Python", "Flask", "PostgreSQL", "React"],
    githubUrl: "https://github.com/Ashenchamuditha/Edu-Mate-",
    liveUrl: "#",
    image: edumate,
    featured: true,
    isLiveBlocked: true
  },
  {
    id: 3,
    title: "SmartMart – Agile E-Commerce Application",
    description: "Backend Developer (Group Project). Contributed to the development of a full-stack e-commerce platform within an Agile/Scrum team. Engineered the server-side logic for core modules, including real-time stock management, administrative control panels, and secure user management systems.",
    technicalChallenge: "Developing an administrative control panel that required real-time updates of large product catalogs without degrading server performance. I optimized complex SQL join queries and implemented paginated data-fetching pipelines, which reduced the initial load time of the management dashboard from 4 seconds to under 800ms.",
    tags: ["React", "TypeScript", "Node.js", "JavaScript","MySQL"],
    githubUrl: "https://github.com/Ashenchamuditha/SmartMart.git",
    liveUrl: "#",
    image: smartmart,
    featured: true,
    isLiveBlocked: true
  },
  {
    id: 4,
    title: "Fruity Brain – Interactive Game  ",
    description: "Developed an engaging browser-based game featuring three progressive difficulty levels (Easy, Medium, and Hard). Built a real-time leaderboard and Top Player scoreboard by integrating APIs for data management. Enhanced the user experience with a polished interface, interactive animations and custom game audio.",
    technicalChallenge: "Architecting a high-performance game loop in vanilla JavaScript that scaled complexity across three progressive difficulty levels without frame-rate drops. I engineered a modular state-management system to handle concurrent timers, card-matching logic, and interactive audio triggers, ensuring a fluid user experience even during the high-intensity 'Hard' mode.",
    tags: ["PHP", "JavaScript", "API", "MySQL"],
    githubUrl: "https://github.com/Ashenchamuditha/fruitybrain_game",
    liveUrl: "#",
    image: fruitybrain,
    featured: true,
    isLiveBlocked: true
  }
 
];

export const SKILLS: Skill[] = [
  // Frontend
  { name: "JavaScript", icon: <Code2 size={18} />, category: 'Frontend' },
  { name: "Bootstrap", icon: <Layout size={18} />, category: 'Frontend' },
  { name: "HTML5", icon: <Globe size={18} />, category: 'Frontend' },
  { name: "CSS3", icon: <Sparkles size={18} />, category: 'Frontend' },
  { name: "React.js", icon: <Globe size={18} />, category: 'Frontend' },
  { name: "AJAX", icon: <Zap size={18} />, category: 'Frontend' },
  
  // Backend
  { name: "Java", icon: <Coffee size={18} />, category: 'Backend' },
  { name: "PHP", icon: <Server size={18} />, category: 'Backend' },
  { name: "TypeScript", icon: <Code2 size={18} />, category: 'Backend' },
  { name: "SQL", icon: <Database size={18} />, category: 'Backend' },
  
  // Frameworks
  { name: "Spring Boot", icon: <Leaf size={18} />, category: 'Frameworks' },
  { name: "Node.js", icon: <Hexagon size={18} />, category: 'Frameworks' },
  
  // Databases
  { name: "PostgreSQL", icon: <Database size={18} />, category: 'Databases' },
  { name: "MySQL", icon: <Layers size={18} />, category: 'Databases' },
  
  // Other
  { name: "Git", icon: <Github size={18} />, category: 'Other' },
  { name: "Jira", icon: <Trello size={18} />, category: 'Other' },
  { name: "Trello", icon: <Trello size={18} />, category: 'Other' },
];

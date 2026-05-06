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

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "NexusOS Kernel Module",
    description: "A custom Linux kernel module for high-efficiency process scheduling in virtualized environments.",
    technicalChallenge: "Implemented a custom red-black tree for O(log n) process lookup, significantly reducing latency compared to standard list-based schedulers in high-concurrency stress tests.",
    tags: ["C", "Linux", "Systems", "Virtualization"],
    githubUrl: "https://github.com/ashenchamuditha",
    liveUrl: "#",
    image: "/assets/projects/nexus-os.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Visionary AI Analytics",
    description: "Real-time object detection and tracking optimized for edge computing devices.",
    technicalChallenge: "Optimized model inference by implementing TensorRT acceleration, achieving a 40% increase in FPS on low-power hardware while maintaining 98% accuracy.",
    tags: ["Python", "PyTorch", "OpenCV", "Docker"],
    githubUrl: "https://github.com/ashenchamuditha",
    liveUrl: "#",
    image: "/assets/projects/visionary-ai.jpg",
    featured: true
  },
  {
    id: 3,
    title: "Alaya Pay (Web3/DeFi)",
    description: "A secure decentralized finance dashboard for cross-chain asset management.",
    technicalChallenge: "Developed a custom provider-agnostic polling layer to sync asset prices from multiple DEXs with sub-second accuracy across three different blockchain networks.",
    tags: ["React", "TypeScript", "Ethers.js", "Solidity"],
    githubUrl: "https://github.com/ashenchamuditha",
    liveUrl: "#",
    image: "/assets/projects/alaya-pay.jpg",
    featured: true
  },
  {
    id: 4,
    title: "Sentinella IoT Hub",
    description: "Enterprise-grade monitoring for industrial smart sensors.",
    technicalChallenge: "Architected a horizontal scaling strategy using RabbitMQ to handle spikes of up to 100k messages per second without data loss.",
    tags: ["Next.js", "Go", "RabbitMQ", "PostgreSQL"],
    githubUrl: "https://github.com/ashenchamuditha",
    liveUrl: "#",
    image: "/assets/projects/sentinella.jpg",
  },
  {
    id: 5,
    title: "Lumina Headless CMS",
    description: "Dev-first CMS designed for ultra-low latency response times.",
    technicalChallenge: "Integrated a Redis-based cache-aside pattern that reduced average API response time from 120ms to 8ms for read-heavy operations.",
    tags: ["Node.js", "Express", "MongoDB", "Redis"],
    githubUrl: "https://github.com/ashenchamuditha",
    liveUrl: "#",
    image: "/assets/projects/lumina.jpg",
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

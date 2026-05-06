import React from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
  key?: React.Key;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -10 }}
    className="group relative bg-surface-lighter rounded-2xl overflow-hidden border border-border"
  >
    <div className="relative overflow-hidden aspect-video">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
        <div className="flex gap-4">
           {project.githubUrl && (
             <motion.a whileHover={{ scale: 1.1 }} href={project.githubUrl} target="_blank" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black shadow-xl"><Github size={16} /></motion.a>
           )}
           {project.liveUrl && (
             <motion.a whileHover={{ scale: 1.1 }} href={project.liveUrl} target="_blank" className="w-10 h-10 bg-brand rounded-full flex items-center justify-center text-white shadow-xl"><ExternalLink size={16} /></motion.a>
           )}
        </div>
      </div>
    </div>
    
    <div className="p-8">
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map(tag => (
          <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-white/5 border border-white/10 rounded-md text-gray-400">
            {tag}
          </span>
        ))}
      </div>
      
      <h3 className="text-2xl font-display font-bold text-white mb-3 flex items-center justify-between">
        {project.title}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors"><Github size={18} /></a>
        )}
      </h3>
      
      <p className="text-gray-400 text-sm leading-relaxed mb-6 italic">
        "{project.description}"
      </p>

      {/* Proof/Challenge Section */}
      <div className="p-4 rounded-xl bg-surface border border-border">
        <h4 className="text-xs font-bold uppercase tracking-widest text-brand mb-2">Technical Challenge</h4>
        <p className="text-xs text-gray-500 leading-relaxed">
          {project.technicalChallenge}
        </p>
      </div>

      <div className="mt-8">
        <a 
          href={project.liveUrl || "#"} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-2 bg-brand/10 hover:bg-brand/20 border border-brand/20 rounded-lg text-brand text-sm font-bold transition-all"
        >
          Visit Project <ExternalLink size={14} />
        </a>
      </div>
    </div>
  </motion.div>
);

export default ProjectCard;

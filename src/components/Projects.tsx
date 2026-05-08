import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../constants';

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="The Proof">Featured Projects</SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
        
        <div className="mt-20 p-12 rounded-3xl bg-brand/10 border border-brand/20 flex flex-col items-center text-center">
          <h3 className="text-3xl font-display font-bold text-white mb-4 italic">Have a unique idea?</h3>
          <p className="text-gray-400 mb-8 max-w-xl">
            I'm always looking for ambitious projects and open-source collaborations. Let's build something that makes a difference.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-brand text-white font-bold rounded-xl shadow-2xl shadow-brand/20"
          >
            Start a Project
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

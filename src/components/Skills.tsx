import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { SKILLS } from '../constants';
import { Skill } from '../types';

const Skills = () => {
  const skillCategories: Skill['category'][] = ['Frontend', 'Backend', 'Frameworks', 'Databases', 'Other'];

  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Technical Expertise">Skills Cloud</SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {skillCategories.map((category) => (
            <div key={category} className="space-y-6">
              <h4 className="text-white font-display font-bold text-lg flex items-center gap-4 group">
                <span className="w-1.5 h-1.5 rounded-full bg-brand group-hover:scale-150 transition-transform" />
                {category}
                <span className="h-px flex-1 bg-white/5" />
              </h4>
              <div className="flex flex-wrap gap-3">
                {SKILLS.filter(s => s.category === category).map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: 'rgba(59, 130, 246, 0.1)', 
                      borderColor: 'rgba(59, 130, 246, 0.3)',
                      color: '#3b82f6'
                    }}
                    className="px-5 py-3 rounded-xl bg-surface-lighter border border-border transition-all flex items-center gap-3 text-gray-400 group cursor-default"
                  >
                    <span className="group-hover:text-brand transition-colors">{skill.icon}</span>
                    <span className="text-sm font-bold tracking-tight text-inherit group-hover:text-white">{skill.name}</span>
                  </motion.div>
                )) || <p className="text-gray-600 italic text-xs">More coming soon...</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

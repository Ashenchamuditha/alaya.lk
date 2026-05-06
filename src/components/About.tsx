import { GraduationCap, User } from 'lucide-react';
import SectionHeading from './SectionHeading';

const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-surface-lighter/30">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20">
          <SectionHeading subtitle="My Story">About Me</SectionHeading>
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              I am <span className="text-white font-medium">Ashen Chamuditha</span>, a developer who thrives at the intersection of complex logic and elegant design. My approach to software is holistic—focusing on performance, maintainability, and most importantly, the user experience.
            </p>
            <p>
              With a strong foundation in <span className="text-white">Computer Science</span>, I leverage modern tech stacks to turn ambitious ideas into reality. Whether it's low-level system modules or high-level web interfaces, I aim for excellence in every line of code.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 pt-6">
              <div className="p-6 bg-surface rounded-2xl border border-border">
                <GraduationCap className="text-brand mb-4" size={32} />
                <h4 className="text-white font-bold mb-1">Education</h4>
                <p className="text-xs text-gray-500 uppercase tracking-tighter">BSc. Computer Science Graduate</p>
                <p className="text-[10px] text-gray-600 font-medium uppercase tracking-widest mt-1">University of Bedfordshire</p>
              </div>
              <div className="p-6 bg-surface rounded-2xl border border-border">
                <User className="text-brand mb-4" size={32} />
                <h4 className="text-white font-bold mb-1">Community</h4>
                <p className="text-xs text-gray-500 uppercase tracking-tighter">Open Source Enthusiast</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           <div className="h-48 md:h-64 rounded-2xl overflow-hidden bg-gray-900 border border-border">
              <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=500" alt="Tech context" className="w-full h-full object-cover opacity-40 hover:opacity-70 transition-opacity" />
           </div>
           <div className="h-48 md:h-64 rounded-2xl overflow-hidden bg-gray-900 border border-border">
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=500" alt="Coding" className="w-full h-full object-cover opacity-40 hover:opacity-70 transition-opacity" />
           </div>
           <div className="h-48 md:h-64 rounded-2xl overflow-hidden bg-gray-900 border border-border">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=500" alt="Workplace" className="w-full h-full object-cover opacity-40 hover:opacity-70 transition-opacity" />
           </div>
           <div className="h-48 md:h-64 rounded-2xl overflow-hidden bg-gray-900 border border-border">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=500" alt="Collaboration" className="w-full h-full object-cover opacity-40 hover:opacity-70 transition-opacity" />
           </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ChevronRight, 
  ExternalLink,
  Sparkles
} from 'lucide-react';
import resumeFile from '../assets/ASHEN CHAMUDITHA.pdf';
import ConfirmationModal from './ConfirmationModal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeFile;
    link.download = "ASHEN_CHAMUDITHA_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="min-h-screen flex items-center justify-center pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-bold uppercase tracking-widest mb-8">
            <Sparkles size={14} /> Open for Collaboration
          </div>
          <h1 className="text-5xl md:text-9xl font-display font-bold text-white leading-[1.1] mb-8">
            Ashen <br />
            <span className="text-brand text-glow italic">Chamuditha.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-display font-medium">
            Full-Stack Engineer building high-performance systems and architecting seamless digital experiences.
          </p>
          
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 bg-white text-black font-bold rounded-xl flex items-center gap-2 hover:bg-brand hover:text-white transition-all shadow-lg text-lg"
            >
              Top Work <ChevronRight size={20} />
            </motion.button>
            
            <motion.button 
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 border border-white/20 text-white font-bold rounded-xl flex items-center gap-2 hover:bg-white/5 transition-all text-lg"
            >
              Download Resume <ExternalLink size={20} />
            </motion.button>
          </div>

          <ConfirmationModal 
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onConfirm={handleDownload}
            title="Download Resume"
            message="Are you sure you want to download my professional resume?"
            confirmText="Download"
            cancelText="Not now"
          />

          <div className="flex gap-8 items-center justify-center mt-12">
            {[
              { icon: <Github size={24} />, url: "https://github.com/ashenchamuditha", label: "GitHub" },
              { icon: <Linkedin size={24} />, url: "https://www.linkedin.com/in/ashen-chamuditha-a88b73205", label: "LinkedIn" },
              { icon: <Mail size={24} />, url: "mailto:ashenchamuditha.dev@gmail.com", label: "Email" }
            ].map((social, i) => (
              <motion.a 
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
                whileHover={{ y: -5, color: '#3b82f6' }}
                className="text-gray-500 hover:text-brand transition-all"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;

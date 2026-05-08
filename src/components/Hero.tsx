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
    <header className="relative min-h-screen flex items-center justify-center pt-24 pb-12 md:pt-32 md:pb-20 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Background Image - High Visibility Tech Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" 
            alt="Engineering Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-surface/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface" />
        </div>

        {/* Grid Pattern with Mask */}
        <div 
          className="absolute inset-0 grid-pattern opacity-30" 
          style={{ 
            WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
            maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)'
          }}
        />
        
        {/* Grain/Noise Texture */}
        <div className="absolute inset-0 noise opacity-[0.03] mix-blend-overlay" />

        {/* Animated Glows */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.45, 0.15]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/20 blur-[100px] rounded-full" 
        />
        
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-[120px] rounded-full" 
        />

        {/* Central Glow for readability */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-brand/5 blur-[150px] rounded-full opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-bold uppercase tracking-widest mb-8">
            <Sparkles size={14} /> Open for Collaboration
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-9xl font-display font-bold text-white leading-[1.1] mb-8">
            Ashen <br />
            <span className="text-brand text-glow italic">Chamuditha.</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-display font-medium px-4">
            Full-Stack Engineer engineering resilient digital solutions for industrial challenges and social impact.
          </p>
          
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 md:px-10 md:py-5 bg-white text-black font-bold rounded-xl flex items-center gap-2 hover:bg-brand hover:text-white transition-all shadow-lg text-base md:text-lg"
            >
              Top Work <ChevronRight size={20} />
            </motion.button>
            
            <motion.button 
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 md:px-10 md:py-5 border border-white/20 text-white font-bold rounded-xl flex items-center gap-2 hover:bg-white/5 transition-all text-base md:text-lg"
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

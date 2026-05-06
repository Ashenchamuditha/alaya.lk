import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ChevronRight, 
  Menu, 
  X 
} from 'lucide-react';
import logo from '../assets/alaya.png';
import resumeFile from '../assets/ASHEN CHAMUDITHA.pdf';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];
  const linkedinUrl = "https://www.linkedin.com/in/ashen-chamuditha-a88b73205";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4 shadow-xl' : 'py-6 md:py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 group"
        >
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border border-brand/50 grow-0 shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-transform group-hover:scale-110">
            <img 
              src={logo} 
              alt="ashen" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-xl md:text-2xl font-display font-bold tracking-tighter text-white uppercase">
            ALAYA<span className="text-brand"> .LK</span>
          </div>
        </motion.a>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center text-sm font-medium uppercase tracking-widest text-gray-400">
          {navLinks.map((item) => (
            <a 
              key={item} 
              href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
              className="hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-400 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-t border-white/5 py-8 px-6 flex flex-col gap-8 md:hidden shadow-2xl h-[calc(100vh-80px)] overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((item) => (
                <a 
                  key={item} 
                  href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-display font-bold text-gray-300 hover:text-brand flex items-center justify-between group"
                >
                  {item}
                  <ChevronRight size={24} className="text-gray-600 group-hover:text-brand" />
                </a>
              ))}
            </div>

            <div className="mt-auto pt-8 border-t border-white/5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-6 font-bold">Connect with me</p>
              <div className="flex gap-6">
                {[
                  { icon: <Github size={24} />, url: "https://github.com/ashenchamuditha" },
                  { icon: <Linkedin size={24} />, url: "https://www.linkedin.com/in/ashen-chamuditha-a88b73205" },
                  { icon: <Mail size={24} />, url: "mailto:ashenchamuditha.dev@gmail.com" }
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

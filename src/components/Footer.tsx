import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import logo from '../assets/alaya.png';

const Footer = () => {
  const linkedinUrl = "https://www.linkedin.com/in/ashen-chamuditha-a88b73205";
  
  return (
    <footer className="py-20 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center transition-all duration-300 gap-12 mb-12">
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="ALAYA.LK" className="h-10 w-auto object-contain mb-2" />
            <p className="text-xs font-mono text-gray-500 uppercase tracking-[0.3em] font-normal mt-2">Digital Architect • Ashen Chamuditha</p>
          </div>
          
          <div className="flex gap-8 justify-center">
             {[
               { icon: <Github size={22} />, url: "https://github.com/ashenchamuditha" },
               { icon: <Linkedin size={22} />, url: linkedinUrl },
               { icon: <Instagram size={22} />, url: "https://www.instagram.com/ashen_chamudith?igsh=ZzlhZzBhbjdnd2M3" },
               { icon: <Mail size={22} />, url: "mailto:ashenchamuditha.dev@gmail.com" }
             ].map((social, i) => (
               <a 
                 key={i}
                 href={social.url} 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-gray-500 hover:text-brand transition-all hover:scale-110"
               >
                 {social.icon}
               </a>
             ))}
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-8">
          <div className="text-gray-500 text-[10px] md:text-sm text-center md:text-left leading-relaxed">
            © {new Date().getFullYear()} ALAYA.LK. Designed & Built with passion by Ashen Chamuditha.
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-gray-500">
             {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(link => (
               <a key={link} href={link === 'Home' ? '#' : `#${link.toLowerCase()}`} className="hover:text-white transition-colors uppercase tracking-widest text-[9px] md:text-[10px] font-bold">
                 {link}
               </a>
             ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

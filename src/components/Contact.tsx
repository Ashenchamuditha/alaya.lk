import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Globe, Send } from 'lucide-react';
import { toast } from 'sonner';
import SectionHeading from './SectionHeading';

const Contact = () => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');

  useEffect(() => {
    let timeoutId: number;
    if (formState === 'success') {
      timeoutId = window.setTimeout(() => {
        setFormState('idle');
      }, 10000);
    }
    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [formState]);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('sending');

    const formData = new FormData(e.currentTarget);
    
    // Access key from .env file
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
    
    if (!accessKey || accessKey === "YOUR_FREE_ACCESS_KEY_HERE") {
      console.error("Web3Forms Access Key is missing or default. Please get one from web3forms.com");
      // Fallback to simulation for now so the UI doesn't break
      setTimeout(() => {
        setFormState('success');
        toast.success("Message sent successfully (Demo mode)");
      }, 1500);
      return;
    }

    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setFormState('success');
        toast.success("Message sent successfully!");
      } else {
        console.error("Submission failed:", data);
        setFormState('idle');
        toast.error("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Network error:", error);
      setFormState('idle');
      toast.error("Network error. Please check your connection.");
    }
  };

  return (
    <section id="contact" className="py-32 px-6 bg-surface-lighter/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <SectionHeading subtitle="Get in touch">Contact Me</SectionHeading>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-md">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-6">
              <a href="mailto:ashenchamuditha.dev@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-brand/10 text-brand group-hover:bg-brand group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Email Address</p>
                  <p className="text-white font-bold">ashenchamuditha.dev@gmail.com</p>
                </div>
              </a>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 text-gray-400 hover:text-white transition-all">
                  <Globe size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Location</p>
                  <p className="text-white font-bold">Colombo, Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass p-8 md:p-12 rounded-3xl">
            <AnimatePresence mode="wait">
              {formState === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center">
                    <Send size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-gray-400">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="text-brand font-bold uppercase text-xs tracking-widest hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleContactSubmit} 
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Name</label>
                      <input 
                        required
                        name="name"
                        type="text" 
                        placeholder="Your Name"
                        className="w-full px-5 py-4 bg-surface border border-border rounded-xl focus:ring-2 focus:ring-brand focus:outline-none transition-all text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Email</label>
                      <input 
                        required
                        name="email"
                        type="email" 
                        placeholder="Your Email"
                        className="w-full px-5 py-4 bg-surface border border-border rounded-xl focus:ring-2 focus:ring-brand focus:outline-none transition-all text-white"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Message</label>
                    <textarea 
                      required
                      name="message"
                      rows={5} 
                      placeholder="Tell me about your project..."
                      className="w-full px-5 py-4 bg-surface border border-border rounded-xl focus:ring-2 focus:ring-brand focus:outline-none transition-all text-white resize-none"
                    />
                  </div>
                  <button 
                    disabled={formState === 'sending'}
                    type="submit" 
                    className="w-full py-4 bg-brand text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-blue-600 transition-all disabled:opacity-50"
                  >
                    {formState === 'sending' ? 'Sending...' : <>Send Message <Send size={18} /></>}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Skills', to: '/skills' },
    { name: 'Projects', to: '/projects' },
    { name: 'Experience', to: '/experience' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md py-4 shadow-lg border-b border-slate-800' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="text-2xl font-bold text-gradient cursor-pointer">
            Anas Ali
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) => 
                  `text-slate-300 hover:text-cyan-400 cursor-pointer transition-colors font-medium border-b-2 border-transparent ${isActive ? 'text-cyan-400 border-cyan-400/50' : ''}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="flex items-center space-x-4 ml-4">
              <a href="https://github.com/anasali0011" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/anasali011/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-slate-800"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => 
                    `block px-3 py-4 text-base font-medium text-slate-300 hover:text-cyan-400 border-b border-slate-800/50 ${isActive ? 'text-cyan-400' : ''}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="flex space-x-6 px-3 pt-6">
                <a href="https://github.com/anasali0011" className="text-slate-400 hover:text-cyan-400"><Github /></a>
                <a href="https://www.linkedin.com/in/anasali011/" className="text-slate-400 hover:text-cyan-400"><Linkedin /></a>
                <a href="mailto:2k22.it.2212063@gmail.com" className="text-slate-400 hover:text-cyan-400"><Mail /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

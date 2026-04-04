import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Github, Linkedin } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import heroImage from '../assets/hero.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img 
              src={heroImage} 
              alt="Anas Ali" 
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-slate-900 object-cover shadow-2xl"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight flex flex-wrap justify-center gap-x-4">
            <span>Hi, I'm</span>
            <span className="text-gradient">
              <Typewriter
                options={{
                  strings: ['Anas Ali'],
                  autoStart: true,
                  loop: true,
                  delay: 150,
                  deleteSpeed: 100,
                }}
              />
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed h-auto min-h-[4rem]">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('Aspiring Software Engineer specialized in building <span class="text-slate-200 font-semibold">scalable web applications</span> and <span class="text-slate-200 font-semibold">AI/ML solutions</span>.')
                  .pauseFor(1000)
                  .typeString('<br />Passionately crafting the future of technology.')
                  .start();
              }}
              options={{
                delay: 20,
                cursor: '▮',
              }}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="https://www.linkedin.com/in/anasali011/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl flex items-center gap-2 shadow-lg shadow-cyan-600/20 transition-all duration-300"
            >
              Get In Touch <ExternalLink size={20} />
            </motion.a>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex justify-center items-center gap-6"
          >
            <a href="https://github.com/anasali0011" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-300">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/anasali011/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-300">
              <Linkedin size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

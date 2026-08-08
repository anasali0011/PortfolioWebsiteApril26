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
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 flex justify-center relative"
        >
          <div className="relative group max-w-md w-full px-4">
            {/* Background Abstract Shapes */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-[2rem] blur-2xl group-hover:opacity-75 transition duration-1000"></div>
            
            {/* Main Image Container */}
            <div className="relative 
             rounded-[2rem] overflow-hidden border-2 border-slate-800 shadow-2xl group-hover:border-cyan-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent z-10" />
              <img 
                src={heroImage} 
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop";
                }}
                alt="Anas Ali Profile" 
                className="w-full h-full  transition-all duration-700 group-hover:scale-105"
              />
            </div>

            {/* Corner Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-600/10 rounded-full blur-2xl -z-10" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight min-h-[1.2em]">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('Hi, I\'m <span class="text-gradient">Anas Ali</span>')
                  .start();
              }}
              options={{
                cursor: '',
                delay: 80,
              }}
            />
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
    </section>
  );
};

export default Hero;

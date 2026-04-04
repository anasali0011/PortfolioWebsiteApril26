import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, GraduationCap, MapPin, Download, Sparkles, Brain, Rocket } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import heroImage from '../assets/hero.png';

const About = () => {
  const details = [
    { icon: <User size={20} className="text-cyan-400" />, label: 'Name', value: 'Anas Ali' },
    { icon: <GraduationCap size={20} className="text-cyan-400" />, label: 'Degree', value: 'B.Tech. IT' },
    { icon: <Code2 size={20} className="text-cyan-400" />, label: 'Stack', value: 'MERN + AI/ML' },
    { icon: <MapPin size={20} className="text-cyan-400" />, label: 'Location', value: 'Kanpur, India' },
  ];

  const highlights = [
    { icon: <Brain className="text-purple-400" />, title: 'Problem Solver', desc: 'Expertise in Data Structures & Algorithms' },
    { icon: <Rocket className="text-orange-400" />, title: 'Full Stack', desc: 'Building scalable MERN applications' },
    { icon: <Sparkles className="text-yellow-400" />, title: 'AI/ML Enthusiast', desc: 'Integrating intelligence into web solutions' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                About <span className="text-gradient">Me</span>
              </h2>
              
              <div className="text-xl md:text-2xl font-medium text-cyan-400 mb-6 h-8">
                <Typewriter
                  options={{
                    strings: [
                      'Software Engineer',
                      'Full Stack Developer',
                      'MERN Specialist',
                      'Problem Solver',
                      'AI/ML Enthusiast'
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </div>

              <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                I'm a passionate Software Engineer with a solid foundation in <span className="text-slate-200 font-medium">Data Structures & Algorithms</span>. 
                My focus is on crafting seamless user experiences and robust backend architectures.
              </p>
              
              <p className="text-lg text-slate-400 mt-4 leading-relaxed max-w-xl">
                Currently pursuing my B.Tech at <span className="text-cyan-400 font-medium">PSIT Kanpur</span>, I've dedicated myself to mastering the MERN stack while exploring the vast possibilities of Artificial Intelligence.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="space-y-4">
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 p-4 glass-card rounded-2xl border border-slate-800/50 hover:bg-slate-900/50 transition-all duration-300"
                >
                  <div className="p-3 bg-slate-800 rounded-xl">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-slate-200 font-bold">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {details.map((detail, index) => (
                <div key={index} className="flex items-center gap-4 p-4 glass-card rounded-xl border border-slate-800 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="p-3 bg-slate-800/50 rounded-lg group-hover:bg-cyan-500/10 transition-colors">
                    {detail.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">{detail.label}</p>
                    <p className="text-slate-200 font-medium">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square relative rounded-3xl overflow-hidden border-2 border-slate-800/50 group shadow-2xl shadow-cyan-500/10">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-purple-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <img 
                src={heroImage} 
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop";
                }}
                alt="Anas Ali" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
            </div>
            
            {/* Floating Stats Cards */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 p-6 glass-card rounded-2xl border border-slate-700 shadow-2xl hidden md:block"
            >
              <p className="text-4xl font-bold text-cyan-400">250+</p>
              <p className="text-sm text-slate-400 font-medium">DSA Problems Solved</p>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 p-5 glass-card rounded-2xl border border-slate-700 shadow-2xl hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <p className="text-sm font-bold text-slate-200">Open for Work</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;

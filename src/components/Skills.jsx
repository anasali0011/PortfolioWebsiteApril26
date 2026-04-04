import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Database, Wrench, Sparkles } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: <Code className="text-cyan-400" />,
      skills: ['C', 'C++', 'Python', 'JavaScript']
    },
    {
      title: 'Web Technologies',
      icon: <Layout className="text-cyan-400" />,
      skills: ['HTML', 'CSS', 'React.js', 'Node.js', 'Express.js', 'Bootstrap', 'Flask', 'REST APIs']
    },
    {
      title: 'Databases',
      icon: <Database className="text-cyan-400" />,
      skills: ['MySQL', 'MongoDB', 'SQL', 'NoSQL']
    },
    {
      title: 'Tools & Platforms',
      icon: <Wrench className="text-cyan-400" />,
      skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Netlify', 'Render']
    }
  ];

  const softSkills = ['Problem Solving', 'Time Management', 'Learning Agility', 'Team Player', 'Adaptability'];

  return (
    <section id="skills" className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Technical <span className="text-gradient">Arsenal</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A comprehensive list of technologies I've mastered and tools I use to bring ideas to life.
          </p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="p-8 glass-card rounded-2xl group hover:border-cyan-500/30"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-800/50 rounded-xl group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-200">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-3 py-1.5 text-sm bg-slate-800/30 text-slate-400 border border-slate-700/50 rounded-lg group-hover:border-cyan-500/20 group-hover:text-cyan-400/80 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft Skills Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-8 glass-card rounded-3xl border-dashed border-slate-700/50 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="text-yellow-400" />
            <h3 className="text-2xl font-bold text-slate-200 uppercase tracking-widest">Soft Skills</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, idx) => (
              <span 
                key={idx}
                className="px-6 py-2 bg-gradient-to-r from-slate-900 to-slate-800 text-slate-300 font-medium rounded-xl border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

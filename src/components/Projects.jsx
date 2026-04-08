import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers, Code2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Secure Voting Platform',
      category: 'Full-Stack Development',
      description: 'Implemented idempotent voting logic to eliminate duplicate submissions and ensure transactional integrity. Scaled the system to handle peak voting loads with zero data inconsistencies.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Bcrypt'],
      github: 'https://github.com/anasali0011/Voting-Application',
      link: '#',
      image: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'House Price Prediction',
      category: 'AI/ML & Data Science',
      description: 'Designed a machine learning model to predict house prices using real-world datasets. Optimized model performance via GridSearchCV and cross-validation, evaluated with R² and RMSE metrics.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'NumPy'],
      github: 'https://github.com/anasali0011/Real-Estate-House_Price_Prediction',
      link: '#',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop'
    },
    {
      title: 'ZippyCart E-Commerce',
      category: 'Web Development',
      description: 'Created a fully responsive online shopping site featuring mobile navigation, sliding menus, and smooth animations. Integrated dynamic product search and a real-time cart.',
      tech: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Framer Motion'],
      github: 'https://github.com/anasali0011/ZippyCartUsingReact-Vite',
      link: 'https://zippycart01.netlify.app',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: '🌤️ SkyCast Weather Dashboard',
      category: 'React Application',
      description: 'A high-performance, modern weather dashboard providing real-time forecasts, air quality data, and 2-year historical trends. Features auto-location detection and interactive Recharts visualizations.',
      tech: ['React (Vite)', 'Tailwind CSS', 'Recharts', 'Open-Meteo API', 'Lucide React'],
      github: 'https://github.com/anasali0011/SkyCast-Dashboard.git',
      link: 'https://weatherdashboard011.netlify.app/',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A selection of my recent works where I apply my technical skills to solve real-world problems.
          </p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              className="group glass-card rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-500 shadow-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent flex items-end p-6">
                  <span className="px-3 py-1 bg-cyan-600/20 text-cyan-400 text-xs font-bold rounded-full border border-cyan-400/20 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-2.5 py-1 bg-slate-800/50 text-slate-300 text-xs font-medium rounded-lg border border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    <Github size={18} /> Code
                  </a>
                  {project.link !== '#' && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors ml-auto"
                    >
                      <ExternalLink size={18} /> Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a 
            href="https://github.com/anasali0011" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-slate-900 border border-slate-800 text-slate-300 font-bold rounded-xl hover:bg-slate-800 hover:border-cyan-500/30 transition-all duration-300 shadow-lg"
          >
            View All Projects on GitHub <Github size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

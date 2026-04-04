import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BadgeCheck, Briefcase } from 'lucide-react';

const Experience = () => {
  const education = [
    {
      title: 'B.Tech. in Information Technology',
      organization: 'Pranveer Singh Institute of Technology',
      period: 'Dec 2022 - May 2026',
      details: 'CGPA: 7.1/10'
    },
    {
      title: 'Class XII (HSC)',
      organization: 'Mother Teresa Mission Higher Secondary School',
      period: 'May 2022',
      details: 'Percentage: 77.6/100'
    },
    {
      title: 'Class X (SSC)',
      organization: 'Mother Teresa Mission Higher Secondary School',
      period: 'May 2019',
      details: 'Percentage: 78.3/100'
    }
  ];

  const achievements = [
    'Solved 250+ DSA problems across LeetCode, GeeksforGeeks, and HackerRank',
    'Flipkart Runway Season 4 - Participant (PSIT, Kanpur)',
    'Adobe India Hackathon 2025 - National-Level Hackathon Participant'
  ];

  const certifications = [
    { title: 'Technology Job Simulation', issuer: 'Deloitte (via Forage)', date: 'April 2026' },
    { title: 'AI/ML Foundations with Agentic AI & MLOps', issuer: 'Udemy', date: 'Jan 2026' },
    { title: 'Front End Development', issuer: 'Udemy', date: 'Jan 2025' },
    { title: 'Oracle Cloud Infrastructure Generative AI Professional', issuer: 'Oracle', date: 'Sep 2025' },
    { title: 'Salesforce AgentBlazer Champion', issuer: 'Salesforce', date: 'Dec 2024' },
    { title: 'Communication Skills', issuer: 'TCS iON', date: 'Oct 2023' }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Education Section */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400">
                <GraduationCap size={32} />
              </div>
              <h2 className="text-3xl font-bold text-slate-100 tracking-tight">Education</h2>
            </div>

            <div className="space-y-8 relative before:absolute before:left-8 before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-800">
              {education.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative pl-16 group"
                >
                  <div className="absolute left-6 top-1.5 w-4 h-4 bg-slate-950 border-2 border-cyan-500 rounded-full group-hover:scale-125 transition-transform duration-300 z-10" />
                  <div className="p-6 glass-card rounded-2xl border border-slate-800 hover:border-cyan-500/20 shadow-lg group-hover:bg-slate-900/80 transition-all duration-300">
                    <span className="text-sm font-bold text-cyan-400/80 mb-2 block">{item.period}</span>
                    <h3 className="text-xl font-bold text-slate-100 mb-1">{item.title}</h3>
                    <p className="text-slate-400 font-medium mb-3">{item.organization}</p>
                    <p className="text-slate-500 text-sm italic">{item.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements & Certifications */}
          <div className="space-y-16">
            
            {/* Achievements */}
            <div>
              <div className="flex items-center gap-4 mb-12">
                <div className="p-3 bg-yellow-500/10 rounded-xl text-yellow-400">
                  <Award size={32} />
                </div>
                <h2 className="text-3xl font-bold text-slate-100 tracking-tight">Achievements</h2>
              </div>

              <div className="space-y-4">
                {achievements.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-5 glass-card rounded-xl border border-slate-800 flex items-start gap-4 hover:border-yellow-500/20 transition-all duration-300"
                  >
                    <div className="mt-1 w-2 h-2 rounded-full bg-yellow-500 shrink-0 shadow-lg shadow-yellow-500/50" />
                    <p className="text-slate-300 font-medium">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-4 mb-12">
                <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400">
                  <BadgeCheck size={32} />
                </div>
                <h2 className="text-3xl font-bold text-slate-100 tracking-tight">Certifications</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-5 glass-card rounded-xl border border-slate-800 hover:border-emerald-500/20 transition-all duration-300"
                  >
                    <h4 className="text-slate-200 font-bold mb-1 leading-tight">{cert.title}</h4>
                    <p className="text-slate-500 text-xs mb-3">{cert.issuer}</p>
                    <span className="text-[10px] font-bold text-emerald-400/80 px-2 py-0.5 bg-emerald-400/10 rounded-full border border-emerald-400/20 uppercase tracking-widest">
                      {cert.date}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

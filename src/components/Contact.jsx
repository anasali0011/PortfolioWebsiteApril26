import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    { 
      icon: <Mail size={24} />, 
      label: 'Email', 
      value: '2k22.it.2212063@gmail.com', 
      href: 'mailto:2k22.it.2212063@gmail.com',
      color: 'text-blue-400'
    },
    { 
      icon: <Phone size={24} />, 
      label: 'Phone', 
      value: '+91 79859 99836', 
      href: 'tel:+917985999836',
      color: 'text-green-400'
    },
    { 
      icon: <MapPin size={24} />, 
      label: 'Location', 
      value: 'Kanpur, Uttar Pradesh', 
      href: '#',
      color: 'text-red-400'
    },
  ];

  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: <Github size={24} />, 
      href: 'https://github.com/anasali0011',
      username: '@anasali0011'
    },
    { 
      name: 'LinkedIn', 
      icon: <Linkedin size={24} />, 
      href: 'https://www.linkedin.com/in/anasali011/',
      username: 'anasali011'
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Let's <span className="text-gradient">Connect</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            I'm currently looking for new opportunities. My inbox is always open, and I'll do my best to get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          {contactInfo.map((info, idx) => (
            <motion.a
              key={idx}
              href={info.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-3xl border border-slate-800 flex flex-col items-center text-center group hover:border-cyan-500/30 transition-all duration-500"
            >
              <div className={`p-4 bg-slate-900 rounded-2xl mb-6 ${info.color} group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                {info.icon}
              </div>
              <h3 className="text-slate-500 uppercase tracking-widest text-xs font-bold mb-2">{info.label}</h3>
              <p className="text-slate-200 font-semibold group-hover:text-cyan-400 transition-colors">{info.value}</p>
            </motion.a>
          ))}
        </div>

        {/* Social Links Large Section */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {socialLinks.map((social, idx) => (
            <motion.a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-3xl border border-slate-800 flex items-center justify-between group hover:border-cyan-500/30 transition-all duration-500"
            >
              <div className="flex items-center gap-6">
                <div className="p-4 bg-slate-900 rounded-2xl text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                  {social.icon}
                </div>
                <div>
                  <h3 className="text-slate-200 font-bold text-xl">{social.name}</h3>
                  <p className="text-slate-500 text-sm">{social.username}</p>
                </div>
              </div>
              <ExternalLink size={20} className="text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
            </motion.a>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-slate-500 text-sm mb-4 italic">Available for remote and on-site opportunities in Kanpur & across India.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

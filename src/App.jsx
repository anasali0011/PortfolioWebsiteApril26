import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

const Layout = ({ children }) => (
  <div className="bg-slate-950 text-slate-100 min-h-screen selection:bg-cyan-500/30 flex flex-col">
    <Navbar />
    <main className="flex-grow pt-20">
      {children}
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Hero /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/skills" element={<Layout><Skills /></Layout>} />
        <Route path="/projects" element={<Layout><Projects /></Layout>} />
        <Route path="/experience" element={<Layout><Experience /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;

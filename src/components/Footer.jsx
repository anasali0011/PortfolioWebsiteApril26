import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} <span className="text-slate-300 font-bold">Anas Ali</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;


import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'خانه', href: '#' },
    { name: 'خدمات', href: '#services' },
    { name: 'نمونه‌کارها', href: '#portfolio' },
    { name: 'وبلاگ', href: '#blog' },
    { name: 'ارتباط با ما', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-700 ease-in-out px-6 pt-6 ${scrolled ? 'top-2' : 'top-0'}`}>
      <div className={`max-w-7xl mx-auto transition-all duration-700 ${scrolled ? 'glass-card rounded-[2.5rem] py-4 px-10 shadow-2xl' : 'py-6 px-4 bg-transparent'}`}>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-reverse space-x-3 group cursor-pointer">
            <div className="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-black shadow-lg shadow-blue-300/30 group-hover:rotate-12 transition-transform duration-500">D</div>
            <span className={`text-xl font-black tracking-tighter transition-colors duration-500 ${scrolled ? 'text-slate-900' : 'text-slate-900'}`}>DIGI-MODERN</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-reverse space-x-12">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-slate-600 hover:text-blue-600 transition-all font-black text-sm tracking-wide uppercase nav-link">
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <button className="neumorph-btn bg-slate-900 text-white px-8 py-3.5 rounded-2xl font-black text-sm hover:bg-blue-600 transition-all active:scale-95 hover:scale-105 shadow-lg">
              شروع همکاری
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden neumorph-btn p-3 rounded-2xl text-slate-900 transition-transform active:scale-90" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-6 right-6 mt-4 glass-card rounded-[3rem] p-10 animate-in fade-in slide-in-from-top-4 duration-500 z-50 shadow-2xl">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-slate-800 text-2xl font-black border-b border-slate-100 pb-4 transition-colors hover:text-blue-600" onClick={() => setIsOpen(false)}>
                {link.name}
              </a>
            ))}
            <button className="bg-blue-600 text-white w-full py-5 rounded-[2rem] font-black text-xl shadow-xl active:scale-95 transition-transform">
              شروع همکاری
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

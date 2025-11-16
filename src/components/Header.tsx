import { useState, useEffect } from 'react';
import logoImg from '../assets/logo-dlla-porta.png';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg shadow-[#D4AF37]/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logoImg} alt="D'Lla Porta Construtora" className="h-20 w-auto" />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-white hover:text-[#D4AF37] transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-white hover:text-[#D4AF37] transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('projetos')}
              className="text-white hover:text-[#D4AF37] transition-colors"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-white hover:text-[#D4AF37] transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-white hover:text-[#D4AF37] transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection('contato')}
            className="hidden md:block px-6 py-2.5 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 rounded-lg"
          >
            Solicitar Orçamento
          </button>

          {/* Mobile menu button */}
          <button className="md:hidden text-[#D4AF37]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

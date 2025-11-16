import { ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  heroImage: string;
}

export function HeroSection({ heroImage }: HeroSectionProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Arquitetura Moderna"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Decorative Line */}
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-8" />
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 tracking-tight">
          <span className="block">Excelência que</span>
          <span className="block bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
            constrói histórias.
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Projetos residenciais, corporativos e industriais com qualidade superior.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('projetos')}
            className="group px-8 py-4 bg-[#D4AF37] text-black hover:bg-[#FFD700] transition-all duration-300 shadow-lg shadow-[#D4AF37]/30 flex items-center gap-2 rounded-lg"
          >
            Ver Projetos
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection('contato')}
            className="px-8 py-4 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 rounded-lg"
          >
            Fale Conosco
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#D4AF37] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#D4AF37] rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}

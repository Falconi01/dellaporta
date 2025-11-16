import { ArrowRight } from 'lucide-react';

export function CTASection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-[#D4AF37] via-[#FFD700] to-[#D4AF37] relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 border-4 border-black/20 rotate-45" />
        <div className="absolute bottom-0 right-0 w-64 h-64 border-4 border-black/20 rotate-45" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Decorative line */}
        <div className="w-24 h-1 bg-black/30 mx-auto mb-8" />

        <h2 className="text-4xl md:text-5xl text-black mb-6">
          Pronto para construir o futuro com a D'Lla Porta?
        </h2>

        <p className="text-xl text-black/80 mb-10 max-w-2xl mx-auto">
          Entre em contato conosco e descubra como podemos transformar 
          seus projetos em obras-primas da construção civil.
        </p>

        <button
          onClick={() => scrollToSection('contato')}
          className="group inline-flex items-center gap-3 px-10 py-4 bg-black text-[#D4AF37] border-2 border-black hover:bg-transparent hover:text-black transition-all duration-300 shadow-2xl rounded-lg"
        >
          Solicitar Orçamento
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}

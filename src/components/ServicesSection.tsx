import { Building2, Wrench, Ruler, ClipboardCheck } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: Building2,
      title: 'Construção Civil',
      description: 'Obras residenciais, comerciais e industriais com máxima qualidade e eficiência.'
    },
    {
      icon: Wrench,
      title: 'Reformas',
      description: 'Transformação completa de ambientes com acabamento premium e design moderno.'
    },
    {
      icon: Ruler,
      title: 'Arquitetura & Planejamento',
      description: 'Projetos personalizados que aliam funcionalidade, estética e inovação.'
    },
    {
      icon: ClipboardCheck,
      title: 'Gerenciamento de Obras',
      description: 'Acompanhamento técnico completo, garantindo prazo, orçamento e qualidade.'
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            Nossos <span className="text-[#D4AF37]">Serviços</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Soluções completas para transformar seus projetos em realidade.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-[#0a0a0a] to-black border-2 border-[#D4AF37]/30 p-8 hover:border-[#D4AF37] transition-all duration-300"
              >
                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#D4AF37]" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#D4AF37]" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#D4AF37]" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#D4AF37]" />

                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-[#D4AF37]/30">
                  <Icon className="w-8 h-8 text-black" />
                </div>

                {/* Content */}
                <h3 className="text-white mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>

                {/* Hover effect line */}
                <div className="w-0 h-0.5 bg-[#D4AF37] mt-6 transition-all duration-300 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

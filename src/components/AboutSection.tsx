import { Award, Clock, Shield, Sparkles } from 'lucide-react';

export function AboutSection() {
  const features = [
    {
      icon: Award,
      title: 'Qualidade',
      description: 'Excelência em cada detalhe do projeto'
    },
    {
      icon: Clock,
      title: 'Pontualidade',
      description: 'Cumprimento rigoroso de prazos'
    },
    {
      icon: Shield,
      title: 'Segurança',
      description: 'Normas técnicas e proteção total'
    },
    {
      icon: Sparkles,
      title: 'Acabamento Premium',
      description: 'Refinamento e sofisticação'
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-black relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            Sobre a <span className="text-[#D4AF37]">D'Lla Porta</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Com anos de experiência no mercado, construímos mais do que edifícios: 
            construímos legados. Nossa tradição é sinônimo de confiança, compromisso 
            e excelência construtiva.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-b from-[#1a1a1a] to-black border border-[#D4AF37]/20 p-8 hover:border-[#D4AF37] transition-all duration-300"
              >
                {/* Gold corner accent */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/20 transition-colors">
                    <Icon className="w-7 h-7 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

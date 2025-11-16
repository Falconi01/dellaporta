import { Star } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Carlos Eduardo Silva',
      role: 'Empresário',
      text: 'A D\'Lla Porta transformou meu projeto em realidade. Profissionalismo incomparável e acabamento perfeito. Superou todas as expectativas.',
      rating: 5,
      initials: 'CS'
    },
    {
      id: 2,
      name: 'Marina Alves',
      role: 'Arquiteta',
      text: 'Excelente parceria! A equipe é extremamente qualificada e atenciosa. Entregaram a obra no prazo com uma qualidade superior.',
      rating: 5,
      initials: 'MA'
    },
    {
      id: 3,
      name: 'Roberto Mendes',
      role: 'Investidor Imobiliário',
      text: 'Já realizei diversos projetos com a D\'Lla Porta. A qualidade é consistente e o gerenciamento de obra é impecável. Altamente recomendado.',
      rating: 5,
      initials: 'RM'
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            O que dizem <span className="text-[#D4AF37]">nossos clientes</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A confiança de quem já construiu conosco.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-black border border-[#D4AF37]/20 p-8 hover:border-[#D4AF37] transition-all duration-300 relative group"
            >
              {/* Quote mark decoration */}
              <div className="absolute top-6 left-6 text-6xl text-[#D4AF37]/10 leading-none">"</div>

              {/* Stars */}
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-gray-300 mb-8 relative z-10 italic">
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 relative z-10">
                {/* Avatar with initials */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#FFD700] flex items-center justify-center">
                  <span className="text-black">{testimonial.initials}</span>
                </div>
                <div>
                  <h4 className="text-white">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

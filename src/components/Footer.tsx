import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contato" className="bg-black border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <p className="text-gray-400 mb-6 max-w-md">
              Excelência em construção civil. Transformamos sonhos em realidade 
              com qualidade, segurança e acabamento premium.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-[#D4AF37]/10 hover:bg-[#D4AF37] border border-[#D4AF37]/30 hover:border-[#D4AF37] flex items-center justify-center transition-all group"
              >
                <Instagram className="w-5 h-5 text-[#D4AF37] group-hover:text-black transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#D4AF37]/10 hover:bg-[#D4AF37] border border-[#D4AF37]/30 hover:border-[#D4AF37] flex items-center justify-center transition-all group"
              >
                <Facebook className="w-5 h-5 text-[#D4AF37] group-hover:text-black transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#D4AF37]/10 hover:bg-[#D4AF37] border border-[#D4AF37]/30 hover:border-[#D4AF37] flex items-center justify-center transition-all group"
              >
                <Linkedin className="w-5 h-5 text-[#D4AF37] group-hover:text-black transition-colors" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-6 relative inline-block">
              Contato
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#D4AF37] -mb-2" />
            </h3>
            <div className="space-y-4">
              <a
                href="tel:+5511999999999"
                className="flex items-center gap-3 text-gray-400 hover:text-[#D4AF37] transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>(11) 99999-9999</span>
              </a>
              <a
                href="mailto:contato@dllaporta.com.br"
                className="flex items-center gap-3 text-gray-400 hover:text-[#D4AF37] transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>contato@dllaporta.com.br</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>São Paulo, SP<br />Brasil</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-6 relative inline-block">
              Links Rápidos
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#D4AF37] -mb-2" />
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#projetos" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  Serviços
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Gold divider line */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} D'Lla Porta Construtora. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

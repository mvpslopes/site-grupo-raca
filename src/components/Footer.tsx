import { Facebook, Instagram, Mail, Phone, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">
              GRUPO RAÇA
            </h3>
            <p className="text-white text-sm leading-relaxed">
              Especialistas em leilões de cavalos de elite, unindo tradição e excelência no mercado equestre brasileiro.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Redes Sociais</h4>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61560229880784"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white transition-all duration-300 p-3 rounded-lg hover:bg-white/10 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/p/DQ6-QPRjulQ/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white transition-all duration-300 p-3 rounded-lg hover:bg-white/10 hover:scale-110"
                aria-label="Instagram"
                title="Instagram Principal"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.instagram.com/gruporacavendas/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white transition-all duration-300 p-3 rounded-lg hover:bg-white/10 hover:scale-110"
                title="Instagram de Vendas"
                aria-label="Instagram de Vendas"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.youtube.com/@gruporacaleiloes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white transition-all duration-300 p-3 rounded-lg hover:bg-white/10 hover:scale-110"
                aria-label="YouTube"
                title="YouTube"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contato Rápido</h4>
            <div className="space-y-4 text-sm">
              <a 
                href="tel:+553112345678"
                className="flex items-center space-x-3 text-white hover:text-white transition-colors group"
              >
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                  <Phone size={18} />
                </div>
                <span className="font-medium">(31) 1234-5678</span>
              </a>
              <a 
                href="mailto:contato@gruporaca.com.br"
                className="flex items-center space-x-3 text-white hover:text-white transition-colors group"
              >
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                  <Mail size={18} />
                </div>
                <span className="font-medium">contato@gruporaca.com.br</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center" style={{ borderTop: '1px solid rgba(192, 192, 192, 0.3)' }}>
          <p className="text-sm text-white">
            &copy; {new Date().getFullYear()} Grupo Raça. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

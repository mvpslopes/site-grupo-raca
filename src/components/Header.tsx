import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'home', label: 'Início' },
    { id: 'history', label: 'História' },
    { id: 'shopping', label: 'Shopping de Coberturas' },
    { id: 'sale', label: 'Venda Direta' },
    { id: 'advisors', label: 'Assessorias Técnicas' },
    { id: 'weather', label: 'Previsão do Tempo' },
    { id: 'contact', label: 'Contato' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-md shadow-xl' 
          : 'bg-black/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div
            className="flex items-center cursor-pointer group transition-transform duration-300 hover:scale-105"
            onClick={() => onNavigate('home')}
          >
            <img 
              src="/logo.png" 
              alt="GRUPO RAÇA" 
              className="h-14 w-auto transition-all duration-300 group-hover:brightness-110"
            />
          </div>

          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <nav className="hidden md:flex space-x-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  currentPage === item.id
                    ? 'text-white bg-white/10'
                    : 'text-white hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                {currentPage === item.id && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-white rounded-full" />
                )}
              </button>
            ))}
          </nav>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-1 animate-in slide-in-from-top duration-300">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 text-sm font-medium transition-all duration-200 rounded-lg ${
                  currentPage === item.id
                    ? 'bg-white/10 text-white'
                    : 'text-white hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

import { useEffect, useState } from 'react';
import { supabase, HorseSale } from '../lib/supabase';
import { DollarSign, Phone, MessageCircle, Search, X, Award, FileText } from 'lucide-react';

export default function SalePage() {
  const [horses, setHorses] = useState<HorseSale[]>([]);
  const [filteredHorses, setFilteredHorses] = useState<HorseSale[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchHorses();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filtered = horses.filter(
        (horse) =>
          horse.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          horse.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredHorses(filtered);
    } else {
      setFilteredHorses(horses);
    }
  }, [searchTerm, horses]);

  const fetchHorses = async () => {
    try {
      const { data, error } = await supabase
        .from('horses_sale')
        .select('*')
        .eq('available', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setHorses(data || []);
      setFilteredHorses(data || []);
    } catch (error) {
      console.error('Error fetching sale horses:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const handleWhatsAppClick = (horseName: string) => {
    const message = encodeURIComponent(`Olá! Tenho interesse em obter mais informações sobre ${horseName} para compra.`);
    window.open(`https://wa.me/553199952074?text=${message}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+553199952074';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-white uppercase tracking-wider mb-3">
            Compras
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Venda Direta
          </h1>
          <div className="w-24 h-0.5 mx-auto mb-6" style={{ background: 'linear-gradient(to right, transparent, #C0C0C0, transparent)' }}></div>
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Adquira cavalos de elite diretamente do Grupo Raça. Nossa seleção inclui animais 
            de linhagem superior, com documentação completa, saúde comprovada e garantia de procedência.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white" size={20} />
            <input
              type="text"
              placeholder="Buscar por nome ou descrição..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-12 py-4 rounded-lg text-white"
              style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 50%, #000000 100%)', border: '2px solid #C0C0C0' }}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-lg p-6" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 50%, #000000 100%)', border: '1px solid #C0C0C0' }}>
          <div className="flex items-center gap-3 mb-3">
            <Award size={24} className="text-white" />
            <h3 className="text-xl font-bold text-white">Linhagem Comprovada</h3>
          </div>
          <p className="text-white text-sm leading-relaxed">
            Todos os animais possuem pedigree documentado e histórico genético completo.
          </p>
        </div>
        <div className="rounded-lg p-6" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 50%, #000000 100%)', border: '1px solid #C0C0C0' }}>
          <div className="flex items-center gap-3 mb-3">
            <FileText size={24} className="text-white" />
            <h3 className="text-xl font-bold text-white">Documentação Completa</h3>
          </div>
          <p className="text-white text-sm leading-relaxed">
            Certificados de saúde, vacinação e toda documentação necessária incluída.
          </p>
        </div>
        <div className="rounded-lg p-6" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 50%, #000000 100%)', border: '1px solid #C0C0C0' }}>
          <div className="flex items-center gap-3 mb-3">
            <Phone size={24} className="text-white" />
            <h3 className="text-xl font-bold text-white">Suporte Total</h3>
          </div>
          <p className="text-white text-sm leading-relaxed">
            Nossa equipe oferece suporte completo desde a escolha até a entrega do animal.
          </p>
        </div>
      </div>

      {/* Example Horses Section */}
      <div className="mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 text-white">Animais em Destaque</h2>
          <div className="w-24 h-0.5 mx-auto mb-4" style={{ background: 'linear-gradient(to right, transparent, #C0C0C0, transparent)' }}></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Cavalo de Elite',
              image: '/close-up-no-cavalo-ao-ar-livre.jpg',
              description: 'Animal de linhagem superior, ideal para compra direta com garantia de qualidade e documentação completa.',
              price: 45000
            },
            {
              name: 'Campeão de Raça',
              image: '/lindo-cavalo-marrom-ao-ar-livre.jpg',
              description: 'Excelente opção para seu plantel com pedigree documentado e histórico comprovado de excelência.',
              price: 55000
            },
            {
              name: 'Animal Premium',
              image: '/lindo-cavalo-castanho-close-up-focinho-aparencia-bonita-juba-plano-de-fundo-campo-de-atletismo-curral-arvores-cavalos-sao-animais-maravilhosos.jpg',
              description: 'Animal de destaque com histórico comprovado de excelência em competições e linhagem superior.',
              price: 65000
            }
          ].map((horse, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ border: '2px solid #C0C0C0', background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 50%, #000000 100%)' }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={horse.image}
                  alt={horse.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/90 text-black px-4 py-2 rounded-lg font-bold">
                  {formatPrice(horse.price)}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-white transition-colors">
                  {horse.name}
                </h3>
                <p className="text-white mb-6 line-clamp-3 leading-relaxed min-h-[60px]">
                  {horse.description}
                </p>
                <div className="mb-6 p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid #C0C0C0' }}>
                  <div className="flex items-center space-x-2 text-white font-semibold text-xl mb-1">
                    <DollarSign size={24} />
                    <span>{formatPrice(horse.price)}</span>
                  </div>
                  <p className="text-white text-sm opacity-80">Preço de venda</p>
                </div>
                <div className="space-y-3">
                  <button
                    onClick={() => handleWhatsAppClick(horse.name)}
                    className="w-full bg-white text-black py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={20} />
                    <span>Falar no WhatsApp</span>
                  </button>
                  <button
                    onClick={handlePhoneClick}
                    className="w-full py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-white"
                    style={{ border: '1px solid #C0C0C0' }}
                  >
                    <Phone size={20} />
                    <span>Ligar Agora</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Results Count */}
      {!loading && filteredHorses.length > 0 && (
        <div className="mb-6">
          <p className="text-white">
            {filteredHorses.length === 1 
              ? '1 animal encontrado' 
              : `${filteredHorses.length} animais encontrados`}
          </p>
        </div>
      )}

      {/* Horses Grid */}
      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-t-white mx-auto" style={{ borderColor: '#C0C0C0' }}></div>
        </div>
      ) : filteredHorses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHorses.map((horse) => (
            <div
              key={horse.id}
              className="group rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ border: '2px solid #C0C0C0', background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 50%, #000000 100%)' }}
            >
              {horse.image_url ? (
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={horse.image_url}
                    alt={horse.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  {horse.price && (
                    <div className="absolute top-4 right-4 bg-white/90 text-black px-4 py-2 rounded-lg font-bold">
                      {formatPrice(horse.price)}
                    </div>
                  )}
                </div>
              ) : (
                <div className="h-64 flex items-center justify-center relative" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 50%, #000000 100%)' }}>
                  <span className="text-white text-lg">Sem imagem</span>
                  {horse.price && (
                    <div className="absolute top-4 right-4 bg-white/90 text-black px-4 py-2 rounded-lg font-bold">
                      {formatPrice(horse.price)}
                    </div>
                  )}
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-white transition-colors">
                  {horse.name}
                </h3>
                <p className="text-white mb-6 line-clamp-3 leading-relaxed min-h-[60px]">
                  {horse.description || 'Animal de excelente qualidade e linhagem comprovada.'}
                </p>
                {horse.price && (
                  <div className="mb-6 p-4 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid #C0C0C0' }}>
                    <div className="flex items-center space-x-2 text-white font-semibold text-xl mb-1">
                      <DollarSign size={24} />
                      <span>{formatPrice(horse.price)}</span>
                    </div>
                    <p className="text-white text-sm opacity-80">Preço de venda</p>
                  </div>
                )}
                <div className="space-y-3">
                  <button
                    onClick={() => handleWhatsAppClick(horse.name)}
                    className="w-full bg-white text-black py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={20} />
                    <span>Falar no WhatsApp</span>
                  </button>
                  <button
                    onClick={handlePhoneClick}
                    className="w-full py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-white"
                    style={{ border: '1px solid #C0C0C0' }}
                  >
                    <Phone size={20} />
                    <span>Ligar Agora</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-lg p-12 text-center" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 50%, #000000 100%)', border: '1px solid #C0C0C0' }}>
          <p className="text-white text-lg mb-4">
            {searchTerm 
              ? 'Nenhum animal encontrado com os critérios de busca.' 
              : 'Nenhum animal disponível no momento. Em breve novos animais serão adicionados.'}
          </p>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-white underline hover:text-white transition-colors"
            >
              Limpar busca
            </button>
          )}
        </div>
      )}
    </div>
  );
}

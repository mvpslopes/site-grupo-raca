import { useEffect, useState } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { supabase, Event } from '../lib/supabase';

export default function HomePage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('date', { ascending: true });

      if (error) throw error;
      setEvents(data || []);
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  const upcomingEvents = events.filter((e) => e.status === 'upcoming');
  const finishedEvents = events.filter((e) => e.status === 'finished');

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="mb-24">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          
          <div className="relative z-30 grid grid-cols-1 lg:grid-cols-5 min-h-[600px] lg:min-h-[700px]">
            <div className="lg:col-span-3 relative overflow-hidden">
              <img 
                src="/Fundo Cavalo preto.jpg" 
                alt="Cavalo de elite" 
                className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            <div className="lg:col-span-2 bg-black/95 backdrop-blur-sm flex items-center justify-center p-8 md:p-12 lg:p-16 relative">
              <div className="relative z-10 w-full max-w-lg">
                <div className="mb-6">
                  <span className="inline-block text-sm font-semibold text-white uppercase tracking-wider mb-6">
                    Excelência Equestre
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-tight">
                  <span className="block">GRUPO</span>
                  <span 
                    className="block bg-clip-text text-transparent"
                    style={{ 
                      backgroundImage: 'linear-gradient(to bottom, #A8A8A8, #808080, #606060)'
                    }}
                  >
                    RAÇA
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-white leading-relaxed mb-8 font-light">
                  Excelência em leilões de cavalos de elite, unindo tradição e
                  inovação no mercado equestre brasileiro
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-white text-sm">
                    <div className="w-2 h-2 rounded-full" style={{ background: 'radial-gradient(circle, #C0C0C0, #A8A8A8)' }}></div>
                    <span>Leilões Premium</span>
                  </div>
                  <div className="flex items-center gap-2 text-white text-sm">
                    <div className="w-2 h-2 rounded-full" style={{ background: 'radial-gradient(circle, #C0C0C0, #A8A8A8)' }}></div>
                    <span>Referência Nacional</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-24">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-white uppercase tracking-wider mb-3">
            Sobre Nós
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Nossa História
          </h2>
          <div className="w-24 h-0.5 mx-auto" style={{ background: 'linear-gradient(to right, transparent, #C0C0C0, transparent)' }}></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-2xl p-8 md:p-10 transition-all duration-300 relative overflow-hidden group" style={{ background: 'linear-gradient(135deg, #4a4a4a 0%, #3a3a3a 50%, #2a2a2a 100%)', border: '1px solid #C0C0C0' }}>
            <div className="absolute top-0 right-0 w-20 h-20 border-t border-r transition-colors" style={{ borderColor: 'rgba(192, 192, 192, 0.6)' }}></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-12" style={{ background: 'linear-gradient(to bottom, #C0C0C0, #A8A8A8)' }}></div>
                <h3 className="text-2xl font-bold text-white">A Origem</h3>
              </div>
              <p className="text-white text-lg leading-relaxed">
                O Grupo Raça nasceu da paixão por cavalos e do compromisso em
                oferecer os melhores serviços de leilão do país. Com anos de
                experiência no mercado equestre, construímos uma reputação sólida
                baseada em transparência, profissionalismo e resultados excepcionais.
              </p>
            </div>
          </div>
          
          <div className="rounded-2xl p-8 md:p-10 transition-all duration-300 relative overflow-hidden group" style={{ background: 'linear-gradient(135deg, #4a4a4a 0%, #3a3a3a 50%, #2a2a2a 100%)', border: '1px solid #C0C0C0' }}>
            <div className="absolute top-0 right-0 w-20 h-20 border-t border-r transition-colors" style={{ borderColor: 'rgba(192, 192, 192, 0.6)' }}></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-12" style={{ background: 'linear-gradient(to bottom, #C0C0C0, #A8A8A8)' }}></div>
                <h3 className="text-2xl font-bold text-white">Nossa Missão</h3>
              </div>
              <p className="text-white text-lg leading-relaxed">
                Nossa equipe de especialistas dedica-se a conectar criadores,
                investidores e apaixonados por cavalos, promovendo negócios que
                valorizam a qualidade genética e o potencial dos animais. Hoje,
                somos referência nacional em leilões de cavalos de elite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Gallery Section */}
      <section className="mb-24">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-white uppercase tracking-wider mb-3">
            Eventos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Nossos Leilões
          </h2>
          <div className="w-24 h-0.5 mx-auto mb-6" style={{ backgroundColor: '#666666' }}></div>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Eventos de excelência que reúnem os melhores animais e criadores do país
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              image: '/Leilão 01.jpg',
              title: 'Leilão Criação RIMA AGROPECUÁRIA',
              description: 'Evento de destaque com os melhores animais da raça',
              date: '10 a 15/11'
            },
            {
              image: '/Leilão 02.jpg',
              title: 'Leilão Haras Amil',
              description: 'Família, Amizade e Campeões',
              date: '10 a 15/11'
            },
            {
              image: '/Leilão 03.jpg',
              title: 'Book Campolina Top',
              description: 'Os melhores cavalos da raça disponíveis para coberturas',
              date: 'Lançamento do Ano'
            }
          ].map((event, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ border: '2px solid #C0C0C0', background: 'linear-gradient(135deg, #4a4a4a 0%, #3a3a3a 50%, #2a2a2a 100%)' }}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="mb-2">
                    <div className="w-8 h-0.5 mb-3" style={{ backgroundColor: '#888888' }}></div>
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                      {event.title}
                    </h3>
                    <p className="text-white text-sm opacity-90 mb-3">
                      {event.description}
                    </p>
                    <div className="flex items-center gap-2 text-white text-sm">
                      <Calendar size={16} />
                      <span>{event.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-white uppercase tracking-wider mb-3">
            Agenda
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Calendário de Eventos
          </h2>
          <div className="w-24 h-0.5 mx-auto" style={{ background: 'linear-gradient(to right, transparent, #C0C0C0, transparent)' }}></div>
        </div>

        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, #C0C0C0, transparent)' }}></div>
            <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
              <span className="w-2 h-2 rounded-full" style={{ background: 'radial-gradient(circle, #C0C0C0, #A8A8A8)' }}></span>
              Próximos Eventos
            </h3>
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, #C0C0C0, transparent)' }}></div>
          </div>
          {loading ? (
            <div className="text-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-t-white mx-auto" style={{ borderColor: '#C0C0C0' }}></div>
            </div>
          ) : upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <div
                  key={event.id}
                  className="group rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                  style={{ border: '1px solid #C0C0C0', background: 'linear-gradient(135deg, #4a4a4a 0%, #3a3a3a 50%, #2a2a2a 100%)', animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 transition-colors" style={{ background: 'linear-gradient(to right, #C0C0C0, #A8A8A8, #C0C0C0)' }}></div>
                  
                  <div className="relative z-10">
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-0.5" style={{ background: 'linear-gradient(to right, #C0C0C0, #A8A8A8)' }}></div>
                        <span className="text-xs font-semibold text-white uppercase tracking-wider">Evento</span>
                      </div>
                      <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-white transition-colors leading-tight">
                        {event.title}
                      </h4>
                    </div>
                    
                    <p className="text-white mb-8 leading-relaxed min-h-[60px]">
                      {event.description}
                    </p>
                    
                    <div className="space-y-4 pt-6" style={{ borderTop: '1px solid rgba(192, 192, 192, 0.3)' }}>
                      <div className="flex items-start gap-3 text-white">
                        <Calendar size={20} className="text-white mt-0.5 flex-shrink-0" />
                        <span className="font-medium text-sm">{formatDate(event.date)}</span>
                      </div>
                      {event.location && (
                        <div className="flex items-start gap-3 text-white">
                          <MapPin size={20} className="text-white mt-0.5 flex-shrink-0" />
                          <span className="font-medium text-sm">{event.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-xl p-12 text-center shadow-sm" style={{ background: 'linear-gradient(to bottom, #3a3a3a, #2a2a2a, #1a1a1a)', border: '1px solid #666666' }}>
              <p className="text-white text-lg">Nenhum evento próximo agendado</p>
            </div>
          )}
        </div>

        <div>
          <div className="flex items-center gap-4 mb-10 mt-16">
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, #C0C0C0, transparent)' }}></div>
            <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
              <span className="w-2 h-2 rounded-full" style={{ background: 'radial-gradient(circle, #C0C0C0, #A8A8A8)' }}></span>
              Eventos Realizados
            </h3>
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, #C0C0C0, transparent)' }}></div>
          </div>
          {finishedEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {finishedEvents.map((event) => (
                <div
                  key={event.id}
                  className="rounded-xl p-6 opacity-90 hover:opacity-100 transition-opacity duration-300"
                  style={{ border: '1px solid #C0C0C0', background: 'linear-gradient(135deg, #4a4a4a 0%, #3a3a3a 50%, #2a2a2a 100%)' }}
                >
                  <h4 className="text-xl font-bold mb-3 text-white">{event.title}</h4>
                  <p className="text-white mb-4 leading-relaxed">{event.description}</p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2 text-white">
                      <Calendar size={18} />
                      <span className="font-medium">{formatDate(event.date)}</span>
                    </div>
                    {event.location && (
                      <div className="flex items-center space-x-2 text-white">
                        <MapPin size={18} />
                        <span className="font-medium">{event.location}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-xl p-12 text-center shadow-sm" style={{ background: 'linear-gradient(to bottom, #3a3a3a, #2a2a2a, #1a1a1a)', border: '1px solid #666666' }}>
              <p className="text-white text-lg">Nenhum evento realizado registrado</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

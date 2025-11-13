import { useEffect, useState } from 'react';
import { supabase, Advisor } from '../lib/supabase';
import { Mail, Phone, MessageCircle } from 'lucide-react';

export default function AdvisorsPage() {
  const [advisors, setAdvisors] = useState<Advisor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAdvisors();
  }, []);

  const fetchAdvisors = async () => {
    try {
      const { data, error } = await supabase
        .from('advisors')
        .select('*')
        .order('name', { ascending: true });

      if (error) throw error;
      setAdvisors(data || []);
    } catch (error) {
      console.error('Error fetching advisors:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppClick = (whatsapp: string) => {
    const cleanNumber = whatsapp.replace(/\D/g, '');
    window.open(`https://wa.me/55${cleanNumber}`, '_blank');
  };

  const handleEmailClick = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  const handlePhoneClick = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-white">Assessorias Técnicas</h1>
        <p className="text-lg text-white">
          Profissionais especializados à sua disposição
        </p>
      </div>

      <div className="mb-12 rounded-lg p-8" style={{ background: 'linear-gradient(135deg, #4a4a4a 0%, #3a3a3a 50%, #2a2a2a 100%)', border: '2px solid #C0C0C0' }}>
        <h2 className="text-2xl font-bold mb-6 text-white">Assessores Recomendados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg p-6" style={{ background: 'linear-gradient(135deg, #4a4a4a 0%, #3a3a3a 50%, #2a2a2a 100%)', border: '1px solid #C0C0C0' }}>
            <h3 className="text-xl font-bold mb-2 text-white">Erick</h3>
            <p className="text-white mb-4">Assessoria Técnica Especializada</p>
            <div className="space-y-2">
              <button
                onClick={() => handlePhoneClick('3199952074')}
                className="flex items-center space-x-2 text-white hover:text-white transition-colors"
              >
                <Phone size={18} className="text-white" />
                <span>(31) 9995-2074</span>
              </button>
              <button
                onClick={() => handleWhatsAppClick('3199952074')}
                className="flex items-center space-x-2 text-white hover:text-white transition-colors"
              >
                <MessageCircle size={18} className="text-white" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>

          <div className="rounded-lg p-6" style={{ background: 'linear-gradient(135deg, #4a4a4a 0%, #3a3a3a 50%, #2a2a2a 100%)', border: '1px solid #C0C0C0' }}>
            <h3 className="text-xl font-bold mb-2 text-white">Lagartixa</h3>
            <p className="text-white mb-4">Assessoria Técnica Especializada</p>
            <div className="space-y-2">
              <button
                onClick={() => handlePhoneClick('3171537765')}
                className="flex items-center space-x-2 text-white hover:text-white transition-colors"
              >
                <Phone size={18} className="text-white" />
                <span>(31) 7153-7765</span>
              </button>
              <button
                onClick={() => handleWhatsAppClick('3171537765')}
                className="flex items-center space-x-2 text-white hover:text-white transition-colors"
              >
                <MessageCircle size={18} className="text-white" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>

          <div className="rounded-lg p-6" style={{ background: 'linear-gradient(135deg, #4a4a4a 0%, #3a3a3a 50%, #2a2a2a 100%)', border: '1px solid #C0C0C0' }}>
            <h3 className="text-xl font-bold mb-2 text-white">Gregório</h3>
            <p className="text-white mb-4">Assessoria Técnica Especializada</p>
            <div className="space-y-2">
              <button
                onClick={() => handlePhoneClick('21981661949')}
                className="flex items-center space-x-2 text-white hover:text-white transition-colors"
              >
                <Phone size={18} className="text-white" />
                <span>(21) 98166-1949</span>
              </button>
              <button
                onClick={() => handleWhatsAppClick('21981661949')}
                className="flex items-center space-x-2 text-white hover:text-white transition-colors"
              >
                <MessageCircle size={18} className="text-white" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>

          <div className="rounded-lg p-6" style={{ background: 'linear-gradient(135deg, #4a4a4a 0%, #3a3a3a 50%, #2a2a2a 100%)', border: '1px solid #C0C0C0' }}>
            <h3 className="text-xl font-bold mb-2 text-white">Carlos Eduardo</h3>
            <p className="text-white mb-4">Assessoria Técnica Especializada</p>
            <div className="space-y-2">
              <button
                onClick={() => handlePhoneClick('3298040180')}
                className="flex items-center space-x-2 text-white hover:text-white transition-colors"
              >
                <Phone size={18} className="text-white" />
                <span>(32) 9804-0180</span>
              </button>
              <button
                onClick={() => handleWhatsAppClick('3298040180')}
                className="flex items-center space-x-2 text-white hover:text-white transition-colors"
              >
                <MessageCircle size={18} className="text-white" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-t-white mx-auto" style={{ borderColor: '#C0C0C0' }}></div>
        </div>
      ) : advisors.length > 0 ? (
        <div>
          <h2 className="text-2xl font-bold mb-6 text-white">Outros Assessores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advisors.map((advisor) => (
              <div
                key={advisor.id}
                className="rounded-lg p-6 hover:shadow-lg transition-all"
                style={{ border: '1px solid #C0C0C0', background: 'linear-gradient(135deg, #4a4a4a 0%, #3a3a3a 50%, #2a2a2a 100%)' }}
              >
                <h3 className="text-xl font-bold mb-2 text-white">{advisor.name}</h3>
                {advisor.specialty && (
                  <p className="text-white mb-4">{advisor.specialty}</p>
                )}
                <div className="space-y-2 text-sm">
                  {advisor.phone && (
                    <button
                      onClick={() => handlePhoneClick(advisor.phone)}
                      className="flex items-center space-x-2 text-white hover:text-white transition-colors"
                    >
                      <Phone size={16} className="text-white" />
                      <span>{advisor.phone}</span>
                    </button>
                  )}
                  {advisor.email && (
                    <button
                      onClick={() => handleEmailClick(advisor.email)}
                      className="flex items-center space-x-2 text-white hover:text-white transition-colors"
                    >
                      <Mail size={16} className="text-white" />
                      <span>{advisor.email}</span>
                    </button>
                  )}
                  {advisor.whatsapp && (
                    <button
                      onClick={() => handleWhatsAppClick(advisor.whatsapp)}
                      className="flex items-center space-x-2 text-white hover:text-white transition-colors"
                    >
                      <MessageCircle size={16} className="text-white" />
                      <span>WhatsApp</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

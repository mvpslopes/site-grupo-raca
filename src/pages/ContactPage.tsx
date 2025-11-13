import { useEffect, useState } from 'react';
import { supabase, Contact, Registration, Sponsor } from '../lib/supabase';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState<Registration>({
    name: '',
    email: '',
    phone: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [contactsData, sponsorsData] = await Promise.all([
        supabase.from('contacts').select('*').order('department', { ascending: true }),
        supabase.from('sponsors').select('*').eq('active', true),
      ]);

      if (contactsData.error) throw contactsData.error;
      if (sponsorsData.error) throw sponsorsData.error;

      setContacts(contactsData.data || []);
      setSponsors(sponsorsData.data || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitSuccess(false);

    try {
      const { error } = await supabase.from('registrations').insert([formData]);

      if (error) throw error;

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '' });

      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting registration:', error);
      alert('Erro ao enviar cadastro. Por favor, tente novamente.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-12 text-white">Contato</h1>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Cadastro</h2>
        <div className="rounded-lg p-8 max-w-2xl" style={{ background: 'linear-gradient(135deg, #4a4a4a 0%, #3a3a3a 50%, #2a2a2a 100%)', border: '2px solid #C0C0C0' }}>
          <p className="text-white mb-6">
            Cadastre-se para ficar por dentro do que há de melhor na raça
          </p>

          {submitSuccess && (
            <div className="mb-6 text-white p-4 rounded-lg" style={{ background: 'linear-gradient(135deg, #4a4a4a 0%, #3a3a3a 50%, #2a2a2a 100%)', border: '1px solid #C0C0C0' }}>
              Cadastro realizado com sucesso! Em breve você receberá nossas atualizações.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2 text-white">
                Nome *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 text-white rounded-lg focus:outline-none"
                  style={{ border: '2px solid #C0C0C0', background: 'linear-gradient(135deg, #4a4a4a 0%, #3a3a3a 50%, #2a2a2a 100%)' }}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-white">
                Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 text-white rounded-lg focus:outline-none"
                  style={{ border: '2px solid #C0C0C0', background: 'linear-gradient(135deg, #4a4a4a 0%, #3a3a3a 50%, #2a2a2a 100%)' }}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-white">
                Telefone/WhatsApp
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 text-white rounded-lg focus:outline-none"
                  style={{ border: '2px solid #C0C0C0', background: 'linear-gradient(135deg, #4a4a4a 0%, #3a3a3a 50%, #2a2a2a 100%)' }}
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:opacity-80 transition-colors disabled:opacity-50"
            >
              {submitting ? 'Enviando...' : 'Cadastrar'}
            </button>
          </form>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-t-white mx-auto" style={{ borderColor: '#C0C0C0' }}></div>
        </div>
      ) : (
        <>
          {contacts.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-white">Nossos Contatos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {contacts.map((contact) => (
                  <div
                    key={contact.id}
                    className="rounded-lg p-6"
                    style={{ border: '1px solid #C0C0C0', background: 'linear-gradient(135deg, #4a4a4a 0%, #3a3a3a 50%, #2a2a2a 100%)' }}
                  >
                    <h3 className="text-xl font-bold mb-4 text-white">
                      {contact.department}
                    </h3>
                    <div className="space-y-2 text-sm text-white">
                      {contact.phone && (
                        <div className="flex items-center space-x-2">
                          <Phone size={16} className="text-white" />
                          <a
                            href={`tel:${contact.phone}`}
                            className="hover:text-white transition-colors"
                          >
                            {contact.phone}
                          </a>
                        </div>
                      )}
                      {contact.email && (
                        <div className="flex items-center space-x-2">
                          <Mail size={16} className="text-white" />
                          <a
                            href={`mailto:${contact.email}`}
                            className="hover:text-white transition-colors"
                          >
                            {contact.email}
                          </a>
                        </div>
                      )}
                      {contact.address && (
                        <div className="flex items-start space-x-2">
                          <MapPin size={16} className="mt-1 text-white" />
                          <span>{contact.address}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {sponsors.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-white">Nossos Patrocinadores</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {sponsors.map((sponsor) => (
                  <a
                    key={sponsor.id}
                    href={sponsor.website || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg p-6 flex items-center justify-center hover:shadow-lg transition-all"
                    style={{ border: '1px solid #C0C0C0', background: 'linear-gradient(135deg, #4a4a4a 0%, #3a3a3a 50%, #2a2a2a 100%)' }}
                  >
                    {sponsor.logo_url ? (
                      <img
                        src={sponsor.logo_url}
                        alt={sponsor.name}
                        className="max-h-20 max-w-full object-contain"
                      />
                    ) : (
                      <span className="text-white font-semibold text-center">
                        {sponsor.name}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

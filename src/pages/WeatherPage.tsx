import { Cloud, CloudRain, Sun, CloudSun, Droplets, Wind, Thermometer } from 'lucide-react';

interface WeatherLocation {
  city: string;
  temp: string;
  condition: string;
  humidity: string;
  wind: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  bgGradient: string;
}

const weatherLocations: WeatherLocation[] = [
  {
    city: 'Belo Horizonte',
    temp: '28°C',
    condition: 'Ensolarado',
    humidity: '65%',
    wind: '15 km/h',
    icon: Sun,
    color: 'from-yellow-400 to-orange-500',
    bgGradient: 'linear-gradient(135deg, #fbbf24 0%, #f97316 100%)'
  },
  {
    city: 'São Paulo',
    temp: '25°C',
    condition: 'Parcialmente nublado',
    humidity: '70%',
    wind: '12 km/h',
    icon: CloudSun,
    color: 'from-blue-300 to-blue-500',
    bgGradient: 'linear-gradient(135deg, #93c5fd 0%, #3b82f6 100%)'
  },
  {
    city: 'Rio de Janeiro',
    temp: '30°C',
    condition: 'Ensolarado',
    humidity: '60%',
    wind: '18 km/h',
    icon: Sun,
    color: 'from-yellow-400 to-orange-500',
    bgGradient: 'linear-gradient(135deg, #fbbf24 0%, #f97316 100%)'
  },
  {
    city: 'Vitória',
    temp: '27°C',
    condition: 'Nublado',
    humidity: '75%',
    wind: '10 km/h',
    icon: Cloud,
    color: 'from-gray-400 to-gray-600',
    bgGradient: 'linear-gradient(135deg, #9ca3af 0%, #4b5563 100%)'
  },
  {
    city: 'Curitiba',
    temp: '22°C',
    condition: 'Chuvoso',
    humidity: '80%',
    wind: '8 km/h',
    icon: CloudRain,
    color: 'from-blue-500 to-blue-700',
    bgGradient: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)'
  },
  {
    city: 'Porto Alegre',
    temp: '24°C',
    condition: 'Parcialmente nublado',
    humidity: '68%',
    wind: '14 km/h',
    icon: CloudSun,
    color: 'from-blue-300 to-blue-500',
    bgGradient: 'linear-gradient(135deg, #93c5fd 0%, #3b82f6 100%)'
  }
];

export default function WeatherPage() {
  const getWeatherIcon = (condition: string) => {
    const lowerCondition = condition.toLowerCase();
    if (lowerCondition.includes('ensolarado')) return Sun;
    if (lowerCondition.includes('chuvoso') || lowerCondition.includes('chuva')) return CloudRain;
    if (lowerCondition.includes('nublado')) return Cloud;
    return CloudSun;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-white uppercase tracking-wider mb-3">
            Informações
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Previsão do Tempo
          </h1>
          <div className="w-24 h-0.5 mx-auto mb-6" style={{ background: 'linear-gradient(to right, transparent, #C0C0C0, transparent)' }}></div>
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Acompanhe as condições climáticas nas principais regiões de atuação do Grupo Raça
          </p>
        </div>
      </div>

      {/* Weather Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {weatherLocations.map((location, index) => {
          const IconComponent = location.icon;
          return (
            <div
              key={location.city}
              className="group rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ 
                border: '2px solid #C0C0C0',
                background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 50%, #000000 100%)'
              }}
            >
              {/* Header with gradient */}
              <div 
                className="relative h-32 overflow-hidden"
                style={{ background: location.bgGradient }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white drop-shadow-lg">
                    {location.city}
                  </h3>
                  <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm">
                    <IconComponent size={28} className="text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white drop-shadow-lg">
                      {location.temp}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <p className="text-white font-medium text-lg mb-1">
                    {location.condition}
                  </p>
                </div>

                {/* Details Grid */}
                    <div className="space-y-3 pt-4" style={{ borderTop: '1px solid rgba(192, 192, 192, 0.3)' }}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
                        <Droplets size={18} className="text-white" />
                      </div>
                      <span className="text-white text-sm">Umidade</span>
                    </div>
                    <span className="text-white font-semibold">{location.humidity}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
                        <Wind size={18} className="text-white" />
                      </div>
                      <span className="text-white text-sm">Vento</span>
                    </div>
                    <span className="text-white font-semibold">{location.wind}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
                        <Thermometer size={18} className="text-white" />
                      </div>
                      <span className="text-white text-sm">Sensação</span>
                    </div>
                    <span className="text-white font-semibold">{location.temp}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Info Section */}
      <div className="mt-12 rounded-lg p-8" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 50%, #000000 100%)', border: '2px solid #C0C0C0' }}>
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-white">Sobre as Previsões</h3>
          <p className="text-white leading-relaxed max-w-2xl mx-auto">
            As informações meteorológicas são atualizadas regularmente para as principais regiões 
            onde o Grupo Raça realiza seus eventos e leilões. Consulte sempre as condições climáticas 
            antes de viajar para nossos eventos.
          </p>
        </div>
      </div>
    </div>
  );
}


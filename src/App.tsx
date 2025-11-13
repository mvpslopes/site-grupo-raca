import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import HistoryPage from './pages/HistoryPage';
import ShoppingPage from './pages/ShoppingPage';
import SalePage from './pages/SalePage';
import AdvisorsPage from './pages/AdvisorsPage';
import ContactPage from './pages/ContactPage';
import WeatherPage from './pages/WeatherPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'history':
        return <HistoryPage />;
      case 'shopping':
        return <ShoppingPage />;
      case 'sale':
        return <SalePage />;
      case 'advisors':
        return <AdvisorsPage />;
      case 'contact':
        return <ContactPage />;
      case 'weather':
        return <WeatherPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow pt-20">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;

import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import QuoteForm from './components/QuoteForm';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 64;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  useEffect(() => {
    document.title = 'BNB Landscaping - Professional Landscaping Services in Miami, FL';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation onNavigate={scrollToSection} />
      <Hero onGetQuote={() => scrollToSection('quote')} />
      <Services onGetQuote={() => scrollToSection('quote')} />
      <Gallery />
      <QuoteForm />
      <Contact />
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}

export default App;

import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  onNavigate: (section: string) => void;
}

export default function Navigation({ onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (section: string) => {
    onNavigate(section);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
            <span className="text-2xl font-bold text-green-600">BNB</span>
            <span className="text-2xl font-bold text-gray-800 ml-1">Landscaping</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => handleNavClick('home')}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick('gallery')}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Gallery
            </button>
            <button
              onClick={() => handleNavClick('quote')}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Get a Quote
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Contact
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => handleNavClick('home')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors font-medium rounded-md"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors font-medium rounded-md"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick('gallery')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors font-medium rounded-md"
            >
              Gallery
            </button>
            <button
              onClick={() => handleNavClick('quote')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors font-medium rounded-md"
            >
              Get a Quote
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors font-medium rounded-md"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

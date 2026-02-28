import { Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-green-500">BNB</span>
              <span className="text-2xl font-bold text-white ml-1">Landscaping</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Professional landscaping services in Miami, Florida. Transforming outdoor spaces with quality, reliability, and expertise.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin size={16} />
              <span>Serving Miami, FL</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('quote')}
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  Get a Quote
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="flex items-center gap-2 text-gray-400 mb-6">
              <Phone size={16} />
              <a
                href="tel:+13057788243"
                className="hover:text-green-500 transition-colors"
              >
                (305) 778-8243
              </a>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold text-sm mb-2">Business Hours</h4>
              <p className="text-gray-400 text-sm">Mon-Fri: 7am - 6pm</p>
              <p className="text-gray-400 text-sm">Sat: 8am - 4pm</p>
              <p className="text-gray-400 text-sm">Sun: Closed</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} BNB Landscaping. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Licensed & Insured | Miami, Florida
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

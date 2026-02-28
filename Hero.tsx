import { MapPin, Phone } from 'lucide-react';

interface HeroProps {
  onGetQuote: () => void;
}

export default function Hero({ onGetQuote }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-green-600 to-green-800 text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={20} />
              <span className="text-green-100 font-medium">Serving Miami, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transform Your Outdoor Space
            </h1>
            <p className="text-xl md:text-2xl text-green-50 mb-8">
              Professional landscaping services you can trust. Local experts dedicated to making your property beautiful.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onGetQuote}
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors shadow-lg text-lg"
              >
                Get Free Quote
              </button>
              <a
                href="tel:+13057788243"
                className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 transition-colors flex items-center justify-center gap-2 text-lg"
              >
                <Phone size={20} />
                Call Now
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <div className="w-6 h-6 bg-white rounded"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Licensed & Insured</h3>
                    <p className="text-green-50">Fully certified professionals</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <div className="w-6 h-6 bg-white rounded"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Local Expertise</h3>
                    <p className="text-green-50">Miami landscaping specialists</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <div className="w-6 h-6 bg-white rounded"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Quality Guaranteed</h3>
                    <p className="text-green-50">100% satisfaction promise</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
}

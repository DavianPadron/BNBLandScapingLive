import { Leaf, Scissors, Wrench, Trash2 } from 'lucide-react';

interface ServicesProps {
  onGetQuote: () => void;
}

export default function Services({ onGetQuote }: ServicesProps) {
  const services = [
    {
      icon: <Scissors className="w-12 h-12" />,
      title: 'Lawn Care',
      description: 'Professional mowing, edging, and lawn maintenance to keep your grass healthy and beautiful year-round.',
      features: ['Weekly mowing', 'Edging & trimming', 'Fertilization', 'Weed control']
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      title: 'Landscaping',
      description: 'Custom landscape design and installation to transform your outdoor space into a stunning oasis.',
      features: ['Garden design', 'Plant installation', 'Mulching', 'Irrigation systems']
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: 'Maintenance',
      description: 'Regular upkeep and seasonal maintenance to ensure your landscape stays pristine throughout the year.',
      features: ['Seasonal cleanup', 'Pruning & trimming', 'Lawn aeration', 'Pest control']
    },
    {
      icon: <Trash2 className="w-12 h-12" />,
      title: 'Cleanup Services',
      description: 'Thorough cleanup services for leaves, debris, and storm damage to restore your property\'s appearance.',
      features: ['Leaf removal', 'Debris hauling', 'Storm cleanup', 'Yard waste disposal']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive landscaping solutions tailored to Miami's climate and your unique needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="text-green-600 mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onGetQuote}
            className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg text-lg"
          >
            Request a Free Quote
          </button>
        </div>
      </div>
    </section>
  );
}

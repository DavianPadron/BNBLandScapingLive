export default function Gallery() {
  const images = [
    {
      url: 'https://images.pexels.com/photos/1453499/pexels-photo-1453499.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Beautiful front yard landscaping',
      category: 'Landscaping'
    },
    {
      url: 'https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Manicured lawn with professional care',
      category: 'Lawn Care'
    },
    {
      url: 'https://images.pexels.com/photos/1671174/pexels-photo-1671174.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Garden with colorful flowers and plants',
      category: 'Garden Design'
    },
    {
      url: 'https://images.pexels.com/photos/1055604/pexels-photo-1055604.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Professional landscaping with hedges',
      category: 'Maintenance'
    },
    {
      url: 'https://images.pexels.com/photos/2894196/pexels-photo-2894196.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Modern backyard landscape design',
      category: 'Landscaping'
    },
    {
      url: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Pristine lawn with tree care',
      category: 'Lawn Care'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at some of our recent landscaping projects in Miami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
                    {image.category}
                  </span>
                  <p className="text-white text-sm">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

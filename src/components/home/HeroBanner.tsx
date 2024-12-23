import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const banners = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=2000&q=80',
    title: 'End of Season Sale',
    subtitle: 'Up to 70% Off on Top Brands'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=2000&q=80',
    title: 'New Electronics',
    subtitle: 'Latest Gadgets at Best Prices'
  }
];

export function HeroBanner() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  React.useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div 
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {banners.map((banner) => (
          <div key={banner.id} className="w-full flex-shrink-0">
            <div className="relative h-[400px] md:h-[500px]">
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
                <div className="p-8 sm:p-12">
                  <h2 className="text-4xl sm:text-6xl font-bold text-white mb-4">
                    {banner.title}
                  </h2>
                  <p className="text-xl text-white/90 mb-8">
                    {banner.subtitle}
                  </p>
                  <button className="px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import RainDroplets from "./RainDroplets";

interface CarouselSlide {
  image: string;
  alt: string;
}

interface HeroCarouselProps {
  slides: CarouselSlide[];
  children: React.ReactNode;
}

export default function HeroCarousel({ slides, children }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden py-16 sm:py-20 md:py-24">
      {/* Image Container */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            {/* Enhanced gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/55 md:from-foreground/90 md:via-foreground/60 to-foreground/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-50" />
          </div>
        ))}
      </div>

      {/* Animated Rain Droplets — sits above images, below text */}
      <RainDroplets />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 w-full">
        <div className="animate-fade-in">
          {children}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/20 sm:flex group"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/20 sm:flex group"
        aria-label="Next slide"
      >
        <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-3 sm:bottom-8">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`rounded-full transition-all duration-300 backdrop-blur-sm ${
              index === currentSlide
                ? "bg-gradient-to-r from-primary to-secondary w-8 h-3"
                : "bg-white/30 hover:bg-white/50 w-3 h-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

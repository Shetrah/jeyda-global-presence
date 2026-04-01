import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface VarietyCarouselProps {
  images: string[];
  altText: string;
}

const VarietyCarousel = ({ images, altText }: VarietyCarouselProps) => {
  const [currentVariety, setCurrentVariety] = useState(0);

  // Auto-rotate every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVariety((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentVariety((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentVariety((prev) => (prev + 1) % images.length);
  };

  if (images.length === 0) {
    return null;
  }

  if (images.length === 1) {
    return (
      <div className="rounded-lg overflow-hidden shadow-lg bg-secondary/30 flex items-center justify-center min-h-[300px] md:min-h-[400px]">
        <img
          src={images[0]}
          alt={altText}
          className="w-full h-auto object-contain"
        />
      </div>
    );
  }

  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg bg-secondary/30 flex items-center justify-center min-h-[300px] md:min-h-[400px] group">
      {/* Image */}
      <div className="w-full h-full flex items-center justify-center">
        <img
          src={images[currentVariety]}
          alt={`${altText} - Variety ${currentVariety + 1}`}
          className="w-full h-auto object-contain transition-opacity duration-500"
        />
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-foreground/70 hover:bg-foreground/90 text-background p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10"
        aria-label="Previous variety"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-foreground/70 hover:bg-foreground/90 text-background p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10"
        aria-label="Next variety"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentVariety(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentVariety
                ? "bg-accent w-6"
                : "bg-foreground/40 w-2 hover:bg-foreground/60"
            }`}
            aria-label={`Go to variety ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default VarietyCarousel;

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface VarietyCarouselProps {
  images: string[];
  altText: string;
}

const VarietyCarousel = ({ images, altText }: VarietyCarouselProps) => {
  const [currentVariety, setCurrentVariety] = useState(0);

  useEffect(() => {
    setCurrentVariety(0);
  }, [images]);

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
      <div className="rounded-lg shadow-lg bg-secondary/30 px-4 py-6 md:px-8 md:py-10 flex items-center justify-center">
        <img
          src={images[0]}
          alt={altText}
          className="w-auto max-w-full h-auto max-h-[62svh] md:max-h-[70vh] object-contain drop-shadow-md"
        />
      </div>
    );
  }

  return (
    <div className="relative rounded-lg shadow-lg bg-secondary/30 px-4 py-6 md:px-8 md:py-10 flex items-center justify-center group">
      {/* Image */}
      <div className="w-full flex items-center justify-center">
        <img
          src={images[currentVariety]}
          alt={`${altText} - Variety ${currentVariety + 1}`}
          className="w-auto max-w-full h-auto max-h-[62svh] md:max-h-[70vh] object-contain drop-shadow-md transition-opacity duration-500"
        />
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-foreground/70 hover:bg-foreground/90 text-background p-2 rounded-full transition-all opacity-100 sm:opacity-0 sm:group-hover:opacity-100 z-10"
        aria-label="Previous variety"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-foreground/70 hover:bg-foreground/90 text-background p-2 rounded-full transition-all opacity-100 sm:opacity-0 sm:group-hover:opacity-100 z-10"
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

import { useState, useRef } from "react";

export function useCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(null); // inicial null para que no haya dirección predefinida
  const [isInitial, setIsInitial] = useState(true);
  const prevSlide = useRef(0);

  const goToSlide = (index) => {
    if (index === currentSlide) return;

    // Calculamos dirección con base en el slide previo guardado
    const newDirection = index > prevSlide.current ? "right" : "left";

    // Si es la primera vez, quitamos isInitial
    if (isInitial) setIsInitial(false);

    setDirection(newDirection);
    setCurrentSlide(index);
    prevSlide.current = index;
  };

  return { currentSlide, goToSlide, direction, isInitial };
}

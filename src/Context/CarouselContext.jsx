// context/CarouselContext.jsx
import { createContext, useContext } from "react";

export const CarouselContext = createContext();

export const useCarouselContext = () => useContext(CarouselContext);

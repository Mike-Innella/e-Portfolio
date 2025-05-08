import React, { forwardRef } from "react";
import Pulse from "../Animations/Pulse";

export const NextArrow = forwardRef((props, ref) => (
  <button 
    ref={ref}
    className="custom-next swiper-arrow__container arrow-right"
    type="button"
    aria-label="Next slide"
  >
    <Pulse />
    <i className="fa-solid fa-chevron-right" />
  </button>
));

export const PrevArrow = forwardRef((props, ref) => (
  <button 
    ref={ref}
    className="custom-prev swiper-arrow__container arrow-left"
    type="button"
    aria-label="Previous slide"
  >
    <Pulse />
    <i className="fa-solid fa-chevron-left" />
  </button>
));

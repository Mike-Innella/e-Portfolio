import React from "react";
import Pulse from "../Animations/Pulse";

export const NextArrow = () => (
  <div className="custom-next swiper-arrow__container arrow-right">
    <Pulse />
    <i className="fa-solid fa-chevron-right" />
  </div>
);

export const PrevArrow = () => (
  <div className="custom-prev swiper-arrow__container arrow-left">
    <Pulse />
    <i className="fa-solid fa-chevron-left" />
  </div>
);

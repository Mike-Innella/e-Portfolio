import React from "react";

export const NextArrow = ({ onClick, className }) => (
  <i
    className={`${className}slick-arrow slick-next fa-solid fa-chevron-right`}
    onClick={onClick}
  />
);

export const PrevArrow = ({ onClick, className}) => (
  <i
    className={`${className}slick-arrow slick-prev fa-solid fa-chevron-left`}
    onClick={onClick}
  />
);

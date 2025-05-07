import React from "react";
import Skeleton from "./skeletonAnimation";

export const NextArrowSkeleton = () => (
  <div
    className="custom-next swiper-arrow__container arrow-right"
    style={{ pointerEvents: "none" }}
  >
    <Skeleton
      width="48px"
      height="48px"
      borderRadius="50%"
      style={{ margin: "0 auto" }}
    />
  </div>
);

export const PrevArrowSkeleton = () => (
  <div
    className="custom-prev swiper-arrow__container arrow-left"
    style={{ pointerEvents: "none" }}
  >
    <Skeleton
      width="48px"
      height="48px"
      borderRadius="50%"
      style={{ margin: "0 auto" }}
    />
  </div>
);

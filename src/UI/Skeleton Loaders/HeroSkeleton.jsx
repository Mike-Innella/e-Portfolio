import React from "react";
import Skeleton from "./skeletonAnimation";

const HeroSkeleton = () => {
  return (
    <>
      <Skeleton width="60%" height="48px" borderRadius="8px" /> {/* Title */}
      <Skeleton width="80%" height="24px" borderRadius="8px" /> {/* Subtitle */}
      <Skeleton width="72%" height="24px" borderRadius="8px" /> {/* Subtext */}
      <Skeleton width="200px" height="48px" borderRadius="12px" /> {/* Button */}
    </>
  );
};

export default HeroSkeleton;

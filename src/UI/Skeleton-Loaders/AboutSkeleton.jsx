import React from "react";
import Skeleton from "./skeletonAnimation"; // now the only required import

const AboutSkeleton = () => {
  return (
    <>
      {/* Avatar Image Placeholder */}
      <div className="about__image-container">
        <Skeleton width="300px" height="300px" borderRadius="50%" />
      </div>

      {/* Content Area */}
      <div className="about__content">
        {/* Heading */}
        <Skeleton width="280px" height="48px" borderRadius="4px" />

        {/* Paragraph lines */}
        <Skeleton width="100%" height="16px" />
        <Skeleton width="95%" height="16px" />
        <Skeleton width="90%" height="16px" />
        <Skeleton width="85%" height="16px" />
        <Skeleton width="80%" height="16px" />

        {/* Location & Contact info */}
        <Skeleton width="320px" height="64px" borderRadius="16px" />
        <Skeleton width="240px" height="48px" borderRadius="16px" />

        {/* Skills Title */}
        <Skeleton width="200px" height="28px" />

        {/* Skills Icons Grid */}
        <div className="about__skills-list">
          {new Array(5).fill(0).map((_, i) => (
            <Skeleton
              key={i}
              width="136px"
              height="136px"
              borderRadius="16px"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutSkeleton;

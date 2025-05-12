import React from "react";
import Skeleton from "./skeletonAnimation";

const AboutSkeleton = () => {
  return (
    <div className="about__content">
      <div className="about__top-content">
        {/* Avatar Image Placeholder with HueShift effect placeholder */}
        <div className="about__image-container skeleton-responsive">
          <Skeleton 
            width="400px" 
            height="400px" 
            borderRadius="50%" 
            className="skeleton-image"
          />
        </div>

        <div className="text-cta--wrapper">
          {/* Heading */}
          <Skeleton width="240px" height="48px" borderRadius="4px" margin="0 0 var(--spacing-md) 0" />

          {/* Paragraph text - using a single container instead of multiple lines */}
          <div className="about--text">
            <Skeleton width="100%" height="120px" borderRadius="4px" margin="0 0 var(--spacing-md) 0" />
          </div>

          <div className="cta--wrapper">
            {/* Resume button and availability in proper layout */}
            <div className="about__cta">
              <Skeleton width="160px" height="40px" borderRadius="8px" />
            </div>

            {/* Availability indicator */}
            <div className="cta--available">
              <Skeleton width="272px" height="40px" borderRadius="8px" />
            </div>
          </div>
        </div>
      </div>

      <div className="about__bottom-content skeleton-container">
        <div className="about__wrapper--locate-contact">
          {/* Location with Pulse effect placeholder */}
          <div className="about__location">
            <Skeleton width="48px" height="48px" borderRadius="50%" margin="0" />
            <div className="skeleton-location-text">
              <Skeleton width="120px" height="20px" borderRadius="4px" margin="0 0 8px 0" />
              <Skeleton width="160px" height="20px" borderRadius="4px" margin="0" />
            </div>
          </div>

          {/* Contact link */}
          <div className="location__contact">
            <Skeleton width="120px" height="40px" borderRadius="var(--spacing-md)" />
          </div>
        </div>

        <div className="about__skills--wrapper">
          <div className="about__skills">
            {/* Skills Title */}
            <Skeleton width="180px" height="28px" margin="16px 0" />

            {/* Skills Icons Grid - matching the actual layout */}
            <div className="about__skills-list">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="about__skill">
                  <Skeleton 
                    width="36px" 
                    height="36px" 
                    borderRadius="4px" 
                    margin="var(--spacing-md) 0"
                  />
                  <Skeleton 
                    width="80px" 
                    height="16px" 
                    borderRadius="4px" 
                    margin="var(--spacing-md) 0 0 0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSkeleton;

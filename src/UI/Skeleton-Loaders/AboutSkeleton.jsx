import React from "react";
import Skeleton from "./skeletonAnimation"; // now the only required import

const AboutSkeleton = () => {
  return (
    <div className="about__content">
      <div className="about__top-content">
        {/* Avatar Image Placeholder with HueShift effect placeholder */}
        <div className="about__image-container">
          <Skeleton width="100%" height="8px" borderRadius="4px" />{" "}
          {/* HueShift placeholder */}
          <Skeleton width="400px" height="400px" borderRadius="50%" />
        </div>

        <div className="text-cta--wrapper">
          <div className="about--text">
            {/* Heading */}
            <Skeleton width="180px" height="36px" borderRadius="4px" />

            {/* Paragraph lines */}
            <Skeleton width="100%" height="16px" margin="8px 0" />
            <Skeleton width="95%" height="16px" margin="8px 0" />
            <Skeleton width="90%" height="16px" margin="8px 0" />
            <Skeleton width="85%" height="16px" margin="8px 0" />
          </div>

          <div className="cta--wrapper">
            {/* Resume button */}
            <div className="about__cta">
              <Skeleton width="160px" height="40px" borderRadius="8px" />
            </div>

            {/* Availability indicator */}
            <div className="cta--available">
              <Skeleton width="240px" height="24px" borderRadius="4px" />
            </div>
          </div>
        </div>
      </div>

      <div className="about__bottom-content">
        <div className="about__wrapper--locate-contact">
          {/* Location with Pulse effect placeholder */}
          <div className="about__location">
            <Skeleton width="24px" height="24px" borderRadius="50%" />{" "}
            {/* Pulse placeholder */}
            <Skeleton width="200px" height="32px" borderRadius="16px" />
          </div>

          {/* Contact link - hidden during skeleton state */}
          <div
            className="location__contact"
            style={{
              display: "none",
            }}
          >
            <Skeleton width="200px" height="40px" borderRadius="20px" />
          </div>
          <div
            className="about__contact-link"
            style={{
              background: "none",
              overflow: "hidden",
              backgroundColor: "transparent",
            }}
          />
        </div>

        <div className="about__skills--wrapper">
          <div className="about__skills">
            {/* Skills Title */}
            <Skeleton width="180px" height="28px" margin="16px 0" />

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
        </div>
      </div>
    </div>
  );
};

export default AboutSkeleton;

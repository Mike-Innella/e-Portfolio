import React from "react";
import Skeleton from "./skeletonAnimation";

const ProjectCardSkeleton = () => {
  return (
    <div className="project-card">
      <Skeleton width="100%" height="200px" borderRadius="0px" />

      <div className="project-card__content" style={{ padding: "var(--spacing-lg)" }}>
        {/* Overlay content */}
        <div className="project-card__overlay">
          {/* Description */}
          <Skeleton width="100%" height="16px" margin="var(--spacing-xs) 0" />
          <Skeleton width="95%" height="16px" margin="var(--spacing-xs) 0" />
          <Skeleton width="90%" height="16px" margin="var(--spacing-xs) 0" />
          
          {/* Tags */}
          <div className="project-card__tags" style={{ display: "flex", gap: "var(--spacing-sm)", margin: "var(--spacing-md) 0" }}>
            <Skeleton width="60px" height="24px" borderRadius="12px" />
            <Skeleton width="80px" height="24px" borderRadius="12px" />
            <Skeleton width="70px" height="24px" borderRadius="12px" />
          </div>
          
          {/* Links */}
          <div className="project-card__links" style={{ display: "flex", gap: "var(--spacing-md)", margin: "var(--spacing-md) 0" }}>
            <Skeleton width="120px" height="36px" borderRadius="8px" />
            <Skeleton width="120px" height="36px" borderRadius="8px" />
          </div>
        </div>
        
        {/* Title */}
        <Skeleton width="80%" height="24px" margin="var(--spacing-sm) 0" />
      </div>
    </div>
  );
};

export default ProjectCardSkeleton;

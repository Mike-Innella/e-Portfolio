import React from "react";
import Skeleton from "./skeletonAnimation";

const ProjectCardSkeleton = () => {
  return (
    <div className="project-card">
      <Skeleton width="100%" height="200px" borderRadius="0px" />

      <div className="project-card__content" style={{ padding: "24px" }}>
        <Skeleton width="80%" height="20px" /> {/* title */}
        <Skeleton width="100%" height="16px" />
        <Skeleton width="90%" height="16px" />
        <Skeleton width="120px" height="32px" borderRadius="8px" />
      </div>
    </div>
  );
};

export default ProjectCardSkeleton;

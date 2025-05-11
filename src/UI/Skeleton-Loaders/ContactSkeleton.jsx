import React from "react";
import Skeleton from "./skeletonAnimation";

const ContactSkeleton = () => {
  return (
    <>
      <div className="contact__form">
        <Skeleton
          width="100%"
          height="48px"
          borderRadius="8px"
          margin="var(--spacing-md) 0"
        />
        {/* Name input */}
        <Skeleton
          width="100%"
          height="48px"
          borderRadius="8px"
          margin="var(--spacing-md) 0"
        />
        {/* Email input */}
        <Skeleton
          width="100%"
          height="152px"
          borderRadius="8px"
          margin="var(--spacing-md) 0"
        />
        {/* Message area */}
        <Skeleton
          width="160px"
          height="48px"
          borderRadius="12px"
          margin="var(--spacing-md) 0"
        />
        {/* Button */}
      </div>
    </>
  );
};

export default ContactSkeleton;

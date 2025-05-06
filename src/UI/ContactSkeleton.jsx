import React from "react";
import Skeleton from "./skeletonAnimation";

const ContactSkeleton = () => {
  return (
    <div className="contact__form">
      <Skeleton width="100%" height="48px" borderRadius="8px" />{" "}
      {/* Name input */}
      <Skeleton width="100%" height="48px" borderRadius="8px" />{" "}
      {/* Email input */}
      <Skeleton width="100%" height="150px" borderRadius="8px" />{" "}
      {/* Message area */}
      <Skeleton width="160px" height="48px" borderRadius="12px" />{" "}
      {/* Button */}
    </div>
  );
};

export default ContactSkeleton;

import React from "react";
import "../../styles/components/Contact&Modal/animatedCheck.css";

const AnimatedCheck = () => {
  return (
    <div className="checkmark-container">
      <svg
        className="checkmark"
        viewBox="0 0 52 52"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14 27 l10 10 l15 -20" />
      </svg>
    </div>
  );
};

export default AnimatedCheck;

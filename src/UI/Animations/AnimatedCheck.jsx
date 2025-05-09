import React, { useEffect } from "react";

const AnimatedCheck = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .checkmark {
        width: 72px;
        height: 72px;
        display: inline-block;
        stroke-width: 3;
        stroke: #4CAF50;
        fill: none;
        stroke-linecap: round;
        animation: drawCheck 800ms ease forwards;
      }

      @keyframes drawCheck {
        0% {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
        }
        100% {
          stroke-dasharray: 100;
          stroke-dashoffset: 0;
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <svg
      className="checkmark"
      viewBox="0 0 52 52"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14 27 l10 10 l15 -20" />
    </svg>
  );
};

export default AnimatedCheck;

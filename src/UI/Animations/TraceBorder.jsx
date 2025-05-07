import { useEffect } from "react";

const TraceBorder = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes rotate-bg {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      .trace-hover {
        position: relative;
        z-index: 1;
      }

      /* Rotating gradient background */
      .trace-hover::after {
        content: "";
        position: absolute;
        top: -4px;
        left: -4px;
        right: -4px;
        bottom: -4px;
        z-index: -10;
        border-radius: 12px;
        pointer-events: none;
        opacity: 0;
        transition: opacity 400ms ease;
        filter: blur(2px);
        background: conic-gradient(
          from 0deg,
          transparent 0deg,
          #ff4c60 30deg,
          #fca728 60deg,
          transparent 90deg,
          transparent 360deg
        );
        animation: rotate-bg 1.6s linear infinite;
      }

      /* Inner mask layer for outline trimming */
      .trace-hover::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        border-radius: 12px;
        pointer-events: none;
        -webkit-mask:
          linear-gradient(#000 0 0) content-box,
          linear-gradient(#000 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        padding: 8px;
        box-sizing: border-box;
      }

      .trace-hover:hover::after {
        opacity: 1;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return null;
};

export default TraceBorder;

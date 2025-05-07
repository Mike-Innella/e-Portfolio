import { useEffect } from "react";

const Pulse = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes pulse {
        0%, 100% {
          opacity: 1;
          box-shadow: 0 0 12px rgba(255, 255, 255, 0.2);
        }
        50% {
          opacity: 0.75;
          box-shadow: 0 0 16px rgba(255, 255, 255, 0.7);
        }
      }

      @keyframes pulseText {
        0%, 100% {
          text-shadow: 0 0 0px rgba(255, 255, 255, 0.0);
        }
        50% {
          text-shadow: 0 0 12px rgba(255, 255, 255, 0.8);
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return null;
};

export default Pulse;

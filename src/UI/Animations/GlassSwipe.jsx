import { useEffect } from "react";

const GlassSwipe = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes glassSwipe {
        0% {
          transform: translateX(-100%) rotate(25deg);
        }
        100% {
          transform: translateX(100%) rotate(25deg);
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return null;
};

export default GlassSwipe;

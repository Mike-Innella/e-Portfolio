import { useEffect } from "react";

const HueShift = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes hueShift {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return null;
};

export default HueShift;

import React, { useState, useEffect } from "react";

const HeroFade = ({ children, delay = 100 }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Inject fade-in styles into <head>
    const style = document.createElement("style");
    style.innerHTML = `
      .fade-in {
        opacity: 0;
        transform: translateY(12px);
        transition: opacity 800ms ease, transform 800ms ease;
        zindex: -1;
        pointer-events: none;
      }

      .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
        z-index: 1;
        pointer-events: auto;
      }
        
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`fade-in ${visible ? "visible" : ""}`}>{children}</div>
  );
};

export default HeroFade;

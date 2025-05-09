import React, { useEffect } from "react";
import "../../styles/components/Contact&Modal/modal.css";

const OrbitRings = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
@keyframes spin {
  0%,
  100% {
    transform: rotate(0deg) translateX(44px) translateY(0px) scale(0.9);
  }
  25% {
    transform: rotate(90deg) translateX(44px) translateY(1px) scale(1);
  }
  50% {
    transform: rotate(180deg) translateX(44px) translateY(2px) scale(1.15);
  }
  75% {
    transform: rotate(270deg) translateX(44px) translateY(1px) scale(1);
  }
  100% {
    transform: rotate(360deg) translateX(44px) translateY(0px) scale(0.9);
  }
}

@keyframes counterSpin {
  0%,
  100% {
    transform: rotate(0deg) translateX(44px) translateY(0px) scale(0.9);
  }
  25% {
    transform: rotate(-90deg) translateX(44px) translateY(1px) scale(1);
  }
  50% {
    transform: rotate(-180deg) translateX(44px) translateY(2px) scale(1.15);
  }
  75% {
    transform: rotate(-270deg) translateX(44px) translateY(1px) scale(1);
  }
  100% {
    transform: rotate(-360deg) translateX(44px) translateY(0px) scale(0.9);
  }
}

@keyframes spinDiagonal {
  0%,
  100% {
    transform: rotate(0deg) translateX(44px) translateY(1px) scale(0.85);
  }
  25% {
    transform: rotate(-90deg) translateX(44px) translateY(0px) scale(1);
  }
  50% {
    transform: rotate(-180deg) translateX(44px) translateY(-1px) scale(1.2);
  }
  75% {
    transform: rotate(-270deg) translateX(44px) translateY(0px) scale(1);
  }
  100% {
    transform: rotate(-360deg) translateX(44px) translateY(1px) scale(0.85);
  }
}


@keyframes float {
  0% {
    transform: translate(-50%, -50%) translateX(0) translateY(4px);
  }
  25% {
    transform: translate(-50%, -50%) translateX(-4px) translateY(2px);
  }
  50% {
    transform: translate(-50%, -50%) translateX(0) translateY(-4px);
  }
  75% {
    transform: translate(-50%, -50%) translateX(4px) translateY(2px);
  }
  100% {
    transform: translate(-50%, -50%) translateX(0) translateY(4px);
  }
}
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="orbit-loader">
      <div className="orbit-center" />

      {/* Satellite 1 */}
      <div className="orbit-ring ring-one">
        <div className="satellite">
          <div className="orbit-trail" />
        </div>
      </div>

      {/* Satellite 2 */}
      <div className="orbit-ring ring-two">
        <div className="satellite">
          {" "}
          <div className="orbit-trail" />
        </div>
      </div>

      {/* Satellite 3 */}
      <div className="orbit-ring ring-three">
        <div className="satellite">
          {" "}
          <div className="orbit-trail" />
        </div>
      </div>
    </div>
  );
};

export default OrbitRings;

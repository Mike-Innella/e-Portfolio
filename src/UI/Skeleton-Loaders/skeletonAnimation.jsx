// src/UI/Skeleton-Loaders/skeletonAnimation.jsx
import React, { useEffect } from "react";
import "../../styles/skeletonResponsive.css";

const shimmerStyle = {
  position: "relative",
  overflow: "hidden",
};

const shimmerAfterStyle = {
  content: '""',
  position: "absolute",
  top: 0,
  left: "-100%",
  height: "100%",
  width: "100%",
  background:
    "linear-gradient(to right, transparent 0%, #f0f0f080 50%, transparent 100%)",
  animation: "loading 1.2s infinite",
};

const injectKeyframes = () => {
  if (document.getElementById("skeleton-keyframes")) return;

  const style = document.createElement("style");
  style.id = "skeleton-keyframes";
  style.innerHTML = `
    @keyframes loading {
      100% {
        left: 100%;
      }
    }
  `;
  document.head.appendChild(style);
};

const Skeleton = ({
  width = "100%",
  height = "100%",
  borderRadius = "4px",
  margin = "0",
  className = "",
}) => {
  useEffect(() => {
    injectKeyframes();
  }, []);

  return (
    <div
      className={className}
      style={{
        ...shimmerStyle,
        width,
        height,
        borderRadius,
        margin,
        backgroundColor: "transparent",
      }}
    >
      <div style={shimmerAfterStyle}></div>
    </div>
  );
};

export default Skeleton;

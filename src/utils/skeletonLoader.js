import React from "react";
import "../styles/skeleton.css";

const SkeletonLoader = ({ type }) => {
  const classes = `skeleton skeleton--${type}`;
  return <div className={classes}></div>;
};

export default SkeletonLoader;

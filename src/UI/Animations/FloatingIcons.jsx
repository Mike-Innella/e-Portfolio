import React, { useEffect } from "react";
import "../../styles/components/Contact&Modal/icons.css";

const FloatingIcons = () => {
  useEffect(() => {
    const scaleFactor = 1 / 15; // Increased from 1/30 for more noticeable movement
    const wrappers = document.querySelectorAll(".shape__wrapper");
    
    // Track mouse position
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    
    // Smoothly update positions with animation frame
    const updatePositions = () => {
      // Smooth interpolation
      targetX += (mouseX - targetX) * 0.1;
      targetY += (mouseY - targetY) * 0.1;
      
      wrappers.forEach((wrapper, i) => {
        const direction = i % 2 === 0 ? 1.2 : -1.2; // Slightly increased direction factor
        const offsetX = targetX * direction * scaleFactor;
        const offsetY = targetY * direction * scaleFactor;
        
        // Apply movement based on smoothed mouse position
        wrapper.style.transform = `translateX(${offsetX}px) translateY(${offsetY}px)`;
      });
      
      requestAnimationFrame(updatePositions);
    };
    
    // Start the animation loop
    const animationId = requestAnimationFrame(updatePositions);
    
    // Update mouse position on move
    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };
    
    document.addEventListener("mousemove", handleMouseMove);
    
    // Clean up
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Create randomized arrangement of the three icons
  const getRandomizedIcons = () => {
    // The three icons we want to use
    const availableIcons = ["fa-code", "fa-envelope", "fa-user-tie"];
    
    // Create a 6x3 grid of icons (18 total)
    const result = [];
    
    // Track which icon was used in each column position
    const columnUsage = [[], [], [], [], [], []];
    
    // Generate three different rows, each with a different arrangement
    for (let row = 0; row < 3; row++) {
      // For each column in this row (now 6 columns instead of 3)
      for (let col = 0; col < 6; col++) {
        // Create a copy of available icons for this position
        let availableForPosition = [...availableIcons];
        
        // Try to avoid using the same icon in adjacent positions
        if (result.length > 0) {
          const lastIcon = result[result.length - 1];
          // Prefer icons different from the last one if possible
          const differentIcons = availableForPosition.filter(icon => icon !== lastIcon);
          if (differentIcons.length > 0) {
            availableForPosition = differentIcons;
          }
        }
        
        // Try to avoid using the same icon in the same column position
        if (columnUsage[col].length > 0) {
          const unusedInColumn = availableForPosition.filter(
            icon => !columnUsage[col].includes(icon)
          );
          if (unusedInColumn.length > 0) {
            availableForPosition = unusedInColumn;
          }
        }
        
        // Randomly select an icon from the available options
        const randomIndex = Math.floor(Math.random() * availableForPosition.length);
        const selectedIcon = availableForPosition[randomIndex];
        
        // Add the selected icon to the result
        result.push(selectedIcon);
        
        // Track that this icon was used in this column
        columnUsage[col].push(selectedIcon);
      }
    }
    
    return result;
  };
  
  // Generate randomized icons on component mount
  const iconClasses = getRandomizedIcons();

  return (
    <div className="shapes--box">
      <div className="shapes">
        {iconClasses.map((icon, i) => (
          <div className="shape__wrapper" key={i}>
            <i className={`fa-solid ${icon} shape shape--${i}`}></i>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FloatingIcons;

import { useState, useEffect } from 'react';

/**
 * Custom hook to animate counting from 0 to a target number over 3 seconds
 * @param {number} targetNumber - The number to count up to
 * @param {boolean} shouldStart - Whether the count animation should start (default: true)
 * @returns {number} The current count value
 */
const useCountUp = (targetNumber, shouldStart = true) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime;
    const duration = 2000; // 2 seconds
    const animationFrame = requestAnimationFrame(function animate(currentTime) {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easedProgress = progress < 0.5 
        ? 2 * progress * progress 
        : -1 + (4 - 2 * progress) * progress;
      
      const currentCount = Math.floor(targetNumber * easedProgress);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(targetNumber);
      }
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [targetNumber, shouldStart]);

  return count;
};

export default useCountUp;

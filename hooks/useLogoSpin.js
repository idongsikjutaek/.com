import { useState, useEffect } from 'react';

/**
 * Custom hook to manage logo spin animation on page load
 * Returns a boolean indicating whether the spin animation should be active
 */
const useLogoSpin = () => {
  const [isSpinning, setIsSpinning] = useState(true);

  useEffect(() => {
    // Animation runs for 2 seconds, then stops
    const timer = setTimeout(() => {
      setIsSpinning(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return isSpinning;
};

export default useLogoSpin;

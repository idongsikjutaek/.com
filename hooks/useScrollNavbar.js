import { useState, useEffect } from 'react';

/**
 * Custom hook to detect scroll direction and manage navbar visibility
 * Returns true when navbar should be visible (scrolling up or at top)
 * Returns false when navbar should be hidden (scrolling down)
 */
const useScrollNavbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when at the top
      if (currentScrollY < 50) {
        setIsNavbarVisible(true);
      } 
      // Show navbar when scrolling up
      else if (currentScrollY < lastScrollY) {
        setIsNavbarVisible(true);
      } 
      // Hide navbar when scrolling down
      else if (currentScrollY > lastScrollY) {
        setIsNavbarVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return isNavbarVisible;
};

export default useScrollNavbar;

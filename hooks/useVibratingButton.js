import { useEffect, useState } from 'react';

const useVibratingButton = () => {
  const [isVibrating, setIsVibrating] = useState(false);
  const [vibrateCount, setVibrateCount] = useState(0);

  useEffect(() => {
    let mainTimer;
    let vibrateTimer;
    let initialDelayTimer;

    const startVibrationCycle = () => {
      let count = 0;

      const vibrateInterval = () => {
        setIsVibrating(true);
        
        // Vibrate for 3 seconds
        vibrateTimer = setTimeout(() => {
          setIsVibrating(false);
          count++;

          // If we haven't vibrated 3 times yet
          if (count < 3) {
            // Wait before next vibration (quick reset)
            vibrateTimer = setTimeout(vibrateInterval, 500);
          } else {
            // After 3 vibrations, wait 10 seconds before starting again
            mainTimer = setTimeout(startVibrationCycle, 10000);
          }
        }, 3000);
      };

      vibrateInterval();
    };

    // Wait 5 seconds before starting the vibration cycle
    initialDelayTimer = setTimeout(startVibrationCycle, 5000);

    return () => {
      clearTimeout(mainTimer);
      clearTimeout(vibrateTimer);
      clearTimeout(initialDelayTimer);
    };
  }, []);

  return isVibrating;
};

export default useVibratingButton;

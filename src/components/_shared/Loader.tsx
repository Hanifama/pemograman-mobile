import React, { useEffect, useState } from "react";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";

// Constants for the loader
const PROGRESS_INCREMENT = 5;
const PROGRESS_INTERVAL = 100;
const ANIMATION_DURATION = "1.5s";

const Loader: React.FC = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(interval);
        }
        return Math.min(oldProgress + PROGRESS_INCREMENT, 100);
      });
    }, PROGRESS_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-md z-50">
      <div className="relative flex flex-col items-center p-6 rounded-xl">
        {/* Icon with changing color inside a spinner */}
        <div className="relative mb-6 w-24 h-24 flex items-center justify-center rounded-full border-4 border-teal-600">
          <div
            className="absolute w-16 h-16 flex items-center justify-center rounded-full border-4 border-t-4 animate-spin"
            style={{
              animationDuration: ANIMATION_DURATION,
            }}
          ></div>
          {/* Display the ElectricalServicesIcon */}
          <ElectricalServicesIcon
            sx={{
              fontSize: 40,
              color: loadingProgress === 100 ? 'teal' : 'white',
              transition: "color 0.3s ease",
            }}
          />
        </div>

        {/* Progress Text */}
        <div className="mt-4 text-xl text-teal-600 font-semibold">
          {loadingProgress}% Memuat...
        </div>
      </div>
    </div>
  );
};

export default Loader;

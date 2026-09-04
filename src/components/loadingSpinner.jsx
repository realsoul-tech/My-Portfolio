import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="relative">
      {/* Outer ring */}
      <div className="w-32 h-32 border-4 border-blue-900/30 rounded-full"></div>
      
      {/* Spinning ring */}
      <div className="absolute top-0 left-0 w-32 h-32 border-4 border-transparent border-t-blue-500 border-r-cyan-400 rounded-full animate-spin"></div>
      
      {/* Inner ring */}
      <div className="absolute top-4 left-4 w-24 h-24 border-2 border-blue-400/20 rounded-full animate-pulse"></div>
      
      {/* Center dot */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </div>
      </div>
      
      {/* Spinning dots */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"
          style={{
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) rotate(${i * 45}deg) translate(70px) rotate(-${i * 45}deg)`,
            animation: `pulse 1.5s ease-in-out ${i * 0.2}s infinite alternate`
          }}
        />
      ))}
    </div>
  );
};

export default LoadingSpinner;
// components/GradientSeparator.tsx
import React from 'react';

type GradientSeparatorProps = {
  className?: string;
  height?: string;
};

const GradientSeparator: React.FC<GradientSeparatorProps> = ({ 
  className = "", 
  height = "h-0.5" // Default to very thin (0.5px)
}) => {
  return (
    <div 
      className={`w-full ${height} bg-gradient-to-r from-yellow-400 via-orange-400 via-pink-500 to-purple-500 ${className}`}
      role="separator"
    />
  );
};

export default GradientSeparator;
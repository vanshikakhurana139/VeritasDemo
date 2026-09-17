import React from 'react';

interface VeritasLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  showTagline?: boolean;
}

export const VeritasLogo: React.FC<VeritasLogoProps> = ({
  size = 'md',
  showText = true,
  showTagline = false
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  return (
    <div className="flex flex-col items-center select-none text-center">
      <div className={`${iconSizes[size]} relative flex items-center justify-center`}>
        {/* Shield outline */}
        <svg
          viewBox="0 0 48 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-md"
        >
          {/* Shield background */}
          <path
            d="M24 2L6 9.5V24.5C6 36.5 13.8 47.7 24 51.5C34.2 47.7 42 36.5 42 24.5V9.5L24 2Z"
            fill="#1B5E20"
          />
          {/* Subtle inner shield highlight */}
          <path
            d="M24 5.5L9 11.8V24.5C9 34.6 15.6 44.2 24 47.7C32.4 44.2 39 34.6 39 24.5V11.8L24 5.5Z"
            fill="#2E7D32"
          />
          {/* Road perspective lines */}
          <path
            d="M17 38L21.5 18H26.5L31 38"
            stroke="#FFFFFF"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Dashed center lane markings */}
          <line
            x1="24"
            y1="20"
            x2="24"
            y2="24"
            stroke="#FFF8E1"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <line
            x1="24"
            y1="28"
            x2="24"
            y2="34"
            stroke="#FFF8E1"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {showText && (
        <div className="mt-2 text-center">
          <h1 className="text-xl font-extrabold tracking-wider text-[#1B5E20] font-mono">
            VERITAS
          </h1>
          {showTagline && (
            <p className="text-[11px] font-medium text-gray-500 mt-0.5 tracking-tight">
              Safer Roads. Stronger Communities.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

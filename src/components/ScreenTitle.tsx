import React from 'react';

interface ScreenTitleProps {
  screenNumber: number;
  totalScreens?: number;
  title: string;
  category: string;
  description: string;
}

export const ScreenTitle: React.FC<ScreenTitleProps> = ({
  screenNumber,
  totalScreens = 20,
  title,
  category,
  description
}) => {
  const formattedNumber = screenNumber < 10 ? `0${screenNumber}` : `${screenNumber}`;

  return (
    <div className="w-[390px] mb-3 select-none">
      <div className="flex items-center justify-between gap-2 mb-1.5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 text-xs font-bold font-mono tracking-wider bg-[#1B5E20] text-white rounded-md shadow-sm">
            SCREEN {formattedNumber}
          </span>
          <span className="text-xs font-medium text-gray-500">
            of {totalScreens}
          </span>
        </div>
        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#1B5E20] bg-[#E8F5E9] px-2 py-0.5 rounded-full">
          {category}
        </span>
      </div>
      <h2 className="text-lg font-bold text-[#1A1A1A] tracking-tight flex items-center gap-1.5">
        {title}
      </h2>
      <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">
        {description}
      </p>
    </div>
  );
};

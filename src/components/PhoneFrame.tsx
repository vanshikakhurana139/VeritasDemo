import React from 'react';
import { Wifi, Battery } from 'lucide-react';

interface PhoneFrameProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  hideStatusBar?: boolean;
  hideHomeBar?: boolean;
  darkStatusBar?: boolean; // for dark screens like Screen 8
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({
  children,
  id,
  className = '',
  hideStatusBar = false,
  hideHomeBar = false,
  darkStatusBar = false,
}) => {
  return (
    <div
      id={id}
      className={`relative w-[390px] h-[844px] max-w-[390px] max-h-[844px] min-w-[390px] min-h-[844px] bg-white rounded-[44px] border-[9px] border-[#18181B] shadow-phone overflow-hidden flex flex-col select-none transition-transform duration-200 ${className}`}
      style={{
        boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.28), 0 0 0 1px rgba(0, 0, 0, 0.12), inset 0 0 0 2px rgba(255,255,255,0.15)'
      }}
    >
      {/* Top Speaker / Dynamic Island */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center">
        <div className="w-28 h-6 bg-black rounded-full flex items-center justify-between px-2.5 shadow-sm">
          <div className="w-2.5 h-2.5 rounded-full bg-[#0a0a1a] border border-[#1f1f2e] flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-[#1b3a5b]"></div>
          </div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#0d0d18] border border-[#222233]"></div>
        </div>
      </div>

      {/* Realistic Status Bar */}
      {!hideStatusBar && (
        <div
          className={`relative z-40 w-full pt-3 pb-1 px-7 flex items-center justify-between text-xs font-semibold ${
            darkStatusBar ? 'text-white' : 'text-[#1A1A1A]'
          }`}
        >
          <span className="tracking-tight text-[13px] font-bold">9:41</span>
          <div className="flex items-center gap-1.5 opacity-90">
            {/* 5G Signal Bars */}
            <div className="flex items-end gap-[1.5px] h-3">
              <span className="w-[3px] h-[4px] bg-current rounded-sm"></span>
              <span className="w-[3px] h-[6px] bg-current rounded-sm"></span>
              <span className="w-[3px] h-[8px] bg-current rounded-sm"></span>
              <span className="w-[3px] h-[10px] bg-current rounded-sm"></span>
            </div>
            {/* Wi-Fi Icon */}
            <Wifi className="w-3.5 h-3.5 stroke-[2.4]" />
            {/* Battery Icon with 78% indicator */}
            <div className="flex items-center gap-1">
              <span className="text-[10px] font-mono">78%</span>
              <Battery className="w-4 h-4 stroke-[2.2]" />
            </div>
          </div>
        </div>
      )}

      {/* Scrollable Screen Content */}
      <div className="relative flex-1 w-full overflow-y-auto phone-scroll flex flex-col bg-white">
        {children}
      </div>

      {/* Bottom Home Indicator Bar */}
      {!hideHomeBar && (
        <div className={`relative z-40 w-full py-1.5 flex justify-center items-center ${darkStatusBar ? 'bg-transparent' : 'bg-white'}`}>
          <div className={`w-32 h-1 rounded-full ${darkStatusBar ? 'bg-white/40' : 'bg-gray-400'}`}></div>
        </div>
      )}
    </div>
  );
};

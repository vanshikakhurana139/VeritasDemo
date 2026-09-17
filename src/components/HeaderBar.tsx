import React from 'react';
import {
  Menu,
  Smartphone,
  Layers,
  ZoomIn,
  ZoomOut,
  ChevronDown,
  Shield,
  Eye
} from 'lucide-react';
import { allScreensMetadata } from './SidebarNav';

interface HeaderBarProps {
  currentScreenIndex: number;
  onSelectScreen: (index: number) => void;
  viewMode: 'vertical-stack' | 'simulator';
  onViewModeChange: (mode: 'vertical-stack' | 'simulator') => void;
  zoomScale: number;
  onZoomChange: (scale: number) => void;
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
}

export const HeaderBar: React.FC<HeaderBarProps> = ({
  currentScreenIndex,
  onSelectScreen,
  viewMode,
  onViewModeChange,
  zoomScale,
  onZoomChange,
  onToggleSidebar,
  isSidebarOpen
}) => {
  const currentScreen = allScreensMetadata[currentScreenIndex] || allScreensMetadata[0];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-200/90 px-4 py-2.5 shadow-2xs flex items-center justify-between">
      {/* Left: Sidebar Toggle + Brand */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className={`p-2 rounded-xl border transition-colors flex items-center gap-1.5 text-xs font-bold ${
            isSidebarOpen
              ? 'bg-[#E8F5E9] text-[#1B5E20] border-green-200'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border-gray-200'
          }`}
          title="Toggle Screen Sidebar"
        >
          <Menu className="w-4 h-4" />
          <span className="hidden sm:inline">Screens</span>
        </button>

        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#1B5E20] text-white flex items-center justify-center shadow-xs">
            {/* Mini Shield Road icon */}
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
              <path
                d="M12 2L3 6V12C3 17.5 6.8 22.7 12 24C17.2 22.7 21 17.5 21 12V6L12 2Z"
                fill="currentColor"
              />
              <path
                d="M8.5 17L10.8 7H13.2L15.5 17"
                stroke="#FFFFFF"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-black tracking-wider text-[#1B5E20] font-mono">
                VERITAS
              </span>
              <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-[#E8F5E9] text-[#1B5E20] border border-green-300">
                PROTOTYPE
              </span>
            </div>
            <div className="text-[11px] font-semibold text-gray-800 hidden md:block">
              Screen {currentScreen.number < 10 ? `0${currentScreen.number}` : currentScreen.number}:{' '}
              <span className="text-[#1B5E20]">{currentScreen.title}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Center: Quick Jump Dropdown */}
      <div className="hidden lg:flex items-center">
        <div className="relative">
          <select
            value={currentScreenIndex}
            onChange={(e) => onSelectScreen(Number(e.target.value))}
            className="appearance-none bg-gray-100 hover:bg-gray-200/80 text-xs font-bold text-gray-800 pl-3 pr-8 py-1.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#1B5E20] cursor-pointer"
          >
            {allScreensMetadata.map((s, idx) => (
              <option key={s.id} value={idx}>
                Screen {s.number < 10 ? `0${s.number}` : s.number}: {s.title} ({s.category})
              </option>
            ))}
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-gray-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      {/* Right Controls: View Mode Switcher + Zoom Scale */}
      <div className="flex items-center gap-2.5">
        {/* Zoom Controls */}
        <div className="hidden sm:flex items-center bg-gray-100 rounded-xl p-0.5 border border-gray-200 text-xs">
          <button
            onClick={() => onZoomChange(Math.max(0.7, Number((zoomScale - 0.1).toFixed(1))))}
            className="p-1.5 hover:bg-white rounded-lg text-gray-600 transition-colors"
            title="Zoom Out"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>
          <span className="px-2 font-mono font-bold text-gray-700 text-[11px]">
            {Math.round(zoomScale * 100)}%
          </span>
          <button
            onClick={() => onZoomChange(Math.min(1.0, Number((zoomScale + 0.1).toFixed(1))))}
            className="p-1.5 hover:bg-white rounded-lg text-gray-600 transition-colors"
            title="Zoom In"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center bg-gray-100 rounded-xl p-0.5 border border-gray-200">
          <button
            onClick={() => onViewModeChange('vertical-stack')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
              viewMode === 'vertical-stack'
                ? 'bg-white text-[#1B5E20] shadow-2xs font-extrabold'
                : 'text-gray-600 hover:text-gray-900'
            }`}
            title="View all 20 phone screens stacked vertically"
          >
            <Layers className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Vertical Stack (20)</span>
          </button>

          <button
            onClick={() => onViewModeChange('simulator')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
              viewMode === 'simulator'
                ? 'bg-white text-[#1B5E20] shadow-2xs font-extrabold'
                : 'text-gray-600 hover:text-gray-900'
            }`}
            title="Interactive Single Phone Simulator"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Phone Simulator</span>
          </button>
        </div>
      </div>
    </header>
  );
};

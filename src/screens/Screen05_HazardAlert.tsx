import React, { useState } from 'react';
import { BottomTabBar } from '../components/BottomTabBar';
import { AlertTriangle, Check, X, Clock, Users, ShieldAlert } from 'lucide-react';

export const Screen05_HazardAlert: React.FC = () => {
  const [confirmedState, setConfirmedState] = useState<string | null>(null);

  return (
    <div className="flex-1 flex flex-col justify-between bg-gray-900 text-white relative overflow-hidden select-none">
      {/* Dimmed Background: Simulated Drive Screen */}
      <div className="absolute inset-0 opacity-25 filter blur-[2px] pointer-events-none flex flex-col">
        {/* Sky and road mock */}
        <div className="h-52 bg-slate-800 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-700"></div>
          {/* road perspective */}
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-gray-400 font-mono text-xs">Drive Cam View</span>
          </div>
        </div>
        <div className="flex-1 bg-gray-950 p-4">
          <div className="h-16 bg-gray-800 rounded-xl mb-4"></div>
          <div className="grid grid-cols-3 gap-2">
            <div className="h-12 bg-gray-800 rounded-lg"></div>
            <div className="h-12 bg-gray-800 rounded-lg"></div>
            <div className="h-12 bg-gray-800 rounded-lg"></div>
          </div>
        </div>
      </div>

      {/* Dark Translucent Overlay Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xs z-10 flex items-center justify-center p-4">
        {/* Centered Modal Alert Card */}
        <div className="w-full bg-white text-[#1A1A1A] rounded-3xl p-5 shadow-2xl border border-amber-200 animate-soft-pulse relative">
          {/* Top Amber Warning Icon with circular pulse */}
          <div className="flex justify-center -mt-10 mb-3">
            <div className="relative flex items-center justify-center">
              <span className="absolute w-16 h-16 bg-amber-400/30 rounded-full animate-ping"></span>
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#F57F17] to-[#FBC02D] text-white flex items-center justify-center shadow-lg border-4 border-white">
                <AlertTriangle className="w-7 h-7 stroke-[2.4]" />
              </div>
            </div>
          </div>

          <div className="text-center space-y-1">
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#FFF8E1] text-[#b2760a] border border-amber-200 text-[10px] font-bold tracking-wider uppercase">
              Hazard Ahead
            </span>
            <h3 className="text-lg font-extrabold text-gray-900">
              Pothole 200 m ahead
            </h3>
            <div className="flex items-center justify-center gap-1.5 text-xs text-gray-600 pt-1">
              <Users className="w-3.5 h-3.5 text-emerald-600" />
              <span className="font-semibold text-emerald-700">High confidence</span>
              <span>— 3 drivers confirmed</span>
            </div>
          </div>

          {/* Quick Details Pill */}
          <div className="my-3.5 p-2.5 bg-gray-50 border border-gray-200/80 rounded-xl flex items-center justify-between text-xs">
            <span className="text-gray-500">Suggested Action:</span>
            <span className="font-bold text-gray-800">Slow down & steer left</span>
          </div>

          {/* Two Action Buttons: Confirm (green) | Not there (gray) */}
          <div className="grid grid-cols-2 gap-2.5 mt-2">
            <button
              onClick={() => setConfirmedState('confirmed')}
              className={`py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-colors ${
                confirmedState === 'confirmed'
                  ? 'bg-emerald-800 text-white'
                  : 'bg-[#1B5E20] hover:bg-[#154a19] text-white'
              }`}
            >
              <Check className="w-4 h-4" />
              <span>{confirmedState === 'confirmed' ? 'Verified ✓' : 'Confirm'}</span>
            </button>
            <button
              onClick={() => setConfirmedState('dismissed')}
              className={`py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors border ${
                confirmedState === 'dismissed'
                  ? 'bg-gray-300 text-gray-800 border-gray-400'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border-gray-200'
              }`}
            >
              <X className="w-4 h-4" />
              <span>{confirmedState === 'dismissed' ? 'Not There' : 'Not there'}</span>
            </button>
          </div>

          {/* Auto-Dismiss Timer Bar */}
          <div className="mt-4 pt-3 border-t border-gray-100 flex flex-col items-center gap-1.5">
            <div className="flex items-center gap-1.5 text-[10px] font-medium text-gray-400">
              <Clock className="w-3 h-3" />
              <span>Auto-dismiss in 18s</span>
            </div>
            {/* Progress Bar */}
            <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-amber-400 rounded-full w-[70%]"></div>
            </div>
          </div>
        </div>
      </div>

      <BottomTabBar activeTab="drive" />
    </div>
  );
};

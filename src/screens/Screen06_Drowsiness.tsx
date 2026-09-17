import React from 'react';
import { BottomTabBar } from '../components/BottomTabBar';
import {
  AlertTriangle,
  Coffee,
  CheckCircle2,
  MapPin,
  Eye,
  Activity,
  UserCheck,
  ChevronRight
} from 'lucide-react';

export const Screen06_Drowsiness: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col justify-between bg-white text-[#1A1A1A] select-none">
      <div className="p-4 space-y-3 flex-1">
        {/* Top Bar: Driver Monitoring */}
        <div className="flex items-center justify-between pb-1 border-b border-gray-100">
          <div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              Safety Subsystem
            </span>
            <h2 className="text-base font-bold text-gray-900">Driver Monitoring</h2>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold border border-amber-200">
            Active Attention Scan
          </span>
        </div>

        {/* Front Camera Preview Placeholder (Face Outline + Iris Tracking) */}
        <div className="relative h-44 w-full rounded-2xl bg-gradient-to-b from-gray-900 to-slate-800 overflow-hidden border border-gray-700 flex items-center justify-center shadow-inner">
          {/* Subtle Grid & Landmark Mesh */}
          <svg className="w-28 h-28 text-amber-400" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            {/* Face Oval */}
            <ellipse cx="50" cy="50" rx="30" ry="40" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.8" />
            {/* Brows */}
            <path d="M 32 36 Q 40 32 46 36" strokeWidth="2" strokeLinecap="round" />
            <path d="M 54 36 Q 60 32 68 36" strokeWidth="2" strokeLinecap="round" />
            {/* Drooping Eyelids (Simulating Drowsiness) */}
            <ellipse cx="39" cy="44" rx="7" ry="2.5" fill="#FEF3C7" opacity="0.9" />
            <ellipse cx="61" cy="44" rx="7" ry="2.5" fill="#FEF3C7" opacity="0.9" />
            {/* Nose */}
            <path d="M 50 45 L 48 58 L 54 58" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
            {/* Mouth */}
            <path d="M 40 70 Q 50 72 60 70" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
          </svg>

          {/* Warning badge on camera preview */}
          <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/70 backdrop-blur-xs text-[9px] font-mono text-amber-300 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"></span>
            <span>EYE CLOSURE DETECTED (1.4s)</span>
          </div>

          <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/70 backdrop-blur-xs text-[9px] font-mono text-gray-300">
            IR CAM • 60 FPS
          </div>
        </div>

        {/* Alert Banner (amber): Drowsiness detected */}
        <div className="p-3 bg-[#FFF8E1] border border-amber-300/80 rounded-xl flex items-center gap-2.5 shadow-2xs">
          <div className="w-8 h-8 rounded-lg bg-[#F9A825] text-white flex items-center justify-center shrink-0 shadow-xs">
            <AlertTriangle className="w-5 h-5 stroke-[2.3]" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-amber-950">
              ⚠️ Drowsiness detected — Please take a break
            </h4>
            <p className="text-[10px] text-amber-800/90 mt-0.5">
              Microsleep risk elevated. Auditory chime prompted.
            </p>
          </div>
        </div>

        {/* Alert Level Indicator: Level 2 of 4 (amber bar) */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-3">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-bold text-gray-800">Alert Severity</span>
            <span className="text-xs font-bold text-amber-700">Level 2 of 4 (Moderate)</span>
          </div>
          {/* Stepped progress bar */}
          <div className="grid grid-cols-4 gap-1.5 h-2">
            <div className="bg-emerald-500 rounded-full"></div>
            <div className="bg-amber-500 rounded-full animate-pulse"></div>
            <div className="bg-gray-200 rounded-full"></div>
            <div className="bg-gray-200 rounded-full"></div>
          </div>
        </div>

        {/* Real-time Facial Metrics Grid */}
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2.5 bg-gray-50 border border-gray-200 rounded-xl">
            <span className="text-[10px] text-gray-500 font-medium">Eye Aspect Ratio (EAR)</span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-sm font-extrabold text-amber-600 font-mono">0.18</span>
              <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-1 rounded">Low</span>
            </div>
          </div>

          <div className="p-2.5 bg-gray-50 border border-gray-200 rounded-xl">
            <span className="text-[10px] text-gray-500 font-medium">PERCLOS (Eye Closure)</span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-sm font-extrabold text-amber-600 font-mono">0.34</span>
              <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-1 rounded">Elevated</span>
            </div>
          </div>

          <div className="p-2.5 bg-gray-50 border border-gray-200 rounded-xl">
            <span className="text-[10px] text-gray-500 font-medium">Blink Rate</span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-sm font-extrabold text-gray-800 font-mono">24</span>
              <span className="text-[10px] text-gray-500">/min</span>
            </div>
          </div>

          <div className="p-2.5 bg-gray-50 border border-gray-200 rounded-xl">
            <span className="text-[10px] text-gray-500 font-medium">Head Pose</span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-sm font-bold text-emerald-700">Normal</span>
              <span className="text-[10px] text-gray-500">(-2°)</span>
            </div>
          </div>
        </div>

        {/* Suggestion card: Nearest rest stop: 4.2 km ahead */}
        <div className="p-2.5 bg-[#E8F5E9] border border-green-200 rounded-xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#1B5E20] text-white flex items-center justify-center">
              <Coffee className="w-3.5 h-3.5" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-[#1B5E20]">Suggested Rest Stop</h5>
              <p className="text-[10px] text-green-800">Highway Café & Fuel • 4.2 km ahead</p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-[#1B5E20]" />
        </div>

        {/* Two Action Buttons: "I'm Alert" (green) | "Find Rest Stop" (outlined) */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <button className="py-2.5 px-3 bg-[#1B5E20] hover:bg-[#154a19] text-white text-xs font-bold rounded-xl shadow-xs flex items-center justify-center gap-1.5 transition-colors">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>I'm Alert</span>
          </button>
          <button className="py-2.5 px-3 border border-gray-300 hover:bg-gray-50 text-gray-800 text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-colors">
            <MapPin className="w-3.5 h-3.5 text-[#1B5E20]" />
            <span>Find Rest Stop</span>
          </button>
        </div>
      </div>

      <BottomTabBar activeTab="drive" />
    </div>
  );
};

import React from 'react';
import { BottomTabBar } from '../components/BottomTabBar';
import {
  AlertOctagon,
  Eye,
  Camera,
  Compass,
  Gauge,
  MapPin,
  AlertTriangle,
  Radio,
  Power
} from 'lucide-react';

export const Screen04_Drive: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col justify-between bg-gray-900 text-white relative select-none">
      {/* Top Bar: Trip Timer + Dashcam Status */}
      <div className="bg-gray-900/95 border-b border-gray-800 px-4 py-2 flex items-center justify-between z-30">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
          <span className="text-[11px] font-mono tracking-widest text-red-400 font-bold">REC</span>
          <span className="text-xs font-mono font-bold text-white ml-2 bg-gray-800 px-2 py-0.5 rounded">
            00:12:34
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[10px] text-emerald-300 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span>ESP32 Dashcam Live</span>
        </div>
      </div>

      {/* Main Split View Area */}
      <div className="flex-1 flex flex-col relative overflow-hidden bg-[#12141A]">
        {/* Top Half: Road Camera Preview with AI Bounding Boxes */}
        <div className="relative h-[210px] w-full bg-gradient-to-b from-sky-900 via-slate-800 to-slate-900 overflow-hidden border-b border-gray-800">
          {/* Simulated Road Horizon & Perspective Lines */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1E293B" />
                <stop offset="60%" stopColor="#334155" />
                <stop offset="100%" stopColor="#475569" />
              </linearGradient>
              <linearGradient id="roadGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1E293B" />
                <stop offset="100%" stopColor="#0F172A" />
              </linearGradient>
            </defs>
            {/* Sky */}
            <rect width="390" height="90" fill="url(#skyGrad)" />
            {/* Distant trees/hills */}
            <path d="M 0 90 Q 60 75 140 85 T 260 80 T 390 90 L 390 90 L 0 90 Z" fill="#14532D" opacity="0.6" />
            {/* Road surface */}
            <polygon points="120,90 270,90 390,210 0,210" fill="url(#roadGrad)" />
            {/* Road borders */}
            <line x1="120" y1="90" x2="0" y2="210" stroke="#FFFFFF" strokeWidth="4" opacity="0.7" />
            <line x1="270" y1="90" x2="390" y2="210" stroke="#FFFFFF" strokeWidth="4" opacity="0.7" />
            {/* Center Dashed Lane Markings */}
            <line x1="195" y1="90" x2="195" y2="110" stroke="#FBBF24" strokeWidth="2.5" opacity="0.9" />
            <line x1="195" y1="125" x2="195" y2="155" stroke="#FBBF24" strokeWidth="3.5" opacity="0.9" />
            <line x1="195" y1="175" x2="195" y2="215" stroke="#FBBF24" strokeWidth="5" opacity="0.9" />
          </svg>

          {/* AI Bounding Box 1: Pothole 82% */}
          <div className="absolute top-[135px] left-[130px] w-24 h-11 border-2 border-emerald-400 bg-emerald-500/15 rounded shadow-sm flex flex-col justify-between p-0.5">
            <div className="flex items-center justify-between">
              <span className="bg-[#1B5E20] text-emerald-200 text-[8px] font-bold font-mono px-1 rounded">
                Pothole 82%
              </span>
              <span className="text-[8px] font-mono text-emerald-300 font-bold">14m</span>
            </div>
            <span className="text-[7px] text-emerald-300 font-mono tracking-tighter">
              [Confidence High]
            </span>
          </div>

          {/* AI Bounding Box 2: Minor Lane Edge */}
          <div className="absolute top-[105px] right-[60px] w-14 h-7 border border-dashed border-amber-400/80 bg-amber-500/10 rounded flex items-center justify-center">
            <span className="text-[7px] text-amber-300 font-mono">Lane Edge</span>
          </div>

          {/* Camera Tag & FPS */}
          <div className="absolute top-2 left-2 flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs text-[9px] font-mono text-gray-300">
            <Camera className="w-3 h-3 text-emerald-400" />
            <span>CAM-01 • 1080p 30FPS</span>
          </div>
          <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs text-[9px] font-mono text-emerald-400">
            AI INFERENCE: 18ms
          </div>
        </div>

        {/* Bottom Half: Driver Monitoring Preview (small) showing face mesh + "Alert" badge */}
        <div className="p-3 bg-[#111827] flex items-center justify-between border-b border-gray-800">
          <div className="flex items-center gap-3">
            {/* Face Mesh Simulation Box */}
            <div className="relative w-16 h-16 rounded-xl bg-gray-950 border border-emerald-500/50 flex items-center justify-center overflow-hidden">
              {/* Stylized Face Contour and Iris points */}
              <svg className="w-12 h-12 text-emerald-400/70" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                {/* Face Oval */}
                <ellipse cx="12" cy="12" rx="7" ry="9" strokeWidth="1.2" strokeDasharray="1,1" />
                {/* Eyes */}
                <circle cx="9.5" cy="10.5" r="1.2" fill="#34D399" />
                <circle cx="14.5" cy="10.5" r="1.2" fill="#34D399" />
                {/* Nose bridge */}
                <path d="M12 11V14L11 15" strokeWidth="1" />
                {/* Mouth */}
                <path d="M10 17Q12 18 14 17" strokeWidth="1.2" />
                {/* Tracking crosshair */}
                <line x1="6" y1="12" x2="7.5" y2="12" strokeWidth="1.5" stroke="#34D399" />
                <line x1="16.5" y1="12" x2="18" y2="12" strokeWidth="1.5" stroke="#34D399" />
              </svg>
              <span className="absolute bottom-0.5 right-1 text-[7px] font-mono text-emerald-400">30Hz</span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white">Driver Monitor</span>
                <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[9px] font-bold">
                  ● Alert
                </span>
              </div>
              <p className="text-[10px] text-gray-400 mt-0.5">
                Eye Gaze: Centered • EAR: 0.28 • Head Pitch: 0°
              </p>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-24 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                  <div className="w-[90%] h-full bg-emerald-500 rounded-full"></div>
                </div>
                <span className="text-[9px] text-gray-400 font-mono">Fatigue: None</span>
              </div>
            </div>
          </div>
        </div>

        {/* Live Metrics Bar: Speed 42 km/h | Trip 8.2 km | Hazards detected: 2 */}
        <div className="grid grid-cols-3 gap-2 p-3 bg-[#1F2937]/90 m-3 rounded-2xl border border-gray-700/80 shadow-inner">
          <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-gray-900/60">
            <span className="text-[10px] text-gray-400 font-medium uppercase">Speed</span>
            <div className="flex items-baseline gap-0.5 mt-0.5">
              <span className="text-xl font-extrabold text-white font-mono">42</span>
              <span className="text-[10px] text-gray-400">km/h</span>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-gray-900/60">
            <span className="text-[10px] text-gray-400 font-medium uppercase">Trip</span>
            <div className="flex items-baseline gap-0.5 mt-0.5">
              <span className="text-xl font-extrabold text-emerald-400 font-mono">8.2</span>
              <span className="text-[10px] text-gray-400">km</span>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-gray-900/60">
            <span className="text-[10px] text-gray-400 font-medium uppercase">Hazards</span>
            <div className="flex items-baseline gap-0.5 mt-0.5">
              <span className="text-xl font-extrabold text-amber-400 font-mono">2</span>
              <span className="text-[10px] text-gray-400">found</span>
            </div>
          </div>
        </div>

        {/* End Trip Button */}
        <div className="px-4 mt-auto mb-3">
          <button className="w-full py-2.5 bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-bold rounded-xl border border-gray-700 flex items-center justify-center gap-2 transition-colors">
            <Power className="w-3.5 h-3.5 text-red-400" />
            <span>End Trip & Save Summary</span>
          </button>
        </div>

        {/* Large Red SOS Button (Bottom-Right, floating, pulsing subtle animation) */}
        <div className="absolute right-4 bottom-14 z-30">
          <button
            className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#B71C1C] to-[#EF5350] text-white flex flex-col items-center justify-center shadow-floating-sos animate-soft-pulse border-2 border-white/80 active:scale-95 transition-transform"
          >
            <AlertOctagon className="w-6 h-6 stroke-[2.5]" />
            <span className="text-[9px] font-black tracking-wider leading-none mt-0.5">
              SOS
            </span>
          </button>
        </div>
      </div>

      <BottomTabBar activeTab="drive" />
    </div>
  );
};

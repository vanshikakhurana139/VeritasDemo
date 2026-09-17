import React, { useState } from 'react';
import { BottomTabBar } from '../components/BottomTabBar';
import { Search, Navigation, Layers, Compass, Check, X, AlertCircle } from 'lucide-react';

export const Screen03_Map: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [confirmed, setConfirmed] = useState<boolean | null>(null);

  const filters = ['All', 'Potholes', 'Construction', 'Blockage', 'Waterlogging'];

  return (
    <div className="flex-1 flex flex-col justify-between bg-white text-[#1A1A1A] relative">
      {/* Top Floating Search Bar */}
      <div className="absolute top-2 left-3 right-3 z-30">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-md border border-gray-200/80 p-1.5 flex items-center gap-2">
          <div className="p-2 text-gray-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            defaultValue="JLN Marg, Jaipur"
            placeholder="Search location..."
            className="flex-1 text-xs bg-transparent focus:outline-none text-gray-800 placeholder-gray-400 font-medium"
          />
          <button className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors">
            <Layers className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Map Canvas (Stylized SVG / Vector Map Area) */}
      <div className="relative flex-1 w-full bg-[#EBF0F5] overflow-hidden">
        {/* Subtle Map Grid Roads & Parks */}
        <svg
          className="absolute inset-0 w-full h-full opacity-70"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Green space / Park */}
          <path d="M-20 60 Q 80 40 140 120 T 260 90 L 220 0 L 0 0 Z" fill="#DFF0D8" opacity="0.8" />
          <path d="M 280 280 Q 340 240 400 320 L 400 450 L 260 420 Z" fill="#DFF0D8" opacity="0.8" />
          
          {/* Water body */}
          <path d="M 0 350 Q 80 320 120 380 T 220 410 L 180 500 L 0 480 Z" fill="#D6EAF8" opacity="0.9" />

          {/* Secondary Road Network */}
          <path d="M 0 160 L 390 190" stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round" />
          <path d="M 50 0 L 110 500" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" />
          <path d="M 270 0 L 290 500" stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round" />
          <path d="M 0 340 L 390 320" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
          <path d="M 120 220 L 390 400" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />

          {/* Primary Highway / JLN Marg */}
          <path
            d="M 220 0 L 200 180 L 170 320 L 140 500"
            stroke="#FFF9E6"
            strokeWidth="16"
            strokeLinecap="round"
          />
          <path
            d="M 220 0 L 200 180 L 170 320 L 140 500"
            stroke="#F5B041"
            strokeWidth="2"
            strokeDasharray="6,6"
            strokeLinecap="round"
          />

          {/* Active Route Line */}
          <path
            d="M 195 210 L 180 260 L 170 320"
            stroke="#1B5E20"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.85"
          />
        </svg>

        {/* Hazard Marker 1: Red dot (Pothole - 200m ahead) */}
        <div className="absolute top-[260px] left-[175px] -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group">
          <div className="relative flex items-center justify-center">
            <span className="absolute w-7 h-7 bg-red-500/30 rounded-full animate-ping"></span>
            <div className="w-6 h-6 rounded-full bg-[#C62828] text-white flex items-center justify-center shadow-lg border-2 border-white text-[11px] font-bold">
              !
            </div>
            {/* Tooltip */}
            <div className="absolute -top-7 whitespace-nowrap bg-[#C62828] text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm">
              Pothole 200m
            </div>
          </div>
        </div>

        {/* Hazard Marker 2: Amber dot (Construction) */}
        <div className="absolute top-[130px] left-[210px] -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="relative flex items-center justify-center">
            <div className="w-5 h-5 rounded-full bg-[#F9A825] text-white flex items-center justify-center shadow-md border-2 border-white text-[10px]">
              🚧
            </div>
            <div className="absolute -bottom-5 whitespace-nowrap bg-white text-gray-800 text-[8px] font-bold px-1 py-0.5 rounded shadow-xs border border-gray-200">
              Work 1.2km
            </div>
          </div>
        </div>

        {/* Hazard Marker 3: Blue dot (Waterlogging) */}
        <div className="absolute top-[380px] left-[150px] -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="relative flex items-center justify-center">
            <div className="w-5 h-5 rounded-full bg-[#1565C0] text-white flex items-center justify-center shadow-md border-2 border-white text-[10px]">
              💧
            </div>
            <div className="absolute -bottom-5 whitespace-nowrap bg-white text-gray-800 text-[8px] font-bold px-1 py-0.5 rounded shadow-xs border border-gray-200">
              Water 2.8km
            </div>
          </div>
        </div>

        {/* User Location: Blue Pulsing Circle */}
        <div className="absolute top-[205px] left-[195px] -translate-x-1/2 -translate-y-1/2 z-25">
          <div className="relative flex items-center justify-center">
            <span className="absolute w-8 h-8 bg-blue-500/40 rounded-full animate-radar"></span>
            <span className="w-4 h-4 rounded-full bg-blue-600 border-2 border-white shadow-md flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
            </span>
          </div>
        </div>

        {/* Floating Map Controls */}
        <div className="absolute right-3 top-16 z-20 flex flex-col gap-2">
          <button className="w-8 h-8 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50">
            <Compass className="w-4 h-4 text-emerald-700" />
          </button>
          <button className="w-8 h-8 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50">
            <Navigation className="w-4 h-4 text-[#1B5E20]" />
          </button>
        </div>

        {/* Filter Chips Horizontal Bar */}
        <div className="absolute bottom-[130px] left-0 right-0 z-20 px-3 flex gap-1.5 overflow-x-auto no-scrollbar">
          {filters.map((chip) => (
            <button
              key={chip}
              onClick={() => setActiveFilter(chip)}
              className={`px-3 py-1 rounded-full text-[11px] font-bold whitespace-nowrap shadow-sm transition-all ${
                activeFilter === chip
                  ? 'bg-[#1B5E20] text-white shadow-md'
                  : 'bg-white/95 text-gray-700 hover:bg-white border border-gray-200'
              }`}
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Bottom Sheet Preview Card (Partially Visible) */}
        <div className="absolute bottom-0 left-0 right-0 z-25 bg-white rounded-t-3xl border-t border-gray-200 shadow-[0_-8px_20px_rgba(0,0,0,0.08)] p-3.5 transition-all">
          <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto mb-2"></div>
          
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#FFEBEE] text-[#C62828] flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                🕳️
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-xs font-bold text-gray-900">Pothole Detected</h4>
                  <span className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 text-[9px] font-bold">
                    82% confidence
                  </span>
                </div>
                <p className="text-[11px] text-gray-500 mt-0.5">
                  200 m ahead • Right lane near Apex Circle
                </p>
              </div>
            </div>
            <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-full border border-red-200">
              Active Hazard
            </span>
          </div>

          {/* Confirm | Not There Buttons */}
          <div className="grid grid-cols-2 gap-2 mt-3">
            <button
              onClick={() => setConfirmed(true)}
              className={`py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition-colors ${
                confirmed === true
                  ? 'bg-emerald-700 text-white'
                  : 'bg-[#1B5E20] hover:bg-[#154a19] text-white'
              }`}
            >
              <Check className="w-3.5 h-3.5" />
              <span>{confirmed === true ? 'Confirmed ✓' : 'Confirm'}</span>
            </button>
            <button
              onClick={() => setConfirmed(false)}
              className={`py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors border ${
                confirmed === false
                  ? 'bg-gray-200 text-gray-800 border-gray-300'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border-gray-200'
              }`}
            >
              <X className="w-3.5 h-3.5" />
              <span>{confirmed === false ? 'Dismissed' : 'Not there'}</span>
            </button>
          </div>
        </div>
      </div>

      <BottomTabBar activeTab="map" />
    </div>
  );
};

import React from 'react';
import { BottomTabBar } from '../components/BottomTabBar';
import {
  CheckCircle2,
  Share2,
  Save,
  Navigation,
  Clock,
  Gauge,
  AlertTriangle,
  Award,
  ChevronRight
} from 'lucide-react';

export const Screen11_TripSummary: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col justify-between bg-white text-[#1A1A1A] select-none">
      <div className="p-4 space-y-3.5 flex-1">
        {/* Top Bar: Trip Complete with Checkmark */}
        <div className="flex items-center justify-between pb-1 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#E8F5E9] text-[#1B5E20] flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
            </div>
            <h2 className="text-base font-bold text-gray-900">Trip Complete</h2>
          </div>
          <span className="text-xs text-gray-500 font-medium">Today, 08:13 PM</span>
        </div>

        {/* Large Circular Safety Score Hero: 87/100 (Green) */}
        <div className="p-4 bg-gradient-to-b from-[#F5F7FA] to-white border border-gray-200 rounded-3xl flex flex-col items-center justify-center text-center shadow-2xs">
          <div className="relative w-28 h-28 flex items-center justify-center mb-2">
            <svg className="w-28 h-28 -rotate-90" viewBox="0 0 36 36">
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="3"
              />
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#1B5E20"
                strokeWidth="3.5"
                strokeDasharray="87, 100"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-black text-[#1B5E20] font-mono leading-none">
                87
              </span>
              <span className="text-[10px] font-bold text-gray-400 mt-1 uppercase">/ 100</span>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E8F5E9] text-[#1B5E20] rounded-full text-xs font-bold">
            <Award className="w-3.5 h-3.5" />
            <span>Smooth & Mindful Driving</span>
          </div>
          <p className="text-[11px] text-gray-500 mt-1">
            Trip score contributes +1.2 pts to your weekly safety rating
          </p>
        </div>

        {/* Trip Stats Grid (4 items) */}
        <div className="grid grid-cols-4 gap-2 text-center">
          <div className="p-2.5 bg-gray-50 border border-gray-200/80 rounded-2xl">
            <span className="text-[9px] text-gray-500 uppercase font-bold">Distance</span>
            <p className="text-xs font-extrabold text-gray-900 font-mono mt-0.5">12.4 km</p>
          </div>
          <div className="p-2.5 bg-gray-50 border border-gray-200/80 rounded-2xl">
            <span className="text-[9px] text-gray-500 uppercase font-bold">Duration</span>
            <p className="text-xs font-extrabold text-gray-900 font-mono mt-0.5">28 min</p>
          </div>
          <div className="p-2.5 bg-gray-50 border border-gray-200/80 rounded-2xl">
            <span className="text-[9px] text-gray-500 uppercase font-bold">Avg Speed</span>
            <p className="text-xs font-extrabold text-gray-900 font-mono mt-0.5">26 km/h</p>
          </div>
          <div className="p-2.5 bg-gray-50 border border-gray-200/80 rounded-2xl">
            <span className="text-[9px] text-gray-500 uppercase font-bold">Hazards</span>
            <p className="text-xs font-extrabold text-amber-600 font-mono mt-0.5">2</p>
          </div>
        </div>

        {/* Events During Trip */}
        <div className="p-3 bg-white border border-gray-200 rounded-2xl space-y-2">
          <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">
            Trip Telemetry Events
          </span>

          <div className="flex items-center justify-between text-xs py-0.5">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-md bg-emerald-100 text-emerald-800 flex items-center justify-center text-[10px] font-bold">
                ✓
              </span>
              <span className="text-gray-800 font-medium">2 hazards detected & mapped</span>
            </div>
            <span className="text-[11px] text-emerald-700 font-semibold">+Community Contrib</span>
          </div>

          <div className="flex items-center justify-between text-xs py-0.5">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-md bg-amber-100 text-amber-800 flex items-center justify-center text-[10px] font-bold">
                ⚠️
              </span>
              <span className="text-gray-800 font-medium">1 harsh braking event</span>
            </div>
            <span className="text-[11px] text-amber-700 font-semibold">-2.0 pts</span>
          </div>

          <div className="flex items-center justify-between text-xs py-0.5">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-md bg-emerald-100 text-emerald-800 flex items-center justify-center text-[10px] font-bold">
                ✓
              </span>
              <span className="text-gray-800 font-medium">0 drowsiness events</span>
            </div>
            <span className="text-[11px] text-emerald-700 font-semibold">100% Alert</span>
          </div>
        </div>

        {/* Small Map Showing Route Trace */}
        <div className="h-20 w-full rounded-2xl bg-[#E8EDF2] border border-gray-200 overflow-hidden relative">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path d="M 20 60 Q 90 20 180 50 T 360 25" fill="none" stroke="#CBD5E1" strokeWidth="6" strokeLinecap="round" />
            <path d="M 20 60 Q 90 20 180 50 T 360 25" fill="none" stroke="#1B5E20" strokeWidth="3.5" strokeLinecap="round" />
            <circle cx="20" cy="60" r="4" fill="#1B5E20" />
            <circle cx="360" cy="25" r="4" fill="#C62828" />
          </svg>
          <div className="absolute bottom-1.5 left-3 text-[10px] font-mono text-gray-600 bg-white/90 px-2 py-0.5 rounded shadow-2xs">
            Malviya Nagar ➔ C-Scheme (12.4 km)
          </div>
        </div>

        {/* Buttons: "Save Trip" (green) | "Share Report" (outlined) */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <button className="py-2.5 px-3 bg-[#1B5E20] hover:bg-[#154a19] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 shadow-xs transition-colors">
            <Save className="w-3.5 h-3.5" />
            <span>Save Trip</span>
          </button>
          <button className="py-2.5 px-3 border border-gray-300 hover:bg-gray-50 text-gray-800 text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-colors">
            <Share2 className="w-3.5 h-3.5 text-[#1B5E20]" />
            <span>Share Report</span>
          </button>
        </div>
      </div>

      <BottomTabBar activeTab="home" />
    </div>
  );
};

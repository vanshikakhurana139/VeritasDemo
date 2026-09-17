import React from 'react';
import { BottomTabBar } from '../components/BottomTabBar';
import {
  Bell,
  ShieldCheck,
  Camera,
  AlertOctagon,
  Navigation,
  MapPin,
  TrendingUp,
  ChevronRight,
  Wifi,
  BatteryCharging,
  AlertTriangle
} from 'lucide-react';

export const Screen02_Home: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col justify-between bg-white text-[#1A1A1A]">
      <div className="p-4 space-y-3.5 flex-1">
        {/* Top bar: Hello, Khushi 👋 + Bell */}
        <div className="flex items-center justify-between pt-1">
          <div>
            <span className="text-[11px] font-medium text-gray-500">Welcome Back</span>
            <h1 className="text-xl font-bold text-[#1A1A1A] tracking-tight">
              Hello, Khushi 👋
            </h1>
          </div>
          <button className="relative p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#C62828] rounded-full ring-2 ring-white"></span>
          </button>
        </div>

        {/* Safety Status Card: Green card with shield icon */}
        <div className="bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] text-white rounded-2xl p-4 shadow-md relative overflow-hidden">
          <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
          <div className="flex items-start justify-between relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <span className="text-[10px] font-semibold tracking-wider uppercase text-emerald-200">
                  SYSTEM READY
                </span>
                <h3 className="text-base font-bold text-white">You are safe</h3>
                <p className="text-xs text-emerald-100 mt-0.5">Stay alert on the road</p>
              </div>
            </div>
            <span className="px-2 py-0.5 bg-white/20 rounded-full text-[10px] font-semibold text-white backdrop-blur-sm">
              Live Shield Active
            </span>
          </div>
        </div>

        {/* Dashcam Status Card */}
        <div className="bg-[#F5F7FA] border border-gray-200/80 rounded-xl p-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-[#1B5E20] shadow-2xs">
              <Camera className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-bold text-gray-800">ESP32 Dashcam Connected</span>
              </div>
              <p className="text-[10px] text-gray-500">Auto-syncing real-time road frames</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1 bg-white rounded-md border border-gray-200 text-xs font-mono font-semibold text-gray-700">
            <BatteryCharging className="w-3.5 h-3.5 text-emerald-600" />
            <span>78%</span>
          </div>
        </div>

        {/* Quick Actions Grid (4 buttons) */}
        <div>
          <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
            Quick Actions
          </h4>
          <div className="grid grid-cols-2 gap-2.5">
            {/* 1. Emergency SOS (red) */}
            <button className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FFEBEE] border border-red-200 hover:bg-red-100 transition-colors text-left group">
              <div className="w-9 h-9 rounded-lg bg-[#C62828] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                <AlertOctagon className="w-5 h-5 stroke-[2.3]" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#C62828] block">Emergency SOS</span>
                <span className="text-[10px] text-red-600/80">Instant Broadcast</span>
              </div>
            </button>

            {/* 2. Plan Route (green) */}
            <button className="flex items-center gap-2.5 p-3 rounded-xl bg-[#E8F5E9] border border-green-200 hover:bg-green-100 transition-colors text-left group">
              <div className="w-9 h-9 rounded-lg bg-[#1B5E20] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                <Navigation className="w-5 h-5 stroke-[2.3]" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#1B5E20] block">Plan Route</span>
                <span className="text-[10px] text-green-700/80">Hazard-free path</span>
              </div>
            </button>

            {/* 3. Report Hazard (amber) */}
            <button className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FFF8E1] border border-amber-200 hover:bg-amber-100 transition-colors text-left group">
              <div className="w-9 h-9 rounded-lg bg-[#F9A825] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                <MapPin className="w-5 h-5 stroke-[2.3]" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#b2760a] block">Report Hazard</span>
                <span className="text-[10px] text-amber-700/80">Tag road danger</span>
              </div>
            </button>

            {/* 4. Driver Safety (blue) */}
            <button className="flex items-center gap-2.5 p-3 rounded-xl bg-[#E3F2FD] border border-blue-200 hover:bg-blue-100 transition-colors text-left group">
              <div className="w-9 h-9 rounded-lg bg-[#1565C0] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                <TrendingUp className="w-5 h-5 stroke-[2.3]" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#1565C0] block">Driver Safety</span>
                <span className="text-[10px] text-blue-700/80">Score & Trends</span>
              </div>
            </button>
          </div>
        </div>

        {/* Nearby Hazards Section */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-xs font-bold text-[#1A1A1A]">
              Nearby Hazards <span className="text-gray-400 font-normal">(3)</span>
            </h4>
            <a href="#hazards" className="text-xs font-semibold text-[#1B5E20] flex items-center gap-0.5 hover:underline">
              <span>View all</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="space-y-2">
            {/* 🕳️ Pothole — 400 m away — red badge */}
            <div className="flex items-center justify-between p-2.5 rounded-xl border border-gray-200 bg-white hover:border-gray-300 transition-colors shadow-2xs">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center text-sm">
                  🕳️
                </div>
                <div>
                  <h5 className="text-xs font-bold text-gray-800">Pothole on right lane</h5>
                  <p className="text-[10px] text-gray-500">400 m away • Tonk Road</p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#FFEBEE] text-[#C62828] border border-red-200">
                High Risk
              </span>
            </div>

            {/* 🚧 Construction — 1.2 km away — amber badge */}
            <div className="flex items-center justify-between p-2.5 rounded-xl border border-gray-200 bg-white hover:border-gray-300 transition-colors shadow-2xs">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center text-sm">
                  🚧
                </div>
                <div>
                  <h5 className="text-xs font-bold text-gray-800">Flyover Lane Narrowing</h5>
                  <p className="text-[10px] text-gray-500">1.2 km away • Pillar 142</p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#FFF8E1] text-[#b2760a] border border-amber-200">
                Moderate
              </span>
            </div>

            {/* 💧 Waterlogging — 2.8 km away — blue badge */}
            <div className="flex items-center justify-between p-2.5 rounded-xl border border-gray-200 bg-white hover:border-gray-300 transition-colors shadow-2xs">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-sm">
                  💧
                </div>
                <div>
                  <h5 className="text-xs font-bold text-gray-800">Underpass Standing Water</h5>
                  <p className="text-[10px] text-gray-500">2.8 km away • Sanganer</p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#E3F2FD] text-[#1565C0] border border-blue-200">
                Caution
              </span>
            </div>
          </div>
        </div>

        {/* Driver Safety Score Card: Circular gauge 87/100 + "Good" label */}
        <div className="border border-gray-200 rounded-xl p-3.5 bg-white flex items-center justify-between shadow-2xs">
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
              Safety Performance
            </span>
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-bold text-gray-800">Driver Safety Score</h4>
              <span className="px-2 py-0.5 rounded-md bg-[#E8F5E9] text-[#1B5E20] font-bold text-[10px]">
                Good
              </span>
            </div>
            <p className="text-[10px] text-gray-500">
              Top 15% of mindful drivers this week
            </p>
          </div>

          {/* SVG Circular Gauge */}
          <div className="relative w-14 h-14 flex items-center justify-center">
            <svg className="w-14 h-14 -rotate-90" viewBox="0 0 36 36">
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="3.2"
              />
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#1B5E20"
                strokeWidth="3.2"
                strokeDasharray="87, 100"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-xs font-extrabold text-[#1B5E20] font-mono leading-none">87</span>
              <span className="text-[8px] font-bold text-gray-400 leading-none mt-0.5">/100</span>
            </div>
          </div>
        </div>
      </div>

      <BottomTabBar activeTab="home" />
    </div>
  );
};

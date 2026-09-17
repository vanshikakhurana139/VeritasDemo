import React from 'react';
import { BottomTabBar } from '../components/BottomTabBar';
import { mockTrips } from '../mockData/trips';
import {
  TrendingUp,
  ShieldCheck,
  ChevronRight,
  AlertTriangle,
  Zap,
  Gauge,
  Calendar,
  FileText
} from 'lucide-react';

export const Screen12_DriverSafety: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col justify-between bg-white text-[#1A1A1A] select-none">
      <div className="p-4 space-y-3.5 flex-1">
        {/* Top Bar: Driver Safety */}
        <div className="flex items-center justify-between pb-1 border-b border-gray-100">
          <div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              Analytics & Telemetry
            </span>
            <h2 className="text-base font-bold text-gray-900">Driver Safety Score</h2>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-[#E8F5E9] text-[#1B5E20] text-[10px] font-bold">
            Grade: A-
          </span>
        </div>

        {/* Large Circular Gauge: 87/100 */}
        <div className="p-4 bg-gradient-to-b from-[#F5F7FA] to-white border border-gray-200 rounded-3xl flex items-center justify-between shadow-2xs">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              Current Overall Score
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-black text-[#1B5E20] font-mono">87</span>
              <span className="text-xs font-bold text-gray-500">/ 100</span>
            </div>
            <p className="text-xs font-semibold text-emerald-800">
              Ranked in top 15% in Jaipur
            </p>
            <p className="text-[10px] text-gray-500">
              Based on 48 trips & 684 km logged
            </p>
          </div>

          <div className="relative w-20 h-20 flex items-center justify-center">
            <svg className="w-20 h-20 -rotate-90" viewBox="0 0 36 36">
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="3.4"
              />
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#1B5E20"
                strokeWidth="3.4"
                strokeDasharray="87, 100"
                strokeLinecap="round"
              />
            </svg>
            <ShieldCheck className="w-8 h-8 text-[#1B5E20] absolute" />
          </div>
        </div>

        {/* Score Breakdown Cards (4 items) */}
        <div>
          <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
            Safety Metric Breakdown
          </h4>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-2.5 bg-gray-50 border border-gray-200/90 rounded-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-gray-800">Harsh braking</span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                  Good
                </span>
              </div>
              <p className="text-[10px] text-gray-500 mt-1">2 events this week</p>
            </div>

            <div className="p-2.5 bg-gray-50 border border-gray-200/90 rounded-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-gray-800">Harsh accel</span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                  Good
                </span>
              </div>
              <p className="text-[10px] text-gray-500 mt-1">1 event this week</p>
            </div>

            <div className="p-2.5 bg-gray-50 border border-gray-200/90 rounded-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-gray-800">Overspeeding</span>
                <span className="text-[10px] font-bold text-[#1B5E20] bg-green-100 px-1.5 py-0.5 rounded">
                  Excellent
                </span>
              </div>
              <p className="text-[10px] text-gray-500 mt-1">0 events logged</p>
            </div>

            <div className="p-2.5 bg-gray-50 border border-gray-200/90 rounded-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-gray-800">Drowsiness</span>
                <span className="text-[10px] font-bold text-[#1B5E20] bg-green-100 px-1.5 py-0.5 rounded">
                  Excellent
                </span>
              </div>
              <p className="text-[10px] text-gray-500 mt-1">0 microsleep events</p>
            </div>
          </div>
        </div>

        {/* Weekly Trend (SVG Line Chart) */}
        <div className="p-3 bg-white border border-gray-200 rounded-2xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-gray-900">Weekly Score Trend</span>
            <span className="text-xs font-bold text-[#1B5E20] flex items-center gap-0.5">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>+3.4% vs last week</span>
            </span>
          </div>
          {/* SVG Sparkline Graph */}
          <div className="h-16 w-full relative">
            <svg className="w-full h-full" viewBox="0 0 320 60" fill="none">
              <defs>
                <linearGradient id="trendGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1B5E20" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#1B5E20" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M 10 45 L 60 40 L 110 32 L 160 38 L 210 22 L 260 25 L 310 14"
                fill="none"
                stroke="#1B5E20"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M 10 45 L 60 40 L 110 32 L 160 38 L 210 22 L 260 25 L 310 14 L 310 60 L 10 60 Z"
                fill="url(#trendGrad)"
              />
              {/* Plot points */}
              <circle cx="10" cy="45" r="3" fill="#1B5E20" />
              <circle cx="60" cy="40" r="3" fill="#1B5E20" />
              <circle cx="110" cy="32" r="3" fill="#1B5E20" />
              <circle cx="160" cy="38" r="3" fill="#1B5E20" />
              <circle cx="210" cy="22" r="3" fill="#1B5E20" />
              <circle cx="260" cy="25" r="3" fill="#1B5E20" />
              <circle cx="310" cy="14" r="4" fill="#1B5E20" stroke="#FFF" strokeWidth="1.5" />
            </svg>
            <div className="flex justify-between text-[9px] text-gray-400 font-mono mt-1 px-1">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span className="text-[#1B5E20] font-bold">Sun (87)</span>
            </div>
          </div>
        </div>

        {/* Trip History List (3 items) */}
        <div>
          <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
            Recent Trips
          </h4>
          <div className="space-y-1.5">
            {mockTrips.map((trip) => (
              <div
                key={trip.id}
                className="p-2.5 bg-gray-50 border border-gray-200/80 rounded-xl flex items-center justify-between text-xs"
              >
                <div>
                  <h5 className="font-bold text-gray-800">{trip.title}</h5>
                  <p className="text-[10px] text-gray-500">
                    {trip.date} • {trip.distance} ({trip.duration})
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded-md font-mono font-bold bg-[#E8F5E9] text-[#1B5E20] text-xs">
                    {trip.safetyScore}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* "View detailed report" Button */}
        <button className="w-full py-2.5 bg-[#1B5E20] hover:bg-[#154a19] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 shadow-xs transition-colors">
          <FileText className="w-3.5 h-3.5" />
          <span>View Detailed Telemetry Report</span>
        </button>
      </div>

      <BottomTabBar activeTab="profile" />
    </div>
  );
};

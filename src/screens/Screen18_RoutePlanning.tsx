import React, { useState } from 'react';
import { BottomTabBar } from '../components/BottomTabBar';
import {
  Navigation,
  MapPin,
  Sparkles,
  ShieldCheck,
  Clock,
  ArrowRight,
  AlertTriangle,
  Compass,
  CornerDownRight
} from 'lucide-react';

export const Screen18_RoutePlanning: React.FC = () => {
  const [selectedRoute, setSelectedRoute] = useState(1);
  const [destination, setDestination] = useState('C-Scheme Business District, Jaipur');

  const routes = [
    {
      id: 1,
      name: 'Via JLN Marg & Elevated Way',
      duration: '28 min',
      distance: '12 km',
      hazards: 2,
      isRecommended: true,
      tag: 'FASTEST & SAFER',
      hazardNote: '2 minor potholes mapped'
    },
    {
      id: 2,
      name: 'Via Tonk Road Bypass',
      duration: '32 min',
      distance: '14 km',
      hazards: 0,
      isRecommended: false,
      tag: 'ZERO HAZARDS',
      hazardNote: '100% clean road profile'
    },
    {
      id: 3,
      name: 'Via Sanganer Inner Ring',
      duration: '35 min',
      distance: '15 km',
      hazards: 4,
      isRecommended: false,
      tag: 'CONGESTED',
      hazardNote: '4 hazards • Waterlogging risk'
    }
  ];

  return (
    <div className="flex-1 flex flex-col justify-between bg-white text-[#1A1A1A] select-none">
      <div className="p-4 space-y-3.5 flex-1 overflow-y-auto">
        {/* Top Bar: Plan Route */}
        <div className="flex items-center justify-between pb-1 border-b border-gray-100">
          <div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              VERITAS Safety Nav
            </span>
            <h2 className="text-base font-bold text-gray-900">Plan Safe Route</h2>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-[#E8F5E9] text-[#1B5E20] text-[10px] font-bold">
            Hazard-Aware Routing
          </span>
        </div>

        {/* Origin / Destination Input Card */}
        <div className="p-3 bg-gray-50 border border-gray-200 rounded-2xl relative space-y-2">
          {/* Visual connecting line */}
          <div className="absolute left-[26px] top-7 bottom-7 w-0.5 bg-gray-300 border-dashed z-0"></div>

          {/* Origin */}
          <div className="flex items-center gap-2.5 relative z-10">
            <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            </div>
            <div className="flex-1">
              <span className="text-[10px] text-gray-400 uppercase font-semibold block">
                Origin
              </span>
              <input
                type="text"
                readOnly
                defaultValue="Current Location (Malviya Nagar)"
                className="w-full text-xs font-semibold text-gray-800 bg-transparent focus:outline-none"
              />
            </div>
          </div>

          <div className="border-t border-gray-200/80"></div>

          {/* Destination */}
          <div className="flex items-center gap-2.5 relative z-10">
            <div className="w-5 h-5 rounded-full bg-[#C62828] text-white flex items-center justify-center text-xs">
              <MapPin className="w-3 h-3" />
            </div>
            <div className="flex-1">
              <span className="text-[10px] text-gray-400 uppercase font-semibold block">
                Destination
              </span>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Enter destination"
                className="w-full text-xs font-semibold text-gray-900 bg-transparent focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Route Options (3 Cards) */}
        <div className="space-y-2.5">
          <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider">
            Available AI Routes
          </label>

          {routes.map((rt) => {
            const isSelected = selectedRoute === rt.id;

            return (
              <div
                key={rt.id}
                onClick={() => setSelectedRoute(rt.id)}
                className={`p-3.5 rounded-2xl border-2 transition-all cursor-pointer relative ${
                  isSelected
                    ? 'border-[#1B5E20] bg-white shadow-md'
                    : 'border-gray-200 bg-gray-50/70 hover:bg-white'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs font-bold text-gray-900">{rt.name}</h4>
                      {rt.isRecommended && (
                        <span className="inline-flex items-center gap-0.5 px-2 py-0.5 bg-[#E8F5E9] text-[#1B5E20] text-[9px] font-black rounded-full border border-green-300">
                          <Sparkles className="w-2.5 h-2.5" />
                          RECOMMENDED
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2.5 mt-1.5">
                      <span className="text-sm font-black text-gray-900 font-mono">
                        {rt.duration}
                      </span>
                      <span className="text-xs text-gray-500 font-medium">• {rt.distance}</span>
                      <span className="text-gray-300">•</span>
                      <span
                        className={`text-xs font-bold ${
                          rt.hazards === 0
                            ? 'text-emerald-700'
                            : rt.hazards <= 2
                            ? 'text-amber-700'
                            : 'text-red-700'
                        }`}
                      >
                        {rt.hazards} hazards
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        isSelected ? 'border-[#1B5E20] bg-[#1B5E20]' : 'border-gray-300'
                      }`}
                    >
                      {isSelected && <div className="w-2 h-2 rounded-full bg-white"></div>}
                    </div>
                  </div>
                </div>

                <div className="mt-2 text-[10px] text-gray-500 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                  <span>{rt.hazardNote}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Route Preview Profile */}
        <div className="p-3 bg-[#E8F5E9] rounded-2xl border border-green-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#1B5E20]" />
            <div>
              <h5 className="text-xs font-bold text-[#1B5E20]">Dynamic Hazard Mitigation Active</h5>
              <p className="text-[10px] text-green-800">Route avoids 2 active waterlogged underpasses</p>
            </div>
          </div>
        </div>

        {/* Start Navigation Button (green, full-width) */}
        <button className="w-full py-3 bg-[#1B5E20] hover:bg-[#154a19] text-white text-xs font-bold rounded-xl shadow-md flex items-center justify-center gap-2 transition-colors">
          <Navigation className="w-4 h-4 stroke-[2.3]" />
          <span>Start Navigation (Route {selectedRoute})</span>
        </button>
      </div>

      <BottomTabBar activeTab="map" />
    </div>
  );
};

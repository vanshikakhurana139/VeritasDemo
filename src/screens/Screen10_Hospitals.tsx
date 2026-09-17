import React, { useState } from 'react';
import { BottomTabBar } from '../components/BottomTabBar';
import {
  Navigation,
  Phone,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Clock,
  Sparkles,
  Award,
  Bed,
  Info
} from 'lucide-react';

export const Screen10_Hospitals: React.FC = () => {
  const [selectedInjury, setSelectedInjury] = useState('Head');
  const [expandedWhy, setExpandedWhy] = useState(false);

  const injuryTypes = ['Head', 'Chest', 'Fracture', 'Burns', 'Other'];

  return (
    <div className="flex-1 flex flex-col justify-between bg-white text-[#1A1A1A] select-none">
      <div className="p-4 space-y-3.5 flex-1">
        {/* Top Bar */}
        <div className="pb-1 border-b border-gray-100 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              Emergency Matching
            </span>
            <h2 className="text-base font-bold text-gray-900">Recommended Hospitals</h2>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-[#1B5E20] text-[10px] font-bold">
            Live ICU Beds Sync
          </span>
        </div>

        {/* Injury Type Selector Chips */}
        <div>
          <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
            Select Traumatic Injury Type:
          </label>
          <div className="flex gap-1.5 overflow-x-auto no-scrollbar pb-0.5">
            {injuryTypes.map((injury) => (
              <button
                key={injury}
                onClick={() => setSelectedInjury(injury)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedInjury === injury
                    ? 'bg-[#1B5E20] text-white shadow-sm'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {injury}
              </button>
            ))}
          </div>
        </div>

        {/* Hospital Cards List */}
        <div className="space-y-3">
          {/* 1. Sewai Hospital — Best Match (green badge) */}
          <div className="rounded-2xl border-2 border-[#1B5E20] bg-white p-3.5 shadow-md relative overflow-hidden">
            {/* Best Match Banner */}
            <div className="flex items-center justify-between mb-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#E8F5E9] text-[#1B5E20] text-[10px] font-extrabold border border-green-300">
                <Sparkles className="w-3 h-3" />
                <span>BEST MATCH</span>
              </span>
              <div className="flex items-center gap-1 text-xs font-bold text-[#1B5E20]">
                <Clock className="w-3.5 h-3.5" />
                <span>8 min (2.4 km)</span>
              </div>
            </div>

            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-sm font-bold text-gray-900">Sewai Hospital</h3>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-xs font-semibold text-emerald-800">
                    Trauma Level 2
                  </span>
                  <span className="text-gray-300">•</span>
                  <span className="text-xs text-gray-600 font-medium">
                    Neurosurgery
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-2.5 flex items-center gap-3 text-[11px] text-gray-600 bg-gray-50 p-2 rounded-xl">
              <div className="flex items-center gap-1 font-semibold text-emerald-700">
                <Bed className="w-3.5 h-3.5" />
                <span>6 ICU Beds Ready</span>
              </div>
              <span>•</span>
              <span>Neuro Trauma OT on standby</span>
            </div>

            {/* Navigate | Call Buttons */}
            <div className="grid grid-cols-2 gap-2 mt-3">
              <button className="py-2 px-3 bg-[#1B5E20] hover:bg-[#154a19] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 shadow-xs transition-colors">
                <Navigation className="w-3.5 h-3.5" />
                <span>Navigate (8m)</span>
              </button>
              <button className="py-2 px-3 border border-gray-300 hover:bg-gray-50 text-gray-800 text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#1B5E20]" />
                <span>Call Emergency</span>
              </button>
            </div>
          </div>

          {/* 2. City Hospital — Trauma Level 3 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-3.5 shadow-2xs hover:border-gray-300 transition-all">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold text-gray-900">City Hospital</span>
              <span className="text-xs font-bold text-gray-600">14 min (4.8 km)</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <span className="font-semibold text-gray-800">Trauma Level 3</span>
              <span>•</span>
              <span>Orthopedics & General Trauma</span>
            </div>
            <div className="mt-2 text-[10px] text-gray-500">
              4 emergency beds available • No dedicated neurosurgery
            </div>
          </div>

          {/* 3. Apex Medical Centre — Trauma Level 4 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-3.5 shadow-2xs hover:border-gray-300 transition-all">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold text-gray-900">Apex Medical Centre</span>
              <span className="text-xs font-bold text-gray-600">18 min (6.7 km)</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <span className="font-semibold text-gray-800">Trauma Level 4</span>
              <span>•</span>
              <span>General Resuscitation & First Aid</span>
            </div>
            <div className="mt-2 text-[10px] text-gray-500">
              Basic emergency stabilisation unit
            </div>
          </div>
        </div>

        {/* Bottom Expandable: "Why these hospitals?" */}
        <div className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50">
          <button
            onClick={() => setExpandedWhy(!expandedWhy)}
            className="w-full p-3 flex items-center justify-between text-xs font-bold text-gray-800 hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center gap-2">
              <Info className="w-3.5 h-3.5 text-[#1B5E20]" />
              <span>Why these hospitals?</span>
            </div>
            {expandedWhy ? (
              <ChevronUp className="w-4 h-4 text-gray-500" />
            ) : (
              <ChevronDown className="w-4 h-4 text-gray-500" />
            )}
          </button>
          {expandedWhy && (
            <div className="px-3 pb-3 text-xs text-gray-600 space-y-1.5 border-t border-gray-200/80 pt-2 bg-white">
              <p>
                VERITAS AI ranks hospitals using three weighted emergency metrics:
              </p>
              <ul className="list-disc pl-4 space-y-1 text-[11px]">
                <li>Specialization match for selected injury (Neurosurgery for Head)</li>
                <li>Live traffic-adjusted ETA and distance calculation</li>
                <li>Verified on-call ICU and trauma surgeon capacity</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <BottomTabBar activeTab="alerts" />
    </div>
  );
};

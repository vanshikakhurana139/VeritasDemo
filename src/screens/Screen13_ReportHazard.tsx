import React, { useState } from 'react';
import { BottomTabBar } from '../components/BottomTabBar';
import {
  MapPin,
  Camera,
  Plus,
  Send,
  AlertOctagon,
  ShieldCheck,
  CheckCircle,
  Sliders,
  Compass
} from 'lucide-react';

export const Screen13_ReportHazard: React.FC = () => {
  const [selectedType, setSelectedType] = useState('Pothole');
  const [useCurrentLoc, setUseCurrentLoc] = useState(true);
  const [severityIndex, setSeverityIndex] = useState(2); // 0: Low, 1: Moderate, 2: Medium, 3: High, 4: Critical
  const [description, setDescription] = useState('Deep crater in right lane right after the underpass ramp.');
  const [submitted, setSubmitted] = useState(false);

  const hazardTypes = [
    { label: 'Pothole', icon: '🕳️' },
    { label: 'Construction', icon: '🚧' },
    { label: 'Blockage', icon: '⛔' },
    { label: 'Waterlogging', icon: '💧' },
    { label: 'Accident', icon: '💥' },
    { label: 'Other', icon: '⚠️' }
  ];

  const severityLabels = ['Low', 'Moderate', 'Medium', 'High', 'Critical'];
  const severityColors = ['text-emerald-700', 'text-lime-700', 'text-amber-700', 'text-orange-700', 'text-red-700'];

  return (
    <div className="flex-1 flex flex-col justify-between bg-white text-[#1A1A1A] select-none">
      <div className="p-4 space-y-3.5 flex-1 overflow-y-auto">
        {/* Top Bar: Report Hazard */}
        <div className="flex items-center justify-between pb-1 border-b border-gray-100">
          <div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              Community Shield
            </span>
            <h2 className="text-base font-bold text-gray-900">Report Hazard</h2>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-[#1B5E20] text-[10px] font-bold">
            GPS Verified
          </span>
        </div>

        {/* Hazard Type Grid (6 icons) */}
        <div>
          <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">
            Select Hazard Category
          </label>
          <div className="grid grid-cols-3 gap-2">
            {hazardTypes.map((item) => (
              <button
                key={item.label}
                onClick={() => setSelectedType(item.label)}
                className={`p-2.5 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-1 ${
                  selectedType === item.label
                    ? 'border-[#1B5E20] bg-[#E8F5E9] shadow-xs'
                    : 'border-gray-200 bg-white hover:bg-gray-50'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span
                  className={`text-[11px] font-bold ${
                    selectedType === item.label ? 'text-[#1B5E20]' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Location Input with Toggle */}
        <div className="p-3 bg-gray-50 border border-gray-200 rounded-2xl space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-gray-700 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#1B5E20]" />
              <span>Location Coordinates</span>
            </span>
            <label className="flex items-center gap-1.5 cursor-pointer">
              <span className="text-[10px] font-semibold text-gray-600">Current GPS</span>
              <input
                type="checkbox"
                checked={useCurrentLoc}
                onChange={(e) => setUseCurrentLoc(e.target.checked)}
                className="w-3.5 h-3.5 accent-[#1B5E20] rounded"
              />
            </label>
          </div>
          <input
            type="text"
            readOnly={useCurrentLoc}
            defaultValue="26.4031° N, 75.7915° E (JLN Marg, Jaipur)"
            className="w-full px-3 py-2 text-xs font-mono font-medium bg-white border border-gray-200 rounded-xl text-gray-800 focus:outline-none"
          />
        </div>

        {/* Photo Upload: 2 Placeholder Boxes with + Icon */}
        <div>
          <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">
            Attach Dashcam / Camera Photos (2 max)
          </label>
          <div className="grid grid-cols-2 gap-2.5">
            {/* Box 1: Auto-snapped dashcam frame */}
            <div className="h-24 rounded-2xl border-2 border-dashed border-[#1B5E20]/50 bg-[#E8F5E9]/50 flex flex-col items-center justify-center p-2 text-center cursor-pointer relative overflow-hidden group">
              <div className="w-8 h-8 rounded-full bg-[#1B5E20] text-white flex items-center justify-center shadow-xs">
                <Camera className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold text-[#1B5E20] mt-1">
                Dashcam Snap #1
              </span>
              <span className="text-[8px] text-gray-500 font-mono">1080p Auto-captured</span>
            </div>

            {/* Box 2: Secondary / Manual + */}
            <div className="h-24 rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 flex flex-col items-center justify-center p-2 text-center cursor-pointer transition-colors">
              <div className="w-8 h-8 rounded-full bg-white border border-gray-300 text-gray-600 flex items-center justify-center shadow-2xs">
                <Plus className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold text-gray-700 mt-1">
                Add Photo
              </span>
              <span className="text-[8px] text-gray-400">Tap to upload</span>
            </div>
          </div>
        </div>

        {/* Description Textarea */}
        <div>
          <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
            Hazard Description
          </label>
          <textarea
            rows={2}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe size, lane position, or water depth..."
            className="w-full p-2.5 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#1B5E20] text-gray-800"
          ></textarea>
        </div>

        {/* Severity Slider: Low <-> Critical (at Medium) */}
        <div className="p-3 bg-gray-50 border border-gray-200 rounded-2xl space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-gray-700">Severity Assessment:</span>
            <span className={`text-xs font-black uppercase ${severityColors[severityIndex]}`}>
              {severityLabels[severityIndex]}
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="4"
            step="1"
            value={severityIndex}
            onChange={(e) => setSeverityIndex(Number(e.target.value))}
            className="w-full accent-[#1B5E20] cursor-pointer"
          />
          <div className="flex justify-between text-[9px] font-bold text-gray-400 uppercase">
            <span>Low</span>
            <span>Moderate</span>
            <span className="text-[#1B5E20]">Medium</span>
            <span>High</span>
            <span>Critical</span>
          </div>
        </div>

        {/* Submit Report Button (green, full-width) */}
        <button
          onClick={() => setSubmitted(true)}
          className={`w-full py-3 text-white text-xs font-bold rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-colors ${
            submitted ? 'bg-emerald-800' : 'bg-[#1B5E20] hover:bg-[#154a19]'
          }`}
        >
          {submitted ? (
            <>
              <CheckCircle className="w-4 h-4 text-white" />
              <span>Report Broadcast to Cloud & BLE Mesh ✓</span>
            </>
          ) : (
            <>
              <Send className="w-3.5 h-3.5" />
              <span>Submit Report (+10 Safety Points)</span>
            </>
          )}
        </button>
      </div>

      <BottomTabBar activeTab="map" />
    </div>
  );
};

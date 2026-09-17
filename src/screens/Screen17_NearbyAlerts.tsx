import React, { useState } from 'react';
import { BottomTabBar } from '../components/BottomTabBar';
import { mockAlerts, AlertItem } from '../mockData/alerts';
import { Check, X, BellRing, Filter, AlertTriangle, Clock, MapPin, Sparkles } from 'lucide-react';

export const Screen17_NearbyAlerts: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Hazards' | 'Incidents' | 'Traffic'>('All');
  const [votedMap, setVotedMap] = useState<Record<string, 'confirm' | 'dismiss'>>({});

  const filterTabs = ['All', 'Hazards', 'Incidents', 'Traffic'] as const;

  const filteredAlerts = mockAlerts.filter((a) => {
    if (activeTab === 'All') return true;
    return a.category === activeTab;
  });

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'Pothole':
        return '🔴 🕳️';
      case 'Construction':
        return '🟠 🚧';
      case 'Accident':
        return '🔴 💥';
      case 'Waterlogging':
        return '💧 🌊';
      default:
        return '⚠️ 🚗';
    }
  };

  const handleVote = (id: string, action: 'confirm' | 'dismiss') => {
    setVotedMap((prev) => ({ ...prev, [id]: action }));
  };

  return (
    <div className="flex-1 flex flex-col justify-between bg-white text-[#1A1A1A] select-none">
      <div className="p-4 space-y-3.5 flex-1 overflow-y-auto">
        {/* Top Bar */}
        <div className="flex items-center justify-between pb-1 border-b border-gray-100">
          <div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              Real-time Feed
            </span>
            <h2 className="text-base font-bold text-gray-900">Alerts Near You</h2>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-[#E8F5E9] text-[#1B5E20] text-[10px] font-bold">
            Live BLE & Cloud Mesh
          </span>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-1.5 p-1 bg-gray-100 rounded-xl">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
                activeTab === tab
                  ? 'bg-white text-[#1B5E20] shadow-2xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Alert Cards Vertical List */}
        <div className="space-y-2.5">
          {filteredAlerts.map((alert) => {
            const vote = votedMap[alert.id];

            return (
              <div
                key={alert.id}
                className="p-3.5 bg-white border border-gray-200 rounded-2xl shadow-2xs hover:border-gray-300 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-2.5">
                    <span className="text-base mt-0.5">{getAlertIcon(alert.type)}</span>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-xs font-bold text-gray-900">{alert.type}</h4>
                        <span className="text-gray-300">•</span>
                        <span className="text-xs font-bold text-[#1B5E20]">
                          {alert.distance}
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-500 mt-0.5">{alert.location}</p>
                    </div>
                  </div>

                  <span
                    className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                      alert.confidence === 'high'
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {alert.confidence} confidence
                  </span>
                </div>

                <div className="flex items-center justify-between text-[10px] text-gray-400 mt-2">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{alert.timestamp}</span>
                  </span>
                  <span>{alert.confirmedCount} drivers verified</span>
                </div>

                {/* Confirm | Not There Action Buttons */}
                <div className="grid grid-cols-2 gap-2 mt-3 pt-2 border-t border-gray-100">
                  <button
                    onClick={() => handleVote(alert.id, 'confirm')}
                    className={`py-1.5 px-2 text-[11px] font-bold rounded-xl flex items-center justify-center gap-1.5 transition-colors ${
                      vote === 'confirm'
                        ? 'bg-emerald-800 text-white'
                        : 'bg-[#1B5E20] hover:bg-[#154a19] text-white'
                    }`}
                  >
                    <Check className="w-3 h-3" />
                    <span>{vote === 'confirm' ? 'Confirmed ✓' : 'Confirm'}</span>
                  </button>

                  <button
                    onClick={() => handleVote(alert.id, 'dismiss')}
                    className={`py-1.5 px-2 text-[11px] font-bold rounded-xl flex items-center justify-center gap-1.5 transition-colors border ${
                      vote === 'dismiss'
                        ? 'bg-gray-300 text-gray-800 border-gray-400'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border-gray-200'
                    }`}
                  >
                    <X className="w-3 h-3" />
                    <span>{vote === 'dismiss' ? 'Cleared' : 'Not there'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <BottomTabBar activeTab="alerts" />
    </div>
  );
};

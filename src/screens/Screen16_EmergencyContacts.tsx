import React, { useState } from 'react';
import { BottomTabBar } from '../components/BottomTabBar';
import { mockContacts, ContactItem } from '../mockData/contacts';
import { Search, Phone, Navigation, Shield, HeartPulse, Flame, Siren, Droplets } from 'lucide-react';

export const Screen16_EmergencyContacts: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filterByCategory = (category: string) =>
    mockContacts.filter(
      (c) =>
        c.category === category &&
        (c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          c.phone.includes(searchTerm))
    );

  const categories = [
    { key: 'Ambulance', label: '🚑 Ambulance Service', icon: HeartPulse, color: 'text-red-600' },
    { key: 'Fire', label: '🔥 Fire Department', icon: Flame, color: 'text-orange-600' },
    { key: 'Hospitals', label: '🏥 Hospitals & Trauma Centers', icon: HeartPulse, color: 'text-emerald-700' },
    { key: 'Police', label: '🚓 Police Dispatch', icon: Siren, color: 'text-blue-700' },
    { key: 'Blood Banks', label: '🩸 24/7 Blood Banks', icon: Droplets, color: 'text-rose-600' }
  ];

  return (
    <div className="flex-1 flex flex-col justify-between bg-white text-[#1A1A1A] select-none">
      <div className="p-4 space-y-3.5 flex-1 overflow-y-auto">
        {/* Top Bar */}
        <div className="flex items-center justify-between pb-1 border-b border-gray-100">
          <div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              Emergency Directory
            </span>
            <h2 className="text-base font-bold text-gray-900">Emergency Contacts</h2>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-slate-900 text-white text-[10px] font-mono font-bold flex items-center gap-1 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Offline</span>
          </span>
        </div>

        {/* Search Bar */}
        <div className="relative flex items-center">
          <div className="absolute left-3 text-gray-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search service, hospital, or city precinct..."
            className="w-full pl-9 pr-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#1B5E20] placeholder-gray-400"
          />
        </div>

        {/* Categorized Sections */}
        <div className="space-y-4">
          {categories.map((cat) => {
            const list = filterByCategory(cat.key);
            if (list.length === 0) return null;

            return (
              <div key={cat.key} className="space-y-2">
                <h3 className="text-xs font-bold text-gray-800 flex items-center gap-1.5">
                  <span>{cat.label}</span>
                  <span className="text-[10px] text-gray-400 font-normal">({list.length})</span>
                </h3>

                <div className="space-y-2">
                  {list.map((item) => (
                    <div
                      key={item.id}
                      className="p-3 bg-white border border-gray-200/90 rounded-2xl shadow-2xs hover:border-gray-300 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-xs font-bold text-gray-900 leading-snug">
                            {item.name}
                          </h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs font-mono font-bold text-[#1B5E20]">
                              {item.phone}
                            </span>
                            {item.distance && (
                              <>
                                <span className="text-gray-300">•</span>
                                <span className="text-[10px] text-gray-500">{item.distance}</span>
                              </>
                            )}
                          </div>
                        </div>

                        {item.badge && (
                          <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-gray-100 text-gray-700">
                            {item.badge}
                          </span>
                        )}
                      </div>

                      {/* Action Buttons: Call + Navigate */}
                      <div className="grid grid-cols-2 gap-2 mt-2.5 pt-2 border-t border-gray-100">
                        <button className="py-1.5 px-2 bg-[#1B5E20] hover:bg-[#154a19] text-white text-[11px] font-bold rounded-xl flex items-center justify-center gap-1.5 transition-colors">
                          <Phone className="w-3 h-3" />
                          <span>Call {item.phone}</span>
                        </button>
                        <button className="py-1.5 px-2 border border-gray-200 hover:bg-gray-50 text-gray-700 text-[11px] font-bold rounded-xl flex items-center justify-center gap-1.5 transition-colors">
                          <Navigation className="w-3 h-3 text-[#1B5E20]" />
                          <span>Directions</span>
                        </button>
                      </div>
                    </div>
                  ))}
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

import React, { useState } from 'react';
import { BottomTabBar } from '../components/BottomTabBar';
import { mockUser } from '../mockData/user';
import {
  Camera,
  Users,
  Globe,
  Sliders,
  Lock,
  Cpu,
  Bell,
  Info,
  LogOut,
  ChevronRight,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';

export const Screen19_Profile: React.FC = () => {
  const [federatedLearning, setFederatedLearning] = useState(true);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="flex-1 flex flex-col justify-between bg-white text-[#1A1A1A] select-none">
      <div className="p-4 space-y-3.5 flex-1 overflow-y-auto">
        {/* Top Bar: Profile */}
        <div className="flex items-center justify-between pb-1 border-b border-gray-100">
          <div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              Account
            </span>
            <h2 className="text-base font-bold text-gray-900">Profile & Settings</h2>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-[#E8F5E9] text-[#1B5E20] text-[10px] font-bold">
            Verified Driver
          </span>
        </div>

        {/* User Card: Avatar + Khushi Sharma + email */}
        <div className="p-3.5 bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-3xl flex items-center gap-3.5 shadow-2xs">
          <div className="relative">
            <img
              src={mockUser.avatar}
              alt={mockUser.name}
              className="w-14 h-14 rounded-2xl object-cover border-2 border-white shadow-sm"
            />
            <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-[8px] text-white font-bold">
              ✓
            </span>
          </div>

          <div className="flex-1">
            <h3 className="text-sm font-bold text-gray-900">{mockUser.name}</h3>
            <p className="text-xs text-gray-500">{mockUser.email}</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="px-2 py-0.5 rounded-md bg-[#E8F5E9] text-[#1B5E20] text-[10px] font-bold">
                Safety Score: {mockUser.safetyScore}/100
              </span>
            </div>
          </div>
        </div>

        {/* Settings List */}
        <div className="space-y-1.5">
          {/* Dashcam Pairing -> ESP32-ABC123 (green check) */}
          <div className="p-3 bg-gray-50 hover:bg-gray-100/80 rounded-2xl flex items-center justify-between transition-colors cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-700">
                <Camera className="w-4 h-4 text-[#1B5E20]" />
              </div>
              <div>
                <span className="text-xs font-bold text-gray-900 block">Dashcam Pairing</span>
                <span className="text-[10px] text-gray-500 font-mono">ESP32-ABC123</span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-emerald-700 text-xs font-bold font-mono">
              <CheckCircle2 className="w-4 h-4" />
              <span>Paired</span>
            </div>
          </div>

          {/* Emergency Contacts -> */}
          <div className="p-3 bg-gray-50 hover:bg-gray-100/80 rounded-2xl flex items-center justify-between transition-colors cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-700">
                <Users className="w-4 h-4 text-red-600" />
              </div>
              <span className="text-xs font-bold text-gray-900">Emergency Contacts</span>
            </div>
            <div className="flex items-center gap-1 text-gray-400">
              <span className="text-xs text-gray-500 font-medium">3 active</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>

          {/* Language -> English + Hindi */}
          <div className="p-3 bg-gray-50 hover:bg-gray-100/80 rounded-2xl flex items-center justify-between transition-colors cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-700">
                <Globe className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-xs font-bold text-gray-900">Language</span>
            </div>
            <div className="flex items-center gap-1 text-gray-500 text-xs font-medium">
              <span>English • हिन्दी</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>

          {/* Alert Preferences -> */}
          <div className="p-3 bg-gray-50 hover:bg-gray-100/80 rounded-2xl flex items-center justify-between transition-colors cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-700">
                <Sliders className="w-4 h-4 text-amber-600" />
              </div>
              <span className="text-xs font-bold text-gray-900">Alert Preferences</span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>

          {/* Data & Privacy -> */}
          <div className="p-3 bg-gray-50 hover:bg-gray-100/80 rounded-2xl flex items-center justify-between transition-colors cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-700">
                <Lock className="w-4 h-4 text-purple-600" />
              </div>
              <span className="text-xs font-bold text-gray-900">Data & Privacy</span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>

          {/* Federated Learning -> toggle ON */}
          <div className="p-3 bg-gray-50 rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-700">
                <Cpu className="w-4 h-4 text-emerald-600" />
              </div>
              <div>
                <span className="text-xs font-bold text-gray-900 block">Federated Learning</span>
                <span className="text-[10px] text-gray-500">Train model without uploading video</span>
              </div>
            </div>
            <button
              onClick={() => setFederatedLearning(!federatedLearning)}
              className={`w-11 h-6 rounded-full transition-colors relative p-0.5 ${
                federatedLearning ? 'bg-[#1B5E20]' : 'bg-gray-300'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white shadow-md transition-transform ${
                  federatedLearning ? 'translate-x-5' : 'translate-x-0'
                }`}
              ></div>
            </button>
          </div>

          {/* Notifications -> toggle ON */}
          <div className="p-3 bg-gray-50 rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-700">
                <Bell className="w-4 h-4 text-teal-600" />
              </div>
              <div>
                <span className="text-xs font-bold text-gray-900 block">Notifications</span>
                <span className="text-[10px] text-gray-500">Critical hazard chimes & vibration</span>
              </div>
            </div>
            <button
              onClick={() => setNotifications(!notifications)}
              className={`w-11 h-6 rounded-full transition-colors relative p-0.5 ${
                notifications ? 'bg-[#1B5E20]' : 'bg-gray-300'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white shadow-md transition-transform ${
                  notifications ? 'translate-x-5' : 'translate-x-0'
                }`}
              ></div>
            </button>
          </div>

          {/* About VERITAS -> */}
          <div className="p-3 bg-gray-50 hover:bg-gray-100/80 rounded-2xl flex items-center justify-between transition-colors cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-700">
                <Info className="w-4 h-4 text-blue-500" />
              </div>
              <span className="text-xs font-bold text-gray-900">About VERITAS v2.4</span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>

          {/* Logout (red text) */}
          <div className="pt-2">
            <button className="w-full p-3 rounded-2xl border border-red-200 bg-red-50 hover:bg-red-100 text-[#C62828] text-xs font-bold flex items-center justify-center gap-2 transition-colors">
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      <BottomTabBar activeTab="profile" />
    </div>
  );
};

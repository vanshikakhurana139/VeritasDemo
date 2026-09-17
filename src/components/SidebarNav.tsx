import React, { useState } from 'react';
import {
  Search,
  CheckCircle,
  Smartphone,
  Shield,
  Layers,
  ChevronRight,
  Sparkles,
  ExternalLink
} from 'lucide-react';

export interface ScreenMetadata {
  id: string;
  number: number;
  title: string;
  category: string;
  tag: string;
  fullScreenState?: boolean;
}

export const allScreensMetadata: ScreenMetadata[] = [
  { id: 'screen-1', number: 1, title: 'Login / Authentication', category: 'Auth', tag: 'Credentials & SSO' },
  { id: 'screen-2', number: 2, title: 'Home Dashboard', category: 'Core', tag: 'Live Shield & Quick Actions' },
  { id: 'screen-3', number: 3, title: 'Live Hazard Map', category: 'Navigation', tag: 'Vector Map & Markers' },
  { id: 'screen-4', number: 4, title: 'Drive Screen (Main Loop)', category: 'Drive', tag: 'Split Cam & AI Bounding Boxes' },
  { id: 'screen-5', number: 5, title: 'Hazard Alert Popup', category: 'Drive Alert', tag: 'Pothole 200m Modal Card' },
  { id: 'screen-6', number: 6, title: 'Drowsiness Warning (L2)', category: 'Safety AI', tag: 'Face Mesh & Metrics' },
  { id: 'screen-7', number: 7, title: 'Emergency SOS (Active)', category: 'SOS', tag: '10s Countdown & GPS Broadcast', fullScreenState: true },
  { id: 'screen-8', number: 8, title: 'SOS — Offline (BLE Relay)', category: 'Offline Mesh', tag: 'Device-to-Device Hop', fullScreenState: true },
  { id: 'screen-9', number: 9, title: 'Crash Detected', category: 'Incident', tag: '3.8G Impact & Auto-SOS', fullScreenState: true },
  { id: 'screen-10', number: 10, title: 'Hospital Recommendation', category: 'Emergency Care', tag: 'Trauma L2 Best Match' },
  { id: 'screen-11', number: 11, title: 'Trip Summary', category: 'Telemetry', tag: '87/100 Safety Gauge & Events' },
  { id: 'screen-12', number: 12, title: 'Driver Safety Score', category: 'Telemetry', tag: 'Metrics & Weekly Trend' },
  { id: 'screen-13', number: 13, title: 'Report Hazard', category: 'Community', tag: 'Photo Upload & Severity Slider' },
  { id: 'screen-14', number: 14, title: 'First-Aid Guide (Bystander)', category: 'First Aid', tag: 'CPR Steps & Audio Guide' },
  { id: 'screen-15', number: 15, title: 'Pocket Medical Assistant', category: 'First Aid AI', tag: 'Offline Chat & Prompt Chips' },
  { id: 'screen-16', number: 16, title: 'Emergency Contacts', category: 'Directory', tag: 'Hospitals, Police, 108 & 101' },
  { id: 'screen-17', number: 17, title: 'Nearby Alerts', category: 'Alerts', tag: 'Feed & Verification Voting' },
  { id: 'screen-18', number: 18, title: 'Route Planning', category: 'Navigation', tag: '3 AI Hazard-Aware Routes' },
  { id: 'screen-19', number: 19, title: 'Profile & Settings', category: 'Account', tag: 'ESP32 Cam & Federated Learning' },
  { id: 'screen-20', number: 20, title: 'Multilingual Demo', category: 'Localization', tag: '8 Indic Languages & Translation' },
];

interface SidebarNavProps {
  activeScreenIndex: number;
  onSelectScreen: (index: number) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export const SidebarNav: React.FC<SidebarNavProps> = ({
  activeScreenIndex,
  onSelectScreen,
  isOpen,
  onToggle
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredScreens = allScreensMetadata.filter(
    (s) =>
      s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.tag.toLowerCase().includes(searchTerm.toLowerCase()) ||
      `screen ${s.number}`.includes(searchTerm.toLowerCase())
  );

  return (
    <aside
      className={`fixed top-14 left-0 bottom-0 z-40 bg-white/95 backdrop-blur-md border-r border-gray-200/90 w-80 flex flex-col transition-all duration-300 shadow-lg ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* Sidebar Header */}
      <div className="p-3.5 border-b border-gray-100 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1B5E20]"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-800">
              Screen Navigator
            </span>
          </div>
          <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
            20 Screens
          </span>
        </div>

        {/* Quick Search */}
        <div className="relative flex items-center">
          <Search className="w-3.5 h-3.5 absolute left-3 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Filter screens (e.g. SOS, Drive)..."
            className="w-full pl-8 pr-3 py-1.5 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#1B5E20] text-gray-800 placeholder-gray-400"
          />
        </div>
      </div>

      {/* Screen List */}
      <div className="flex-1 overflow-y-auto p-2 space-y-1 phone-scroll">
        {filteredScreens.map((screen, idx) => {
          const isSelected = activeScreenIndex === screen.number - 1;

          return (
            <button
              key={screen.id}
              onClick={() => onSelectScreen(screen.number - 1)}
              className={`w-full p-2.5 rounded-xl text-left transition-all flex items-center justify-between group ${
                isSelected
                  ? 'bg-[#1B5E20] text-white shadow-sm'
                  : 'hover:bg-gray-100/80 text-gray-700'
              }`}
            >
              <div className="flex items-center gap-2.5 overflow-hidden">
                <span
                  className={`w-6 h-6 rounded-lg text-center font-mono text-[11px] font-bold flex items-center justify-center shrink-0 ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                  }`}
                >
                  {screen.number < 10 ? `0${screen.number}` : screen.number}
                </span>

                <div className="overflow-hidden">
                  <h4
                    className={`text-xs font-bold truncate ${
                      isSelected ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {screen.title}
                  </h4>
                  <p
                    className={`text-[10px] truncate ${
                      isSelected ? 'text-emerald-100' : 'text-gray-400'
                    }`}
                  >
                    {screen.tag}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 shrink-0 ml-1">
                {screen.fullScreenState && (
                  <span
                    className={`text-[8px] font-extrabold uppercase px-1 py-0.5 rounded ${
                      isSelected
                        ? 'bg-red-400 text-white'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    FULL
                  </span>
                )}
                <ChevronRight
                  className={`w-3.5 h-3.5 transition-transform ${
                    isSelected ? 'text-white translate-x-0.5' : 'text-gray-400'
                  }`}
                />
              </div>
            </button>
          );
        })}

        {filteredScreens.length === 0 && (
          <div className="p-4 text-center text-xs text-gray-400">
            No screens matching "{searchTerm}"
          </div>
        )}
      </div>

      {/* Footer Info */}
      <div className="p-3 border-t border-gray-100 bg-gray-50/70 text-[11px] text-gray-500 flex items-center justify-between">
        <span>VERITAS Prototype v1.0</span>
        <span className="font-mono text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">
          Light Theme Only
        </span>
      </div>
    </aside>
  );
};

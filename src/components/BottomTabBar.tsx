import React from 'react';
import { Home, Map, Car, Bell, User } from 'lucide-react';

export type TabKey = 'home' | 'map' | 'drive' | 'alerts' | 'profile';

interface BottomTabBarProps {
  activeTab?: TabKey;
  onTabChange?: (tab: TabKey) => void;
  badgeCounts?: {
    alerts?: number;
  };
}

export const BottomTabBar: React.FC<BottomTabBarProps> = ({
  activeTab = 'home',
  onTabChange,
  badgeCounts = { alerts: 4 }
}) => {
  const tabs = [
    { key: 'home' as TabKey, label: 'Home', icon: Home },
    { key: 'map' as TabKey, label: 'Map', icon: Map },
    { key: 'drive' as TabKey, label: 'Drive', icon: Car, isDriveHighlight: true },
    { key: 'alerts' as TabKey, label: 'Alerts', icon: Bell, badge: badgeCounts.alerts },
    { key: 'profile' as TabKey, label: 'Profile', icon: User },
  ];

  return (
    <div className="sticky bottom-0 z-30 w-full bg-white/95 backdrop-blur-md border-t border-gray-100 px-3 py-1.5 flex items-center justify-around shadow-[0_-4px_12px_rgba(0,0,0,0.03)]">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.key;

        if (tab.isDriveHighlight) {
          return (
            <button
              key={tab.key}
              onClick={() => onTabChange?.(tab.key)}
              className="flex flex-col items-center group relative -mt-3.5 focus:outline-none transition-transform active:scale-95"
            >
              <div
                className={`w-11 h-11 rounded-full flex items-center justify-center shadow-md transition-all ${
                  isActive
                    ? 'bg-[#1B5E20] text-white ring-4 ring-[#E8F5E9]'
                    : 'bg-[#1B5E20] text-white hover:bg-[#154a19]'
                }`}
              >
                <Icon className="w-5 h-5 stroke-[2.3]" />
              </div>
              <span
                className={`text-[10px] mt-0.5 font-medium ${
                  isActive ? 'text-[#1B5E20] font-bold' : 'text-gray-500'
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        }

        return (
          <button
            key={tab.key}
            onClick={() => onTabChange?.(tab.key)}
            className="flex flex-col items-center py-1 px-2 relative group focus:outline-none transition-colors"
          >
            <div className="relative">
              <Icon
                className={`w-5 h-5 transition-colors stroke-[2.1] ${
                  isActive ? 'text-[#1B5E20]' : 'text-gray-400 group-hover:text-gray-600'
                }`}
              />
              {tab.badge && tab.badge > 0 && (
                <span className="absolute -top-1.5 -right-2 min-w-[15px] h-[15px] bg-[#C62828] text-white text-[9px] font-bold rounded-full flex items-center justify-center px-0.5 border border-white">
                  {tab.badge}
                </span>
              )}
            </div>
            <span
              className={`text-[10px] mt-1 font-medium transition-colors ${
                isActive ? 'text-[#1B5E20] font-bold' : 'text-gray-500'
              }`}
            >
              {tab.label}
            </span>
            {isActive && (
              <span className="w-1 h-1 rounded-full bg-[#1B5E20] mt-0.5"></span>
            )}
          </button>
        );
      })}
    </div>
  );
};

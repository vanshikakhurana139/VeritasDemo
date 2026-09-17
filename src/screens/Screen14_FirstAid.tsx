import React, { useState } from 'react';
import { BottomTabBar } from '../components/BottomTabBar';
import {
  Heart,
  Volume2,
  ArrowRight,
  ShieldCheck,
  UserCheck,
  PhoneCall,
  Activity,
  Zap,
  Flame,
  Bandage,
  AlertCircle
} from 'lucide-react';

export const Screen14_FirstAid: React.FC = () => {
  const [selectedGuide, setSelectedGuide] = useState('CPR');
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const guideTypes = [
    { id: 'CPR', label: 'CPR', icon: '🫀' },
    { id: 'Bleeding', label: 'Bleeding', icon: '🩸' },
    { id: 'Heart Attack', label: 'Heart Attack', icon: '❤️' },
    { id: 'Fracture', label: 'Fracture', icon: '🦴' },
    { id: 'Burns', label: 'Burns', icon: '🔥' },
    { id: 'Accident', label: 'Accident', icon: '🚗' }
  ];

  const cprSteps = [
    {
      step: 1,
      title: 'Check responsiveness',
      desc: 'Tap shoulders firmly and ask loudly: "Are you okay?". Check chest for normal breathing movements.',
      badge: 'Step 1 of 4',
      actionIcon: UserCheck,
      color: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      step: 2,
      title: 'Call 108 immediately',
      desc: 'Shout to a bystander to call 108 and fetch an AED while you begin CPR without delay.',
      badge: 'Step 2 of 4',
      actionIcon: PhoneCall,
      color: 'bg-red-50 text-red-700 border-red-200'
    },
    {
      step: 3,
      title: 'Position hands on chest',
      desc: 'Place the heel of one hand in center of the chest. Interlock fingers of second hand on top.',
      badge: 'Step 3 of 4',
      actionIcon: Activity,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      step: 4,
      title: 'Push hard and fast',
      desc: 'Push at least 2 inches deep at 100-120 compressions/min (to the beat of "Stayin Alive"). Let chest recoil completely.',
      badge: 'Step 4 of 4',
      actionIcon: Zap,
      color: 'bg-amber-50 text-amber-800 border-amber-200'
    }
  ];

  return (
    <div className="flex-1 flex flex-col justify-between bg-white text-[#1A1A1A] select-none">
      <div className="p-4 space-y-3.5 flex-1 overflow-y-auto">
        {/* Top Bar: First-Aid Guide + Offline Badge */}
        <div className="flex items-center justify-between pb-1 border-b border-gray-100">
          <div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              Bystander AI
            </span>
            <h2 className="text-base font-bold text-gray-900">First-Aid Guide</h2>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-slate-900 text-white text-[10px] font-mono font-bold flex items-center gap-1 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Offline Ready</span>
          </span>
        </div>

        {/* Emergency Type Grid (6 chips) */}
        <div>
          <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">
            Select Protocol
          </label>
          <div className="grid grid-cols-3 gap-2">
            {guideTypes.map((guide) => (
              <button
                key={guide.id}
                onClick={() => setSelectedGuide(guide.id)}
                className={`p-2 rounded-xl border text-center transition-all flex items-center justify-center gap-1.5 ${
                  selectedGuide === guide.id
                    ? 'border-[#1B5E20] bg-[#E8F5E9] shadow-xs'
                    : 'border-gray-200 bg-white hover:bg-gray-50'
                }`}
              >
                <span className="text-sm">{guide.icon}</span>
                <span
                  className={`text-xs font-bold ${
                    selectedGuide === guide.id ? 'text-[#1B5E20]' : 'text-gray-700'
                  }`}
                >
                  {guide.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Metronome Beat Prompt for CPR */}
        <div className="p-2.5 bg-gradient-to-r from-red-500 to-rose-600 text-white rounded-2xl flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center">
              <Zap className="w-4 h-4 animate-bounce" />
            </div>
            <div>
              <h5 className="text-xs font-bold">Rhythm: 110 BPM</h5>
              <p className="text-[10px] text-red-100">Keep hands centered • Deep compressions</p>
            </div>
          </div>
          <span className="text-[10px] font-mono font-bold bg-white/25 px-2 py-0.5 rounded">
            2 in (5 cm)
          </span>
        </div>

        {/* Vertical Step Cards */}
        <div className="space-y-2">
          {cprSteps.map((item, idx) => {
            const Icon = item.actionIcon;
            const isCurrent = idx === currentStepIndex;

            return (
              <div
                key={item.step}
                onClick={() => setCurrentStepIndex(idx)}
                className={`p-3 rounded-2xl border transition-all cursor-pointer ${
                  isCurrent
                    ? 'border-[#1B5E20] bg-white shadow-md ring-1 ring-[#1B5E20]/30'
                    : 'border-gray-200 bg-gray-50/80 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-xl border flex items-center justify-center shrink-0 ${item.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#1B5E20]">
                        {item.badge}
                      </span>
                      {isCurrent && (
                        <span className="text-[9px] font-bold text-white bg-[#1B5E20] px-1.5 py-0.5 rounded-full">
                          Active
                        </span>
                      )}
                    </div>
                    <h4 className="text-xs font-bold text-gray-900 mt-0.5">{item.title}</h4>
                    <p className="text-[11px] text-gray-600 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Audio & Next Step Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <button
            onClick={() => setIsPlayingAudio(!isPlayingAudio)}
            className={`py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors border ${
              isPlayingAudio
                ? 'bg-amber-500 text-white border-amber-600 animate-pulse'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800 border-gray-200'
            }`}
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span>{isPlayingAudio ? 'Audio Playing...' : 'Play Audio'}</span>
          </button>

          <button
            onClick={() => setCurrentStepIndex((prev) => (prev + 1) % cprSteps.length)}
            className="py-2.5 px-3 bg-[#1B5E20] hover:bg-[#154a19] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 shadow-xs transition-colors"
          >
            <span>Next Step</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <BottomTabBar activeTab="alerts" />
    </div>
  );
};

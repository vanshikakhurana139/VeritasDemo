import React, { useState, useEffect } from 'react';
import { AlertOctagon, PhoneCall, XCircle, MapPin, CheckCircle, ShieldAlert } from 'lucide-react';

export const Screen07_SOSActive: React.FC = () => {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 1 ? prev - 1 : 10));
    }, 1200);
    return () => clearInterval(timer);
  }, []);

  const emergencyContacts = [
    { name: 'Papa (Ramesh Sharma)', status: 'SMS & GPS sent' },
    { name: 'Maa (Sunita Sharma)', status: 'SMS & GPS sent' },
    { name: 'Dr. Alok Verma (ICE)', status: 'SMS & GPS sent' }
  ];

  return (
    <div className="flex-1 flex flex-col justify-between bg-gradient-to-b from-[#B71C1C] via-[#C62828] to-[#8E0000] text-white p-5 select-none relative overflow-hidden">
      {/* Background Animated Shockwave Rings */}
      <div className="absolute top-[28%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <span className="absolute w-56 h-56 -ml-28 -mt-28 rounded-full border-2 border-white/20 animate-ping"></span>
        <span className="absolute w-44 h-44 -ml-22 -mt-22 rounded-full border border-white/30 animate-pulse"></span>
      </div>

      {/* Top Bar Warning Header */}
      <div className="pt-2 text-center relative z-10">
        <span className="inline-block px-3 py-1 bg-white/15 backdrop-blur-md rounded-full text-[11px] font-bold tracking-wider uppercase border border-white/30 text-red-100">
          ● CRITICAL EMERGENCY DISPATCH ACTIVE
        </span>
        <h1 className="text-xl font-black mt-2 tracking-tight text-white drop-shadow-sm">
          Alerting Emergency Services...
        </h1>
      </div>

      {/* Center Hero: Pulsing SOS Badge & Large Countdown "10" */}
      <div className="flex flex-col items-center justify-center my-auto relative z-10">
        {/* Pulsing SOS icon */}
        <div className="relative mb-2">
          <div className="w-24 h-24 rounded-full bg-white text-[#C62828] flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.45)] border-4 border-white/90">
            <AlertOctagon className="w-12 h-12 stroke-[2.6]" />
          </div>
        </div>

        {/* Large Centered Countdown */}
        <div className="text-center mt-1">
          <span className="text-6xl font-black font-mono tracking-tighter text-white drop-shadow-md">
            {countdown < 10 ? `0${countdown}` : countdown}
          </span>
          <p className="text-xs font-semibold text-red-100 tracking-wider uppercase mt-0.5">
            Seconds until automated dispatch
          </p>
        </div>

        {/* Live Location Pill */}
        <div className="mt-4 px-3.5 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/20 flex items-center gap-2 text-xs font-mono">
          <MapPin className="w-3.5 h-3.5 text-amber-300" />
          <span>26.4031° N, 75.7915° E</span>
        </div>
      </div>

      {/* Dispatch Details Cards */}
      <div className="space-y-2.5 relative z-10 mb-2">
        {/* Hospital Card */}
        <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-red-200 uppercase font-semibold">
              Nearest Level 2 Trauma Center
            </span>
            <h4 className="text-sm font-bold text-white">Sewai Hospital</h4>
            <p className="text-xs text-red-100 font-medium">2.4 km away • ETA 8 min</p>
          </div>
          <span className="px-2 py-1 bg-white/20 text-white rounded-lg text-xs font-bold font-mono">
            Trauma L2
          </span>
        </div>

        {/* Emergency Contacts List */}
        <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-white uppercase tracking-wider">
              Emergency Contacts Notified (3)
            </span>
            <span className="text-[10px] text-emerald-300 font-semibold">Broadcasting</span>
          </div>
          <div className="space-y-1.5">
            {emergencyContacts.map((contact, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs">
                <span className="text-white/90 font-medium">{contact.name}</span>
                <div className="flex items-center gap-1 text-emerald-300 text-[11px] font-semibold">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Notified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons: Cancel SOS (white outline) | Call 108 (white filled) */}
      <div className="grid grid-cols-2 gap-3 relative z-10 pt-1">
        <button className="py-3 px-4 border-2 border-white/80 hover:bg-white/15 text-white text-xs font-extrabold rounded-2xl flex items-center justify-center gap-1.5 transition-all">
          <XCircle className="w-4 h-4" />
          <span>Cancel SOS</span>
        </button>

        <button className="py-3 px-4 bg-white hover:bg-red-50 text-[#C62828] text-xs font-black rounded-2xl flex items-center justify-center gap-1.5 shadow-lg transition-all">
          <PhoneCall className="w-4 h-4" />
          <span>Call 108</span>
        </button>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { ShieldAlert, AlertTriangle, MapPin, CheckCircle, Send, Activity, Car } from 'lucide-react';

export const Screen09_CrashDetected: React.FC = () => {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 1 ? prev - 1 : 10));
    }, 1200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex-1 flex flex-col justify-between bg-gradient-to-b from-[#F57F17] via-[#D84315] to-[#B71C1C] text-white p-5 select-none relative overflow-hidden">
      {/* Top Impact Banner */}
      <div className="pt-2 text-center relative z-10">
        <span className="inline-block px-3 py-1 bg-black/25 backdrop-blur-md rounded-full text-[11px] font-black tracking-widest uppercase border border-white/30 text-amber-200">
          ⚠️ G-FORCE SENSOR TRIGGERED
        </span>
        <h1 className="text-2xl font-black mt-2 tracking-tight text-white drop-shadow-md">
          Impact Detected!
        </h1>
        <p className="text-xs text-amber-100 mt-0.5">
          High deceleration threshold exceeded on ESP32 IMU
        </p>
      </div>

      {/* Center Crash Icon & Severity Metrics */}
      <div className="my-auto flex flex-col items-center justify-center relative z-10">
        {/* Large Crash Icon */}
        <div className="relative mb-3">
          <div className="w-24 h-24 rounded-3xl bg-white text-[#C62828] flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.4)] border-4 border-white/80 animate-soft-pulse">
            {/* Custom SVG Crash graphic */}
            <svg className="w-14 h-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              {/* Explosion sparks */}
              <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.2 2.2M16.9 16.9l2.2 2.2M4.9 19.1l2.2-2.2M16.9 7.1l2.2-2.2" />
              {/* Impact point */}
              <circle cx="12" cy="12" r="4" fill="#C62828" stroke="#FFFFFF" />
            </svg>
          </div>
        </div>

        {/* Severity Badge */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/25">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
          <span className="text-xs font-black tracking-wider uppercase text-amber-200">
            Severity: Moderate (3.8G)
          </span>
        </div>

        {/* Auto-SOS Countdown Pill */}
        <div className="mt-3 text-center">
          <div className="text-3xl font-black font-mono tracking-tight text-white drop-shadow-md">
            Auto-SOS in: <span className="text-amber-200 underline">{countdown}s</span>
          </div>
          <p className="text-[11px] text-amber-100 font-medium mt-0.5">
            Emergency services and next of kin will be alerted automatically
          </p>
        </div>

        {/* Map preview showing location pin */}
        <div className="w-full mt-4 h-28 rounded-2xl overflow-hidden border border-white/30 relative shadow-md">
          {/* Static styled map placeholder */}
          <div className="absolute inset-0 bg-[#E0E7EE]">
            <svg className="w-full h-full opacity-80" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="#E5EBF0" />
              <path d="M-20 40 L 400 60" stroke="#FFFFFF" strokeWidth="10" />
              <path d="M 120 0 L 160 120" stroke="#FFF" strokeWidth="12" />
              <path d="M 240 0 L 210 120" stroke="#F59E0B" strokeWidth="6" />
            </svg>
          </div>

          {/* Location Pin with pulse */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative flex items-center justify-center">
              <span className="absolute w-10 h-10 bg-red-600/40 rounded-full animate-ping"></span>
              <div className="w-8 h-8 rounded-full bg-[#C62828] text-white flex items-center justify-center shadow-md border-2 border-white">
                <MapPin className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Overlay Tag */}
          <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/70 backdrop-blur-xs text-[10px] font-mono text-white">
            JLN Marg Crossing • 26.4031° N, 75.7915° E
          </div>
        </div>
      </div>

      {/* Two Action Buttons: "I'm OK, Cancel" (gray) | "Send SOS Now" (red) */}
      <div className="grid grid-cols-2 gap-3 relative z-10 pt-2">
        <button className="py-3 px-3 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white text-xs font-bold rounded-2xl flex items-center justify-center gap-1.5 transition-colors">
          <CheckCircle className="w-4 h-4 text-emerald-300" />
          <span>I'm OK, Cancel</span>
        </button>

        <button className="py-3 px-3 bg-[#B71C1C] hover:bg-[#8E0000] border border-red-400 text-white text-xs font-black rounded-2xl shadow-xl flex items-center justify-center gap-1.5 transition-colors animate-pulse">
          <Send className="w-4 h-4" />
          <span>Send SOS Now</span>
        </button>
      </div>
    </div>
  );
};

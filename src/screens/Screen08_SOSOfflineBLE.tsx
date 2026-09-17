import React from 'react';
import { Radio, Smartphone, Share2, MapPin, XCircle, ShieldAlert, Cpu, ArrowRight } from 'lucide-react';

export const Screen08_SOSOfflineBLE: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col justify-between bg-[#0F172A] text-white p-5 select-none relative overflow-hidden">
      {/* Background Mesh Grid Animation Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:16px_16px]"></div>

      {/* Top Offline Status Badge */}
      <div className="pt-2 text-center relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/80 border border-red-500/50 text-red-400 text-[11px] font-bold tracking-wider uppercase">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
          <span>No Cellular Network</span>
        </div>
        <h1 className="text-lg font-black text-white mt-2">
          Using BLE Mesh Relay
        </h1>
        <p className="text-xs text-sky-300/80 mt-0.5">
          Decentralized Ad-Hoc Emergency Packet Hop
        </p>
      </div>

      {/* Central Visual: Phone ➔ Phone ➔ Phone Chain with Wave Ripples */}
      <div className="flex-1 flex flex-col items-center justify-center my-4 relative z-10">
        {/* Mesh diagram container */}
        <div className="w-full max-w-[320px] bg-slate-900/80 border border-slate-700/80 rounded-3xl p-5 shadow-2xl relative">
          <div className="flex items-center justify-between relative">
            {/* Connection dashed line */}
            <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 border-t-2 border-dashed border-sky-400/60 z-0"></div>

            {/* Node 1: Your Phone */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-[#C62828] text-white border-2 border-red-300 shadow-[0_0_20px_rgba(198,40,40,0.6)] flex items-center justify-center">
                <Smartphone className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold text-white mt-1.5">You</span>
              <span className="text-[9px] text-red-400 font-mono">Origin</span>
            </div>

            {/* Hop Arrow 1 */}
            <div className="relative z-10 text-sky-400 font-mono text-[9px] px-1 bg-slate-900 rounded">
              BLE Hop 1
            </div>

            {/* Node 2: Intermediate Relay Vehicle */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-11 h-11 rounded-2xl bg-sky-950 border-2 border-sky-400 text-sky-300 shadow-[0_0_15px_rgba(56,189,248,0.3)] flex items-center justify-center animate-pulse">
                <Radio className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-sky-200 mt-1.5">Relay #1</span>
              <span className="text-[9px] text-sky-400 font-mono">35m</span>
            </div>

            {/* Hop Arrow 2 */}
            <div className="relative z-10 text-emerald-400 font-mono text-[9px] px-1 bg-slate-900 rounded">
              BLE Hop 2
            </div>

            {/* Node 3: Internet Connected Node / Base */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-emerald-950 border-2 border-emerald-400 text-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.4)] flex items-center justify-center">
                <Share2 className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold text-emerald-300 mt-1.5">Gateway</span>
              <span className="text-[9px] text-emerald-400 font-mono">4G Online</span>
            </div>
          </div>

          {/* Relaying Notice */}
          <div className="mt-5 p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
            <p className="text-xs font-semibold text-slate-200">
              "Your SOS is being relayed through nearby devices"
            </p>
            <p className="text-[10px] text-slate-400 mt-0.5">
              Encrypted burst packet verified by nearby VERITAS nodes
            </p>
          </div>
        </div>

        {/* 3 Devices in Range Status with indicator dots */}
        <div className="mt-4 flex items-center gap-3 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-ping"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
          </div>
          <span className="text-xs font-bold text-white">
            3 devices in range
          </span>
          <span className="text-[10px] font-mono text-sky-400 border-l border-slate-700 pl-2">
            BT 5.2 Mesh
          </span>
        </div>
      </div>

      {/* Location shown at bottom */}
      <div className="space-y-3 relative z-10">
        <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-sky-950 text-sky-400 flex items-center justify-center">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-semibold">
                Offline Cached GPS Fix
              </span>
              <h4 className="text-xs font-bold font-mono text-white">
                26.4031° N, 75.7915° E
              </h4>
            </div>
          </div>
          <span className="text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-md font-mono">
            GNSS Lock
          </span>
        </div>

        {/* Cancel Button */}
        <button className="w-full py-3 border border-slate-700 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-bold rounded-2xl flex items-center justify-center gap-1.5 transition-colors">
          <XCircle className="w-4 h-4" />
          <span>Cancel Relay</span>
        </button>
      </div>
    </div>
  );
};

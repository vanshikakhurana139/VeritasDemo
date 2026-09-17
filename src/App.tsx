import React, { useState, useEffect, useRef } from 'react';
import { PhoneFrame } from './components/PhoneFrame';
import { ScreenTitle } from './components/ScreenTitle';
import { HeaderBar } from './components/HeaderBar';
import { SidebarNav, allScreensMetadata } from './components/SidebarNav';

// Import All 20 Screens
import { Screen01_Login } from './screens/Screen01_Login';
import { Screen02_Home } from './screens/Screen02_Home';
import { Screen03_Map } from './screens/Screen03_Map';
import { Screen04_Drive } from './screens/Screen04_Drive';
import { Screen05_HazardAlert } from './screens/Screen05_HazardAlert';
import { Screen06_Drowsiness } from './screens/Screen06_Drowsiness';
import { Screen07_SOSActive } from './screens/Screen07_SOSActive';
import { Screen08_SOSOfflineBLE } from './screens/Screen08_SOSOfflineBLE';
import { Screen09_CrashDetected } from './screens/Screen09_CrashDetected';
import { Screen10_Hospitals } from './screens/Screen10_Hospitals';
import { Screen11_TripSummary } from './screens/Screen11_TripSummary';
import { Screen12_DriverSafety } from './screens/Screen12_DriverSafety';
import { Screen13_ReportHazard } from './screens/Screen13_ReportHazard';
import { Screen14_FirstAid } from './screens/Screen14_FirstAid';
import { Screen15_MedicalChat } from './screens/Screen15_MedicalChat';
import { Screen16_EmergencyContacts } from './screens/Screen16_EmergencyContacts';
import { Screen17_NearbyAlerts } from './screens/Screen17_NearbyAlerts';
import { Screen18_RoutePlanning } from './screens/Screen18_RoutePlanning';
import { Screen19_Profile } from './screens/Screen19_Profile';
import { Screen20_Multilingual } from './screens/Screen20_Multilingual';

export const App: React.FC = () => {
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'vertical-stack' | 'simulator'>('vertical-stack');
  const [zoomScale, setZoomScale] = useState(0.9); // Default 90% for laptop viewing
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const screenRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Array of screen components
  const screenComponents = [
    <Screen01_Login key="s1" />,
    <Screen02_Home key="s2" />,
    <Screen03_Map key="s3" />,
    <Screen04_Drive key="s4" />,
    <Screen05_HazardAlert key="s5" />,
    <Screen06_Drowsiness key="s6" />,
    <Screen07_SOSActive key="s7" />,
    <Screen08_SOSOfflineBLE key="s8" />,
    <Screen09_CrashDetected key="s9" />,
    <Screen10_Hospitals key="s10" />,
    <Screen11_TripSummary key="s11" />,
    <Screen12_DriverSafety key="s12" />,
    <Screen13_ReportHazard key="s13" />,
    <Screen14_FirstAid key="s14" />,
    <Screen15_MedicalChat key="s15" />,
    <Screen16_EmergencyContacts key="s16" />,
    <Screen17_NearbyAlerts key="s17" />,
    <Screen18_RoutePlanning key="s18" />,
    <Screen19_Profile key="s19" />,
    <Screen20_Multilingual key="s20" />
  ];

  // Screen descriptions for ScreenTitle components
  const screenDescriptions = [
    'Secure authentication with credentials, Google SSO, and account recovery.',
    'Central dashboard displaying real-time safety status, ESP32 dashcam connection, quick actions, and nearby hazard badges.',
    'Interactive vector hazard map with categorized pins, pulsing GPS location, and confirm/dismiss bottom sheet.',
    'Main driving loop with front road AI detection bounding boxes, driver face mesh monitoring, live metrics, and floating SOS button.',
    'High-priority modal warning overlay displaying distance, community confidence, and auto-dismiss timer.',
    'AI driver alertness monitoring with EAR/PERCLOS telemetry, Level 2 severity bar, and nearest rest stop suggestion.',
    'Critical emergency state with 10-second countdown, GPS broadcast, emergency contact notifications, and 108 direct dispatch.',
    'Offline BLE mesh relay transmitting emergency packets across vehicle-to-vehicle hops when cellular service is unavailable.',
    'Automated crash response triggered by 3.8G IMU threshold with map pin, countdown, and cancellation option.',
    'Intelligent hospital triage recommending trauma facilities based on injury type, distance, and real-time ICU beds.',
    'End-of-trip report featuring circular safety score gauge, distance/duration stats, and event log.',
    'Long-term driving behavior analytics with metric breakdown, weekly sparkline trend, and trip history.',
    'Community road report tool with 6 hazard categories, photo upload placeholders, GPS coordinates, and severity slider.',
    'Offline bystander AI emergency protocol with step-by-step CPR cards, metronome beat prompt, and audio playback.',
    'Offline conversational first-aid assistant with quick inquiry chips and immediate response scripts.',
    'Offline emergency directory featuring 108 ambulance, 101 fire, trauma hospitals, police, and blood banks with direct calls.',
    'Aggregated real-time hazard and incident alert feed with driver confirmation voting.',
    'Hazard-aware trip navigation offering 3 route alternatives optimized for road conditions.',
    'Driver account settings, ESP32 dashcam status, federated learning on-device training toggle, and privacy controls.',
    'Multilingual voice and text localization across 8 Indic languages with live translation preview.'
  ];

  // Handle screen jump
  const handleSelectScreen = (index: number) => {
    setCurrentScreenIndex(index);
    if (viewMode === 'vertical-stack') {
      const target = screenRefs.current[index];
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  // Scroll spy to update currentScreenIndex in header as user scrolls
  useEffect(() => {
    if (viewMode !== 'vertical-stack') return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (let i = screenRefs.current.length - 1; i >= 0; i--) {
        const el = screenRefs.current[i];
        if (el && el.offsetTop <= scrollPosition) {
          setCurrentScreenIndex(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [viewMode]);

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#1A1A1A] flex flex-col selection:bg-[#1B5E20] selection:text-white">
      {/* Sticky Header Bar */}
      <HeaderBar
        currentScreenIndex={currentScreenIndex}
        onSelectScreen={handleSelectScreen}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        zoomScale={zoomScale}
        onZoomChange={setZoomScale}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        isSidebarOpen={isSidebarOpen}
      />

      {/* Main Content Layout */}
      <div className="flex-1 flex relative">
        {/* Left Sticky/Collapsible Screen Navigator Sidebar */}
        <SidebarNav
          activeScreenIndex={currentScreenIndex}
          onSelectScreen={handleSelectScreen}
          isOpen={isSidebarOpen}
          onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        {/* Presentation Area */}
        <main
          className={`flex-1 flex flex-col items-center transition-all duration-300 ${
            isSidebarOpen ? 'lg:pl-80' : 'pl-0'
          }`}
        >
          {/* VIEW MODE 1: Vertical Stack (All 20 Screens) */}
          {viewMode === 'vertical-stack' ? (
            <div
              className="w-full flex flex-col items-center py-10 px-4 space-y-16 transition-transform origin-top"
              style={{ transform: `scale(${zoomScale})` }}
            >
              {allScreensMetadata.map((meta, index) => {
                const isDarkStatusBar = meta.number === 8; // Screen 8 is dark mesh

                return (
                  <div
                    key={meta.id}
                    ref={(el) => (screenRefs.current[index] = el)}
                    className="flex flex-col items-center scroll-mt-20 group"
                  >
                    {/* Sticky Screen Header */}
                    <ScreenTitle
                      screenNumber={meta.number}
                      totalScreens={20}
                      title={meta.title}
                      category={meta.category}
                      description={screenDescriptions[index]}
                    />

                    {/* iPhone 14 Frame (390px x 844px) */}
                    <PhoneFrame
                      id={meta.id}
                      darkStatusBar={isDarkStatusBar}
                      className="group-hover:ring-2 group-hover:ring-[#1B5E20]/20 transition-all"
                    >
                      {screenComponents[index]}
                    </PhoneFrame>
                  </div>
                );
              })}

              {/* End of Stack Presentation Badge */}
              <div className="w-[390px] p-6 bg-white border border-gray-200 rounded-3xl text-center space-y-2 shadow-sm my-6">
                <div className="w-12 h-12 rounded-full bg-[#E8F5E9] text-[#1B5E20] mx-auto flex items-center justify-center font-bold text-lg">
                  ✓
                </div>
                <h3 className="text-base font-bold text-gray-900">
                  All 20 Prototype Screens Rendered
                </h3>
                <p className="text-xs text-gray-500">
                  VERITAS AI Road Safety & Emergency Response Mobile System
                </p>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="mt-2 px-4 py-2 bg-[#1B5E20] text-white text-xs font-bold rounded-xl hover:bg-[#154a19] transition-colors"
                >
                  Back to Top ↑
                </button>
              </div>
            </div>
          ) : (
            /* VIEW MODE 2: Interactive Single Phone Simulator */
            <div
              className="w-full flex flex-col items-center py-8 px-4 transition-transform origin-top"
              style={{ transform: `scale(${zoomScale})` }}
            >
              {/* Simulator Controls & Screen Header */}
              <div className="w-[390px] mb-4 flex items-center justify-between bg-white p-3 rounded-2xl border border-gray-200 shadow-2xs">
                <button
                  onClick={() =>
                    setCurrentScreenIndex((prev) => (prev > 0 ? prev - 1 : 19))
                  }
                  className="px-2.5 py-1 text-xs font-bold bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 transition-colors"
                >
                  ← Prev
                </button>

                <div className="text-center">
                  <span className="text-[10px] font-mono font-bold text-gray-400 block uppercase">
                    Screen {currentScreenIndex + 1} of 20
                  </span>
                  <span className="text-xs font-bold text-[#1B5E20] block truncate max-w-[200px]">
                    {allScreensMetadata[currentScreenIndex]?.title}
                  </span>
                </div>

                <button
                  onClick={() =>
                    setCurrentScreenIndex((prev) => (prev < 19 ? prev + 1 : 0))
                  }
                  className="px-2.5 py-1 text-xs font-bold bg-[#1B5E20] hover:bg-[#154a19] text-white rounded-lg transition-colors"
                >
                  Next →
                </button>
              </div>

              {/* Centered Interactive Phone Frame */}
              <PhoneFrame
                darkStatusBar={currentScreenIndex === 7}
                className="ring-4 ring-[#1B5E20]/10"
              >
                {screenComponents[currentScreenIndex]}
              </PhoneFrame>

              {/* Quick Jump Pills for Simulator */}
              <div className="w-[390px] mt-6 p-3 bg-white border border-gray-200 rounded-2xl shadow-2xs">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-2">
                  Jump Directly to Feature Screen:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {allScreensMetadata.map((s, idx) => (
                    <button
                      key={s.id}
                      onClick={() => setCurrentScreenIndex(idx)}
                      className={`px-2 py-1 rounded-lg text-[10px] font-bold transition-all ${
                        currentScreenIndex === idx
                          ? 'bg-[#1B5E20] text-white shadow-2xs'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      }`}
                    >
                      {s.number}. {s.category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;

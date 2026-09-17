import React, { useState } from 'react';
import { BottomTabBar } from '../components/BottomTabBar';
import { Globe, Check, Volume2, ArrowRight, Sparkles, MessageSquare } from 'lucide-react';

export const Screen20_Multilingual: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const languages = [
    { id: 'English', native: 'English', script: 'Latin' },
    { id: 'Hindi', native: 'हिन्दी', script: 'Devanagari' },
    { id: 'Marathi', native: 'मराठी', script: 'Devanagari' },
    { id: 'Tamil', native: 'தமிழ்', script: 'Tamil' },
    { id: 'Telugu', native: 'తెలుగు', script: 'Telugu' },
    { id: 'Kannada', native: 'ಕನ್ನಡ', script: 'Kannada' },
    { id: 'Bengali', native: 'বাংলা', script: 'Bengali' },
    { id: 'Gujarati', native: 'ગુજરાતી', script: 'Gujarati' },
  ];

  const translationExamples: Record<string, { input: string; output: string }> = {
    English: {
      input: 'Aage pothole hai, dhyan se chalein',
      output: 'There is a pothole ahead, drive carefully'
    },
    Hindi: {
      input: 'There is a pothole ahead, drive carefully',
      output: 'आगे गड्ढा है, ध्यान से चलें'
    },
    Marathi: {
      input: 'Aage pothole hai, dhyan se chalein',
      output: 'पुढे खड्डा आहे, काळजीपूर्वक चालवा'
    },
    Tamil: {
      input: 'Aage pothole hai, dhyan se chalein',
      output: 'முன்னால் பள்ளம் உள்ளது, கவனமாக ஓட்டவும்'
    },
    Telugu: {
      input: 'Aage pothole hai, dhyan se chalein',
      output: 'ముందు గుంత ఉంది, జాగ్రత్తగా డ్రైవ్ చేయండి'
    },
    Kannada: {
      input: 'Aage pothole hai, dhyan se chalein',
      output: 'ಮುಂದೆ ಗುಂಡಿ ಇದೆ, ಎಚ್ಚರಿಕೆಯಿಂದ ಚಾಲನೆ ಮಾಡಿ'
    },
    Bengali: {
      input: 'Aage pothole hai, dhyan se chalein',
      output: 'সামনে গর্ত আছে, সাবধানে গাড়ি চালান'
    },
    Gujarati: {
      input: 'Aage pothole hai, dhyan se chalein',
      output: 'આગળ ખાડો છે, ધ્યાનથી વાહન ચલાવો'
    },
  };

  const currentTranslation = translationExamples[selectedLanguage] || translationExamples['English'];

  return (
    <div className="flex-1 flex flex-col justify-between bg-white text-[#1A1A1A] select-none">
      <div className="p-4 space-y-3.5 flex-1 overflow-y-auto">
        {/* Top Bar: Language */}
        <div className="flex items-center justify-between pb-1 border-b border-gray-100">
          <div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              Localization
            </span>
            <h2 className="text-base font-bold text-gray-900">App & Alert Language</h2>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-[#E8F5E9] text-[#1B5E20] text-[10px] font-bold">
            8 Indic Languages
          </span>
        </div>

        {/* Translation Preview Card */}
        <div className="p-3.5 bg-gradient-to-br from-[#F5F7FA] to-[#E8F5E9]/40 border border-green-200 rounded-2xl shadow-2xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#1B5E20] flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              <span>Real-Time Voice & Screen Translation</span>
            </span>
            <span className="text-[9px] font-bold text-emerald-800 bg-white px-2 py-0.5 rounded border border-green-200">
              Edge Bhashini Model
            </span>
          </div>

          <div className="space-y-1.5 pt-1">
            <div className="p-2 bg-white rounded-xl border border-gray-200 text-xs">
              <span className="text-[9px] font-bold uppercase text-gray-400 block">Input (Speech / Prompt):</span>
              <p className="font-semibold text-gray-800 mt-0.5">
                "{currentTranslation.input}"
              </p>
            </div>

            <div className="flex justify-center -my-1 relative z-10">
              <div className="w-5 h-5 rounded-full bg-[#1B5E20] text-white flex items-center justify-center shadow-xs">
                <ArrowRight className="w-3 h-3 rotate-90" />
              </div>
            </div>

            <div className="p-2 bg-white rounded-xl border border-emerald-300 text-xs shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-bold uppercase text-[#1B5E20]">
                  Output ({selectedLanguage}):
                </span>
                <Volume2 className="w-3.5 h-3.5 text-[#1B5E20] cursor-pointer hover:scale-110 transition-transform" />
              </div>
              <p className="font-bold text-[#1B5E20] text-sm mt-0.5">
                "{currentTranslation.output}"
              </p>
            </div>
          </div>
        </div>

        {/* Language List with Radio Buttons */}
        <div>
          <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">
            Select Preferred Language
          </label>
          <div className="space-y-1.5">
            {languages.map((lang) => {
              const isSelected = selectedLanguage === lang.id;

              return (
                <div
                  key={lang.id}
                  onClick={() => setSelectedLanguage(lang.id)}
                  className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'border-[#1B5E20] bg-[#E8F5E9]/50 shadow-2xs'
                      : 'border-gray-200 bg-gray-50/70 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold ${
                        isSelected
                          ? 'bg-[#1B5E20] text-white'
                          : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {lang.native.charAt(0)}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-gray-900 block">
                        {lang.native}
                      </span>
                      <span className="text-[10px] text-gray-500">{lang.id}</span>
                    </div>
                  </div>

                  {/* Radio Button */}
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      isSelected ? 'border-[#1B5E20] bg-[#1B5E20]' : 'border-gray-300'
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3 text-white stroke-[3]" />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <BottomTabBar activeTab="profile" />
    </div>
  );
};

import React, { useState } from 'react';
import { VeritasLogo } from '../components/VeritasLogo';
import { BottomTabBar } from '../components/BottomTabBar';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';

export const Screen01_Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('khushi@example.com');
  const [password, setPassword] = useState('••••••••••••');

  return (
    <div className="flex-1 flex flex-col justify-between bg-white text-[#1A1A1A]">
      <div className="px-6 pt-6 pb-4 flex flex-col flex-1">
        {/* Top Logo & Branding */}
        <div className="pt-4 pb-6 flex flex-col items-center">
          <VeritasLogo size="lg" showText={true} showTagline={true} />
        </div>

        {/* Welcome Text */}
        <div className="mb-5 text-left">
          <h2 className="text-xl font-bold text-[#1A1A1A]">Welcome Back</h2>
          <p className="text-xs text-gray-500 mt-1">
            Sign in to start safer driving and community alert monitoring.
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-3.5">
          <div>
            <label className="block text-[11px] font-semibold text-gray-600 uppercase tracking-wider mb-1">
              Email or Phone Number
            </label>
            <div className="relative flex items-center">
              <div className="absolute left-3 text-gray-400">
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@domain.com or phone"
                className="w-full pl-9 pr-3 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#1B5E20] focus:ring-1 focus:ring-[#1B5E20] transition-colors"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-[11px] font-semibold text-gray-600 uppercase tracking-wider">
                Password
              </label>
              <a href="#forgot" className="text-[11px] font-semibold text-[#1B5E20] hover:underline">
                Forgot Password?
              </a>
            </div>
            <div className="relative flex items-center">
              <div className="absolute left-3 text-gray-400">
                <Lock className="w-4 h-4" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full pl-9 pr-9 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#1B5E20] focus:ring-1 focus:ring-[#1B5E20] transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button className="w-full py-3 bg-[#1B5E20] hover:bg-[#154a19] text-white text-xs font-bold rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-colors mt-2">
            <span>Login to VERITAS</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Divider OR */}
        <div className="relative my-4 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <span className="relative px-3 bg-white text-[11px] font-semibold text-gray-400 uppercase">
            OR
          </span>
        </div>

        {/* Google Login Button */}
        <button className="w-full py-2.5 border border-gray-200 hover:bg-gray-50 text-xs font-semibold text-gray-700 rounded-xl flex items-center justify-center gap-2.5 transition-colors shadow-sm">
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
          <span>Continue with Google</span>
        </button>

        {/* Register footer */}
        <div className="mt-auto pt-4 text-center">
          <p className="text-xs text-gray-500">
            Don't have an account?{' '}
            <a href="#register" className="font-bold text-[#1B5E20] hover:underline">
              Register now
            </a>
          </p>
        </div>
      </div>

      <BottomTabBar activeTab="home" />
    </div>
  );
};

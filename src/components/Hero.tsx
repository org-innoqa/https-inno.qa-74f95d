import React from 'react';
import { ArrowRight, Shield, Award, Zap, CheckCircle } from 'lucide-react';

interface HeroProps {
  setActiveTab: (tab: 'home' | 'solutions' | 'inquire' | 'dashboard') => void;
}

export default function Hero({ setActiveTab }: HeroProps) {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-xs sm:text-sm font-semibold">
              <span className="px-2 py-0.5 rounded-full bg-brand-500 text-white text-[10px] font-bold uppercase tracking-wider">New</span>
              <span>FIA eCPD Platform & Mobility Solutions</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-none">
              Digitalizing <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-cyan-400">CPD & Mobility</span> for Global Clubs
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              We build high-performance digital solutions for prestigious mobility clubs like <strong className="text-white">ADAC</strong> and federations in the <strong className="text-white">MENA region</strong>. Empowering your workforce, marshals, and members with FIA-compliant eCPD training.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setActiveTab('inquire')}
                className="px-8 py-4 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-lg transition-all shadow-lg shadow-brand-500/25 flex items-center justify-center gap-2 group"
              >
                B2B Inquiry Wizard
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => setActiveTab('solutions')}
                className="px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-semibold text-lg transition-all flex items-center justify-center gap-2"
              >
                Explore Case Studies
              </button>
            </div>

            {/* Trust Badges / Quick Stats */}
            <div className="pt-8 border-t border-slate-900 grid grid-cols-3 gap-4 sm:gap-8">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">140+</p>
                <p className="text-xs sm:text-sm text-slate-400">FIA Clubs Targeted</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">100%</p>
                <p className="text-xs sm:text-sm text-slate-400">Digital eCPD Compliance</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">MENA</p>
                <p className="text-xs sm:text-sm text-slate-400">Dedicated Support Hub</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Mockup / Interactive Card */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/20 to-cyan-500/20 rounded-3xl blur-3xl" />
            <div className="relative bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 sm:p-8 glow-blue overflow-hidden">
              {/* Decorative background grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

              <div className="relative space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-brand-500 animate-ping" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand-400">Live Platform Demo</span>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">v2.4-stable</span>
                </div>

                {/* Interactive Mockup Card */}
                <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm">FIA Marshal Certification</h4>
                        <p className="text-xs text-slate-400">eCPD Module 4: Track Safety</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-md">98% Pass</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">Course Completion</span>
                      <span className="text-white font-semibold">85%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-brand-500 to-cyan-400 rounded-full" style={{ width: '85%' }} />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800/50">
                      <p className="text-[10px] text-slate-500 uppercase font-semibold">Active Users</p>
                      <p className="text-sm font-bold text-white">12,450</p>
                    </div>
                    <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800/50">
                      <p className="text-[10px] text-slate-500 uppercase font-semibold">Region</p>
                      <p className="text-sm font-bold text-white">MENA & EU</p>
                    </div>
                  </div>
                </div>

                {/* Feature highlights */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300">
                      <strong className="text-white">ADAC-Inspired</strong> workflows for roadside assistance and digital membership.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300">
                      <strong className="text-white">MENA Localization</strong> with customized modules for SAMF, EMSO, and regional clubs.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300">
                      <strong className="text-white">Seamless API</strong> integrations for EV charging, smart parking, and MaaS.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MobilityTimeline from './components/MobilityTimeline';
import InquiryWizard from './components/InquiryWizard';
import InquiryDashboard from './components/InquiryDashboard';
import {
  Shield,
  Cpu,
  Globe,
  Award,
  CheckCircle2,
  ArrowRight,
  Users,
  Zap,
  MapPin,
  ChevronRight,
  FileText
} from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'solutions' | 'inquire' | 'dashboard'>('home');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-brand-500 selection:text-white">
      {/* Background decorative gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-900/15 rounded-full blur-3xl pointer-events-none" />

      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="pt-20">
        {activeTab === 'home' && (
          <>
            <Hero setActiveTab={setActiveTab} />

            {/* Dedicated Mobility Area Teaser */}
            <section className="py-24 border-t border-slate-900 bg-slate-950 relative overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-7 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-sm font-medium">
                      <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
                      MENA & Global Mobility Focus
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                      Empowering Mobility Clubs & Federations Worldwide
                    </h2>
                    <p className="text-lg text-slate-400 leading-relaxed">
                      From <strong className="text-white">ADAC</strong> in Europe to leading clubs in the <strong className="text-white">MENA region</strong>, we deliver the next generation of digital mobility solutions. Our flagship <strong className="text-brand-400">FIA eCPD</strong> platform digitalizes Continuing Professional Development, ensuring your marshals, safety officers, and club members are certified to the highest global standards.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6 pt-4">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-950 border border-brand-800 flex items-center justify-center text-brand-400">
                          <Award className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">FIA eCPD Standard</h4>
                          <p className="text-sm text-slate-400">Fully compliant digital training & certification ecosystem.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-950 border border-brand-800 flex items-center justify-center text-brand-400">
                          <Cpu className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">MaaS Integration</h4>
                          <p className="text-sm text-slate-400">Seamless APIs for roadside assistance, EV charging, and smart parking.</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 flex flex-wrap gap-4">
                      <button
                        onClick={() => setActiveTab('solutions')}
                        className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold transition-all flex items-center gap-2 shadow-lg shadow-brand-950/50"
                      >
                        Explore Mobility Projects <ArrowRight className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setActiveTab('inquire')}
                        className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-semibold transition-all"
                      >
                        B2B Inquiry Portal
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-5 relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/10 to-cyan-500/10 rounded-3xl blur-2xl" />
                    <div className="relative bg-slate-900/80 border border-slate-800 rounded-3xl p-6 glow-blue">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full bg-red-500" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500" />
                          <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <span className="text-xs text-slate-500 font-mono">inno.qa/mobility-suite</span>
                      </div>

                      <div className="space-y-4">
                        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/60 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-400 font-bold">
                              EU
                            </div>
                            <div>
                              <p className="text-xs text-slate-500">Active Partner</p>
                              <p className="text-sm font-semibold text-white">ADAC Digital Training</p>
                            </div>
                          </div>
                          <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20">Active</span>
                        </div>

                        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/60 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold">
                              ME
                            </div>
                            <div>
                              <p className="text-xs text-slate-500">Active Partner</p>
                              <p className="text-sm font-semibold text-white">SAMF Marshal eCPD</p>
                            </div>
                          </div>
                          <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20">Active</span>
                        </div>

                        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/60 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 font-bold">
                              GL
                            </div>
                            <div>
                              <p className="text-xs text-slate-500">Global Standard</p>
                              <p className="text-sm font-semibold text-white">FIA eCPD Platform</p>
                            </div>
                          </div>
                          <span className="px-2.5 py-1 rounded-full bg-brand-500/10 text-brand-400 text-xs font-medium border border-brand-500/20">Deploying</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Core Features Grid */}
            <section className="py-20 bg-slate-900/40 border-t border-slate-900">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-3xl font-bold text-white">Why Mobility Clubs Choose Inno.QA</h2>
                  <p className="text-slate-400 mt-4">
                    We bridge the gap between traditional automotive club services and modern digital expectations.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-brand-500/50 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400 mb-6 group-hover:scale-110 transition-transform">
                      <Shield className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">FIA-Compliant eCPD</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Fully aligned with FIA standards for Continuing Professional Development. Track, certify, and audit marshal and club staff training seamlessly.
                    </p>
                  </div>

                  <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-brand-500/50 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                      <Globe className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">MENA Region Localization</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Tailored for Middle East & North Africa clubs with full Arabic language support, local payment gateways, and regional compliance standards.
                    </p>
                  </div>

                  <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-brand-500/50 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                      <Zap className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">MaaS & EV Ready</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Integrate modern mobility features like EV charging station finders, smart parking, digital membership cards, and instant roadside dispatch.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-gradient-to-b from-slate-950 to-brand-950/30 border-t border-slate-900">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Ready to Digitalize Your Mobility Club?
                </h2>
                <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                  Join leading clubs like ADAC and SAMF. Use our interactive wizard to design your custom mobility and eCPD solution in under 5 minutes.
                </p>
                <button
                  onClick={() => setActiveTab('inquire')}
                  className="px-8 py-4 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-lg transition-all shadow-lg shadow-brand-500/20 inline-flex items-center gap-3"
                >
                  Launch Inquiry Wizard <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </section>
          </>
        )}

        {activeTab === 'solutions' && (
          <div className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
              <div className="text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-sm font-medium mb-4">
                  What We Do
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                  Global Mobility Solutions
                </h1>
                <p className="text-lg text-slate-400 mt-4">
                  A comprehensive look at how we digitalize automotive clubs, integrate MaaS, and power the FIA eCPD platform globally.
                </p>
              </div>
            </div>

            {/* Storytelling Timeline Component */}
            <MobilityTimeline />

            {/* Modular Suite Showcase */}
            <section className="py-20 bg-slate-900/30 border-t border-slate-900 mt-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-3xl font-bold text-white">Our Modular Mobility Suite</h2>
                  <p className="text-slate-400 mt-2">Pick and choose the modules your club needs to succeed.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      title: "eCPD & Training",
                      desc: "Digital learning, marshal certification, and safety training aligned with FIA standards.",
                      icon: Award,
                      color: "text-brand-400 bg-brand-500/10"
                    },
                    {
                      title: "Digital Membership",
                      desc: "Virtual club cards, Apple/Google Wallet integration, and instant benefit verification.",
                      icon: Users,
                      color: "text-emerald-400 bg-emerald-500/10"
                    },
                    {
                      title: "Roadside Dispatch",
                      desc: "Real-time GPS tracking, automated dispatch, and digital communication for breakdown assistance.",
                      icon: MapPin,
                      color: "text-cyan-400 bg-cyan-500/10"
                    },
                    {
                      title: "EV & Smart MaaS",
                      desc: "EV charger mapping, real-time fuel prices, smart parking, and toll payment integrations.",
                      icon: Zap,
                      color: "text-amber-400 bg-amber-500/10"
                    }
                  ].map((module, idx) => (
                    <div key={idx} className="p-6 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-all">
                      <div className={`w-10 h-10 rounded-lg ${module.color} flex items-center justify-center mb-4`}>
                        <module.icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-white text-lg mb-2">{module.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{module.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'inquire' && (
          <div className="py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-white tracking-tight">B2B Mobility Inquiry Portal</h1>
                <p className="text-slate-400 mt-3">
                  Are you a decision maker at ADAC, a MENA region club, or an FIA affiliate? Use our interactive wizard to define your digital requirements.
                </p>
              </div>

              <InquiryWizard onComplete={() => setActiveTab('dashboard')} />
            </div>
          </div>
        )}

        {activeTab === 'dashboard' && (
          <div className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-white tracking-tight">Inquiry Dashboard</h1>
                <p className="text-slate-400 mt-3">
                  Real-time view of B2B inquiries submitted by global mobility clubs and federations.
                </p>
              </div>

              <InquiryDashboard />
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-extrabold tracking-tight text-white">
                  INNO<span className="text-brand-500">.QA</span>
                </span>
              </div>
              <p className="text-sm text-slate-400">
                Digitalizing Continuing Professional Development (CPD) and smart mobility solutions for FIA clubs worldwide.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Solutions</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><button onClick={() => setActiveTab('solutions')} className="hover:text-white">FIA eCPD Platform</button></li>
                <li><button onClick={() => setActiveTab('solutions')} className="hover:text-white">MaaS Integration</button></li>
                <li><button onClick={() => setActiveTab('solutions')} className="hover:text-white">Roadside Assistance</button></li>
                <li><button onClick={() => setActiveTab('solutions')} className="hover:text-white">Digital Licensing</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Target Regions</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><span className="text-slate-300">Europe (ADAC, TCS)</span></li>
                <li><span className="text-slate-300">MENA Region (SAMF, EMSO)</span></li>
                <li><span className="text-slate-300">North America (AAA)</span></li>
                <li><span className="text-slate-300">Asia Pacific (NRMA, RACV)</span></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contact & Inquiries</h4>
              <p className="text-sm text-slate-400 mb-4">
                Directly submit your club requirements via our interactive wizard.
              </p>
              <button
                onClick={() => setActiveTab('inquire')}
                className="w-full py-2.5 px-4 rounded-lg bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm transition-all text-center"
              >
                Start Inquiry Wizard
              </button>
            </div>
          </div>
          <div className="border-t border-slate-900 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              &copy; {new Date().getFullYear()} Inno.QA. All rights reserved. Developed for FIA & Global Mobility Clubs.
            </p>
            <div className="flex gap-6 text-xs text-slate-500">
              <a href="#" className="hover:text-slate-300">Privacy Policy</a>
              <a href="#" className="hover:text-slate-300">Terms of Service</a>
              <a href="https://inno.qa/" target="_blank" rel="noreferrer" className="hover:text-slate-300">Official Website</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
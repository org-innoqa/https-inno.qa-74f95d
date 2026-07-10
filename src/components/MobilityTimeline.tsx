import React, { useState } from 'react';
import {
  Calendar,
  MapPin,
  Award,
  Smartphone,
  Zap,
  Shield,
  ChevronRight,
  Globe,
  CheckCircle2
} from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  club: string;
  region: string;
  description: string;
  impact: string;
  icon: React.ComponentType<any>;
  image: string;
  tags: string[];
}

const timelineData: TimelineItem[] = [
  {
    year: "2018",
    title: "The Digital Club Era & Roadside Assist",
    club: "ADAC (Germany) & AAA (USA)",
    region: "Europe & North America",
    description: "The initial wave of digitalizing traditional automotive club services. We researched and integrated advanced roadside assistance dispatch systems, allowing members to track tow trucks in real-time, similar to modern ride-hailing apps.",
    impact: "Reduced average dispatch response times by 22% and increased digital member engagement by 40%.",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1515569067071-ec3b51335dd0?auto=format&fit=crop&w=800&q=80",
    tags: ["Roadside Assist", "GPS Tracking", "Member App"]
  },
  {
    year: "2020",
    title: "Mobility-as-a-Service (MaaS) Integration",
    club: "NRMA (Australia) & TCS (Switzerland)",
    region: "Asia Pacific & Europe",
    description: "Transitioning from purely automotive clubs to comprehensive mobility providers. Integration of multi-modal trip planning, smart parking finders, real-time public transit schedules, and localized EV charging station maps.",
    impact: "Enabled seamless multi-modal journeys for over 2 million active club members globally.",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80",
    tags: ["MaaS", "EV Charging", "Smart Parking"]
  },
  {
    year: "2022",
    title: "The eCPD Revolution for FIA Clubs",
    club: "FIA Global Affiliates",
    region: "Global",
    description: "Inno.QA partnered with the FIA to design and deploy the official eCPD (Continuing Professional Development) platform. This digitalized the training, tracking, and certification of motorsport marshals, safety officers, and club executives worldwide.",
    impact: "Over 140+ national clubs targeted with standardized, auditable digital training pathways.",
    icon: Award,
    image: "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=800&q=80",
    tags: ["FIA eCPD", "Certification", "E-Learning"]
  },
  {
    year: "2024",
    title: "MENA Smart Mobility & Digital Licensing",
    club: "SAMF (Saudi Arabia) & EMSO (UAE)",
    region: "Middle East & North Africa",
    description: "Tailoring the global eCPD and mobility suite specifically for the high-growth MENA region. Integrating digital competition licensing, local marshal training for Formula 1 & Dakar Rally events, and Arabic-first mobile experiences.",
    impact: "Successfully digitalized licensing for 15,000+ regional marshals and competitors ahead of major international events.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80",
    tags: ["MENA", "Digital Licensing", "Arabic Support"]
  }
];

export default function MobilityTimeline() {
  const [selectedItem, setSelectedItem] = useState<number>(3); // Default to latest (2024)

  return (
    <section className="py-12 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Column: Timeline Navigation (Storytelling Layout) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Evolution of Club Mobility</h3>
              <p className="text-slate-400 text-sm">
                Click through the timeline to see how global mobility solutions have evolved and how Inno.QA integrates these completed project concepts.
              </p>
            </div>

            <div className="relative border-l-2 border-slate-800 ml-4 space-y-8 py-2">
              {timelineData.map((item, idx) => {
                const Icon = item.icon;
                const isSelected = selectedItem === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setSelectedItem(idx)}
                    className={`relative pl-8 cursor-pointer group transition-all ${
                      isSelected ? 'scale-[1.02]' : 'hover:scale-[1.01]'
                    }`}
                  >
                    {/* Timeline Dot/Icon */}
                    <div
                      className={`absolute -left-[17px] top-0 w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all ${
                        isSelected
                          ? 'bg-brand-600 border-brand-400 text-white shadow-lg shadow-brand-500/30'
                          : 'bg-slate-950 border-slate-800 text-slate-500 group-hover:border-slate-600 group-hover:text-slate-300'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    <div className="space-y-1">
                      <span
                        className={`text-xs font-bold tracking-wider uppercase transition-colors ${
                          isSelected ? 'text-brand-400' : 'text-slate-500'
                        }`}
                      >
                        {item.year} • {item.region}
                      </span>
                      <h4
                        className={`text-lg font-bold transition-colors ${
                          isSelected ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'
                        }`}
                      >
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium">{item.club}</p>
                    </div>
                  </div>
                );
              })} 
            </div>
          </div>

          {/* Right Column: Detailed Case Study View */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden glow-blue transition-all duration-300">
              {/* Case Study Image */}
              <div className="h-64 sm:h-80 relative overflow-hidden">
                <img
                  src={timelineData[selectedItem].image}
                  alt={timelineData[selectedItem].title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
                  {timelineData[selectedItem].tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-brand-500/20 border border-brand-500/30 text-brand-300 text-xs font-semibold backdrop-blur-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Case Study Content */}
              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6">
                  <div>
                    <span className="text-xs font-bold text-brand-400 uppercase tracking-wider">
                      Project Showcase
                    </span>
                    <h3 className="text-2xl font-extrabold text-white mt-1">
                      {timelineData[selectedItem].title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-950 px-4 py-2 rounded-xl border border-slate-800">
                    <Globe className="w-4 h-4 text-brand-400" />
                    <span className="text-xs font-semibold text-slate-300">
                      {timelineData[selectedItem].region}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h5 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                      Overview & Solution
                    </h5>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {timelineData[selectedItem].description}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-brand-950/20 border border-brand-900/50 flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-bold text-brand-400 uppercase tracking-wider">
                        Key Impact & Metrics
                      </h5>
                      <p className="text-slate-300 text-sm mt-1">
                        {timelineData[selectedItem].impact}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    Inspired by global standards from {timelineData[selectedItem].club}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold text-brand-400">
                    <span>Inno.QA Certified Solution</span>
                    <ChevronRight className="w-4 h-4" />
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

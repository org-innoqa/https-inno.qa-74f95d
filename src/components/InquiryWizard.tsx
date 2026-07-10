import React, { useState } from 'react';
import { db } from '../lib/db';
import {
  Building2,
  User,
  Mail,
  Globe,
  Users,
  CheckSquare,
  Calendar,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Loader2
} from 'lucide-react';

interface InquiryWizardProps {
  onComplete: () => void;
}

export default function InquiryWizard({ onComplete }: InquiryWizardProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    clubName: '',
    contactName: '',
    contactEmail: '',
    region: 'MENA',
    clubSize: '10k - 100k Members',
    needs: [] as string[],
    timeline: 'Within 3 months',
    additionalInfo: ''
  });

  const regions = ['MENA', 'Europe', 'North America', 'Asia Pacific', 'Latin America', 'Africa'];
  const clubSizes = ['Under 10k Members', '10k - 100k Members', '100k - 1M Members', '1M+ Members'];
  const needsOptions = [
    'eCPD Platform (FIA Standard)',
    'Digital Competition Licensing',
    'Roadside Assistance Integration',
    'EV Charging Hub Integration',
    'Smart Membership Cards',
    'Custom Club Mobile App'
  ];
  const timelines = ['Immediate', 'Within 3 months', 'Within 6 months', 'Planning Phase'];

  const handleCheckboxChange = (need: string) => {
    if (formData.needs.includes(need)) {
      setFormData({
        ...formData,
        needs: formData.needs.filter((item) => item !== need)
      });
    } else {
      setFormData({
        ...formData,
        needs: [...formData.needs, need]
      });
    }
  };

  const handleNext = () => {
    if (step === 1 && (!formData.clubName || !formData.contactName || !formData.contactEmail)) {
      setError('Please fill in all contact details.');
      return;
    }
    if (step === 2 && formData.needs.length === 0) {
      setError('Please select at least one digital need.');
      return;
    }
    setError(null);
    setStep(step + 1);
  };

  const handleBack = () => {
    setError(null);
    setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Insert into PostgREST database
      await db.insert('inquiries', {
        club_name: formData.clubName,
        contact_name: formData.contactName,
        contact_email: formData.contactEmail,
        region: formData.region,
        club_size: formData.clubSize,
        needs: formData.needs,
        timeline: formData.timeline,
        additional_info: formData.additionalInfo,
        status: 'New'
      });

      setSuccess(true);
    } catch (err: any) {
      console.error('Error saving inquiry:', err);
      setError('Failed to submit inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-10 glow-blue relative overflow-hidden">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-xs text-slate-400 mb-2">
          <span>Step {step} of 4</span>
          <span>{Math.round((step / 4) * 100)}% Complete</span>
        </div>
        <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-brand-500 to-cyan-400 transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
          {error}
        </div>
      )}

      {success ? (
        <div className="text-center py-12 space-y-6">
          <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white">Inquiry Submitted Successfully!</h3>
            <p className="text-slate-400 max-w-md mx-auto">
              Thank you for reaching out to Inno.QA. Our mobility solutions team will review your requirements and contact you within 24 hours.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 text-left max-w-md mx-auto space-y-3">
            <h4 className="font-bold text-white text-sm border-b border-slate-800 pb-2">Summary of Request</h4>
            <p className="text-xs text-slate-400"><strong className="text-slate-300">Club:</strong> {formData.clubName}</p>
            <p className="text-xs text-slate-400"><strong className="text-slate-300">Region:</strong> {formData.region}</p>
            <p className="text-xs text-slate-400"><strong className="text-slate-300">Needs:</strong> {formData.needs.join(', ')}</p>
            <p className="text-xs text-slate-400"><strong className="text-slate-300">Timeline:</strong> {formData.timeline}</p>
          </div>

          <div className="pt-4">
            <button
              onClick={onComplete}
              className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold transition-all"
            >
              View Inquiry Dashboard
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* STEP 1: Club & Contact Info */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Club & Contact Information</h3>
                <p className="text-sm text-slate-400">Tell us about your organization and how we can reach you.</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Club / Organization Name</label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                    <input
                      type="text"
                      placeholder="e.g., ADAC Regional Office or SAMF"
                      value={formData.clubName}
                      onChange={(e) => setFormData({ ...formData, clubName: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-brand-500 transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Contact Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-brand-500 transition-all"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Contact Email</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                      <input
                        type="email"
                        placeholder="you@club.org"
                        value={formData.contactEmail}
                        onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-brand-500 transition-all"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Region & Size */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Demographics & Scale</h3>
                <p className="text-sm text-slate-400">Help us understand your region and member base size.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Primary Region</label>
                  <div className="grid grid-cols-2 gap-2">
                    {regions.map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => setFormData({ ...formData, region: r })}
                        className={`py-3 px-4 rounded-xl border text-sm font-semibold transition-all text-center ${
                          formData.region === r
                            ? 'bg-brand-600 border-brand-400 text-white'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Total Member Base</label>
                  <div className="space-y-2">
                    {clubSizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setFormData({ ...formData, clubSize: size })}
                        className={`w-full py-3 px-4 rounded-xl border text-sm font-semibold transition-all text-left flex items-center justify-between ${
                          formData.clubSize === size
                            ? 'bg-brand-600 border-brand-400 text-white'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <span>{size}</span>
                        <Users className="w-4 h-4 opacity-60" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Digital Needs */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Digital Requirements</h3>
                <p className="text-sm text-slate-400">Select the modules you are interested in deploying (Select all that apply).</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {needsOptions.map((need) => {
                  const isSelected = formData.needs.includes(need);
                  return (
                    <div
                      key={need}
                      onClick={() => handleCheckboxChange(need)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                        isSelected
                          ? 'bg-brand-950/40 border-brand-500 text-white'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded flex items-center justify-center border mt-0.5 transition-all ${
                        isSelected ? 'bg-brand-500 border-brand-400 text-white' : 'border-slate-700'
                      }`}>
                        {isSelected && <CheckSquare className="w-4 h-4" />}
                      </div>
                      <span className="text-sm font-medium">{need}</span>
                    </div>
                  );
                })} 
              </div>
            </div>
          )}

          {/* STEP 4: Timeline & Additional Info */}
          {step === 4 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Timeline & Additional Details</h3>
                <p className="text-sm text-slate-400">When are you planning to launch, and is there anything else we should know?</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Target Launch Timeline</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {timelines.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setFormData({ ...formData, timeline: t })}
                        className={`py-3 px-2 rounded-xl border text-xs sm:text-sm font-semibold transition-all text-center ${
                          formData.timeline === t
                            ? 'bg-brand-600 border-brand-400 text-white'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Additional Requirements / Notes</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about any specific integrations, localized requirements, or custom workflows you need..."
                    value={formData.additionalInfo}
                    onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                    className="w-full p-4 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-brand-500 transition-all resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center pt-6 border-t border-slate-800/60">
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="px-5 py-3 rounded-xl bg-slate-950 hover:bg-slate-900 text-slate-300 border border-slate-800 font-semibold transition-all flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
            ) : (
              <div />
            )}

            {step < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold transition-all flex items-center gap-2 ml-auto"
              >
                Next <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold transition-all flex items-center gap-2 ml-auto disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-brand-500/20"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Submitting...
                  </>
                ) : (
                  <>
                    Submit Inquiry <CheckCircle2 className="w-5 h-5" />
                  </>
                )}
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { db } from '../lib/db';
import {
  Building2,
  User,
  Mail,
  Globe,
  Users,
  Calendar,
  Clock,
  RefreshCw,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

interface Inquiry {
  id: number;
  club_name: string;
  contact_name: string;
  contact_email: string;
  region: string;
  club_size: string;
  needs: string[];
  timeline: string;
  additional_info: string;
  status: string;
  created_at: string;
}

export default function InquiryDashboard() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchInquiries = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await db.select('inquiries', '?order=created_at.desc');
      setInquiries(data as Inquiry[]);
    } catch (err: any) {
      console.error('Error fetching inquiries:', err);
      setError('Failed to load inquiries. Please refresh.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'new':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'in review':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'contacted':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      default:
        return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-white">Submitted B2B Leads</h3>
        <button
          onClick={fetchInquiries}
          disabled={isLoading}
          className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-all flex items-center gap-2 text-sm disabled:opacity-50"
        >
          <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
          Refresh
        </button>
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-2">
          <AlertCircle className="w-5 h-5" />
          {error}
        </div>
      )}

      {isLoading ? (
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2].map((n) => (
            <div key={n} className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 animate-pulse space-y-4">
              <div className="h-6 bg-slate-800 rounded w-1/3" />
              <div className="h-4 bg-slate-800 rounded w-1/2" />
              <div className="h-20 bg-slate-800 rounded" />
            </div>
          ))}
        </div>
      ) : inquiries.length === 0 ? (
        <div className="text-center py-12 bg-slate-900/20 border border-slate-800 rounded-2xl">
          <p className="text-slate-400">No inquiries found. Be the first to submit one!</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {inquiries.map((inquiry) => (
            <div
              key={inquiry.id}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-6 relative overflow-hidden group"
            >
              {/* Top Row: Club Name & Status */}
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-brand-400" />
                    <h4 className="font-bold text-white text-lg group-hover:text-brand-400 transition-colors">
                      {inquiry.club_name}
                    </h4>
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${getStatusColor(inquiry.status)}`}>
                    {inquiry.status || 'New'}
                  </span>
                </div>

                {/* Contact Info */}
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" /> {inquiry.contact_name}
                  </span>
                  <span className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5" /> {inquiry.contact_email}
                  </span>
                </div>
              </div>

              {/* Middle: Needs & Details */}
              <div className="space-y-3 bg-slate-950/60 p-4 rounded-xl border border-slate-800/60">
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                    Requested Modules
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {inquiry.needs && inquiry.needs.map((need, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-medium"
                      >
                        {need}
                      </span>
                    ))}
                  </div>
                </div>

                {inquiry.additional_info && (
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                      Additional Notes
                    </span>
                    <p className="text-xs text-slate-300 line-clamp-2 italic">
                      "{inquiry.additional_info}"
                    </p>
                  </div>
                )} 
              </div>

              {/* Bottom: Metadata */}
              <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-800/60 pt-4">
                <span className="flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5" /> {inquiry.region} • {inquiry.club_size}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {new Date(inquiry.created_at).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

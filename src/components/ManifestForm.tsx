import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Loader2, Settings, Globe, CheckCircle2 } from 'lucide-react';

interface ManifestFormProps {
  embedded?: boolean;
}

const INDUSTRIES = [
  "E-commerce",
  "Healthcare",
  "Real Estate",
  "Logistics",
  "SaaS",
  "Manufacturing",
  "Other"
];

export default function ManifestForm({ embedded = false }: ManifestFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    operationFocus: '',
    industry: ''
  });
  const webhookUrl = import.meta.env.VITE_WEBHOOK_URL || '';
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      if (!webhookUrl) {
         console.log('No webhook URL configured. Manifest data:', formData);
         await new Promise(resolve => setTimeout(resolve, 1500));
         setSubmitStatus('success');
      } else {
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            timestamp: new Date().toISOString(),
            source: 'RunOps AI Manifest'
          })
        });

        if (response.ok) {
          setSubmitStatus('success');
        } else {
          setSubmitStatus('error');
        }
      }
    } catch (error) {
      console.error('Webhook trigger failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-20"
      >
        <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 size={48} className="text-green-500" />
        </div>
        <h3 className="text-4xl font-serif italic text-theme-text mb-6">Thank You.</h3>
        <p className="text-theme-text/60 text-lg mb-12 font-light italic leading-relaxed max-w-sm mx-auto">
          We have received your details. Our team will review your enquiry and contact you shortly to discuss the next steps.
        </p>
        <button 
          onClick={() => setSubmitStatus('idle')}
          className="text-xs font-black uppercase tracking-[0.3em] text-lavender light:text-brand-purple border-b border-lavender/30 pb-2"
        >
          Submit Another Enquiry
        </button>
      </motion.div>
    );
  }

  return (
    <div className={`w-full ${embedded ? '' : 'max-w-2xl'}`}>
      <div className="flex justify-between items-center mb-12">
        <div className="flex items-center gap-4">
          <Globe className="text-lavender/40" size={20} />
          <h3 className="label-micro opacity-80">Enquiry Protocol</h3>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-theme-text/80 block">First Name</label>
            <input 
              required
              value={formData.firstName}
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
              className="w-full bg-transparent border-b border-theme-border pb-4 text-theme-text font-serif italic text-xl focus:border-lavender outline-none transition-all placeholder:opacity-10"
              placeholder="First Name"
            />
          </div>
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-theme-text/80 block">Last Name</label>
            <input 
              required
              value={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
              className="w-full bg-transparent border-b border-theme-border pb-4 text-theme-text font-serif italic text-xl focus:border-lavender outline-none transition-all placeholder:opacity-10"
              placeholder="Last Name"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-theme-text/80 block">Mobile Number</label>
            <input 
              required
              type="tel"
              value={formData.mobile}
              onChange={(e) => setFormData({...formData, mobile: e.target.value})}
              className="w-full bg-transparent border-b border-theme-border pb-4 text-theme-text font-serif italic text-xl focus:border-lavender outline-none transition-all placeholder:opacity-10"
              placeholder="+1 (555) 000-0000"
            />
          </div>
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-theme-text/80 block">Commercial Sector</label>
            <div className="relative">
              <select 
                required
                value={formData.industry}
                onChange={(e) => setFormData({...formData, industry: e.target.value})}
                className="w-full bg-transparent border-b border-theme-border pb-4 text-theme-text font-serif italic text-xl focus:border-lavender outline-none transition-all appearance-none cursor-pointer"
              >
                <option value="" className="bg-theme-bg">Select Sector</option>
                {INDUSTRIES.map(ind => (
                  <option key={ind} value={ind} className="bg-theme-bg">{ind}</option>
                ))}
              </select>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                <ArrowRight className="rotate-90" size={16} />
              </div>
            </div>
          </div>
        </div>

        <button 
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-lavender light:bg-brand-purple text-black light:text-white py-8 text-[11px] font-black uppercase tracking-[0.5em] hover:brightness-110 disabled:opacity-50 transition-all flex items-center justify-center gap-6 group shadow-2xl shadow-lavender/20"
        >
          {isSubmitting ? (
            <>Submitting Enquiry <Loader2 size={20} className="animate-spin" /></>
          ) : (
            <>Submit Enquiry <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform" /></>
          )}
        </button>

        {submitStatus === 'error' && (
          <p className="text-center text-red-400 text-[10px] font-black uppercase tracking-widest animate-pulse">
            Connection Error. Please try again later.
          </p>
        )}
      </form>
    </div>
  );
}

import {motion} from 'motion/react';
import {Mail, Phone, MapPin, Globe, ArrowRight, FileText, CheckCircle, Send} from 'lucide-react';
import React, {useEffect} from 'react';
import RichTextRenderer from '../components/RichTextRenderer';

import {useSite} from '../context/SiteContext';

export default function Contact() {
  const { config, setIsEnquiryModalOpen } = useSite();

  return (
    <div className="relative overflow-hidden">
      {/* Hero Background Style */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1600" 
          alt="AI Concept" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-theme-bg/80" />
      </div>
      
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-brand-purple to-soft-pink opacity-20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-lavender to-transparent opacity-10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-20">
          <motion.div 
            initial={{opacity: 0, x: -30}}
            animate={{opacity: 1, x: 0}}
            className="lg:col-span-12"
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="h-px w-20 bg-lavender/30 light:bg-brand-purple/30" />
              <span className="label-micro text-lavender light:text-brand-purple font-black tracking-[0.5em]">Phase 01: Identification</span>
            </div>
            <h1 className="h1-hero text-theme-text mb-8 italic">
              {config.pages?.contact?.title || 'Initiate Sync'}
            </h1>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5 space-y-12">
            <p className="text-theme-text/50 text-xl font-light italic leading-relaxed transition-colors">
              {config.pages?.contact?.subtitle || ''}
            </p>

            <div className="space-y-10 pt-10">
              <div className="group border-b border-theme-border pb-10">
                <p className="label-micro mb-4">Transmission</p>
                <div className="flex items-center justify-between group">
                   <p className="text-xl font-bold text-theme-text tracking-tight">{config.footer.email}</p>
                   <Mail className="text-lavender/30 light:text-brand-purple/40 group-hover:text-lavender light:group-hover:text-brand-purple transition-colors" size={24} />
                </div>
              </div>

              <div className="group border-b border-theme-border pb-10">
                <p className="label-micro mb-4">Voice Protocol</p>
                <div className="flex items-center justify-between group">
                   <p className="text-xl font-bold text-theme-text tracking-tight">{config.footer.phone}</p>
                   <Phone className="text-lavender/30 light:text-brand-purple/40 group-hover:text-lavender light:group-hover:text-brand-purple transition-colors" size={24} />
                </div>
              </div>

              <div className="group border-b border-theme-border pb-10">
                <p className="label-micro mb-4">Central Node</p>
                <div className="flex items-center justify-between group">
                   <p className="text-xl font-bold text-theme-text tracking-tight">{config.footer.address}</p>
                   <MapPin className="text-lavender/30 light:text-brand-purple/40 group-hover:text-lavender light:group-hover:text-brand-purple transition-colors" size={24} />
                </div>
              </div>
            </div>
            
            <div className="pt-10 flex items-center gap-4 text-theme-text/20">
               <Globe size={16} />
               <p className="text-[9px] uppercase tracking-[0.3em] font-black">Global Synchronous Availability</p>
            </div>
          </div>

          <div className="lg:col-span-1 hidden lg:block" />

          <div className="lg:col-span-6 relative">
             <div className="bg-theme-card border border-theme-border p-8 sm:p-16 rounded-sm relative z-10 shadow-2xl light:shadow-black/5 flex flex-col items-center text-center overflow-hidden">
               <div className="absolute inset-0 opacity-5 pointer-events-none">
                 <img 
                   src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" 
                   alt="Tech Circuit" 
                   className="w-full h-full object-cover"
                   referrerPolicy="no-referrer"
                 />
               </div>
               <motion.div
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="space-y-10"
               >
                 <div className="w-20 h-20 bg-lavender/10 light:bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-8">
                   <FileText size={32} className="text-lavender light:text-brand-purple" />
                 </div>
                 <h2 className="text-3xl font-serif italic text-theme-text mb-6">Operational Manifest</h2>
                 <p className="text-theme-text/50 max-w-sm mx-auto mb-12 text-lg font-light italic leading-relaxed">
                   Launch our encrypted protocol to provide your operational specifications directly to our engineering team.
                 </p>
                 <button 
                   onClick={() => setIsEnquiryModalOpen(true)}
                   className="w-full bg-lavender light:bg-brand-purple text-black light:text-white py-8 text-[11px] font-black uppercase tracking-[0.5em] hover:brightness-110 hover:scale-[1.02] transition-all flex items-center justify-center gap-6 group shadow-2xl shadow-lavender/20"
                 >
                   Open Manifest Portal <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform" />
                 </button>
                 
                 <div className="pt-10 flex justify-center gap-12 opacity-30 text-[9px] uppercase tracking-[0.2em] font-black">
                   <span className="flex items-center gap-2"><Send size={10} /> WEBHOOK SYNC</span>
                   <span className="flex items-center gap-2"><CheckCircle size={10} /> AES-256</span>
                 </div>
               </motion.div>
             </div>
             
             {/* Editorial Accent */}
             <div className="absolute -bottom-10 -right-10 w-40 h-40 border-r border-b border-lavender/20 -z-10" />
          </div>
        </div>
        {config.pages?.contact?.extraContent && config.pages.contact.extraContent.length > 0 && (
          <div className="max-w-4xl mx-auto mt-20 pt-20 border-t border-theme-border">
            <RichTextRenderer blocks={config.pages.contact.extraContent} />
          </div>
        )}
      </div>
    </div>
  );
}

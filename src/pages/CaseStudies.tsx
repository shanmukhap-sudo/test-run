import {motion} from 'motion/react';
import {ArrowRight, BarChart, Clock, Zap, TrendingUp} from 'lucide-react';
import {Link} from 'react-router-dom';
import {useSite} from '../context/SiteContext';

const caseStudies = [
  {
    id: 'nexacare',
    client: 'NexaCare Systems',
    industry: 'Healthcare Operations',
    title: 'From 3 days to 3 minutes',
    challenge: 'Patient onboarding was a manual, error-prone process involving multiple departments and physical paperwork, resulting in a 72-hour delay before treatment could begin.',
    solution: 'We deployed a custom AI Agent cluster that autonomously verified insurance, categorized medical history, and synchronized schedules across hospital nodes.',
    results: [
      {label: 'Onboarding Speed', value: '99% Faster', icon: Clock},
      {label: 'Manual Entry', value: '98% Reduced', icon: Zap},
      {label: 'Data Accuracy', value: '100% Verified', icon: BarChart},
    ],
  },
  {
    id: 'luxstyle',
    client: 'LuxStyle Retail',
    industry: 'E-commerce',
    title: 'Converting Silence into Sales',
    challenge: 'LuxStyle was losing 65% of potential revenue to cart abandonment. Their manual follow-up team could only reach 5% of these leads via email.',
    solution: 'Implementation of an AI-driven WhatsApp Recovery Engine. The system analyzes user behavior and initiates personalized, conversational recovery flows in real-time.',
    results: [
      {label: 'Revenue Lift', value: '+40% Monthly', icon: TrendingUp},
      {label: 'Lead Engagement', value: '85% Interaction', icon: Zap},
      {label: 'Support Load', value: '70% Automated', icon: BarChart},
    ],
  },
  {
    id: 'global-logistics',
    client: 'Global Logistics Co.',
    industry: 'Enterprise Supply Chain',
    title: 'Autonomous Lead Intelligence',
    challenge: 'Sales reps were spending 15 hours a week manually qualifying leads from various global data sources, leading to burnout and missed high-value opportunities.',
    solution: 'We architected a neural lead-scoring engine that scrapes, filters, and qualifies leads based on 50+ business intent signals before auto-injecting them into the CRM.',
    results: [
      {label: 'Time Saved', value: '20hrs/Week', icon: Clock},
      {label: 'Meeting Rate', value: '2x Increase', icon: TrendingUp},
      {label: 'Data Integrity', value: '99.9% Reliable', icon: BarChart},
    ],
  },
];

import RichTextRenderer from '../components/RichTextRenderer';

export default function CaseStudies() {
  const { config, setIsEnquiryModalOpen } = useSite();
  return (
    <div className="relative overflow-hidden">
      {/* Hero Background Style */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img 
          src={config.assets?.heroBackground} 
          alt="AI Concept" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-theme-bg/80" />
      </div>
      
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-brand-purple to-soft-pink opacity-20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-lavender to-transparent opacity-10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12 relative z-10">
        <div className="mb-20 border-b border-theme-border pb-10">
          <motion.div
            initial={{opacity: 0, scale: 0.98}}
            animate={{opacity: 1, scale: 1}}
          >
            <span className="label-micro block mb-6">Performance Proof</span>
            <h1 className="h1-hero text-theme-text tracking-tight italic">
              {config.pages?.caseStudies?.title || 'Proof of Concept'}
            </h1>
            <p className="mt-8 text-theme-text/50 light:text-black/80 text-lg font-light italic max-w-2xl leading-relaxed transition-colors">
              {config.pages?.caseStudies?.subtitle || ''}
            </p>
          </motion.div>
        </div>

        <div className="space-y-40">
          {caseStudies.map((study, idx) => (
            <motion.section 
              key={study.id}
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
            >
              <div className="lg:col-span-5">
                <div className="mb-8">
                   <p className="label-micro text-lavender dark:text-lavender light:text-brand-purple mb-2">Case 0{idx + 1} — {study.industry}</p>
                   <h2 className="text-3xl md:text-4xl font-black text-theme-text italic tracking-tighter leading-tight">
                     {study.title}
                   </h2>
                </div>
                
                <div className="space-y-12">
                   <div>
                    <h3 className="text-[10px] uppercase tracking-[0.3em] font-black text-lavender dark:text-lavender light:text-brand-purple opacity-50 mb-4">The Challenge</h3>
                    <p className="text-theme-text/70 light:text-black/80 text-lg leading-relaxed font-light italic transition-colors">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-[10px] uppercase tracking-[0.3em] font-black text-lavender dark:text-lavender light:text-brand-purple opacity-50 mb-4">The RunOps Solution</h3>
                    <p className="text-theme-text/70 light:text-black/80 leading-relaxed font-medium transition-colors">{study.solution}</p>
                  </div>
                  <div className="pt-8 group">
                    <button 
                      onClick={() => setIsEnquiryModalOpen(true)}
                      className="text-xs font-black uppercase tracking-[0.2em] text-lavender dark:text-lavender light:text-brand-purple flex items-center gap-4 group-hover:gap-6 transition-all cursor-pointer"
                    >
                      Request similar architecture <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-theme-border border border-theme-border">
                  {study.results.map((res) => (
                    <div key={res.label} className="bg-theme-card p-10 flex flex-col items-center text-center group hover:bg-white/[0.02] light:hover:bg-black/[0.02] transition-colors">
                      <res.icon size={24} className="text-lavender/20 mb-8 group-hover:text-lavender transition-colors" />
                      <p className="text-3xl font-serif italic text-theme-text mb-2">{res.value}</p>
                      <p className="text-[10px] uppercase tracking-widest font-bold text-lavender dark:text-lavender light:text-brand-purple opacity-40">{res.label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-12 bg-theme-card border border-theme-border flex flex-col items-center text-center">
                   <p className="text-lavender dark:text-lavender light:text-brand-purple opacity-30 text-[9px] uppercase tracking-[0.5em] font-black mb-4">Verified Outcome</p>
                   <p className="text-theme-text/60 light:text-black/70 text-sm font-bold uppercase tracking-widest transition-colors">
                     Primary Node: {study.client}
                   </p>
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {config.pages?.caseStudies?.extraContent && config.pages.caseStudies.extraContent.length > 0 && (
          <div className="max-w-4xl mx-auto mt-40 pt-20 border-t border-theme-border">
            <RichTextRenderer blocks={config.pages.caseStudies.extraContent} />
          </div>
        )}

        <section className="mt-24 py-20 bg-theme-card border border-theme-border text-center rounded-sm">
           <span className="label-micro block mb-6">Scale Protocol</span>
           <h2 className="text-3xl md:text-5xl font-bold text-theme-text mb-6 italic">Ready for enterprise results?</h2>
           <p className="text-theme-text/50 light:text-black/80 max-w-xl mx-auto mb-10 text-lg font-light italic leading-relaxed transition-colors">
             Bring us your most complex manual bottleneck. Let's engineer its replacement.
           </p>
           <button 
             onClick={() => setIsEnquiryModalOpen(true)}
             className="px-16 py-6 bg-lavender text-black font-black uppercase tracking-[0.2em] text-xs hover:brightness-110 transition-all inline-block cursor-pointer"
           >
             Initiate Sync Audit
           </button>
        </section>
      </div>
    </div>
  );
}

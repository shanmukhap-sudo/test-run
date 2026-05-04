import {motion} from 'motion/react';
import {ShoppingCart, Stethoscope, Store, Building2, GraduationCap, CheckCircle, ArrowRight} from 'lucide-react';
import {Link} from 'react-router-dom';
import {useSite} from '../context/SiteContext';

const industries = [
  {
    title: 'E-commerce',
    icon: ShoppingCart,
    painPoints: ['High cart abandonment', 'Overwhelmed support teams', 'Fragmented customer data'],
    solutions: ['WhatsApp abandon recovery bots', 'AI Product recommenders', 'Self-service tracking bots'],
    useCase: 'Brand X reduced ticket volume by 60% with our AI Support agent while increasing recovery sales by 25%.',
  },
  {
    title: 'Clinics & Healthcare',
    icon: Stethoscope,
    painPoints: ['Manual booking friction', 'Patient no-shows', 'Time wasted on routine FAQ'],
    solutions: ['24/7 Appointment booking bots', 'Auto-reminder follow-up systems', 'Voice-to-CRM transcription'],
    useCase: 'Dental Clinic Y reduced no-shows by 40% using our automated WhatsApp reminder and rescheduling system.',
  },
  {
    title: 'Local Businesses',
    icon: Store,
    painPoints: ['Scaling without headcount', 'Low Google review velocity', 'Poor lead capture after hours'],
    solutions: ['Missed call-back text automation', 'Review generation pipeline', 'Local SEO AI content'],
    useCase: 'Local Plumber Z increased their monthly reviews from 2 to 45 using our post-service review automation.',
  },
  {
    title: 'Real Estate',
    icon: Building2,
    painPoints: ['Lead response speed', 'Qualification manual work', 'Managing huge lead buckets'],
    solutions: ['Instant property bot', 'AI Lead scoring system', 'Automated viewing scheduler'],
    useCase: 'Agency A responded to leads in 10 seconds vs 4 hours, doubling their viewing conversion rates.',
  },
  {
    title: 'Education',
    icon: GraduationCap,
    painPoints: ['High inquiry volume', 'Student retention tracking', 'Manual enrollment cycles'],
    solutions: ['Admissions assistance bot', 'Student engagement trackers', 'AI Course support agents'],
    useCase: 'Institute B automated 90% of admission queries, allowing human staff to focus on high-value student counseling.',
  },
];

import RichTextRenderer from '../components/RichTextRenderer';

export default function Industries() {
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
        <div className="mb-16 border-b border-theme-border pb-8">
          <motion.h1 
            initial={{opacity:0, y:-20}}
            animate={{opacity:1, y:0}}
            className="h1-hero text-theme-text tracking-tight"
          >
            {config.pages?.industries?.title || 'Vertical Expertise'}
          </motion.h1>
          <p className="mt-8 text-theme-text/50 light:text-black/80 text-xl font-light italic max-w-xl transition-colors">
            {config.pages?.industries?.subtitle || ''}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-theme-border border border-theme-border">
          {industries.map((ind, idx) => (
            <motion.div
              key={ind.title}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: idx * 0.1}}
              className="bg-theme-card p-12 lg:p-16 flex flex-col group hover:bg-white/[0.02] light:hover:bg-black/[0.02] transition-colors"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="w-12 h-12 bg-lavender/10 rounded-sm flex items-center justify-center text-lavender dark:text-lavender light:text-brand-purple group-hover:bg-lavender group-hover:text-black transition-all">
                  <ind.icon size={24} />
                </div>
                <span className="text-4xl font-serif italic text-lavender/10">
                  0{idx + 1}
                </span>
              </div>

              <h2 className="text-3xl font-bold text-theme-text mb-4 uppercase tracking-tighter italic">
                {ind.title}
              </h2>
              
              <div className="space-y-10 mt-8 flex-grow">
                <div>
                  <h3 className="label-micro mb-4">Pain Points</h3>
                  <ul className="space-y-3">
                    {ind.painPoints.map(p => (
                      <li key={p} className="text-xs font-medium text-theme-text/40 light:text-black/60 italic flex items-center gap-2 transition-colors">
                        <span className="w-1 h-1 bg-red-400/50 rounded-full shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="label-micro mb-4">AI Solutions</h3>
                  <ul className="space-y-3">
                    {ind.solutions.map(s => (
                      <li key={s} className="text-sm font-bold text-theme-text/80 uppercase tracking-wider flex items-center gap-3">
                        <CheckCircle size={14} className="text-lavender dark:text-lavender light:text-brand-purple" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-16 pt-8 border-t border-theme-border">
                <p className="text-[10px] text-lavender dark:text-lavender light:text-brand-purple opacity-60 italic mb-6">
                  {ind.useCase}
                </p>
                <button 
                  onClick={() => setIsEnquiryModalOpen(true)}
                  className="text-[10px] font-black uppercase tracking-[0.2em] text-lavender dark:text-lavender light:text-brand-purple flex items-center gap-2 hover:gap-4 transition-all cursor-pointer"
                >
                  Case analysis <ArrowRight size={12} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {config.pages?.industries?.extraContent && config.pages.industries.extraContent.length > 0 && (
          <div className="max-w-4xl mx-auto mt-32 pt-20 border-t border-theme-border">
            <RichTextRenderer blocks={config.pages.industries.extraContent} />
          </div>
        )}

        <section className="mt-16 py-16 bg-theme-card border border-theme-border text-center px-8 rounded-sm">
           <span className="label-micro block mb-6">Niche Markets</span>
           <h2 className="text-2xl md:text-4xl font-bold text-theme-text mb-6 italic">Don't see your industry?</h2>
           <p className="text-theme-text/50 light:text-black/80 max-w-xl mx-auto mb-10 text-lg font-light leading-relaxed transition-colors">
             Our AI architectures are flexible. We focus on business logic and work with you to map out custom solutions for any niche.
           </p>
           <button 
             onClick={() => setIsEnquiryModalOpen(true)}
             className="px-12 py-5 bg-lavender text-black font-black uppercase tracking-[0.2em] text-[10px] hover:brightness-110 transition-all cursor-pointer"
           >
             Start Your Analysis
           </button>
        </section>
      </div>
    </div>
  );
}

import {motion} from 'motion/react';
import {ShieldCheck, Zap, Users, Trophy, BarChart} from 'lucide-react';
import {Link} from 'react-router-dom';
import {useSite} from '../context/SiteContext';
import RichTextRenderer from '../components/RichTextRenderer';

export default function About() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
             initial={{opacity:0, y: 20}}
             animate={{opacity:1, y: 0}}
          >
            <span className="label-micro block mb-6">Agency Narrative</span>
            <h1 className="h1-hero text-theme-text mb-8 italic">
              {config.pages?.about?.title || 'The Architecture of Efficiency'}
            </h1>
            <p className="text-xl text-theme-text/70 light:text-black/80 leading-relaxed font-light italic transition-colors">
              {config.pages?.about?.subtitle || ''}
            </p>
          </motion.div>
          <motion.div
             initial={{opacity:0, scale: 0.95}}
             animate={{opacity:1, scale: 1}}
             transition={{delay: 0.2}}
             className="relative aspect-video rounded-2xl overflow-hidden border border-theme-border shadow-2xl"
          >
            <img 
              src={config.assets?.aboutAgency} 
              alt="The Architecture of Efficiency" 
              className="w-full h-full object-cover transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-theme-bg via-transparent to-transparent" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-theme-border border border-theme-border mb-20">
          <div className="bg-theme-card p-10 lg:p-16 border-b md:border-b-0 md:border-r border-theme-border">
            <h2 className="text-xs font-black text-lavender dark:text-lavender light:text-brand-purple uppercase tracking-[0.3em] mb-6">Our Mission</h2>
            <p className="text-theme-text/70 light:text-black/80 text-lg leading-relaxed italic font-light transition-colors">
              To empower 1,000+ businesses to scale beyond their daily physical and manual limits by implementing intelligent AI systems that eliminate bottlenecks.
            </p>
          </div>
          <div className="bg-theme-card p-10 lg:p-16">
            <h2 className="text-xs font-black text-lavender dark:text-lavender light:text-brand-purple uppercase tracking-[0.3em] mb-6">Our Vision</h2>
            <p className="text-theme-text/70 light:text-black/80 text-lg leading-relaxed italic font-light transition-colors">
              A future where operational excellence is standard for every organization through the seamless integration of autonomous artificial intelligence.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-32">
          <RichTextRenderer blocks={config.pages?.about?.content || []} />
        </div>

        <div className="mb-20">
          <h2 className="label-micro text-center mb-12 opacity-40">The RunOps Edge</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-theme-border">
             {[
               {num: '01', title: 'Expertise in Automation', desc: 'Years of practical experience in complex workflow engineering.'},
               {num: '02', title: 'Custom AI Solutions', desc: 'No cookie-cutter templates. Every system is built for your business architecture.'},
               {num: '03', title: 'ROI-Driven Approach', desc: 'If it doesn’t increase revenue or save time, we don’t build it.'},
             ].map((item) => (
               <div key={item.title} className="bg-theme-card p-10 hover:bg-white/[0.02] light:hover:bg-black/[0.02] transition-colors flex flex-col items-center text-center">
                 <span className="text-3xl font-serif italic text-lavender/10 light:text-brand-purple/20 mb-6">{item.num}</span>
                 <h3 className="text-theme-text font-bold text-base mb-3 uppercase tracking-tighter italic">{item.title}</h3>
                 <p className="text-theme-text/40 light:text-black/60 text-xs leading-relaxed font-medium transition-colors">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>

        <div className="mt-32 text-center py-20 border-t border-white/5">
           <button 
             onClick={() => setIsEnquiryModalOpen(true)}
             className="transition-all hover:scale-105 inline-block cursor-pointer"
           >
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-lavender dark:text-lavender light:text-brand-purple block mb-8">Ready for takeoff?</span>
              <span className="px-12 py-6 bg-lavender light:bg-brand-purple text-black light:text-white font-black uppercase tracking-[0.2em] text-sm">
                Initiate Consultation
              </span>
           </button>
        </div>
      </div>
    </div>
  );
}

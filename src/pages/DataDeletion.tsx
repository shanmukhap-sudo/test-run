import {motion} from 'motion/react';
import {useSite} from '../context/SiteContext';

export default function DataDeletion() {
  const { config } = useSite();
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{opacity: 0, y: 10}}
            animate={{opacity: 1, y: 0}}
          >
          <div className="border-b border-theme-border pb-16 mb-16">
            <span className="label-micro block mb-6">Legal Framework</span>
            <h1 className="text-5xl md:text-7xl font-bold text-theme-text italic leading-[0.9]">{config.pages?.compliance?.title || 'Compliance Protocol'}</h1>
          </div>
          
          <div className="space-y-20">
            {(config.pages?.compliance?.sections || []).map((section: any, index: number) => (
              <section key={index} className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-4">
                  <h2 className="label-micro text-lavender">{section.title}</h2>
                </div>
                <div className="md:col-span-8">
                  <p className="text-theme-text/70 leading-relaxed font-light italic text-lg transition-colors mb-6">
                    {section.content}
                  </p>
                  {section.list && (
                    <ul className="space-y-4 text-theme-text/70 text-sm font-bold uppercase tracking-widest transition-colors mb-6">
                      {(section.list || []).map((item: string, i: number) => (
                        <li key={i} className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 bg-lavender rounded-full" /> {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.title?.includes('Deletion Protocol') && (
                    <div className="p-8 bg-white/[0.02] border border-theme-border rounded-sm">
                      <p className="text-theme-text font-bold text-xl tracking-tighter transition-colors">{config.footer?.email || ''}</p>
                      <p className="text-lavender/30 text-[9px] mt-4 uppercase tracking-[0.2em] font-black italic">Include "DATA PURGE" in transmission headers</p>
                    </div>
                  )}
                </div>
              </section>
            ))}

            <section className="pt-20 border-t border-theme-border flex justify-between items-end opacity-20 text-[9px] uppercase tracking-[0.4em] font-black">
              <span>Updated: April 2026</span>
              <span>{config.company.name} Legal Dep.</span>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
  );
}

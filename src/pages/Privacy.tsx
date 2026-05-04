import { motion } from 'motion/react';
import { useSite } from '../context/SiteContext';
import RichTextRenderer from '../components/RichTextRenderer';

export default function Privacy() {
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-theme-card border border-theme-border p-12 lg:p-20 rounded-sm"
        >
          <span className="label-micro block mb-8 opacity-40">Compliance Protocol</span>
          <h1 className="h1-hero text-theme-text mb-12 italic">{config.pages?.privacy?.title || 'Privacy Protocol'}</h1>
          <RichTextRenderer blocks={config.pages?.privacy?.content || []} />
        </motion.div>
      </div>
    </div>
  </div>
  );
}

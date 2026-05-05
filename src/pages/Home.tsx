import {motion} from 'motion/react';
import {ArrowRight, Bot, MessageSquare, Database, Target, Star, BarChart} from 'lucide-react';
import {Link} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import ManifestModal from '../components/ManifestModal';
import {useSite} from '../context/SiteContext';

import RichTextRenderer from '../components/RichTextRenderer';

export default function Home() {
  const { config, setIsEnquiryModalOpen } = useSite();

  // Mapping icons to service labels for flexible config
  const getServiceIcon = (label: string) => {
    switch (label) {
      case 'WA': return MessageSquare;
      case 'AI': return Bot;
      case 'CRM': return Database;
      case 'ADS': return Target;
      case 'REV': return Star;
      case 'WF': return BarChart;
      case 'RE': return MessageSquare;
      default: return MessageSquare;
    }
  };

  const homeServices = config.pages.home.services || [];
  const homeSteps = config.pages.home.steps || [];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 min-h-[70vh] flex items-center">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img 
            src={config.assets?.heroBackground} 
            alt="AI Concept" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-theme-bg/60" />
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-brand-purple to-soft-pink opacity-30 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-lavender to-transparent opacity-20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{opacity: 0, x: -20}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 0.8}}
              >
                <div className="mb-6 px-4 py-1.5 border border-lavender/30 inline-block rounded-full">
                  <span className="label-micro">{config.company.tagline}</span>
                </div>
                <h1 className="h1-hero text-theme-text mb-6 transition-colors">
                  {config.pages?.home?.heroTitle || 'Scale Without Scaling Your Headcount.'}
                </h1>
                <p className="text-lg text-theme-text/70 light:text-black/80 max-w-lg mb-10 leading-relaxed font-light italic transition-colors">
                  {config.pages?.home?.heroSubtitle || ''}
                </p>
                <div className="flex flex-col sm:flex-row gap-5">
                  <button
                    onClick={() => setIsEnquiryModalOpen(true)}
                    className="px-10 py-5 bg-soft-pink light:bg-brand-purple text-black light:text-white font-black text-xs uppercase tracking-[0.2em] text-center transition-all hover:scale-[1.02] shadow-xl shadow-lavender/5"
                  >
                    {config.pages?.home?.heroButtonText || 'Initiate Strategy Session'}
                  </button>
                  <Link
                    to="/services"
                    className="px-10 py-5 border border-theme-border text-lavender light:text-brand-purple font-black text-xs uppercase tracking-[0.2em] text-center hover:bg-white/5 transition-all"
                  >
                    View Solutions
                  </Link>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-5">
              <motion.div
                initial={{opacity: 0, x: 20}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 0.8, delay: 0.2}}
                className="bg-theme-card border border-theme-border p-10 rounded-2xl backdrop-blur-sm relative shadow-2xl light:shadow-black/5 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none">
                  <img 
                    src={config.assets?.workflowArchitecture} 
                    alt="Automation architecture" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-lavender/10 blur-2xl rounded-full" />
                <h3 className="label-micro mb-8 opacity-60 light:opacity-90">Workflow Architecture</h3>
                <div className="space-y-10">
                  {homeSteps.map((step: any) => (
                    <div key={step.num} className="flex items-start gap-6 group">
                      <span className="text-3xl font-serif italic text-lavender/30 light:text-brand-purple/30 transition-colors group-hover:text-lavender light:group-hover:text-brand-purple">
                        {step.num}
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-theme-text mb-1 uppercase tracking-wider">{step.title}</h4>
                        <p className="text-xs text-theme-text/40 light:text-black/60 leading-relaxed font-medium">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-4 bg-theme-bg/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="label-micro block mb-4 text-lavender">Operational Engines</span>
            <h2 className="text-4xl md:text-5xl font-bold text-theme-text italic tracking-tighter">Automate Everything.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeServices.map((service: any, idx: number) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative h-96 overflow-hidden rounded-2xl border border-theme-border flex flex-col justify-end p-8"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.4] group-hover:brightness-[0.6]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-theme-bg via-theme-bg/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-lavender mb-3 font-black text-[10px] tracking-[0.3em]">
                    {String(idx + 1).padStart(2, '0')}. {service.label}
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4 italic tracking-tighter">
                    {service.title}
                  </h4>
                  <p className="text-white/60 text-sm font-light leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    {service.desc}
                  </p>
                  <button 
                    onClick={() => setIsEnquiryModalOpen(true)}
                    className="flex items-center gap-2 text-lavender text-[10px] font-black uppercase tracking-[0.2em] transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500"
                  >
                    Initiate Deployment <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Content / How It Works */}
      {config.pages.home.extraContent && config.pages.home.extraContent.length > 0 && (
        <section className="py-24 border-t border-theme-border">
          <div className="max-w-4xl mx-auto px-4">
            <RichTextRenderer blocks={config.pages.home.extraContent} />
          </div>
        </section>
      )}

      {/* Testimonial Section */}
      {config.pages?.home?.testimonial && (
        <section className="py-24 border-y border-theme-border">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center">
              <motion.div
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                className="relative"
              >
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 text-8xl font-serif italic text-lavender/10 light:text-brand-purple/10 pointer-events-none select-none">
                  "
                </div>
                <p className="text-2xl sm:text-3xl italic text-theme-text leading-relaxed mb-10 font-light px-8 transition-colors">
                  {config.pages.home.testimonial.quote}
                </p>
                <div className="inline-block py-2 px-6 border-l border-theme-border text-left">
                  <p className="text-[10px] uppercase tracking-[0.3em] font-black text-lavender light:text-brand-purple mb-1">
                    {config.pages.home.testimonial.author}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-theme-text/40 light:text-black/60 transition-colors">
                    {config.pages.home.testimonial.role}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      {config.pages?.home?.nextPhase && (
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-theme-card border border-theme-border p-12 sm:p-24 rounded-[2rem] relative overflow-hidden shadow-2xl light:shadow-black/5"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-lavender/5 blur-[100px] -mr-32 -mt-32 rounded-full" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-lavender/5 blur-[100px] -ml-32 -mb-32 rounded-full" />
              
              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <span className="label-micro block mb-8">{config.pages.home.nextPhase.title}</span>
                <h2 className="text-4xl sm:text-6xl font-bold text-theme-text mb-8 italic transition-colors">
                  {config.pages.home.nextPhase.subtitle}
                </h2>
                <p className="text-theme-text/60 light:text-black/80 text-xl mb-12 max-w-xl mx-auto font-light leading-relaxed transition-colors">
                  {config.pages.home.nextPhase.desc}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 px-4">
                  {(config.pages.home.nextPhase.metrics || []).map((item: any) => {
                    const Icon = item.label === 'Implementation' ? Database : 
                                 item.label === 'Avg. ROI' ? BarChart : MessageSquare;
                    return (
                      <div key={item.label} className="text-center group p-6 bg-white/[0.02] light:bg-black/[0.02] border border-theme-border rounded-2xl transition-all hover:bg-white/[0.05] light:hover:bg-black/[0.05]">
                        <Icon size={20} className="mx-auto mb-4 text-lavender/30 light:text-brand-purple/40 group-hover:text-lavender light:group-hover:text-brand-purple transition-colors" />
                        <p className="text-[9px] uppercase tracking-[0.2em] font-black text-lavender/40 light:text-brand-purple/50 mb-2">{item.label}</p>
                        <p className="text-2xl font-serif italic text-theme-text">{item.value}</p>
                      </div>
                    );
                  })}
                </div>

                <button
                  onClick={() => setIsEnquiryModalOpen(true)}
                  className="inline-flex items-center gap-4 bg-lavender dark:bg-lavender light:bg-brand-purple text-black dark:text-black light:text-white px-16 py-6 font-black uppercase tracking-[0.2em] text-xs hover:scale-105 transition-all shadow-xl shadow-lavender/10"
                >
                  Initiate Strategy Session <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}

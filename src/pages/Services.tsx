import {motion} from 'motion/react';
import {CheckCircle2, ArrowRight, MessageSquare, Bot, Database, Target, Star, BarChart} from 'lucide-react';
import {Link} from 'react-router-dom';

import {useSite} from '../context/SiteContext';

const servicesContent = [
  {
    id: 'whatsapp',
    title: 'WhatsApp Automation',
    icon: MessageSquare,
    image: 'images/service-whatsapp.jpg',
    desc: 'Scale your communication without scaling your headcount.',
    problem: 'Businesses struggle to keep up with incoming WhatsApp inquiries, leading to slow response times and lost sales. Manual follow-ups are inconsistent and time-consuming.',
    how: [
      'Automated Greeting & Routing',
      'Smart Auto-Replies for FAQs',
      'Broadcast Marketing Campaigns',
      'CRM Integration for instant logging',
    ],
    benefits: ['100% response rate', 'Increase sales conversion', 'No manual data entry'],
  },
  {
    id: 'chatbots',
    title: 'AI Chatbots',
    icon: Bot,
    image: 'images/service-chatbots.jpg',
    desc: 'Intelligent agents that sound like your best sales rep.',
    problem: 'Traditional website bots are clunky and frustrate users. Customers want instant, accurate answers 24/7 without waiting for a human agent.',
    how: [
      'LLM-powered natural language conversation',
      'Knowledge base training on your data',
      'Instant lead qualification',
      'Seamless human hand-off for final closing',
    ],
    benefits: ['Reduce support tickets by 70%', 'Capture leads while you sleep', 'Consistent brand voice'],
  },
  {
    id: 'crm',
    title: 'CRM Systems',
    icon: Database,
    image: 'images/service-crm.jpg',
    desc: 'Automated infrastructure for high-growth operations.',
    problem: 'Spreadsheets break and manual CRMs are rarely updated. Vital lead info falls through the cracks, and management has no real-time visibility.',
    how: [
      'Automated custom CRM architecture',
      'Real-time data synchronization across apps',
      'Trigger-based workflows and follow-ups',
      'Automated performance dashboards',
    ],
    benefits: ['Zero data loss', 'Better team accountability', 'Clear ROI tracking'],
  },
  {
    id: 'leadgen',
    title: 'Lead Generation Systems',
    icon: Target,
    image: 'images/service-leadgen.jpg',
    desc: 'Predictable sales pipelines fueled by AI.',
    problem: 'Finding the right leads is expensive and inconsistent. Most outbound efforts are cold and untargeted, resulting in a low ROI.',
    how: [
      'AI-powered lead scraping and filtering',
      'Automated multi-channel outreach',
      'Smart personalization at scale',
      'Automated follow-up sequences',
    ],
    benefits: ['Consistent flow of qualified leads', 'Lower customer acquisition cost', 'Higher meeting book rate'],
  },
  {
    id: 'reviews',
    title: 'Review Automation',
    icon: Star,
    image: 'images/service-reviews.jpg',
    desc: 'Social proof that works for you automatically.',
    problem: 'Happy customers forget to leave reviews, while unhappy ones are loud. Manual review gathering is awkward and often neglected.',
    how: [
      'Automated SMS/Email review requests after purchase',
      'Smart filtering to handle concerns privately',
      'Auto-posting of top reviews to social media',
      'Instant alerts for management on new feedback',
    ],
    benefits: ['Higher Google Ranking', 'Build instant trust', 'Protect brand reputation'],
  },
  {
    id: 'workflow',
    title: 'Workflow Architecture',
    icon: BarChart,
    image: 'images/service-workflow.jpg',
    desc: 'Turn technical complexity into operational autopilot.',
    problem: 'Disjointed systems and manual data handling create invisible overhead. Most businesses lack a unified automation architecture to handle scale.',
    how: [
      'Logic Flow Engineering',
      'Cross-Platform Data Sync',
      'Error Handling & Fail-safes',
      'Real-time Audit Logs',
    ],
    benefits: ['Zero operational leakage', 'Infinite scalability', 'Real-time oversight'],
  },
];

import RichTextRenderer from '../components/RichTextRenderer';

export default function Services() {
  const { config, setIsEnquiryModalOpen } = useSite();
  return (
    <div className="relative overflow-hidden">
      {/* Hero Background Style */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img 
          src="images/hero-bg.jpg" 
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
        <div className="mb-20">
          <motion.div
            initial={{opacity: 0, scale: 0.95}}
            animate={{opacity: 1, scale: 1}}
            className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-theme-border pb-10"
          >
            <div className="max-w-2xl">
              <span className="label-micro block mb-4">Expertise & Solutions</span>
              <h1 className="h1-hero text-theme-text tracking-tight">
                {config.pages?.services?.title || 'Operational Engines'}
              </h1>
            </div>
            <p className="text-theme-text/50 light:text-black/80 text-lg font-light italic max-w-sm leading-relaxed transition-colors">
              {config.pages?.services?.subtitle || ''}
            </p>
          </motion.div>
        </div>

        <div className="space-y-0">
          {servicesContent.map((service, idx) => (
            <section key={service.id} className="grid grid-cols-1 lg:grid-cols-12 gap-10 py-20 border-b border-theme-border group">
              <div className="lg:col-span-1 hidden lg:block">
                <span className="text-4xl font-serif italic text-lavender/20 light:text-brand-purple/20 group-hover:text-lavender light:group-hover:text-brand-purple transition-colors">
                  0{idx + 1}
                </span>
              </div>
              
              <div className="lg:col-span-6">
                <div className="mb-10 relative h-64 w-full rounded-2xl overflow-hidden border border-theme-border shadow-xl">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-theme-bg/60 to-transparent" />
                </div>
                <div className="mb-6">
                  <h2 className="text-3xl md:text-4xl font-black text-theme-text mb-4 uppercase tracking-tighter italic">
                    {service.title}
                  </h2>
                  <p className="label-micro opacity-60">{service.desc}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-[10px] uppercase tracking-[0.2em] font-black text-lavender dark:text-lavender light:text-brand-purple mb-6">Pain Points</h3>
                    <p className="text-theme-text/60 light:text-black/80 text-sm leading-relaxed italic transition-colors">{service.problem}</p>
                  </div>
                  <div>
                    <h3 className="text-[10px] uppercase tracking-[0.2em] font-black text-lavender dark:text-lavender light:text-brand-purple mb-6">Benefits</h3>
                    <ul className="space-y-3">
                      {service.benefits.map(benefit => (
                        <li key={benefit} className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-theme-text/80">
                          <CheckCircle2 size={12} className="text-lavender dark:text-lavender light:text-brand-purple" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-theme-card border border-theme-border p-10 rounded-sm">
                  <h3 className="text-[10px] uppercase tracking-[0.2em] font-black text-lavender dark:text-lavender light:text-brand-purple mb-8">Implementation Path</h3>
                  <ul className="space-y-6">
                    {service.how.map((step, sIdx) => (
                      <li key={step} className="flex items-start gap-4 group/item">
                        <span className="text-[10px] font-mono text-lavender/30 light:text-brand-purple/40 mt-1">{sIdx + 1}</span>
                        <span className="text-sm text-theme-text/50 light:text-black/70 group-hover/item:text-theme-text transition-colors leading-relaxed font-medium">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-12">
                    <button 
                      onClick={() => setIsEnquiryModalOpen(true)}
                      className="w-full inline-flex items-center justify-center gap-3 bg-lavender light:bg-brand-purple text-black light:text-white px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:brightness-110 cursor-pointer"
                    >
                      Inquire Details <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
        {config.pages?.services?.extraContent && config.pages.services.extraContent.length > 0 && (
          <div className="max-w-4xl mx-auto mt-20 pt-20 border-t border-theme-border">
            <RichTextRenderer blocks={config.pages.services.extraContent} />
          </div>
        )}
      </div>
    </div>
  );
}

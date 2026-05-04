import {Link} from 'react-router-dom';
import {Mail, Phone, MapPin, Linkedin, Twitter, Github} from 'lucide-react';
import {useSite} from '../context/SiteContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { config } = useSite();

  return (
    <footer className="bg-theme-bg border-t border-theme-border pt-32 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-4">
            <Link to="/" className="flex items-center space-x-3 mb-8 group">
              {config.company.logoUrl ? (
                <img src={config.company.logoUrl} alt={config.company.name} className="h-10 w-auto object-contain" />
              ) : (
                <div className="w-8 h-8 dark:bg-lavender light:bg-brand-purple rounded-sm flex items-center justify-center transition-transform group-hover:rotate-45">
                  <div className="w-4 h-4 border-2 dark:border-black light:border-white rotate-45" />
                </div>
              )}
              <span className="text-lg font-bold text-theme-text tracking-[-0.05em] uppercase transition-colors">{config.company.name}</span>
            </Link>
            <p className="text-theme-text/40 text-sm leading-relaxed mb-10 max-w-xs italic font-medium transition-colors">
              Empowering global enterprises through intelligent AI systems and autonomous operations. Transform your workflow today.
            </p>
            <div className="flex space-x-6">
              {[Twitter, Linkedin, Github].map((Icon, idx) => (
                <a key={idx} href="#" className="text-theme-text/30 hover:text-lavender transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="label-micro mb-8">Services</h4>
            <ul className="space-y-4">
              {['WhatsApp', 'Chatbots', 'CRM Automations', 'Lead Gen'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-theme-text/40 hover:text-lavender transition-colors text-xs font-bold uppercase tracking-wider">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="label-micro mb-8">Company</h4>
            <ul className="space-y-4">
              {config.navigation.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-theme-text/40 hover:text-lavender transition-colors text-xs font-bold uppercase tracking-wider">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="label-micro mb-8">Sync Centers</h4>
            <ul className="space-y-6">
              <li className="flex items-center space-x-4">
                <Mail size={14} className="text-lavender/30" />
                <span className="text-theme-text/60 text-xs font-bold tracking-tight">{config.footer.email}</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone size={14} className="text-lavender/30" />
                <span className="text-theme-text/60 text-xs font-bold tracking-tight">{config.footer.phone}</span>
              </li>
              <li className="flex items-center space-x-4">
                <MapPin size={14} className="text-lavender/30" />
                <span className="text-theme-text/60 text-xs font-bold tracking-tight uppercase">{config.footer.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-theme-border flex flex-col md:flex-row justify-between items-center opacity-30 text-[9px] uppercase tracking-[0.4em] font-black gap-8">
          <p>© {currentYear} {config.company.name.toUpperCase()} — AUTOMATING THE FUTURE</p>
          <div className="flex gap-8">
            <Link to="/terms" className="hover:text-lavender transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-lavender transition-colors">Privacy</Link>
            <Link to="/data-deletion" className="hover:text-lavender transition-colors">Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

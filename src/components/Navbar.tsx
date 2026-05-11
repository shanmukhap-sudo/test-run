import {Link, useLocation} from 'react-router-dom';
import {motion} from 'motion/react';
import {Menu, X, Sun, Moon} from 'lucide-react';
import {useState, useEffect} from 'react';
import {useSite} from '../context/SiteContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const { config, setIsEnquiryModalOpen } = useSite();
  const location = useLocation();

  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [isLight]);

  const navLinks = config.navigation;

  return (
    <nav className={`fixed w-full z-50 border-b transition-all duration-500 backdrop-blur-xl ${
      isLight 
        ? 'bg-white/95 border-black/5 shadow-sm' 
        : 'bg-theme-card/80 border-black/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            {config.company.logoUrl ? (
              <img src={config.company.logoUrl} alt={config.company.name} className="h-16 w-auto object-contain" />
            ) : (
              <div className={`w-8 h-8 rounded-sm flex items-center justify-center transition-all group-hover:rotate-45 ${
                isLight ? 'bg-brand-purple shadow-lg shadow-brand-purple/20' : 'bg-lavender shadow-lg shadow-lavender/30'
              }`}>
                <div className={`w-4 h-4 border-2 rotate-45 ${isLight ? 'border-white' : 'border-white'}`} />
              </div>
            )}
            <span className="text-lg font-bold tracking-[-0.05em] uppercase transition-colors text-theme-text">{config.company.name}</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[10px] font-black uppercase tracking-[0.15em] transition-all hover:translate-y-[-1px] ${
                  location.pathname === link.path 
                    ? (isLight ? 'text-brand-purple' : 'text-lavender') 
                    : 'text-theme-text/40 hover:text-theme-text'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <button 
              onClick={() => setIsLight(!isLight)}
              className={`p-2.5 rounded-full transition-all ${
                isLight ? 'bg-black/5 hover:bg-black/10 text-black shadow-inner' : 'bg-white/5 hover:bg-white/10 text-lavender'
              }`}
            >
              {isLight ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            <button
              onClick={() => setIsEnquiryModalOpen(true)}
              className={`px-8 py-3 text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:brightness-110 transition-all ${
                isLight ? 'bg-brand-purple text-white shadow-xl shadow-brand-purple/20' : 'bg-lavender text-black shadow-xl shadow-lavender/40'
              }`}
            >
              Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setIsLight(!isLight)} className={isLight ? 'text-black' : 'text-lavender'}>
               {isLight ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className={isLight ? 'text-black' : 'text-soft-pink'}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          className={`md:hidden px-4 py-8 space-y-6 shadow-2xl ${
            isLight ? 'bg-white text-black' : 'bg-theme-card text-theme-text border-b border-black/10'
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-xl font-bold italic"
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => {
              setIsEnquiryModalOpen(true);
              setIsOpen(false);
            }}
            className={`block w-full text-center py-4 rounded-xl font-bold uppercase tracking-widest text-xs ${
              isLight ? 'bg-brand-purple text-white shadow-xl shadow-brand-purple/20' : 'bg-lavender text-black shadow-xl shadow-lavender/40'
            }`}
          >
            Get Started
          </button>
        </motion.div>
      )}
    </nav>
  );
}

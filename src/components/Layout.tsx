import {Outlet} from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import ManifestModal from './ManifestModal';
import {useSite} from '../context/SiteContext';

export default function Layout() {
  const {pathname} = useLocation();
  const {isEnquiryModalOpen, setIsEnquiryModalOpen, config} = useSite();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Update document title
    document.title = config.company.name;

    // Update favicon
    let link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = config.company.favicon;
  }, [config.company.name, config.company.favicon]);

  return (
    <div className="min-h-screen flex flex-col font-sans relative">
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <ManifestModal 
        isOpen={isEnquiryModalOpen} 
        onClose={() => setIsEnquiryModalOpen(false)} 
      />
    </div>
  );
}

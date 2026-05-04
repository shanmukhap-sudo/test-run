import {Outlet} from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import ManifestModal from './ManifestModal';
import {useSite} from '../context/SiteContext';

export default function Layout() {
  const {pathname} = useLocation();
  const {isEnquiryModalOpen, setIsEnquiryModalOpen} = useSite();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans relative">
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
      <ManifestModal 
        isOpen={isEnquiryModalOpen} 
        onClose={() => setIsEnquiryModalOpen(false)} 
      />
    </div>
  );
}

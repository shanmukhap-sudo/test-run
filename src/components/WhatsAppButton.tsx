import React from 'react';
import { MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { useSite } from '../context/SiteContext';

export default function WhatsAppButton() {
  const { config } = useSite();
  // Ensure we have a string to work with
  const envNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  const configNumber = config.company.whatsappNumber;
  const whatsappNumber = (envNumber && envNumber.trim() !== '') ? envNumber : configNumber;

  if (!whatsappNumber) {
    console.log('WhatsAppButton: No number found', { envNumber, configNumber });
    return null;
  }

  const handleClick = () => {
    // Remove any non-digit characters from the number for the link
    const cleanNumber = whatsappNumber.replace(/\D/g, '');
    window.open(`https://wa.me/${cleanNumber}`, '_blank', 'noreferrer');
  };

  return (
    <motion.button
      id="whatsapp-floating-button"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-[9999] bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:bg-[#128C7E] transition-all duration-300 flex items-center justify-center cursor-pointer overflow-visible"
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageSquare className="w-6 h-6 stroke-[2.5px]" />
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
      </span>
    </motion.button>
  );
}

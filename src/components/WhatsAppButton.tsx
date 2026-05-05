import React from 'react';
import { MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhatsAppButton() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

  if (!whatsappNumber) {
    return null;
  }

  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank', 'noreferrer');
  };

  return (
    <motion.button
      id="whatsapp-floating-button"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors duration-300 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare className="w-6 h-6" />
    </motion.button>
  );
}

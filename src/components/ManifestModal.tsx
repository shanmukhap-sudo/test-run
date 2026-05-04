import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import ManifestForm from './ManifestForm';

interface ManifestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ManifestModal({ isOpen, onClose }: ManifestModalProps) {
  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center z-[101] pointer-events-none p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-theme-card border border-theme-border w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl pointer-events-auto flex flex-col max-h-[90vh]"
            >
              <div className="p-4 border-b border-theme-border flex justify-between items-center bg-theme-bg/50">
                <span className="label-micro opacity-60">Enquiry Form</span>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-theme-border rounded-full transition-colors group"
                >
                  <X size={20} className="text-theme-text/40 group-hover:text-theme-text" />
                </button>
              </div>
              
              <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar bg-theme-bg/50">
                <ManifestForm embedded />
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

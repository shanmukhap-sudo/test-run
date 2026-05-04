import React, { createContext, useContext, useState, useEffect } from 'react';
import { DEFAULT_CONFIG, SiteConfig } from '../lib/defaultConfig';

interface SiteContextType {
  config: SiteConfig;
  updateConfig: (newConfig: Partial<SiteConfig>) => void;
  resetConfig: () => void;
  isEnquiryModalOpen: boolean;
  setIsEnquiryModalOpen: (isOpen: boolean) => void;
}

const SiteContext = createContext<SiteContextType | undefined>(undefined);

const deepMerge = (target: any, source: any) => {
  const output = { ...target };
  if (source && typeof source === 'object') {
    Object.keys(source).forEach(key => {
      if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
        if (!(key in target)) {
          output[key] = source[key];
        } else {
          output[key] = deepMerge(target[key], source[key]);
        }
      } else if (!(key in target)) {
        output[key] = source[key];
      }
    });
  }
  return output;
};

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [config, setConfig] = useState<SiteConfig>(DEFAULT_CONFIG);

  useEffect(() => {
    // Clear old saved configs to ensure the latest DEFAULT_CONFIG from code is used
    localStorage.removeItem('site_config');
  }, []);

  useEffect(() => {
    // Persistence disabled to favor code-based configuration
    // localStorage.setItem('site_config', JSON.stringify(config));
  }, [config]);

  const updateConfig = (updates: Partial<SiteConfig>) => {
    setConfig(prev => ({ ...prev, ...updates }));
  };

  const resetConfig = () => {
    setConfig(DEFAULT_CONFIG);
  };

  return (
    <SiteContext.Provider value={{ config, updateConfig, resetConfig, isEnquiryModalOpen, setIsEnquiryModalOpen }}>
      {children}
    </SiteContext.Provider>
  );
}

export function useSite() {
  const context = useContext(SiteContext);
  if (context === undefined) {
    throw new Error('useSite must be used within a SiteProvider');
  }
  return context;
}

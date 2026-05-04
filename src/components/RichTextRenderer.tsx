import React from 'react';
import { ContentBlock } from '../lib/defaultConfig';

interface RichTextRendererProps {
  blocks: ContentBlock[];
}

export default function RichTextRenderer({ blocks }: RichTextRendererProps) {
  return (
    <div className="space-y-8">
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'header': {
            const Tag = `h${block.level || 2}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
            return (
              <Tag key={index} className="text-2xl font-bold text-lavender light:text-brand-purple mt-8 first:mt-0 transition-colors italic uppercase tracking-wider">
                {block.text}
              </Tag>
            );
          }
          case 'paragraph':
            return (
              <p key={index} className="text-theme-text/60 text-lg leading-relaxed font-light italic transition-colors">
                {block.text}
              </p>
            );
          case 'list':
            return (
              <ul key={index} className="space-y-6">
                {block.items?.map((item, i) => {
                  const isStep = item.toLowerCase().startsWith('step');
                  return (
                    <li key={i} className="flex items-start gap-4 text-theme-text/80 text-base leading-relaxed font-light transition-colors">
                      <span className="w-2 h-2 bg-lavender light:bg-brand-purple rounded-full mt-2.5 shrink-0 shadow-[0_0_10px_rgba(151,130,224,0.5)] light:shadow-none" />
                      <div>
                        {isStep ? (
                          <span className="block mb-1">
                            <span className="text-lavender light:text-brand-purple font-black uppercase tracking-[0.2em] text-[10px] block mb-1">
                              {item.split(':')[0]}
                            </span>
                            <span className="text-theme-text font-bold italic tracking-tight">
                              {item.split(':').slice(1).join(':').trim()}
                            </span>
                          </span>
                        ) : (
                          item
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            );
          case 'image':
            return (
              <div key={index} className="relative aspect-video rounded-sm overflow-hidden border border-theme-border my-8">
                <img 
                  src={block.url} 
                  alt={block.alt || 'Content image'} 
                  className="w-full h-full object-cover transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            );
          case 'quote':
            return (
              <blockquote key={index} className="border-l-4 border-lavender pl-6 py-2 italic text-xl text-theme-text/80 transition-colors">
                "{block.text}"
              </blockquote>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

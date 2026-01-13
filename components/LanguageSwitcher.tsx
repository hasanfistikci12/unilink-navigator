'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Languages } from 'lucide-react';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-switcher" style={{ position: 'fixed', top: '16px', left: '16px', zIndex: 1000 }}>
      {/* Mobile Toggle */}
      <div className="dropdown">
        <button
          className="btn btn-outline flex items-center gap-sm"
          style={{ padding: '8px 12px', minHeight: 'auto', backgroundColor: 'var(--color-surface)', height: '40px' }}
        >
          <Languages size={18} />
          <span style={{ textTransform: 'uppercase', fontWeight: 700 }}>{language}</span>
        </button>

        <div className="dropdown-content">
          <button onClick={() => setLanguage('tr')} className={language === 'tr' ? 'active' : ''}>🇹🇷 Türkçe</button>
          <button onClick={() => setLanguage('et')} className={language === 'et' ? 'active' : ''}>🇪🇪 Eesti</button>
          <button onClick={() => setLanguage('ru')} className={language === 'ru' ? 'active' : ''}>🇷🇺 Русский</button>
          <button onClick={() => setLanguage('en')} className={language === 'en' ? 'active' : ''}>🇬🇧 English</button>
        </div>
      </div>

      <style jsx>{`
        .dropdown {
          position: relative;
          display: inline-block;
        }
        
        .dropdown-content {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          background-color: var(--color-surface);
          min-width: 140px;
          box-shadow: var(--shadow-xl);
          border-radius: var(--radius-lg);
          z-index: 1001;
          margin-top: 8px;
          border: 1px solid var(--color-border);
          overflow: hidden;
        }
        
        .dropdown:hover .dropdown-content {
          display: block;
        }
        
        .dropdown-content button {
          display: block;
          width: 100%;
          padding: 10px 16px;
          text-align: left;
          background: none;
          border: none;
          cursor: pointer;
          font-weight: 500;
          color: var(--color-text-primary);
          transition: background 0.2s;
        }
        
        .dropdown-content button:hover {
          background-color: var(--color-background);
        }
        
        .dropdown-content button.active {
          color: var(--color-primary);
          font-weight: 700;
          background-color: #f0f9ff;
        }
      `}</style>
    </div>
  );
}

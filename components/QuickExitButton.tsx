'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { LogOut } from 'lucide-react';

export default function QuickExitButton() {
  const router = useRouter();

  const handleQuickExit = () => {
    // Clear session storage
    if (typeof window !== 'undefined') {
      sessionStorage.clear();
    }

    // Redirect to neutral page
    router.push('/exit');
  };

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleQuickExit();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, []);

  return (
    <button
      onClick={handleQuickExit}
      className="quick-exit-btn"
      aria-label="Hızlı Çıkış - ESC tuşu"
      title="Hızlı Çıkış (ESC)"
    >
      <LogOut size={18} />
      <span>Hızlı Çıkış</span>
    </button>
  );
}

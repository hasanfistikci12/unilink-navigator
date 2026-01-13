import Link from 'next/link';
import Image from 'next/image';
import EmergencyButton from '@/components/EmergencyButton';
import { Shield, Phone, Heart } from 'lucide-react';

export default function SecurityGate() {
  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Unilink Navigator</h1>
              <p className="hero-subtitle">
                Güvenli Destek Platformu
              </p>
              <p className="hero-description">
                Anonim, güvenli ve hızlı erişim. Yardıma ihtiyacın olduğunda yanındayız.
              </p>
            </div>
            <div className="hero-image">
              <Image
                src="/hero-safety.png"
                alt="Güvenli destek"
                width={600}
                height={400}
                priority
                style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-xl)' }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Safety Check */}
        <div className="card mb-xl animate-slide-up">
          <div className="flex items-center gap-md mb-md">
            <Shield size={32} color="var(--color-primary)" />
            <h2 className="mb-0">Şu an güvende misin?</h2>
          </div>

          <div className="grid gap-md">
            <Link href="/home" className="btn btn-safe">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Evet, devam et
            </Link>

            <Link href="/home" className="btn btn-uncertain">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
              Emin değilim
            </Link>

            <Link href="/emergency" className="btn btn-danger">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              Hayır — acil yardıma git
            </Link>
          </div>
        </div>

        {/* Emergency Contacts - Always Visible */}
        <div className="card animate-slide-up" style={{ animationDelay: '100ms' }}>
          <div className="flex items-center gap-md mb-md">
            <Phone size={28} color="var(--color-danger)" />
            <h3 className="mb-0">Acil Yardım Hatları</h3>
          </div>
          <div className="grid gap-md">
            <EmergencyButton
              number="112"
              title="Acil Yardım"
              description="Polis / Ambulans / İtfaiye"
              variant="danger"
            />

            <EmergencyButton
              number="116 006"
              title="Ohvriabi"
              description="7/24 Mağdur Destek Hattı"
              variant="primary"
            />

            <EmergencyButton
              number="116 111"
              title="Lasteabi"
              description="7/24 Çocuk Yardım Hattı"
              variant="primary"
            />
          </div>
        </div>

        {/* Anonymity Notice */}
        <div className="text-center mt-xl" style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>
          <div className="flex items-center justify-center gap-sm mb-sm">
            <Heart size={16} />
            <strong>Anonim kullanılır.</strong>
          </div>
          <p className="mb-0">
            Hesap gerekmez. Kimlik istemiyoruz.<br />
            Yazdıkların oturum bitince silinir.
          </p>
        </div>
      </div>
    </div>
  );
}

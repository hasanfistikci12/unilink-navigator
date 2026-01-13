'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import EmergencyButton from '@/components/EmergencyButton';
import { Shield, Phone, Heart } from 'lucide-react';
import SuccessStories from '@/components/SuccessStories';

export default function SecurityGate() {
  const [safetyStatus, setSafetyStatus] = useState<string | null>(null);

  const handleContinue = () => {
    if (safetyStatus === 'safe' || safetyStatus === 'uncertain') {
      window.location.href = '/home';
    } else if (safetyStatus === 'danger') {
      window.location.href = '/emergency';
    }
  };

  return (
    <div style={{ paddingTop: 0 }}>
      {/* Fullscreen Hero Section */}
      <div
        className="hero-fullscreen"
        style={{
          position: 'relative',
          width: '100vw',
          height: '100vh',
          marginLeft: 'calc(-50vw + 50%)',
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url(/hero-fullscreen.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white'
        }}
      >
        {/* Orange Gradient Overlay at Bottom - Half Height */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '50%',
            background: 'linear-gradient(to top, #FF6B35 0%, rgba(255, 107, 53, 0.8) 40%, transparent 100%)',
            pointerEvents: 'none',
            zIndex: 1
          }}
        />

        {/* Hero Content */}
        <div
          className="relative animate-slide-up flex flex-col items-center"
          style={{ position: 'relative', zIndex: 100 }}
        >
          <div className="flex flex-col items-center justify-center w-full" style={{ position: 'relative', zIndex: 101 }}>
            <h1 className="text-mask-hero mb-0">
              UNILINK
            </h1>
            <h1 className="text-mask-hero" style={{ marginTop: '0.5vw' }}>
              NAVIGATOR
            </h1>
          </div>

          <p style={{
            fontSize: '2rem',
            color: 'white',
            fontWeight: 500,
            marginBottom: '2.5rem',
            letterSpacing: '0.02em',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            position: 'relative',
            zIndex: 101
          }}>
            iyilik paylaştıkça çoğalır
          </p>

          <Link href="/contact" className="btn" style={{
            backgroundColor: 'white',
            color: '#FF6B35',
            fontSize: '1.25rem',
            fontWeight: 800,
            padding: '1rem 3rem',
            borderRadius: '50px',
            textTransform: 'uppercase',
            border: 'none',
            boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
            position: 'relative',
            zIndex: 101
          }}>
            BİZİMLE İLETİŞİME GEÇ
          </Link>
        </div>
      </div>

      <div className="container" style={{
        paddingTop: '4rem',
        paddingBottom: '3rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Safety Check - Minimal and Centered */}
        <div className="card animate-slide-up" style={{
          backgroundColor: 'white',
          borderRadius: '32px',
          padding: '2rem',
          width: '100%',
          maxWidth: '30rem',
          boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.2)',
          marginBottom: '2rem',
          border: 'none',
          position: 'relative',
          zIndex: 20
        }}>

          <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-8 tracking-tight" style={{ border: 'none' }}>
            Şu an güvende misin?
          </h2>

          {/* Options Grid */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div
              onClick={() => setSafetyStatus('safe')}
              className="card-clickable"
              style={{
                borderRadius: '20px',
                padding: '1.5rem 0.5rem',
                textAlign: 'center',
                border: safetyStatus === 'safe' ? '2px solid #FF6B35' : '1px solid #e2e8f0',
                background: safetyStatus === 'safe' ? '#FFF2EB' : 'white',
                color: safetyStatus === 'safe' ? '#FF6B35' : '#0f172a',
                fontWeight: 700,
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '90px'
              }}
            >
              <span className="text-base">Güvendeyim</span>
            </div>

            <div
              onClick={() => setSafetyStatus('uncertain')}
              className="card-clickable"
              style={{
                borderRadius: '20px',
                padding: '1.5rem 0.5rem',
                textAlign: 'center',
                border: safetyStatus === 'uncertain' ? '2.5px solid #FF6B35' : '1.5px solid #e2e8f0',
                background: safetyStatus === 'uncertain' ? '#FFF2EB' : 'white',
                color: safetyStatus === 'uncertain' ? '#FF6B35' : '#0f172a',
                fontWeight: 700,
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '90px'
              }}
            >
              <span className="text-base leading-tight text-center">Emin<br />Değilim</span>
            </div>

            <div
              onClick={() => setSafetyStatus('danger')}
              className="card-clickable"
              style={{
                borderRadius: '20px',
                padding: '1.5rem 0.5rem',
                textAlign: 'center',
                border: safetyStatus === 'danger' ? '2.5px solid #ef4444' : '1.5px solid #e2e8f0',
                background: safetyStatus === 'danger' ? '#fef2f2' : 'white',
                color: safetyStatus === 'danger' ? '#ef4444' : '#0f172a',
                fontWeight: 700,
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '90px'
              }}
            >
              <span className="text-base">Tehlikede</span>
            </div>
          </div>

          {/* Info Text */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '2rem', padding: '0 4px', alignItems: 'flex-start' }}>
            <div style={{
              minWidth: '18px',
              height: '18px',
              borderRadius: '4px',
              border: '2px solid #cbd5e1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '4px',
              backgroundColor: 'white'
            }}>
            </div>
            <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: '1.5', margin: 0 }}>
              Bu seçim, size en uygun acil durum protokolünü belirlememize yardımcı olacaktır.
            </p>
          </div>

          {/* Main Action Button */}
          <button
            onClick={handleContinue}
            disabled={!safetyStatus}
            style={{
              width: '100%',
              padding: '1.2rem',
              borderRadius: '100px',
              border: 'none',
              background: safetyStatus ? '#FF6B35' : '#cbd5e1',
              color: 'white',
              fontWeight: 800,
              fontSize: '1.1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              cursor: safetyStatus ? 'pointer' : 'not-allowed',
              boxShadow: safetyStatus ? '0 8px 20px rgba(255, 107, 53, 0.25)' : 'none',
              transition: 'all 0.3s'
            }}
          >
            {safetyStatus === 'danger' ? 'ACİL YARDIM ÇAĞIR' : 'DEVAM ET'}
          </button>
        </div>

        {/* Emergency Contacts - Independent Cards and Matched Width */}
        <div className="animate-slide-up" style={{
          width: '100%',
          maxWidth: '30rem',
          animationDelay: '100ms',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '3rem'
          }}>
            <Phone size={24} color="white" />
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: 900,
              color: 'white',
              margin: 0,
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              textShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              Acil Yardım Hatları
            </h2>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem',
            width: '100%'
          }}>
            <EmergencyButton
              number="112"
              title="Acil Yardım"
              description="Polis / Ambulans / İtfaiye"
              variant="danger"
            />

            <EmergencyButton
              number="116 006"
              title="Ohvriabi"
              description="Mağdur Destek"
              variant="primary"
            />

            <EmergencyButton
              number="116 111"
              title="Lasteabi"
              description="Çocuk Yardım"
              variant="primary"
            />
          </div>
        </div>
      </div>

      {/* Success Stories Section */}
      <SuccessStories />

      <div className="container" style={{ paddingBottom: '3rem' }}>
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

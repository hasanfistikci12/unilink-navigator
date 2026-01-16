'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import EmergencyButton from '@/components/EmergencyButton';
import SuccessStories from '@/components/SuccessStories';
// EmergencyAIChat import removed
import { Shield, Phone, Heart, Check, Siren, ShieldAlert, Baby, Home, Scale, Lock, ArrowRight, Brain } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function SecurityGate() {
  const [safetyStatus, setSafetyStatus] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useLanguage();

  const heroImages = [
    "https://images.pexels.com/photos/6647115/pexels-photo-6647115.jpeg",
    "https://images.pexels.com/photos/8172814/pexels-photo-8172814.jpeg",
    "https://images.pexels.com/photos/6646905/pexels-photo-6646905.jpeg",
    "https://images.pexels.com/photos/14587105/pexels-photo-14587105.jpeg",
    "https://images.pexels.com/photos/10365937/pexels-photo-10365937.jpeg",
    "https://images.pexels.com/photos/11636285/pexels-photo-11636285.jpeg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

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
          minHeight: '100vh',
          paddingBottom: '4rem',
          marginLeft: 'calc(-50vw + 50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingTop: '42vh',
          textAlign: 'center',
          color: 'white',
          overflow: 'hidden'
        }}
      >
        {/* Background Slideshow Layer */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          backgroundColor: '#333' // Fallback
        }}>
          {heroImages.map((img, index) => (
            <div
              key={index}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                opacity: currentImageIndex === index ? 1 : 0,
                transition: 'opacity 1.5s ease-in-out',
                zIndex: currentImageIndex === index ? 1 : 0
              }}
            />
          ))}
        </div>
        {/* Orange Gradient Overlay at Bottom - Half Height */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '50%',
            background: 'linear-gradient(to top, #2391cc 0%, rgba(35, 145, 204, 0.8) 40%, transparent 100%)',
            pointerEvents: 'none',
            zIndex: 1
          }}
        />

        {/* Hero Content */}
        <div
          className="relative animate-slide-up flex flex-col items-center"
          style={{ position: 'relative', zIndex: 100 }}
        >
          <div className="flex flex-col items-center justify-center w-full" style={{ position: 'relative', zIndex: 101, marginBottom: '0.5rem' }}>
            <img
              src="https://raw.githubusercontent.com/hasanfistikci12/logo-unilink/refs/heads/main/logo_white.png"
              alt="Unilink Navigator Logo"
              style={{
                maxWidth: '300px',
                width: '50vw',
                height: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))'
              }}
            />
          </div>

          <p style={{
            fontSize: '1rem',
            color: 'rgba(255, 255, 255, 0.95)',
            fontWeight: 400,
            marginBottom: '2.5rem',
            lineHeight: '1.6',
            maxWidth: '42rem',
            letterSpacing: '0.01em',
            textShadow: '0 1px 2px rgba(0,0,0,0.2)',
            position: 'relative',
            zIndex: 101
          }}>
            {t.landing.heroDescription}
          </p>

          <div className="flex flex-col md:flex-row gap-4 mb-12 relative z-[101]">
            <Link href="/contact" className="btn" style={{
              backgroundColor: 'white',
              color: '#2391cc',
              fontSize: '1.25rem',
              fontWeight: 800,
              padding: '1rem 3rem',
              borderRadius: '50px',
              textTransform: 'uppercase',
              border: 'none',
              boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
            }}>
              {t.landing.contactUs}
            </Link>

            <Link
              href="/chat"
              className="btn"
              style={{
                backgroundColor: '#2391cc',
                color: 'white',
                fontSize: '1.25rem',
                fontWeight: 800,
                padding: '1rem 3rem',
                borderRadius: '50px',
                textTransform: 'uppercase',
                border: '2px solid rgba(255,255,255,0.3)',
                boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                textDecoration: 'none'
              }}
            >
              <Brain size={24} />
              {t.landing.emergencyAi}
            </Link>
          </div>

          {/* Core Focus Section */}
          <div className="animate-slide-up" style={{
            position: 'relative',
            zIndex: 101,
            width: '100%',
            maxWidth: '38rem',
            padding: '0 1.5rem',
            color: 'white',
            textAlign: 'left',
            animationDelay: '0.2s'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 700,
              color: 'rgba(255, 255, 255, 0.95)',
              marginBottom: '1.25rem',
              textAlign: 'center',
              textShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}>
              {t.landing.coreFocusTitle}
            </h3>

            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(12px)',
              padding: '1.5rem',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              marginBottom: '1.5rem'
            }}>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'grid',
                gap: '0.75rem'
              }}>
                {[
                  t.landing.coreFocus1,
                  t.landing.coreFocus2,
                  t.landing.coreFocus3,
                  t.landing.coreFocus4,
                  t.landing.coreFocus5
                ].map((item, index) => (
                  <li key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    fontSize: '1rem',
                    fontWeight: 500,
                    textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      borderRadius: '50%',
                      padding: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Check size={14} color="white" strokeWidth={3} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p style={{
              fontSize: '0.95rem',
              lineHeight: '1.6',
              opacity: 0.9,
              textAlign: 'center',
              fontWeight: 400,
              textShadow: '0 1px 2px rgba(0,0,0,0.2)'
            }}>
              {t.landing.coreFocusDesc}
            </p>
          </div>
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
        {/* Safety Check - Glass Effect */}
        <div className="card animate-slide-up" style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(12px)',
          borderRadius: '32px',
          padding: '2rem',
          width: '100%',
          maxWidth: '30rem',
          boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.2)',
          marginBottom: '2rem',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          position: 'relative',
          zIndex: 20
        }}>

          <h2 className="text-2xl font-extrabold text-white text-center mb-8 tracking-tight" style={{ border: 'none', textShadow: '0 2px 4px rgba(0,0,0,0.1)', color: 'white' }}>
            {t.landing.safetyCheck}
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
                border: safetyStatus === 'safe' ? '2px solid #2391cc' : '1px solid #e2e8f0',
                background: safetyStatus === 'safe' ? '#e0f2fe' : 'white',
                color: safetyStatus === 'safe' ? '#2391cc' : '#0f172a',
                fontWeight: 700,
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '90px'
              }}
            >
              <span className="text-base">{t.landing.yesContinue}</span>
            </div>

            <div
              onClick={() => setSafetyStatus('uncertain')}
              className="card-clickable"
              style={{
                borderRadius: '20px',
                padding: '1.5rem 0.5rem',
                textAlign: 'center',
                border: safetyStatus === 'uncertain' ? '2.5px solid #2391cc' : '1.5px solid #e2e8f0',
                background: safetyStatus === 'uncertain' ? '#e0f2fe' : 'white',
                color: safetyStatus === 'uncertain' ? '#2391cc' : '#0f172a',
                fontWeight: 700,
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '90px'
              }}
            >
              <span className="text-base leading-tight text-center">{t.landing.unsure}</span>
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
              <span className="text-base">{t.landing.noEmergency}</span>
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
            <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.85rem', lineHeight: '1.5', margin: 0 }}>
              {t.landing.safetyCheckDesc}
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
              background: safetyStatus ? '#2391cc' : '#cbd5e1',
              color: 'white',
              fontWeight: 800,
              fontSize: '1.1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              cursor: safetyStatus ? 'pointer' : 'not-allowed',
              boxShadow: safetyStatus ? '0 8px 20px rgba(35, 145, 204, 0.25)' : 'none',
              transition: 'all 0.3s'
            }}
          >
            {safetyStatus === 'danger' ? t.landing.callEmergency : t.landing.continue}
          </button>
        </div>

        {/* Emergency Contacts - Independent Cards and Matched Width */}
        {/* Emergency Contacts - Glass Effect */}
        <div className="animate-slide-up" style={{
          width: '100%',
          maxWidth: '30rem',
          animationDelay: '100ms',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(12px)',
          borderRadius: '32px',
          padding: '2rem',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.2)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '2rem'
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
              {t.landing.emergencyContacts}
            </h2>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            width: '100%'
          }}>
            <EmergencyButton
              number="112"
              title={t.emergency.title112}
              description={t.emergency.desc112}
              variant="danger"
              ariaLabelSuffix={t.common.ariaCall}
            />

            <EmergencyButton
              number="116 006"
              title={t.emergency.title116006}
              description={t.emergency.desc116006}
              variant="primary"
              ariaLabelSuffix={t.common.ariaCall}
            />

            <EmergencyButton
              number="116 111"
              title={t.emergency.title116111}
              description={t.emergency.desc116111}
              variant="primary"
              ariaLabelSuffix={t.common.ariaCall}
            />
          </div>
        </div>
      </div>

      {/* Support Options Grid - Desktop/Mobile Friendly */}
      <div className="container animate-slide-up" style={{
        paddingBottom: '4rem',
        marginTop: '6rem', // Added generous spacing to prevent overlap
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '1200px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem'
      }}>
        <style dangerouslySetInnerHTML={{
          __html: `
          .custom-support-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.75rem;
          }
          @media (min-width: 768px) {
            .custom-support-grid {
              grid-template-columns: repeat(3, 1fr) !important;
              gap: 1.5rem;
            }
          }
        `}} />
        <div className="custom-support-grid w-full">
          {[
            {
              title: t.home.cards.emergency.title,
              icon: <Siren size={32} color="white" />,
              link: '/emergency',
              action: t.home.cards.emergency.action
            },
            {
              title: t.home.cards.safetyPlan.title,
              icon: <ShieldAlert size={32} color="white" />,
              link: '/safety-plan',
              action: t.home.cards.safetyPlan.action
            },
            {
              title: t.home.cards.childConcern.title,
              icon: <Baby size={32} color="white" />,
              link: '/rights',
              action: t.home.cards.childConcern.action
            },
            {
              title: t.home.cards.nearby.title,
              icon: <Home size={32} color="white" />,
              link: '/nearby',
              action: t.home.cards.nearby.action
            },
            {
              title: t.home.cards.rights.title,
              icon: <Scale size={32} color="white" />,
              link: '/rights',
              action: t.home.cards.rights.action
            },
            {
              title: t.home.cards.digitalSecurity.title,
              icon: <Lock size={32} color="white" />,
              link: '/digital-security',
              action: t.home.cards.digitalSecurity.action
            }
          ].map((item, index) => (
            <Link key={index} href={item.link} style={{ textDecoration: 'none' }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(12px)',
                borderRadius: '24px',
                padding: '2rem',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                height: '100%',
                minHeight: '220px',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                cursor: 'pointer'
              }}
                className="hover:scale-[1.02] hover:shadow-xl"
              >
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '16px',
                    width: '64px',
                    height: '64px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}>
                    {item.icon}
                  </div>
                  <h3 style={{
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: 'white',
                    marginBottom: '0.5rem',
                    lineHeight: '1.3'
                  }}>
                    {item.title}
                  </h3>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'white',
                  fontWeight: 600,
                  fontSize: '1rem',
                  marginTop: 'auto'
                }}>
                  {item.action}
                  <ArrowRight size={20} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Success Stories Section */}
      <SuccessStories />

      <div className="container" style={{ paddingBottom: '3rem' }}>
        {/* Anonymity Notice */}
        <div className="text-center mt-xl" style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>
          <div className="flex items-center justify-center gap-sm mb-sm">
            <Heart size={16} />
            <strong>{t.common.anonymousTitle}</strong>
          </div>
          <p className="mb-0">
            {t.common.anonymousDesc}
          </p>
        </div>
      </div>
      {/* EmergencyAIChat component removed */}
    </div>
  );
}

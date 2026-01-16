'use client';

import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/context/LanguageContext';

export default function SimpleNavbar() {
    const { t } = useLanguage();

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                padding: '1.5rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
            }}
        >
            {/* Logo */}
            <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
                <img
                    src="https://raw.githubusercontent.com/hasanfistikci12/logo-unilink/refs/heads/main/logo_white.png"
                    alt="Unilink Navigator"
                    style={{ height: '40px', width: 'auto' }}
                />
            </Link>

            {/* Desktop Links */}
            <div style={{
                display: 'flex',
                gap: '1.5rem',
                alignItems: 'center',
                color: 'white'
            }}>
                <Link href="/safety-plan" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
                    {t.common.safetyPlan}
                </Link>
                <Link href="/rights" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
                    {t.common.rights}
                </Link>
                <Link href="/nearby" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
                    {t.common.nearby}
                </Link>
                <Link href="/digital-security" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
                    {t.common.security}
                </Link>

                <LanguageSwitcher />

                <Link
                    href="/emergency"
                    style={{
                        padding: '0.75rem 2rem',
                        background: 'white',
                        color: '#1e3a5f',
                        borderRadius: '2rem',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        fontSize: '0.9rem',
                        textTransform: 'uppercase'
                    }}
                >
                    {t.common.getHelp}
                </Link>
            </div>
        </nav>
    );
}

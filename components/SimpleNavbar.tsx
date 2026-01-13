'use client';

import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';

export default function SimpleNavbar() {
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
            <Link href="/" style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                color: 'white',
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
            }}>
                UNILINK NAVIGATOR
            </Link>

            {/* Desktop Links */}
            <div style={{
                display: 'flex',
                gap: '2rem',
                alignItems: 'center',
                color: 'white'
            }}>
                <Link href="/safety-plan" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
                    SAFETY PLAN
                </Link>
                <Link href="/rights" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
                    RIGHTS
                </Link>
                <Link href="/nearby" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
                    NEARBY
                </Link>
                <Link href="/digital-security" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
                    SECURITY
                </Link>

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
                    GET HELP
                </Link>
            </div>
        </nav>
    );
}

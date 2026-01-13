'use client';

import React from 'react';
import Link from 'next/link';

export default function SuccessStories() {
    const stories = [
        {
            id: 1,
            name: "Elif & Can",
            image: "/story3.jpg",
            text: "Unilink sayesinde güvenli bir sığınağa ulaştık. Artık korkmadan geleceğe bakabiliyoruz."
        },
        {
            id: 2,
            name: "Mehmet",
            image: "/story2.jpg",
            text: "Hukuki haklarımı bilmiyordum. Rehberler sayesinde sürecimi yönetebildim ve oturum iznimi aldım."
        },
        {
            id: 3,
            name: "Ayşe",
            image: "/story1.jpg",
            text: "Yalnız hissettiğim anda acil yardım butonu hayatımı kurtardı. Destek ekibi her an yanımdaydı."
        },
        {
            id: 4,
            name: "Selin",
            image: "/story5.jpg",
            text: "Dijital güvenlik önlemleriyle izimi kaybettirdim. Şimdi yeni bir şehirde, huzurlu bir hayatım var."
        },
        {
            id: 5,
            name: "Burak",
            image: "/story4.jpg",
            text: "Barınma sorunumu çözmekte çok zorlanıyordum. Platformdaki yönlendirmelerle kalacak yer buldum."
        }
    ];

    return (
        <section style={{
            backgroundColor: '#FF6B35', // Changed to Orange
            paddingTop: '10rem',
            paddingBottom: '10rem',
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            minWidth: '100%'
        }}>
            <div style={{
                width: '100%',
                maxWidth: '1400px',
                margin: '0 auto',
                textAlign: 'center',
                marginBottom: '4rem',
                padding: '0 1rem'
            }}>
                <h2 style={{
                    fontSize: '4rem',
                    fontWeight: 900,
                    marginBottom: '1.5rem',
                    textTransform: 'uppercase',
                    letterSpacing: '-0.05em',
                    lineHeight: 1.1,
                    color: '#ffffff',
                    textAlign: 'center'
                }}>
                    BAŞARI HİKAYELERİ
                </h2>
                <p style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    fontSize: '1.25rem',
                    color: 'rgba(255, 255, 255, 0.9)', // Increased opacity for better readability on orange
                    fontWeight: 500,
                    letterSpacing: '0.01em',
                    textAlign: 'center'
                }}>
                    Herkesin bir hikayesi vardır. İşte Unilink ile hayatını değiştirenlerin ilham veren yolculukları.
                </p>
            </div>

            <div className="stories-container mb-24 w-full">
                {stories.map((story) => (
                    <div
                        key={story.id}
                        className="story-card"
                        style={{ backgroundImage: `url(${story.image})` }}
                    >
                        <div className="story-content">
                            <span className="story-name">{story.name}</span>
                            <p className="story-text">{story.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '2.5rem',
                width: '100%',
                flexWrap: 'wrap',
                marginTop: '4rem',
                padding: '0 1rem'
            }}>
                <Link href="/share-story" className="btn" style={{
                    backgroundColor: 'white', // Swapped to White
                    color: '#FF6B35', // Swapped to Orange
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    padding: '1.3rem 4.5rem',
                    borderRadius: '50px',
                    textTransform: 'uppercase',
                    border: 'none',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease',
                    whiteSpace: 'nowrap',
                    letterSpacing: '0.02em'
                }}>
                    BİZE HİKAYENİ ANLAT
                </Link>

                <Link href="/stories" className="btn" style={{
                    backgroundColor: 'transparent',
                    color: 'white',
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    padding: '1.3rem 4.5rem',
                    borderRadius: '50px',
                    textTransform: 'uppercase',
                    border: '2px solid rgba(255, 255, 255, 0.8)',
                    transition: 'all 0.3s ease',
                    whiteSpace: 'nowrap',
                    letterSpacing: '0.02em'
                }}>
                    TÜM HİKAYELER
                </Link>
            </div>
        </section>
    );
}

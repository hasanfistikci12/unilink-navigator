'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function SuccessStories() {
    const { t } = useLanguage();

    const storyImages = [
        "/story3.jpg",
        "/story2.jpg",
        "/story1.jpg",
        "/story5.jpg",
        "/story4.jpg"
    ];

    return (
        <section style={{
            backgroundColor: '#2391cc', // Changed to Brand Blue
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
                    {t.successStories.title}
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
                    {t.successStories.subtitle}
                </p>
            </div>

            <div className="stories-container mb-24 w-full">
                {t.successStories.stories.map((story: any, index: number) => (
                    <div
                        key={index}
                        className="story-card"
                        style={{ backgroundImage: `url(${storyImages[index] || '/story1.jpg'})` }}
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
                    color: '#2391cc', // Swapped to Brand Blue
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
                    {t.successStories.tellStory}
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
                    {t.successStories.allStories}
                </Link>
            </div>
        </section>
    );
}

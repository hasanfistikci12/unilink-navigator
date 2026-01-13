'use client';

import { useState } from 'react';

interface Section {
    id: string;
    title: string;
    content: string[];
}

const sections: Section[] = [
    {
        id: 'violence-types',
        title: 'Şiddet Nedir?',
        content: [
            '<strong>Fiziksel Şiddet:</strong> Vurma, itme, tokat atma, zarar verme',
            '<strong>Psikolojik Şiddet:</strong> Tehdit, aşağılama, kontrol, izolasyon',
            '<strong>Ekonomik Şiddet:</strong> Paraya erişimi engelleme, çalışmayı yasaklama',
            '<strong>Cinsel Şiddet:</strong> Rızasız cinsel ilişki, zorla evlilik'
        ]
    },
    {
        id: 'evidence',
        title: 'Kanıt ve Güvenlik',
        content: [
            'Yaralanma fotoğrafları çek (tarih damgalı)',
            'Mesajları, e-postaları kaydet',
            'Tıbbi raporları sakla',
            'Tanık isim ve iletişim bilgilerini not et',
            'Güvenli bir yerde (bulut, güvenilir kişi) sakla'
        ]
    },
    {
        id: 'police',
        title: 'Polis / Raporlama Yolları',
        content: [
            '<strong>112:</strong> Acil durumlarda hemen ara',
            '<strong>En yakın karakol:</strong> Şahsen başvuru yapabilirsin',
            '<strong>Online:</strong> politsei.ee üzerinden bildirim',
            'Tercüman talep edebilirsin (ücretsiz)',
            'Mağdur destek çalışanı eşlik edebilir'
        ]
    },
    {
        id: 'victim-support',
        title: 'Mağdur Desteği Nedir?',
        content: [
            'Ücretsiz hukuki danışmanlık',
            'Psikolojik destek ve terapi',
            'Mahkeme sürecinde eşlik',
            'Güvenli barınma yönlendirmesi',
            'Sosyal haklar ve maddi destek bilgilendirmesi'
        ]
    },
    {
        id: 'shelter',
        title: 'Sığınak ve Danışmanlık',
        content: [
            '<strong>Naiste Tugi- ja Teabekeskus:</strong> Kadınlar için sığınak ve danışmanlık',
            '<strong>Tallinna Perekeskus:</strong> Aile danışmanlığı',
            '<strong>116 006:</strong> 7/24 mağdur destek hattı',
            'Çocuklu aileler için özel destek programları',
            'Geçici barınma ve uzun vadeli çözümler'
        ]
    }
];

export default function RightsPage() {
    const [expandedSection, setExpandedSection] = useState<string | null>(null);

    const toggleSection = (id: string) => {
        setExpandedSection(expandedSection === id ? null : id);
    };

    return (
        <div className="page-wrapper">
            <div className="container">
                <h1 className="mb-md">Haklar & Süreçler</h1>
                <p className="text-crisis mb-xl" style={{ color: 'var(--color-text-secondary)' }}>
                    Haklarını bil, süreçleri anla
                </p>

                <div className="grid gap-md">
                    {sections.map(section => (
                        <div key={section.id} className="card">
                            <button
                                onClick={() => toggleSection(section.id)}
                                className="btn btn-outline"
                                style={{ width: '100%', textAlign: 'left', justifyContent: 'space-between' }}
                            >
                                <span>{section.title}</span>
                                <span style={{ fontSize: 'var(--font-size-xl)' }}>
                                    {expandedSection === section.id ? '−' : '+'}
                                </span>
                            </button>

                            {expandedSection === section.id && (
                                <div className="mt-md animate-slide-up">
                                    <ul style={{ lineHeight: '1.8', paddingLeft: 'var(--spacing-lg)' }}>
                                        {section.content.map((item, index) => (
                                            <li
                                                key={index}
                                                className="mb-sm"
                                                dangerouslySetInnerHTML={{ __html: item }}
                                            />
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Official Resources */}
                <div className="card mt-xl" style={{ backgroundColor: '#f0f9ff', borderColor: '#bfdbfe' }}>
                    <h3 className="mb-md">📚 Resmî Kaynaklar</h3>
                    <ul style={{ lineHeight: '1.8', paddingLeft: 'var(--spacing-lg)' }}>
                        <li className="mb-sm">
                            <strong>eesti.ee:</strong> Devlet hizmetleri ve bilgilendirme
                        </li>
                        <li>
                            <strong>Palunabi:</strong> Mağdur destek rehberi
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

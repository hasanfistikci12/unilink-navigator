'use client';

import { useState } from 'react';

interface SecurityTip {
    id: string;
    title: string;
    icon: string;
    shortDesc: string;
    steps: string[];
}

const securityTips: SecurityTip[] = [
    {
        id: 'location',
        title: 'Konum Paylaşımını Kapatma',
        icon: '📍',
        shortDesc: 'Telefonundan konum takibini kapat',
        steps: [
            '<strong>iPhone:</strong> Ayarlar → Gizlilik → Konum Servisleri → İstediğin uygulamayı seç → "Asla"',
            '<strong>Android:</strong> Ayarlar → Konum → Uygulama izinleri → İstediğin uygulamayı seç → "İzin verme"',
            'Google Haritalar geçmişini sil: Zaman Çizelgesi → Ayarlar → Tüm Konum Geçmişini Sil',
            'Fotoğraf konum etiketlerini kapat: Kamera ayarlarından GPS etiketlemeyi kapat'
        ]
    },
    {
        id: 'messaging',
        title: 'WhatsApp/Telegram Gizlilik',
        icon: '💬',
        shortDesc: 'Mesajlaşma uygulamalarını güvenli hale getir',
        steps: [
            '<strong>WhatsApp:</strong> Ayarlar → Hesap → Gizlilik → Son Görülme → "Kimse"',
            'Mavi tikleri kapat: Ayarlar → Hesap → Gizlilik → Okundu Bilgisi',
            '<strong>Telegram:</strong> Ayarlar → Gizlilik ve Güvenlik → Son Görülme → "Kimse"',
            'Gizli sohbet kullan (uçtan uca şifreli, zamanlayıcılı silme)',
            'Bildirim önizlemelerini kapat: Ayarlar → Bildirimler → Mesaj Önizlemesi → Kapat'
        ]
    },
    {
        id: 'spyware',
        title: 'Takip Yazılımı Şüphesi',
        icon: '🔍',
        shortDesc: 'Telefonunda takip yazılımı olup olmadığını kontrol et',
        steps: [
            'Pil tüketimini kontrol et: Ayarlar → Pil → Bilinmeyen uygulamaları ara',
            'Veri kullanımını kontrol et: Ayarlar → Mobil Veri → Şüpheli yüksek kullanım',
            'Yüklü uygulamaları gözden geçir: Tanımadığın uygulamaları sil',
            'Telefonu fabrika ayarlarına döndür (önceden yedek al)',
            '<strong>Profesyonel yardım:</strong> Şüphen varsa teknoloji uzmanına danış'
        ]
    },
    {
        id: 'browser',
        title: 'Tarayıcı Geçmişi Temizleme',
        icon: '🌐',
        shortDesc: 'İnternet geçmişini güvenli şekilde sil',
        steps: [
            '<strong>Safari (iPhone):</strong> Ayarlar → Safari → Geçmişi ve Web Sitesi Verilerini Temizle',
            '<strong>Chrome:</strong> Ayarlar → Gizlilik → Tarama Verilerini Temizle → Tüm Zamanlar',
            '<strong>Gizli mod kullan:</strong> Safari: Sekmeler → Gizli, Chrome: Menü → Yeni Gizli Sekme',
            'Otomatik doldurma ve şifreleri kapat',
            'Düzenli olarak çerezleri temizle'
        ]
    },
    {
        id: 'communication',
        title: 'Güvenli İletişim',
        icon: '🔒',
        shortDesc: 'Güvenli iletişim yöntemleri',
        steps: [
            '<strong>Signal:</strong> Uçtan uca şifreli, en güvenli mesajlaşma uygulaması',
            'Halka açık Wi-Fi kullanırken VPN kullan',
            'Önemli konuşmaları güvenilir kişiyle yüz yüze yap',
            'Güvenli e-posta: ProtonMail gibi şifreli e-posta servisleri',
            'İki faktörlü doğrulama (2FA) kullan'
        ]
    }
];

export default function DigitalSecurityPage() {
    const [expandedTip, setExpandedTip] = useState<string | null>(null);

    const toggleTip = (id: string) => {
        setExpandedTip(expandedTip === id ? null : id);
    };

    return (
        <div className="page-wrapper">
            <div className="container">
                <h1 className="mb-md">Dijital Güvenlik</h1>
                <p className="text-crisis mb-xl" style={{ color: 'var(--color-text-secondary)' }}>
                    Dijital izlerini kontrol et, güvende kal
                </p>

                <div className="grid gap-md">
                    {securityTips.map(tip => (
                        <div key={tip.id} className="card">
                            <button
                                onClick={() => toggleTip(tip.id)}
                                className="btn btn-outline"
                                style={{
                                    width: '100%',
                                    textAlign: 'left',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start'
                                }}
                            >
                                <div>
                                    <div style={{ fontSize: 'var(--font-size-xl)', fontWeight: 700, marginBottom: 'var(--spacing-xs)' }}>
                                        {tip.icon} {tip.title}
                                    </div>
                                    <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 400, color: 'var(--color-text-secondary)' }}>
                                        {tip.shortDesc}
                                    </div>
                                </div>
                                <span style={{ fontSize: 'var(--font-size-xl)', marginLeft: 'var(--spacing-md)' }}>
                                    {expandedTip === tip.id ? '−' : '+'}
                                </span>
                            </button>

                            {expandedTip === tip.id && (
                                <div className="mt-md animate-slide-up">
                                    <ol style={{ lineHeight: '1.8', paddingLeft: 'var(--spacing-lg)' }}>
                                        {tip.steps.map((step, index) => (
                                            <li
                                                key={index}
                                                className="mb-md"
                                                dangerouslySetInnerHTML={{ __html: step }}
                                            />
                                        ))}
                                    </ol>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Warning Notice */}
                <div className="card mt-xl" style={{ backgroundColor: '#fef3c7', borderColor: '#fbbf24' }}>
                    <p className="mb-md">
                        ⚠️ <strong>Önemli Uyarı:</strong>
                    </p>
                    <p className="mb-0" style={{ fontSize: 'var(--font-size-sm)', lineHeight: '1.7' }}>
                        Eğer birinin seni dijital olarak takip ettiğinden şüpheleniyorsan, bu adımları atarken dikkatli ol.
                        Ani değişiklikler fark edilebilir. Mümkünse güvenilir bir teknoloji uzmanından yardım al.
                    </p>
                </div>
            </div>
        </div>
    );
}

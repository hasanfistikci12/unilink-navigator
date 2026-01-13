'use client';

import { useState } from 'react';

interface ChecklistItem {
    id: string;
    text: string;
    checked: boolean;
}

export default function SafetyPlanPage() {
    const [immediateActions, setImmediateActions] = useState<ChecklistItem[]>([
        { id: '1', text: 'Güvenli bir odaya geç (kilitlenebilir, telefon erişimi olan)', checked: false },
        { id: '2', text: 'Telefonu şarja tak', checked: false },
        { id: '3', text: 'Güvendiğin kişiye kısa mesaj at', checked: false },
        { id: '4', text: 'Çocukla güvenli kelime belirle', checked: false },
        { id: '5', text: 'Acil çıkış yollarını kontrol et', checked: false },
    ]);

    const [exitBag, setExitBag] = useState<ChecklistItem[]>([
        { id: '1', text: 'Kimlik belgeleri (pasaport, kimlik)', checked: false },
        { id: '2', text: 'Önemli belgeler (evlilik, doğum, ikamet)', checked: false },
        { id: '3', text: 'İlaçlar ve reçeteler', checked: false },
        { id: '4', text: 'Nakit para', checked: false },
        { id: '5', text: 'Yedek anahtar', checked: false },
        { id: '6', text: 'Telefon şarj aleti', checked: false },
        { id: '7', text: 'Çocuklar için gerekli eşyalar', checked: false },
    ]);

    const toggleItem = (list: ChecklistItem[], setList: Function, id: string) => {
        setList(list.map(item =>
            item.id === id ? { ...item, checked: !item.checked } : item
        ));
    };

    return (
        <div className="page-wrapper">
            <div className="container">
                <h1 className="mb-md">Güvenlik Planı</h1>
                <p className="text-crisis mb-lg" style={{ color: 'var(--color-text-secondary)' }}>
                    Kriz anı için hazırlıklı ol
                </p>

                {/* Data Privacy Notice */}
                <div className="card mb-xl" style={{ backgroundColor: '#f0f9ff', borderColor: '#bfdbfe' }}>
                    <p className="mb-0" style={{ fontSize: 'var(--font-size-sm)' }}>
                        🔒 <strong>Gizlilik:</strong> Bu planı kaydetmez. İstersen sadece cihazında geçici olarak tutar.
                        &quot;Çıkınca sil&quot; varsayılan.
                    </p>
                </div>

                {/* Immediate Actions */}
                <div className="card mb-xl">
                    <h2 className="mb-md">⚡ Hemen Yap</h2>
                    <p className="mb-md" style={{ color: 'var(--color-text-secondary)' }}>
                        Acil durumda yapman gerekenler:
                    </p>
                    <div className="grid gap-sm">
                        {immediateActions.map(item => (
                            <label
                                key={item.id}
                                className="flex items-center gap-md"
                                style={{
                                    padding: 'var(--spacing-md)',
                                    backgroundColor: item.checked ? '#d1fae5' : 'var(--color-background)',
                                    borderRadius: 'var(--radius-md)',
                                    cursor: 'pointer',
                                    transition: 'all var(--transition-fast)'
                                }}
                            >
                                <input
                                    type="checkbox"
                                    checked={item.checked}
                                    onChange={() => toggleItem(immediateActions, setImmediateActions, item.id)}
                                    style={{
                                        width: '24px',
                                        height: '24px',
                                        cursor: 'pointer',
                                        accentColor: 'var(--color-safe)'
                                    }}
                                />
                                <span style={{
                                    flex: 1,
                                    textDecoration: item.checked ? 'line-through' : 'none',
                                    fontWeight: item.checked ? 400 : 500
                                }}>
                                    {item.text}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Exit Bag */}
                <div className="card mb-xl">
                    <h2 className="mb-md">🎒 Çıkış Çantası</h2>
                    <p className="mb-md" style={{ color: 'var(--color-text-secondary)' }}>
                        Acil ayrılma durumunda yanına alman gerekenler:
                    </p>
                    <div className="grid gap-sm">
                        {exitBag.map(item => (
                            <label
                                key={item.id}
                                className="flex items-center gap-md"
                                style={{
                                    padding: 'var(--spacing-md)',
                                    backgroundColor: item.checked ? '#d1fae5' : 'var(--color-background)',
                                    borderRadius: 'var(--radius-md)',
                                    cursor: 'pointer',
                                    transition: 'all var(--transition-fast)'
                                }}
                            >
                                <input
                                    type="checkbox"
                                    checked={item.checked}
                                    onChange={() => toggleItem(exitBag, setExitBag, item.id)}
                                    style={{
                                        width: '24px',
                                        height: '24px',
                                        cursor: 'pointer',
                                        accentColor: 'var(--color-safe)'
                                    }}
                                />
                                <span style={{
                                    flex: 1,
                                    textDecoration: item.checked ? 'line-through' : 'none',
                                    fontWeight: item.checked ? 400 : 500
                                }}>
                                    {item.text}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Message Template */}
                <div className="card">
                    <h2 className="mb-md">💬 Mesaj Şablonu</h2>
                    <p className="mb-md" style={{ color: 'var(--color-text-secondary)' }}>
                        Güvendiğin kişiye gönderebileceğin kısa mesaj:
                    </p>
                    <div style={{
                        padding: 'var(--spacing-md)',
                        backgroundColor: 'var(--color-background)',
                        borderRadius: 'var(--radius-md)',
                        fontStyle: 'italic',
                        border: '2px dashed var(--color-border)'
                    }}>
                        &quot;Yardıma ihtiyacım var. Lütfen beni ara veya gel. [Adres/Konum]&quot;
                    </div>
                    <button
                        onClick={() => {
                            if (navigator.share) {
                                navigator.share({
                                    text: 'Yardıma ihtiyacım var. Lütfen beni ara veya gel.'
                                });
                            } else {
                                navigator.clipboard.writeText('Yardıma ihtiyacım var. Lütfen beni ara veya gel.');
                                alert('Mesaj kopyalandı!');
                            }
                        }}
                        className="btn btn-primary"
                        style={{ width: '100%', marginTop: 'var(--spacing-md)' }}
                    >
                        📋 Mesajı Kopyala
                    </button>
                </div>
            </div>
        </div>
    );
}

'use client';

import { useState } from 'react';

interface Template {
    category: string;
    tr: string;
    et: string;
    ru: string;
    en: string;
}

const templates: Template[] = [
    {
        category: 'Polis',
        tr: 'Yardıma ihtiyacım var. Türkçe konuşan biri var mı?',
        et: 'Vajan abi. Kas keegi räägib türgi keelt?',
        ru: 'Мне нужна помощь. Есть ли кто-нибудь, кто говорит по-турецки?',
        en: 'I need help. Is there anyone who speaks Turkish?'
    },
    {
        category: 'Polis',
        tr: 'Şiddet gördüm. Şikayet etmek istiyorum.',
        et: 'Mind on vägivallatselt koheldud. Tahan esitada kaebuse.',
        ru: 'Я подвергся насилию. Я хочу подать жалобу.',
        en: 'I have experienced violence. I want to file a complaint.'
    },
    {
        category: 'Sağlık',
        tr: 'Doktora gitmem gerekiyor. Tercüman istiyorum.',
        et: 'Pean minema arsti juurde. Vajan tõlki.',
        ru: 'Мне нужно к врачу. Мне нужен переводчик.',
        en: 'I need to see a doctor. I need an interpreter.'
    },
    {
        category: 'Sağlık',
        tr: 'Hamilelik kontrolü için randevu almak istiyorum.',
        et: 'Tahan broneerida aja raseduskontrolli.',
        ru: 'Я хочу записаться на осмотр по беременности.',
        en: 'I want to make an appointment for pregnancy check-up.'
    },
    {
        category: 'Okul',
        tr: 'Çocuğum için okul kaydı yaptırmak istiyorum.',
        et: 'Tahan registreerida oma lapse kooli.',
        ru: 'Я хочу записать своего ребенка в школу.',
        en: 'I want to register my child for school.'
    },
    {
        category: 'Okul',
        tr: 'Öğretmenle görüşmek istiyorum. Tercüman gerekli.',
        et: 'Tahan kohtuda õpetajaga. Vajan tõlki.',
        ru: 'Я хочу встретиться с учителем. Мне нужен переводчик.',
        en: 'I want to meet with the teacher. I need an interpreter.'
    }
];

export default function TranslatePage() {
    const [mode, setMode] = useState<'templates' | 'freeform'>('templates');
    const [selectedCategory, setSelectedCategory] = useState<string>('Tümü');
    const [freeformText, setFreeformText] = useState('');
    const [translatedText, setTranslatedText] = useState('');

    const categories = ['Tümü', 'Polis', 'Sağlık', 'Okul'];

    const filteredTemplates = selectedCategory === 'Tümü'
        ? templates
        : templates.filter(t => t.category === selectedCategory);

    const handleTranslate = () => {
        // In a real app, this would call a translation API
        setTranslatedText(`[Çeviri yapılacak: "${freeformText}"]\n\nBu prototipte gerçek çeviri API'si entegre değildir.`);
    };

    return (
        <div className="page-wrapper">
            <div className="container">
                <h1 className="mb-md">Çeviri</h1>
                <p className="text-crisis mb-xl" style={{ color: 'var(--color-text-secondary)' }}>
                    Acil çok dilli iletişim desteği
                </p>

                {/* Mode Selector */}
                <div className="flex gap-md mb-xl">
                    <button
                        onClick={() => setMode('templates')}
                        className={`btn ${mode === 'templates' ? 'btn-primary' : 'btn-outline'}`}
                        style={{ flex: 1 }}
                    >
                        📋 Hazır Cümleler
                    </button>
                    <button
                        onClick={() => setMode('freeform')}
                        className={`btn ${mode === 'freeform' ? 'btn-primary' : 'btn-outline'}`}
                        style={{ flex: 1 }}
                    >
                        ✍️ Ben Yazayım
                    </button>
                </div>

                {/* Templates Mode */}
                {mode === 'templates' && (
                    <>
                        {/* Category Filter */}
                        <div className="mb-lg">
                            <h3 className="mb-md">Kategori Seç</h3>
                            <div className="flex gap-sm" style={{ flexWrap: 'wrap' }}>
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className="chip"
                                        style={{
                                            backgroundColor: selectedCategory === cat ? 'var(--color-primary)' : 'var(--color-surface)',
                                            color: selectedCategory === cat ? 'white' : 'var(--color-text-primary)',
                                            borderColor: selectedCategory === cat ? 'var(--color-primary)' : 'var(--color-border)'
                                        }}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Templates List */}
                        <div className="grid gap-md">
                            {filteredTemplates.map((template, index) => (
                                <div key={index} className="card">
                                    <div className="badge badge-safe mb-md">{template.category}</div>

                                    <div className="grid gap-sm">
                                        <div>
                                            <strong style={{ color: 'var(--color-primary)' }}>🇹🇷 Türkçe:</strong>
                                            <p className="mb-0 mt-sm">{template.tr}</p>
                                        </div>

                                        <div>
                                            <strong style={{ color: 'var(--color-primary)' }}>🇪🇪 Eesti:</strong>
                                            <p className="mb-0 mt-sm">{template.et}</p>
                                        </div>

                                        <div>
                                            <strong style={{ color: 'var(--color-primary)' }}>🇷🇺 Русский:</strong>
                                            <p className="mb-0 mt-sm">{template.ru}</p>
                                        </div>

                                        <div>
                                            <strong style={{ color: 'var(--color-primary)' }}>🇬🇧 English:</strong>
                                            <p className="mb-0 mt-sm">{template.en}</p>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => {
                                            const text = `TR: ${template.tr}\nET: ${template.et}\nRU: ${template.ru}\nEN: ${template.en}`;
                                            navigator.clipboard.writeText(text);
                                            alert('Çeviriler kopyalandı!');
                                        }}
                                        className="btn btn-outline"
                                        style={{ width: '100%', marginTop: 'var(--spacing-md)' }}
                                    >
                                        📋 Kopyala
                                    </button>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* Freeform Mode */}
                {mode === 'freeform' && (
                    <div className="grid gap-lg">
                        <div className="card">
                            <h3 className="mb-md">Çevirmek İstediğin Metni Yaz</h3>
                            <textarea
                                value={freeformText}
                                onChange={(e) => setFreeformText(e.target.value)}
                                placeholder="Türkçe metninizi buraya yazın..."
                                rows={5}
                                style={{
                                    width: '100%',
                                    padding: 'var(--spacing-md)',
                                    fontSize: 'var(--font-size-base)',
                                    borderRadius: 'var(--radius-md)',
                                    border: '2px solid var(--color-border)',
                                    fontFamily: 'var(--font-family)',
                                    resize: 'vertical'
                                }}
                            />
                            <button
                                onClick={handleTranslate}
                                className="btn btn-primary"
                                style={{ width: '100%', marginTop: 'var(--spacing-md)' }}
                                disabled={!freeformText.trim()}
                            >
                                🌐 Çevir
                            </button>
                        </div>

                        {translatedText && (
                            <div className="card animate-slide-up">
                                <h3 className="mb-md">Çeviri Sonucu</h3>
                                <div style={{
                                    padding: 'var(--spacing-md)',
                                    backgroundColor: 'var(--color-background)',
                                    borderRadius: 'var(--radius-md)',
                                    whiteSpace: 'pre-wrap'
                                }}>
                                    {translatedText}
                                </div>
                                <button
                                    onClick={() => {
                                        navigator.clipboard.writeText(translatedText);
                                        alert('Çeviri kopyalandı!');
                                    }}
                                    className="btn btn-outline"
                                    style={{ width: '100%', marginTop: 'var(--spacing-md)' }}
                                >
                                    📋 Kopyala
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {/* Disclaimer */}
                <div className="card mt-xl" style={{ backgroundColor: '#f0f9ff', borderColor: '#bfdbfe' }}>
                    <p className="mb-0" style={{ fontSize: 'var(--font-size-sm)', lineHeight: '1.7' }}>
                        ℹ️ <strong>Yasal Uyarı:</strong> Tõlge on loodud tehisintellekti abil ja kontrollitud Unilink Navigatori poolt.
                        Teave ja suunamine – mitte õiguslik esindamine.
                        <br /><br />
                        <em>(Çeviri yapay zeka ile oluşturulmuş ve Unilink Navigator tarafından kontrol edilmiştir.
                            Bilgi ve yönlendirme amaçlıdır – hukuki temsil değildir.)</em>
                    </p>
                </div>
            </div>
        </div>
    );
}

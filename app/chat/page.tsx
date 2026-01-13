'use client';

import Link from 'next/link';
import { AlertTriangle, MapPin, Phone, Shield } from 'lucide-react';

export default function ChatPage() {
    const quickChips = [
        "Bugün güvende değilim",
        "Ayrılmak istiyorum",
        "Çocuk için yardım",
        "Polise nasıl başvururum?",
        "Sığınak bul"
    ];

    return (
        <div className="page-wrapper">
            <div className="container">
                {/* Warning Banner */}
                <div className="card mb-lg" style={{
                    backgroundColor: 'var(--color-danger)',
                    color: 'white',
                    borderColor: 'var(--color-danger)'
                }}>
                    <p className="mb-0 text-center flex items-center justify-center gap-sm">
                        <AlertTriangle size={20} />
                        <strong>Acil tehlikede 112&apos;yi ara.</strong>
                    </p>
                </div>

                <h1 className="mb-md">Konuş</h1>
                <p className="text-crisis mb-lg" style={{ color: 'var(--color-text-secondary)' }}>
                    Aşağıdaki hızlı seçeneklerden birini seçin veya doğrudan destek merkezlerine ulaşın.
                </p>

                {/* Quick Action Chips */}
                <div className="mb-xl">
                    <h3 className="mb-md">Hızlı Seçenekler</h3>
                    <div className="grid gap-md">
                        {quickChips.map((chip, index) => (
                            <button
                                key={index}
                                className="chip"
                                onClick={() => {
                                    // In a real app, this would trigger chat or navigation
                                    alert(`Seçildi: ${chip}\n\nBu prototipte, bu seçenek sizi ilgili destek sayfasına yönlendirecektir.`);
                                }}
                            >
                                {chip}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div className="card">
                    <h3 className="mb-md">Doğrudan Destek</h3>
                    <div className="grid gap-md">
                        <Link href="/nearby" className="btn btn-primary">
                            <MapPin size={20} />
                            Yakınımdaki Destek Merkezleri
                        </Link>
                        <Link href="/emergency" className="btn btn-outline">
                            <Phone size={20} />
                            Acil Yardım Hatları
                        </Link>
                        <Link href="/safety-plan" className="btn btn-outline">
                            <Shield size={20} />
                            Güvenlik Planı Oluştur
                        </Link>
                    </div>
                </div>

                <div className="text-center mt-lg" style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                    <p>
                        Bu konuşmalar kaydedilmez ve oturum bitince silinir.
                    </p>
                </div>
            </div>
        </div>
    );
}

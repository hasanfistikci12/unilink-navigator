export default function ExitPage() {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f0f9ff',
            padding: 'var(--spacing-xl)'
        }}>
            <div style={{ maxWidth: '600px', textAlign: 'center' }}>
                <h1 style={{ fontSize: 'var(--font-size-3xl)', marginBottom: 'var(--spacing-lg)', color: 'var(--color-primary)' }}>
                    ☀️ Hava Durumu
                </h1>

                <div className="card mb-xl">
                    <h2 style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--spacing-md)' }}>
                        Tallinn
                    </h2>
                    <div style={{ fontSize: 'var(--font-size-4xl)', margin: 'var(--spacing-lg) 0' }}>
                        🌤️ 5°C
                    </div>
                    <p style={{ color: 'var(--color-text-secondary)' }}>
                        Parçalı bulutlu, hafif rüzgarlı
                    </p>
                </div>

                <div className="card" style={{ backgroundColor: '#fef3c7', borderColor: '#fbbf24', textAlign: 'left' }}>
                    <h3 className="mb-md">🔒 Tarayıcı Geçmişini Temizle</h3>
                    <p className="mb-md" style={{ fontSize: 'var(--font-size-sm)' }}>
                        Güvenliğin için tarayıcı geçmişini temizlemeyi unutma:
                    </p>

                    <ul style={{ lineHeight: '1.8', paddingLeft: 'var(--spacing-lg)', fontSize: 'var(--font-size-sm)' }}>
                        <li className="mb-sm">
                            <strong>Safari (iPhone):</strong> Ayarlar → Safari → Geçmişi ve Web Sitesi Verilerini Temizle
                        </li>
                        <li className="mb-sm">
                            <strong>Chrome:</strong> Menü (⋮) → Geçmiş → Tarama Verilerini Temizle → Tüm Zamanlar
                        </li>
                        <li>
                            <strong>Firefox:</strong> Menü → Geçmiş → Geçmişi Temizle → Tüm Zamanlar
                        </li>
                    </ul>
                </div>

                <p style={{
                    marginTop: 'var(--spacing-xl)',
                    fontSize: 'var(--font-size-xs)',
                    color: 'var(--color-text-secondary)'
                }}>
                    Bu sayfa güvenliğin için oluşturulmuştur.
                </p>
            </div>
        </div>
    );
}

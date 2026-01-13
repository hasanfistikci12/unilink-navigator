'use client';

import { useState } from 'react';

interface SupportCenter {
    id: number;
    name: string;
    type: string;
    address: string;
    phone: string;
    distance?: string;
}

const mockCenters: SupportCenter[] = [
    {
        id: 1,
        name: "Ohvriabi",
        type: "Mağdur Destek Çalışanı",
        address: "Tallinn, Kesklinn",
        phone: "116 006",
        distance: "2.3 km"
    },
    {
        id: 2,
        name: "Naiste Tugi- ja Teabekeskus",
        type: "Kadın Destek ve Sığınak",
        address: "Tallinn, Kristiine",
        phone: "+372 5333 0733",
        distance: "3.1 km"
    },
    {
        id: 3,
        name: "Tallinna Perekeskus",
        type: "Aile Danışma Merkezi",
        address: "Tallinn, Põhja-Tallinn",
        phone: "+372 645 7020",
        distance: "4.5 km"
    },
    {
        id: 4,
        name: "Politsei- ja Piirivalveamet",
        type: "Polis Merkezi",
        address: "Tallinn, Kesklinn",
        phone: "112",
        distance: "1.8 km"
    }
];

export default function NearbyPage() {
    const [showLocationModal, setShowLocationModal] = useState(true);
    const [locationGranted, setLocationGranted] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState<string>('all');

    const handleGrantLocation = () => {
        setLocationGranted(true);
        setShowLocationModal(false);
    };

    const handleManualSelect = () => {
        setShowLocationModal(false);
    };

    const filters = [
        { id: 'all', label: 'Tümü' },
        { id: 'ohvriabi', label: 'Ohvriabi' },
        { id: 'shelter', label: 'Sığınak' },
        { id: 'police', label: 'Polis' },
        { id: 'counseling', label: 'Danışmanlık' }
    ];

    return (
        <div className="page-wrapper">
            <div className="container">
                <h1 className="mb-md">Yakınımdaki Destek</h1>
                <p className="text-crisis mb-lg" style={{ color: 'var(--color-text-secondary)' }}>
                    Size en yakın güvenli kurumlar ve destek merkezleri
                </p>

                {/* Location Permission Modal */}
                {showLocationModal && (
                    <div className="modal-overlay">
                        <div className="modal">
                            <h2 className="modal-title">Konum İzni</h2>
                            <div className="modal-content">
                                <p>
                                    Konumunu <strong>sadece bu oturumda</strong> en yakın kurumları göstermek için kullanabiliriz.
                                </p>
                                <p className="mb-0" style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                                    🔒 Konumunuzu kaydetmeyiz. Oturum bitince silinir.
                                </p>
                            </div>
                            <div className="modal-actions">
                                <button onClick={handleManualSelect} className="btn btn-outline">
                                    İlçe seçerek devam et
                                </button>
                                <button onClick={handleGrantLocation} className="btn btn-primary">
                                    Konumu paylaş
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Filters */}
                <div className="mb-lg">
                    <h3 className="mb-md">Filtrele</h3>
                    <div className="flex gap-sm" style={{ flexWrap: 'wrap' }}>
                        {filters.map(filter => (
                            <button
                                key={filter.id}
                                onClick={() => setSelectedFilter(filter.id)}
                                className="chip"
                                style={{
                                    backgroundColor: selectedFilter === filter.id ? 'var(--color-primary)' : 'var(--color-surface)',
                                    color: selectedFilter === filter.id ? 'white' : 'var(--color-text-primary)',
                                    borderColor: selectedFilter === filter.id ? 'var(--color-primary)' : 'var(--color-border)'
                                }}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Support Centers List */}
                <div className="grid gap-md">
                    {mockCenters.map(center => (
                        <div key={center.id} className="card">
                            <div className="flex" style={{ justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--spacing-sm)' }}>
                                <h3 className="mb-0">{center.name}</h3>
                                {locationGranted && center.distance && (
                                    <span className="badge badge-safe">{center.distance}</span>
                                )}
                            </div>
                            <p style={{ color: 'var(--color-primary)', fontWeight: 600, marginBottom: 'var(--spacing-sm)' }}>
                                {center.type}
                            </p>
                            <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-sm)' }}>
                                📍 {center.address}
                            </p>
                            <a href={`tel:${center.phone}`} className="btn btn-primary" style={{ width: '100%', marginTop: 'var(--spacing-sm)' }}>
                                📞 {center.phone}
                            </a>
                        </div>
                    ))}
                </div>

                {/* Source Attribution */}
                <div className="card mt-lg" style={{ backgroundColor: '#f0f9ff', borderColor: '#bfdbfe' }}>
                    <p className="mb-0" style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                        ℹ️ <strong>Resmî Kaynaklar:</strong> Bu liste Palunabi rehberi ve resmî Estonya kurumlarından derlenmiştir.
                    </p>
                </div>
            </div>
        </div>
    );
}

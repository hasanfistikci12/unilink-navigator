'use client';

import EmergencyButton from '@/components/EmergencyButton';
import { Phone, AlertCircle, Heart, Info } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function EmergencyPage() {
    const { t } = useLanguage();

    return (
        <div className="page-wrapper">
            <div className="container">
                <div className="flex items-center justify-center gap-md mb-md">
                    <Phone size={32} color="var(--color-danger)" />
                    <h1 className="mb-0">{t.emergency.title}</h1>
                </div>
                <p className="text-center text-crisis mb-xl" style={{ color: 'var(--color-text-secondary)' }}>
                    {t.emergency.subtitle}
                </p>

                <div className="grid gap-lg">
                    <EmergencyButton
                        number="112"
                        title={t.emergency.title} // Used "Acil Yardım" broadly
                        description={t.emergency.desc112}
                        variant="danger"
                    />

                    <EmergencyButton
                        number="116 006"
                        title="Ohvriabi"
                        description={t.emergency.desc116006}
                        variant="primary"
                    />

                    <EmergencyButton
                        number="116 111"
                        title="Lasteabi"
                        description={t.emergency.desc116111}
                        variant="primary"
                    />

                    <EmergencyButton
                        number="1247"
                        title="Riigiinfo"
                        description={t.emergency.desc1247}
                        variant="safe"
                    />
                </div>

                <div className="card mt-xl">
                    <div className="flex items-center gap-md mb-md">
                        <Info size={24} color="var(--color-primary)" />
                        <h3 className="mb-0">{t.emergency.importantInfo}</h3>
                    </div>
                    <ul style={{ lineHeight: '1.8', paddingLeft: 'var(--spacing-lg)' }}>
                        <li className="mb-sm flex gap-sm">
                            <AlertCircle size={18} style={{ flexShrink: 0, marginTop: '2px' }} color="var(--color-danger)" />
                            <span><strong>112:</strong> {t.emergency.info112}</span>
                        </li>
                        <li className="mb-sm flex gap-sm">
                            <Heart size={18} style={{ flexShrink: 0, marginTop: '2px' }} color="var(--color-primary)" />
                            <span><strong>116 006:</strong> {t.emergency.info116006}</span>
                        </li>
                        <li className="mb-sm flex gap-sm">
                            <Heart size={18} style={{ flexShrink: 0, marginTop: '2px' }} color="var(--color-primary)" />
                            <span><strong>116 111:</strong> {t.emergency.info116111}</span>
                        </li>
                        <li className="flex gap-sm">
                            <Info size={18} style={{ flexShrink: 0, marginTop: '2px' }} color="var(--color-safe)" />
                            <span><strong>1247:</strong> {t.emergency.info1247}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

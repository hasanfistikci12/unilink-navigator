'use client';

import Card from '@/components/Card';
import { Phone, MessageCircle, MapPin, Scale, Shield, Lock, Languages } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Lock as LockIcon } from 'lucide-react';

export default function HomePage() {
    const { t } = useLanguage();

    return (
        <div className="page-wrapper">
            <div className="container">
                <h1 className="text-center mb-xl">{t.home.title}</h1>

                <div className="grid gap-lg">
                    <Card
                        icon={<Phone size={24} />}
                        title={t.home.cards.emergency.title}
                        description={t.home.cards.emergency.desc}
                        href="/emergency"
                    />

                    <Card
                        icon={<MessageCircle size={24} />}
                        title={t.home.cards.chat.title}
                        description={t.home.cards.chat.desc}
                        href="/chat"
                    />

                    <Card
                        icon={<MapPin size={24} />}
                        title={t.home.cards.nearby.title}
                        description={t.home.cards.nearby.desc}
                        href="/nearby"
                    />

                    <Card
                        icon={<Scale size={24} />}
                        title={t.home.cards.rights.title}
                        description={t.home.cards.rights.desc}
                        href="/rights"
                    />

                    <Card
                        icon={<Shield size={24} />}
                        title={t.home.cards.safetyPlan.title}
                        description={t.home.cards.safetyPlan.desc}
                        href="/safety-plan"
                    />

                    <Card
                        icon={<Lock size={24} />}
                        title={t.home.cards.digitalSecurity.title}
                        description={t.home.cards.digitalSecurity.desc}
                        href="/digital-security"
                    />

                    <Card
                        icon={<Languages size={24} />}
                        title={t.home.cards.translate.title}
                        description={t.home.cards.translate.desc}
                        href="/translate"
                    />
                </div>

                <div className="text-center mt-xl" style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                    <p>
                        <LockIcon size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                        <strong>{t.common.anonymous.split('.')[1]}</strong><br />
                        {t.common.anonymous.split('.').slice(2).join('.')}
                    </p>
                </div>
            </div>
        </div>
    );
}

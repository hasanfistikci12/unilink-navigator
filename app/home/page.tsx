import Card from '@/components/Card';
import { Phone, MessageCircle, MapPin, Scale, Shield, Lock, Languages } from 'lucide-react';

export default function HomePage() {
    return (
        <div className="page-wrapper">
            <div className="container">
                <h1 className="text-center mb-xl">Nasıl yardımcı olabiliriz?</h1>

                <div className="grid gap-lg">
                    <Card
                        icon={<Phone size={24} />}
                        title="Acil Yardıma Bağlan"
                        description="112, Ohvriabi ve diğer acil hatlar"
                        href="/emergency"
                    />

                    <Card
                        icon={<MessageCircle size={24} />}
                        title="Konuş"
                        description="Hızlı sorular ve yönlendirme"
                        href="/chat"
                    />

                    <Card
                        icon={<MapPin size={24} />}
                        title="Yakınımdaki Destek"
                        description="En yakın güvenli kurumlar ve sığınaklar"
                        href="/nearby"
                    />

                    <Card
                        icon={<Scale size={24} />}
                        title="Haklar & Süreçler"
                        description="Şiddet türleri, kanıt toplama, polis başvurusu"
                        href="/rights"
                    />

                    <Card
                        icon={<Shield size={24} />}
                        title="Güvenlik Planı"
                        description="Kriz anı kontrol listesi ve çıkış çantası"
                        href="/safety-plan"
                    />

                    <Card
                        icon={<Lock size={24} />}
                        title="Dijital Güvenlik"
                        description="Konum gizleme, takip yazılımı, güvenli iletişim"
                        href="/digital-security"
                    />

                    <Card
                        icon={<Languages size={24} />}
                        title="Çeviri"
                        description="Acil çok dilli iletişim desteği"
                        href="/translate"
                    />
                </div>

                <div className="text-center mt-xl" style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                    <p>
                        <Lock size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                        <strong>Anonim kullanılır.</strong> Hesap gerekmez.<br />
                        Tüm bilgiler oturum bitince otomatik silinir.
                    </p>
                </div>
            </div>
        </div>
    );
}

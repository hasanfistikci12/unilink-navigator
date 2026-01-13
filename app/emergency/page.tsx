import EmergencyButton from '@/components/EmergencyButton';
import { Phone, AlertCircle, Heart, Info } from 'lucide-react';

export default function EmergencyPage() {
    return (
        <div className="page-wrapper">
            <div className="container">
                <div className="flex items-center justify-center gap-md mb-md">
                    <Phone size={32} color="var(--color-danger)" />
                    <h1 className="mb-0">Acil Yardım</h1>
                </div>
                <p className="text-center text-crisis mb-xl" style={{ color: 'var(--color-text-secondary)' }}>
                    Acil durumda aşağıdaki numaraları arayabilirsiniz
                </p>

                <div className="grid gap-lg">
                    <EmergencyButton
                        number="112"
                        title="Acil Yardım"
                        description="Polis / Ambulans / İtfaiye - 7/24"
                        variant="danger"
                    />

                    <EmergencyButton
                        number="116 006"
                        title="Ohvriabi"
                        description="7/24 Mağdur Destek Hattı (Est/Rus/Eng)"
                        variant="primary"
                    />

                    <EmergencyButton
                        number="116 111"
                        title="Lasteabi"
                        description="7/24 Çocuk Yardım Hattı (Telefon + Online)"
                        variant="primary"
                    />

                    <EmergencyButton
                        number="1247"
                        title="Devlet Bilgi Hattı"
                        description="Bilgi ve rehberlik hizmeti"
                        variant="safe"
                    />
                </div>

                <div className="card mt-xl">
                    <div className="flex items-center gap-md mb-md">
                        <Info size={24} color="var(--color-primary)" />
                        <h3 className="mb-0">Önemli Bilgiler</h3>
                    </div>
                    <ul style={{ lineHeight: '1.8', paddingLeft: 'var(--spacing-lg)' }}>
                        <li className="mb-sm flex gap-sm">
                            <AlertCircle size={18} style={{ flexShrink: 0, marginTop: '2px' }} color="var(--color-danger)" />
                            <span><strong>112:</strong> Tüm acil durumlar için (polis, ambulans, itfaiye)</span>
                        </li>
                        <li className="mb-sm flex gap-sm">
                            <Heart size={18} style={{ flexShrink: 0, marginTop: '2px' }} color="var(--color-primary)" />
                            <span><strong>116 006:</strong> Suç mağdurları için özel destek hattı. Estonca, Rusça ve İngilizce hizmet verir.</span>
                        </li>
                        <li className="mb-sm flex gap-sm">
                            <Heart size={18} style={{ flexShrink: 0, marginTop: '2px' }} color="var(--color-primary)" />
                            <span><strong>116 111:</strong> Çocuklar ve gençler için yardım hattı. Telefon ve online destek.</span>
                        </li>
                        <li className="flex gap-sm">
                            <Info size={18} style={{ flexShrink: 0, marginTop: '2px' }} color="var(--color-safe)" />
                            <span><strong>1247:</strong> Devlet hizmetleri hakkında bilgi ve yönlendirme.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

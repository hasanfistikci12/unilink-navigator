import { AlertTriangle } from 'lucide-react';

export default function EmergencyHeader() {
    return (
        <div className="emergency-header">
            <AlertTriangle size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />
            <span>Acil tehlikede misin? </span>
            <a href="tel:112" aria-label="112 Acil Yardım Hattını Ara">
                <strong>112&apos;yi ara</strong>
            </a>
        </div>
    );
}

interface EmergencyButtonProps {
    number: string;
    title: string;
    description: string;
    variant?: 'danger' | 'primary' | 'safe';
}

export default function EmergencyButton({
    number,
    title,
    description,
    variant = 'danger'
}: EmergencyButtonProps) {
    const numberColor = variant === 'danger' ? '#ef4444' : '#FF6B35';

    return (
        <a
            href={`tel:${number}`}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.5rem 2.5rem',
                backgroundColor: 'white',
                borderRadius: '24px',
                textDecoration: 'none',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                width: '100%',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(0, 0, 0, 0.05)',
            }}
            className="emergency-card-alt"
            aria-label={`${title} - ${number} numarasını ara`}
        >
            <div style={{ textAlign: 'left' }}>
                <div style={{
                    fontSize: '1.2rem',
                    fontWeight: 900,
                    color: '#0f172a',
                    marginBottom: '4px',
                    textTransform: 'uppercase',
                    letterSpacing: '-0.01em'
                }}>
                    {title}
                </div>
                <div style={{
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: '#64748b'
                }}>
                    {description}
                </div>
            </div>
            <div style={{
                fontSize: '1.75rem',
                fontWeight: 900,
                color: numberColor,
                letterSpacing: '-0.03em'
            }}>
                {number}
            </div>
        </a>
    );
}

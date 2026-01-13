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
    return (
        <a
            href={`tel:${number}`}
            className={`btn btn-emergency btn-${variant}`}
            aria-label={`${title} - ${number} numarasını ara`}
        >
            <div className="btn-emergency-number">{number}</div>
            <div className="btn-emergency-desc">
                <strong>{title}</strong>
                <br />
                {description}
            </div>
        </a>
    );
}

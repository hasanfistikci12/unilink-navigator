import Link from 'next/link';

interface CardProps {
    title: string;
    description: string;
    href: string;
    icon?: React.ReactNode;
}

export default function Card({ title, description, href, icon }: CardProps) {
    return (
        <Link href={href} className="card card-clickable">
            <div className="card-title">
                {icon && <span style={{ marginRight: '0.75rem', display: 'inline-flex', verticalAlign: 'middle', color: 'var(--color-primary)' }}>{icon}</span>}
                {title}
            </div>
            <div className="card-description">{description}</div>
        </Link>
    );
}

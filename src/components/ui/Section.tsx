import React from 'react';
import styles from './Section.module.css';

interface SectionProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
    background?: 'default' | 'white' | 'accent';
}

export default function Section({
    children,
    id,
    className = '',
    background = 'default'
}: SectionProps) {
    return (
        <section id={id} className={`${styles.section} ${styles[background]} ${className}`}>
            <div className={styles.container}>
                {children}
            </div>
        </section>
    );
}

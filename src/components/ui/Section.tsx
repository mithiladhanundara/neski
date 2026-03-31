import React, { forwardRef } from 'react';
import styles from './Section.module.css';

interface SectionProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
    background?: 'default' | 'white' | 'accent';
}

const Section = forwardRef<HTMLElement, SectionProps>(({
    children,
    id,
    className = '',
    background = 'default'
}, ref) => {
    return (
        <section id={id} ref={ref} className={`${styles.section} ${styles[background]} ${className}`}>
            <div className={styles.container}>
                {children}
            </div>
        </section>
    );
});

Section.displayName = 'Section';

export default Section;

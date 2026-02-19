import React from 'react';
import Section from './ui/Section';
import Button from './ui/Button';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <Section className={styles.heroSection}>
            <div className={styles.heroCard}>
                <div className={styles.content}>
                    <h1 className={styles.headline}>
                        Keep Calm.<br />
                        <span className={styles.highlight}>We’ve Got the Keys.</span>
                    </h1>
                    <p className={styles.subheadline}>
                        Automating rental management for hostels and full properties.
                        Experience the future of property management with Neski.
                    </p>
                    <div className={styles.ctaGroup}>
                        <Button variant="primary" size="lg">Get Started</Button>
                        <Button variant="outline" size="lg">View Demo</Button>
                    </div>
                </div>

                <div className={styles.visuals}>
                    {/* Floating Widget 1: Occupancy */}
                    <div className={`${styles.widget} ${styles.widgetLeft}`}>
                        <span className={styles.widgetLabel}>Occupancy</span>
                        <span className={styles.widgetValue}>98%</span>
                        <div className={styles.miniChart}></div>
                    </div>

                    {/* Floating Widget 2: Revenue */}
                    <div className={`${styles.widget} ${styles.widgetRight}`}>
                        <span className={styles.widgetLabel}>Revenue</span>
                        <span className={styles.widgetValue}>+24%</span>
                        <span className={styles.widgetTag}>This Month</span>
                    </div>

                    {/* Central Mobile Mockup (Focus on mobile-first for modern reference vibe) */}
                    <div className={styles.mobile}>
                        <div className={styles.notch}></div>
                        <div className={styles.mobileScreen}>
                            <div className={styles.mobileHeader}></div>
                            <div className={styles.mobileCard}></div>
                            <div className={styles.mobileCard}></div>
                            <div className={styles.floatingBtn}></div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}

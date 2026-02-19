import React from 'react';
import Section from './ui/Section';
import styles from './Features.module.css';

export default function Features() {
    return (
        <Section id="features" className={styles.featuresSection}>
            <div className={styles.header}>
                <h2 className={styles.title}>Tailored for Every Property Type.</h2>
                <p className={styles.subtitle}>
                    Whether you run a bustling hostel or manage private apartments, Neski has a dedicated module for you.
                </p>
            </div>

            <div className={styles.grid}>
                {/* Module 1: Hostel Management */}
                <div className={styles.card}>
                    <div className={styles.iconWrapper}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5 21V7H19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9 10H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9 14H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <h3 className={styles.cardTitle}>Hostel Management</h3>
                    <p className={styles.cardDesc}>
                        Streamline operations for shared accommodations with tools designed for high-turnover environments.
                    </p>
                    <ul className={styles.featureList}>
                        <li>
                            <span className={styles.check}>✓</span> Smart Room Assignments
                        </li>
                        <li>
                            <span className={styles.check}>✓</span> Key Money Tracking
                        </li>
                        <li>
                            <span className={styles.check}>✓</span> Furniture Inventory Control
                        </li>
                    </ul>
                </div>

                {/* Module 2: Apartment Management */}
                <div className={`${styles.card} ${styles.highlight}`}>
                    <div className={styles.iconWrapper}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <h3 className={styles.cardTitle}>House & Apartment Management</h3>
                    <p className={styles.cardDesc}>
                        Simplify long-term rentals with automated workflows for landlords and property managers.
                    </p>
                    <ul className={styles.featureList}>
                        <li>
                            <span className={styles.check}>✓</span> Full-Property Rentals
                        </li>
                        <li>
                            <span className={styles.check}>✓</span> Automated Rent Notifications
                        </li>
                        <li>
                            <span className={styles.check}>✓</span> Maintenance Request Handling
                        </li>
                    </ul>
                </div>
            </div>
        </Section>
    );
}

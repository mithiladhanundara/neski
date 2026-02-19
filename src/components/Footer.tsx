import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.topSection}>
                    <div className={styles.brandCol}>
                        <Link href="/" className={styles.logo}>Neski</Link>
                        <p className={styles.tagline}>
                            Transforming rental management with simplicity and trust.
                        </p>
                        <div className={styles.oceanIq}>
                            <span>Powered by</span>
                            <span className={styles.oceanName}>OceanIQ Technologies</span>
                        </div>
                    </div>

                    <div className={styles.linksCol}>
                        <h4 className={styles.colTitle}>Product</h4>
                        <Link href="#features">Features</Link>
                        <Link href="#pricing">Pricing</Link>
                        <Link href="#analytics">Analytics</Link>
                        <Link href="#mobile-app">Mobile App</Link>
                    </div>

                    <div className={styles.linksCol}>
                        <h4 className={styles.colTitle}>Company</h4>
                        <Link href="/about">About Us</Link>
                        <Link href="/careers">Careers</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/contact">Contact</Link>
                    </div>

                    <div className={styles.linksCol}>
                        <h4 className={styles.colTitle}>Legal</h4>
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Service</Link>
                    </div>
                </div>

                <div className={styles.bottomSection}>
                    <div className={styles.copyright}>
                        &copy; {new Date().getFullYear()} OceanIQ Technologies. All rights reserved.
                    </div>

                </div>
            </div>
        </footer>
    );
}

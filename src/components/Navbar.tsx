"use client";

import { useState } from 'react';
import Link from 'next/link';
import Button from './ui/Button';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/">Neski</Link>
                </div>

                {/* Desktop Menu - Centered Links */}
                <div className={styles.navLinks}>
                    <Link href="#home" className={styles.link}>Home</Link>
                    <Link href="#features" className={styles.link}>Features</Link>
                    <Link href="#pricing" className={styles.link}>Pricing</Link>
                    <Link href="#contact" className={styles.link}>Contact</Link>
                </div>

                {/* CTA Button - Right Aligned */}
                <div className={styles.navActions}>
                    <Button variant="primary" size="md">Get 14 Days Free Trial</Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={styles.hamburger}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`${styles.bar} ${isOpen ? styles.open : ''}`}></span>
                    <span className={`${styles.bar} ${isOpen ? styles.open : ''}`}></span>
                    <span className={`${styles.bar} ${isOpen ? styles.open : ''}`}></span>
                </button>

                {/* Mobile Menu */}
                <div className={`${styles.mobileMenu} ${isOpen ? styles.show : ''}`}>
                    <Link href="#home" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="#features" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Features</Link>
                    <Link href="#pricing" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Pricing</Link>
                    <Link href="#contact" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Contact</Link>
                    <div className={styles.mobileBtn}>
                        <Button variant="primary" fullWidth onClick={() => setIsOpen(false)}>Get 14 Days Free Trial</Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

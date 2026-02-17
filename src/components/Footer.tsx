import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>

                <div className={styles.ctaCard}>
                    <div className={styles.ctaContent}>
                        <h3>Ready to make an impact?</h3>
                        <p>Join us in transforming waste into worth.</p>
                    </div>
                    <Link href="#contact" className={styles.ctaButton}>Get Started</Link>
                </div>

                <div className={styles.links}>
                    <Link href="#about" className={styles.link}>About</Link>
                    <Link href="#pillars" className={styles.link}>Services</Link>
                    <Link href="#research" className={styles.link}>Research</Link>
                    <Link href="#impact" className={styles.link}>Impact</Link>
                    <Link href="#" className={styles.link}>Privacy Policy</Link>
                </div>

                <div className={styles.copyright}>
                    &copy; {new Date().getFullYear()} Leo Club of University of Kelaniya. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

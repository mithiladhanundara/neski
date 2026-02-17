import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.logo}>
                <Image
                    src="https://ik.imagekit.io/qetpsnccs/Leo/Untitled%20design-7.png"
                    alt="Waste to Worth Logo"
                    width={180}
                    height={50}
                    className={styles.logoImage}
                    priority
                />
            </Link>
            <ul className={styles.navLinks}>
                <li>
                    <Link href="#about" className={styles.navLink}>About</Link>
                </li>
                <li>
                    <Link href="#pillars" className={styles.navLink}>Services</Link>
                </li>
                <li>
                    <Link href="#research" className={styles.navLink}>Research</Link>
                </li>
                <li>
                    <Link href="#impact" className={styles.navLink}>Impact</Link>
                </li>
                <li>
                    <Link href="#contact" className={styles.ctaButton}>Get Involved</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

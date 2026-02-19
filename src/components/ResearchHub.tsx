import Link from 'next/link';
import styles from './ResearchHub.module.css';

const ResearchHub = () => {
    return (
        <section id="research" className={styles.research}>
            <div className={styles.container}>
                <h2 className={styles.title}>Research Hub</h2>

                <div className={styles.section}>
                    <h3 className={styles.subtitle}>Sanitary Landfill Study Findings</h3>
                    <div className={styles.statsGrid}>
                        <div className={styles.statCard}>
                            <span className={styles.statValue}>60%</span>
                            <span className={styles.statLabel}>Organic Waste Composition</span>
                        </div>
                        <div className={styles.statCard}>
                            <span className={styles.statValue}>2.5k</span>
                            <span className={styles.statLabel}>Households Surveyed</span>
                        </div>
                        <div className={styles.statCard}>
                            <span className={styles.statValue}>15%</span>
                            <span className={styles.statLabel}>Reduction in Landfill Waste</span>
                        </div>
                    </div>
                </div>

                <div className={styles.downloads}>
                    <h3 className={styles.subtitle} style={{ borderBottom: 'none' }}>Publications & Reports</h3>
                    <ul className={styles.downloadList}>
                        <li className={styles.downloadItem}>
                            <div className={styles.fileInfo}>
                                <h4>Sanitary Landfill Management Strategies 2024</h4>
                                <p>PDF • 2.4 MB • Published Jan 2025</p>
                            </div>
                            <Link href="#" className={styles.downloadButton}>Download</Link>
                        </li>
                        <li className={styles.downloadItem}>
                            <div className={styles.fileInfo}>
                                <h4>Community Workshop Summary: Composting Basics</h4>
                                <p>PDF • 1.1 MB • Published Dec 2024</p>
                            </div>
                            <Link href="#" className={styles.downloadButton}>Download</Link>
                        </li>
                        <li className={styles.downloadItem}>
                            <div className={styles.fileInfo}>
                                <h4>E-Waste Disposal Guidelines</h4>
                                <p>PDF • 0.8 MB • Published Nov 2024</p>
                            </div>
                            <Link href="#" className={styles.downloadButton}>Download</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ResearchHub;

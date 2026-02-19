import React from 'react';
import Section from './ui/Section';
import styles from './Analytics.module.css';

export default function Analytics() {
    return (
        <Section id="analytics" className={styles.analyticsSection}>
            <div className={styles.container}>
                <div className={styles.textContent}>
                    <h2 className={styles.title}>Data-Driven Decisions made Simple.</h2>
                    <p className={styles.description}>
                        Track your financial health and occupancy rates in real-time.
                        Neski providing actionable insights to maximize your rental yield.
                    </p>

                    <div className={styles.statsRow}>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>98%</span>
                            <span className={styles.statLabel}>Occupancy Rate</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>+24%</span>
                            <span className={styles.statLabel}>Revenue Growth</span>
                        </div>
                    </div>
                </div>

                <div className={styles.dashboardPreview}>
                    {/* Main Chart Card */}
                    <div className={styles.chartCard}>
                        <div className={styles.cardHeader}>
                            <span>Occupancy Trends</span>
                            <span className={styles.badge}>This Month</span>
                        </div>
                        <div className={styles.chartArea}>
                            {/* CSS Bar Chart */}
                            <div className={styles.barGroup}>
                                <div className={styles.bar} style={{ height: '40%' }}></div>
                                <div className={styles.bar} style={{ height: '60%' }}></div>
                                <div className={styles.bar} style={{ height: '50%' }}></div>
                                <div className={styles.bar} style={{ height: '75%' }}></div>
                                <div className={styles.barActive} style={{ height: '90%' }}></div>
                                <div className={styles.bar} style={{ height: '65%' }}></div>
                                <div className={styles.bar} style={{ height: '55%' }}></div>
                            </div>
                        </div>
                    </div>

                    {/* Secondary Stats Card (Floating) */}
                    <div className={styles.pieCard}>
                        <div className={styles.cardHeader}>
                            <span>Revenue Source</span>
                        </div>
                        <div className={styles.donutChart}>
                            <div className={styles.donutSegment}></div>
                            <div className={styles.donutHole}>
                                <span>72%</span>
                            </div>
                        </div>
                        <div className={styles.legend}>
                            <div className={styles.legendItem}><span className={styles.dot1}></span>Rent</div>
                            <div className={styles.legendItem}><span className={styles.dot2}></span>Services</div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}

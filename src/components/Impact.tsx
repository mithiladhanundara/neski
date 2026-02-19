import Link from 'next/link';
import styles from './Impact.module.css';

const Impact = () => {
    const articles = [
        {
            title: "Successfully Concluded: 'Green Homes' Workshop",
            date: "February 10, 2025",
            excerpt: "Over 50 families participated in our weekend workshop dedicated to household composting and organic waste reduction.",
            image: "Workshop Image"
        },
        {
            title: "University E-Waste Drive Collects 500kg",
            date: "January 25, 2025",
            excerpt: "A massive success for our Phase 3 initiative! We collected over 500kg of electronic waste for responsible recycling.",
            image: "E-Waste Drive"
        },
        {
            title: "Research Partnership Announced",
            date: "January 15, 2025",
            excerpt: "The Leo Club is proud to announce a new research partnership with the Environmental Science Department.",
            image: "Partnership"
        }
    ];

    return (
        <section id="impact" className={styles.impact}>
            <div className={styles.container}>
                <h2 className={styles.title}>Impact & Updates</h2>
                <div className={styles.grid}>
                    {articles.map((article, index) => (
                        <article key={index} className={styles.article}>
                            <div className={styles.imagePlaceholder}>{article.image}</div>
                            <div className={styles.content}>
                                <span className={styles.date}>{article.date}</span>
                                <h3 className={styles.articleTitle}>{article.title}</h3>
                                <p className={styles.excerpt}>{article.excerpt}</p>
                                <Link href="#" className={styles.readMore}>Read More →</Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Impact;

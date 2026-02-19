import styles from './Pillars.module.css';

const Pillars = () => {
    const pillars = [
        {
            phase: "Phase 1",
            title: "Creative Reuse Innovation",
            description: "Focusing on upcycling waste materials into functional, artistic, or industrial products to extend their lifecycle.",
            icon: "♻️"
        },
        {
            phase: "Phase 2",
            title: "Household Composting",
            description: "Promoting organic waste management at the source through effective composting techniques and community awareness.",
            icon: "🌱"
        },
        {
            phase: "Phase 3",
            title: "E-Waste Management",
            description: "Ensuring proper disposal and recycling of electronic waste to prevent hazardous contamination and recover valuable materials.",
            icon: "🔋"
        }
    ];

    return (
        <section id="pillars" className={styles.pillars}>
            <div className={styles.container}>
                <h2 className={styles.title}>Our Core Pillars</h2>
                <div className={styles.grid}>
                    {pillars.map((pillar, index) => (
                        <div key={index} className={styles.card}>
                            <span className={styles.icon}>{pillar.icon}</span>
                            <span className={styles.phase}>{pillar.phase}</span>
                            <h3 className={styles.cardTitle}>{pillar.title}</h3>
                            <p className={styles.description}>{pillar.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pillars;

import styles from './About.module.css';

const About = () => {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                <h2 className={styles.title}>About the Initiative</h2>
                <p className={styles.content}>
                    <span className={styles.highlight}>Waste to Worth 2.0</span> is a student-led project by the Leo Club of University of Kelaniya, under the Poverty and Hunger Avenue.
                    Our mission is to address environmental challenges by promoting responsible waste management and transforming waste into valuable resources.
                </p>
                <p className={styles.content}>
                    We believe in long-term sustainability and fostering behavioral change within our communities. Through research, education, and direct action, we aim to build a cleaner, greener future for all.
                </p>
            </div>
        </section>
    );
};

export default About;

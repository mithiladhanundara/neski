'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = "Transforming Waste into Worth through Research & Action";

    // Typing effect logic
    useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < fullText.length) {
                setText(fullText.substring(0, i + 1));
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, 50); // Adjust typing speed here (lower is faster)

        return () => clearInterval(typingInterval);
    }, []);

    // Function to render text with highlights safely
    const renderTypedText = () => {
        // We know where the highlights are in the full text:
        // "Transforming " [0-12]
        // "Waste" [13-18]
        // " into " [18-24]
        // "Worth" [24-29]
        // " through Research & Action" [29...]

        // This is a simplified approach directly mapping the known string structure to the typing state
        const currentLength = text.length;

        return (
            <>
                {/* Part 1: Transforming */}
                {currentLength > 0 && "Transforming ".substring(0, Math.min(13, currentLength))}

                {/* Part 2: Waste (Highlighted) */}
                {currentLength > 13 && (
                    <span className={styles.highlight}>
                        {"Waste".substring(0, Math.min(5, currentLength - 13))}
                    </span>
                )}

                {/* Part 3: into */}
                {currentLength > 18 && " into ".substring(0, Math.min(6, currentLength - 18))}

                {/* Part 4: Worth (Highlighted) */}
                {currentLength > 24 && (
                    <span className={styles.highlight}>
                        {"Worth".substring(0, Math.min(5, currentLength - 24))}
                    </span>
                )}

                {/* Part 5: Rest */}
                {currentLength > 29 && " through Research & Action".substring(0, currentLength - 29)}

                <span className={styles.cursor}>|</span>
            </>
        );
    };

    return (
        <section className={styles.hero}>
            <h1 className={styles.headline}>
                {renderTypedText()}
            </h1>
            <p className={styles.subheadline}>
                Join the movement towards a sustainable future with the Leo Club of University of Kelaniya.
                Pioneering creative reuse, composting awareness, and responsible e-waste management.
            </p>
            <Link href="#research" className={styles.ctaButton}>
                Explore Research
            </Link>
        </section>
    );
};

export default Hero;

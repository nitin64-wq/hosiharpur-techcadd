import React from 'react';
import styles from './WhyChooseUs.module.css';
import MagicBento from './MagicBento';

const WhyChooseUs = () => {
    return (
        <section className={styles.section} id="why-choose-us">
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.badge}>The TechCadd Advantage</div>
                    <h2 className={styles.title}>Why Choose <span className={styles.highlight}>Us</span></h2>
                    <p className={styles.subtitle}>
                        We provide an elite environment designed specifically to turn absolute beginners into in-demand tech professionals.
                    </p>
                </div>

                <MagicBento
                    textAutoHide={true}
                    enableStars={true}
                    enableSpotlight={true}
                    enableBorderGlow={true}
                    enableTilt={false}
                    enableMagnetism={false}
                    clickEffect={true}
                    spotlightRadius={400}
                    particleCount={12}
                    glowColor="132, 0, 255"
                    disableAnimations={false}
                />
            </div>
        </section>
    );
};

export default WhyChooseUs;

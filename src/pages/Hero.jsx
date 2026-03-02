import React from 'react';
import styles from './Hero.module.css';
import Orb from './Orb';

const Hero = () => {
    return (
        <section className={styles.hero}>
            {/* Left Column Text */}
            <div className={styles.heroText}>
                <div className={styles.heroBadge}>Hoshiarpur's Tech Hub</div>
                <h1 className={styles.title}>
                    Shape Your Future <br />
                    with <span className={styles.highlight}>TechCadd</span>
                </h1>
                <p className={styles.subtitle}>
                    The premium institute for advanced technology, CAD training, and professional development.
                    Step into a beautifully crafted learning environment tailored for extreme growth.
                </p>
                <div className={styles.heroActions}>
                    <a href="#courses" className={styles.btnPrimary}>Explore Courses</a>
                    <a href="#contact" className={styles.btnSecondary}>
                        Contact Us
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '0.5rem' }}>
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>

            {/* Right Column Orb */}
            <div className={styles.orbContainer}>
                <div className={styles.orbWrapper}>
                    <Orb hoverIntensity={3} rotateOnHover hue={0} forceHoverState={false} backgroundColor="#0a0a0f" />
                </div>
            </div>
        </section>
    );
};

export default Hero;

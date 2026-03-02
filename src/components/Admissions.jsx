import React from 'react';
import styles from './Admissions.module.css';

const Admissions = () => {
    return (
        <section id="admissions" className={styles.admissionsSection}>
            <div className={styles.container}>
                <div className={styles.sectionBadge}>Enrollment Process</div>
                <h2 className={styles.title}>Join <span className={styles.highlight}>TechCadd</span> Today</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                    We've made starting your career in technology as frictionless as possible. Read our simple 3-step process below.
                </p>

                <div className={styles.steps}>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>1</div>
                        <h4>Apply Online</h4>
                        <p>Fill out our simple inquiry form with your details and the course you're interested in.</p>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>2</div>
                        <h4>Consultation</h4>
                        <p>Our expert counselors will call you to discuss your goals and finalize your batch timing.</p>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>3</div>
                        <h4>Start Learning</h4>
                        <p>Complete your registration and immediately gain access to our LMS and project files.</p>
                    </div>
                </div>

                <a href="#contact" className={styles.applyBtn}>Start Registration</a>
            </div>
        </section>
    );
};

export default Admissions;

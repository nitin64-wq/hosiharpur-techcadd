import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <section id="contact" className={styles.contactSection}>
            <div className={styles.contactContainer}>
                <div className={styles.contactInfo}>
                    <div className={styles.sectionBadge}>Get in Touch</div>
                    <h2>Let's Start Your <span className={styles.highlight}>Journey</span></h2>
                    <p>Have questions about our courses or admissions? Drop us a message, and our team will get back to you shortly.</p>

                    <div className={styles.infoItems}>
                        <div className={styles.infoItem}>
                            <div className={styles.infoIcon}>📍</div>
                            <div>
                                <h4>Location</h4>
                                <p>TechCadd Campus, Main Road, Hoshiarpur, Punjab</p>
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <div className={styles.infoIcon}>📞</div>
                            <div>
                                <h4>Phone</h4>
                                <p>+91 98765 43210</p>
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <div className={styles.infoIcon}>✉️</div>
                            <div>
                                <h4>Email</h4>
                                <p>info@techcaddhoshiarpur.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.contactFormContainer}>
                    <form className={styles.contactForm} onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" placeholder="John Doe" />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" placeholder="john@example.com" />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message">Your Message</label>
                            <textarea id="message" rows="5" placeholder="How can we help you?"></textarea>
                        </div>
                        <button type="submit" className={`${styles.btnPrimary} ${styles.wFull}`}>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;

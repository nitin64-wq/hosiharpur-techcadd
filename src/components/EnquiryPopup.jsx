import React, { useState, useEffect } from 'react';
import styles from './EnquiryPopup.module.css';

const courseOptions = [
    'Basic Computer Course',
    'Web Designing',
    'Graphic Designing',
    'Full Stack Development',
    'Digital Marketing',
    'MS Excel',
    'Advance Excel',
    'QuickBooks',
    'Tally Prime',
    'Photoshop',
    'CorelDRAW',
    'Video Editing',
    'C & C++ Language',
    'PHP Development',
    'Python Programming',
    'Web Development',
    'Google Ads',
    'AutoCAD',
    '3Ds Max',
    'Revit',
    'Industrial Training',
];

const EnquiryPopup = ({ isOpen, onClose }) => {
    const [submitted, setSubmitted] = useState(false);

    // Close on Escape key
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.addEventListener('keydown', handleKey);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleKey);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    // Reset submitted state when popup opens
    useEffect(() => {
        if (isOpen) setSubmitted(false);
    }, [isOpen]);

    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Auto close after 3 seconds
        setTimeout(() => {
            onClose();
        }, 3000);
    };

    return (
        <div className={styles.overlay} onClick={handleOverlayClick}>
            <div className={styles.modal}>
                {/* Close Button */}
                <button className={styles.closeBtn} onClick={onClose}>✕</button>

                {submitted ? (
                    /* ─── Success State ─── */
                    <div className={styles.successState}>
                        <span className={styles.successIcon}>🎉</span>
                        <h2 className={styles.successTitle}>Thank You!</h2>
                        <p className={styles.successText}>
                            Your enquiry has been submitted successfully. Our team will contact you shortly.
                        </p>
                        <button className={styles.successCloseBtn} onClick={onClose}>
                            Close
                        </button>
                    </div>
                ) : (
                    /* ─── Form State ─── */
                    <div className={styles.modalContent}>
                        {/* Header */}
                        <div className={styles.modalHeader}>
                            <span className={styles.modalEmoji}>👋</span>
                            <h2 className={styles.modalTitle}>
                                Start Your <span className={styles.modalTitleHighlight}>Journey</span>
                            </h2>
                            <p className={styles.modalSubtitle}>
                                Fill in your details and our counsellor will get in touch with you within 24 hours.
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit}>
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        className={styles.formInput}
                                        required
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="+91 98765 43210"
                                        className={styles.formInput}
                                        required
                                    />
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>Email (Optional)</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="your@email.com"
                                    className={styles.formInput}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>Select Course</label>
                                <select
                                    name="course"
                                    className={`${styles.formInput} ${styles.selectInput}`}
                                    defaultValue=""
                                >
                                    <option value="" disabled>Choose a course...</option>
                                    {courseOptions.map((c) => (
                                        <option key={c} value={c}>{c}</option>
                                    ))}
                                    <option value="Other">Other / General Inquiry</option>
                                </select>
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>Message (Optional)</label>
                                <textarea
                                    name="message"
                                    rows="3"
                                    placeholder="Tell us about your learning goals..."
                                    className={`${styles.formInput} ${styles.textareaInput}`}
                                />
                            </div>

                            <button type="submit" className={styles.submitBtn}>
                                Submit Enquiry →
                            </button>
                        </form>

                        <p className={styles.footerNote}>
                            🔒 Your information is <span>100% secure</span> and will never be shared.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EnquiryPopup;

import React, { useState, useEffect } from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className={styles.footer}>
            {/* ─── Main Footer Grid ─── */}
            <div className={styles.footerMain}>
                <div className={styles.container}>
                    <div className={styles.grid}>

                        {/* Column 1 — Brand & Contact */}
                        <div className={styles.brandCol}>
                            <a href="/" className={styles.footerLogo}>techcadd.</a>
                            <p className={styles.brandDesc}>
                                Building future-ready digital experiences with creativity, precision, and innovation.
                            </p>
                            <p className={styles.brandDesc}>
                                Best Training Institute in Hoshiarpur & Phagwara, Punjab. With 11 years in IT, TechCADD offers practical training, live projects, workshops, and certifications.
                            </p>

                            <div className={styles.contactBlock}>
                                <div className={styles.contactItem}>
                                    <span className={styles.contactLabel}>Add:</span>
                                    <span>Chadha Business Part GT Road Phagwara near Bus Stand 2nd Floor</span>
                                </div>
                                <div className={styles.contactItem}>
                                    <span className={styles.contactLabel}>Call:</span>
                                    <a href="tel:+919781297802">+91-97812-97802</a>
                                </div>
                                <div className={styles.contactItem}>
                                    <span className={styles.contactLabel}>Email:</span>
                                    <a href="mailto:info@techcadd.com">info@techcadd.com</a>
                                </div>
                            </div>

                            {/* Social Icons */}
                            <div className={styles.socialIcons}>
                                <a href="https://wa.me/919781297802" target="_blank" rel="noopener noreferrer" className={`${styles.socialBtn} ${styles.whatsapp}`} aria-label="WhatsApp">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                </a>
                                <a href="tel:+919781297802" className={`${styles.socialBtn} ${styles.phone}`} aria-label="Phone">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
                                </a>
                                <a href="mailto:info@techcadd.com" className={`${styles.socialBtn} ${styles.email}`} aria-label="Email">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                </a>
                                <a href="https://maps.google.com/?q=TechCADD+Phagwara" target="_blank" rel="noopener noreferrer" className={`${styles.socialBtn} ${styles.location}`} aria-label="Location">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                </a>
                                <a href="https://g.page/techcadd" target="_blank" rel="noopener noreferrer" className={`${styles.socialBtn} ${styles.google}`} aria-label="Google Business">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
                                </a>
                            </div>
                        </div>

                        {/* Column 2 — Courses */}
                        <div className={styles.linksCol}>
                            <h4 className={styles.colTitle}>COURSES</h4>
                            <ul className={styles.linkList}>
                                <li><a href="#course-web-designing">Web Designing Course</a></li>
                                <li><a href="#course-full-stack">Full Stack Development</a></li>
                                <li><a href="#course-graphic-designing">Graphic Designing</a></li>
                                <li><a href="#course-digital-marketing">Digital Marketing</a></li>
                                <li><a href="#course-python-programming">Python Programming</a></li>
                                <li><a href="#course-autocad">AutoCAD Course</a></li>
                                <li><a href="#course-tally-prime">Tally Prime</a></li>
                            </ul>
                        </div>

                        {/* Column 3 — Branches */}
                        <div className={styles.linksCol}>
                            <h4 className={styles.colTitle}>Branches</h4>
                            <ul className={styles.linkList}>
                                <li><a href="#contact-page">HOSHIARPUR</a></li>
                                <li><a href="#contact-page">PHAGWARA</a></li>
                                <li><a href="#contact-page">JALANDHAR-1</a></li>
                                <li><a href="#contact-page">JALANDHAR-2</a></li>
                                <li><a href="#contact-page">CHANDIGARH</a></li>
                                <li><a href="#contact-page">MAQSUDAN</a></li>
                                <li><a href="#contact-page">LUDHIANA</a></li>
                            </ul>
                        </div>

                        {/* Column 4 — Map & Legal */}
                        <div className={styles.mapCol}>
                            <h4 className={styles.colTitle}>Our Location</h4>
                            <div className={styles.mapEmbed}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.0126!2d75.7704!3d31.3494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5a2d46e70001%3A0xf7bed80e13cccc31!2sTechCADD%20Phagwara!5e0!3m2!1sen!2sin!4v1701275000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="160"
                                    style={{ border: 0, borderRadius: '12px' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="TechCADD Location"
                                ></iframe>
                            </div>
                            <div className={styles.legalLinks}>
                                <a href="#terms">Terms & Conditions</a>
                                <a href="#privacy">Privacy Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ─── Bottom Bar ─── */}
            <div className={styles.bottomBar}>
                <div className={styles.container}>
                    <p>&copy; 2026 TechCADD Computer Education. All Rights Reserved.</p>
                </div>
            </div>

            {/* ─── Scroll to Top ─── */}
            <button
                className={`${styles.scrollTop} ${showScrollTop ? styles.scrollTopVisible : ''}`}
                onClick={scrollToTop}
                aria-label="Scroll to top"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="18 15 12 9 6 15" />
                </svg>
            </button>
        </footer>
    );
};

export default Footer;

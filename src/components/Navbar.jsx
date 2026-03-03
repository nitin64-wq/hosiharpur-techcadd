import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <a href="/" className={styles.logo}>
                techcadd.
            </a>
            <div className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
                <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
                <a href="#about" onClick={() => setIsOpen(false)}>About</a>

                {/* COURSES MEGA DROPDOWN */}
                <div className={`${styles.dropdown} ${styles.megaDropdown}`}>
                    <button className={styles.dropbtn} aria-haspopup="true">Courses</button>
                    <div className={styles.dropdownContent}>
                        <div className={styles.megaContainer}>
                            <div className={`${styles.megaCol} ${styles.primaryCol}`}>
                                <span className={styles.megaHeader}>Explore Courses</span>
                                <a href="#course-basic-computer" onClick={() => setIsOpen(false)} className={styles.megaTitle}>Basic Computer</a>
                                <a href="#course-web-designing" onClick={() => setIsOpen(false)} className={styles.megaTitle}>Web Designing</a>
                                <a href="#course-graphic-designing" onClick={() => setIsOpen(false)} className={styles.megaTitle}>Graphic Designing</a>
                                <a href="#course-full-stack" onClick={() => setIsOpen(false)} className={styles.megaTitle}>Full Stack Dev</a>
                                <a href="#course-digital-marketing" onClick={() => setIsOpen(false)} className={styles.megaTitle}>Digital Marketing</a>

                                <div className={styles.megaDivider}></div>

                                <a href="#compare" onClick={() => setIsOpen(false)} className={styles.megaLink}>Compare Courses</a>
                                <a href="#switch" onClick={() => setIsOpen(false)} className={styles.megaLink}>Student Success Stories</a>
                            </div>

                            <div className={styles.megaCol}>
                                <span className={styles.megaHeader}>Software Training</span>
                                <a href="#course-ms-excel" onClick={() => setIsOpen(false)} className={styles.megaLink}>Ms Excel</a>
                                <a href="#course-advance-excel" onClick={() => setIsOpen(false)} className={styles.megaLink}>Advance Excel</a>
                                <a href="#course-quickbooks" onClick={() => setIsOpen(false)} className={styles.megaLink}>QuickBooks</a>
                                <a href="#course-tally-prime" onClick={() => setIsOpen(false)} className={styles.megaLink}>Tally Prime</a>
                                <a href="#course-photoshop" onClick={() => setIsOpen(false)} className={styles.megaLink}>Photoshop</a>
                                <a href="#course-corel-draw" onClick={() => setIsOpen(false)} className={styles.megaLink}>Corel Draw</a>
                                <a href="#course-video-editing" onClick={() => setIsOpen(false)} className={styles.megaLink}>Video Editing</a>
                            </div>

                            <div className={styles.megaCol}>
                                <span className={styles.megaHeader}>Programming & Tech</span>
                                <a href="#course-c-language" onClick={() => setIsOpen(false)} className={styles.megaLink}>C & C++ Language</a>
                                <a href="#course-php" onClick={() => setIsOpen(false)} className={styles.megaLink}>PHP Development</a>
                                <a href="#course-python-programming" onClick={() => setIsOpen(false)} className={styles.megaLink}>Python</a>
                                <a href="#course-web-development" onClick={() => setIsOpen(false)} className={styles.megaLink}>Web Development</a>
                                <a href="#course-google-ads" onClick={() => setIsOpen(false)} className={styles.megaLink}>Google Ads Course</a>
                            </div>

                            <div className={styles.megaCol}>
                                <span className={styles.megaHeader}>Specialized</span>
                                <a href="#course-autocad" onClick={() => setIsOpen(false)} className={styles.megaLink}>Autocad Course</a>
                                <a href="#course-3dsmax" onClick={() => setIsOpen(false)} className={styles.megaLink}>3Ds Max Course</a>
                                <a href="#course-revit" onClick={() => setIsOpen(false)} className={styles.megaLink}>Revit Course</a>
                                <a href="#course-industrial-training" onClick={() => setIsOpen(false)} className={styles.megaLink}>Industrial Training</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* AFTER 12TH MEGA DROPDOWN */}
                <div className={`${styles.dropdown} ${styles.megaDropdown}`}>
                    <button className={styles.dropbtn}>After 12th Courses</button>
                    <div className={styles.dropdownContent}>
                        <div className={styles.megaContainer}>
                            <div className={`${styles.megaCol} ${styles.primaryCol}`}>
                                <span className={styles.megaHeader}>Explore Careers</span>
                                <a href="#course-advanced-digital-marketing" onClick={() => setIsOpen(false)} className={styles.megaTitle}>Digital Marketing</a>
                                <a href="#course-python-programming" onClick={() => setIsOpen(false)} className={styles.megaTitle}>Python Programming</a>
                                <a href="#course-ml-ai" onClick={() => setIsOpen(false)} className={styles.megaTitle}>Machine Learning & AI</a>
                                <a href="#basic-cybersecurity" onClick={() => setIsOpen(false)} className={styles.megaTitle}>Cybersecurity</a>
                                <a href="#course-generative-ai" onClick={() => setIsOpen(false)} className={styles.megaTitle}>Generative AI</a>
                            </div>

                            <div className={styles.megaCol}>
                                <span className={styles.megaHeader}>1 Year Diplomas</span>
                                <a href="#course-cloud-devops" onClick={() => setIsOpen(false)} className={styles.megaLink}>Cloud Computing & DevOps</a>
                                <a href="#course-ai-datascience" onClick={() => setIsOpen(false)} className={styles.megaLink}>AI & Data Science</a>
                                <a href="#course-ml-dl" onClick={() => setIsOpen(false)} className={styles.megaLink}>ML & Deep Learning</a>
                                <a href="#course-cybersecurity-hacking" onClick={() => setIsOpen(false)} className={styles.megaLink}>Ethical Hacking</a>
                            </div>

                            <div className={styles.megaCol}>
                                <span className={styles.megaHeader}>Civil / Architecture</span>
                                <a href="#after12-autocad" onClick={() => setIsOpen(false)} className={styles.megaLink}>AutoCAD <span className={`${styles.navBadge} ${styles.pink}`}>New</span></a>
                                <a href="#after12-solidwork" onClick={() => setIsOpen(false)} className={styles.megaLink}>Solid Works</a>
                                <a href="#after12-3d" onClick={() => setIsOpen(false)} className={styles.megaLink}>3Ds Max</a>
                                <a href="#after12-revit" onClick={() => setIsOpen(false)} className={styles.megaLink}>Revit</a>
                            </div>
                        </div>
                    </div>
                </div>

                <a href="#contact-page" onClick={() => setIsOpen(false)}>Contact</a>
            </div>
            <div className={styles.rightSection}>
                <a href="#demo" className={styles.bookDemoBtn}>Book Demo &rarr;</a>
                <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

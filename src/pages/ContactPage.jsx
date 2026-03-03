import React, { useState } from 'react';
import styles from './ContactPage.module.css';

/* ─── Campus Data ─── */
const campusData = {
    Mohali: {
        counsellor: 'Gunjan',
        campus: 'Mohali',
        address: 'Plot number F-547, 3rd floor, Industrial Area, Sector 75, 8A, Mohali, Punjab 160055',
        phone: '+91 98881-22880',
        phoneLnk: 'tel:+919888122880',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.751448551189!2d76.68957820000001!3d30.697268599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef4ac0a2ebbd%3A0x31b60594997d5d5b!2stechcadd%20-%206%20Months%20%26%20Weeks%20industrial%2Finternship%20Training%20Company%20in%20Chandigarh%20%26%20Mohali!5e0!3m2!1sen!2sin!4v1770289416398!5m2!1sen!2sin',
    },
    Jalandhar: {
        counsellor: 'TechCadd Team',
        campus: 'Jalandhar',
        address: 'TechCadd Campus, GT Road, Jalandhar, Punjab',
        phone: '+91 97812-97802',
        phoneLnk: 'tel:+919781297802',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.068274367763!2d75.76951389999999!3d31.2188378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391af55f3be8171f%3A0xad9cb9345374795f!2sPhagwara%20TechCADD!5e0!3m2!1sen!2sin!4v1770290173196!5m2!1sen!2sin',
    },
    Maqsudan: {
        counsellor: 'TechCadd Team',
        campus: 'Maqsudan',
        address: 'TechCadd, Maqsudan, Jalandhar, Punjab',
        phone: '+91 97812-97802',
        phoneLnk: 'tel:+919781297802',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.068274367763!2d75.76951389999999!3d31.2188378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391af55f3be8171f%3A0xad9cb9345374795f!2sPhagwara%20TechCADD!5e0!3m2!1sen!2sin!4v1770290173196!5m2!1sen!2sin',
    },
    Hoshiarpur: {
        counsellor: 'TechCadd Team',
        campus: 'Hoshiarpur',
        address: 'TechCadd Campus, Main Road, Hoshiarpur, Punjab',
        phone: '+91 97812-97802',
        phoneLnk: 'tel:+919781297802',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.068274367763!2d75.76951389999999!3d31.2188378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391af55f3be8171f%3A0xad9cb9345374795f!2sPhagwara%20TechCADD!5e0!3m2!1sen!2sin!4v1770290173196!5m2!1sen!2sin',
    },
    Phagwara: {
        counsellor: 'TechCadd Team',
        campus: 'Phagwara',
        address: '1st Floor, Chadha Business Park, Bus Stand, Grand Trunk Rd, near ICICI Bank, opp. Lovely Bajaj Autos, Sondhi Chowk, Phagwara, Punjab 144401',
        phone: '+91 97812-97802',
        phoneLnk: 'tel:+919781297802',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.068274367763!2d75.76951389999999!3d31.2188378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391af55f3be8171f%3A0xad9cb9345374795f!2sPhagwara%20TechCADD%20Basic%20Computer%20Course%20%7C%20Digital%20Marketing%20Course%20%7C%20Computer%20Training%20center%20in%20Phagwara!5e0!3m2!1sen!2sin!4v1770290173196!5m2!1sen!2sin',
    },
    Ludhiana: {
        counsellor: 'TechCadd Team',
        campus: 'Ludhiana',
        address: 'TechCadd Campus, Ludhiana, Punjab',
        phone: '+91 97812-97802',
        phoneLnk: 'tel:+919781297802',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.068274367763!2d75.76951389999999!3d31.2188378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391af55f3be8171f%3A0xad9cb9345374795f!2sPhagwara%20TechCADD!5e0!3m2!1sen!2sin!4v1770290173196!5m2!1sen!2sin',
    },
};

/* ─── Course Options for the Form ─── */
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

const ContactPage = ({ onClose }) => {
    const [selectedCampus, setSelectedCampus] = useState('Hoshiarpur');
    const campus = campusData[selectedCampus];

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you! We will contact you shortly.');
        e.target.reset();
    };

    return (
        <div>
            {/* ═══ HERO HEADER ═══ */}
            <section className={styles.contactHeader}>
                <h1>
                    Get In <span className={styles.contactHeaderGrad}>Touch</span>
                </h1>
                <p className={styles.contactHeaderSub}>
                    We'd love to hear from you. Reach out to us for any queries about courses, admissions, or campus visits.
                </p>
            </section>

            {/* ═══ LOCATION FINDER ═══ */}
            <section className={styles.locationSection}>
                <div className={styles.container}>
                    <div className={styles.locationBox}>
                        {/* Header */}
                        <div className={styles.locHeaderFlex}>
                            <div className={styles.locTitleArea}>
                                <h2>
                                    <span className={styles.locTitleIcon}>📍</span> Find Your Nearest Campus
                                </h2>
                                <p>Select your city from the dropdown to view campus details, counsellor information, and contact numbers.</p>
                            </div>
                            <div className={styles.locSelectArea}>
                                <label>
                                    📌 Select Location
                                </label>
                                <select
                                    value={selectedCampus}
                                    onChange={(e) => setSelectedCampus(e.target.value)}
                                >
                                    {Object.keys(campusData).map((city) => (
                                        <option key={city} value={city}>{city}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className={styles.locSeparator} />

                        {/* Content */}
                        <div className={styles.locContentBody}>
                            {/* Counsellor Profile */}
                            <div className={styles.counsellorProfile}>
                                <div className={styles.avatarRing}>
                                    <img src="https://ui-avatars.com/api/?name=TC&background=6366f1&color=fff&bold=true&size=128" alt="Counsellor" />
                                    <div className={styles.brandTag}>techcadd</div>
                                </div>
                                <div className={styles.profileText}>
                                    <h3>{campus.counsellor}</h3>
                                    <span className={styles.roleTag}>Counsellor</span>
                                    <span className={styles.campusTag}>Campus: {campus.campus}</span>
                                </div>
                            </div>

                            {/* Address */}
                            <div className={styles.locAddressRow}>
                                <p>
                                    <span className={styles.addressIcon}>📍</span>
                                    {campus.address}
                                </p>
                            </div>

                            {/* Phone */}
                            <a href={campus.phoneLnk} className={styles.phonePill}>
                                <span className={styles.phoneIcon}>📞</span> {campus.phone}
                            </a>

                            {/* Map */}
                            <div className={styles.locMapEmbed}>
                                <iframe
                                    key={selectedCampus}
                                    src={campus.mapSrc}
                                    allowFullScreen=""
                                    loading="lazy"
                                    title={`${campus.campus} Campus Map`}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ CONTACT SPLIT (Info + Form) ═══ */}
            <section className={styles.contactSplitSection}>
                <div className={styles.contactSplitGrid}>
                    {/* Left — Info Card */}
                    <div className={styles.infoCard}>
                        <span className={styles.infoSubtitle}>Let's Talk!</span>
                        <h2>Contact Information</h2>
                        <p className={styles.infoDesc}>
                            Thank you for your interest in TechCADD Computer Education. We're excited to hear from you and discuss your learning goals!
                        </p>

                        <div className={styles.infoItemsList}>
                            <div className={styles.cInfoItem}>
                                <div className={styles.cIcon}>📞</div>
                                <div>
                                    <span className={styles.cLabel}>Call Us For Query</span>
                                    <a href="tel:+919781297802" className={styles.cValue}>(+91) 97812-97802</a>
                                </div>
                            </div>
                            <div className={styles.cInfoItem}>
                                <div className={styles.cIcon}>✉️</div>
                                <div>
                                    <span className={styles.cLabel}>Email Us Anytime</span>
                                    <a href="mailto:info@techcadd.com" className={styles.cValue}>info@techcadd.com</a>
                                </div>
                            </div>
                            <div className={styles.cInfoItem}>
                                <div className={styles.cIcon}>📍</div>
                                <div>
                                    <span className={styles.cLabel}>Visit Our Office</span>
                                    <p className={styles.cValue}>1st Floor, Chadha Business Park, Bus Stand, Grand Trunk Rd, near ICICI Bank, opp. Lovely Bajaj Autos, Sondhi Chowk, Phagwara, Punjab 144401</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right — Form Card */}
                    <div className={styles.formCard}>
                        <div className={styles.formHeader}>
                            <span className={styles.waveEmoji}>👋</span>
                            <h2>Start Your Career Journey with TechCADD</h2>
                        </div>
                        <p className={styles.formDesc}>
                            Take the first step towards a successful IT career. Fill out the form below and our team will guide you on the best path for your learning and growth.
                        </p>

                        <form onSubmit={handleSubmit}>
                            <div className={styles.formRowModern}>
                                <input type="text" name="name" placeholder="Your Name" className={styles.inputModern} required />
                                <input type="tel" name="phone" placeholder="Phone Number" className={styles.inputModern} required />
                            </div>

                            <div className={styles.formGroupModern}>
                                <select name="course" className={`${styles.inputModern} ${styles.selectModern}`} defaultValue="">
                                    <option value="" disabled>Select Course</option>
                                    {courseOptions.map((c) => (
                                        <option key={c} value={c}>{c}</option>
                                    ))}
                                    <option value="Other">Other / General Inquiry</option>
                                </select>
                            </div>

                            <div className={styles.formGroupModern}>
                                <textarea
                                    name="message"
                                    rows="4"
                                    placeholder="Message (optional)"
                                    className={`${styles.inputModern} ${styles.textareaModern}`}
                                />
                            </div>

                            <button type="submit" className={styles.btnSendMessage}>Send Message</button>
                        </form>
                    </div>
                </div>
            </section>

            {/* ═══ HEAD OFFICE MAP ═══ */}
            <section className={styles.mapSection}>
                <div className={styles.container}>
                    <div className={styles.mapHeader}>
                        <h2>Head Office Location</h2>
                    </div>
                    <div className={styles.mapWrapper}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.068274367763!2d75.76951389999999!3d31.2188378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391af55f3be8171f%3A0xad9cb9345374795f!2sPhagwara%20TechCADD%20Basic%20Computer%20Course%20%7C%20Digital%20Marketing%20Course%20%7C%20Computer%20Training%20center%20in%20Phagwara!5e0!3m2!1sen!2sin!4v1770290173196!5m2!1sen!2sin"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Head Office Map"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;

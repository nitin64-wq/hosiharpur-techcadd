import React, { useEffect, useState, useMemo } from 'react';
import styles from './CourseDetail.module.css';
import { getCourseData, getRelatedCourses } from '../data/coursesData';

/* ─── Tab definitions ─── */
const TABS = [
    { id: 'overview', label: 'Overview', icon: '📄' },
    { id: 'curriculum', label: 'Curriculum', icon: '📑' },
    { id: 'whyTechcadd', label: 'Why TechCADD', icon: '✅' },
    { id: 'careers', label: 'Careers', icon: '💼' },
    { id: 'faqs', label: 'FAQs', icon: '❓' },
];

/* ─── Accordion Component ─── */
const Accordion = ({ items, numbered = false }) => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className={styles.accordion}>
            {items.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                    <div key={i} className={styles.accordionItem}>
                        <button
                            className={styles.accordionHeader}
                            onClick={() => setOpenIndex(isOpen ? -1 : i)}
                        >
                            <span className={styles.moduleTitle}>
                                {numbered && (
                                    <span className={styles.moduleNum}>
                                        {String(i + 1).padStart(2, '0')}.
                                    </span>
                                )}
                                {item.title || item.q}
                            </span>
                            <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}>
                                ▼
                            </span>
                        </button>
                        {isOpen && (
                            <div className={styles.accordionBody}>
                                <p>{item.desc || item.a}</p>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

const CourseDetail = ({ courseId, onClose }) => {
    const course = getCourseData(courseId);
    const relatedCourses = useMemo(() => getRelatedCourses(courseId), [courseId]);
    const [activeTab, setActiveTab] = useState('overview');

    // Scroll to top when course changes
    useEffect(() => {
        window.scrollTo(0, 0);
        setActiveTab('overview');
    }, [courseId]);

    const descriptionParas = Array.isArray(course.description)
        ? course.description
        : [course.description];

    // Filter tabs based on available data
    const availableTabs = TABS.filter((tab) => {
        if (tab.id === 'whyTechcadd' && (!course.whyChoose || Object.keys(course.whyChoose).length === 0)) return false;
        if (tab.id === 'faqs' && (!course.faqs || course.faqs.length === 0)) return false;
        return true;
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert('Thank you! We will contact you shortly.');
        e.target.reset();
    };

    return (
        <div className={styles.detailContainer}>
            {/* ═══ HERO SECTION ═══ */}
            <section
                className={styles.heroSection}
                style={{
                    backgroundImage: `url('${course.image}')`,
                }}
            >
                <div className={styles.heroContent}>
                    <div className={styles.heroBadges}>
                        {course.badges.map((b, i) => (
                            <span key={i} className={styles.badgePill}>{b}</span>
                        ))}
                    </div>
                    <h1 className={styles.heroTitle}>{course.title}</h1>
                </div>
                <span className={styles.heroIcon}>💻</span>
            </section>

            {/* ═══ STICKY TABS ═══ */}
            <nav className={styles.tabsNav}>
                <div className={styles.tabsInner}>
                    {availableTabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`${styles.tabBtn} ${activeTab === tab.id ? styles.tabBtnActive : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            <span className={styles.tabIcon}>{tab.icon}</span>
                            {tab.label}
                        </button>
                    ))}
                </div>
            </nav>

            {/* ═══ MAIN LAYOUT ═══ */}
            <div className={styles.pageLayout}>
                {/* LEFT COLUMN */}
                <div className={styles.mainColumn}>

                    {/* ── OVERVIEW TAB ── */}
                    {activeTab === 'overview' && (
                        <>
                            {/* Description */}
                            <div className={styles.contentSection}>
                                <h3>Course Description</h3>
                                {descriptionParas.map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}

                                {/* Learning Outcomes */}
                                <h3 style={{ marginTop: '2.5rem' }}>What you'll learn</h3>
                                <ul className={styles.checkList}>
                                    {course.learnings.map((l, i) => (
                                        <li key={i}>
                                            <span className={styles.checkIcon}>✓</span>
                                            {l}
                                        </li>
                                    ))}
                                </ul>

                                {/* Mid Content CTA */}
                                {course.midContentCta && (
                                    <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: 'rgba(99, 102, 241, 0.06)', border: '1px solid rgba(99, 102, 241, 0.12)', borderRadius: '14px' }}>
                                        <p style={{ margin: 0, lineHeight: '1.8', fontSize: '1.02rem' }}>{course.midContentCta}</p>
                                    </div>
                                )}
                            </div>

                            {/* Author More Courses */}
                            {relatedCourses.length > 0 && (
                                <div className={styles.authorCoursesSection}>
                                    <div className={styles.authorCoursesHeader}>
                                        <h3>Author More Courses</h3>
                                        <a href="#courses" className={styles.moreLink} onClick={(e) => { e.preventDefault(); onClose(); }}>
                                            More Courses...
                                        </a>
                                    </div>
                                    <div className={styles.authorCoursesGrid}>
                                        {relatedCourses.map((rc) => (
                                            <div
                                                key={rc.id}
                                                className={styles.courseCardVertical}
                                                onClick={() => {
                                                    window.location.hash = `#${rc.id}`;
                                                }}
                                            >
                                                <div className={styles.cardIcon}>🎓</div>
                                                <h3>{rc.title}</h3>
                                                <p>{Array.isArray(rc.description) ? rc.description[0].slice(0, 100) + '...' : rc.description.slice(0, 100) + '...'}</p>
                                                <span className={styles.btnSmall}>View Course</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </>
                    )}

                    {/* ── CURRICULUM TAB ── */}
                    {activeTab === 'curriculum' && (
                        <div className={styles.contentSection}>
                            <h3>Curriculum</h3>
                            <Accordion items={course.curriculum} numbered />
                        </div>
                    )}

                    {/* ── WHY TECHCADD TAB ── */}
                    {activeTab === 'whyTechcadd' && course.whyChoose && (
                        <div className={styles.contentSection}>
                            <h3>Why Choose TechCADD?</h3>
                            <div className={styles.whyChooseGrid}>
                                {Object.entries(course.whyChoose).map(([title, desc], i) => (
                                    <div key={i} className={styles.whyItem}>
                                        <span className={styles.whyItemIcon}>✅</span>
                                        <div>
                                            <h4>{title}</h4>
                                            <p>{desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* ── CAREERS TAB ── */}
                    {activeTab === 'careers' && (
                        <div className={styles.contentSection}>
                            <h3>Career Opportunities</h3>
                            <div className={styles.careerList}>
                                {course.careers.map((career, i) => (
                                    <div key={i} className={styles.careerItem}>
                                        <div className={styles.careerIcon}>💼</div>
                                        <div>
                                            <h4>{career.title}</h4>
                                            <p>{career.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* ── FAQS TAB ── */}
                    {activeTab === 'faqs' && course.faqs && (
                        <>
                            <div className={styles.contentSection}>
                                <h3>Frequently Asked Questions</h3>
                                <Accordion items={course.faqs} />
                            </div>

                            {/* Reviews inside FAQs tab (matches PHP layout) */}
                            {course.reviews && course.reviews.length > 0 && (
                                <div className={styles.contentSection}>
                                    <h3>Student Reviews ({course.reviews.length})</h3>
                                    <div className={styles.reviewList}>
                                        {course.reviews.map((review, i) => (
                                            <div key={i} className={styles.reviewItem}>
                                                <div className={styles.reviewAvatar}>
                                                    {review.name.charAt(0).toUpperCase()}
                                                </div>
                                                <div>
                                                    <div className={styles.reviewHead}>
                                                        <h4>{review.name}</h4>
                                                        <div className={styles.reviewStars}>
                                                            {[1, 2, 3, 4, 5].map((s) => (
                                                                <span key={s}>★</span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <p>"{review.text}"</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>

                {/* ═══ RIGHT COLUMN: SIDEBAR ═══ */}
                <aside className={styles.sidebar}>
                    {/* Video / Image + Meta Card */}
                    <div className={styles.sidebarWidget}>
                        <div className={styles.videoThumbnail}>
                            <img src={course.image} alt={course.title} />
                        </div>

                        <div className={styles.priceArea}>
                            <div className={styles.metaList}>
                                <div className={styles.metaItem}>
                                    <span className={styles.metaLabel}>Instructor:</span>
                                    <span className={styles.metaValue}>{course.instructor}</span>
                                </div>
                                <div className={styles.metaItem}>
                                    <span className={styles.metaLabel}>Duration:</span>
                                    <span className={styles.metaValue}>{course.duration}</span>
                                </div>
                                <div className={styles.metaItem}>
                                    <span className={styles.metaLabel}>Lectures:</span>
                                    <span className={styles.metaValue}>{course.lectures}</span>
                                </div>
                                <div className={styles.metaItem}>
                                    <span className={styles.metaLabel}>Enrolled:</span>
                                    <span className={styles.metaValue}>1200+</span>
                                </div>
                                <div className={styles.metaItem}>
                                    <span className={styles.metaLabel}>Skill Level:</span>
                                    <span className={styles.metaValue}>{course.skillLevel}</span>
                                </div>
                                <div className={styles.metaItem}>
                                    <span className={styles.metaLabel}>Language:</span>
                                    <span className={styles.metaValue}>English</span>
                                </div>
                                <div className={styles.metaItem}>
                                    <span className={styles.metaLabel}>Quiz:</span>
                                    <span className={styles.metaValue}>Yes</span>
                                </div>
                                <div className={styles.metaItem}>
                                    <span className={styles.metaLabel}>Certificate:</span>
                                    <span className={styles.metaValue}>{course.certificate}</span>
                                </div>
                            </div>

                            {/* Enquiry CTA */}
                            <div className={styles.sidebarContactBox}>
                                <p className={styles.inquiryText}>More inquiry about course.</p>
                                <a href="tel:+919781297802" className={styles.contactBtnLg}>
                                    📞 +91 97812-97802
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Follow Us Widget */}
                    <div className={`${styles.sidebarWidget} ${styles.sidebarWidgetStatic} ${styles.followUsWidget}`}>
                        <h4>Follow Us</h4>
                        <div className={styles.socialGrid}>
                            <a href="#" className={`${styles.socialBtn} ${styles.socialFacebook}`}>f</a>
                            <a href="#" className={`${styles.socialBtn} ${styles.socialYoutube}`}>▶</a>
                            <a href="#" className={`${styles.socialBtn} ${styles.socialInstagram}`}>📷</a>
                            <a href="#" className={`${styles.socialBtn} ${styles.socialTwitter}`}>𝕏</a>
                            <a href="#" className={`${styles.socialBtn} ${styles.socialLinkedin}`}>in</a>
                        </div>
                    </div>

                    {/* Enquiry Form */}
                    <div className={`${styles.sidebarWidget} ${styles.sidebarWidgetStatic} ${styles.contactWidget}`}>
                        <form onSubmit={handleFormSubmit}>
                            <h3 className={styles.formTitle}>Enquire Now</h3>

                            <div className={styles.formGroup}>
                                <label>Your Name</label>
                                <input type="text" name="name" placeholder="Enter your full name" className={styles.formInput} required />
                            </div>

                            <div className={styles.formGroup}>
                                <label>Phone Number</label>
                                <input type="tel" name="phone" placeholder="+91 98765 43210" className={styles.formInput} required />
                            </div>

                            <div className={styles.formGroup}>
                                <label>Course or Service</label>
                                <input type="text" name="course" value={course.title} className={styles.formInput} readOnly />
                            </div>

                            <div className={styles.formGroup}>
                                <label>Your Message</label>
                                <textarea
                                    name="message"
                                    placeholder="Type your message here..."
                                    rows="4"
                                    className={`${styles.formInput} ${styles.textareaInput}`}
                                />
                            </div>

                            <button type="submit" className={styles.btnPrimary}>SEND MESSAGE</button>
                        </form>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default CourseDetail;

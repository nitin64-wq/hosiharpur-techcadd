import React, { useEffect } from 'react';
import styles from './CourseDetail.module.css';
import { getCourseData } from '../data/coursesData';

const CourseDetail = ({ courseId, onClose }) => {
    const course = getCourseData(courseId);

    // Scroll to top when course changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [courseId]);

    // Format description text, breaking on newlines if applicable
    const descriptionParas = Array.isArray(course.description)
        ? course.description
        : [course.description];

    return (
        <div className={styles.detailContainer}>
            <button className={styles.backBtn} onClick={onClose}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                Back to Courses
            </button>

            <div className={styles.heroHeader} style={{ backgroundImage: `linear-gradient(135deg, rgba(10, 10, 15, 0.8), rgba(10, 10, 15, 0.95)), url('${course.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className={styles.badges}>
                    {course.badges.map((b, i) => (
                        <span key={i} className={styles.badge}>{b}</span>
                    ))}
                </div>
                <h1>{course.title}</h1>
            </div>

            <div className={styles.layout}>
                <div className={styles.mainContent}>
                    <h3>Course Description</h3>
                    {descriptionParas.map((p, i) => (
                        <p key={i}>{p}</p>
                    ))}

                    <h3 style={{ marginTop: '3rem' }}>What you'll learn</h3>
                    <ul className={styles.checkList}>
                        {course.learnings.map((l, i) => (
                            <li key={i}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                {l}
                            </li>
                        ))}
                    </ul>

                    <div className={styles.curriculum}>
                        <h3>Curriculum</h3>
                        {course.curriculum.map((mod, i) => (
                            <div key={i} className={styles.module}>
                                <h4><span className={styles.moduleNumber}>{String(i + 1).padStart(2, '0')}.</span> {mod.title}</h4>
                                <p>{mod.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.sidebar}>
                    <div className={styles.metaList}>
                        <div className={styles.metaItem}>
                            <span className={styles.metaLabel}>Instructor</span>
                            <span className={styles.metaValue}>{course.instructor}</span>
                        </div>
                        <div className={styles.metaItem}>
                            <span className={styles.metaLabel}>Duration</span>
                            <span className={styles.metaValue}>{course.duration}</span>
                        </div>
                        <div className={styles.metaItem}>
                            <span className={styles.metaLabel}>Lectures</span>
                            <span className={styles.metaValue}>{course.lectures}</span>
                        </div>
                        <div className={styles.metaItem}>
                            <span className={styles.metaLabel}>Skill Level</span>
                            <span className={styles.metaValue}>{course.skillLevel}</span>
                        </div>
                        <div className={styles.metaItem}>
                            <span className={styles.metaLabel}>Certificate</span>
                            <span className={styles.metaValue}>{course.certificate}</span>
                        </div>
                    </div>

                    <button className={styles.enrollBtn} onClick={() => alert("Redirecting to Enquiry / Demo Booking Form...")}>
                        Book a Free Demo
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;

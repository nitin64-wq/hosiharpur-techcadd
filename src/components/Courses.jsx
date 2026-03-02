import React from 'react';
import styles from './Courses.module.css';

const VideoIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>);
const CodeIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>);
const WebIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>);
const AIIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>);
const ShieldIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>);
const CloudIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>);

const courseData = [
    { id: 1, title: 'Video Editing Pro', desc: 'Master Premiere Pro, After Effects, and industry-standard editing techniques to create cinematic masterpieces.', duration: '3 Months', level: 'Beginner to Pro', icon: <VideoIcon /> },
    { id: 2, title: 'C / C++ Programming', desc: 'Build a strong foundation in competitive programming, algorithms, and complex data structures.', duration: '2 Months', level: 'Intermediate', icon: <CodeIcon /> },
    { id: 3, title: 'PHP Web Development', desc: 'Backend mastery using PHP, MySQL, and modern architectures to build dynamic scalable web applications.', duration: '4 Months', level: 'Beginner', icon: <WebIcon /> },
    { id: 4, title: 'ML & AI Certification', desc: 'Dive deep into Machine Learning algorithms, neural networks, and Artificial Intelligence paradigms.', duration: '6 Months', level: 'Advanced', icon: <AIIcon /> },
    { id: 5, title: 'Cyber Security', desc: 'Learn ethical hacking, penetration testing, and securing network infrastructures against modern threats.', duration: '4 Months', level: 'Intermediate', icon: <ShieldIcon /> },
    { id: 6, title: 'Cloud & DevOps', desc: 'Deploy linearly scalable systems with AWS, Docker, Kubernetes, and automated CI/CD pipelines.', duration: '5 Months', level: 'Advanced', icon: <CloudIcon /> },
];

const Courses = ({ onCourseClick }) => {
    return (
        <section id="courses" className={styles.coursesSection}>
            <div className={styles.header}>
                <div className={styles.sectionBadge}>Academic Excellence</div>
                <h2 className={styles.title}>Our Premium <span className={styles.highlight}>Courses</span></h2>
                <p className={styles.subtitle}>
                    Explore our wide range of meticulously crafted courses specifically designed by industry veterans for the Phagwara & Hoshiarpur ecosystem.
                </p>
            </div>

            <div className={styles.grid}>
                {courseData.map(course => (
                    <div key={course.id} className={styles.cardWrapper} onClick={onCourseClick}>
                        <div className={styles.cardGlow}></div>
                        <div className={styles.card}>
                            <div className={styles.cardTop}>
                                <div className={styles.iconContainer}>
                                    {course.icon}
                                </div>
                                <span className={styles.durationBadge}>{course.duration}</span>
                            </div>

                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{course.title}</h3>
                                <p className={styles.cardDesc}>{course.desc}</p>
                            </div>

                            <div className={styles.cardFooter}>
                                <div className={styles.cardAction}>
                                    View Syllabus
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </div>
                                <span className={styles.levelBadge}>{course.level}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Courses;

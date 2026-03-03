import React from 'react';
import styles from './Reviews.module.css';

const reviewsData = [
    {
        name: 'Gurpreet Singh',
        course: 'Web Development',
        rating: 5,
        text: 'TechCadd completely changed my career path. The instructors are incredibly supportive and the hands-on projects gave me real-world skills that helped me land my first job.',
        color: '#6366f1',
    },
    {
        name: 'Amandeep Kaur',
        course: 'Graphic Design',
        rating: 5,
        text: 'The graphic design course was phenomenal! From Photoshop to CorelDRAW, they covered everything. I now run my own freelance design studio thanks to TechCadd.',
        color: '#ec4899',
    },
    {
        name: 'Rahul Sharma',
        course: 'AutoCAD & 3ds Max',
        rating: 5,
        text: 'Best institute in Hoshiarpur for CAD training. The faculty has real industry experience and the lab facilities are top-notch. Highly recommended!',
        color: '#14b8a6',
    },
    {
        name: 'Simranpreet Kaur',
        course: 'Basic Computer Course',
        rating: 5,
        text: 'I started with zero knowledge of computers and now I am confidently working in an office. The basic computer course covered everything from MS Office to internet skills.',
        color: '#f59e0b',
    },
    {
        name: 'Harjot Singh',
        course: 'Tally & Accounting',
        rating: 4,
        text: 'The Tally course at TechCadd was very practical. They taught real GST filing and accounting concepts. I got placed within a month of completing the course!',
        color: '#8b5cf6',
    },
    {
        name: 'Priya Mehta',
        course: 'Digital Marketing',
        rating: 5,
        text: 'Amazing experience learning digital marketing here. The course covered SEO, social media marketing, and Google Ads with live projects. Worth every penny!',
        color: '#ef4444',
    },
    {
        name: 'Mandeep Kaur',
        course: 'Web Development',
        rating: 5,
        text: 'The web development program is outstanding. I learned HTML, CSS, JavaScript, and React. The project-based learning approach really sets TechCadd apart from other institutes.',
        color: '#06b6d4',
    },
    {
        name: 'Arjun Patel',
        course: 'Python Programming',
        rating: 5,
        text: 'Learning Python at TechCadd was an incredible journey. The structured curriculum and supportive mentors helped me transition into a software development role.',
        color: '#10b981',
    },
    {
        name: 'Jasleen Kaur',
        course: 'Interior Design',
        rating: 4,
        text: 'The interior design course with 3ds Max was exactly what I needed. The visualization skills I gained here have been invaluable in my career as an interior designer.',
        color: '#f472b6',
    },
    {
        name: 'Vikram Thakur',
        course: 'Hardware & Networking',
        rating: 5,
        text: 'Practical training on real hardware and networking setups. The instructors made complex concepts easy to understand. Now I run my own computer repair shop!',
        color: '#a78bfa',
    },
];

const row1 = reviewsData.slice(0, 5);
const row2 = reviewsData.slice(5, 10);

const StarRating = ({ rating }) => {
    return (
        <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className={star <= rating ? styles.star : styles.starEmpty}>
                    ★
                </span>
            ))}
        </div>
    );
};

const ReviewCard = ({ review }) => {
    const initials = review.name
        .split(' ')
        .map((n) => n[0])
        .join('');

    return (
        <div className={styles.card}>
            <div className={styles.cardTop}>
                <div className={styles.reviewer}>
                    <div
                        className={styles.avatar}
                        style={{
                            background: `linear-gradient(135deg, ${review.color}, ${review.color}88)`,
                        }}
                    >
                        {initials}
                    </div>
                    <div className={styles.reviewerInfo}>
                        <span className={styles.reviewerName}>{review.name}</span>
                        <span className={styles.reviewerCourse}>{review.course}</span>
                    </div>
                </div>
                <span className={styles.quoteIcon}>"</span>
            </div>

            <StarRating rating={review.rating} />

            <p className={styles.reviewText}>{review.text}</p>

            <div
                className={styles.cardGlow}
                style={{ background: review.color }}
            />
        </div>
    );
};

const Reviews = () => {
    return (
        <section className={styles.section} id="reviews">
            <div className={styles.container}>
                {/* ─── Section Header ─── */}
                <div className={styles.header}>
                    <div className={styles.badge}>Testimonials</div>
                    <h2 className={styles.title}>
                        What Our Students <span className={styles.highlight}>Say</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Hear from our successful alumni who transformed their careers through our industry-focused training programs.
                    </p>
                </div>

                {/* ─── Stats ─── */}
                <div className={styles.statsRow}>
                    <div className={styles.stat}>
                        <div className={styles.statNumber}>500+</div>
                        <div className={styles.statLabel}>Happy Students</div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statNumber}>4.8</div>
                        <div className={styles.statLabel}>Average Rating</div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statNumber}>95%</div>
                        <div className={styles.statLabel}>Placement Rate</div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statNumber}>10+</div>
                        <div className={styles.statLabel}>Years of Trust</div>
                    </div>
                </div>

                {/* ─── Marquee Row 1 ─── */}
                <div className={styles.marqueeWrapper}>
                    <div className={styles.marqueeTrack}>
                        {[...row1, ...row1, ...row1, ...row1].map((review, i) => (
                            <ReviewCard key={`r1-${i}`} review={review} />
                        ))}
                    </div>
                </div>

                {/* ─── Marquee Row 2 ─── */}
                <div className={styles.marqueeWrapper}>
                    <div className={styles.marqueeTrackReverse}>
                        {[...row2, ...row2, ...row2, ...row2].map((review, i) => (
                            <ReviewCard key={`r2-${i}`} review={review} />
                        ))}
                    </div>
                </div>

                {/* ─── Google Rating Box ─── */}
                <div className={styles.googleRating}>
                    <div className={styles.ratingBox}>
                        <span className={styles.googleIcon}>⭐</span>
                        <div className={styles.ratingInfo}>
                            <span className={styles.ratingScore}>4.8 / 5.0</span>
                            <div className={styles.ratingStars}>
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <span key={s} className={styles.ratingStarFilled}>★</span>
                                ))}
                            </div>
                            <span className={styles.ratingLabel}>Based on 200+ Google Reviews</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;

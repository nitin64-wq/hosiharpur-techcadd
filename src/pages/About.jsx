import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import styles from './About.module.css';

const cardData = [
    { id: 1, color: 'linear-gradient(135deg, #6366f1, #8b5cf6)', title: '100% Placement', desc: 'Secure your dream job right after completing your course with our top hiring partners.' },
    { id: 2, color: 'linear-gradient(135deg, #ec4899, #f43f5e)', title: 'Expert Mentors', desc: 'Get hands-on training directly from established industry tech veterans.' },
    { id: 3, color: 'linear-gradient(135deg, #14b8a6, #0ea5e9)', title: 'Live Projects', desc: 'Build an incredible portfolio of real-world scalable applications.' },
    { id: 4, color: 'linear-gradient(135deg, #f59e0b, #ef4444)', title: 'Certifications', desc: 'Earn recognized credentials that propel your resume past ATS screens.' },
];

const About = () => {
    const [cards, setCards] = useState(cardData);

    const sendToBack = (id) => {
        setCards((prev) => {
            const newCards = [...prev];
            const index = newCards.findIndex((c) => c.id === id);
            const [movedCard] = newCards.splice(index, 1);
            newCards.unshift(movedCard);
            return newCards;
        });
    };

    return (
        <section id="about" className={styles.aboutSection}>
            <div className={styles.aboutContainer}>
                <div className={styles.aboutContent}>
                    <div className={styles.sectionBadge}>Our Story</div>
                    <h2>Pioneering Tech Education <br /> in <span className={styles.highlight}>Hoshiarpur</span></h2>
                    <p>
                        TechCadd Hoshiarpur was founded with a single mission: to bridge the gap between academic learning and industry requirements. We provide world-class training in software development, CAD designing, and modern technologies.
                    </p>
                    <p>
                        Our expert faculty, state-of-the-art infrastructure, and project-based learning approach ensure that every student is equipped with the skills needed to thrive in today's competitive digital landscape.
                    </p>
                    <div className={styles.statsContainer}>
                        <div className={styles.statBox}>
                            <h3>5000+</h3>
                            <p>Students Trained</p>
                        </div>
                        <div className={styles.statBox}>
                            <h3>50+</h3>
                            <p>Expert Mentors</p>
                        </div>
                        <div className={styles.statBox}>
                            <h3>100%</h3>
                            <p>Placement Assistance</p>
                        </div>
                    </div>
                </div>
                <div className={styles.dragWrapper}>
                    {cards.map((card, index) => {
                        return (
                            <Card
                                key={card.id}
                                card={card}
                                index={index}
                                totalCards={cards.length}
                                sendToBack={sendToBack}
                                styles={styles}
                            />
                        );
                    })}
                    <div className={styles.swipeInstruction}>← Drag Cards to Shuffle →</div>
                </div>
            </div>
        </section>
    );
};

const Card = ({ card, index, totalCards, sendToBack, styles }) => {
    const x = useMotionValue(0);
    const rotate = useTransform(x, [-200, 200], [-15, 15]);
    const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0.5, 1, 1, 1, 0.5]);

    const isTop = index === totalCards - 1;

    const scale = 1 - (totalCards - 1 - index) * 0.05;
    const yOffset = (totalCards - 1 - index) * -20;

    const handleDragEnd = (_, info) => {
        if (Math.abs(info.offset.x) > 100) {
            sendToBack(card.id);
        }
    };

    return (
        <motion.div
            className={styles.dragCard}
            style={{
                background: card.color,
                x,
                rotate,
                opacity,
                zIndex: index,
            }}
            animate={{
                scale: scale,
                y: yOffset,
            }}
            drag={isTop ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.6}
            onDragEnd={handleDragEnd}
            whileTap={isTop ? { cursor: "grabbing" } : {}}
            layout
        >
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
        </motion.div>
    );
};

export default About;

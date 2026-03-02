import React from 'react';
import { motion } from 'framer-motion';
import styles from './Gallery.module.css';

// Using unsplash tech placeholders for premium feel since real images are not provided
const galleryImages = [
    { id: 1, src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop", style: "tall", alt: "Students Coding" },
    { id: 2, src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop", style: "wide", alt: "Team Collaboration" },
    { id: 3, src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop", style: "square", alt: "Tech Mentorship" },
    { id: 4, src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop", style: "square", alt: "Lab Equipment" },
    { id: 5, src: "https://images.unsplash.com/photo-1515224526905-51c7d77c7bb8?q=80&w=800&auto=format&fit=crop", style: "tall", alt: "Classroom Learning" },
    { id: 6, src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop", style: "wide", alt: "Graduate Success" },
];

const Gallery = () => {
    return (
        <section className={styles.section} id="gallery">
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.badge}>Campus Life</div>
                    <h2 className={styles.title}>Our <span className={styles.highlight}>Gallery</span></h2>
                    <p className={styles.subtitle}>
                        Take a glimpse inside our state-of-the-art facilities and vibrant learning environment.
                    </p>
                </div>

                <div className={styles.bentoGrid}>
                    {galleryImages.map((img, index) => (
                        <motion.div
                            key={img.id}
                            className={`${styles.bentoItem} ${styles[img.style]}`}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <img src={img.src} alt={img.alt} className={styles.image} loading="lazy" />
                            <div className={styles.overlay}>
                                <span className={styles.overlayText}>{img.alt}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;

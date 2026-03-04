import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Gallery.module.css';

const galleryImages = [
    { id: 1, src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop", alt: "Students Coding", category: "lab", span: "col2" },
    { id: 2, src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop", alt: "Team Collaboration", category: "events", span: "normal" },
    { id: 3, src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop", alt: "Tech Mentorship", category: "classroom", span: "row2" },
    { id: 4, src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop", alt: "Lab Equipment", category: "lab", span: "normal" },
    { id: 5, src: "https://images.unsplash.com/photo-1515224526905-51c7d77c7bb8?q=80&w=800&auto=format&fit=crop", alt: "Classroom Session", category: "classroom", span: "normal" },
    { id: 6, src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop", alt: "Graduate Success", category: "events", span: "col2" },
    { id: 7, src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop", alt: "Workshop Training", category: "events", span: "normal" },
    { id: 8, src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop", alt: "Computer Lab", category: "lab", span: "normal" },
];

const categories = [
    { key: 'all', label: 'All Photos' },
    { key: 'lab', label: 'Computer Lab' },
    { key: 'classroom', label: 'Classroom' },
    { key: 'events', label: 'Events' },
];

const Gallery = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [lightboxImg, setLightboxImg] = useState(null);

    const filtered = activeFilter === 'all'
        ? galleryImages
        : galleryImages.filter((img) => img.category === activeFilter);

    return (
        <section className={styles.section} id="gallery">
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <div className={styles.badge}>Campus Life</div>
                    <h2 className={styles.title}>
                        Our <span className={styles.highlight}>Gallery</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Take a glimpse inside our state-of-the-art facilities and vibrant learning environment.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className={styles.filterBar}>
                    {categories.map((cat) => (
                        <button
                            key={cat.key}
                            className={`${styles.filterBtn} ${activeFilter === cat.key ? styles.filterActive : ''}`}
                            onClick={() => setActiveFilter(cat.key)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Masonry Grid */}
                <motion.div className={styles.grid} layout>
                    <AnimatePresence mode="popLayout">
                        {filtered.map((img, index) => (
                            <motion.div
                                key={img.id}
                                className={`${styles.card} ${styles[img.span]}`}
                                layout
                                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.5, delay: index * 0.06 }}
                                onClick={() => setLightboxImg(img)}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className={styles.image}
                                    loading="lazy"
                                />
                                {/* Gradient overlay */}
                                <div className={styles.overlay}>
                                    <div className={styles.overlayContent}>
                                        <span className={styles.categoryTag}>{img.category}</span>
                                        <span className={styles.overlayTitle}>{img.alt}</span>
                                    </div>
                                    <div className={styles.zoomIcon}>
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="11" cy="11" r="8" />
                                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                            <line x1="11" y1="8" x2="11" y2="14" />
                                            <line x1="8" y1="11" x2="14" y2="11" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Decorative border glow on hover */}
                                <div className={styles.borderGlow}></div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Image count */}
                <div className={styles.imageCount}>
                    <span>{filtered.length}</span> photos in <span>{activeFilter === 'all' ? 'all categories' : activeFilter}</span>
                </div>
            </div>

            {/* ─── Lightbox Modal ─── */}
            <AnimatePresence>
                {lightboxImg && (
                    <motion.div
                        className={styles.lightbox}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setLightboxImg(null)}
                    >
                        <motion.div
                            className={styles.lightboxContent}
                            initial={{ scale: 0.8, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.8, y: 50 }}
                            transition={{ type: 'spring', damping: 25 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img src={lightboxImg.src} alt={lightboxImg.alt} className={styles.lightboxImage} />
                            <div className={styles.lightboxInfo}>
                                <span className={styles.lightboxCategory}>{lightboxImg.category}</span>
                                <h3>{lightboxImg.alt}</h3>
                            </div>
                            <button className={styles.lightboxClose} onClick={() => setLightboxImg(null)}>
                                ✕
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;

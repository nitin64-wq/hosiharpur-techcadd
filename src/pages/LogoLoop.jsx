import React from 'react';
import styles from './LogoLoop.module.css';

const technologies = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" },
    { name: "Next.JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" }
];

// Double the array for a seamless 50% translation loop
const loopedLogos = [...technologies, ...technologies];

const LogoLoop = () => {
    return (
        <section className={styles.loopContainer}>
            <h3 className={styles.loopTitle}>Technologies & Stacks We Teach</h3>
            <div className={styles.fadeCover}></div>
            <div className={styles.track}>
                {loopedLogos.map((tech, index) => (
                    <div key={index} className={styles.logoItem} title={tech.name}>
                        <img src={tech.icon} alt={tech.name} className={styles.iconImage} />
                        <span className={styles.iconLabel}>{tech.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LogoLoop;

import React, { useEffect, useRef, useState } from 'react';
import styles from './CustomCursor.module.css';

const CustomCursor = () => {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        let mouseX = 0, mouseY = 0;
        let ringX = 0, ringY = 0;

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            // Dot follows instantly
            dot.style.left = `${mouseX}px`;
            dot.style.top = `${mouseY}px`;
            if (!isVisible) setIsVisible(true);
        };

        // Smooth ring follow
        const animateRing = () => {
            ringX += (mouseX - ringX) * 0.15;
            ringY += (mouseY - ringY) * 0.15;
            ring.style.left = `${ringX}px`;
            ring.style.top = `${ringY}px`;
            requestAnimationFrame(animateRing);
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);
        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        // Detect hoverable elements
        const handleOverInteractive = (e) => {
            const target = e.target;
            const isInteractive =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.closest('[role="button"]') ||
                window.getComputedStyle(target).cursor === 'pointer';
            setIsHovering(isInteractive);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseover', handleOverInteractive);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);
        document.documentElement.addEventListener('mouseleave', handleMouseLeave);
        document.documentElement.addEventListener('mouseenter', handleMouseEnter);

        const animFrame = requestAnimationFrame(animateRing);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleOverInteractive);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
            document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
            document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
            cancelAnimationFrame(animFrame);
        };
    }, [isVisible]);

    // Hide on touch devices
    const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
    if (isTouchDevice) return null;

    return (
        <>
            <div
                ref={dotRef}
                className={`${styles.dot} ${isVisible ? styles.visible : ''} ${isHovering ? styles.dotHover : ''} ${isClicking ? styles.dotClick : ''}`}
            />
            <div
                ref={ringRef}
                className={`${styles.ring} ${isVisible ? styles.visible : ''} ${isHovering ? styles.ringHover : ''} ${isClicking ? styles.ringClick : ''}`}
            />
        </>
    );
};

export default CustomCursor;

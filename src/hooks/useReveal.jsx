import { useEffect, useRef } from 'react';

/**
 * Custom hook that adds a scroll-reveal animation using IntersectionObserver.
 * When the element comes into view, the 'active' class is added.
 * @param {object} options - IntersectionObserver options
 * @returns {React.RefObject} ref to attach to the element
 */
export function useReveal(options = { threshold: 0.1 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return ref;
}

/**
 * Wrapper component that adds reveal animation to its children.
 */
export function Reveal({ children, className = '', style = {}, as: Tag = 'div' }) {
  const ref = useReveal();
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
  );
}

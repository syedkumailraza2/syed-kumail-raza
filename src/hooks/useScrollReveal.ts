import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealOptions {
  y?: number;
  duration?: number;
  stagger?: number;
  delay?: number;
}

export function useScrollReveal<T extends HTMLElement>(
  options: ScrollRevealOptions = {}
) {
  const ref = useRef<T>(null);
  const { y = 40, duration = 0.8, stagger = 0.1, delay = 0 } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = el.children.length > 1 ? el.children : [el];

    const ctx = gsap.context(() => {
      gsap.from(children, {
        y,
        opacity: 0,
        duration,
        stagger,
        delay,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    }, el);

    return () => ctx.revert();
  }, [y, duration, stagger, delay]);

  return ref;
}

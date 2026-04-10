import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useHorizontalScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const progressBar = progressRef.current;

    if (!section || !track) return;

    // Wait a tick for layout
    const ctx = gsap.context(() => {
      const trackWidth = track.scrollWidth;
      const windowWidth = window.innerWidth;
      const scrollDistance = trackWidth - windowWidth;

      const tween = gsap.to(track, {
        x: -scrollDistance,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          end: () => `+=${scrollDistance}`,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressBar) {
              progressBar.style.transform = `scaleX(${self.progress})`;
            }
          },
        },
      });

      return () => {
        tween.kill();
      };
    }, section);

    // Debounced resize handler
    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 200);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
      ctx.revert();
    };
  }, []);

  return { sectionRef, trackRef, progressRef };
}

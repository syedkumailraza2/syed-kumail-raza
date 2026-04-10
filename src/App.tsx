import { useEffect, useRef, useState } from 'react';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import Nav from './components/Nav';
import Hero from './components/Hero';
import ProjectsSection from './components/Projects/ProjectsSection';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';

export default function App() {
  const lenis = useSmoothScroll();
  const [aboutOpen, setAboutOpen] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorLabelRef = useRef<HTMLDivElement>(null);

  // Custom cursor (desktop only)
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window;
    if (isTouchDevice) return;

    const cursor = cursorRef.current;
    const label = cursorLabelRef.current;
    if (!cursor || !label) return;

    cursor.style.display = 'block';

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    let rafId: number;
    const tick = () => {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;
      label.style.left = `${cursorX}px`;
      label.style.top = `${cursorY}px`;
      rafId = requestAnimationFrame(tick);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [data-cursor="expand"]');

      if (interactive) {
        const isExpand = interactive.hasAttribute('data-cursor');
        cursor.classList.toggle('is-expand', isExpand);
        cursor.classList.toggle('is-hover', !isExpand);
        if (isExpand) {
          label.textContent = 'Expand';
          label.classList.add('is-visible');
        }
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [data-cursor="expand"]')) {
        cursor.classList.remove('is-hover', 'is-expand');
        label.classList.remove('is-visible');
        label.textContent = '';
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor hidden" />
      <div ref={cursorLabelRef} className="custom-cursor-label" />

      <Nav lenis={lenis} onAboutClick={() => { setAboutOpen(true); lenis.current?.stop(); }} />
      <main>
        <Hero lenis={lenis} />
        <ProjectsSection lenis={lenis} />
        <Experience />
        <Skills />
      </main>
      <Footer />

      {aboutOpen && (
        <About onClose={() => { setAboutOpen(false); lenis.current?.start(); }} />
      )}
    </>
  );
}

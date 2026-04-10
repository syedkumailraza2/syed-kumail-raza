import { useEffect, useRef, type RefObject } from 'react';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import Lenis from 'lenis';

interface HeroProps {
  lenis: RefObject<Lenis | null>;
}

export default function Hero({ lenis }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Wait for fonts to load before animating
    document.fonts.ready.then(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: 'expo.out',
        },
      });

      tl.fromTo(nameRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      )
        .fromTo(
          lineRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.8 },
          '-=0.4'
        )
        .fromTo(
          titleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.4'
        )
        .fromTo(
          ctaRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          '-=0.3'
        );
    });
  }, []);

  const handleViewProjects = () => {
    const target = document.querySelector('#projects');
    if (target && lenis.current) {
      lenis.current.scrollTo(target as HTMLElement, { offset: -40 });
    }
  };

  return (
    <section
      ref={containerRef}
      className="h-screen flex flex-col items-center justify-center relative px-6"
    >
      <div className="text-center">
        <h1
          ref={nameRef}
          className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-gray-200"
        >
          Syed Kumail Raza
        </h1>

        <div
          ref={lineRef}
          className="w-16 h-px bg-accent mx-auto my-6 origin-left"
        />

        <p
          ref={titleRef}
          className="text-2xl md:text-3xl lg:text-4xl text-black uppercase tracking-[0.2em] font-bold"
        >
          Software Developer
        </p>

        <button
          ref={ctaRef}
          onClick={handleViewProjects}
          className="mt-10 inline-flex items-center gap-2 text-base font-medium text-black group"
        >
          <span className="link-hover pb-0.5">View Projects</span>
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
            &rarr;
          </span>
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bob">
        <ChevronDown size={20} className="text-muted" />
      </div>
    </section>
  );
}

import { useEffect, useState, type RefObject } from 'react';
import Lenis from 'lenis';

interface NavProps {
  lenis: RefObject<Lenis | null>;
  onAboutClick: () => void;
}

export default function Nav({ lenis, onAboutClick }: NavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-md bg-white/80 border-b border-gray-200/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            lenis.current?.scrollTo(0);
          }}
          className="text-sm font-bold tracking-wide text-[#1a1a1a]"
        >
          Syed Kumail Raza
        </a>

        <button
          onClick={onAboutClick}
          className="text-sm font-medium text-muted hover:text-[#1a1a1a] transition-colors px-4 py-1.5 border border-gray-200 rounded-full hover:border-gray-400"
        >
          About
        </button>
      </div>
    </nav>
  );
}

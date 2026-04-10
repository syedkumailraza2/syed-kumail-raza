import { useEffect, useRef, useState } from 'react';

interface UseLazyIframeOptions {
  src: string | undefined;
  enabled: boolean;
  rootMargin?: string;
  timeout?: number;
}

export function useLazyIframe({
  src,
  enabled,
  rootMargin = '200px',
  timeout = 5000,
}: UseLazyIframeOptions) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [hasFailed, setHasFailed] = useState(false);

  // IntersectionObserver for visibility
  useEffect(() => {
    if (!enabled || !src) return;

    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [enabled, src, rootMargin]);

  // Timeout fallback
  useEffect(() => {
    if (!isVisible || !enabled || hasLoaded || hasFailed) return;

    const timer = setTimeout(() => {
      if (!hasLoaded) {
        setHasFailed(true);
      }
    }, timeout);

    return () => clearTimeout(timer);
  }, [isVisible, enabled, hasLoaded, hasFailed, timeout]);

  const shouldLoad = enabled && isVisible && src && !hasFailed;

  const onLoad = () => {
    setHasLoaded(true);
  };

  return {
    containerRef,
    shouldLoad,
    hasLoaded,
    hasFailed,
    onLoad,
    activeSrc: shouldLoad ? src : undefined,
  };
}

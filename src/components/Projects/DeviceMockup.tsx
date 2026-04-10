import { useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Project } from '../../types';
import { useLazyIframe } from '../../hooks/useLazyIframe';

interface DeviceMockupProps {
  project: Project;
  isExpanded?: boolean;
  onDeviceClick?: () => void;
  isMobile?: boolean;
}

export default function DeviceMockup({
  project,
  isExpanded = false,
  onDeviceClick,
  isMobile = false,
}: DeviceMockupProps) {
  const iframeEnabled = project.hasIframe && !!project.liveUrl && !isMobile;
  const { containerRef, shouldLoad, hasLoaded, hasFailed, onLoad, activeSrc } =
    useLazyIframe({
      src: project.liveUrl,
      enabled: iframeEnabled,
    });

  const [interactionEnabled, setInteractionEnabled] = useState(false);

  // Enable interaction only when expanded
  useEffect(() => {
    if (isExpanded) {
      const timer = setTimeout(() => setInteractionEnabled(true), 600);
      return () => clearTimeout(timer);
    }
    setInteractionEnabled(false);
  }, [isExpanded]);

  const Placeholder = () => (
    <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5 flex flex-col items-center justify-center gap-3">
      <span className="text-lg font-bold text-[#1a1a1a]/60">{project.title}</span>
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-[#1a1a1a] transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          <ExternalLink size={12} />
          Open live
        </a>
      )}
    </div>
  );

  const ScreenContent = () => {
    if (hasFailed || !iframeEnabled) {
      return <Placeholder />;
    }

    if (shouldLoad && activeSrc) {
      return (
        <>
          {!hasLoaded && <Placeholder />}
          <iframe
            src={activeSrc}
            title={project.title}
            onLoad={onLoad}
            className={`absolute inset-0 w-full h-full border-none ${
              hasLoaded ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-300`}
            style={{
              pointerEvents: interactionEnabled ? 'auto' : 'none',
            }}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            loading="lazy"
          />
        </>
      );
    }

    return <Placeholder />;
  };

  if (project.deviceType === 'phone') {
    return (
      <div
        ref={containerRef}
        className={`relative flex-shrink-0 cursor-pointer transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          !isExpanded ? 'hover:scale-[1.02]' : ''
        }`}
        style={{
          width: isExpanded ? '280px' : isMobile ? '200px' : '240px',
        }}
        onClick={onDeviceClick}
        data-cursor="expand"
      >
        {/* Phone frame */}
        <div className="relative bg-gray-900 rounded-[2.5rem] p-[6px] shadow-xl">
          {/* Dynamic island */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-900 rounded-full z-10" />
          {/* Screen */}
          <div
            className="relative overflow-hidden rounded-[2.2rem] bg-white"
            style={{ aspectRatio: '9 / 19.5' }}
          >
            <ScreenContent />
          </div>
        </div>
      </div>
    );
  }

  // Laptop
  return (
    <div
      ref={containerRef}
      className={`relative flex-shrink-0 cursor-pointer transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        !isExpanded ? 'hover:scale-[1.02]' : ''
      }`}
      style={{
        width: isExpanded ? '600px' : isMobile ? '320px' : '480px',
      }}
      onClick={onDeviceClick}
      data-cursor="expand"
    >
      {/* Laptop screen */}
      <div className="relative bg-gray-900 rounded-xl p-[6px] shadow-xl">
        <div
          className="relative overflow-hidden rounded-lg bg-white"
          style={{ aspectRatio: '16 / 10' }}
        >
          <ScreenContent />
        </div>
      </div>
      {/* Keyboard base */}
      <div className="relative mx-auto" style={{ width: '110%', marginLeft: '-5%' }}>
        <div className="h-3 bg-gray-800 rounded-b-lg" />
        <div className="h-1.5 bg-gray-700 rounded-b-xl mx-auto" style={{ width: '40%' }} />
      </div>
    </div>
  );
}

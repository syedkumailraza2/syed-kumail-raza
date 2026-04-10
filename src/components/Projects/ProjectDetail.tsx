import { useEffect, useRef } from 'react';
import { X, Github, ExternalLink } from 'lucide-react';
import gsap from 'gsap';
import { Project } from '../../types';
import DeviceMockup from './DeviceMockup';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const deviceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'expo.out' },
    });

    tl.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3 }
    )
      .fromTo(
        deviceRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6 },
        '-=0.1'
      )
      .fromTo(
        infoRef.current?.children ? Array.from(infoRef.current.children) : [],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.5 },
        '-=0.3'
      );

    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const handleClose = () => {
    const tl = gsap.timeline({
      defaults: { ease: 'expo.out' },
      onComplete: onClose,
    });

    tl.to(infoRef.current?.children ? Array.from(infoRef.current.children) : [], {
      y: -20,
      opacity: 0,
      stagger: 0.04,
      duration: 0.3,
    })
      .to(
        deviceRef.current,
        { scale: 0.9, opacity: 0, duration: 0.3 },
        '-=0.2'
      )
      .to(overlayRef.current, { opacity: 0, duration: 0.2 }, '-=0.1');
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 bg-white flex flex-col md:flex-row items-center justify-center opacity-0"
    >
      {/* Close button */}
      <button
        onClick={handleClose}
        className="absolute top-6 right-6 p-2 text-muted hover:text-[#1a1a1a] transition-colors z-10"
        aria-label="Close project detail"
      >
        <X size={24} />
      </button>

      {/* Info panel (left) */}
      <div
        ref={infoRef}
        className="w-full md:w-[40%] p-8 md:p-12 flex flex-col justify-center order-2 md:order-1"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-3">
          {project.title}
        </h2>

        <div className="w-12 h-px bg-accent mb-4" />

        <p className="text-muted leading-relaxed mb-6">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-xs font-medium bg-accent/10 text-[#1a1a1a] rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-[#1a1a1a] transition-colors"
            >
              <Github size={16} />
              Source Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-[#1a1a1a] transition-colors"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Device (right) */}
      <div
        ref={deviceRef}
        className="w-full md:w-[60%] flex items-center justify-center p-8 order-1 md:order-2"
      >
        <DeviceMockup project={project} isExpanded />
      </div>
    </div>
  );
}

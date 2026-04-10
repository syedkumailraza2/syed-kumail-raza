import { useState, useCallback, type RefObject } from 'react';
import Lenis from 'lenis';
import { Project } from '../../types';
import { projects } from '../../data/projects';
import { useHorizontalScroll } from '../../hooks/useHorizontalScroll';
import ProjectGallery from './ProjectGallery';
import ProjectDetail from './ProjectDetail';
import MobileProjects from './MobileProjects';

interface ProjectsSectionProps {
  lenis: RefObject<Lenis | null>;
}

export default function ProjectsSection({ lenis }: ProjectsSectionProps) {
  const [expandedProject, setExpandedProject] = useState<Project | null>(null);
  const { sectionRef, trackRef, progressRef } = useHorizontalScroll();

  const handleProjectClick = useCallback(
    (project: Project) => {
      setExpandedProject(project);
      lenis.current?.stop();
    },
    [lenis]
  );

  const handleClose = useCallback(() => {
    setExpandedProject(null);
    lenis.current?.start();
  }, [lenis]);

  return (
    <div id="projects">
      {/* Desktop: Horizontal scroll-jacking */}
      <section ref={sectionRef} className="hidden md:block relative">
        {/* Section heading pinned at top */}
        <div className="absolute top-8 left-0 right-0 z-10 px-6">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-black">
            Projects
          </h2>
        </div>

        <ProjectGallery
          projects={projects}
          trackRef={trackRef}
          onProjectClick={handleProjectClick}
        />

        {/* Progress bar */}
        <div
          ref={progressRef}
          className="scroll-progress-bar w-full"
          style={{ transform: 'scaleX(0)' }}
        />
      </section>

      {/* Mobile: Vertical stack */}
      <section className="md:hidden py-20 px-6">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-black mb-12">
          Projects
        </h2>
        <MobileProjects
          projects={projects}
          onProjectClick={handleProjectClick}
        />
      </section>

      {/* Expanded project detail */}
      {expandedProject && (
        <ProjectDetail project={expandedProject} onClose={handleClose} />
      )}
    </div>
  );
}

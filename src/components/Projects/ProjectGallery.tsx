import { type RefObject } from 'react';
import { Project } from '../../types';
import DeviceMockup from './DeviceMockup';

interface ProjectGalleryProps {
  projects: Project[];
  trackRef: RefObject<HTMLDivElement | null>;
  onProjectClick: (project: Project) => void;
}

export default function ProjectGallery({
  projects,
  trackRef,
  onProjectClick,
}: ProjectGalleryProps) {
  return (
    <div
      ref={trackRef}
      className="flex items-center gap-16 md:gap-24 px-[10vw] h-screen"
      style={{ willChange: 'transform' }}
    >
      {projects.map((project) => (
        <div
          key={project.id}
          className="flex-shrink-0 flex flex-col items-center gap-4"
        >
          <DeviceMockup
            project={project}
            onDeviceClick={() => onProjectClick(project)}
          />
          <div className="text-center">
            <h3 className="text-sm font-bold text-[#1a1a1a]">{project.title}</h3>
            <p className="text-xs text-muted mt-1 max-w-[200px]">
              {project.tech.join(' · ')}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

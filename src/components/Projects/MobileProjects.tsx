import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../../types';
import DeviceMockup from './DeviceMockup';

interface MobileProjectsProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

export default function MobileProjects({ projects, onProjectClick }: MobileProjectsProps) {
  return (
    <div className="flex flex-col gap-16">
      {projects.map((project) => (
        <div key={project.id} className="flex flex-col items-center gap-6">
          <DeviceMockup
            project={project}
            isMobile
            onDeviceClick={() => onProjectClick(project)}
          />

          <div className="text-center">
            <h3 className="text-lg font-bold text-[#1a1a1a]">{project.title}</h3>
            <p className="text-sm text-muted mt-2 max-w-sm leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap justify-center gap-2 mt-3">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-0.5 text-xs font-medium bg-accent/10 text-[#1a1a1a] rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-center gap-4 mt-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-[#1a1a1a] transition-colors"
                >
                  <Github size={14} />
                  Code
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-[#1a1a1a] transition-colors"
                >
                  <ExternalLink size={14} />
                  Live
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export type DeviceType = 'laptop' | 'phone';

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  deviceType: DeviceType;
  liveUrl?: string;
  githubUrl?: string;
  hasIframe: boolean;
  screenshot?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'mychat',
    title: 'Mychat',
    description:
      'A 1:1 chatting and video calling app. Integrated WebRTC for seamless video communication and WebSockets for real-time messaging.',
    tech: ['Flutter', 'Node.js', 'MongoDB', 'Express.js'],
    deviceType: 'phone',
    hasIframe: false,
  },
  // {
  //   id: 'naf-garments',
  //   title: 'Naf Garments',
  //   description:
  //     'Built an e-commerce platform with a desktop-accessible admin panel and RBAC for Wholesalers & Retailers.',
  //   tech: ['Flutter', 'Node.js', 'MongoDB', 'Express.js'],
  //   deviceType: 'phone',
  //   // liveUrl: 'https://play.google.com/store/apps/details?id=com.naf.naf_garments',
  //   hasIframe: false,
  // },
  {
    id: 'sitarabucks',
    title: 'Sitarabucks',
    description:
      'Dynamic PHP and MySQL-based online coffee shop POS simulation with full-stack functionality.',
    tech: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript', 'TailwindCSS'],
    deviceType: 'laptop',
    liveUrl: 'https://aquibk500.infinityfreeapp.com/Sitarabucks/index.php',
    githubUrl: 'https://github.com/Shadab-2604/Sitarabucks-PHP',
    hasIframe: true,
  },
  {
    id: 'webroom',
    title: 'Webroom',
    description:
      'A full-stack E-Learning platform for colleges and Universities, featuring an AI Mentor, WebRTC-powered private video Conferences (Live Lectures), and AI Tests for students.',
    tech: ['React.js', 'Node.js', 'Express', 'MongoDB'],
    deviceType: 'laptop',
    liveUrl:'https://final-year-project-chi-six.vercel.app/',
    githubUrl: 'https://github.com/syedkumailraza2/Almighty-verse_CodeBug2025',
    hasIframe: true,
  },
];

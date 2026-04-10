import { useScrollReveal } from '../hooks/useScrollReveal';

const experience = {
  role: 'Founding Engineer (SDE-1)',
  company: 'Powersmy.biz',
  period: 'Apr 2025 – Present',
  location: 'Ballari, India',
  points: [
    'Built a scalable Ed-Tech mobile app using Flutter and BLoC architecture',
    'Integrated AI features and WebSocket-based real-time communication for low-latency interactions',
    'Maintained 95% crash-free user rate using Firebase Crashlytics',
    'Scaled system to support 150+ concurrent active sessions with stable performance',
    'Used Microsoft Clarity to analyze user behavior and improve engagement',
    'Implemented CI/CD using GitHub Actions for automated builds and deployment',
    'Deployed application on Google Play Store',
    'Contributed to backend development using FastAPI',
  ],
};

export default function Experience() {
  const ref = useScrollReveal<HTMLDivElement>({ stagger: 0.1 });

  return (
    <section id="experience" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-black mb-16">
          Experience
        </h2>

        <div ref={ref}>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-6">
            <div>
              <h3 className="text-xl font-bold text-[#1a1a1a]">
                {experience.role}
              </h3>
              <p className="text-base text-muted font-medium">
                {experience.company}
              </p>
            </div>
            <div className="sm:text-right">
              <p className="text-sm text-[#1a1a1a] font-medium">
                {experience.period}
              </p>
              <p className="text-sm text-muted">
                {experience.location}
              </p>
            </div>
          </div>

          <ul className="space-y-3">
            {experience.points.map((point, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-[15px] text-[#1a1a1a] leading-relaxed"
              >
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

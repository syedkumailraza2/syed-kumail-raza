import { skillCategories } from '../data/skills';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Skills() {
  const ref = useScrollReveal<HTMLDivElement>({ stagger: 0.15 });

  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-black mb-16">
          Skills
        </h2>

        <div ref={ref} className="grid sm:grid-cols-2 gap-12">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-xs uppercase tracking-[0.15em] text-muted font-medium mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm bg-accent/10 text-[#1a1a1a] rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

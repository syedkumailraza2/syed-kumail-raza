import { Github, Linkedin, Twitter } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Footer() {
  const ctaRef = useScrollReveal<HTMLDivElement>();

  return (
    <footer id="contact" className="pt-24 pb-8 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Contact CTA */}
        <div ref={ctaRef} className="mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-6">
            Let's work together.
          </h2>
          <a
            href="mailto:syedkumailraza28@gmail.com"
            className="text-xl md:text-3xl text-muted hover:text-[#1a1a1a] transition-colors link-hover pb-1 inline-block"
          >
            syedkumailraza28@gmail.com
          </a>
        </div>

        {/* Footer bar */}
        <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Syed Kumail Raza
          </p>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/syedkumailraza2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-[#1a1a1a] transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/syedkumailraza/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-[#1a1a1a] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://x.com/kumail_raza11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-[#1a1a1a] transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

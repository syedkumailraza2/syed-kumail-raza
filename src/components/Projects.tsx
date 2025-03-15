
import React, { useState } from "react";
import { Github, ExternalLink } from "lucide-react";

// Define the valid project categories
type ProjectCategory = "App Projects" | "Backend Projects" | "Web Projects";

// Project Data
const projects: Record<ProjectCategory, Array<{
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo?: string;  // Optional demo link
}>> = {
  "App Projects": [
    {
      title: "Mychat",
      description: "A 1:1 chatting and video calling app. Integrated WebRTC for seamless video communication and WebSockets for real-time messaging.",
      image: "mychat.png",
      tech: ["Flutter", "Node.js", "MongoDB", "Express.js"],
      github: "https://github.com/Shadab-2604/Backend-PR/tree/main/Beginner/weather-api",
    },
    {
      title: "Naf Garments",
      description: "Built an e-commerce platform with a desktop-accessible admin panel and RBAC for Wholesalers & Retailers.",
      image: "banner.png",
      tech: ["Flutter", "Node.js", "MongoDB", "Express.js"],
      github: "https://github.com/Shadab-2604/Backend-PR/tree/main/Beginner/weather-api",
      demo: "https://weather-api-bnr2.onrender.com"
    }
  ],
  "Backend Projects": [
    {
      title: "DNS Server",
      description: "Built a DNS server using Node.js with UDP protocol for domain name resolution.",
      image: "web.png",
      tech: ["Node.js","UDP"],
      github: "https://github.com/syedkumailraza2/Almighty-verse_CodeBug2025"
    }
  ],
  "Web Projects": [
    {
      title: "Sitarabucks - Fullstack Cafe Website",
      description: "Dynamic PHP and MySQL-based online coffee shop simulation.",
      image: "sitarabucks.png",
      tech: ["PHP", "MySQL", "HTML/CSS", "JavaScript", "TailwindCSS"],
      github: "https://github.com/Shadab-2604/Sitarabucks-PHP",
      demo: "https://aquibk500.infinityfreeapp.com/Sitarabucks/index.php"
    },
    {
      title: "Webroom",
      description: "A full-stack social media platform for college students, featuring an AI Mentor, WebRTC-powered private video calls, and project partnerships for real-time collaboration.",
      image: "web.png",
      tech: ["React.js", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/syedkumailraza2/Almighty-verse_CodeBug2025"
    }
  ]
};

const Projects: React.FC = () => {
  // State for the selected category
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("App Projects");

  // Handle category selection
  const handleCategoryChange = (category: string) => {
    if (category in projects) {
      setSelectedCategory(category as ProjectCategory);
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          Featured Projects
        </h2>

        {/* Category Selection Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          {Object.keys(projects).map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition ${
                selectedCategory === category ? "bg-indigo-600 dark:bg-indigo-400 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects[selectedCategory].map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

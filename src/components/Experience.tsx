import React from 'react';
import { Calendar, Award } from 'lucide-react';

const experiences = [
  {
    "title": "Founding Engineer",
    "company": "Powersmy.biz",
    "period": "April 2025 - Present",  
    "description": "Developed an Ed-Tech platform using Flutter, FastAPI and Lead a team of 4-5 people.",
    "achievements": [
        "Created real-world problem-solving AI Powered Ed-tech Platform",
        "Lead a team of 4-5 people."
    ]
},

  {
    "title": "Flutter Developer",
    "company": "Freelance",
    "period": "July 2024 - February 2025",  
    "description": "Developed full-stack mobile applications using Flutter and Node.js.",
    "achievements": [
        "Created real-world problem-solving applications for business owners.",
        "Managed projects efficiently."
    ]
},

  {
    title: "Generative AI Intern",
    company: "TCR Innovation",
    period: "Oct 2024 - Dec 2024", // Extracted from resume
    description: "Utilized Pandas for data preprocessing, optimization, and feature engineering to support AI model development.",
    achievements: [
      "Developed an intelligent chatbot system", // New achievement
      "Implemented natural language processing features", // New achievement
      "Collaborated with cross-functional teams" // New achievement
    ]
  },

  {
    title: "Dot Net Developer Intern",
    company: "Equitec Technology for Finance",
    period: "May 2024 - July 2024", // No period in resume
    description: "Developed FullStack Websites using ASP .Net core and Dapper ORM.",
    achievements: [
      "Showcased skills in web development, teamwork, and creative problem-solving"
    ]
  },
 
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Experience
        </h2>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[11px] top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-indigo-600 dark:bg-indigo-400 border-4 border-white dark:border-gray-800" />

              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md ml-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {exp.title}
                </h3>
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">{exp.company}</span>
                  <span>{exp.period}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {exp.description}
                </p>
                <div className="space-y-2">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <div
                      key={achievementIndex}
                      className="flex items-start"
                    >
                      <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
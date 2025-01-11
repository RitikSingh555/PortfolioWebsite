import React from 'react';
import { Calendar, MapPin, Building, GraduationCap, Trophy } from 'lucide-react';

// Existing ExperienceCard and Experience components remain the same...
const ExperienceCard = ({ role, company, location, duration, points }) => (
  <div className="bg-gray-900 rounded-lg p-6 mb-6 border border-gray-800 transform hover:scale-[1.01] transition-transform">
    <h3 className="text-xl font-semibold text-white mb-2">{role}</h3>
    <div className="flex flex-col sm:flex-row gap-4 mb-4 text-gray-400">
      <div className="flex items-center gap-2">
        <Building size={16} />
        <span>{company}</span>
      </div>
      <div className="flex items-center gap-2">
        <MapPin size={16} />
        <span>{location}</span>
      </div>
      <div className="flex items-center gap-2">
        <Calendar size={16} />
        <span>{duration}</span>
      </div>
    </div>
    <ul className="list-disc ml-4 space-y-2 text-gray-300">
      {points.map((point, index) => (
        <li key={index} className="pl-2">{point}</li>
      ))}
    </ul>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      role: "PGET",
      company: "HCL Software",
      location: "Bangalore, India",
      duration: "Nov 2023 – Present",
      points: [
        "Developed frontend for Android STB using React, Redux, Tailwind; created dashboards, device search, and role-based action pages.",
        "Built backend REST API with Spring Boot to handle user requests and communicate with STB devices.",
        "Implemented multithreading for handling concurrent requests, ensuring scalability and performance.",
        "Utilized MQTT for efficient communication with STB devices, sending commands and receiving statuses.",
        "Stored and retrieved large volumes of data in ClickHouse for real-time analytics.",
        "Configured and deployed applications on AWS EC2 instances",
        "Set up Nginx as a reverse proxy and web server to serve the React frontend and Spring Boot backend applications."
      ]
    },
    {
      role: "Software Development Engineer",
      company: "VIA.COM (EBIX TRAVELS PRIVATE LIMITED)",
      location: "Noida, India",
      duration: "Jun 2021 – Oct 2021",
      points: [
        "Developed and maintained RESTful APIs using Spring Boot for booking and payment processes.",
        "Integrated third-party APIs for real-time flight information.",
        "Enhanced the booking platform's UI using React, adding components for better user experience.",
        "Collaborated with the team to ensure seamless integration of backend services with the frontend application.",
        "Delivered features and enhancements within the set timelines, contributing to overall project success."
      ]
    }
  ];

  return (
    <div className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 border-b border-gray-800 pb-4">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </div>
  );
};

// New Education Component
const EducationCard = ({ degree, institution, location, duration, cgpa }) => (
  <div className="bg-gray-900 rounded-lg p-6 mb-6 border border-gray-800 transform hover:scale-[1.01] transition-transform">
    <h3 className="text-xl font-semibold text-white mb-2">{degree}</h3>
    <div className="flex flex-col sm:flex-row gap-4 mb-4 text-gray-400">
      <div className="flex items-center gap-2">
        <GraduationCap size={16} />
        <span>{institution}</span>
      </div>
      <div className="flex items-center gap-2">
        <MapPin size={16} />
        <span>{location}</span>
      </div>
      <div className="flex items-center gap-2">
        <Calendar size={16} />
        <span>{duration}</span>
      </div>
    </div>
    <div className="text-gray-300">
      CGPA: {cgpa}
    </div>
  </div>
);

const Education = () => {
  const educations = [
    {
      degree: "M.Tech in Computer Science and Engineering",
      institution: "Netaji Shubhas University of Technology",
      location: "Delhi, India",
      duration: "Oct 2021 – July 2023",
      cgpa: "7.3"
    },
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Lovely Professional University",
      location: "Punjab, India",
      duration: "Aug 2017 – May 2021",
      cgpa: "7.58"
    }
  ];

  return (
    <div className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 border-b border-gray-800 pb-4">Education</h2>
        <div className="space-y-6">
          {educations.map((edu, index) => (
            <EducationCard key={index} {...edu} />
          ))}
        </div>
      </div>
    </div>
  );
};

// New Achievements Component
const Achievements = () => {
  const achievements = [
    "Cleared GATE 2021",
    "Qualified JEE Main 2017"
  ];

  return (
    <div className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 border-b border-gray-800 pb-4">Achievements</h2>
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
          <ul className="space-y-4">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-300">
                <Trophy size={20} className="text-yellow-500" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Updated SkillCard and Skills components with your new skills
const SkillCard = ({ category, skills }) => (
  <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 transform hover:scale-[1.01] transition-transform">
    <h3 className="text-xl font-semibold text-white mb-4">{category}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 transition-colors"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillsets = [
    {
      category: "Programming Languages",
      skills: ["Java", "Python", "JavaScript"]
    },
    {
      category: "Front-end Technologies",
      skills: ["React", "Redux", "HTML", "CSS", "Tailwind CSS"]
    },
    {
      category: "Back-end Technologies",
      skills: ["Spring Boot", "REST APIs", "Multithreading", "Thread Pool"]
    },
    {
      category: "Databases",
      skills: ["MySQL", "PostgreSQL", "ClickHouse"]
    },
    {
      category: "Messaging Systems",
      skills: ["Kafka", "MQTT"]
    },
    {
      category: "Cloud and DevOps",
      skills: ["AWS (EC2)", "Nginx", "Docker"]
    },
    {
      category: "Version Control and CI/CD",
      skills: ["Git", "GitHub Actions"]
    },
    {
      category: "Development Tools",
      skills: ["VS Code", "Eclipse", "IntelliJ IDEA", "PyCharm", "Postman", "Jupyter Notebook"]
    }
  ];

  return (
    <div className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 border-b border-gray-800 pb-4">Skills</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {skillsets.map((skillset, index) => (
            <SkillCard key={index} {...skillset} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default function ExperienceAndSkills() {
  return (
    <>
      <Experience />
      <Education />
      <Achievements />
      <Skills />
    </>
  );
}

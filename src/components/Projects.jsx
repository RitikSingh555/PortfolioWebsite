import React, { useState } from "react";
import { Github,  ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';
// import { ExternalLink } from 'lucide-react';
import HomePricePrediction from '../assets/HomePricePrediction.png';
import QuizApp from '../assets/QuizApp.png';
import Portfollio from '../assets/Portfollio.png';

const projects = [
  {
    id: 1,
    name: "Home Price Prediction",
    description: "An end-to-end application designed to estimate house prices...",
    technologies: ["React", "Flask", "Machine Learning", "Python", "TailwindCSS"],
    mainTech: ["React", "Flask", "Python"],
    image: HomePricePrediction,
    github: "https://github.com/RitikSingh555/Home-Price-Prediction",
    demo: "https://home-price-prediction-three.vercel.app/",
    hasDemo: true,
    keyFeatures: [
      "Interactive web interface",
      "ML model integration",
      "Real-time predictions",
      "Responsive design"
    ]
  },
  {
    id: 2,
    name: "Portfolio Website",
    description: "A sleek and modern portfolio showcasing my skills...",
    technologies: ["React", "TailwindCSS", "TypeScript", "Vercel"],
    mainTech: ["React", "TailwindCSS", "TypeScript"],
    image: Portfollio,
    github: "https://github.com/RitikSingh555/PortfolioWebsite",
    demo: "https://portfolio-website.vercel.app/",
    hasDemo: true,
    keyFeatures: [
      "Showcases projects",
      "Responsive design",
      "Optimized performance"
    ]
  },
  {
    id: 3,
    name: "QuizApp",
    description: "A dynamic quiz application...",
    technologies: ["Spring Boot", "MySQL", "REST API"],
    mainTech: ["Spring Boot", "MySQL", "Java"],
    image: QuizApp,
    github: "https://github.com/RitikSingh555/QuizApp",
    demo: "",
    hasDemo: false,
    keyFeatures: [
      "Dynamic quiz creation",
      "Unique quiz ID",
      "REST API integration"
    ]
  },
  {
    id: 4,
    name: "E-Commerce Full Stack",
    description: "A Spring Boot monolithic e-commerce admin panel...",
    technologies: ["React", "Spring Boot", "MySQL", "Java", "Hibernate"],
    mainTech: ["React", "Spring Boot", "MySQL", "Hibernate"],
    image: null,
    github: "https://github.com/RitikSingh555/ecommerce-project",
    demo: "",
    hasDemo: false,
    keyFeatures: [
      "Admin dashboard",
      "Order lifecycle",
      "Payment system",
      "Shipment tracking"
    ]
  },
  {
    id: 5,
    name: "Spring Core Learning Project",
    description: "A hands-on project to understand IoC, Dependency Injection, Bean Lifecycle, and Autowiring in Spring.",
    technologies: ["Java", "Spring Core", "Maven", "XML", "Annotations"],
    mainTech: ["Spring Core", "Java", "Maven"],
    image: null,
    github: "https://github.com/RitikSingh555/CoreSpring",
    demo: "",
    hasDemo: false,
    keyFeatures: [
      "IoC and Dependency Injection",
      "Bean lifecycle methods",
      "Autowiring (byName, byType, constructor)",
      "XML & annotation config",
      "Loose coupling"
    ]
  },
  {
  id: 6,
  name: "Spring JDBC",
  description: "A Spring JDBC based CRUD application demonstrating simplified database interaction using JdbcTemplate and the DAO Design Pattern to perform operations on a Student database.",
  technologies: ["Java", "Spring Core", "Spring JDBC", "Maven", "MySQL", "JdbcTemplate", "DAO Pattern"],
  mainTech: ["Spring JDBC", "MySQL", "Java"],
  image: null,
  github: "https://github.com/RitikSingh555/Spring-JDBC",
  demo: "",
  hasDemo: false,
  keyFeatures: [
    "CRUD operations on Student database",
    "JdbcTemplate for simplified DB access",
    "DAO Design Pattern",
    "RowMapper implementation",
    "XML & Annotation-based configuration",
    "MySQL integration"
  ]
}
];

const TechBadge = ({ tech }) => (
  <span className="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded-full">
    {tech}
  </span>
);

/* 🔥 Dynamic Icon + Label Logic */
const getProjectVisual = (project) => {
  const name = project.name.toLowerCase();

  if (name.includes("e-commerce")) return { icon: "🛒", label: "E-COMMERCE", gradient: "from-purple-900 via-pink-800 to-purple-900" };
  if (name.includes("jdbc"))    return { icon: "🗄️", label: "SPRING JDBC", gradient: "from-yellow-900 via-amber-700 to-blue-800" };
  if (name.includes("spring"))     return { icon: "🧩", label: "SPRING CORE", gradient: "from-green-900 via-green-700 to-emerald-800" };
  if (name.includes("quiz"))       return { icon: "❓", label: "QUIZ APP",    gradient: "from-yellow-900 via-amber-700 to-yellow-800" };
  if (name.includes("portfolio"))  return { icon: "💼", label: "PORTFOLIO",   gradient: "from-blue-900 via-indigo-800 to-blue-900" };
  if (name.includes("price"))      return { icon: "🏠", label: "ML PROJECT",  gradient: "from-rose-900 via-red-800 to-rose-900" };

  return { icon: "📦", label: "PROJECT", gradient: "from-blue-900 via-blue-800 to-indigo-900" };
};

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const visual = getProjectVisual(project);

  return (
    <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 flex flex-col h-full">

      {project.image ? (
        <img
          src={project.image}
          alt={project.name}
          className="rounded-lg mb-4 w-full h-48 object-cover"
        />
      ) : (
<div className={`rounded-lg mb-4 w-full h-48 flex flex-col items-center justify-center bg-gradient-to-br ${visual.gradient}`}>
          <span className="text-5xl mb-2">{visual.icon}</span>
          <span className="text-xs text-blue-300 tracking-widest font-medium">
            {visual.label}
          </span>
        </div>
      )}

      <h3 className="text-2xl font-bold mb-2">{project.name}</h3>

      <p className={`text-gray-400 mb-4 ${isExpanded ? '' : 'line-clamp-2'}`}>
        {project.description}
      </p>

      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {project.mainTech.map((tech, index) => (
            <TechBadge key={index} tech={tech} />
          ))}
        </div>
      </div>

      <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">All Technologies:</h4>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <TechBadge key={index} tech={tech} />
            ))}
          </div>

          <h4 className="text-lg font-semibold mb-2">Key Features:</h4>
          <ul className="list-disc list-inside text-gray-400">
            {project.keyFeatures.map((feature, index) => (
              <li key={index} className="mb-1">{feature}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="space-y-4 mt-auto">
        <div className="flex gap-4">
          <a
            href={project.github}
            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={18} />
            GitHub
          </a>

          {/* {project.hasDemo && (
            <a
              href={project.demo}
              className="flex items-center gap-2 bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )} */}
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-center gap-2 text-gray-400 hover:text-white"
        >
          {isExpanded ? (
            <>Show Less <ChevronUp size={20} /></>
          ) : (
            <>Read More <ChevronDown size={20} /></>
          )}
        </button>
      </div>
    </div>
  );
};

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;
  const maxIndex = projects.length - visibleCount;

  const visibleProjects = projects.slice(currentIndex, currentIndex + visibleCount);

  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setCurrentIndex(i => Math.max(i - 1, 0))}
            disabled={currentIndex === 0}
            className="w-10 h-10 rounded-full bg-gray-800 disabled:opacity-30 flex items-center justify-center"
          >
            <ChevronLeft size={22} />
          </button>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <button
            onClick={() => setCurrentIndex(i => Math.min(i + 1, maxIndex))}
            disabled={currentIndex >= maxIndex}
            className="w-10 h-10 rounded-full bg-gray-800 disabled:opacity-30 flex items-center justify-center"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
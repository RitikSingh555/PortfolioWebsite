import React, { useState } from "react";
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import HomePricePrediction from '../assets/HomePricePrediction.png';
import QuizApp from '../assets/QuizApp.png';
import Portfollio from '../assets/Portfollio.png';


const projects = [
  {
    id: 1,
    name: "Home Price Prediction",
    description: "An end-to-end application designed to estimate house prices based on various features such as location, size, number of bathrooms, and total area. The application integrates a machine learning model with a web-based interface to provide an interactive and seamless user experience.",
    technologies: ["React", "Flask", "Machine Learning", "Python", "TailwindCSS"],
    mainTech: ["React", "Flask", "Python"],
    image: HomePricePrediction,
    github: "https://github.com/RitikSingh555/Home-Price-Prediction",
    demo: "https://home-price-prediction-three.vercel.app/",
    keyFeatures: [
      "Interactive web interface for input collection",
      "Machine learning model integration",
      "Real-time price predictions",
      "Responsive design",
      "Flask server deployment"
    ]
  },
  {
    id: 2,
    name: "Portfolio Website",
    description: "A sleek and modern portfolio showcasing my skills, projects, and achievements. Built with React, TailwindCSS, and TypeScript, this responsive application emphasizes clean design and easy navigation. Deployed on Vercel for fast and seamless access.",
    technologies: ["React", "TailwindCSS", "TypeScript", "Vercel"],
    mainTech: ["React", "TailwindCSS", "TypeScript"],
    //image: "/api/placeholder/800/600",
    image: Portfollio,
    github: "https://github.com/RitikSingh555/PortfolioWebsite",
    demo: "https://portfolio-website-bi0xzzh2t-ritik-singhs-projects-bb671071.vercel.app/",
    keyFeatures: [
      "Showcases my projects and achievements",
      "Responsive and modern design",
      "Optimized performance and fast load times",
      "Built with TypeScript for strong type safety",
      "Deployed on Vercel for reliability"
    ]
  },
  {
    id: 3,
    name: "QuizApp",
    description: "A dynamic quiz application that allows administrators to create quizzes by specifying the number of questions and categories. Users can participate by requesting quizzes using unique IDs and filtering questions by type. Designed for educational and interactive learning purposes.",
    technologies: ["Spring Boot", "MySQL", "REST API"],
    mainTech: ["Spring Boot", "MySQL", "Java"],
    //image: "/api/placeholder/800/600",
    image: QuizApp,
    github: "https://github.com/RitikSingh555/QuizApp",
    demo: "https://quizapp-demo.vercel.app/",
    keyFeatures: [
      "Dynamic quiz creation by administrators",
      "Unique quiz ID generation",
      "User-friendly interface for quiz participation",
      "RESTful API integration",
      "MySQL for robust data storage"
    ]
  }
];

const TechBadge = ({ tech }) => (
  <span className="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded-full">
    {tech}
  </span>
);

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
      <img 
        src={project.image} 
        alt={project.name} 
        className="rounded-lg mb-4 w-full h-48 object-cover"
      />
      
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
      
      <div className="space-y-4">
        <div className="flex gap-4">
          <a 
            href={project.github} 
            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-full transition-colors"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Github size={18} />
            GitHub
          </a>
          <a 
            href={project.demo} 
            className="flex items-center gap-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white px-4 py-2 rounded-full transition-colors"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <ExternalLink size={18} />
            Live Demo
          </a>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          {isExpanded ? (
            <>
              Show Less <ChevronUp size={20} />
            </>
          ) : (
            <>
              Read More <ChevronDown size={20} />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

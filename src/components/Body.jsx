import React from 'react';
import ProfilePhoto from '../assets/Selfie.jpeg';
import LinkedInPhoto from '../assets/LinkedIn icon.png';
//import { InstagramPhoto } from '../utils/socialLinks';
import GithubPhoto from '../assets/Github icon.png';

const Body = () => {
  const socialLinks = {
    github: {
      url: "https://github.com/RitikSingh555",
      icon: GithubPhoto
    },
    linkedin: {
      url: "https://www.linkedin.com/in/ritik-singh-9471ab14b/",
      icon: LinkedInPhoto
    },
    instagram: {
      url: "https://www.instagram.com/rit__ikofficial/",
      //icon: InstagramPhoto
      icon: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Instagram_logo.png'
    }
  };

  const handleResumeClick = () => {
    window.open('https://drive.google.com/file/d/10lVYSLsk3B2vZxUo47TYmpWBa9AdezcK/view?usp=sharing', '_blank');
  };

  return (
    <div className="bg-black text-white text-center py-16">
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <div className="animate-fadeIn">
        <img 
          src={ProfilePhoto}
          alt="Profile" 
          className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-all duration-500 hover:scale-110 hover:rotate-6 animate-float shadow-lg hover:shadow-xl"
        />
      </div>
      
      <div className="space-y-4 animate-slideUp">
        <h1 className="text-4xl font-bold animate-slideFromLeft">
          <span className="inline-block animate-waving-hand text-4xl mb-2">Hi 👋</span>
          <br />
          I'm{" "}
          <span className="bg-gradient-to-r from-pink-400 to-yellow-500 text-transparent bg-clip-text animate-gradient">
            Ritik Kumar Singh
          </span>
          , Full Stack Developer
        </h1>
        
        <p className="mt-4 text-lg text-gray-300 animate-fadeIn opacity-0 animation-delay-500">
          I specialise in building modern and responsive web applications. 
        </p>
      </div>

      <div className="mt-8 flex justify-center space-x-6 animate-slideUp animation-delay-700">
        {/* Social Links with hover animations */}
        {Object.entries(socialLinks).map(([platform, { url, icon }], index) => (
          <a 
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 opacity-0 animate-fadeIn`}
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <img 
              src={icon}
              alt={platform}
              className="w-12 h-12 rounded-full hover:shadow-lg transition-shadow duration-300"
            />
          </a>
        ))}
        
        {/* Resume Button with animation */}
        <button
          onClick={handleResumeClick}
          className="bg-gradient-to-r from-pink-400 to-yellow-500 text-white hidden md:inline transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 px-4 py-2 rounded-full animate-bounce animation-delay-1000 shadow-lg hover:shadow-xl"
        >
          Resume
        </button>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        @keyframes slideFromLeft {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes waving {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }

        .animate-waving-hand {
          animation: waving 2.5s ease-in-out infinite;
          transform-origin: 70% 70%;
          display: inline-block;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 6s linear infinite;
        }

        .animate-slideFromLeft {
          animation: slideFromLeft 1s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 1s ease-out forwards;
        }

        .animation-delay-500 {
          animation-delay: 500ms;
        }

        .animation-delay-700 {
          animation-delay: 700ms;
        }

        .animation-delay-1000 {
          animation-delay: 1000ms;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
      <br>
      </br>
      <br></br>
    </div>
  );
};

export default Body;
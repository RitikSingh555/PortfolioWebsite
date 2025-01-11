import React from 'react';
import ProfilePhoto from '../assets/Selfie.jpeg';
import ExperienceAndSkills from './Skills';

const About = () => {
  return (
    <section className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Profile Image */}
          <div className="relative group">
            <div className="w-56 h-56 rounded-full p-1 bg-gradient-to-r from-green-400 to-blue-500">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-black">
                <img
                  src={ProfilePhoto}
                  alt="Profile"
                  className="w-full h-full object-cover transform transition-all duration-300 group-hover:scale-105"
                />
              </div>
            </div>
            {/* Subtle glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-blue-500 opacity-20 blur-lg -z-10"></div>
          </div>

          {/* Content Container */}
          <div className="flex-1 space-y-12">
            {/* About Text */}
            <div className="max-w-2xl">
              <p className="text-lg leading-relaxed text-gray-300">
                I am a passionate full-stack developer with a focus on building modern and responsive web applications.
                With a strong foundation in both frontend and backend technologies, I strive to create seamless and
                efficient user experiences. My approach combines technical expertise with creative problem-solving
                to deliver solutions that exceed client expectations.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Technologies Mastered */}
              <div className="p-6 rounded-xl bg-gray-900/50 hover:bg-gray-900 transition-colors duration-300 border border-gray-800">
                <h3 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  10+
                </h3>
                <p className="text-gray-400">Technologies Mastered</p>
              </div>

              {/* Certifications */}
              <div className="p-6 rounded-xl bg-gray-900/50 hover:bg-gray-900 transition-colors duration-300 border border-gray-800">
                <h3 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  3+
                </h3>
                <p className="text-gray-400">Professional Certifications</p>
              </div>

              {/* Active Contributions */}
              <div className="p-6 rounded-xl bg-gray-900/50 hover:bg-gray-900 transition-colors duration-300 border border-gray-800">
                <h3 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  10+
                </h3>
                <p className="text-gray-400">Active Contributions to Open Source</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ExperienceAndSkills />
    </section>
  );
};

export default About;

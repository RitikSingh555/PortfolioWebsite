import React, { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp, Award, Code } from 'lucide-react';

const certifications = [
  {
    id: 1,
    name: "Data Structures in C++",
    organization: "Coding Ninjas",
    date: "2023",
    credentialLink: "https://students.codingninjas.com/verify/91df1afb1228811e", // Add your credential link here
    skills: ["Data Structures", "C++", "Algorithms", "Problem Solving"],
    description: "Comprehensive course covering fundamental and advanced data structures implementation in C++, including arrays, linked lists, trees, graphs, and various algorithms."
  },
  {
    id: 2,
    name: "Data Science and Machine Learning",
    organization: "Coding Ninjas",
    date: "2023",
    credentialLink: "https://students.codingninjas.com/verify/91df1afb1228811e", // Add your credential link here
    skills: ["Python", "Machine Learning", "Data Analysis", "Statistics"],
    description: "In-depth training in data science fundamentals, machine learning algorithms, statistical analysis, and practical implementation of ML models."
  },
  {
    id: 3,
    name: "Programmong In Java",
    organization: "NPTEL",
    date: "2019",
    credentialLink: "https://drive.google.com/file/d/1hzY1K-RrddDKAKrmZt2HCheBGLGMu9h8/view", // Add your credential link here
    skills: ["Java, Collections, Spring"],
    description: "In-depth training in core Java, Collections, Multithreading, Jdbc, Hibernate and Spring"
  }
];

const codingProfiles = [
  {
    id: 1,
    platform: "LeetCode",
    username: "Ritik_singh209",
    url: "https://leetcode.com/u/Ritik_singh209/",
    icon: Code
  },
  {
    id: 2,
    platform: "GeeksForGeeks",
    username: "singhritik209",
    url: "https://www.geeksforgeeks.org/user/singhritik209/",
    icon: Code
  }
];

const SkillBadge = ({ skill }) => (
  <span className="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded-full">
    {skill}
  </span>
);

const CertificationCard = ({ certification }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold">{certification.name}</h3>
          <p className="text-gray-400">{certification.organization}</p>
          <p className="text-gray-500">{certification.date}</p>
        </div>
        <Award className="text-blue-400" size={24} />
      </div>

      <p className={`text-gray-400 mb-4 ${isExpanded ? '' : 'line-clamp-2'}`}>
        {certification.description}
      </p>

      <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">Skills Covered:</h4>
          <div className="flex flex-wrap gap-2">
            {certification.skills.map((skill, index) => (
              <SkillBadge key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <a 
          href={certification.credentialLink}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white px-4 py-2 rounded-full transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink size={18} />
          View Certificate
        </a>

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

const ProfileCard = ({ profile }) => {
  const Icon = profile.icon;
  return (
    <a 
      href={profile.url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-between"
    >
      <div className="flex items-center gap-4">
        <Icon size={24} className="text-blue-400" />
        <div>
          <h3 className="text-xl font-bold">{profile.platform}</h3>
          <p className="text-gray-400">@{profile.username}</p>
        </div>
      </div>
      <ExternalLink size={20} className="text-gray-400" />
    </a>
  );
};

const Certifications = () => {
  return (
    <div className="bg-black text-white py-20" id="certifications">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Certifications & Coding Profiles</h2>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert) => (
              <CertificationCard key={cert.id} certification={cert} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8">Coding Profiles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {codingProfiles.map((profile) => (
              <ProfileCard key={profile.id} profile={profile} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
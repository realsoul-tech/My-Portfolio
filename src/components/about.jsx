import React from 'react';
import { FaUserGraduate, FaLaptopCode, FaNetworkWired, FaUniversity, FaAward, FaLightbulb } from 'react-icons/fa';

const About = () => {
  const skillsOverview = [
    {
      icon: <FaLaptopCode />,
      title: 'Software Development',
      description: 'Full-stack development with modern technologies',
      items: ['React', 'Spring Boot', 'Node.js', 'MySQL']
    },
    {
      icon: <FaNetworkWired />,
      title: 'Networking',
      description: 'Network design and administration',
      items: ['CCNA', 'TCP/IP', 'Network Security', 'Cisco']
    },
    {
      icon: <FaUniversity />,
      title: 'Academic Excellence',
      description: 'Strong academic foundation',
      items: ['3.20 GPA', 'Research Projects', 'Technical Papers', 'Leadership']
    }
  ];

  const achievements = [
    {
      icon: <FaAward />,
      title: 'Academic Scholar',
      description: 'Consistent Dean\'s List achiever'
    },
    {
      icon: <FaLightbulb />,
      title: 'Project Innovator',
      description: 'Multiple award-winning projects'
    },
    {
      icon: <FaNetworkWired />,
      title: 'Cisco Certified',
      description: 'CCNA Routing & Switching'
    }
  ];

  return (
    <section id="about" className="py-16 bg-gradient-to-br from-blue-50 via-blue-50/80 to-indigo-50/90 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaUserGraduate className="text-3xl text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-800">About Me</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know the IT student behind the code
          </p>
        </div>

        {/* Main About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Text Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Information Technology Student & Developer
            </h3>
            
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                I am a Level 400 Information Technology student at Takoradi Technical University, 
                specializing in Computer Networking with a strong passion for software development. 
                My journey in technology combines academic excellence with practical implementation.
              </p>
              
              <p className="leading-relaxed">
                With hands-on experience in both networking infrastructure and full-stack development, 
                I bridge the gap between network operations and software solutions. My projects 
                demonstrate this unique intersection of skills.
              </p>
              
              <p className="leading-relaxed">
                Currently preparing for my final year project, I'm focused on developing innovative 
                solutions that address real-world challenges in network security and application 
                development.
              </p>
            </div>

            {/* Quote */}
            <div className="mt-8 p-6 bg-white/80 backdrop-blur-sm rounded-xl border-l-4 border-blue-500 shadow-lg">
              <blockquote className="text-lg italic text-gray-700">
                "Technology is best when it brings people together and solves real problems. 
                As an IT student, I strive to create solutions that make a difference."
              </blockquote>
            </div>
          </div>

          {/* Right Column - Profile Card */}
          <div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl border border-blue-100 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                <h4 className="text-xl font-bold text-white">Student Profile</h4>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-blue-100">
                    <span className="text-gray-600 font-medium">University:</span>
                    <span className="text-gray-800 font-semibold mt-1 sm:mt-0">Takoradi Technical University</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-blue-100">
                    <span className="text-gray-600 font-medium">Program:</span>
                    <span className="text-gray-800 font-semibold mt-1 sm:mt-0">B.Tech Information Technology</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-blue-100">
                    <span className="text-gray-600 font-medium">Level:</span>
                    <span className="inline-flex items-center justify-center px-4 py-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-full text-sm mt-1 sm:mt-0 shadow-md">
                      400
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-blue-100">
                    <span className="text-gray-600 font-medium">Graduation:</span>
                    <span className="text-gray-800 font-semibold mt-1 sm:mt-0">September 2026</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="text-gray-600 font-medium">Specialization:</span>
                    <span className="text-blue-600 font-bold mt-1 sm:mt-0">Computer Networking</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Overview */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            My Technical Focus Areas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillsOverview.map((skill, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl mb-4 mx-auto">
                  <div className="text-2xl text-blue-600">
                    {skill.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-800 text-center mb-2">{skill.title}</h4>
                <p className="text-gray-600 text-center mb-4">{skill.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skill.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-100 rounded-full text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Key Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg flex items-center justify-center shadow-sm">
                      <div className="text-xl text-blue-600">
                        {achievement.icon}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-1">{achievement.title}</h4>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Goals */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 border border-blue-200 shadow-lg">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Career Goals
          </h3>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mt-2 shadow-md"></div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">Network Security Specialist</h4>
                <p className="text-gray-600">Focus on securing network infrastructure and preventing cyber threats</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mt-2 shadow-md"></div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">Full-Stack Developer</h4>
                <p className="text-gray-600">Build scalable applications with modern technologies</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mt-2 shadow-md"></div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">Technical Consultant</h4>
                <p className="text-gray-600">Bridge the gap between business needs and technical solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React, { useState, useEffect } from 'react';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaNetworkWired, 
  FaCode, 
  FaGraduationCap,
  FaFilter,
  FaJava,
  FaReact,
  FaDatabase
} from 'react-icons/fa';
import { SiSpringboot, SiMysql } from 'react-icons/si';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  // Sample projects data - in real app, fetch from API
  const sampleProjects = [
    {
      id: 1,
      title: 'Network Monitoring Dashboard',
      description: 'A real-time network monitoring system that tracks network traffic, device status, and performance metrics. Built with Java Spring Boot for the backend and React for the frontend.',
      technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'Socket.IO'],
      projectType: 'networking',
      githubUrl: 'https://github.com/yourusername/network-monitor',
      liveUrl: null,
      imageUrl: null,
      features: [
        'Real-time network traffic monitoring',
        'Device status tracking',
        'Performance metrics dashboard',
        'Alert system for anomalies'
      ]
    },
    {
      id: 2,
      title: 'E-Learning Platform',
      description: 'Full-stack e-learning platform with course management, student enrollment, and progress tracking. Features include video streaming, quizzes, and certificate generation.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
      projectType: 'software',
      githubUrl: 'https://github.com/yourusername/e-learning-platform',
      liveUrl: 'https://demo-elearning.example.com',
      imageUrl: null,
      features: [
        'Course management system',
        'Video streaming integration',
        'Progress tracking',
        'Certificate generation'
      ]
    },
    {
      id: 3,
      title: 'Campus Network Design',
      description: 'Comprehensive network design for Takoradi Technical University campus. Includes VLAN segmentation, routing protocols, security policies, and scalability planning.',
      technologies: ['Cisco Packet Tracer', 'OSPF', 'VLAN', 'Network Security'],
      projectType: 'academic',
      githubUrl: 'https://github.com/yourusername/campus-network',
      liveUrl: null,
      imageUrl: null,
      features: [
        'Multi-building network design',
        'VLAN segmentation',
        'Security policy implementation',
        'Scalability planning'
      ]
    },
    {
      id: 4,
      title: 'Inventory Management System',
      description: 'Enterprise inventory management system with barcode scanning, stock tracking, and reporting features. Built for local businesses to manage their stock efficiently.',
      technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'REST API'],
      projectType: 'software',
      githubUrl: 'https://github.com/yourusername/inventory-system',
      liveUrl: 'https://inventory-demo.example.com',
      imageUrl: null,
      features: [
        'Barcode scanning integration',
        'Real-time stock tracking',
        'Automated reporting',
        'Multi-user access control'
      ]
    },
    {
      id: 5,
      title: 'Network Security Scanner',
      description: 'Security tool for scanning network vulnerabilities and identifying potential threats. Includes port scanning, vulnerability assessment, and security reporting.',
      technologies: ['Python', 'Nmap', 'Network Security', 'Flask'],
      projectType: 'networking',
      githubUrl: 'https://github.com/yourusername/security-scanner',
      liveUrl: null,
      imageUrl: null,
      features: [
        'Port scanning capabilities',
        'Vulnerability assessment',
        'Security reporting',
        'Automated scanning'
      ]
    },
    {
      id: 6,
      title: 'Student Portal API',
      description: 'RESTful API for university student portal. Handles student data, course registration, grades, and notifications. Built with proper authentication and authorization.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'JWT', 'REST API'],
      projectType: 'academic',
      githubUrl: 'https://github.com/yourusername/student-portal-api',
      liveUrl: null,
      imageUrl: null,
      features: [
        'Student data management',
        'Course registration system',
        'Grade tracking',
        'Notification system'
      ]
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      if (filter === 'all') {
        setProjects(sampleProjects);
      } else {
        setProjects(sampleProjects.filter(project => 
          project.projectType === filter
        ));
      }
      setLoading(false);
    }, 500);
  }, [filter]);

  const getTypeIcon = (type) => {
    switch(type) {
      case 'networking': 
        return <FaNetworkWired className="text-cyan-500" />;
      case 'software': 
        return <FaCode className="text-blue-500" />;
      case 'academic': 
        return <FaGraduationCap className="text-purple-500" />;
      default: 
        return <FaCode className="text-gray-500" />;
    }
  };

  const getTechIcon = (tech) => {
    const techLower = tech.toLowerCase();
    if (techLower.includes('java')) return <FaJava className="text-orange-500" />;
    if (techLower.includes('react')) return <FaReact className="text-cyan-500" />;
    if (techLower.includes('spring')) return <SiSpringboot className="text-green-500" />;
    if (techLower.includes('mysql')) return <SiMysql className="text-blue-500" />;
    if (techLower.includes('node')) return <FaCode className="text-green-600" />;
    return <FaCode className="text-gray-500" />;
  };

  const getTypeColor = (type) => {
    switch(type) {
      case 'software': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'networking': return 'bg-cyan-100 text-cyan-800 border-cyan-200';
      case 'academic': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="projects" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaCode className="text-3xl text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-800">My Projects</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing my work in software development and networking
          </p>
        </div>

        {/* Project Filters */}
        <div className="mb-12 bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <FaFilter className="text-blue-600 text-xl" />
            <span className="font-medium text-gray-700">Filter by Category</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <button 
              className={`flex items-center gap-2 px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
                filter === 'all' 
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setFilter('all')}
            >
              All Projects
            </button>
            <button 
              className={`flex items-center gap-2 px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
                filter === 'software' 
                  ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setFilter('software')}
            >
              <FaCode />
              Software Development
            </button>
            <button 
              className={`flex items-center gap-2 px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
                filter === 'networking' 
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-400 text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setFilter('networking')}
            >
              <FaNetworkWired />
              Networking
            </button>
            <button 
              className={`flex items-center gap-2 px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
                filter === 'academic' 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setFilter('academic')}
            >
              <FaGraduationCap />
              Academic Projects
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
            <p className="text-gray-600">Loading projects...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Project Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border ${getTypeColor(project.projectType)}`}>
                      {getTypeIcon(project.projectType)}
                      <span className="capitalize">{project.projectType}</span>
                    </div>
                    <span className="text-sm text-gray-500 font-medium">#{project.id}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                </div>

                {/* Project Body */}
                <div className="p-6">
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-700 mb-3 text-sm">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-600 text-sm">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3 text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm">
                          {getTechIcon(tech)}
                          <span>{tech}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Footer */}
                <div className="p-6 pt-0">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg font-medium text-sm transition-colors duration-300"
                        >
                          <FaGithub />
                          <span>Code</span>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-lg font-medium text-sm transition-all duration-300"
                        >
                          <FaExternalLinkAlt />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Project Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center">
                <FaCode className="text-2xl text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Software Projects</h3>
                <p className="text-3xl font-bold text-blue-600">
                  {sampleProjects.filter(p => p.projectType === 'software').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-100 to-blue-50 rounded-xl flex items-center justify-center">
                <FaNetworkWired className="text-2xl text-cyan-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Networking Projects</h3>
                <p className="text-3xl font-bold text-cyan-600">
                  {sampleProjects.filter(p => p.projectType === 'networking').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-50 rounded-xl flex items-center justify-center">
                <FaGraduationCap className="text-2xl text-purple-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Academic Projects</h3>
                <p className="text-3xl font-bold text-purple-600">
                  {sampleProjects.filter(p => p.projectType === 'academic').length}
                </p>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default Projects;
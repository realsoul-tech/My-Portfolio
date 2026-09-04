import React, { useState, useEffect } from 'react';
import { 
  FaJava, 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaNetworkWired, 
  FaShieldAlt, 
  FaLinux, 
  FaGitAlt,
  FaPython, 
  FaDocker, 
  FaAws, 
  FaCode,
  FaCogs, 
  FaServer, 
  FaChartLine,
  FaLaptopCode,
  FaUserGraduate,
  FaAward,
  FaLightbulb
} from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiCisco, SiJavascript } from 'react-icons/si';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [skills, setSkills] = useState([]);

  const categories = [
    { id: 'all', name: 'All Skills', icon: <FaCode />, color: 'from-blue-700 to-blue-900' },
    { id: 'programming', name: 'Programming', icon: <FaCode />, color: 'from-blue-600 to-cyan-500' },
    { id: 'networking', name: 'Networking', icon: <FaNetworkWired />, color: 'from-cyan-600 to-blue-400' },
    { id: 'tools', name: 'Tools & DevOps', icon: <FaCogs />, color: 'from-green-600 to-emerald-500' },
    { id: 'databases', name: 'Databases', icon: <FaDatabase />, color: 'from-purple-600 to-pink-500' },
    { id: 'soft', name: 'Soft Skills', icon: <FaChartLine />, color: 'from-orange-600 to-yellow-500' },
  ];

  // Sample skills data
  const sampleSkills = [
    // Programming
    { id: 1, name: 'Java', level: 90, category: 'programming', icon: <FaJava />, color: '#007396' },
    { id: 2, name: 'JavaScript', level: 85, category: 'programming', icon: <SiJavascript />, color: '#F7DF1E' },
    { id: 3, name: 'React', level: 88, category: 'programming', icon: <FaReact />, color: '#61DAFB' },
    { id: 4, name: 'Spring Boot', level: 82, category: 'programming', icon: <SiSpringboot />, color: '#6DB33F' },
    { id: 5, name: 'Node.js', level: 80, category: 'programming', icon: <FaNodeJs />, color: '#339933' },
    { id: 6, name: 'Python', level: 75, category: 'programming', icon: <FaPython />, color: '#3776AB' },
    
    // Networking
    { id: 7, name: 'CCNA', level: 88, category: 'networking', icon: <SiCisco />, color: '#1BA0D7' },
    { id: 8, name: 'Network Security', level: 85, category: 'networking', icon: <FaShieldAlt />, color: '#4CAF50' },
    { id: 9, name: 'TCP/IP', level: 90, category: 'networking', icon: <FaNetworkWired />, color: '#FF6B6B' },
    { id: 10, name: 'Routing & Switching', level: 87, category: 'networking', icon: <FaServer />, color: '#9C27B0' },
    
    // Databases
    { id: 11, name: 'MySQL', level: 85, category: 'databases', icon: <SiMysql />, color: '#4479A1' },
    { id: 12, name: 'MongoDB', level: 75, category: 'databases', icon: <FaDatabase />, color: '#47A248' },
    
    // Tools & DevOps
    { id: 13, name: 'Git', level: 88, category: 'tools', icon: <FaGitAlt />, color: '#F05032' },
    { id: 14, name: 'Docker', level: 70, category: 'tools', icon: <FaDocker />, color: '#2496ED' },
    { id: 15, name: 'Linux', level: 82, category: 'tools', icon: <FaLinux />, color: '#FCC624' },
    { id: 16, name: 'AWS', level: 65, category: 'tools', icon: <FaAws />, color: '#FF9900' },
    
    // Soft Skills
    { id: 17, name: 'Problem Solving', level: 92, category: 'soft', icon: <FaChartLine />, color: '#2196F3' },
    { id: 18, name: 'Team Leadership', level: 85, category: 'soft', icon: <FaChartLine />, color: '#4CAF50' },
    { id: 19, name: 'Technical Writing', level: 80, category: 'soft', icon: <FaChartLine />, color: '#9C27B0' },
  ];

  useEffect(() => {
    if (activeCategory === 'all') {
      setSkills(sampleSkills);
    } else {
      setSkills(sampleSkills.filter(skill => skill.category === activeCategory));
    }
  }, [activeCategory]);

  const getLevelText = (level) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    if (level >= 60) return 'Basic';
    return 'Beginner';
  };

  const getLevelBgColor = (level) => {
    if (level >= 90) return 'bg-emerald-500';
    if (level >= 80) return 'bg-blue-500';
    if (level >= 70) return 'bg-yellow-500';
    if (level >= 60) return 'bg-red-500';
    return 'bg-gray-500';
  };

  return (
    <section id="skills" className="py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaCode className="text-3xl text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-800">Technical Skills</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Programming, networking, and tools I work with
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id 
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                    : 'bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-white shadow-md hover:shadow-lg border border-blue-100'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skills.map((skill) => (
            <div key={skill.id} className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              {/* Skill Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl shadow-md"
                    style={{ backgroundColor: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{skill.name}</h3>
                    <span 
                      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold mt-1 ${getLevelBgColor(skill.level)} text-white shadow-sm`}
                    >
                      {getLevelText(skill.level)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Proficiency</span>
                  <span className="text-sm font-bold text-gray-700">{skill.level}%</span>
                </div>
                <div className="w-full bg-blue-100 rounded-full h-2.5">
                  <div 
                    className="h-2.5 rounded-full transition-all duration-1000 shadow-inner"
                    style={{ 
                      width: `${skill.level}%`,
                      backgroundColor: skill.color 
                    }}
                  ></div>
                </div>
              </div>

              {/* Category Tag */}
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-100 capitalize">
                  {skill.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center shadow-sm">
                <FaNetworkWired className="text-2xl text-cyan-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Networking Expertise</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  CCNA certified with hands-on experience in network design, 
                  configuration, and troubleshooting. Strong understanding of 
                  TCP/IP, routing protocols, and network security principles.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center shadow-sm">
                <FaLaptopCode className="text-2xl text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Full-Stack Development</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Proficient in both frontend and backend development using modern 
                  technologies. Experience building responsive web applications 
                  with React and Spring Boot.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center shadow-sm">
                <FaCogs className="text-2xl text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Tools & DevOps</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Skilled in version control (Git), containerization (Docker), 
                  and Linux system administration. Familiar with CI/CD pipelines 
                  and cloud platforms.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Certifications & Training
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-blue-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center shadow-sm">
                  <SiCisco className="text-2xl text-cyan-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 text-lg mb-1">CCNA: Routing & Switching</h4>
                  <p className="text-gray-600 text-sm mb-2">Cisco Networking Academy</p>
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                    <FaAward />
                    2023
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-yellow-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl flex items-center justify-center shadow-sm">
                  <FaAws className="text-2xl text-yellow-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 text-lg mb-1">AWS Cloud Practitioner</h4>
                  <p className="text-gray-600 text-sm mb-2">Amazon Web Services</p>
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full">
                    <FaAward />
                    2024
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-purple-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center shadow-sm">
                  <FaCode className="text-2xl text-purple-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 text-lg mb-1">Full Stack Development</h4>
                  <p className="text-gray-600 text-sm mb-2">FreeCodeCamp</p>
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded-full">
                    <FaAward />
                    2022
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skill Levels Legend */}
        <div className="mt-12 bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-blue-200 shadow-lg">
          <h4 className="font-bold text-gray-800 mb-4 text-center">Proficiency Levels</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { level: 'Expert (90-100%)', color: 'bg-emerald-500' },
              { level: 'Advanced (80-89%)', color: 'bg-blue-500' },
              { level: 'Intermediate (70-79%)', color: 'bg-yellow-500' },
              { level: 'Basic (60-69%)', color: 'bg-red-500' },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className={`w-3 h-3 ${item.color} rounded-full shadow-sm`}></div>
                <span className="text-sm text-gray-600">{item.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
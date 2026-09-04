import React from 'react';
import { 
  FaUniversity, 
  FaGraduationCap, 
  FaCalendarAlt, 
  FaBook, 
  FaAward,
  FaMapMarkerAlt,
  FaChalkboardTeacher,
  FaUsers,
  FaStar,
  FaRocket,
  FaLightbulb
} from 'react-icons/fa';

const Education = () => {
  const educationTimeline = [
    {
      id: 1,
      institution: 'Takoradi Technical University',
      qualification: 'Bachelor of Technology',
      field: 'Information Technology (Computer Networking)',
      period: '2022 - 2026',
      status: 'Current',
      description: 'Level 400 student specializing in computer networking and software development. Key courses include: Network Security, Advanced Programming, Database Management, and System Administration.',
      achievements: [
        'Dean\'s List (All Semesters)',
        'Best Final Year Project Nominee',
        'Student Representative for IT Department'
      ],
      gpa: '3.6/3.6',
      icon: <FaUniversity />
    },
    {
      id: 2,
      institution: 'Cisco Networking Academy',
      qualification: 'CCNA Certification',
      field: 'Routing and Switching',
      period: '2023',
      status: 'Completed',
      description: 'Completed comprehensive networking certification covering network fundamentals, routing protocols, switching, and network security.',
      achievements: [
        'CCNA Certified',
        'Top 10% in Final Assessment',
        'Network Design Project Excellence'
      ],
      icon: <FaGraduationCap />
    },
    {
      id: 3,
      institution: 'FreeCodeCamp',
      qualification: 'Full Stack Development',
      field: 'Web Development',
      period: '2022',
      status: 'Completed',
      description: 'Completed 300+ hour curriculum covering responsive web design, JavaScript algorithms, frontend libraries, and backend development.',
      achievements: [
        'Full Stack Certification',
        '6 Certification Projects',
        'Open Source Contributions'
      ],
      icon: <FaBook />
    }
  ];

  const extracurriculars = [
    {
      title: 'IT Department Student Representative',
      organization: 'Takoradi Technical University',
      period: '2023 - Present',
      description: 'Representing student interests in departmental meetings and facilitating communication between students and faculty.',
      icon: <FaUsers />
    },
    {
      title: 'Programming Club President',
      organization: 'TTU Tech Community',
      period: '2022 - 2023',
      description: 'Led weekly coding sessions, organized hackathons, and mentored junior students in programming.',
      icon: <FaChalkboardTeacher />
    },
    {
      title: 'Volunteer IT Support',
      organization: 'Local Community Center',
      period: '2022 - 2023',
      description: 'Provided technical support and basic computer literacy training to community members.',
      icon: <FaUsers />
    }
  ];

  const currentCourses = [
    'Advanced Network Security',
    'Linux Administration',
    'Network Virtualization',
    'Data Communications',
    'Network Management'
  ];

  return (
    <section id="education" className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/3 w-72 h-72 bg-gradient-to-r from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse delay-1500"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header with Decorative Elements */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            <div className="relative">
              <FaGraduationCap className="text-4xl" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Education Journey</h2>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-6">
            My academic progression, certifications, and continuous learning path
          </p>
          
          {/* Progress Bar */}
          <div className="max-w-md mx-auto mt-8">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Academic Progress</span>
              <span className="text-sm font-bold text-blue-600">80% Complete</span>
            </div>
            <div className="w-full bg-white/50 backdrop-blur-sm rounded-full h-3">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full w-4/5 shadow-lg shadow-blue-200/50"></div>
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-xs text-gray-500">Started: 2022</span>
              <span className="text-xs text-gray-500">Graduation: 2026</span>
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-800 mb-10 flex items-center gap-3">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg">
              <FaUniversity className="text-white text-xl" />
            </div>
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Academic & Certification Timeline
            </span>
          </h3>

          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 via-purple-300 to-cyan-300"></div>

            <div className="space-y-12">
              {educationTimeline.map((item, index) => (
                <div key={item.id} className="relative flex items-start gap-8">
                  {/* Timeline Dot */}
                  <div className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${
                    item.status === 'Current' 
                      ? 'bg-gradient-to-br from-blue-500 to-cyan-500 animate-pulse' 
                      : 'bg-gradient-to-br from-gray-300 to-gray-400'
                  }`}>
                    <div className="text-white text-lg">
                      {item.icon}
                    </div>
                    
                    {/* Current Status Badge */}
                    {item.status === 'Current' && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                        <FaStar className="text-white text-xs" />
                      </div>
                    )}
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 p-6 rounded-2xl shadow-lg backdrop-blur-sm transform transition-all duration-300 hover:scale-[1.02] ${
                    item.status === 'Current'
                      ? 'bg-gradient-to-br from-white via-blue-50 to-white border-l-4 border-blue-500'
                      : 'bg-white/80 backdrop-blur-sm'
                  }`}>
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-1">{item.institution}</h3>
                        <p className="text-gray-600">
                          <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {item.qualification}
                          </span>
                          {item.field && <span className="text-gray-700"> • {item.field}</span>}
                        </p>
                      </div>
                      <div className="flex items-center gap-4 mt-2 md:mt-0">
                        <div className="flex items-center gap-2 text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          <FaCalendarAlt className="text-blue-500" />
                          <span className="font-medium">{item.period}</span>
                        </div>
                        {item.gpa && (
                          <span className="flex items-center gap-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg shadow-green-200">
                            <FaAward />
                            GPA: {item.gpa}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>

                    {/* Achievements */}
                    {item.achievements && item.achievements.length > 0 && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                          <div className="w-2 h-6 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-full"></div>
                          Notable Achievements
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                          {item.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-center gap-2 bg-gradient-to-r from-yellow-50 to-orange-50 p-3 rounded-lg border border-yellow-100">
                              <FaAward className="text-yellow-500" />
                              <span className="text-gray-700 font-medium">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Current University Info */}
                    {item.id === 1 && (
                      <div className="mt-8 pt-6 border-t border-gray-100">
                        <h4 className="font-semibold text-gray-700 mb-4 flex items-center gap-2">
                          <FaLightbulb className="text-blue-500" />
                          Current Academic Status
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">400</div>
                            <div className="text-gray-600 text-sm font-medium">Current Level</div>
                          </div>
                          <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                            <div className="text-2xl font-bold text-gray-800">2026</div>
                            <div className="text-gray-600 text-sm font-medium">Expected Graduation</div>
                          </div>
                          <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
                            <div className="text-lg font-bold text-gray-800">IT Department</div>
                            <div className="text-gray-600 text-sm font-medium">Specialization</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Current Courses */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-800 mb-10 flex items-center gap-3">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
              <FaBook className="text-white text-xl" />
            </div>
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Current Semester Courses (Level 400)
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCourses.map((course, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-4 rounded-xl">
                      <FaBook className="text-white text-xl" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold px-2 py-1 rounded-full">
                      ITT{index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-blue-600 transition-colors">{course}</h4>
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full" style={{width: `${70 + (index * 10)}%`}}></div>
                      </div>
                      <span className="text-xs font-medium text-gray-500">{70 + (index * 10)}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extracurricular Activities */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-800 mb-10 flex items-center gap-3">
            <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg">
              <FaUsers className="text-white text-xl" />
            </div>
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Extracurricular & Leadership
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extracurriculars.map((activity, index) => (
              <div 
                key={index} 
                className="group bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="relative">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-4 rounded-xl ${
                      index === 0 ? 'bg-gradient-to-br from-blue-500 to-cyan-500' :
                      index === 1 ? 'bg-gradient-to-br from-purple-500 to-pink-500' :
                      'bg-gradient-to-br from-green-500 to-emerald-500'
                    }`}>
                      <div className="text-white text-xl">
                        {activity.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 text-lg mb-1 group-hover:text-blue-600 transition-colors">
                        {activity.title}
                      </h4>
                      <div className="flex items-center gap-2 text-gray-600 mb-3">
                        <FaMapMarkerAlt className="text-gray-400" />
                        <span className="text-sm font-medium">{activity.organization}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="flex items-center gap-2 text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      <FaCalendarAlt className="text-blue-500" />
                      {activity.period}
                    </span>
                    <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                      index === 0 ? 'bg-blue-100 text-blue-700' :
                      index === 1 ? 'bg-purple-100 text-purple-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {index === 0 ? 'Current' : 'Past'}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills and Goals Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {/* Skills Gained */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg">
                <FaRocket className="text-white text-xl" />
              </div>
              <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Skills Acquired
              </span>
            </h3>
            
            <div className="space-y-6">
              {[
                {
                  category: 'Technical Expertise',
                  color: 'from-blue-500 to-cyan-500',
                  skills: ['Network Design & Configuration', 'Full-Stack Development', 'Database Management', 'System Administration', 'Cybersecurity Principles']
                },
                {
                  category: 'Professional Development',
                  color: 'from-purple-500 to-pink-500',
                  skills: ['Project Management', 'Technical Documentation', 'Team Leadership', 'Problem Solving', 'Research & Analysis']
                },
                {
                  category: 'Academic Excellence',
                  color: 'from-green-500 to-emerald-500',
                  skills: ['Consistent Academic Excellence', 'Research Publication', 'Industry Certifications', 'Conference Presentations', 'Mentorship Experience']
                }
              ].map((group, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h4 className="font-bold text-gray-800 text-lg mb-4 pb-3 border-b border-gray-100 flex items-center gap-2">
                    <div className={`w-3 h-6 rounded-full bg-gradient-to-b ${group.color}`}></div>
                    {group.category}
                  </h4>
                  <ul className="space-y-3">
                    {group.skills.map((skill, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-700">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${group.color}`}></div>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Future Goals */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg">
                <FaLightbulb className="text-white text-xl" />
              </div>
              <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Future Aspirations
              </span>
            </h3>
            
            <div className="space-y-6">
              {[
                {
                  number: '01',
                  gradient: 'from-blue-500 to-purple-500',
                  title: 'Complete Final Year Project',
                  description: 'Develop an innovative solution combining networking and software development'
                },
                {
                  number: '02',
                  gradient: 'from-purple-500 to-pink-500',
                  title: 'Graduate with Honors',
                  description: 'Maintain academic excellence and complete degree requirements'
                },
                {
                  number: '03',
                  gradient: 'from-green-500 to-emerald-500',
                  title: 'Professional Certifications',
                  description: 'Obtain AWS Solutions Architect and CCNP certifications'
                },
                {
                  number: '04',
                  gradient: 'from-yellow-500 to-orange-500',
                  title: 'Industry Experience',
                  description: 'Gain practical experience through internships and projects'
                }
              ].map((goal, index) => (
                <div 
                  key={index} 
                  className="group bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className={`text-white text-2xl font-bold w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${goal.gradient} shadow-lg`}>
                      {goal.number}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-blue-600 transition-colors">
                        {goal.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{goal.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Inspiration Quote */}
        <div className="text-center bg-gradient-to-r from-blue-50 via-purple-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
          <div className="max-w-3xl mx-auto">
            <FaGraduationCap className="text-4xl text-blue-500 mx-auto mb-4" />
            <p className="text-2xl font-light text-gray-700 italic mb-4">
              "Education is not the learning of facts, but the training of the mind to think."
            </p>
            <p className="text-gray-600 font-medium">— Albert Einstein</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
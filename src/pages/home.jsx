import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaGithub, 
  FaExternalLinkAlt, 
  FaCalendarAlt,
  FaCode,
  FaNetworkWired,
  FaGraduationCap,
  FaJava,
  FaReact,
  FaDatabase,
  FaServer
} from 'react-icons/fa';
import { SiSpringboot, SiMysql } from 'react-icons/si';
import { getProjectById } from '../services/api';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        const response = await getProjectById(id);
        setProject(response.data);
      } catch (err) {
        setError('Project not found');
        console.error('Error fetching project:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  const getTypeIcon = (type) => {
    switch(type?.toLowerCase()) {
      case 'networking': 
        return <FaNetworkWired className="type-icon networking" />;
      case 'software': 
        return <FaCode className="type-icon software" />;
      case 'academic': 
        return <FaGraduationCap className="type-icon academic" />;
      default: 
        return <FaCode className="type-icon" />;
    }
  };

  const getTypeColor = (type) => {
    switch(type?.toLowerCase()) {
      case 'networking': return '#3b82f6';
      case 'software': return '#10b981';
      case 'academic': return '#8b5cf6';
      default: return '#6b7280';
    }
  };

  const getTechIcon = (tech) => {
    const techLower = tech.toLowerCase();
    if (techLower.includes('java')) return <FaJava />;
    if (techLower.includes('react')) return <FaReact />;
    if (techLower.includes('spring')) return <SiSpringboot />;
    if (techLower.includes('mysql')) return <SiMysql />;
    if (techLower.includes('node')) return <FaCode />;
    if (techLower.includes('server')) return <FaServer />;
    if (techLower.includes('database')) return <FaDatabase />;
    return <FaCode />;
  };

  if (loading) {
    return (
      <div className="project-details-loading">
        <div className="container">
          <div className="loading-content">
            <div className="spinner"></div>
            <p>Loading project details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="project-details-error">
        <div className="container">
          <div className="error-content">
            <h2>Project Not Found</h2>
            <p>The project you're looking for doesn't exist or has been moved.</p>
            <button 
              className="btn btn-primary"
              onClick={() => navigate('/')}
            >
              <FaArrowLeft /> Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-details">
      <div className="container">
        {/* Back Button */}
        <button 
          className="back-button"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft /> Back to Projects
        </button>

        {/* Project Header */}
        <div className="project-header">
          <div className="project-meta">
            <div 
              className="project-type-badge"
              style={{ backgroundColor: getTypeColor(project.projectType) }}
            >
              {getTypeIcon(project.projectType)}
              <span>{project.projectType}</span>
            </div>
            <div className="project-date">
              <FaCalendarAlt />
              <span>Created: {new Date(project.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
          
          <h1 className="project-title">{project.title}</h1>
          <p className="project-subtitle">{project.description}</p>
        </div>

        <div className="project-content">
          {/* Left Column - Project Details */}
          <div className="project-details-column">
            {/* Technologies Used */}
            <div className="technologies-section">
              <h3>Technologies Used</h3>
              <div className="technologies-grid">
                {project.technologies.split(',').map((tech, index) => (
                  <div key={index} className="technology-card">
                    <div className="tech-icon">
                      {getTechIcon(tech)}
                    </div>
                    <span className="tech-name">{tech.trim()}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Features */}
            <div className="features-section">
              <h3>Key Features</h3>
              <ul className="features-list">
                {project.features?.map((feature, index) => (
                  <li key={index} className="feature-item">
                    <div className="feature-marker"></div>
                    <span>{feature}</span>
                  </li>
                )) || (
                  <li className="feature-item">
                    <div className="feature-marker"></div>
                    <span>Comprehensive solution addressing specific needs</span>
                  </li>
                )}
              </ul>
            </div>

            {/* Project Challenges & Solutions */}
            <div className="challenges-section">
              <h3>Challenges & Solutions</h3>
              <div className="challenges-grid">
                <div className="challenge-card">
                  <h4>Challenge</h4>
                  <p>Implementing real-time network monitoring with minimal latency</p>
                </div>
                <div className="challenge-card">
                  <h4>Solution</h4>
                  <p>Used WebSocket connections and optimized database queries for real-time updates</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Project Info & Links */}
          <div className="project-info-column">
            {/* Project Links */}
            <div className="project-links-card">
              <h3>Project Links</h3>
              <div className="project-links">
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link github"
                  >
                    <FaGithub />
                    <span>View Source Code</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link live"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>

            {/* Project Stats */}
            <div className="project-stats-card">
              <h3>Project Statistics</h3>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-value">{project.technologies.split(',').length}</div>
                  <div className="stat-label">Technologies</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">100%</div>
                  <div className="stat-label">Completion</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">A+</div>
                  <div className="stat-label">Grade</div>
                </div>
              </div>
            </div>

            {/* Related Projects */}
            <div className="related-projects-card">
              <h3>Related Projects</h3>
              <div className="related-projects">
                <div className="related-project">
                  <div className="related-project-type">Software</div>
                  <h4>Inventory Management System</h4>
                  <a href="/project/4" className="related-link">View Project →</a>
                </div>
                <div className="related-project">
                  <div className="related-project-type">Networking</div>
                  <h4>Network Security Scanner</h4>
                  <a href="/project/5" className="related-link">View Project →</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Description */}
        <div className="project-description-section">
          <h3>Detailed Description</h3>
          <div className="description-content">
            <p>
              This project was developed as part of my academic journey at Takoradi Technical University,
              combining both networking concepts and software development skills. The application addresses
              real-world challenges in network monitoring and management.
            </p>
            
            <h4>Project Objectives</h4>
            <ul>
              <li>Develop a scalable network monitoring solution</li>
              <li>Implement real-time data visualization</li>
              <li>Create an intuitive user interface for network administrators</li>
              <li>Ensure system security and reliability</li>
            </ul>

            <h4>Implementation Details</h4>
            <p>
              The backend was built using Java Spring Boot with RESTful APIs, while the frontend utilizes
              React for dynamic user interfaces. MySQL was used for data persistence, and Socket.IO was
              implemented for real-time communication between the server and clients.
            </p>

            <h4>Learning Outcomes</h4>
            <p>
              This project enhanced my understanding of network protocols, real-time web applications,
              and full-stack development. It also improved my problem-solving skills and ability to work
              with complex system architectures.
            </p>
          </div>
        </div>

        {/* Student Context */}
        <div className="student-context-section">
          <div className="context-card">
            <h3>Academic Context</h3>
            <p>
              <strong>University:</strong> Takoradi Technical University<br />
              <strong>Program:</strong> Bachelor of Technology in Information Technology<br />
              <strong>Level:</strong> 400<br />
              <strong>Course:</strong> Final Year Project<br />
              <strong>Supervisor:</strong> Dr. [Supervisor Name]
            </p>
            <div className="context-tags">
              <span className="tag">Academic Project</span>
              <span className="tag">Final Year</span>
              <span className="tag">Research Based</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
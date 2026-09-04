import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Sample project data - in real app, fetch from API
  const project = {
    id: id,
    title: `Project ${id} - Network Monitoring System`,
    description: 'A comprehensive network monitoring solution developed as part of my final year project at Takoradi Technical University.',
    technologies: ['React', 'Spring Boot', 'MySQL', 'Socket.IO'],
    type: 'Networking',
    features: [
      'Real-time network traffic monitoring',
      'Device status tracking',
      'Performance metrics dashboard',
      'Alert system for anomalies'
    ]
  };

  return (
    <div className="project-details">
      <div className="container">
        <button 
          className="back-button"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft /> Back to Projects
        </button>
        
        <div className="project-header">
          <h1>{project.title}</h1>
          <p className="project-description">{project.description}</p>
        </div>
        
        <div className="project-content">
          <div className="project-info">
            <h3>Project Details</h3>
            <p><strong>Project ID:</strong> {project.id}</p>
            <p><strong>Type:</strong> {project.type}</p>
            <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
          </div>
          
          <div className="project-features">
            <h3>Key Features</h3>
            <ul>
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="student-context">
          <h3>Academic Context</h3>
          <p>This project was developed as part of my Level 400 coursework at Takoradi Technical University, 
             demonstrating the integration of networking concepts with software development skills.</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
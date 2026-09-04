import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <p>This page is under construction.</p>
      <p>As a Level 400 IT student at Takoradi Technical University, 
         you can use this dashboard to manage your portfolio content.</p>
      
      <div className="admin-features">
        <h2>Features to implement:</h2>
        <ul>
          <li>Project Management (Add/Edit/Delete)</li>
          <li>Skills Management</li>
          <li>Education/Certifications Management</li>
          <li>Contact Messages Management</li>
          <li>Portfolio Analytics</li>
        </ul>
      </div>
      
      <div className="admin-actions">
        <h2>Quick Actions:</h2>
        <div className="action-buttons">
          <button className="btn btn-primary">Manage Projects</button>
          <button className="btn btn-secondary">View Messages</button>
          <button className="btn btn-success">Update Profile</button>
        </div>
      </div>
      
      <div className="student-info">
        <h3>Student Information:</h3>
        <p><strong>University:</strong> Takoradi Technical University</p>
        <p><strong>Program:</strong> B.Tech Information Technology</p>
        <p><strong>Level:</strong> 400</p>
        <p><strong>Specialization:</strong> Computer Networking</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
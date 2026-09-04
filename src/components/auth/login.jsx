import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaUniversity, FaSignInAlt } from 'react-icons/fa';
import api from '../../services/api';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // In real app, use: const response = await api.auth.login(credentials);
      // For demo purposes, simulate login
      setTimeout(() => {
        if (credentials.username === 'admin' && credentials.password === 'admin') {
          localStorage.setItem('isAuthenticated', 'true');
          navigate('/admin');
        } else {
          setError('Invalid credentials');
        }
        setLoading(false);
      }, 1000);
    } catch (err) {
      setError('Login failed. Please try again.');
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <FaUniversity className="login-icon" />
          <h1>TTU Student Portfolio</h1>
          <p>Admin Dashboard Login</p>
        </div>

        <div className="login-card">
          <div className="card-header">
            <h2>Administrator Access</h2>
            <p>Enter your credentials to access the dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            {error && (
              <div className="error-message">
                {error}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="username">
                <FaUser className="input-icon" />
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                placeholder="Enter your username"
                required
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">
                <FaLock className="input-icon" />
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                disabled={loading}
              />
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="/forgot-password" className="forgot-password">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="login-button"
              disabled={loading}
            >
              {loading ? (
                <>
                  <div className="spinner"></div>
                  Signing in...
                </>
              ) : (
                <>
                  <FaSignInAlt />
                  Sign In
                </>
              )}
            </button>
          </form>

          <div className="login-footer">
            <p>This area is restricted to authorized personnel only.</p>
            <p className="student-info">
              <FaUniversity />
              <span>Takoradi Technical University - IT Department</span>
            </p>
          </div>
        </div>

        <div className="login-info">
          <div className="info-card">
            <h3>Access Information</h3>
            <ul>
              <li>This dashboard is for managing your portfolio content</li>
              <li>Only Level 400 IT students have admin access</li>
              <li>Contact department for account creation</li>
              <li>Demo Credentials: admin/admin</li>
            </ul>
          </div>
        </div>

        <div className="back-to-portfolio">
          <a href="/" className="back-link">
            ← Back to Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
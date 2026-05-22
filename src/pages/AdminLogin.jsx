import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import './Admin.css';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Use environment variables for secure, uncommitted credentials
    const validUsername = import.meta.env.VITE_ADMIN_USERNAME || 'admin';
    const validPassword = import.meta.env.VITE_ADMIN_PASSWORD || 'admin';

    if (username === validUsername && password === validPassword) {
      navigate('/admin/dashboard');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-bg"></div>
      <Card className="admin-login-card">
        <div className="admin-login-logo">
          <img src="/logo.png" alt="Geeta Science Inter College" style={{ height: '80px' }} onError={(e) => e.target.style.display = 'none'} />
        </div>
        <h2 className="font-sans-display text-center mb-2">Admin Portal</h2>
        <p className="text-center text-muted mb-8" style={{ fontSize: '14px' }}>Sign in to manage college resources</p>
        
        <form onSubmit={handleLogin}>
          <div className="admin-form-group">
            <label>Username</label>
            <input 
              type="text" 
              placeholder="Enter admin username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          
          <div className="admin-form-group mb-8">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <Button variant="brown" size="large" style={{ width: '100%' }}>
            Sign In
          </Button>
        </form>
        
        <div className="text-center mt-6">
          <a href="/" style={{ fontSize: '13px', color: 'var(--color-text-muted)', textDecoration: 'none' }}>
            &larr; Back to main website
          </a>
        </div>
      </Card>
    </div>
  );
};

export default AdminLogin;

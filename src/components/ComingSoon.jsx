import React, { useState } from 'react';
import './ComingSoon.css';

const ComingSoon = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Simulate email subscription
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="coming-soon section">
      <div className="container">
        <div className="coming-soon-content">
          <div className="coming-soon-logo">
            <img 
              src="/lovable-uploads/f0a9a1df-2155-43b9-978c-5ab5d2544416.png" 
              alt="PetaTrack Logo" 
              className="petatracklogo"
            />
          </div>
          
          <div className="coming-soon-text">
            <h2 className="coming-soon-title">PetaTrack</h2>
            <p className="coming-soon-subtitle">Coming Soon</p>
            <p className="coming-soon-description">
              A smart biometric attendance & access control system – launching soon.
            </p>
            
            <div className="features-preview">
              <div className="feature-item">
                <svg className="feature-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 1C5.03 1 1 5.03 1 10s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zM9 5a1 1 0 112 0v4a1 1 0 01-1 1H7a1 1 0 110-2h2V5z" clipRule="evenodd" />
                </svg>
                <span>Real-time Tracking</span>
              </div>
              <div className="feature-item">
                <svg className="feature-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-4 4-4-4 4-4 .257-.257A6 6 0 1118 8zm-6-2a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
                </svg>
                <span>Biometric Security</span>
              </div>
              <div className="feature-item">
                <svg className="feature-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                </svg>
                <span>Advanced Analytics</span>
              </div>
            </div>

            <form onSubmit={handleSubscribe} className="notify-form">
              <div className="form-group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email to get notified"
                  className="email-input"
                  required
                />
                <button type="submit" className="notify-button">
                  {subscribed ? 'Subscribed!' : 'Notify Me'}
                </button>
              </div>
              {subscribed && (
                <p className="success-message">
                  Thanks! We'll notify you when PetaTrack launches.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
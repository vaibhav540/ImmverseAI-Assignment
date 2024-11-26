import React, { useState, useEffect } from 'react';

const Navbar = ({ profileImage, handleImageChange }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav style={navbarStyle}>
      <div style={logoContainerStyle}>
        <img src="/immverse_ai_logo.jpeg" alt="ImmverseAI Logo" style={logoStyle} />
      </div>
      {isMobile ? (
        <div style={profileContainerStyle}>
          <label htmlFor="profile-image-upload" style={profileImageContainerStyle}>
            <img src={profileImage} alt="User Profile" style={profileImageStyle} />
          </label>
          <input
            type="file"
            id="profile-image-upload"
            style={{ display: 'none' }}
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
      ) : (
        <>
          <ul style={navLinksStyle}>
            {['Home', 'Dashboard', 'Category', 'Validate Certificate'].map((link, index) => (
              <li key={index} style={navLinkStyle}>{link}</li>
            ))}
          </ul>
          <div style={profileContainerStyle}>
            <span style={notificationIconStyle}>🔔</span>
            <span style={darkModeIconStyle}>🌙</span>
            <label htmlFor="profile-image-upload" style={profileImageContainerStyle}>
              <img src={profileImage} alt="User Profile" style={profileImageStyle} />
            </label>
            <input
              type="file"
              id="profile-image-upload"
              style={{ display: 'none' }}
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
        </>
      )}
    </nav>
  );
};

const navbarStyle = {
  position: 'sticky',
  top: 0,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#fff',
  padding: '15px 20px',
  borderBottom: '1px solid #ddd',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  zIndex: 1000,
};

const logoContainerStyle = { display: 'flex', alignItems: 'center' };

const logoStyle = { height: '50px', width: 'auto' };

const navLinksStyle = {
  display: 'flex',
  listStyle: 'none',
  margin: 0,
  padding: 0,
};

const navLinkStyle = {
  margin: '0 15px',
  cursor: 'pointer',
  fontSize: '16px',
  color: '#555',
  fontWeight: '500',
};

const profileContainerStyle = { display: 'flex', alignItems: 'center' };

const notificationIconStyle = {
  marginRight: '15px',
  fontSize: '20px',
  cursor: 'pointer',
};

const darkModeIconStyle = {
  marginRight: '15px',
  fontSize: '20px',
  cursor: 'pointer',
};

const profileImageStyle = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  objectFit: 'cover',
};

const profileImageContainerStyle = { cursor: 'pointer' };

export default Navbar;

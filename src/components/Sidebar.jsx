import React, { useState } from 'react';
import { FaHome, FaUserCircle, FaBook, FaChartLine, FaWrench, FaCertificate, FaCog, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={toggleSidebar}
        className="d-md-none"
        style={hamburgerButtonStyle}
      >
        <FaBars style={{ fontSize: '24px', color: '#333' }} />
      </button>

      <div
        className={`sidebar ${isSidebarOpen ? 'sidebar-open' : ''} d-none d-md-block`}
        style={sidebarStyle}
      >
        <ul style={menuStyle}>
          {menuItems.map(({ icon: Icon, label }, index) => (
            <li key={index} style={menuItemStyle}>
              <Icon style={iconStyle} />
              <span style={menuTextStyle}>{label}</span>
            </li>
          ))}
        </ul>
        <div style={downloadSectionStyle}>
          <div style={downloadCardStyle}>
            <p style={{ fontSize: '14px', marginBottom: '10px' }}>Download Immverse AI mobile app</p>
            <button style={qrButtonStyle}>AI</button>
          </div>
        </div>
      </div>

      <div
        className={`sidebar-mobile ${isSidebarOpen ? 'sidebar-open' : ''} d-md-none`}
        style={{
          ...sidebarMobileStyle,
          transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)', // Adjust the transform property
        }}
      >
        <button onClick={toggleSidebar} style={closeButtonStyle}>
          <FaTimes style={{ fontSize: '24px', color: '#333' }} />
        </button>

        <ul style={menuStyle}>
          {menuItems.map(({ icon: Icon, label }, index) => (
            <li key={index} style={menuItemStyle}>
              <Icon style={iconStyle} />
              <span style={menuTextStyle}>{label}</span>
            </li>
          ))}
        </ul>
        <div style={downloadSectionStyle}>
          <div style={downloadCardStyle}>
            <p style={{ fontSize: '14px', marginBottom: '10px' }}>Download Immverse AI mobile app</p>
            <button style={qrButtonStyle}>AI</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const menuItems = [
  { icon: FaHome, label: 'Dashboard' },
  { icon: FaUserCircle, label: 'My Journey' },
  { icon: FaBook, label: 'My Courses' },
  { icon: FaChartLine, label: 'Progress' },
  { icon: FaWrench, label: 'DIY' },
  { icon: FaCertificate, label: 'Certificates' },
  { icon: FaCog, label: 'Settings' },
  { icon: FaSignOutAlt, label: 'Logout' },
];

// Styles
const sidebarStyle = {
  width: '250px',
  background: '#F5F6FA',
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100vh', 
  margin:0,
};

const sidebarMobileStyle = {
  background: '#F5F6FA',
  padding: '20px',
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  zIndex: 1050, 
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100vh',
  transition: 'transform 0.3s ease', 
};

const menuStyle = {
  listStyle: 'none',
  padding: '20px',
  margin: 0,
};

const menuItemStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '15px',
  color: '#555',
  cursor: 'pointer',
  fontSize: '16px',
};

const iconStyle = {
  marginRight: '10px',
  fontSize: '20px',
};

const menuTextStyle = {
  fontWeight: '500',
};

const downloadSectionStyle = {
  marginTop: 'auto',
};

const downloadCardStyle = {
  background: '#E91E63',
  borderRadius: '8px',
  padding: '15px',
  color: '#fff',
  textAlign: 'center',
  height: '100px',
};

const qrButtonStyle = {
  background: '#FFFFFF',
  color: '#E91E63',
  border: 'none',
  borderRadius: '5px',
  padding: '5px 10px',
  cursor: 'pointer',
};

const hamburgerButtonStyle = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '10px',
  position: 'absolute',
  top: '20px',
  left: '20px',
};

const closeButtonStyle = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  position: 'absolute',
  top: '20px',
  right: '20px',
  padding: '10px',
  zIndex: 1060,
};

export default Sidebar;

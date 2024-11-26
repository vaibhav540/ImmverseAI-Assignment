import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

const App = () => {
  const [profileImage, setProfileImage] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTutp6Rf6nH24hRGK5NBsW5LFII03lUqcgLNQ&s');
  const [userName, setUserName] = useState('Avishkar Watmode');
  const [showNameModal, setShowNameModal] = useState(false);  
  const [newName, setNewName] = useState(''); 

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result); 
      };
      reader.readAsDataURL(file); 
    }

    setShowNameModal(true);
  };

  const handleNameChange = () => {
    setUserName(newName);  
    setShowNameModal(false); 
    setNewName('');  
  };

  return (
    <div className='container'  style={{ display: 'flex', flexDirection: 'column', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <Navbar profileImage={profileImage} handleImageChange={handleImageChange} />
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar />
        <Dashboard profileImage={profileImage} userName={userName} />
      </div>

      {showNameModal && (
        <div style={modalOverlayStyle}>
          <div style={modalStyle}>
            <h3>What is your name?</h3>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Enter Your Name"
              style={inputStyle}
            />
            <button onClick={handleNameChange} style={buttonStyle}>Save Name</button>
            <button onClick={() => setShowNameModal(false)} style={buttonStyle}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const modalStyle = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
  textAlign: 'center',
  width: '300px',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '10px',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const buttonStyle = {
  padding: '10px 20px',
  margin: '5px',
  borderRadius: '4px',
  cursor: 'pointer',
  backgroundColor: '#007BFF',
  color: 'white',
  border: 'none',
};

export default App;

import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

const Dashboard = ({ profileImage, userName }) => {
  return (
    <div  style={dashboardStyle}>
      <header style={headerStyle}>
        <h1  style={{ fontSize: '24px', color: '#333',  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '15px',
  color: '#333',
  textAlign: 'start', }} className='my-journey'>My Journey</h1>
      </header>

      <div style={bannerStyle}>
        <img src={profileImage} alt="Profile" style={profileImageStyle} />
        <div>
          <h2 style={bannerNameStyle}>{userName}</h2>
          <p style={bannerRoleStyle}>Student</p>
        </div>
        <div className='passed-images' style={badgeImagesContainerStyle}>
          <img src="/Screenshot__128_-removebg-preview.png" alt="Badge 1" style={badgeImageStyle} />
          <img src="/Screenshot__128_-removebg-preview.png" alt="Badge 2" style={badgeImageStyle} />
          <img src="/Screenshot__128_-removebg-preview.png" alt="Badge 3" style={badgeImageStyle} />
        </div>
      </div>

      <div style={cardsContainerStyle}>
        <Card title="Your target" value="A+" gradient="linear-gradient(135deg, #1E9600, #FFF200, #FF0000)" />
        <Card title="Current grade" value="B+" gradient="linear-gradient(135deg, #4facfe, #00f2fe)" />
        <Card title="Target days remaining" value="17 days" gradient="linear-gradient(135deg, #ff7e5f, #feb47b)" />
        <Card title="Your category" value="AI" gradient="linear-gradient(135deg, #7F00FF, #E100FF)" />
        <Card title="Current streak" value="7 days" gradient="linear-gradient(135deg, #ff512f, #dd2476)" />
        <Card title="Daily challenge" value="Completed" gradient="linear-gradient(135deg, #56ab2f, #a8e063)" />
      </div>

      <div style={learningLevelContainerStyle}>
        <h2 style={learningLevelTitleStyle}>Learning Level</h2>
        <img src="/Screenshot (129).png" alt="Learning Level" style={learningLevelImageStyle} />
      </div>

      <h2 style={{ fontSize: '20px', marginBottom: '20px', color: '#333',fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '15px',
  color: '#333',
  textAlign: 'start',marginTop:'20px' }}>Artificial Intelligence</h2>

      <MyLearningPath />

      <p style={noteStyle} className="note-style">
        This personalized learning plan is tailored to align with your career goals and related skills. You can modify
        the plan at any time by updating your career objectives, skills, or chosen courses.
      </p>
    </div>
  );
};

const Card = ({ title, value, gradient }) => (
  <div style={{ ...cardStyle, background: gradient }}>
    <h3 style={cardTitleStyle}>{title}</h3>
    <p style={cardValueStyle}>{value}</p>
    <div style={editButtonContainerStyle}>
      <AiOutlinePlus style={editButtonStyle} />
    </div>
  </div>
);

const MyLearningPath = () => {
  const learningPathStyle = {
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    marginTop: "20px",
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap:'wrap'
  };

  const courseContainerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  };

  const courseCardStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 20px",
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  };

  const courseDetailsStyle = {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    padding:'10px',
  };

  const courseImageStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "8px",
    objectFit: "cover",
  };

  const courseTextStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const courseTitleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
    margin: 0,
  };

  const courseDateStyle = {
    fontSize: "14px",
    color: "#666",
    margin: 0,
  };

  const startButtonStyle = {
    background: "#ff4081",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    fontWeight: "bold",
    cursor: "pointer",
  };

  return (
    <div style={learningPathStyle}>
      <div style={courseContainerStyle}>
        {["AI Course 1", "AI Course 2", "AI Course 3"].map((course, index) => (
          <div key={index} style={courseCardStyle}>
            <div style={courseDetailsStyle}>
              <img src="\Screenshot__132_-removebg-preview.png" alt={`${course} thumbnail`} style={courseImageStyle} />
              <div style={courseTextStyle}>
                <p style={courseTitleStyle}>{course}</p>
                <p style={courseDateStyle}>16 July, 11:00 AM</p>
              </div>
            </div>
            <button style={startButtonStyle}>Start</button>
          </div>
        ))}
      </div>

      <div className='imp-section' style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)", borderRadius: "8px" }}>
          <div
            style={{
              display: "flex",
              padding: "10px",
              alignItems: "center",
              justifyContent: "space-evenly",
              borderBottom: "2px solid #eee",
            }}
          >
            <img src="/Screenshot__128_-removebg-preview.png" alt="Correct Answer" />
            <div style={{fontSize:'20px'}}>
              <p>correct answer - 8</p>
              <p>incorrect answer - 2</p>
              <p>skipped - 0</p>
            </div>
          </div>
          <div style={{ display: "flex", gap: "10px", padding: "10px",flexWrap:'wrap' }}>
            <img src="/Screenshot (133).png" alt="Result 1" />
            <img src="/Screenshot (133).png" alt="Result 2" />
            <img src="/Screenshot (133).png" alt="Result 3" />
          </div>
        </div>
      </div>
    </div>
  );
};

const dashboardStyle = {
  flex: 1,
  background: '#F9FAFD',
  padding: '10px',
  margin:0,
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px',
};

const bannerStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '20px',
  background: `url('https://png.pngtree.com/thumb_back/fh260/background/20230408/pngtree-rainbow-curves-abstract-colorful-background-image_2164067.jpg') no-repeat center center`,
  backgroundSize: 'cover',
  borderRadius: '8px',
  color: '#fff',
};

const profileImageStyle = {
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  marginRight: '20px',
};

const bannerNameStyle = {
  fontSize: '20px',
  color: '#fff',
  margin: 0,
};

const bannerRoleStyle = {
  margin: 0,
};

const badgeImagesContainerStyle = {
  display: 'flex',
  marginLeft: 'auto',
  gap: '10px',
};

const badgeImageStyle = {
  width: '60px',
  height: '60px',
};

const cardsContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '20px',
  marginTop: '20px',
};

const cardStyle = {
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  textAlign: 'center',
  color: '#fff',
  position: 'relative',
  overflow: 'hidden',
};

const cardTitleStyle = {
  fontSize: '16px',
  marginBottom: '10px',
};

const cardValueStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
};

const editButtonContainerStyle = {
  position: 'absolute',
  bottom: '10px',
  right: '10px',
  background: 'white',
  borderRadius: '6px',
};

const editButtonStyle = {
  fontSize: '20px',
  color: 'black',
  cursor: 'pointer',
  background: 'transparent',
  border: 'none',
};

const learningLevelContainerStyle = {
  marginTop: '30px',
  textAlign: 'center',
};

const learningLevelTitleStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '15px',
  color: '#333',
  textAlign: 'start',
};

const learningLevelImageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
};

const noteStyle = {
  marginTop: '20px',
  fontSize: '20px',
  color: '#666',
  textAlign: 'start',
};

export default Dashboard;

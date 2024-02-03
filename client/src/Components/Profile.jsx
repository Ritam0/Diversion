// Profile.js

import React, { useEffect, useState } from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [image, setPhoto] = useState('');

  useEffect(() => {
    setUserName(localStorage.getItem('Name'));
    setUserEmail(localStorage.getItem('email'));
    setUserId(localStorage.getItem('userId'));
    setPhoto(localStorage.getItem('photo'));
  }, []);

  return (
    <div className="profileContainer">
      <div className="profileImageContainer">
        <img className="profileImage" src={image} alt="Profile" />
      </div>
      <div className="profileInfo">
        <h2 className="profileName">User Name: {userName}</h2>
        {/* <h4 className="profileId">User ID: {userId}</h4> */}
        <p className="profileEmail">Email ID: {userEmail}</p>
        <p className="profileType">User Type: Free Trial</p>
        <Link to="/logout" className="logoutLink">Logout</Link>
      </div>
    </div>
  );
};

export default Profile;

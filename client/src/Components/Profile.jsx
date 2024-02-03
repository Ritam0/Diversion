// Profile.js

import React, { useEffect, useState } from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import Lottie from "react-lottie";
import animationData from "./Image/Animation - 1706993079838.json";

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
      <div className="background-image">
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: animationData,
          }}
          height="90vh"
          width="90vw"
        />
      </div>
      <div className="Rightdiv">
        <h1>profile card</h1>
      <div className="profileCard">
        <div className="profileImageContainer">
          <img className="profileImage" src={image} alt="Profile" />
        </div>
        <div className="profileInfo">
          <h2 className="profileName">User Name: {userName}</h2>
          <p className="profileEmail">Email ID: {userEmail}</p>
          <p className="profileType">User Type: Free Trial</p>
          <Link to="/logout" className="button">
            Logout
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Profile;

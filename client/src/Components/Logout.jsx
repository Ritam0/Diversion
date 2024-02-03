// Logout.js

import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Lottie from "react-lottie";
import animationData from "./Image/Animation - 1706949602745.json";
import './Logout.css'
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const Card = styled.div`
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  animation: ${fadeIn} 0.5s ease;
`;

const Logout = () => {
  const logout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('photo');
    localStorage.removeItem('Name');
    localStorage.removeItem('userId');
  };

  return (
  <div className='outer-div'>
    <div className='background-image'>
      <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: animationData,
            }}
            height="80vh"
            width="80vw"
        />
    </div>
    <div className='LogoutContainer'>
      <Card>
        <h2>You are logged out successfully!</h2>
        <Link to="/">
          <button className='confirm-btn'onClick={logout}>Confirm</button>
        </Link>
      </Card>
    </div>
  </div>
  );
};

export default Logout;

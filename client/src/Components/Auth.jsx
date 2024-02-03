// Auth.js
import styled, { keyframes } from 'styled-components';
import React, { useState, useEffect } from "react";
import { auth, provider } from "../firebase.auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "./Image/Animation - 1706879381441.json";
import "./Auth.css";
import LoginCard from "./LoginCard";
import Navbar from "./Navbar";
import Footer from "./Footer"

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  const handleEmailPasswordSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password 
      );
      console.log("user signed in:", userCredentials);
      window.alert("Sign in successful");
      setEmail("");
      setPassword("");
    } catch (error) {
      setError(error.message);
    }
  };

  const Card = styled.div`
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  animation: ${fadeIn} 0.5s ease;
`;

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []);

  return (
    <main>
      <Navbar />
      <div className="auth-container">
        <div className="backgroundImage">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: animationData,
            }}
            height="100vh"
            width="100vw"
          />
        </div>
        <div className="right-container">
          {!value ? (
            <div>
              <LoginCard />
            </div>
          ) : (
          <Card>
            <h2>You are Signed in</h2>
            <Link to="/">
          <button className='confirm-btn'>Click Here!!!</button>
        </Link>
          </Card>
          )}
        </div>
      </div>
      <Footer/>
    </main>
  );
};

export default Auth;

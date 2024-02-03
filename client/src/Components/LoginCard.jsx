// LoginCard.jsx

import React, { useState ,useEffect} from "react";
import { auth, provider } from "../firebase.auth";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Link } from "react-router-dom";
import "./LoginCard.css";

const LoginCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [value, setValue] = useState(0);

  const handleEmailPasswordSignIn = async (e) => {
    setError("");
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
      setError("Invalid Credentials");
    }
  };

  const handleSigninWithGoogle = async () => {
    try {
      const data = await signInWithPopup(auth, provider);
      console.log(data);
      window.alert("Sign in with Google successful");
      localStorage.setItem("email",data.user.email);
      localStorage.setItem("photo",data.user.photoURL);
      localStorage.setItem("Name",data.user.displayName);
      localStorage.setItem("userId",data.user.uid);
      setValue(1);
      
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []);

  return (
    <>
    {!value ? 
    <div className="login-card">
      <div className="heading">
        <h3>Sign Up/Sign In</h3>
      </div>
      <form className="login-form" >
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button className="button" type="submit" onClick={handleEmailPasswordSignIn}>Login with Email/Password</button>
      </form>
      <p className="flex justify-center mt-5">OR</p>
        <div className="flex justify-center items-center">

      <button className="button" type="submit" onClick={handleSigninWithGoogle}>
        <div className="flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 488 512"
            className="mr-3"
          >
            <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
          </svg>
          <div>Sign in with Google</div>
        </div>
      </button>
        </div>

      {error && <p className="error">{error}</p>}
    </div>
    : 
      <button><Link to="/">You are Signed in. Click here!!</Link></button>  
    }
    </>
  );
};

export default LoginCard;

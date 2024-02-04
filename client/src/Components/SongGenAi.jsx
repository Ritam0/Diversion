// SongGenAi.js
import React, { useRef } from "react";
import "./SongGenAi.css";
import Replicate from "replicate";
import { useState,useEffect } from "react";
import Navbar from "./Navbar";
import music1 from "./Image/heyYou.mp3";
import pyano from "./Image/pyano.wav";
import flute from "./Image/flute.mp3";
import drum from "./Image/drum.mp3";
import Lottie from "react-lottie";
import animationData from "./Image/Animation - 1707005786054.json";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const SongGenAi = () => {
  const [value,setValue]=useState('');
  const navigate=useNavigate();
  useEffect(()=>{
    setValue(localStorage.getItem("email"));
    if(!value){
      navigate('/Auth');
    }
  })
  const audioRef = useRef(null);
  const [prompt, setPrompt] = useState("");
  const [audioSrc, setAudioSrc] = useState();
  const musicGenerator = async () => {
    const replicate = new Replicate({
      auth: "ce051838741cfe3b5373546234b36d5709c4c6d8",
      baseUrl: "http://localhost:3001/api", // Use the proxy server
    });

    try {
      const output = await replicate.run(
        "riffusion/riffusion:8cf61ea6c56afd61d8f5b9ffd14d7c216c0a93844ce2d82ac1c9ecc9c7f24e05",
        {
          input: {
            prompt_a: "funky synth solo",
          },
        }
      );
      console.log(output);
    } catch (error) {
      console.error("Error generating music:", error);
    }
  };
  const songGenerator = () => {
    if (prompt == "solo piyano" || prompt == "piyano") {
      setAudioSrc(pyano);
    } else if (prompt == "solo flute" || prompt == "flute") {
      setAudioSrc(flute);
    } else if (prompt == "flute piyano mashup") {
      setAudioSrc(music1);
    } else if (prompt == "high bass music") {
      setAudioSrc(drum);
    } else if (
      prompt == "loud drums" ||
      prompt == "drums" ||
      prompt == "loud drum"
    ) {
      setAudioSrc(drum);
    } else {
      setAudioSrc(pyano);
    }
    setPrompt("");
  };
  const handlePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };
  return (
    <>
      <Navbar />
      <div className="songContainer">
        <div className="Song-outer-div">
          <div className="Song-bg-img">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: animationData,
              }}
              height="80vh"
              width="60vw"
            />
          </div>
          <div className="rightSection">
            <div className="card">
              <h1>Generate Music Fusion as you wish</h1>
              <input
                type="text"
                className="songGen-prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
              <button className="musicGenBtn" onClick={songGenerator}>
                Generate Music
              </button>
            {audioSrc && (
              <div className="result">
                <audio ref={audioRef} controls>
                  <source src={audioSrc} type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>
                <button className="musicGenBtn" onClick={handlePlayPause}>
                  Play/Pause
                </button>
              </div>
            )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default SongGenAi;

// SongGenAi.js
import React, { useRef } from 'react';
import './SongGenAi.css';
import Replicate from 'replicate';
import { useState } from 'react';
import music1 from "./Image/heyYou.mp3"
import pyano from "./Image/pyano.wav"
import flute from "./Image/flute.mp3"
import drum from "./Image/drum.mp3"
const SongGenAi = () => {
  const audioRef=useRef(null)
  const [prompt,setPrompt]=useState('');
  const [audioSrc,setAudioSrc]=useState();
  const musicGenerator = async () => {
    const replicate = new Replicate({
      auth: 'ce051838741cfe3b5373546234b36d5709c4c6d8',
      baseUrl: 'http://localhost:3001/api', // Use the proxy server
    });

    try {
      const output = await replicate.run(
        'riffusion/riffusion:8cf61ea6c56afd61d8f5b9ffd14d7c216c0a93844ce2d82ac1c9ecc9c7f24e05',
        {
          input: {
            prompt_a: 'funky synth solo',
          },
        }
      );
      console.log(output);
    } catch (error) {
      console.error('Error generating music:', error);
    }
  };
  const songGenerator=()=>{
    if(prompt=="solo piyano" || prompt=="piyano"){
      setAudioSrc(pyano);
    }
    else if(prompt=="solo flute" || prompt=="flute"){
      setAudioSrc(flute);
    }
    else if(prompt=="flute piyano mashup"){
      setAudioSrc(music1);
    }
    else if(prompt=="high bass music"){
      setAudioSrc(drum);
    }
    else if(prompt=="loud drums" || prompt=="drums" || prompt=="loud drum"){
      setAudioSrc(drum);
    }
    else{
      setAudioSrc(pyano);
    }
    setPrompt('')
  }
  const handlePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };
  return (
    <div className="songContainer">
      <input type="text"
        className="songGen-prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button className="musicGenBtn" onClick={songGenerator}>
        music gen
      </button>

      {audioSrc && (
          <div>
            <audio ref={audioRef} controls>
              <source src={audioSrc} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
            <button onClick={handlePlayPause}>Play/Pause</button>
          </div>
        )}
    </div>
  );
};

export default SongGenAi;
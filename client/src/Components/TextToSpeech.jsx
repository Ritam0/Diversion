import OpenAI from 'openai';
import React, { useState, useRef } from 'react';
import { saveAs } from 'file-saver';
import './TextToSpeech.css';
import Lottie from "react-lottie";
import animationData from "./Image/Animation - 1706888955654.json";
import Navbar from './Navbar';
import Footer from './Footer';

const TextToSpeech = () => {
  const [audioSrc, setAudioSrc] = useState(null);
  const audioRef = useRef(null);
  const [prompt, setPrompt] = useState('');
  const [voiceType, setVoiceType] = useState('alloy'); // Default voice type

    const generateSpeech = async () => {
        try {
            const openai = new OpenAI({
                apiKey: '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',
                dangerouslyAllowBrowser: true
            });

      const mp3 = await openai.audio.speech.create({
        model: 'tts-1',
        voice: voiceType,
        input: prompt,
      });

      const blob = new Blob([await mp3.arrayBuffer()], { type: 'audio/mp3' });
      const url = URL.createObjectURL(blob);
      setAudioSrc(url);
    } catch (error) {
      console.error('Error:', error);
    }
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
    <div className="container">
      <div className="Txt-background-image">
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
      <div className="TextInput">
        <label htmlFor="description" className="TextGenPrompt">
          Enter Your Image Prompt Here:
        </label>
        <input
          type="text"
          id="description"
          className="inputSectionOfText"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <label htmlFor="voiceType" className='TextGenPrompt'>Select Voice Type: </label>
        <select
          id="voiceType"
          className="inputSectionOfText"
          value={voiceType}
          onChange={(e) => setVoiceType(e.target.value)}
        >
          <option value="alloy">Alloy</option>
          <option value="echo">Echo</option>
          <option value="fable">Fable</option>
          <option value="onyx">Onyx</option>
          <option value="nova">Nova</option>
        </select>
        <button onClick={generateSpeech}>Generate Speech</button>

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
    </div>
    <Footer/>
    </>
  );
};

export default TextToSpeech;

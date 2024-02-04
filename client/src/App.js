// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Homepage';
import Image from './Components/ImageAi';
import Music from './Components/SongGenAi';
import Conversation from './Components/ConversationAi';
import Auth from './Components/Auth';
import Logout from './Components/Logout';
import CodeGenAi from './Components/CodeGenAi';
import Profile from './Components/Profile';
import TextToSpeech from './Components/TextToSpeech';

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/image" element={<Image />} />
        <Route path="/music" element={<Music />} />
        <Route path="/conversation" element={<Conversation />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/codegen" element={<CodeGenAi />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/txtspeech" element={<TextToSpeech/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import React, { useState } from 'react';
import Navbar from './Navbar';
import Lottie from 'react-lottie';
import animationData from './Image/Animation - 1706812123240.json';
import './CodeGenAi.css';
import OpenAI from "openai";
import Footer from './Footer';
import { Link } from 'react-router-dom';

const CodeGenAi = () => {
    const handleCopyCode = () => {
        const codeToCopy = conversation
          .filter(msg => msg.role === 'assistant')
          .map(msg => msg.content)
          .join('\n');
    
        navigator.clipboard.writeText(codeToCopy)
          .then(() => alert('Code copied to clipboard!'))
          .catch(err => console.error('Unable to copy code', err));
      };
  const openai = new OpenAI({
    apiKey: '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"', // This is the default and can be omitted
    dangerouslyAllowBrowser: true
  });

  const [userMessage, setUserMessage] = useState('');
  const [conversation, setConversation] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    
    // Add the user's message to the conversation
    const updatedConversation = [...conversation, { role: 'user', content: userMessage }];
    setConversation(updatedConversation);
    setUserMessage(''); // Clear the input field
    setLoading(true);

    // Request AI response from OpenAI
    const completion = await openai.chat.completions.create({
      messages: updatedConversation,
      model: "gpt-3.5-turbo-0613",
    });

    // Extract AI's response
    const assistantReply = completion.choices[0].message.content;

    // Simulate a delay between each character (adjust the duration as needed)
    const delayBetweenCharacters = 100; // in milliseconds

    for (let i = 0; i < assistantReply.length; i++) {
      // Update conversation with the next character
      const updatedConversationWithReply = [
        ...updatedConversation,
        { role: 'assistant', content: assistantReply.substring(0, i + 1) },
      ];
      setConversation(updatedConversationWithReply);

      // Pause before displaying the next character
      await new Promise(resolve => setTimeout(resolve, delayBetweenCharacters));
    }

    setLoading(false);
  };

  return (
    <div>
    <Navbar/>
    <div className="conversationBody">
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
      <div className="conversationContainer">
        <h1>Generate code With FusionI</h1>

        <div className="messageContainer">
        {conversation.map((msg, index) => (
        <div key={index} className={msg.role === 'user' ? 'userMessage' : 'codeAssistantMessage'}>
            
          {msg.content}
          {msg.role !== 'user' ?<button onClick={handleCopyCode} className='codeCopyBtn'>copy</button>:
          null
          }
            </div>
          ))}
        </div>

        <div className="inputContainer">
          <label htmlFor="userMessage"></label>
          <input
            type="text"
            id="userMessage"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
          />
        </div>

        <div className="sendMessageBtn">
          <button onClick={sendMessage}>Generate Code</button>
          
        </div>
        <div className="anything_else">
          <label htmlFor="">Wanna Anything else?</label>
        <Link to='/image' className='anything_button'><button>Generate Image</button></Link>
        <Link to='/conversation' className='anything_button'><button>Do Chat</button></Link>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
  );
};


export default CodeGenAi

import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>History</h2>
    </div>
  );
};

const Content = () => {
  return (
    <div className="sidebar-content">
      <h1>Main Content</h1>
      <p>This is the main content area.</p>
    </div>
  );
};

function App() {
  return (
    <div className="Sidebar-container">
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;

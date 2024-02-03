import React, { useEffect } from 'react';
import './Sidebar.css';


const Sidebar=({history})=> {
  return (
    <div className="Sidebar-container">
      <div className="sidebar">
      <h2>History</h2>
    </div>
      <div className="sidebar-content">
       {history.map((item, index) => (
          <li key={index}>
            <strong>{item.textDescription}</strong>
            
            </li>
        ))}

    </div>
    </div>
  );
}

export default Sidebar;

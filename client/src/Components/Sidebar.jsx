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
          <div key={index}>
            
            <img src={item.imageUrl} alt=""  className='img_sidebar'/>
            </div>
        ))}

    </div>
    </div>
  );
}

export default Sidebar;

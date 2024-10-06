import React from 'react';
import './Sidebar.css'; // Assuming you have a Sidebar.css for styling

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>OFFTOP</h2>
      </div>
      <div className="sidebar-menu">
        <div className="menu-item active">
          <span>All Files</span>
        </div>
        <div className="menu-item">
          <span>Packs</span>
        </div>
      </div>
      <div className="sidebar-section">
        <h3>COLLABORATE</h3>
        <div className="menu-item">
          <span>Inbox</span>
        </div>
        <div className="menu-item">
          <span>Activity</span>
        </div>
      </div>
      <div className="sidebar-footer">
        <button className="contact-button">Contact</button>
      </div>
    </div>
  );
}

export default Sidebar;

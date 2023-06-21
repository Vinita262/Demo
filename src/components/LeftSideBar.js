import React from 'react';

const LeftSideBar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li className="sidebar-menu-item">
          <a href="/">Home</a>
        </li>
        <li className="sidebar-menu-item">
          <a href="/About">About</a>
        </li>
        <li className="sidebar-menu-item">
          <a href="/Services">Services</a>
        </li>
        <li className="sidebar-menu-item">
          <a href="/Contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default LeftSideBar;

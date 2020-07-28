import React from 'react';

function Navbar() {
  return (
    <div id="navbar">
      <div id="logo">JU</div>
      <a href="#projects" className="nav">
        <div className="nav-item">Projects</div>
      </a>
      <a href="#about" className="nav">
        <div className="nav-item">About</div>
      </a>
      <a href="#contact" className="nav">
        <div className="nav-item">Contact</div>
      </a>
    </div>
  );
}

export default Navbar;

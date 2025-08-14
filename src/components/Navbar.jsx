// Navbar.jsx
import React from "react";
import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [open, setOpen] = useState(false);





  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">Blogify</div>

      {/* Search Bar */}
      <div className="navbar-search">
        <input type="text" placeholder="What are you looking for??" />
        <select>
          <option>Shots</option>
          <option>Designers</option>
        </select>
        <button className="search-btn">🔍</button>
      </div>

      {/* Menu Links */}

      <div
        className="dropdown"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <button className={`dropdown-btn ${open ? "active" : ""}`}>
          Explore ▼
        </button>

        {open && (
          <ul className="dropdown-menu">
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>Data Science</li>
            <li>Marketing</li>
          </ul>
        )}
      </div>
        <Link to="/about" className="about">About</Link>
        <Link to="/blog" className="blog">Blog</Link>
        



      {/* Auth Buttons */}
      <div className="navbar-auth">
        <Link to="/signup" className="signup">Sign up</Link>
        <Link to="/login" className="login">Log in</Link>
      
      </div>
    </nav>
  );
};

export default Navbar;

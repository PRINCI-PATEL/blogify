// Navbar.jsx
import React from "react";

import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Web from "./web";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);
  return (
    <nav className="navbar" style={{ paddingLeft: "30px" }}>
      {/* Logo */}
      <div className="navbar-logo">Blogify</div>



      {/* Menu Links */}

      <div className="navbar-right" >
        {/* Dropdown */}


        {/* Other Links */}
        <Link to="/" className="hero">
          Hero
        </Link>
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
              {/* ✅ Link added here */}
              <li>
                <Link to="/animation">Animation</Link>
              </li>
              <li>
                <Link to="/branding">Branding</Link>
              </li>
              <li>
                <Link to="/productdesign">Product Design</Link>
              </li>
              <li>
                <Link to="/webdesign">Web Design</Link>
              </li>
            </ul>
          )}
          <Link to="/about" className="about">
            About
          </Link>
          <Link to="/blog" className="blog">
            Blog
          </Link>


        </div>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="What are you looking for??" />
        <button className="search-btn">🔍</button>
      </div>
      {/* Navbar buttons */}
      <button
        className="loginSignUpBtn"
        onClick={() => {
          setIsOpen(true);
          setIsLogin(true);
        }}
      >
        Login
      </button>
      <button
        className="loginSignUpBtn"
        onClick={() => {
          setIsOpen(true);
          setIsLogin(false);
        }}
      >
        Signup
      </button>

      {/* Auth Modal */}
      <Web
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isLogin={isLogin}
        setIsLogin={setIsLogin}
      />
      <div
        className="profile"
        onClick={() => setProfileOpen(!profileOpen)}
      >
        <img
          src="data:image/jpeg;base64,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"
          alt="User"
          className="profile-avatar"
        />
        {profileOpen && (
          <ul className="profile-menu">
            <li><Link to="/profile">My Profile</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li><button onClick={() => alert("Logged out!")}>Logout</button></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

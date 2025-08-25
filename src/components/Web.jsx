import React, { useState } from "react";
import "./Web.css"
import "./Login.css"

const Web= ({ isOpen, setIsOpen }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields!");
      return;
    }

    if (email === "admin@example.com" && password === "123456") {
      alert("Login Successful!");
      setIsOpen(false);
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">

        <span className="close" onClick={() => setIsOpen(false)}>
          &times;
        </span>

        {isLogin ? (
          <div className="login-box">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="input-group">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button type="submit" className="login-btn">
                Login
              </button>

              <p>
                Don’t have an account?
                <span onClick={() => setIsLogin(false)} className="signup-link">
                  {" "}Sign Up
                </span>
              </p>
            </form>
          </div>
        ) : (
          <div className="login-box">
            <h2>Signup</h2>
            <form>
              <div className="input-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="input-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" />
              </div>
              <div className="input-group">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" />
              </div>

              <button type="submit" className="login-btn">
                Signup
              </button>

              <p>
                Already have an account?
                <span onClick={() => setIsLogin(true)} className="signup-link">
                  {" "}Login
                </span>
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Web;

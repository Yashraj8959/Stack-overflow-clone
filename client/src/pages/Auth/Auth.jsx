import React, { useState } from "react";
import "./Auth.css";
import AboutAuth from "./AboutAuth";
import icon from "../../assets/icon.png";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  return (
    <section className="auth-section">
        {isSignup && <AboutAuth />}
      <div className="auth-container-2">
        {!isSignup && (
          <img src={icon} alt="stackoverflow" className="login-logo" />
        )}
        <form>
          {isSignup && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
              />
            </label>
          )}
          <label htmlFor="email">
            <h4>Email</h4>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
          </label>
          <label htmlFor="password">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>Password</h4>
              {!isSignup && (
                <p style={{ color: "#007ac6", fontSize: "13px" }}>
                  Forgot password?
                </p>
              )}
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
            />
            {isSignup && (
              <p style={{ color: "#666767", fontSize: "13px" }}>
                Must contain 8+ characters, including at least 1 letter and 1
                number.
              </p>
            )}
          </label>
          <button type="submit" className="auth-btn">
            {isSignup ? "Sign up" : "Log in"}
          </button>
          {isSignup && (
            <p style={{ color: "#666767", fontSize: "13px" }}>
              By clicking “Sign up”, you agree to our
              <b style={{ color: "#1b75d0" , fontWeight:"500"}}> terms of service </b>
               and acknowledge you have read our 
              <b style={{ color: "#1b75d0", fontWeight:"500" }}> privacy policy</b>.
            </p>
          )}
        </form>
        <p style={{ color: "#0c0d0e", fontSize: "14px" }}>
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <button
            type="button"
            className="handle-switch-btn"
            onClick={() => setIsSignup(!isSignup)}
          >
            {isSignup ? "Log in" : "Sign up"}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Auth;

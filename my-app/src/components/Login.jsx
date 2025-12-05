import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

   // Create cookie helper
  const setCookie = (name, value, days) => {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
  };

  // Save username and redirect
  const handleSubmit = (e) => {
    e.preventDefault();
    setCookie("username", username, 7);
    window.location.href = "/dashboard";
  };

  return (
    <>
      {/* ===== FULLSCREEN THEME & STYLES ===== */}
      <style>{`
        html, body, #root {
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
        }

        * { 
          box-sizing: border-box; 
          font-family: system-ui, sans-serif;
        }

        /* Fullscreen wallpaper */
        .loginWrapper {
          position: fixed;
          inset: 0;
          background: radial-gradient(circle at top, #0f3d2e, #020c08);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* Glass card */
        .loginCard {
          background: rgba(10, 35, 25, 0.94);
          width: 360px;
          padding: 2.2rem;
          border-radius: 24px;
          box-shadow: 0 0 40px rgba(0, 255, 150, 0.35);
          backdrop-filter: blur(12px);
          transition: 0.25s ease;
        }

        .loginCard:hover {
          transform: translateY(-6px);
          box-shadow: 0 0 60px rgba(0, 255, 150, 0.45);
        }

        /* Header */
        .loginHeader h2 { color: #9fefcc; margin-bottom: 5px; }
        .loginHeader p { color: #69bfa1; font-size: 0.85rem; }

        /* Inputs */
        .inputGroup { margin-top: 1.3rem; }

        input {
          width: 100%;
          padding: 14px;
          border-radius: 14px;
          border: none;
          background: #081f16;
          color: #d9ffe9;
          outline: none;
          transition: 0.2s;
        }

        input::placeholder { color: #4f8470; }

        input:focus {
          background: #0c2a1e;
          box-shadow: 0 0 0 2px rgba(50, 255, 180, 0.25);
        }

        /* Button */
        button {
          width: 100%;
          margin-top: 1.6rem;
          padding: 14px;
          border-radius: 16px;
          border: none;
          font-weight: bold;
          background: linear-gradient(135deg, #1fe38c, #15a36c);
          color: #05261a;
          cursor: pointer;
          transition: 0.2s;
        }

        button:hover {
          transform: scale(1.03);
          box-shadow: 0 6px 25px rgba(50,255,180,0.4);
        }

        button:active {
          transform: scale(0.95);
          opacity: 0.85;
        }

        /* Footer */
        .footerText {
          margin-top: 1rem;
          text-align: center;
          font-size: 0.7rem;
          color: #4fa78b;
        }
      `}</style>

      {/* ===== FULLSCREEN LOGIN UI ===== */}
      <div className="loginWrapper">
        <div className="loginCard">

          <div className="loginHeader">
            <h2>Login</h2>
            <p>Secure access portal</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="inputGroup">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="inputGroup">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit">ENTER</button>
          </form>

          <div className="footerText">
            encrypted session • fullscreen mode
          </div>

        </div>
      </div>
    </>
  );
}

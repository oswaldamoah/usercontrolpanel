import { useState } from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard'
import Header from './components/Header'
import Login from './components/Login'
import Preferences from './components/Preferences'
import SessionInfo from './components/SessionInfo'

import './App.css'

function App() {
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Define individual routes */}
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/preferences" element={<Preferences />} />
        <Route path="/session" element={<SessionInfo />} />

        {/* Catch-all route for 404 pages (should be the last route) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
  return (
    <>
      
    </>
  )
}

export default App

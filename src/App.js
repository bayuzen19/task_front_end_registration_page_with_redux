import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import RegisterPage from "./components/RegisterPage";
import EmailConfirmationPage from "./components/EmailConfirmationPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/email-confirmation" element={<EmailConfirmationPage />} />
        {/* Add a catch-all route for unknown paths */}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
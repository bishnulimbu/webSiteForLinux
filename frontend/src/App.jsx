import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Pages/Header";
import Index from "./Pages/Index"; // Ensure this import exists
import "./App.css";

function App() {
  return (
    <Router>
      <Header /> {/* Keep it outside Routes to render on all pages */}
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;

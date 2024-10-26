import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Pages/Header";
// import Home from "./Pages/Home"; // Ensure this import exists

function App() {
  return (
    <Router>
      <Header /> {/* Keep it outside Routes to render on all pages */}
      <Routes>{/* <Route path="/" element={<Home />} /> */}</Routes>
    </Router>
  );
}

export default App;

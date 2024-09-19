import "./App.css";
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import InfoOne from "./Components/Pages/InfoOne";
import BreadCrum from "./Components/BreadCrum";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<InfoOne />} /> */}
        </Routes>
        <InfoOne />
        {/* <BreadCrum /> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;

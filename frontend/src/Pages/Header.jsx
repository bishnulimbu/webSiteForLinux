import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  let navigate = useNavigate();
  return (
    <div className="header">
      <p onClick={() => (navigate = "/")} style={{ cursor: "pointer" }}>
        Linux Website
      </p>
      <div className="link-container">
        <Link to="/">Home</Link>
        <Link to="/">Getting Started</Link>
      </div>
      <form>
        <span>Search here:</span>
        <input type="text" name="" value="" />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Header;

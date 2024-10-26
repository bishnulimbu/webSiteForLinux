import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <p>Linux Website</p>
      <div className="link-container">
        <Link to="/">Home</Link>
        <Link to="/">Getting Started</Link>
      </div>
      <form>
        <input type="text" name="" value="" />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Header;

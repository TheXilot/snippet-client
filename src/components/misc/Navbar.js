import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
function NavBar() {
  return (
    <div className="navbar">
      <Link to="/">
        <h1>Snippet Manager</h1>
      </Link>
      <div className="group-btn">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
}

export default NavBar;

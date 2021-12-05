import React, { useState } from "react";
import { Link } from "react-router-dom";
import Register from "../auth/Register";
import Login from "../auth/Login";

import "./NavBar.scss";
function NavBar() {
  const [registerFormOpen, setRegisterFormOpen] = useState(false);
  const [loginFormOpen, setLoginFormOpen] = useState(false);
  return (
    <div className="navbar">
      <Link to="/">
        <h1>Snippet Manager</h1>
      </Link>
      <div className="group-btn">
        <Link to="#" onClick={() => setLoginFormOpen(true)}>
          Login
        </Link>
        <Link to="#" onClick={() => setRegisterFormOpen(true)}>
          Register
        </Link>
        {registerFormOpen && (
          <Register setRegisterFormOpen={setRegisterFormOpen} />
        )}
        {loginFormOpen && <Login setLoginFormOpen={setLoginFormOpen} />}
      </div>
    </div>
  );
}

export default NavBar;

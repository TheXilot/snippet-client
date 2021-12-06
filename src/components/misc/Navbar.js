import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Register from "../auth/Register";
import Login from "../auth/Login";

import "./NavBar.scss";
import UserContext from "../../context/UserContext";
function NavBar() {
  const [registerFormOpen, setRegisterFormOpen] = useState(false);
  const [loginFormOpen, setLoginFormOpen] = useState(false);

  const user = useContext(UserContext);

  return (
    <div className="navbar">
      <Link to="/">
        <h1>Snippet Manager</h1>
      </Link>
      <div className="group-btn">
        {!user && (
          <Link to="#" onClick={() => setLoginFormOpen(true)}>
            Login
          </Link>
        )}

        {!user && (
          <Link to="#" onClick={() => setRegisterFormOpen(true)}>
            Register
          </Link>
        )}
        {registerFormOpen && (
          <Register setRegisterFormOpen={setRegisterFormOpen} />
        )}
        {loginFormOpen && <Login setLoginFormOpen={setLoginFormOpen} />}
      </div>
    </div>
  );
}

export default NavBar;

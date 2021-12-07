import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Register from "../auth/Register";
import Login from "../auth/Login";

import "./NavBar.scss";
import UserContext from "../../context/UserContext";
import { LogOutUser } from "../../api/auth";
function NavBar() {
  const [registerFormOpen, setRegisterFormOpen] = useState(false);
  const [loginFormOpen, setLoginFormOpen] = useState(false);
  const { user, getUser } = useContext(UserContext);
  const [showLoginLink, setShowLoginLink] = useState(true);

  // useEffect(() => {
  //   if (!user) getUser();
  // }, [getUser, user]);
  useEffect(() => {
    if (user !== null) setShowLoginLink(false);
    else setShowLoginLink(true);
  }, [user]);

  async function logOut() {
    await LogOutUser();
    await getUser();
  }
  return (
    <div className="navbar">
      <Link to="/">
        <h1>Snippet Manager</h1>
      </Link>
      <div className="group-btn">
        {showLoginLink ? (
          <>
            <Link to="#" onClick={() => setLoginFormOpen(true)}>
              Login
            </Link>
            <Link to="#" onClick={() => setRegisterFormOpen(true)}>
              Register
            </Link>
          </>
        ) : (
          user && (
            <>
              <Link to="#" onClick={() => logOut()}>
                Log out
              </Link>
            </>
          )
        )}
        {registerFormOpen && (
          <Register
            setRegisterFormOpen={setRegisterFormOpen}
            getUser={getUser}
          />
        )}
        {loginFormOpen && (
          <Login setLoginFormOpen={setLoginFormOpen} getUser={getUser} />
        )}
      </div>
    </div>
  );
}

export default NavBar;

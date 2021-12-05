import React, { useState } from "react";
import "./Login.scss";
import { LoginUSER } from "../../api/auth";

function Login({ setLoginFormOpen }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let Rdata = null;
    const formUser = {
      email: email,
      password: password,
    };
    Rdata = await LoginUSER(formUser)
      .then((res) => {
        console.log("res : ", res);
        return true;
      })
      .catch((err) => {
        console.log(err.response.data.errorMessage);
        return false;
      });
    console.log(Rdata);
    closeEditor();
  };

  function closeEditor() {
    setLoginFormOpen(false);
    setPassword("");
    setEmail("");
  }
  return (
    <div className="auth-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <label htmlFor="password">Password :</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <button className="btn-save" type="submit">
          Login
        </button>
        <button className="btn-close" type="button" onClick={closeEditor}>
          Close
        </button>
      </form>
    </div>
  );
}

export default Login;

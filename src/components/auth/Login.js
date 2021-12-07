import React, { useState, useEffect } from "react";
import "./Login.scss";
import { LoginUSER } from "../../api/auth";
// import history from "../../history";

function Login({ setLoginFormOpen, getUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState(undefined);

  useEffect(() => {
    setFormError(undefined);
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let Rdata = null;
    const formUser = {
      email: email,
      password: password,
    };
    Rdata = await LoginUSER(formUser)
      .then((res) => {
        closeEditor();
      })
      .catch((err) => {
        setFormError(err.response.data.errorMessage);
      });
    console.log(Rdata);

    await getUser();
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
        {formError && <span className="error">{formError}</span>}
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

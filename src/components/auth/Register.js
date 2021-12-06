import React, { useState, useEffect } from "react";
import "./Register.scss";
import { AddUser } from "../../api/auth";

function Register({ setRegisterFormOpen }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const [formError, setFormError] = useState(undefined);

  useEffect(() => {
    setFormError(undefined);
  }, [email, password, passwordVerify]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let Rdata = null;
    const formUser = {
      email: email,
      password: password,
      passwordVerify: passwordVerify,
    };
    Rdata = await AddUser(formUser)
      .then((res) => {
        console.log("res : ", res);
        return { result: true, data: res.data };
      })
      .catch((err) => {
        return { result: false, errorMessage: err.response.data.errorMessage };
      });
    if (Rdata.result) {
      closeEditor();
      console.log(Rdata);
    } else {
      setFormError(Rdata.errorMessage);
    }
  };
  function closeEditor() {
    setRegisterFormOpen(false);
    setPassword("");
    setPasswordVerify("");
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
        <label htmlFor="passwordVerify">Password verify :</label>
        <input
          id="passwordVerify"
          type="password"
          value={passwordVerify}
          onChange={(e) => {
            setPasswordVerify(e.target.value);
          }}
        ></input>
        {formError && <span className="error">{formError}</span>}
        <button className="btn-save" type="submit">
          Save
        </button>
        <button className="btn-close" type="button" onClick={closeEditor}>
          Close
        </button>
      </form>
    </div>
  );
}

export default Register;

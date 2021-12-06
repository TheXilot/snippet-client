import React from "react";
import { UserContextProvider } from "./context/UserContext";
import Router from "./Router";
import "./style/index.scss";

function App() {
  return (
    <UserContextProvider>
      <div className="container">
        <Router />
      </div>
    </UserContextProvider>
  );
}

export default App;

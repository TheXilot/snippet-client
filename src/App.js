import React from "react";
import { UserContextProvider } from "./context/UserContext";
import Router from "./Router";
import "./style/index.scss";
import history from "./history";
function App() {
  return (
    <UserContextProvider>
      <div className="container">
        <Router history={history} />
      </div>
    </UserContextProvider>
  );
}

export default App;

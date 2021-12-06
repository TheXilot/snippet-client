import { Axios } from "axios";
import React, { createContext, useState, useEffect } from "react";
import { LoggedInUser } from "../api/auth";

const UserContext = createContext();
function UserContextProvider(props) {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    const userRes = await LoggedInUser();
    setUser(userRes.data);
  }

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
}

export default UserContext;
export { UserContextProvider };

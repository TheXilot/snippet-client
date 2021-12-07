import React, { createContext, useState, useEffect } from "react";
import { LoggedInUser } from "../api/auth";

const UserContext = createContext();
function UserContextProvider(props) {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    console.log(user);
    try {
      const userRes = await LoggedInUser();
      setUser(userRes.data);
    } catch (err) {
      setUser(null);
    }
  }

  return (
    <UserContext.Provider value={{ user, getUser }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
export { UserContextProvider };

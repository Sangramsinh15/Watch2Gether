import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
const AuthContext = createContext();
/**
 * The function is to provide global level access to
 * the loggedin status based on the token generated
 * @param {*} props
 * @returns The funtion returns the logged in status
 */
function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  async function getLoggedIn(data) {
    // const loggedInRes = await axios.get(`${BACKEND_URL}/auth/loggedIn`);
    // setLoggedIn(loggedInRes.data);
    // if (loggedInRes.data) {
    //   console.log("logged in.....", loggedInRes);
    //   setUser({ email: loggedInRes.data.email });
    // }

    axios.get(`${BACKEND_URL}/auth/loggedIn`).then((res) => {
      setLoggedIn(res.data);
    });
    if (data) setUser(data.data);
  }

  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loggedIn, getLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}
/**
 * The context is being exported as AuthContext
 * so that this context can be imported into other modules.
 */
export default AuthContext;
export { AuthContextProvider };

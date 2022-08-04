import axios from "axios";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { BACKEND_URL } from "../../../config/index";
/**
 * The function is to create a component for logout 
 * with the backend api to clear the session
 * @returns The function returns the the logout button with UI
 */
function LogOutBtn() {
  const { getLoggedIn } = useContext(AuthContext);

  const history = useHistory();

  async function logOut() {
    await axios.get(`${BACKEND_URL}/auth/logout`);
    await getLoggedIn();
    history.push("/login");
  }

  return <button onClick={logOut}>Log out</button>;
}
/**
 * The component is being exported as LogOutBtn 
 * so that this component can be imported into other modules.
 */
export default LogOutBtn;

import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import LoginComp from "../../../components/UserRegistration/LogIn";
import AuthContext from "../../../context/AuthContext";
import { BACKEND_URL } from "../../../config";
/**
 * The function is responsible for creating a logged in 
 * session for the user.
 * @returns The function returns the login message and redirects to the home page.
 */
function Login() {
  const history = useHistory();
  const { getLoggedIn } = useContext(AuthContext);
  const [message, setMessage] = useState({});
  function setLogin(loginData) {
    try {
      axios
        .post(`${BACKEND_URL}/auth/login`, loginData)
        .then((data) => {
          getLoggedIn(data);
          history.push({
            pathname: "/home",
            state: { currentUserEmailId: data.data.email },
          });
        })
        .catch((error) => {
          setMessage(error.response.data.errorMessage);
        });
    } catch (err) {
      console.error("hey", err);
    }
  }

  return <LoginComp setLogin={setLogin} message={message} />;
}
/**
 * The container is being exported as CreatePostButton 
 * so that this container can be imported into other modules.
 */
export default Login;

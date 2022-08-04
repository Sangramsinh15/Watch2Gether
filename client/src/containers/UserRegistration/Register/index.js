import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import RegisterComp from "../../../components/UserRegistration/Register";
import AuthContext from "../../../context/AuthContext";
import { BACKEND_URL } from "../../../config";
/**
 * The function is responsible for passing
 * the registration form data from the components to
 * the backend using axios
 * @returns It returns the successful registration message or an error message
 */
function Register() {
  const history = useHistory();
  const { getLoggedIn } = useContext(AuthContext);
  const [message, setMessage] = useState({});

  async function setRegister(registerData) {
    try {
      axios
        .post(`${BACKEND_URL}/auth/register`, registerData)
        .then((res) => {
          getLoggedIn();
          history.push("/home");
        })
        .catch((error) => {
          setMessage(error.response.data.errorMessage);
        });
    } catch (err) {
      console.error(err.response);
    }
  }

  return <RegisterComp setRegister={setRegister} message={message} />;
}
/**
 * The container is being exported as CreatePostButton
 * so that this container can be imported into other modules.
 */
export default Register;

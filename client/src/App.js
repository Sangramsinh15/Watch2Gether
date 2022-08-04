import "./App.css";
import React from "react";
import Router from "./Router";
import axios from "axios";
import { AuthContextProvider } from "./context/AuthContext";

axios.defaults.withCredentials = true;
/**
 * This function renders the main application
 * @returns 
 */
function App() {
  return (
    <AuthContextProvider>
      <Router />
    </AuthContextProvider>
  );
}
/**
 * The default export as 'app'
 */
export default App;

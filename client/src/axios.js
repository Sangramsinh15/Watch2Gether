import axios from "axios";
/**
 * Create an instance of API for the movie information.
 */
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
/**
 * The default export as 'instance'
 */
export default instance;

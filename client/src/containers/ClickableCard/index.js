import React, { useState, useEffect } from "react";
import axios from "../../axios";
import ClickableCardComp from "../../components/ClickableCard";
import { BASE_URL } from "../../config";
/**
 * The function is responsible for creating the
 * container for clickable card in the home page
 * @param {*} param0 The parameters in the container
 * include the movies 
 * @returns The function returns the cotainer
 * for the feature of clickable card.
 */
function ClickableCard({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  return <ClickableCardComp title={title} baseURL={BASE_URL} movies={movies} />;
}
/**
 * The container is being exported as ClickableCard 
 * so that this container can be imported into other modules.
 */
export default ClickableCard;

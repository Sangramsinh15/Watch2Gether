import React, { useState, useEffect, useCallback } from "react";

import ChartComp from "../../components/Chart";
import axios from "../../axios";
import { API_KEY } from "../../config";

// let tvSeasonRatings = [];
/**
 * The function is responsible for logic of the chart
 * to display ratings for the season and episodes.
 * 
 * @param {*} props The parameters include the chart id, seasons and ratings
 * @returns The component for displaying the charts
 */
function Chart(props) {
  const { data } = props;
  const id = data.id;
  const [tvSeasons, setTvSeasons] = useState({});
  const [tvSeasonRatings, settvSeasonRatings] = useState([]);

  if (data.media_type === "tv" && Object.keys(tvSeasons).length === 0) {
    async function fetchData() {
      const request = await axios.get(
        `tv/${id}?api_key=e8ac04d8bb842037907ebb32aa9337a5&language=en-US`
      );
      setTvSeasons(Object.assign({}, request.data));
      return request;
    }
    fetchData();
  }

  // const calAllSeasonRatings = () => {
  //   const totalSeasons = tvSeasons.number_of_seasons;
  //   const arrURL = [];
  //   for (let i = 1; i <= totalSeasons; i++) {
  //     const seasonUrl = `https://api.themoviedb.org/3/tv/${id}/season/${i}?api_key=${API_KEY}&language=en-US`;
  //     arrURL.push(axios.get(seasonUrl));
  //   }
  //   let totalRating = [];

  //   Promise.all(arrURL)
  //     .then((response) => {
  //       response.map((res) => {
  //         let avgEpisodeRating = 0;
  //         const episodes = res.data.episodes;
  //         episodes.forEach((episode) => {
  //           avgEpisodeRating = avgEpisodeRating + episode.vote_average;
  //         });
  //         let seasonRating = avgEpisodeRating / episodes.length;
  //         totalRating.push(seasonRating);
  //         return true;
  //       });
  //       return totalRating;
  //     })
  //     .then((response) => {
  //       settvSeasonRatings([...response]);
  //     })
  //     .catch((err) => console.log(err));
  // };

  const isTvseason = Object.keys(tvSeasons).length;
  const callAllSeasonRatings = useCallback(() => {
    if (isTvseason) {
      const totalSeasons = tvSeasons.number_of_seasons;
      const arrURL = [];
      for (let i = 1; i <= totalSeasons; i++) {
        const seasonUrl = `https://api.themoviedb.org/3/tv/${id}/season/${i}?api_key=${API_KEY}&language=en-US`;
        arrURL.push(axios.get(seasonUrl));
      }
      let totalRating = [];

      Promise.all(arrURL)
        .then((response) => {
          response.map((res) => {
            let avgEpisodeRating = 0;
            const episodes = res.data.episodes;
            episodes.forEach((episode) => {
              avgEpisodeRating = avgEpisodeRating + episode.vote_average;
            });
            let seasonRating = avgEpisodeRating / episodes.length;
            totalRating.push(seasonRating);
            return true;
          });
          return totalRating;
        })
        .then((response) => {
          settvSeasonRatings([...response]);
        })
        .catch((err) => console.log(err));
    }
  }, [isTvseason, id, tvSeasons.number_of_seasons]);

  useEffect(() => {
    callAllSeasonRatings();
  }, [callAllSeasonRatings]);

  return (
    <React.Fragment>
      <ChartComp data={props} seasonRatings={tvSeasonRatings} id={id} />
    </React.Fragment>
  );
}
/**
 * The container is being exported as Chart 
 * so that this container can be imported into other modules.
 */
export default Chart;

import React, { useContext } from "react";
import ClickableCard from "../../containers/ClickableCard";
import Grid from "@mui/material/Grid";
import NavbarComp from "../../components/Navbar";
import requests from "../../requests";
import SearchResult from "../../containers/SearchResult";
import AuthContext from "../../context/AuthContext";
/**
 * The function is responsible for creating the home page layout
 * with movies ad shows in the grids.
 * @param {*} props.
 * @returns The grid of the movies and tv shows.
 */
function HomePage(props) {
  const { search, fetchSearchResults, clearSearchResults } = props;
  const { user } = useContext(AuthContext);
  const clickableCard = () => {
    return (
      <React.Fragment>
        <Grid item xs={12} className="App-header">
          <ClickableCard
            title="Trending Now"
            fetchURL={requests.fetchTrending}
          />
        </Grid>
        <Grid item xs={12} className="App-header">
          <ClickableCard title="Top Rated" fetchURL={requests.fetchTopRated} />
        </Grid>
        <Grid item xs={12} className="App-header">
          <ClickableCard
            title="Action Movies"
            fetchURL={requests.fetchActionMovies}
          />
        </Grid>
        <Grid item xs={12} className="App-header">
          <ClickableCard
            title="Comedy Movies"
            fetchURL={requests.fetchComedyMovies}
          />
        </Grid>
        <Grid item xs={12} className="App-header">
          <ClickableCard
            title="Trending Shows"
            fetchURL={requests.fetchTrendingTV}
          />
        </Grid>
      </React.Fragment>
    );
  };

  return (
    <Grid container spacing={2} className="App-header">
      <Grid container>
        <Grid item xs={12}>
          <NavbarComp
            data={search}
            fetchSearchResults={fetchSearchResults}
            currentUserEmailId={user}
          />
        </Grid>
        {search.length ? (
          <SearchResult data={search} clearSearchResults={clearSearchResults} />
        ) : (
          clickableCard()
        )}
      </Grid>
    </Grid>
  );
}
/**
 * The view is being exported as HomePage
 * so that this view can be imported into other modules.
 */
export default HomePage;

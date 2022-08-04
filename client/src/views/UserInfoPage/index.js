import React from "react";
import Grid from "@mui/material/Grid";
import NavbarComp from "../../components/Navbar";
import UserInfo from "../../containers/UserInfo";
import { Box } from "@mui/material";
import WatchList from "../../containers/WatchList";
import SearchResult from "../../containers/SearchResult";
/**
 * The user info page view will render the user info grids
 * It uses material component for user interface
 * @param {*} props 
 * @returns It returns the app header
 */
function UserInfoPage(props) {
  const { search, fetchSearchResults, clearSearchResults, user } = props;
  // const user = { email: "nm@gmail.com" };
  const userInfoFun = () => {
    return (
      <Grid container spacing={1} minHeight="100vh" maxWidth="320">
        <Grid item xs={6}>
          <UserInfo user={user} />
        </Grid>
        <Grid item xs={6}>
          <WatchList data={user} />
        </Grid>
      </Grid>
    );
  };

  return (
    <Box className="App-header" sx={{ minWidth: "100%", minHeight: "100%" }}>
      <NavbarComp data={search} fetchSearchResults={fetchSearchResults} />
      {search.length ? (
        <SearchResult data={search} clearSearchResults={clearSearchResults} />
      ) : (
        userInfoFun()
      )}
    </Box>
  );
}
/**
 * The view is being exported as UserInfoPage 
 * so that this view can be imported into other modules.
 */
export default UserInfoPage;

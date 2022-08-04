import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import WatchGroup from "../../containers/WatchGroup";
import NavbarComp from "../../components/Navbar";
import { Button, Typography } from "@mui/material";
import { useHistory } from "react-router-dom";
import { Box } from "@mui/material";
import SearchResult from "../../containers/SearchResult";
import { useLocation } from "react-router-dom";
import { BACKEND_URL } from "../../config";
import axios from "axios";
/**
 * The watch group view will render the grids for the watchgroups.
 * The function uses material ui
 * @param {*} props
 * @returns The function returns the app header
 */
function WatchGroupPage(props) {
  const { search, fetchSearchResults, clearSearchResults, user } = props;
  const [watchGroupData, setWatchGroupData] = useState({});
  const [allPosts, setAllPosts] = useState([]);
  const location = useLocation();
  const state = location.state; // This could be watchgroup id or user id
  const email = user.user.email;
  const watchgroup_id = watchGroupData.watchgroup_id;

  console.log("allPosts", allPosts);
  console.log("watchgroup_id", watchgroup_id);

  useEffect(() => {
    axios
      .post(`${BACKEND_URL}/wg/fetchByWatchGroupID`, {
        watchgroup_id: state.watchgroup_id,
      })
      .then((res) => {
        setWatchGroupData(res.data.data);
      });
  }, [state]);

  useEffect(() => {
    axios
      .post(`${BACKEND_URL}/pt/fetchAllPost`, {
        email: email,
      })
      .then((res) => {
        setAllPosts(res.data.data);
      });
  }, [email]);

  const displayPoints = (email) => {
    const post = allPosts.find((post) => post.email === email);
    if (post && parseInt(post.watchgroup_id) === watchgroup_id) {
      return post && post.total_points;
    } else {
      return 0;
    }
  };

  const watchGroupFun = () => {
    return (
      <React.Fragment>
        <Grid item xs={12}>
          <Grid container spacing={1} paddingRight={3}>
            <Grid item xs={12}>
              <Box
                sx={{
                  flexGrow: 1,
                  marginTop: 5,
                  marginLeft: 4,
                  paddingTop: 2,
                  borderRadius: 1,
                  border: 1,
                  borderColor: "#ad1457",
                }}
              >
                <Typography variant="h5" align="center">
                  {watchGroupData.watchgroup_title &&
                    `WG - ${watchGroupData.watchgroup_title.toUpperCase()}`}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container paddingRight={3} minHeight="100vh">
            <Grid item xs={12}>
              <WatchGroup
                watchGroupData={watchGroupData}
                user={user}
                type={state.type}
                watchgroup_id={state.watchgroup_id}
                displayPoints={displayPoints}
              />
            </Grid>
            <Grid item xs={12} align="center">
              <Button variant="contained" onClick={handleClick}>
                View Discussion Thread
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  };

  const history = useHistory();

  const handleClick = () => {
    history.push({
      pathname: "/post",
      state: { watchGroupData: watchGroupData },
    });
  };

  return (
    <Grid container className="App-header">
      <Grid item xs={12}>
        <NavbarComp data={search} fetchSearchResults={fetchSearchResults} />
      </Grid>
      {search.length ? (
        <SearchResult data={search} clearSearchResults={clearSearchResults} />
      ) : (
        watchGroupFun()
      )}
    </Grid>
  );
}
/**
 * The view is being exported as WatchGroupPage
 * so that this view can be imported into other modules.
 */
export default WatchGroupPage;

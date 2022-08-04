import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import NavbarComp from "../../components/Navbar";
import PostComp from "../../components/Post";
import SearchResult from "../../containers/SearchResult";
import CreatePostButton from "../../components/CreatePost";
import { BACKEND_URL } from "../../config";
import { useLocation } from "react-router-dom";
import axios from "axios";

/**
 * The function is responsible for sending
 * the post data to the backend API using axios
 * @param {*} props
 * @returns
 */
function Post(props) {
  const { search, fetchSearchResults, clearSearchResults } = props;
  const [postData, setPostData] = useState([]);
  const location = useLocation();
  const watchGroupData = location.state; // This could be watchgroup id or user id
  useEffect(() => {
    axios
      .post(`${BACKEND_URL}/pt/post`, {
        watchgroup_id: location.state.watchGroupData.watchgroup_id,
      })
      .then((res) => {
        setPostData(res.data.data);
      });
  }, [location.state.watchGroupData.watchgroup_id]);

  /**
   * The function is responsible for creating the post container
   * that creates a form for the user input
   * @returns
   */
  const postFun = () => {
    return (
      <React.Fragment>
        <Grid item xs={12}>
          <CreatePostButton watchGroupData={watchGroupData} />
        </Grid>

        {postData.map((post) => {
          return (
            <Grid item xs={3}>
              <PostComp postData={post}></PostComp>
            </Grid>
          );
        })}
      </React.Fragment>
    );
  };

  return (
    <Box sx={{ flexGrow: 1 }} className="App-header">
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <NavbarComp data={search} fetchSearchResults={fetchSearchResults} />
        </Grid>
        {search.length ? (
          <SearchResult data={search} clearSearchResults={clearSearchResults} />
        ) : (
          postFun()
        )}
      </Grid>
    </Box>
  );
}

/**
 * The container is being exported as CreatePostButton
 * so that this container can be imported into other modules.
 */
export default Post;

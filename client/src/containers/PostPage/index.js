import React from "react";
import { Grid } from "@mui/material";
import NavbarComp from "../../components/Navbar";
import PostPageComp from "../../components/PostPage";
import SearchResult from "../../containers/SearchResult";
import { useLocation } from "react-router-dom";
// import DeletePostButton from "../../components/DeletePost";

/**
 * Postpage function returns the post along with description and author name and ability
 * to upvote and disccuss through comments
 * @param {*} props
 * @returns postpage / navbar / comment section
 */
function PostPage(props) {
  const { search, fetchSearchResults, clearSearchResults } = props;
  const location = useLocation();
  const postData = location.state; // This could be watchgroup id or user id

  return (
    <Grid container>
      <Grid item xs={12}>
        <NavbarComp data={search} fetchSearchResults={fetchSearchResults} />
      </Grid>
      <Grid item xs={12}>
        {search.length ? (
          <SearchResult data={search} clearSearchResults={clearSearchResults} />
        ) : (
          <PostPageComp postData={postData} />
        )}
      </Grid>
    </Grid>
  );
}

/**
 * The container is being exported as CreatePostButton
 * so that this container can be imported into other modules.
 */
export default PostPage;

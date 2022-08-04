import React from "react";
import { Grid } from "@mui/material";
import NavBar from "../../components/Navbar";
import CreatePostForm from "../../components/CreatePostForm/";
import { useLocation } from "react-router-dom";

/**
 * Create Post page is responsible for creating form through which
 * the users can create a post
 * @returns CreatePostForm The function returns the form
 * in grid for create post page.
 */
function CreatePostPage() {
  const location = useLocation();
  const state = location.state; // This could be watchgroup id or user id

  return (
    <Grid container>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12}>
        <CreatePostForm watchGroupData={state} />
      </Grid>
    </Grid>
  );
}
/**
 * The container is being exported as CreatePostButton
 * so that this container can be imported into other modules.
 */
export default CreatePostPage;

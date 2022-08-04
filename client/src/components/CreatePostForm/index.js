import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AttachmentIcon from "@mui/icons-material/Attachment";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { BACKEND_URL } from "../../config";
import axios from "axios";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const Input = styled("input")({
  display: "none",
});
/**
 * The function to create a form for the posts.
 * The function returns the form with materialUI
 */
function CreatePostForm(props) {
  const { user } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const history = useHistory();
  const { watchGroupData } = props.watchGroupData;

  async function handleSubmit(e) {
    e.preventDefault();
    const createPostData = {
      post_title: title,
      post_descr: description,
      watchgroup_id: watchGroupData.watchgroup_id,
      movie_show_id: watchGroupData.movie_show_id,
      creation_date: watchGroupData.creation_date,
      firstName: user.user.firstName,
      lastName: user.user.lastName,
      poster_url: watchGroupData.poster_url,
    };
    axios
      .post(`${BACKEND_URL}/pt/createPost`, createPostData)

      .then((res) => {
        // setIsSuccessful(res.success);
        if (res.data.success) {
          history.push({
            pathname: "/post",
            state: { watchGroupData: watchGroupData },
          });
        }
      });
  }

  return (
    <Container component="main">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "LEFT",
        }}
      >
        <Typography variant="h3" pb={2}>
          CREATE POST
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} pb={2}>
              <TextField required fullWidth label="MOVIE/SERIES TITLE" />
            </Grid>
            <Grid item xs={12} pb={2}>
              <TextField required fullWidth label="SEASON & EPISODE" />
            </Grid>
            <Grid item xs={12} pb={2}>
              <TextField
                required
                fullWidth
                label="POST TITLE"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} pb={2}>
              <TextField
                onChange={(e) => setDescription(e.target.value)}
                fullWidth
                id="filled-multiline-flexible"
                label="Description"
                multiline
                helperText="Short Description about the post"
                variant="filled"
              />
            </Grid>
            <Grid item xs={2} pb={2}>
              <label htmlFor="contained-button-file">
                <Button
                  variant="contained"
                  component="span"
                  endIcon={<AttachmentIcon />}
                >
                  <Input
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    type="file"
                  />
                  Upload
                </Button>
              </label>
            </Grid>
            <Grid item xs={2} pb={2}>
              <Button type="submit" variant="contained" pl={1}>
                CREATE POST
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
/**
 * The component is being exported as CreatePostForm
 * so that this component can be imported into other modules.
 */
export default CreatePostForm;

import React, { useEffect, useState } from "react";
import { Card, Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, IconButton } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Stack from "@mui/material/Stack";
import { useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import axios from "axios";
import { BACKEND_URL } from "../../config";
/**
 * The  is to create a post component in the front end.
 * it renders the post component using materialUI
 * @param {*} props The parameters include image, heaing, total_points
 * @returns It returns the post component to be in post page
 */
import { BASE_URL } from "../../config";

const PostComp = (props) => {
  const history = useHistory();
  const { postData } = props;
  const [count, setCount] = useState(postData.total_points);

  const handleRedirect = () => {
    history.push({
      pathname: "/postPage",
      state: postData,
    });
  };

  const handleLikeCounter = () => {
    setCount(count + 1);
    axios
      .post(`${BACKEND_URL}/pt/likePostCount`, {
        post_id: "1",
        total_points: count,
      })
      .then((res) => {
        console.log(res);
      });
  };

  useEffect(() => {
    axios
      .post(`${BACKEND_URL}/pt/fetchPostByID`, {
        post_id: postData.post_id,
      })
      .then((res) => {
        console.log(res);
      });
  }, [postData.post_id]);

  return (
    <Box p={1}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="175"
            image={`${BASE_URL}${postData.poster_url}`}
            alt="green iguana"
          />
          <CardContent>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={10}>
              <Avatar
                alt="Remy Sharp"
                xs={6}
                src="/static/images/avatar/1.jpg"
              />

              <h5 style={{ paddingTop: "5%" }}> {props.time}</h5>
            </Stack>

            <Typography gutterBottom variant="h5" component="div" mt={2} pt={1}>
              {postData.post_title}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {postData.post_descr}
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions style={{ justifyContent: "space-between" }}>
          <Button
            variant="contained"
            onClick={handleRedirect}
            style={{ marginLeft: "3%" }}
          >
            VIEW
          </Button>
          <Grid>
            <IconButton size="large" onClick={handleLikeCounter}>
              <ThumbUpIcon />
            </IconButton>
            {/* {postData.total_points} */}
            {count}
          </Grid>
        </CardActions>
      </Card>
    </Box>
  );
};
/**
 * The component is being exported as PostComp
 * so that this component can be imported into other modules.
 */
export default PostComp;

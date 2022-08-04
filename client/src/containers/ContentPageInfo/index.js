import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../config/index";
import { BACKEND_URL } from "../../config";
import Grid from "@mui/material/Grid";
import { Box, Button, Divider, Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import WatchListComp from "../../components/Watchlist";
import Chart from "../../containers/Chart";
import EventIcon from "@mui/icons-material/Event";
import { useStyles } from "./style";
import { Link } from "react-router-dom";
import axios from "axios";
/**
 * The function is responsible for creating the content page UI element
 * The function uses material UI for user interface
 * @param {*} props The parameters include movie data and watch group data
 * @returns The function returns the component to display the content page
 */
const ContentPageInfo = (props) => {
  const classes = useStyles();
  const { data } = props;
  const [watchGroupData, setWatchGroupData] = useState([]);

  useEffect(() => {
    const { id } = data;
    axios
      .post(`${BACKEND_URL}/wg/fetchWatchGroup`, { movie_show_id: id })
      .then((res) => {
        setWatchGroupData(res.data);
      });
  }, [data]);
  return (
    <Box>
      <Grid container className={classes.root}>
        <Grid container spacing={2}>
          {/*-------------- image container -----------*/}

          <Grid item xs={2}>
            <img
              className={classes.image}
              height="300px"
              src={`${BASE_URL}${data.poster_path}`}
              alt={data.name}
            />
          </Grid>
          {/*-------------- Description container -----------*/}
          <Grid item xs={10} alignItems="center">
            <Box pt={8}>
              <Typography variant="h3">{data.original_title}</Typography>
            </Box>

            <Box pt={1}>
              {data.genres &&
                data.genres.map((genre) => (
                  <Chip label={genre.name} variant="outlined" color="primary" />
                ))}
            </Box>

            <Box pt={2}>
              <Typography>{data.overview}</Typography>
            </Box>
          </Grid>
        </Grid>
        {/* Add Schedule button section */}
        <Grid item>
          <Box display="flex" justifyContent="flex-end">
            <Button
              variant="outlined"
              component={Link}
              to={{
                pathname: "/calendar",
                state: data, // your data array of objects
              }}
            >
              <EventIcon />
              Add to Schedule
            </Button>
          </Box>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box display="flex" pt={3} paddingBottom={1}>
              <Typography variant="h5">Reviews</Typography>
            </Box>
            <Divider classes={{ root: classes.divider }} />
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                flexGrow: 1,
                marginTop: 5,
                marginLeft: 4,
                marginRight: 4,
                border: 1,
                borderRadius: 1,
                borderColor: "#ad1457",
              }}
            >
              <Chart data={data} />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" pt={3} paddingBottom={1}>
              <Typography variant="h5">Watch Group(s)</Typography>
            </Box>
            <Divider classes={{ root: classes.divider }} />
          </Grid>
          <Grid item xs={12}>
            <WatchListComp watchGroupData={watchGroupData} />
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
/**
 * The container is being exported as ContentPageInfo 
 * so that this container can be imported into other modules.
 */
export default ContentPageInfo;

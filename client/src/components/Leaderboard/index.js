// reference: https://github.com/akashyap2013/LeaderBoard_React_App

import React from "react";
import Profiles from "./profiles";
import Grid from "@mui/material/Grid";
import { Divider, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import dateFilter from "./leaderboardDateFilter";
import { Box } from "@mui/system";
/**
 * The function creates the grid for the leader board.
 * It uses material for the user interface
 * @param {*} props - The parameters include the data and time period sent from view
 * @returns - It returns the grid container of leaderboard
 */
export default function LeaderboardComp(props) {
  const { data, period, displayPoints } = props;

  const handleClick = (e) => {
    props.handleClick(e.target.dataset.id);
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12}>
        <Box paddingBottom={2}>
          <Typography variant="h4" align="center">
            Leaderboard
          </Typography>
          <Divider />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Stack spacing={2} direction="row" justifyContent="center">
          <Button variant="outlined" onClick={handleClick} data-id="7">
            7 Days
          </Button>
          <Button variant="outlined" onClick={handleClick} data-id="30">
            30 Days
          </Button>
          <Button variant="outlined" onClick={handleClick} data-id="0">
            All-time
          </Button>
        </Stack>
      </Grid>
      <Grid container>
        <Grid item>
          {data && (
            <Profiles
              data={dateFilter(data, period)}
              displayPoints={displayPoints}
            />
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

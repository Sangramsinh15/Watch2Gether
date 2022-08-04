import React from "react";
import Grid from "@mui/material/Grid";
import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ListUsers from "./list";
/**
 * The function is responsible to create 
 * a list of users component for the watchgroup
 * @param {*} props 
 * @returns The parameters include the data object of the user list component
 */
export default function UserListComp(props) {
  const { data } = props;

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12}>
        <Box paddingBottom={2}>
          <Typography variant="h4" align="center">
            User's in this Watch Group
          </Typography>
          <Divider />
        </Box>
      </Grid>
      <Grid container>
        <Grid item>
          <ListUsers data={data} />
        </Grid>
      </Grid>
    </Grid>
  );
}

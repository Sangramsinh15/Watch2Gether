import React from "react";
import Grid from "@mui/material/Grid";
import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SearchResultList from "./search";
/**
 * The function is responsible for creating the search result component 
 * The component is useful for showing all the search results in a page
 * @param {*} props The parameters include data base url and the search results
 * @returns 
 */
export default function SearchResultComp(props) {
  const { data, baseURL, clearSearchResults } = props;

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12}>
        <Box paddingBottom={2}>
          <Typography variant="h4" align="center">
            Search Result
          </Typography>
          <Divider />
        </Box>
      </Grid>
      <Grid container>
        <Grid item>
          <SearchResultList
            data={data}
            baseURL={baseURL}
            clearSearchResults={clearSearchResults}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

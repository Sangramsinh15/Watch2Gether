import React from "react";
import NavbarComp from "../../components/Navbar";
import ContentPageInfo from "../../containers/ContentPageInfo";
import { Box } from "@mui/material";
import SearchResult from "../../containers/SearchResult";
/**
 * The function is responsible for creating a box element
 * for the search bar in the content page.
 * @param {*} props 
 * @returns The function returns the UI for the search box
 */
function ContentPage(props) {
  const { search, fetchSearchResults, clearSearchResults } = props;
  const { state } = props.location;
  return (
    <Box className="App-header" sx={{ minWidth: "100%", minHeight: "100%" }}>
      <NavbarComp
        data={search}
        fetchSearchResults={fetchSearchResults}
        clearSearchResults={clearSearchResults}
      />

      {search.length ? (
        <SearchResult data={search} clearSearchResults={clearSearchResults} />
      ) : (
        <ContentPageInfo data={state} />
      )}
    </Box>
  );
}
/**
 * The view is being exported as ContentPage 
 * so that this view can be imported into other modules.
 */
export default ContentPage;

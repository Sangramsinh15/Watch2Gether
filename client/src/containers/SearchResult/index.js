import React from "react";
import SearchResultComp from "../../components/SearchResult";
import { BASE_URL } from "../../config";
/**
 * The function is responsible for creating the container
 * for search results 
 * @param {*} props 
 * @returns The data after fetching the search result.
 */
function SearchResult(props) {
  const { data, clearSearchResults } = props;
  return (
    <SearchResultComp
      data={data}
      baseURL={BASE_URL}
      clearSearchResults={clearSearchResults}
    />
  );
}
/**
 * The container is being exported as CreatePostButton 
 * so that this container can be imported into other modules.
 */
export default SearchResult;

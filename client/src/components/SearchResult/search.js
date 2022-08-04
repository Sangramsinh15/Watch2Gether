import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { useHistory } from "react-router-dom";
import Divider from "@mui/material/Divider";
import { Button } from "@mui/material";

const useStyles = makeStyles({
  root: {
    minWidth: "40%",
    paddingLeft: "2%",
  },
});
/**
 * The function is responsible for creating the search box that is at
 * the top of navigation bar.
 * @param {*} props The parameters include the keyboarinout from the user for search
 * @returns The function returns the list of search items and the button for search
 */
export default function SearchResultList(props) {
  const [dense] = React.useState(false);
  const classes = useStyles();
  const history = useHistory();
  const clear = (value) => {
    props.clearSearchResults();
    history.push({
      pathname: "/contentPage",
      state: value,
    });
  };
  return (
    <Grid item xs={12}>
      <List dense={dense}>
        {props.data.map((value, index) => {
          return (
            <React.Fragment>
              <Button
                onClick={() => clear(value)}
                color="secondary"
                style={{ textTransform: "none" }}
              >
                <ListItem key={index}>
                  <img
                    src={`${props.baseURL}${value.poster_path}`}
                    alt="Hi"
                    width="153px"
                    height="230px"
                  />
                  <ListItemText
                    className={classes.root}
                    primary={value.original_title || value.name}
                    secondary={value.overview}
                  />
                </ListItem>
              </Button>
              <Divider />
            </React.Fragment>
          );
        })}
      </List>
    </Grid>
  );
}

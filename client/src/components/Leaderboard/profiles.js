import * as React from "react";
// import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    minWidth: "80%",
  },
});
/**
 * The function is show the profiles of each person with his name and score
 * @param {*} props - The parameters include the map data of user an his score.
 * @returns - The function returns grid containing the user name and the score.
 */
export default function Profiles(props) {
  const [dense] = React.useState(false);
  const [secondary] = React.useState(false);
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <List dense={dense}>
        {props.data &&
          props.data.map((value) => {
            const initials =
              value.firstName.toUpperCase().charAt(0) +
              value.lastName.toUpperCase().charAt(0);
            const name = value.firstName + " " + value.lastName;

            return (
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <Avatar>{initials}</Avatar>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  className={classes.root}
                  primary={name}
                  secondary={secondary ? "Secondary text" : null}
                />
                <ListItemText
                  primary={props.displayPoints(value.email)}
                  secondary={secondary ? "Secondary text" : null}
                />
              </ListItem>
            );
          })}
      </List>
    </Grid>
  );
}

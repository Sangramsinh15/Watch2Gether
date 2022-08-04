import React, { useContext } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
// import { makeStyles } from "@material-ui/core";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

// const useStyles = makeStyles({
//   button: {
//     color: "black",
//     backgroundColor: "skyblue",
//   },
// });

const HeadItem = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#642D3C",
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "white",
}));
/**
 * The function is to create a component for displaying
 * all the watchgroups
 * @param {*} props The parameters to pass to the component
 * incude watch group title and id
 * @returns The UI for the box component of the watchgroup
 */
export default function WatchListComp(props) {
  const history = useHistory();
  const watchGroupData = props.watchGroupData;
  const { user } = useContext(AuthContext);

  const watchListFun = () => {
    return (
      watchGroupData.data &&
      watchGroupData.data.map((value) => {
        const userExist = value.userlist.find(
          (u) => u.email === user.user.email
        );

        return (
          <ListItem
            key={value}
            disableGutters
            disableRipple
            disableTouchRipple
            alignItems="flex-start"
            sx={{ borderBottom: 1 }}
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                sx={{
                  color: "#fff",
                  boxShadow: 1,
                  border: 2,
                  borderRadius: 5,
                  borderColor: "secondary.main",
                  padding: 1,
                  margin: 2,
                  textAlign: "center",
                }}
                primary={`WG - ${value.watchgroup_title}`}
              />
              <ListItemText
                sx={{
                  color: "#fff",
                  boxShadow: 1,
                  border: 2,
                  borderRadius: 5,
                  borderColor: "secondary.main",
                  padding: 1,
                  margin: 2,
                  textAlign: "center",
                }}
                primary={`${value.creation_date}`}
              />

              <Button
                sx={{ mr: 2 }}
                variant="contained"
                onClick={() => handleClick(value.watchgroup_id, "view")}
              >
                View
              </Button>
              <Button
                variant="contained"
                onClick={() => handleClick(value.watchgroup_id, "join")}
                disabled={userExist && true}
              >
                Join
              </Button>
            </ListItem>
          </ListItem>
        );
      })
    );
  };

  const handleClick = (watchgroup_id, type) => {
    history.push({
      pathname: "/watchGroup",
      state: { watchgroup_id, type },
    });
  };
  // const classes = useStyles();
  return (
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
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <HeadItem>Watch Groups List</HeadItem>
        </Grid>
        <Grid item xs={12}>
          <List
            sx={{ width: "100%", bgcolor: "transparent", color: "#424242" }}
          >
            {watchListFun()}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}

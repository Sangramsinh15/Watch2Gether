import React, { useContext } from "react";
import { Avatar, Grid } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ImageIcon from "@mui/icons-material/Image";
import DeletePostButton from "../DeletePost";
import Comments from "../../containers/Comments/Comments";
import { BASE_URL } from "../../config";
import AuthContext from "../../context/AuthContext";

/**
 * The function creates the component for the individual post page
 * @returns The component of post page with all the styles.
 */

const PostPageComp = (props) => {
  const { postData } = props;
  const { user } = useContext(AuthContext);

  const styleObjHeading = {
    fontSize: 35,
    color: "rgb(153 163 204)",
    fontFamily: "Monospace",
  };

  const padding = {
    padding: 0,
  };

  const styleObjPara = {
    fontSize: 17,
    color: "rgb(153 163 204)",
    fontFamily: "Monospace",
    alignItems: "end",
  };

  const styleObjAuth = {
    fontSize: 18,
    color: "rgb(153 163 204)",
    fontFamily: "Arial, Helvetica, sans-serif",
  };

  return (
    <Grid container p={2}>
      <Grid
        item
        xs={6}
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          overflow: "hidden",
        }}
        p={2}
      >
        <div>
          <img
            height="550px"
            width="450px"
            src={`${BASE_URL}${postData.poster_url}`}
            alt="BigCo Inc. logo"
          />
        </div>
      </Grid>
      <Grid item xs={6} p={2}>
        <h2 style={styleObjHeading}>{postData.post_title}</h2>
        <p style={styleObjPara}>{postData.post_descr}</p>
        <List
          sx={{
            maxWidth: 360,
            pt: 8,
          }}
        >
          <ListItem sx={{ alignItems: "left" }} style={padding}>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={`${user.user.firstName} ${user.user.lastName}`}
              disableTypography="false"
              style={styleObjAuth}
            />
            <ListItemText style={styleObjPara}>
              {postData.creation_date}
            </ListItemText>
          </ListItem>
        </List>

        <DeletePostButton />
      </Grid>
      <Comments currentUserId="1" />
      <Grid></Grid>
    </Grid>
  );
};
/**
 * The component is being exported as PostPageComp
 * so that this component can be imported into other modules.
 */
export default PostPageComp;

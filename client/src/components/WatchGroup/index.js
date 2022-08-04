import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Leaderboard from "../../containers/Leaderboard";
import UserList from "../../containers/UserList";
import { BACKEND_URL } from "../../config";
import axios from "axios";

/**
 * The function is responsible for creating the UI for
 * discussion thread retuns leader board and user list
 * for a particular watch group
 * @returns The component to display the leader board and user list
 */
function WatchGroupComp(props) {
  const { watchGroupData, user, type, displayPoints } = props;
  const [userlist, setUserList] = useState(
    watchGroupData
      ? watchGroupData.userlist
        ? watchGroupData.userlist
        : []
      : []
  );

  useEffect(() => {
    const currentUser = { ...user.user };
    if (type === "join") {
      const watchGroupURL = `${BACKEND_URL}/wg/updateWatchGroupByUser`;

      axios
        .post(watchGroupURL, {
          watchgroup_id: props.watchgroup_id,
          currentUser,
        })
        .then((res) => {
          setUserList(res.data.data.userlist);
        });
    } else if (type === "view") {
      const watchGroupURL = `${BACKEND_URL}/wg/fetchByWatchGroupID`;

      axios
        .post(watchGroupURL, {
          watchgroup_id: props.watchgroup_id,
        })
        .then((res) => {
          setUserList(res.data.data.userlist);
        });
    }
  }, [user, type, props.watchgroup_id]);
  return (
    <Grid container spacing={1}>
      <Grid item xs={6}>
        <Box
          sx={{
            flexGrow: 1,
            marginTop: 5,
            marginLeft: 4,
            paddingTop: 2,
            borderRadius: 1,
            border: 1,
            borderColor: "#ad1457",
          }}
        >
          <Grid container spacing={1} justifyContent="center">
            <Grid item xs={6}>
              <Leaderboard userlist={userlist} displayPoints={displayPoints} />
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box
          sx={{
            flexGrow: 1,
            marginTop: 5,
            marginLeft: 4,
            paddingTop: 2,
            borderRadius: 1,
            border: 1,
            borderColor: "#ad1457",
          }}
        >
          <Grid container spacing={1} justifyContent="center">
            <Grid item xs={6}>
              <UserList userlist={userlist} />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
/**
 * The component is being exported as WatchGroupComp
 * so that this component can be imported into other modules.
 */
export default WatchGroupComp;

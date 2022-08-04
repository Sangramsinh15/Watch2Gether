import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import axios from "axios";
import { BACKEND_URL } from "../../config";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#642D3C",
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "white",
}));

// const PointItem = styled(Paper)(({ theme }) => ({
//   backgroundColor: 'transparent',
//   ...theme.typography.body1,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   paddingTop: 50,
//   height: 55,
// }));
/**
 * The function is responsible for creating the component for
 * displaying the user total points
 * @returns It returns the component with user total points UI
 */
function UserTotalPointComp(props) {
  const email = props.data.email;
  let count = 0;
  const [data, setData] = useState([]);

  const totalPoints = () => {
    data.map((d) => {
      if (d.email === email) {
        count = count + d.total_points;
      }
      return true;
    });
    return count;
  };

  useEffect(() => {
    axios
      .post(`${BACKEND_URL}/pt/fetchAllPost`, { email: email })
      .then((res) => {
        setData(res.data.data);
      });
  }, [email]);

  return (
    <Box
      sx={{
        flexGrow: 1,
        marginTop: 10,
        marginLeft: 4,
        borderRadius: 1,
        border: 1,
        borderColor: "#ad1457",
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Item>Total Points:</Item>
        </Grid>
        <Grid item xs={6} mx="auto">
          <Typography variant="h5" align="center">
            {totalPoints()}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
/**
 * The component is being exported as UserTotalPointComp
 * so that this component can be imported into other modules.
 */
export default UserTotalPointComp;

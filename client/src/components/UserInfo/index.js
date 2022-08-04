import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
/**
 * The constant variable to set the backgroun colour
 */
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign: "center",
}));
/**
 * The constant variable to set the theme for header
 */
const HeadItem = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#642D3C",
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "white",
}));
/**
 * The function is to create a user profile component in the front end
 * @param {*} props The parameters include the object of details for the component
 * @returns The function returns the grid for the user info component
 */
function UserInfoComp(props) {
  const { data } = props;
  return (
    <Box
      sx={{
        flexGrow: 1,
        marginTop: 5,
        marginLeft: 4,
        borderRadius: 1,
        border: 1,
        borderColor: "#ad1457",
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <HeadItem>UserInfo</HeadItem>
        </Grid>
        <Grid item xs={6}>
          <Item>First Name:</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>{data.firstName}</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Last Name:</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>{data.lastName}</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Email:</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>{data.email}</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Phone Number:</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>{data.phone}</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
/**
 * The component is being exported as UserInfoComp
 * so that this component can be imported into other modules.
 */
export default UserInfoComp;

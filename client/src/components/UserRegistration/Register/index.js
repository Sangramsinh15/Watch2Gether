import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

/**
 * Create the alert button for wrong inputs by the user
 */
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
/**
 * The function is responsible for creating the register form in the front end
 * The form uses material ui for user interface
 * @param {*} props The parameters inclue the inputs from the user for registration
 * @returns It returns the form with all the valid inputs an textboxes.
 */
function RegisterComp(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  function setRegister(registerData) {
    props.setRegister(registerData);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const registerData = {
      firstName,
      lastName,
      email,
      phone,
      password,
      passwordVerify,
    };
    await setRegister(registerData);
    if (Object.keys(props.message).length !== 0) {
      setOpen(true);
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="phone"
                label="Phone Number"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoComplete="phone"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="passwordVerify"
                label="Confirm Password"
                type="password"
                id="passwordVerify"
                value={passwordVerify}
                onChange={(e) => setPasswordVerify(e.target.value)}
                autoComplete="verify-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {props.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}
/**
 * The component is being exported as RegisterComp 
 * so that this component can be imported into other modules.
 */
export default RegisterComp;

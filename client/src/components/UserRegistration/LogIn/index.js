import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
/**
 * The function is to create the login form in the front end
 * @param {*} props The parameters include email an password for the login form
 * @returns The function returns the entire UI component for the login form
 */
function LoginComp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  function setLogin(loginData) {
    props.setLogin(loginData);
  }

  async function login(e) {
    e.preventDefault();
    const loginData = {
      email,
      password,
    };
    setLogin(loginData);

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
          Log In
        </Typography>
        <Box component="form" noValidate onSubmit={login} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
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
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/register" variant="body2">
                Want to Register? Sign Up
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
 * The component is being exported as LoginComp
 * so that this component can be imported into other modules.
 */
export default LoginComp;

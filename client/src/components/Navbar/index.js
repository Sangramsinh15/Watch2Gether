import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { makeStyles } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
// import axios from "../../axios";
// import AuthContext from "../../context/AuthContext";
// import { BACKEND_URL } from "../../config/index";
// import { useCookies } from "react-cookie";

const pages = ["MOVIES", "TV SHOWS"];
const settings = ["Profile", "Logout"];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#2b282a",
    color: "White",
  },
  logo: {
    color: "red",
    backgroundColor: "green",
  },
});
/**
 * The component is creating the contents of the navigation bar.
 * The component is responsible for the navigation bar that will be used in othe components
 * The component uses material for the user interface
 * @param {*} props The parameters include props from the container modules
 * @returns The component retuns the navigation bar
 */
const NavbarComp = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  // const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();
  // const [cookies, removeCookie] = useCookies(["token"]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleChange = (event, type) => {
    if (event.key === "Enter" && type === "search") {
      props.fetchSearchResults(event.target.value, "search");
    } else if (type === "MOVIES" || type === "TV SHOWS") {
      props.fetchSearchResults(event.target.value, type);
    }
  };

  const handleClick = (event) => {
    const value = event.target.innerText;
    if (value === "Profile") {
      history.push("/userInfo");
    }
    if (value === "Logout") {
      history.push("/login");
    }
  };

  // const handleData = (event) => {
  //   props.fetchMovieShowData(event.target.value);
  // };

  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.navbar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button
            component={Link}
            to="/home"
            onClick={props.clearSearchResults}
          >
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{
                mr: 2,
                border: 1,
                borderColor: "grey",
                p: 1.1,
                fontStyle: "oblique",
                fontWeight: "bold",
                borderRadius: 16,
                fontColor: "red",
                fontFamily: "Quantico",
                display: { xs: "none", md: "flex" },
              }}
            >
              W2G
            </Typography>
          </Button>

          <Box sx={{ flexGrow: 0 }}>
            <Search
              onKeyUp={(event) => {
                handleChange(event, "search");
              }}
            >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem
                  value={page}
                  key={index}
                  onClick={(event) => handleChange(event, page)}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Watch2Gether
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Button
                key={index}
                value={page}
                onClick={(event) => handleChange(event, page)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, index) => (
                <MenuItem
                  value={setting}
                  key={index}
                  onClick={(event) => handleClick(event)}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
/**
 * The component is being exported as NavbarComp
 * so that this component can be imported into other modules.
 */
export default NavbarComp;

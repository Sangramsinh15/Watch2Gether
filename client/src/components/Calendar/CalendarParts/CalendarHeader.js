import dayjs from "dayjs";
import React, { useContext } from "react";
import GlobalContext from "../../../context/GlobalContext";
import AppBar from "@mui/material/AppBar";
import { Grid, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
/**
 * Function to manipulate months in calendar. will affect Next month and Prev Month buttons.
 * Also used for Today Button, which resets the calandar to today's date
 */

export default function CalendarHeader() {
  const { monthIndex, indexMonthSet } = useContext(GlobalContext);
  const one = 1;
  function previousMonthHandling() {
    indexMonthSet(monthIndex - one);
  }
  function nextMonthHandling() {
    indexMonthSet(monthIndex + one);
  }
  function handleReset() {
    indexMonthSet(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }
  return (
    // UI for calendar Header including logo, Today button, Prev & Next month buttons
    <AppBar position="static">
      <Grid container spacing={2} sx={{ mt: 1, ml: 1 }}>
        <Grid>
          <Button component={Link} to="/home">
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{
                mr: 1,
                border: 1,
                borderColor: "grey",
                p: 0.5,
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
        </Grid>
        <Grid sx={{ mr: 2 }}>
          <Typography sx={{ mt: 1.5 }} variant="h5" noWrap>
            User's Schedule
          </Typography>
        </Grid>
        <Grid sx={{ mr: 3 }}>
          <Button sx={{ mt: 1.5 }} variant="contained" onClick={handleReset}>
            Today
          </Button>
        </Grid>
        <Grid sx={{ mr: 1 }}>
          <Button
            sx={{ mt: 1.5 }}
            variant="outlined"
            color="secondary"
            onClick={previousMonthHandling}
          >
            Prev-Month
          </Button>
        </Grid>
        <Grid sx={{ mr: 3 }}>
          <Button
            sx={{ mt: 1.5 }}
            variant="outlined"
            color="secondary"
            onClick={nextMonthHandling}
          >
            <span>Next Month</span>
          </Button>
        </Grid>
        <Grid>
          <Typography sx={{ mt: 1.8 }} variant="h5" color={"primary"} noWrap>
            {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
          </Typography>
        </Grid>
      </Grid>
    </AppBar>
  );
}

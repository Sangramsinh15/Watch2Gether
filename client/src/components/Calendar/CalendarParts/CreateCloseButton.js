import React from "react";
import { Button, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

/**
 * Created Close Calendar button, which will redirect you to post page
 * @returns The button component that redirects to post page.
 */
export default function CreateCloseButton() {
  const handleClick = () => {
    window.history.go(-1);
  };

  return (
    //Added redirect button
    <Button
      onClick={handleClick}
      style={{ minWidth: "150px" }}
      sx={{ border: 1, borderColor: "grey", mt: 2, w: 20 }}
      variant="contained"
      component={Link}
    >
      <ArrowBackIcon color="secondary" />
      <Typography sx={{ ml: 1 }} variant="h9" color={"white"} noWrap>
        Go Back
      </Typography>
    </Button>
  );
}

import React, { useContext } from "react";
import GlobalContext from "../../../context/GlobalContext";
import { Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

/**
 * Creted button to add an event. 
 * This will call setShowEventModal function that would open the dialog box to add event.
 * @returns The button that will open the dialog box to add event
 */
export default function CreateEventButton() {
  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <Button
      sx={{ border: 1, borderColor: "grey" }}
      variant="contained"
      onClick={() => setShowEventModal(true)}
    >
      <AddIcon color="secondary" />
      <Typography sx={{ ml: 1 }} variant="h9" color={"white"} noWrap>
        Add Event
      </Typography>
    </Button>
  );
}

import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";

/**
 * The function is to create a delete button for the posts.
 * It returns the delete button
 */
export default function DeletePostButton() {
  return (
    <Box pt={5}>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
    </Box>
  );
}

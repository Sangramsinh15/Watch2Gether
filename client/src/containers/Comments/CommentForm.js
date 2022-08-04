import { useState } from "react";
import { Button, Grid, Box, TextField } from "@mui/material";
/**
 * The function is responsible for creating a
 * small form a button for the user to create the comment
 * @param {*} param0 
 * @returns It returns the button an the form with UI
 */
const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
}) => {
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };
  return (
    <form onSubmit={onSubmit}>
      <Box
        sx={{
          flexGrow: 1,
          marginTop: 2,
          borderRadius: 5,
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField
              multiline={true}
              fullWidth
              variant="filled"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              borderRadius="5"
            />
          </Grid>
          <Grid item xs={1}>
            <Button
              variant="contained"
              size="small"
              type="submit"
              disabled={isTextareaDisabled}
            >
              {submitLabel}
            </Button>
            {hasCancelButton && (
              <Button
                className="comment-form-button comment-form-cancel-button"
                onClick={handleCancel}
              >
                Cancel
              </Button>
            )}
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};
/**
 * The container is being exported as CommentForm 
 * so that this container can be imported into other modules.
 */
export default CommentForm;

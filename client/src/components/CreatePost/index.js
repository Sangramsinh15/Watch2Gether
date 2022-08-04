import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useHistory } from "react-router-dom";
/**
 * The function to create the post button
 * @returns It returns the button to create a post
 */
function CreatePostButton(props) {
  const history = useHistory();
  const { watchGroupData } = props;

  const handleClick = () => {
    history.push({
      pathname: "/CreatePostPage",
      state: watchGroupData,
    });
  };
  return (
    <Box>
      <Button variant="contained" endIcon={<AddIcon />} onClick={handleClick}>
        <h3>Create Post</h3>
      </Button>
    </Box>
  );
}
/**
 * The component is being exported as CreatePostButton
 * so that this component can be imported into other modules.
 */
export default CreatePostButton;

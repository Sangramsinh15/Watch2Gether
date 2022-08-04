import { makeStyles } from "@mui/styles";
/**
 * This function is to create styles for the content page
 */
export const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#2b282a",
        color: "White",
      },
      image: {
        maxWidth: 300,
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
      },
    divider: {
        // Theme Color, or use css color in quote
        background: theme.palette.primary.main,
        paddingBottom: theme.spacing(.5)
    },
  }));

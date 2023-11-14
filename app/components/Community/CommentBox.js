import {
  Box,
  Grid,
  Typography,
  Button,
  BottomNavigation,
  TextField,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function CommentBox(props) {
  return (
    <Box
      sx={{
        position: "sticky",
        height: "70px",
        width: "100%",
        bottom: 0,
        backgroundColor: "#fff",
        borderBottom: "1px solid black",
        padding: "5px",
      }}
    >
      <TextField
        id="outlined-basic"
        variant="outlined"
        placeholder="Add a comment"
        value={props.value}
        onChange={(e) => props.onChange(e)}
        onKeyDown={(e) => props.onKeyPress(e)}
        sx={{
          width: "80%",
          zIndex: 1000,
          height: "50%",
          borderRadius: "20px",
        }}
      />
      <Button
        sx={{ marginTop: "5px" }}
        onClick={props.onSearch}
      >
        <SendIcon sx={{ color: "black", fontSize: "35px" }} />
      </Button>
    </Box>
  );
}

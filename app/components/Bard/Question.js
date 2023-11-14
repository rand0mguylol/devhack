import { Box, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Question(props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: "20px",
        paddingLeft: "10px",
        paddingRight: "10px",
        padding: "10px",
      }}
    >
      <AccountCircleIcon sx={{ fontSize: "25px", marginRight: "10px" }} />
      <Typography variant="body1" sx={{ fontSize: "12px" }}>
        {props.value}
      </Typography>
    </Box>
  );
}

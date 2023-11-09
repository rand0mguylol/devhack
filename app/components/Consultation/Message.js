import { Box, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Message(props) {
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
    
      <Box
        sx={{
          backgroundColor: "#4D66F3",
          padding: "10px",
          paddingLeft: "15px",
          paddingRight: "15px",
          borderRadius: '15px'
        }}
      >
        <Typography variant="body1" sx={{ fontSize: "12px" }}>
          {props.text}
        </Typography>
      </Box>

      <AccountCircleIcon
        sx={{ fontSize: "25px", marginLeft: "10px", color: "black" }}
      />
    </Box>
  );
}

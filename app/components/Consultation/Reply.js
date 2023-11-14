import { Box, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Reply(props) {
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
         <AccountCircleIcon
        sx={{ fontSize: "25px", marginRight: "10px", color: "black" }}
      />
    
      <Box
        sx={{
          backgroundColor: "#fff",
          padding: "10px",
          paddingLeft: "15px",
          paddingRight: "15px",
          borderRadius: '15px'
        }}
      >
        <Typography variant="body1" sx={{ fontSize: "12px", color:'black' }}>
          {props.text}
        </Typography>
      </Box>

     
    </Box>
  );
}

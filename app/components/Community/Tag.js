import { Box, Typography, Button, Grid } from "@mui/material";

export default function Tag(props) {
  return (
    <Box
      sx={{
        border: "2px solid #1B5765",
        padding: "5px",
        paddingLeft: "15px",
        paddingRight: "15px",
        borderRadius: "10px",
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color: "#1B5765",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "12px",
        }}
      >
        {props.tag}
      </Typography>
    </Box>
  );
}

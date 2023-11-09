import { Box, Typography, Grid } from "@mui/material";

export default function ConsultSelection(props) {
  const { color } = props;
  
  return (
    <Box
      sx={{
        width: props.isFull ? '100%' : '150px',
        backgroundColor: color,
        height: "150px",
        padding: "10px",
        borderRadius: "15px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {props.children}

      <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff", textAlign: 'center' }}>
        {props.title}
      </Typography>
    </Box>
  );
}

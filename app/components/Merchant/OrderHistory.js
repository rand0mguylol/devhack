import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import { Grid, Typography, Button } from "@mui/material";

export default function OrderHistory(props) {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        justifyContent: "flex-start",
        alignContent: "center",
        alignItems: "center",
        marginTop: "10px",
      }}
    >
      <Grid item xs={2}>
        <ReceiptLongIcon sx={{ fontSize: 30, color: "black" }} />
      </Grid>
      <Grid item xs={7}>
        <Typography
          variant="subtitle1"
          sx={{ color: "black", fontWeight: "bold" }}
          gutterBottom
        >
          Order #{props.number}
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ color: "black", fontWeight: "light" }}
          gutterBottom
        >
          {props.date}
        </Typography>
        <Button sx={{ marginTop: 1, padding: 0, fontWeight: 'bold' }}>View more details</Button>
      </Grid>
      <Grid item xs="auto">
        <Typography
          variant="subtitle2"
          sx={{ color: "black", fontWeight: "light" }}
          gutterBottom
        >
          RM {props.price}
        </Typography>
      </Grid>
    </Grid>
  );
}

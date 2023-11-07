import {
  Box,
  Grid,
  Typography,
  Button,
  BottomNavigation,
  TextField,
} from "@mui/material";
import Image from "next/image";

export default function ChildComment() {
  return (
    <Box
      sx={{
        marginTop: "15px",
        marginLeft: "10px",
        borderLeft: "1px solid lightgray",
        paddingLeft: "20px",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          alignContent: "center",
        }}
      >
        <Grid
          item
          xs="auto"
          style={{ borderRadius: "50%", overflow: "hidden" }}
        >
          <Image
            src="/motherhood-2.png"
            width={25}
            height={25}
            style={{ objectFit: "fill", borderRadius: "50%" }}
          />
        </Grid>
        <Grid item xs={9}>
          <Typography
            variant="subtitle1"
            sx={{
              color: "#1B5765",
              overflow: "hidden",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            Christine
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#1B5765",
              fontSize: "12px",
              textAlign: "justify",
            }}
          >
            Yea correct.... And remember to make sure your baby is fully latched
            on. If she’s not latched on, remove her from your breast and try
            again.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

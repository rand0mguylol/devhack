import {
  Box,
  Grid,
  Typography,
  Button,
  BottomNavigation,
  TextField,
} from "@mui/material";
import Image from "next/image";

export default function ParentComment(props) {
  return (
    <Box>
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
            width={35}
            height={35}
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
            {props.comment}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

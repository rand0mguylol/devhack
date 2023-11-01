"use client";

import { Container, Typography, Box, Button, Grid } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useRouter } from "next/navigation";

export default function PageTitle(props) {
  const title = decodeURIComponent(props.title)
  const router = useRouter();
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={2} sx={{ alignItems: "center" }}>
        <Grid item xs={2}>
          <Button
            // variant="contained"
            color="primary"
            startIcon={<ArrowBackIosNewIcon sx={{ color: "#1B5765" }} />}
            onClick={() => router.back()}
          ></Button>
        </Grid>
        <Grid item xs={10}>
          <Typography
            variant={props.variant}
            component="div"
            sx={{ flexGrow: 1, color: "#1B5765", fontWeight: "bold" }}
          >
            {title}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

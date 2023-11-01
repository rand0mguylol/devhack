"use client";

import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { useRouter } from "next/navigation";
// import

export default function CategoryCard(props) {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Card sx={{ display: "flex", maxWidth: "90%", margin: "auto" }}>
      <CardMedia
        component="img"
        sx={{ width: 90 }}
        image={props.image}
        alt="Live from space album cover"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardContent sx={{}}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", color: "#1B5765" }}
          >
            {props.title}
          </Typography>
          <Button
            variant="contained"
            onClick={() => {
                router.push(`/learn/${props.category}`)
            }}
            sx={{
              fontSize: "8px",
              backgroundColor: "#1B5765",
              marginTop: "15px",
              borderRadius: '10px'
            }}
          >
            Explore Now
          </Button>
        </CardContent>
      </Box>
    </Card>
  );
}

"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function MapCard(props) {
  return (
    <Card
      sx={{
        maxWidth: "90%",
        margin: "auto",
        borderRadius: "15px",
        marginTop: "30px",
      }}
    >
      <CardContent>
        {/* <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom variant="h5">
          Word of the Day
        </Typography> */}
        <Typography variant="h6" component="div" gutterBottom>
          {props.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.hours}
        </Typography>
        <Typography variant="body2">{props.address}</Typography>
        {props.supply && (
          <Box sx={{ marginTop: "10px" }}>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              Supplies Available:
            </Typography>
            {props.supply.map((item) => (
              <Typography variant="body2" sx={{ color: "green" }}>
                {bull} {item}
              </Typography>
            ))}
          </Box>
        )}
      </CardContent>
      <CardActions>
        <Button size="small" disabled>
          {props.number}
        </Button>
        {props.name && (
          <Box>
            <Link href={`https://www.google.com/maps/search/${props.name}`}>
              <Button size="small">Open in Google Maps</Button>
            </Link>
          </Box>
        )}
      </CardActions>
    </Card>
  );
}

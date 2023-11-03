import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ResourceCard(props) {
  return (
    <Card sx={{ maxWidth: "90%", margin: "auto", paddingBottom: '0px' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="125"
        image={props.image}
      />
      <CardContent sx={{paddingBottom: '0px'}}>
        <Typography
          variant="body1"
          component="div"
          sx={{ textAlign: "center", fontWeight: "bold", padding: 0}}
        >
          {props.title}
        </Typography>
      </CardContent>
    </Card>
  );
}

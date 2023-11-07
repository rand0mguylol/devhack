// 'use client'

import { Box, Typography, Button, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Group(props) {
  // const [joined, hasJoined] = useState(false)

  return (
    <Box
      sx={{
        borderBottom: "1px solid #1B5765",
        padding: "10px",
        marginTop: "10px",
        paddingBottom: "15px",
      }}
    >
      <Box>
        <Grid
          container
          spacing={2}
          sx={{ alignContent: "center", alignItems: "center" }}
        >
          <Grid
            item
            xs="auto"
            style={{ borderRadius: "50%", overflow: "hidden" }}
          >
            <Image
              src={props.image}
              width={35}
              height={35}
              style={{ objectFit: "fill", borderRadius: "50%" }}
            />
          </Grid>
          <Grid item xs="auto">
            <Link href={`/community/${props.title.toLowerCase()}`}>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#1B5765",
                  overflow: "hidden",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                {props.title}
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ marginTop: "10px" }}>
        <Typography
          variant="body2"
          sx={{
            color: "#000",
            overflow: "hidden",
            // fontWeight: "bold",
            fontSize: "12px",
          }}
        >
          {props.description}
        </Typography>
      </Box>

      <Box sx={{ marginTop: "15px" }}>
        <Button
          variant="contained"
          sx={{
            borderRadius: "50px",
            paddingLeft: "30px",
            paddingRight: "30px",
            backgroundColor: "#D9D9D9",
            color: "black",
            fontWeight: "bold",
            marginRight: "10px",
            fontSize: "12px",
          }}
        >
          Join
        </Button>
        <Button
          variant="outlined"
          sx={{
            borderRadius: "50px",
            paddingLeft: "15px",
            paddingRight: "15px",
            // backgroundColor: "",
            color: "black",
            fontWeight: "bold",
            fontSize: "12px",
          }}
        >
          1.5 members
        </Button>
      </Box>
    </Box>
  );
}

import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function Answer(props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: "20px",
        backgroundColor: "#1B5765",
        padding: "10px",
        color: "white",
        borderRadius: "20px",
      }}
    >
      <Image
        src="/bard.png"
        alt="doctor"
        width={25}
        height={25}
        style={{ alignSelf: "flex-start" }}
      />
      <Typography
        variant="body1"
        sx={{ fontSize: "12px", marginLeft: "10px", wordWrap: "break-word" }}
        component="div"
      >
        {/* {props.value} */}
        {props.value.split("\n").map((i, key) => {
          return <p key={key}>{i}</p>;
        })}
      </Typography>
    </Box>
  );
}

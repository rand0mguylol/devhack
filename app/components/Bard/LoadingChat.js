import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function LoadingChat(props) {
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
    
      <Box sx={{marginLeft: '20px'}}>
        <span class="jumping-dots">
          <span class="dot-1"></span>
          <span class="dot-2"></span>
          <span class="dot-3"></span>
        </span>
      </Box>

    </Box>
  );
}

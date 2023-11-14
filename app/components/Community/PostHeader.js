import WrapperHalf from "@/app/components/Common/WrapperHalf";
import {
  Box,
  Grid,
  Typography,
  Button,
  BottomNavigation,
  TextField,
} from "@mui/material";
import Image from "next/image";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";

export default function PostHeader() {
  return (
    <Box sx={{ backgroundColor: "#ECEFF1" }}>
      <WrapperHalf>
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
                src="/motherhood-2.png"
                width={35}
                height={35}
                style={{ objectFit: "fill", borderRadius: "50%" }}
              />
            </Grid>
            <Grid item xs={10}>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#1B5765",
                  overflow: "hidden",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                Why do my breasts hurt when I feed my baby?
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            marginTop: "10px",
            width: "100%",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          <Image
            src="/breast-hurt-2.png"
            width={400}
            height={300}
            style={{
              objectFit: "fill",
              borderRadius: "20px",
              marginTop: "10px",
            }}
          />
        </Box>

        <Box sx={{ marginTop: "10px" }}>
          <Grid container spacing={2}>
            <Grid item xs="auto">
              <Button
                variant="outlined"
                sx={{ color: "black", borderRadius: "20px" }}
                startIcon={<ThumbUpIcon />}
              >
                200
              </Button>
            </Grid>
            <Grid item xs="auto">
              <Button
                variant="outlined"
                startIcon={<CommentIcon />}
                sx={{ color: "black", borderRadius: "20px" }}
              >
                123
              </Button>
            </Grid>
            <Grid item xs="auto">
              <Button
                variant="outlined"
                startIcon={<ShareIcon />}
                sx={{ color: "black", borderRadius: "20px" }}
              >
                60
              </Button>
            </Grid>
          </Grid>
        </Box>
      </WrapperHalf>
    </Box>
  );
}

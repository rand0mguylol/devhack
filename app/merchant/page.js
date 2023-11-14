import WrapperHalf from "../components/Common/WrapperHalf";
import { Container, Box, Grid, Typography, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Link from "next/link";

export default function MerchantPage() {
  return (
    <>
      <Box sx={{ flexGrow: 1, backgroundColor: "#013A55" }}>
        <WrapperHalf>
          <Grid container spacing={2}>
            <Grid item container xs={10}>
              <Grid item xs={8}>
                <Typography variant="subtitle1" gutterBottom>
                  Welcome Back
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h6" gutterBottom>
                  Merchant
                </Typography>
              </Grid>
            </Grid>
            <Grid item container xs={2} sx={{ alignItems: "center" }}>
              <Grid item xs={8}>
                <Button variant="text" sx={{ color: "white" }}>
                  <MenuIcon />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </WrapperHalf>
      </Box>

      <WrapperHalf>
        <Box sx={{ textAlign: "center", borderRadius: "20px" }}>
          <Link href="/merchant/order">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#1B5765",
                borderRadius: "20px",
                padding: "10px",
                width: "80%",
              }}
            >
              Place New Order
            </Button>
          </Link>
        </Box>
        <Box
          sx={{ textAlign: "center", borderRadius: "20px", marginTop: "15px" }}
        >
          <Link href="/merchant/history">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#03CDA9",
                borderRadius: "20px",
                padding: "10px",
                width: "80%",
              }}
            >
              View Order History
            </Button>
          </Link>
        </Box>
        <Box
          sx={{ textAlign: "center", borderRadius: "20px", marginTop: "15px" }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#EBA71F",
              borderRadius: "20px",
              padding: "10px",
              width: "80%",
            }}
          >
            View In Progress Order
          </Button>
        </Box>
      </WrapperHalf>

      <WrapperHalf>
        <Box
          sx={{
            backgroundColor: "white",
            padding: "10px",
            marginTop: "25px",
            borderRadius: "20px",
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: "#1B5765", fontWeight: "bold", textAlign: "center" }}
          >
            For this Minimum Viable Product, we have decided to include the
            drone delivery feature to be in the same application. However, in a
            real world scenario, we would have a separate application for the
            drone delivery.
          </Typography>
        </Box>
      </WrapperHalf>
    </>
  );
}

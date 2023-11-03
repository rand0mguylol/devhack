import { Container, Box, Grid, Typography, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import Book from "@mui/icons-material/Book";
import "./home.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default async function Home() {

  return (
    <>
      <Container
        className=""
        maxWidth="md"
        sx={{
          backgroundColor: "#013A55",
          margin: 0,
          height: "100px",
          color: "white",
          paddingTop: "15px",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item container xs={10}>
              <Grid item xs={8}>
                <Typography variant="subtitle1" gutterBottom>
                  Welcome Back
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h6" gutterBottom>
                  Yuan
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
        </Box>
      </Container>

      <Container
        maxWidth="md"
        sx={{
          backgroundColor: "#fff",
          margin: "auto",
          marginTop: "25px",
          width: "90%",
          borderRadius: "10px",
          paddingBottom: "20px",
        }}
      >
        <Box sx={{ flexGrow: 1, paddingTop: "20px", paddingBottom: "5px" }}>
          <Grid container spacing={0} direction={"column"}>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Estimated time to labor
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom>
                200
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            backgroundColor: "#03CDA9",
            padding: "10px",
            borderRadius: "10px",
            flexGrow: 1,
          }}
        >
          <Grid
            container
            direction={"row"}
            sx={{ justifyContent: "center", textAlign: "center" }}
          >
            <Grid item xs={4}>
              <Button
                variant="text"
                sx={{
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  margin: 0,
                  padding: 0,
                  borderRight: "1px solid #fff",
                  width: "100%",
                }}
              >
                <CalendarTodayIcon sx={{ marginBottom: "5px" }} />
                <Typography variant="caption">Tracker</Typography>
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="text"
                sx={{
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  margin: 0,
                  padding: 0,
                  borderRight: "1px solid #fff",
                  width: "100%",
                }}
              >
                <SmartToyIcon sx={{ marginBottom: "5px" }} />
                <Typography variant="caption">Bard</Typography>
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="text"
                sx={{
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  margin: 0,
                  padding: 0,
                  width: "100%",
                  // borderRight: "1px solid #fff",
                }}
              >
                <Book sx={{ marginBottom: "5px" }} />
                <Typography variant="caption">Learn</Typography>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

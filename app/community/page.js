import Wrapper from "../components/Common/Wrapper";
import PageTitle from "../components/Common/PageTitle";
import { Box, Typography, Button, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Tag from "../components/Community/Tag";
import Image from "next/image";
import Group from "../components/Community/Group";

export default function CommunityPage() {
  return (
    <Wrapper>
      <PageTitle title="Community" variant="h5" />

      <Box sx={{ marginTop: "30px" }}>
        <Grid
          container
          spacing={3}
          sx={{ justifyContent: "center", alignContent: "center" }}
        >
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                fontSize: "10px",
                borderRadius: "10px",
                // width: "90%",
                backgroundColor: "#1B5765",
              }}
            >
              Browse Communities
            </Button>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Button sx={{ margin: 0, padding: 0 }}>
              <SearchIcon
                sx={{ fontSize: "30px", color: "#1B5765", textAlign: "end" }}
              />
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ marginTop: "30px" }}>
        <Typography
          variant="body1"
          sx={{ color: "#1B5765", fontWeight: "bold" }}
        >
          Trending
        </Typography>
      </Box>

      <Box sx={{ marginTop: "15px" }}>
        <Grid container spacing={2}>
          <Grid item>
            <Tag tag="Motherhood" />
          </Grid>
          <Grid item>
            <Tag tag="Prenatal Care" />
          </Grid>
          <Grid item>
            <Tag tag="Postpartum" />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ marginTop: "30px" }}>
        <Group
          image={"/motherhood-2.png"}
          title="Motherhood"
          description={`Love's Endless Adventure. \n
             Welcome to our nurturing community,
            where we celebrate the incredible journey of motherhood`}
        />

        <Group
          image={"/postpartum.png"}
          title="Prenatal Care"
          description={
            "Your Prenatal Hub: Connect, Share, and Learn Together. Join our community for expecting parents"
          }
        />

        <Group
          image={"/prenatal.png"}
          title="Postpartum"
          description={`How can be comfortable after giving birth?
Set aside time each day to relax with a book or listen to music. Shower daily. Get plenty of exercise and fresh air`}
        />
      </Box>
    </Wrapper>
  );
}

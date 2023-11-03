import { Container, Typography, Box, Button, Grid } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CategoryCard from "../components/Learn/CategoryCard";
import PageTitle from "../components/Common/PageTitle";
import Wrapper from "../components/Common/Wrapper";


export default function LearnPage() {

  return (

      <Wrapper>
        <PageTitle title="Learn" variant='h5'/>

        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <CategoryCard
                image="/pregnancy-learn.png"
                title="Pregnancy and Birth"
                category="Pregnancy and Birth"
                variant="subtitle1"
              />
            </Grid>
            <Grid item xs={12}>
              <CategoryCard
                image="/book-learn.png"
                title="Mental Health"
                category="Mental Health"
                variant="subtitle1"
              />
            </Grid>
            <Grid item xs={12}>
              <CategoryCard
                image="/nutrition-learn.png"
                title="Nutrition"
                category="Nutrition"
                variant="subtitle1"
              />
            </Grid>
            <Grid item xs={12}>
              <CategoryCard
                image="/nutrition-learn.png"
                title="Postmartum Care"
                category="nutrition"
                variant="subtitle1"
              />
            </Grid>
            <Grid item xs={12}>
              <CategoryCard
                image="/nutrition-learn.png"
                title="Abortion"
                category="Abortion"
                variant="subtitle1"
              />
            </Grid>
          </Grid>
        </Box>
      </Wrapper>
  );
}

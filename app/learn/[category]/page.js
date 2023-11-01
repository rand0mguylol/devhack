import Wrapper from "@/app/components/Common/Wrapper";
import PageTitle from "@/app/components/Common/PageTitle";
import ResourceCard from "@/app/components/LearnCategory/ResourceCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function LearnCategoryPage({ params, searchParams }) {
  const category = params.category;
  return (
    <Wrapper>
      <PageTitle title={category} hasBack={true}/>

      <Box sx={{ width: "100%", marginTop: "30px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <ResourceCard title='Health Pregnancy Tips' image='/learn-category/facts.jpg'/>
          </Grid>
          <Grid item xs={12}>
            <ResourceCard title='Alcohol Use and Pregnancy' image='/learn-category/drinks.jpg'/>
          </Grid>
          <Grid item xs={12}>
            <ResourceCard title='Maternal Health' image='/learn-category/maternal.jpg'/>
          </Grid>
        </Grid>
      </Box>
    </Wrapper>
  );
}

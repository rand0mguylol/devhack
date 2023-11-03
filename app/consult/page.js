import Wrapper from "../components/Common/Wrapper";
import PageTitle from "../components/Common/PageTitle";
import { Box, Typography, Grid } from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import RememberMeIcon from "@mui/icons-material/RememberMe";
import ConsultSelection from "../components/Consult/ConsultSelection";
import Link from "next/link";

export default function ConsultPage() {
  return (
    <Wrapper>
      <PageTitle title="Consult" variant="h5" />

      <Box
        sx={{
          //   width: "90%",
          backgroundColor: "#fff",
          margin: "auto",
          color: "#1B5765",
          marginTop: "20px",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", marginBottom: "8px" }}
        >
          Disclaimer
        </Typography>

        <Typography
          variant="body1"
          sx={{ fontSize: "11px", textAlign: "justify" }}
        >
          Our platform uses artificial intelligence (AI) to provide health
          advice. However, please note that AI advice is general and should not
          replace consultation with a qualified healthcare professional. For
          personalized healthcare guidance, consult a licensed healthcare
          provider. In emergencies, seek immediate medical assistance. Your
          health decisions should prioritize professional advice.
        </Typography>
      </Box>

      <Box sx={{ marginTop: "20px" }}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Link href="/consult/bard">
              <ConsultSelection title="Bard AI" color="#1B5765">
                <SmartToyIcon sx={{ fontSize: "60px" }} />
              </ConsultSelection>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <ConsultSelection title="Remote Monitoring" color="#03CDA9">
              <RememberMeIcon sx={{ fontSize: "60px" }} />
            </ConsultSelection>
          </Grid>
          <Grid item xs={6}>
            <ConsultSelection title="Health Experts" color="#EBA71F">
              <LocalHospitalIcon sx={{ fontSize: "60px" }} />
            </ConsultSelection>
          </Grid>
        </Grid>
      </Box>
    </Wrapper>
  );
}

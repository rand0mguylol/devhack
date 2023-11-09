import WrapperHalf from "@/app/components/Common/WrapperHalf";
import PageTitle from "@/app/components/Common/PageTitle";
import Image from "next/image";
import { Box, Typography, Grid, Button, Divider } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Link from "next/link";

export default function ConsultOrganizationPage() {
  return (
    <>
      <WrapperHalf>
        <PageTitle title="OrphanCare" variant="h5" hasBack={true} />
      </WrapperHalf>

      <Box>
        <img src="/orphan3.png" alt="OrphanCare" width="100%" height="100%" />
      </Box>

      <WrapperHalf>
        <Box
          sx={{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}
        >
          <Grid container spacing={2} sx={{ justifyContent: "center" }}>
            <Grid item xs="auto">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#1B5765",
                  color: "white",
                  borderRadius: "15px",
                }}
              >
                Visit Website
              </Button>
            </Grid>
            <Grid item xs="auto">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#1B5765",
                  color: "white",
                  borderRadius: "15px",
                }}
              >
                Remote Consultation
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Typography
          variant="body1"
          sx={{ color: "#1B5765", fontWeight: "bold", textAlign: "center" }}
        >
          OrphanCare Foundation advocates and works to give children in
          institutions and unplanned newborn babies the opportunity to grow in
          the care of a family.
        </Typography>

        {/* <Box
          sx={{
            // backgroundColor: "#90A4AE",
            // padding: "10px",
            marginTop: "10px",
            // borderRadius: "20px",
          }}
        >
          <Typography
            variant="body1"
            sx={{ color: "black", fontWeight: "bold", textAlign: "center" }}
          >
            Call our 24 hour Support Hotline
          </Typography>
        </Box> */}

        <Box sx={{ marginTop: "25px" }}>
          <Grid container spacing={2} sx={{ justifyContent: "center" }}>
            <Grid item xs="auto">
              <Button
                startIcon={<LocalPhoneIcon />}
                variant="contained"
                sx={{
                  backgroundColor: "#C8E0E7",
                  color: "black",
                  borderRadius: "15px",
                }}
              >
                Petaling Jaya
              </Button>
            </Grid>
            <Grid item xs="auto">
              <Button
                startIcon={<LocalPhoneIcon />}
                variant="contained"
                sx={{
                  backgroundColor: "#C8E0E7",
                  color: "black",
                  borderRadius: "15px",
                }}
              >
                Johor Bahru
              </Button>
            </Grid>
            {/* <Grid item xs="auto">
              <Button
                startIcon={<LocalPhoneIcon />}
                variant="contained"
                sx={{
                  backgroundColor: "#C8E0E7",
                  color: "black",
                  borderRadius: "15px",
                }}
              >
                Sungai Petani
              </Button>
            </Grid> */}
          </Grid>
        </Box>

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
            We know it takes courage to seek assistance during such a crisis.
            You may be pregnant but you have options. Our trained counsellors
            will give you free information, support and/or counselling.
          </Typography>
        </Box>

        <Box sx={{marginTop: '20px', textAlign: 'center'}}>
          <Link href='/consult/adoption/orphan-care/hatch'>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#1B5765",
                color: "white",
                borderRadius: "15px",
              }}
            >
              Baby Hatch Project
            </Button>
          </Link>
        </Box>
      </WrapperHalf>
    </>
  );
}

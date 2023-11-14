import WrapperHalf from "@/app/components/Common/WrapperHalf";
import PageTitle from "@/app/components/Common/PageTitle";
import { Box, Typography, Grid } from "@mui/material";
import Message from "@/app/components/Consultation/Message";
import Reply from "@/app/components/Consultation/Reply";
import SearchBar from "@/app/components/Bard/SearchBar";

export default function ConsultationPage() {
  return (
    <>
      <WrapperHalf>
        <PageTitle title="Consultation" variant="h5" hasBack={true} />
      </WrapperHalf>

      <Box sx={{ backgroundColor: "#ECEFF1", height: "100vh" }}>
        <Box
          sx={{ width: "100%", backgroundColor: "#4D66F3", padding: "15px" }}
        >
          <Typography
            variant="body1"
            sx={{ color: "white", margin: 0, padding: 0, fontWeight: "bold" }}
            gutterBottom
          >
            Health Experts
          </Typography>
        </Box>
        <WrapperHalf>
          <Box>
            <Grid container spacing={2} sx={{ flexDirection: "column" }}>
              <Grid item xs={12} sx={{ width: "100%" }}>
                <Box
                  sx={{
                    width: "100%",
                    textAlign: "justify",
                    paddingRight: "30px",
                  }}
                >
                  <Reply text={"Hello...What can I help you?"} />
                </Box>
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                sx={{
                  alignSelf: "end",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    textAlign: "justify",
                    paddingLeft: "30px",
                  }}
                >
                  <Message
                    text={
                      "Hii..may I know what should I eat to have a better development for baby's brain and eye?"
                    }
                  />
                </Box>
              </Grid>

              <Grid item xs={12} sx={{ width: "100%" }}>
                <Box
                  sx={{
                    width: "100%",
                    textAlign: "justify",
                    paddingRight: "30px",
                  }}
                >
                  <Reply
                    text={
                      "You should take in Omega-3 Fatty Acid. The sources include salmon fish, chia seeds and walnuts."
                    }
                  />
                </Box>
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                sx={{
                  alignSelf: "end",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    textAlign: "justify",
                    paddingLeft: "30px",
                  }}
                >
                  <Message text={"Ahh I see.... thank you!!"} />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </WrapperHalf>
      </Box>

      {/* <SearchBar /> */}
    </>
  );
}

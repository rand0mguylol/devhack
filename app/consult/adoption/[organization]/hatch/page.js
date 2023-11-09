import WrapperHalf from "@/app/components/Common/WrapperHalf";
import PageTitle from "@/app/components/Common/PageTitle";
import { Box, Typography, Grid, Button, Divider } from "@mui/material";

export default function HatchPage() {
  return (
    <>
      <WrapperHalf>
        <PageTitle title="Baby Hatch Project" variant="h5" hasBack={true} />
      </WrapperHalf>

      <WrapperHalf>
        <Box>
          <Typography
            variant="body1"
            sx={{ color: "#1B5765", fontWeight: "bold", textAlign: "center" }}
          >
            OrphanCare's Baby Hatch Project
          </Typography>
          <Box
            sx={{ borderRadius: "20px", overflow: "hidden", marginTop: "10px" }}
          >
            <img
              src="/babyhatch.png"
              alt="OrphanCare"
              width="100%"
              height="100%"
            />
          </Box>
          <Typography
            variant="body2"
            sx={{
              marginTop: "10px",
              color: "#1B5765",
              textAlign: "center",
              fontSize: "14px",
            }}
          >
            In Peninsular Malaysia, OrphanCare operates 3 baby hatches: Petaling
            Jaya, Johor Bahru, and Sungai Petani in Kedah. We also collaborate
            with Hospital Pakar An-Nur, Bangi and KPJ Hospitals KPJ Hospitals, a
            well-known healthcare organisation in the region. KPJ Hospitals runs
            3 baby hatches across the country.
          </Typography>
          {/* <br /> */}
          <Typography
            variant="body2"
            sx={{
              marginTop: "10px",
              color: "#1B5765",
              textAlign: "center",
              fontSize: "14px",
            }}
          >
            Our baby hatches follow a German system. They are air conditioned,
            safe and have a 24 hour CCTV inside the hatch that notifies the
            caretaker when a baby is left in the hatch. The camera does not
            identify the mother.
          </Typography>
          <Box sx={{ marginTop: "10px", textAlign: "center" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#1B5765",
                color: "white",
                borderRadius: "15px",
              }}
            >
              More information
            </Button>
          </Box>
        </Box>
      </WrapperHalf>
    </>
  );
}

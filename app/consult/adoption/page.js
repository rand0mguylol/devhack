import Wrapper from "@/app/components/Common/Wrapper";
import PageTitle from "@/app/components/Common/PageTitle";
import WrapperHalf from "@/app/components/Common/WrapperHalf";
import AdoptionAccordion from "@/app/components/Community/AdoptionAccordion";
import { Typography, Button, Box } from "@mui/material";
import AdoptionCard from "@/app/components/Community/AdoptionCard";
import Link from "next/link";

export default function AdoptionPage() {
  return (
    <>
      <WrapperHalf>
        <PageTitle title="Adoption" variant="h5" hasBack={true} />
      </WrapperHalf>

      <AdoptionAccordion />

      <WrapperHalf>
        <Box sx={{ marginTop: "20px" }}>
          <Typography
            variant="h6"
            sx={{ color: "#1B5765", fontWeight: "bold", textAlign: "center" }}
          >
            Explore organizations to help you navigate through the adoption
            process.
          </Typography>
        </Box>

        <Box sx={{ marginTop: "30px" }}>
          <Link href='/consult/adoption/orphan-care'>
            <AdoptionCard
              image="/orphan2.png"
              title="OrphanCare"
              description="OrphanCare Foundation advocates and works to give children in institutions and unplanned newborn babies the opportunity to grow in the care of a family"
            />
          </Link>
        </Box>
      </WrapperHalf>
    </>
  );
}

import WrapperHalf from "@/app/components/Common/WrapperHalf";
import PageTitle from "@/app/components/Common/PageTitle";
import OrderItemCard from "@/app/components/Merchant/OrderItemCard";
import { Box, Grid } from "@mui/material";
import CategoryCard from "@/app/components/Learn/CategoryCard";

export default function MerchantOrderPage() {
  return (
    <>
      <WrapperHalf>
        <PageTitle title="Order" variant="h5" hasBack={true} />
      </WrapperHalf>

      <WrapperHalf>
        <Box sx={{ width: "100%" }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <OrderItemCard
                image="/birth-control-pill.png"
                title="Birth Control Pills"
                description="Birth control pills are a form of contraception that uses hormones to prevent a pregnancy. Its up to 88% effectively."
                category="Abortion"
                variant="subtitle1"
              />
            </Grid>
            <Grid item xs={12}>
              <OrderItemCard
                image="/cervical-cap.png"
                title="Abortion"
                description="Cervical cap is inserted into the vagina up to 6 hours before sex. Ther cervical cap is about 84% effective for first year using the method."
                category="Abortion"
                variant="subtitle1"
              />
            </Grid>
            <Grid item xs={12}>
              <OrderItemCard
                image="/spermicides.png"
                title="Spermicides"
                description="This is a gel that’s toxic to sperm. placed in the vagina before sex. This method is about 72-80% effective."
                category="Abortion"
                variant="subtitle1"
              />
            </Grid>
            <Grid item xs={12}>
              <OrderItemCard
                image="/condom.png"
                title="Condom"
                description="A thin barrier of latex that placedover an erect penis. With correct use, condoms are 98% effective."
                category="Abortion"
                variant="subtitle1"
              />
            </Grid>
          </Grid>
        </Box>
      </WrapperHalf>
    </>
  );
}

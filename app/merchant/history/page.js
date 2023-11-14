import WrapperHalf from "@/app/components/Common/WrapperHalf";
import PageTitle from "@/app/components/Common/PageTitle";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import { Grid, Typography, Button } from "@mui/material";
import OrderHistory from "@/app/components/Merchant/OrderHistory";

export default function OrderHistoryPage() {
  return (
    <>
      <WrapperHalf>
        <PageTitle title="Order History" variant="h5" hasBack={true} />
      </WrapperHalf>

      <WrapperHalf>
       <OrderHistory date='22 November 2020' number='1' price='100'/>
       <OrderHistory date='06 June 2020' number='2' price='80'/>
       <OrderHistory date='23 November 2020' number='3' price='90'/>
       <OrderHistory date='20 April 2020' number='4' price='10'/>
       <OrderHistory date='22 Jult 2020' number='5' price='10'/>

      </WrapperHalf>
    </>
  );
}

import Wrapper from "@/app/components/Common/Wrapper";
import WrapperHalf from "@/app/components/Common/WrapperHalf";
import PageTitle from "@/app/components/Common/PageTitle";
import {
  Box,
} from "@mui/material";


export default function CommentWrapper({children}) {
  return (
    <Box sx={{ marginTop: "10px", backgroundColor: "#ECEFF1" }}>
      <WrapperHalf>
        <Box sx={{ marginTop: "20px" }}>
            {children}
        </Box>
      </WrapperHalf>
    </Box>
  );
}

import { Container } from "@mui/material";

export default function WrapperHalf({ props, children }) {

  const isFull = props?.isFull ? '100%' : 'auto'
  return (
    <Container
      disableGutters
      className=""
      maxWidth="lg"
      sx={{
        margin: 0,
        paddingBottom: "20px",
        color: "white",
        paddingTop: "15px",
        // backgroundColor: "#F6F7FC",
        paddingLeft: '22px',
        paddingRight: '22px',
        width: "100%",
        overflowY: 'scroll',
      }}
    >
      {children}
    </Container>
  );
}

import { Container } from "@mui/material";

export default function Wrapper({ props, children }) {

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
        backgroundColor: "#F6F7FC",
        paddingLeft: '22px',
        paddingRight: '22px',
        width: "100%",
        height: '100%',
        overflowY: 'scroll',
      }}
    >
      {children}
    </Container>
  );
}

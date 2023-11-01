import { Container } from "@mui/material";

export default function Wrapper({ children }) {
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
        paddingLeft: "0px",
        paddingRight: "0px",
        width: "100%",
      }}
    >
      {children}
    </Container>
  );
}

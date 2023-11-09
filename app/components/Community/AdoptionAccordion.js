"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#4BCFFA" : "#4BCFFA",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function AdoptionAccordion() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography sx={{fontWeight: 'bold'}}>Introduction to Adoption</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Facing an unexpected pregnancy can be overwhelming, and considering
            adoption is a brave and loving choice. Adoption allows you to
            provide your child with a stable and nurturing environment while
            ensuring their well-being.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography sx={{fontWeight: 'bold'}}>Benefits of Adoption</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Choosing adoption can offer numerous advantages:
          </Typography>
          <br />
          <Typography sx={{ fontWeight: "bold" }}>Benefits</Typography>
          <Typography sx={{}}>
            {bull} Child's Well-Being: Adoption ensures your child grows up in a
            loving and stable environment, with opportunities for education and
            personal growth.
          </Typography>
          <Typography>
            {bull} Continued Contact: Open adoption can provide opportunities
            for ongoing contact with your child and their adoptive family
          </Typography>
          <Typography>
            {bull} Emotional Support: Birth parents can find emotional support
            during the adoption process and beyond.
          </Typography>
          <Typography>
            {bull} Future Planning: Adoption allows you to continue your
            education and pursue your personal and professional goals.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography sx={{fontWeight: 'bold'}}>Types of Adoption</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            There are various types of adoption, including open, semi-open, and
            closed adoption, each offering different levels of contact and
            communication with your child and the adoptive family.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography sx={{fontWeight: 'bold'}}>Choosing an Adoptive Family</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You often have the option to choose the adoptive family for your
            child. Consider factors such as their values, lifestyle, and vision
            for your child's future.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography sx={{fontWeight: 'bold'}}>Child's Involvement</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            As your child grows, they may have opportunities for age-appropriate
            communication with you and their adoptive family, allowing them to
            understand their adoption story.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography sx={{fontWeight: 'bold'}}>Support and Counseling</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Support and counseling are available to help you navigate the
            emotional complexities of adoption, ensuring a smooth and informed
            decision.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography sx={{fontWeight: 'bold'}}>Contact Agreements</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A contact agreement outlines the level and frequency of contact with
            your child and the adoptive family, protecting your rights and
            responsibilities.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

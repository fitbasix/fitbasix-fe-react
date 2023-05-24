import React, { useEffect, useState } from "react";
import "./styles.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Link,
  Typography,
} from "@mui/material";

import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const FAQ = () => {
  const [expanded, setExpanded] = React.useState("panel1");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="FAQContainer">
      {" "}
      <div className="FAQContainer--Left">
        <Typography variant='h5' sx={{ color: "#49AD50" }}>Support</Typography>
        <Typography
        variant='h4'
          sx={{ fontWeight: 600, fontSize: "20px", marginTop: "1rem" }}
        >
          Frequently Asked Questions
        </Typography>
        <Typography
        variant="body1"
          sx={{ fontSize: "12px", width: "18rem", marginTop: "1rem" }}
        >
          Everything you need to know about us. Can&apos;t find the answer
          you&apos;re looking for? Please reach out to our <br />
          <span>
            <Link href="#" color="#fff">
              Customer Support.
            </Link>
          </span>
        </Typography>
      </div>
      <div className="AccordionContainer">
        <Accordion
          className="Accordion"
          sx={{
            "&::before": {
              display: "none",
            },
            boxShadow: "none",
          }}
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={
              expanded == "panel1" ? (
                <RemoveCircleOutlineIcon sx={{ color: "#fff" }} />
              ) : (
                <ControlPointIcon sx={{ color: "#fff" }} />
              )
            }
          >
            <Typography
              sx={{ color: expanded == "panel1" ? "#49AD50" : "#fff" }}
            >
              Lorem Ipsum is a temporary Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              "&::before": {
                display: "none",
              },
              boxShadow: "none",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Mus in diam magna tortor
              felis aenean magna. Interdum purus faucibus pulvinar etiam platea.
              Quis urna velit et amet lacus porttitor.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="Accordion"
          sx={{
            "&::before": {
              display: "none",
            },
            boxShadow: "none",
          }}
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={
              expanded == "panel2" ? (
                <RemoveCircleOutlineIcon sx={{ color: "#fff" }} />
              ) : (
                <ControlPointIcon sx={{ color: "#fff" }} />
              )
            }
          >
            <Typography
              sx={{ color: expanded == "panel2" ? "#49AD50" : "#fff" }}
            >
              Lorem Ipsum is a temporary Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              "&::before": {
                display: "none",
              },
              boxShadow: "none",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Mus in diam magna tortor
              felis aenean magna. Interdum purus faucibus pulvinar etiam platea.
              Quis urna velit et amet lacus porttitor.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="Accordion"
          sx={{
            "&::before": {
              display: "none",
            },
            boxShadow: "none",
          }}
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={
              expanded == "panel3" ? (
                <RemoveCircleOutlineIcon sx={{ color: "#fff" }} />
              ) : (
                <ControlPointIcon sx={{ color: "#fff" }} />
              )
            }
          >
            <Typography
              sx={{ color: expanded == "panel3" ? "#49AD50" : "#fff" }}
            >
              Lorem Ipsum is a temporary Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              "&::before": {
                display: "none",
              },
              boxShadow: "none",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Mus in diam magna tortor
              felis aenean magna. Interdum purus faucibus pulvinar etiam platea.
              Quis urna velit et amet lacus porttitor.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="Accordion"
          sx={{
            "&::before": {
              display: "none",
            },
            boxShadow: "none",
          }}
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={
              expanded == "panel4" ? (
                <RemoveCircleOutlineIcon sx={{ color: "#fff" }} />
              ) : (
                <ControlPointIcon sx={{ color: "#fff" }} />
              )
            }
          >
            <Typography
              sx={{ color: expanded == "panel4" ? "#49AD50" : "#fff" }}
            >
              Lorem Ipsum is a temporary Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              "&::before": {
                display: "none",
              },
              boxShadow: "none",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Mus in diam magna tortor
              felis aenean magna. Interdum purus faucibus pulvinar etiam platea.
              Quis urna velit et amet lacus porttitor.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="Accordion"
          sx={{
            "&::before": {
              display: "none",
            },
            boxShadow: "none",
          }}
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            expandIcon={
              expanded == "panel5" ? (
                <RemoveCircleOutlineIcon sx={{ color: "#fff" }} />
              ) : (
                <ControlPointIcon sx={{ color: "#fff" }} />
              )
            }
          >
            <Typography
              sx={{ color: expanded == "panel5" ? "#49AD50" : "#fff" }}
            >
              Lorem Ipsum is a temporary Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              "&::before": {
                display: "none",
              },
              boxShadow: "none",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Mus in diam magna tortor
              felis aenean magna. Interdum purus faucibus pulvinar etiam platea.
              Quis urna velit et amet lacus porttitor.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="Accordion"
          sx={{
            "&::before": {
              display: "none",
            },
            boxShadow: "none",
          }}
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary
            expandIcon={
              expanded == "panel6" ? (
                <RemoveCircleOutlineIcon sx={{ color: "#fff" }} />
              ) : (
                <ControlPointIcon sx={{ color: "#fff" }} />
              )
            }
          >
            <Typography
              sx={{ color: expanded == "panel6" ? "#49AD50" : "#fff" }}
            >
              Lorem Ipsum is a temporary Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              "&::before": {
                display: "none",
              },
              boxShadow: "none",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Mus in diam magna tortor
              felis aenean magna. Interdum purus faucibus pulvinar etiam platea.
              Quis urna velit et amet lacus porttitor.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;

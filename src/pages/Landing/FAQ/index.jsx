import React, { useEffect, useState } from "react";
import "./styles.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const FAQ = () => {
  const [expanded, setExpanded] = useState("none");

  console.log("EXP", expanded);

  return (
    <div className="FAQContainer">
      {" "}
      <div className="FAQContainer--Left">
        <Typography sx={{ color: "#49AD50" }}>Support</Typography>
        <Typography
          sx={{ fontWeight: 600, fontSize: "20px", marginTop: "1rem" }}
        >
          Frequently Asked Questions
        </Typography>
        <Typography
          sx={{ fontSize: "12px", width: "16rem", marginTop: "1rem" }}
        >
          Everything you need to know about us. Can’t find the answer you’re
          looking for? Please reach out to our Customer Support.
        </Typography>
      </div>
      <div className="AccordionContainer">
        <Accordion
          className="Accordion"
          onChange={(e, exp) => {
            if (exp) {
              console.log("SET EXP", exp);
              setExpanded("panel1");
            } else {
              setExpanded("none");
            }
          }}
        >
          <AccordionSummary
            expandIcon={
              expanded == "panel1" ? (
                <RemoveCircleOutlineIcon sx={{ color: "#fff" }} />
              ) : (
                <ControlPointIcon sx={{ color: "#fff" }} />
              )
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              sx={{ color: expanded == "panel1" ? "#49AD50" : "#fff" }}
            >
              Lorem Ipsum is a temporary Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
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
          onChange={(e, exp) => {
            if (exp) {
              console.log("SET EXP", exp);
              setExpanded("panel2");
            } else {
              setExpanded("none");
            }
          }}
        >
          <AccordionSummary
            expandIcon={
              expanded == "panel2" ? (
                <RemoveCircleOutlineIcon sx={{ color: "#fff" }} />
              ) : (
                <ControlPointIcon sx={{ color: "#fff" }} />
              )
            }
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              sx={{ color: expanded == "panel2" ? "#49AD50" : "#fff" }}
            >
              Lorem Ipsum is a temporary Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontSize: "14px" }}>
              Lorem ipsum dolor sit amet consectetur. Mus in diam magna tortor
              felis aenean magna. Interdum purus faucibus pulvinar etiam platea.
              Quis urna velit et amet lacus porttitor.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="Accordion"
          onChange={(e, exp) => {
            if (exp) {
              console.log("SET EXP", exp);
              setExpanded("panel3");
            } else {
              setExpanded("none");
            }
          }}
        >
          <AccordionSummary
            expandIcon={
              expanded == "panel3" ? (
                <RemoveCircleOutlineIcon sx={{ color: "#fff" }} />
              ) : (
                <ControlPointIcon sx={{ color: "#fff" }} />
              )
            }
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography
              sx={{ color: expanded == "panel3" ? "#49AD50" : "#fff" }}
            >
              Lorem Ipsum is a temporary Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontSize: "14px" }}>
              Lorem ipsum dolor sit amet consectetur. Mus in diam magna tortor
              felis aenean magna. Interdum purus faucibus pulvinar etiam platea.
              Quis urna velit et amet lacus porttitor.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="Accordion"
          onChange={(e, exp) => {
            if (exp) {
              console.log("SET EXP", exp);
              setExpanded("panel4");
            } else {
              setExpanded("none");
            }
          }}
        >
          <AccordionSummary
            expandIcon={
              expanded == "panel4" ? (
                <RemoveCircleOutlineIcon sx={{ color: "#fff" }} />
              ) : (
                <ControlPointIcon sx={{ color: "#fff" }} />
              )
            }
            aria-controls="panel4a-content"
            id="panel4a-header"
          >
            <Typography
              sx={{ color: expanded == "panel4" ? "#49AD50" : "#fff" }}
            >
              Lorem Ipsum is a temporary Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontSize: "14px" }}>
              Lorem ipsum dolor sit amet consectetur. Mus in diam magna tortor
              felis aenean magna. Interdum purus faucibus pulvinar etiam platea.
              Quis urna velit et amet lacus porttitor.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="Accordion"
          onChange={(e, exp) => {
            if (exp) {
              console.log("SET EXP", exp);
              setExpanded("panel5");
            } else {
              setExpanded("none");
            }
          }}
        >
          <AccordionSummary
            expandIcon={
              expanded == "panel5" ? (
                <RemoveCircleOutlineIcon sx={{ color: "#fff" }} />
              ) : (
                <ControlPointIcon sx={{ color: "#fff" }} />
              )
            }
            aria-controls="panel5a-content"
            id="panel5a-header"
          >
            <Typography
              sx={{ color: expanded == "panel5" ? "#49AD50" : "#fff" }}
            >
              Lorem Ipsum is a temporary Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontSize: "14px" }}>
              Lorem ipsum dolor sit amet consectetur. Mus in diam magna tortor
              felis aenean magna. Interdum purus faucibus pulvinar etiam platea.
              Quis urna velit et amet lacus porttitor.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="Accordion"
          onChange={(e, exp) => {
            if (exp) {
              console.log("SET EXP", exp);
              setExpanded("panel6");
            } else {
              setExpanded("none");
            }
          }}
        >
          <AccordionSummary
            expandIcon={
              expanded == "panel6" ? (
                <RemoveCircleOutlineIcon sx={{ color: "#fff" }} />
              ) : (
                <ControlPointIcon sx={{ color: "#fff" }} />
              )
            }
            aria-controls="pane6a-content"
            id="pane6a-header"
          >
            <Typography
              sx={{ color: expanded == "panel6" ? "#49AD50" : "#fff" }}
            >
              Lorem Ipsum is a temporary Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontSize: "14px" }}>
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

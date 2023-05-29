import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Link,
  Typography,
} from "@mui/material";
import React from "react";
import "./styles.css";

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
        <Typography variant="h5" sx={{ color: "#49AD50" }}>
          Support
        </Typography>
        <Typography
          variant="h4"
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
              expanded === "panel1" ? (
                <RemoveCircleOutlineIcon sx={{ color: "#fff" }} />
              ) : (
                <ControlPointIcon sx={{ color: "#fff" }} />
              )
            }
          >
            <Typography
              sx={{ color: expanded === "panel1" ? "#49AD50" : "#fff" }}
            >
              What is FITbasix?
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
              FITbasix is a fitness-based application that offers personalized
              one-to-one training, nutrition plans, lifetime free live training
              sessions, and yoga sessions for all levels.
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
              expanded === "panel2" ? (
                <RemoveCircleOutlineIcon sx={{ color: "#fff" }} />
              ) : (
                <ControlPointIcon sx={{ color: "#fff" }} />
              )
            }
          >
            <Typography
              sx={{ color: expanded === "panel2" ? "#49AD50" : "#fff" }}
            >
              How does FITbasix work?
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
              FITbasix connects users with qualified fitness trainers who
              provide personalized one-to-one training sessions based on
              individual goals and needs. The nutritionists, coaches and yoga
              trainers, create customized nutrition plans, offer lifetime free
              live training and yoga sessions respectively.
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
              expanded === "panel3" ? (
                <RemoveCircleOutlineIcon sx={{ color: "#fff" }} />
              ) : (
                <ControlPointIcon sx={{ color: "#fff" }} />
              )
            }
          >
            <Typography
              sx={{ color: expanded === "panel3" ? "#49AD50" : "#fff" }}
            >
              How can I get started with FITbasix?
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
              To get started with FITbasix, simply download the mobile
              application from the App Store or Google Play Store. Once
              installed, create an account and set your fitness goals. Pick a
              coach or nutritionist that suits your goals and you're done! Use
              built-in tools to measure your BMI and track your hydration
              levels.
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
              expanded === "panel4" ? (
                <RemoveCircleOutlineIcon sx={{ color: "#fff" }} />
              ) : (
                <ControlPointIcon sx={{ color: "#fff" }} />
              )
            }
          >
            <Typography
              sx={{ color: expanded === "panel4" ? "#49AD50" : "#fff" }}
            >
              Are the personal training sessions conducted online or in-person?
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
              All personal training sessions provided by FITbasix are conducted
              online. This allows for flexibility and convenience, as you can
              schedule your sessions at a time that suits you best.
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
              expanded === "panel5" ? (
                <RemoveCircleOutlineIcon sx={{ color: "#fff" }} />
              ) : (
                <ControlPointIcon sx={{ color: "#fff" }} />
              )
            }
          >
            <Typography
              sx={{ color: expanded === "panel5" ? "#49AD50" : "#fff" }}
            >
              How are the trainers selected?
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
              FITbasix carefully selects qualified and experienced fitness
              trainers through a rigorous screening process. Trainers are chosen
              based on their expertise, certifications, and ability to provide
              personalized training to clients.
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
              expanded === "panel6" ? (
                <RemoveCircleOutlineIcon sx={{ color: "#fff" }} />
              ) : (
                <ControlPointIcon sx={{ color: "#fff" }} />
              )
            }
          >
            <Typography
              sx={{ color: expanded === "panel6" ? "#49AD50" : "#fff" }}
            >
              Can I choose my own trainer?
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
              Yes, you can choose your preferred trainer based on their
              profiles, qualifications, and expertise. FITbasix provides
              detailed information about each trainer, allowing you to make an
              informed decision.
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
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary
            expandIcon={
              expanded === "panel7" ? (
                <RemoveCircleOutlineIcon sx={{ color: "#fff" }} />
              ) : (
                <ControlPointIcon sx={{ color: "#fff" }} />
              )
            }
          >
            <Typography
              sx={{ color: expanded === "panel7" ? "#49AD50" : "#fff" }}
            >
              Are the nutrition plans personalized?
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
              Absolutely! FITbasix trainers work closely with clients to develop
              personalized nutrition plans based on their goals, dietary
              preferences, and any specific requirements or restrictions.
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
          expanded={expanded === "panel8"}
          onChange={handleChange("panel8")}
        >
          <AccordionSummary
            expandIcon={
              expanded === "panel8" ? (
                <RemoveCircleOutlineIcon sx={{ color: "#fff" }} />
              ) : (
                <ControlPointIcon sx={{ color: "#fff" }} />
              )
            }
          >
            <Typography
              sx={{ color: expanded === "panel8" ? "#49AD50" : "#fff" }}
            >
              How often can I have live training sessions?
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
              FITbasix offers lifetime free live training sessions, which means
              you can participate in live workouts as often as you like. These
              sessions are designed to provide additional guidance, motivation,
              and a sense of community.
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
          expanded={expanded === "panel9"}
          onChange={handleChange("panel9")}
        >
          <AccordionSummary
            expandIcon={
              expanded === "panel9" ? (
                <RemoveCircleOutlineIcon sx={{ color: "#fff" }} />
              ) : (
                <ControlPointIcon sx={{ color: "#fff" }} />
              )
            }
          >
            <Typography
              sx={{ color: expanded === "panel9" ? "#49AD50" : "#fff" }}
            >
              What if I'm a beginner? Can FITbasix still help me?
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
              FITbasix caters to individuals of all fitness levels, including
              beginners. The trainers are experienced in working with clients at
              various fitness stages and will design a program tailored to your
              specific needs and abilities.
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
          expanded={expanded === "panel10"}
          onChange={handleChange("panel10")}
        >
          <AccordionSummary
            expandIcon={
              expanded === "panel10" ? (
                <RemoveCircleOutlineIcon sx={{ color: "#fff" }} />
              ) : (
                <ControlPointIcon sx={{ color: "#fff" }} />
              )
            }
          >
            <Typography
              sx={{ color: expanded === "panel10" ? "#49AD50" : "#fff" }}
            >
              Are the yoga sessions suitable for all levels?
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
              Yes, the yoga sessions offered by FITbasix are suitable for all
              levels, from beginners to advanced practitioners. The trainers
              will guide you through the sessions, providing modifications and
              adjustments to ensure a safe and effective practice.
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
          expanded={expanded === "panel11"}
          onChange={handleChange("panel11")}
        >
          <AccordionSummary
            expandIcon={
              expanded === "panel11" ? (
                <RemoveCircleOutlineIcon sx={{ color: "#fff" }} />
              ) : (
                <ControlPointIcon sx={{ color: "#fff" }} />
              )
            }
          >
            <Typography
              sx={{ color: expanded === "panel11" ? "#49AD50" : "#fff" }}
            >
              What if I have further questions or need assistance?
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
              If you have further questions or need assistance, all information
              including pricing, free training schedules, offers etc, can be
              found within the FITbasix application. Once you have enrolled, you
              also get the 24*7 chat support. We're always happy to help!
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;

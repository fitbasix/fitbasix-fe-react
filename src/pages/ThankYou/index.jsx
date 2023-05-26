import React from "react";
import Navbar from "../Landing/Navbar";
import "./styles.css";
import { Button, Typography } from "@mui/material";
import danceStudio from "../../assets/dance studio.svg";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="thanksContainer">
        <div className="thanksSubContainer">
          <div className="spacingStyle">
            <Typography variant="h3">THANK YOU!</Typography>
          </div>
          <div className="spacingStyle">
            <Typography variant="h5">
              We Will get back to you shorty....
            </Typography>
          </div>
          <div className="spacingStyle">
            <img src={danceStudio} alt="" />
          </div>
          <div className="spacingStyle">
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                backgroundColor: "#49AD50",
                width: "100%",
                borderRadius: "10px",
                marginTop: "1rem",
              }}
              onClick={() => {
                navigate("/");
              }}
            >
              Go to Home Page
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYou;

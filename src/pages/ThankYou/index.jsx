import React from "react";
import Navbar from "../Landing/Navbar";
import "./styles.css";
import { Button, Typography } from "@mui/material";
import danceStudio from "../../assets/dance studio.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// GTM MODULE
import TagManager from "react-gtm-module";
const ThankYou = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const tagManagerArgs = {
      dataLayer: {
        pageName: "ThankYouPage",
      },
      gtmId: "GTM-K7HC9VF",
    };

    TagManager.initialize(tagManagerArgs);
  }, []);
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
            We will get back to you shortly, till then you can download our app or exit the page now...
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
                window.location.href ="https://fitbasix.com/applinks";
              }}
            >
              Install Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYou;

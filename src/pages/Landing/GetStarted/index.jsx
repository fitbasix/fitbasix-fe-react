import React from "react";
import "./styles.css";
import bgImage from "../../../assets/GetStartedBG.svg";
import Mobiles from "../../../assets/Mobiles.svg";
import MobileStoreButton from "react-mobile-store-button";
import { Button, TextField, Typography } from "@mui/material";

const GetStarted = () => {
  return (
    <div
      className="GetStarted--Container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="GetStarted--Left">
        <div className="GetStarted--Left--Container">
          <Typography sx={{ fontWeight: "600", fontSize: "25px" }}>
            Get Started with <span style={{ color: "#49AD50" }}>Fitbasix</span>
          </Typography>
          <div className="TextFieldContainer">
            <TextField
              id="filled-helperText"
              label="Enter Name"
              sx={{
                background: "rgba(255, 255, 255, 0.32)",
                borderRadius: "10px",
                height: "3rem",
              }}
              variant="filled"
            />
            <TextField
              id="filled-helperText"
              label="Email id"
              variant="filled"
              sx={{
                background: "rgba(255, 255, 255, 0.32)",
                borderRadius: "10px",
                marginTop: "1rem",
              }}
            />
            <TextField
              id="filled-helperText"
              label="Enter Mobile no."
              variant="filled"
              sx={{
                background: "rgba(255, 255, 255, 0.32)",
                borderRadius: "10px",
                marginTop: "1rem",
              }}
            />
          </div>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#49AD50",
              width: "100%",
              borderRadius: "10px",
              marginTop: "1rem",
            }}
          >
            {" "}
            Get a FREE TRIAL!
          </Button>
        </div>
      </div>
      <div className="GetStarted--Right">
        <img src={Mobiles} />
        <div className="GetStarted--RightButtonContainer">
          {" "}
          <MobileStoreButton
            store="android"
            // url={iOSUrl}
            linkProps={{ title: "iOS Store Button" }}
          />
          <MobileStoreButton
            store="ios"
            // url={iOSUrl}

            linkProps={{ title: "iOS Store Button" }}
          />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;

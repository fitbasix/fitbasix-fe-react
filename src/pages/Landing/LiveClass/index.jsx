import React from "react";
import "./styles.css";
import { Button } from "@mui/material";
import Mobile1 from "../../../assets/MobileImage1.png";
import Mobile2 from "../../../assets/MobileImage2.png";
import Mobile3 from "../../../assets/MobileImage3.png";
const LiveClass = () => {
  return (
    <div className="liveClassContainer">
      <Button
        variant="contained"
        sx={{ backgroundColor: "#FC6161", fontWeight: "400" }}
      >
        JOIN OUR LIVE CLASSES NOW!
      </Button>
      <div className="liveClassContainer--imageContainer">
        <img src={Mobile1} alt="Mobile1"/>
        <img src={Mobile2} alt="Mobile2" />
        <img src={Mobile3}  alt="Mobile3" />
      </div>
    </div>
  );
};

export default LiveClass;

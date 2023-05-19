import React from "react";
import "./styles.css";
import { Button } from "@mui/material";
import Mobole1 from "../../../assets/MobileImage1.png";
import Mobole2 from "../../../assets/MobileImage2.png";
import Mobole3 from "../../../assets/MobileImage3.png";
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
        <img src={Mobole1} />
        <img src={Mobole2} />
        <img src={Mobole3} />
      </div>
    </div>
  );
};

export default LiveClass;

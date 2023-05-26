import React from "react";
import Navbar from "../Landing/Navbar";
import "./styles.css";
import { Button, Typography } from "@mui/material";
import danceStudio from "../../assets/dance studio.svg";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="thanksContainer">
        <div className="errorSubContainer">
          <div className="errorSpacing">
            <Typography variant="h1" sx={{ color: "#747474" }}>
              404
            </Typography>
          </div>
          <div className="errorSpacing">
            <Typography variant="h4">Something went wrong!</Typography>
          </div>
          <div className="errorSpacing">
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

export default Error404;

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button, Grid, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import homelogo from "../../../assets/HomepageLogo.svg";
import whatsappLogo from "../../../assets/whatsapp-symbol-logo.svg";
import "./styles.css";
import FreeTrialDialog from "../../../components/FreeTrialDialog";
const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="homeContainer">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Grid container spacing={2} sx={{ padding: "4rem" }}>
            <Grid item xs={12} sm={12}>
              <Typography className='title'>
                <span className="title"> THE FUTURE OF <br />
                FITNESS</span>               
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} className="sub-title" >
              <Typography>
              <span className="sub-title">
              Elevate Your Fitness <br />
                Journey With A Personal
                <br />
                Touch!
              </span>               
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} className="knowMore-btn">
              <Button variant="contained"    onClick={() => setOpen(true)}>Know More</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} className="homelogo-style">
          <img src={homelogo} alt="" />
        </Grid>

        <Grid item xs={12} sm={12} className="explore-btn">
          <Typography
            variant="subtitle1"
            onClick={() => {
              document
                .querySelector(`#liveClassId`)
                .scrollIntoView({ behavior: "smooth" });
            }}
            sx={{ cursor: "pointer" }}
          >
            Explore
            <br />
            <KeyboardArrowDownIcon />
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={1}
          sx={{ textAlign: "end", padding: "1rem" }}
          className="whatsappContainer"
        >
          <Tooltip
            title="Contact Us"
            placement="left-start"
            arrow
            sx={{ backgroundColor: "#fff" }}
          >
            <a
              href="https://wa.me/971528802831"
              className="float"
             
            >
              <img src={whatsappLogo} alt="" height={50} />
            </a>
          </Tooltip>
        </Grid>
        <FreeTrialDialog
        setOpen={setOpen}
        open={open}
        title={"Get a FREE TRIAL!"}
      />
      </Grid>
    </div>
  );
};

export default Home;

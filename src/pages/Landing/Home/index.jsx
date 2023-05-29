import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button, Grid, Tooltip, Typography } from "@mui/material";
import React from "react";
import homelogo from "../../../assets/HomepageLogo.svg";
import whatsappLogo from "../../../assets/whatsapp-symbol-logo.svg";
import "./styles.css";
const Home = () => {
  return (
    <div className="homeContainer">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Grid container spacing={2} sx={{ padding: "12rem 4rem 7rem 4rem" }}>
            <Grid item xs={12} sm={12}>
              <Typography variant="h3" className="title">
                THE FUTURE OF <br />
                FITNESS
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} className="sub-title">
              <Typography variant="h5">
                Elevate Your Fitness <br />
                Journey With A Personal
                <br />
                Touch!
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} className="knowMore-btn">
              <Button variant="contained">Know More</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} className="homelogo-style">
          <img src={homelogo} alt="" />
        </Grid>

        <Grid item xs={12} sm={11} className="explore-btn">
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
              target="_blank"
            >
              <img src={whatsappLogo} alt="" height={50} />
            </a>
          </Tooltip>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;

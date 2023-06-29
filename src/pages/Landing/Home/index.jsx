import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button, Grid, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import homelogo from "../../../assets/HomepageLogo.svg";
// import whatsappLogo from "../../../assets/newLanding/whatsappLogo.png";
import whatsappLogo from "../../../assets/whatsapp-symbol-logo.svg";
import "./styles.css";
import FreeTrialDialog from "../../../components/FreeTrialDialog";
import {
  AppStoreButton,
  ButtonsContainer,
  GooglePlayButton,
} from "react-mobile-app-button";
const Home = () => {
  const [open, setOpen] = useState(false);
  const APKUrl =
    "https://play.google.com/store/apps/details?id=com.fitbasixco.fitbasix&hl=en&gl=US&pli=1";
  const iOSUrl = "https://apps.apple.com/tt/app/fitbasix/id1618003884";
  return (
    <div className="homeContainer">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Grid container spacing={2} className="homeInnerContainer">
            <Grid item xs={12} sm={12} md={12}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  placeItems: "end",
                }}
              >
                <a href="https://wa.me/971528802831">
                  <Button variant="contained" className="callUsBtn">
                    Call us NOW!
                    <img
                      src={whatsappLogo}
                      style={{
                        width: "30px",
                        height: "30px",
                        marginLeft: "5px",
                      }}
                      alt="whatsaap"
                    />
                  </Button>
                </a>

                <div style={{ display: "flex" }}>
                  <ButtonsContainer className="buttons-container">
                    <GooglePlayButton
                      url={APKUrl}
                      theme={"light"}
                      className={"appstore-style"}
                    />
                    <AppStoreButton
                      url={iOSUrl}
                      theme={"light"}
                      className={"appstore-style"}
                    />
                  </ButtonsContainer>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} className="mob_Head_view">
              <Typography className="title" style={{ marginTop: "2rem" }}>
                <span
                  className="title"
                  style={{
                    color: "#49AD50",
                    fontStyle: "italic",
                    paddingRight: "6px",
                  }}
                >
                  FIT
                </span>
                <span className="title">basix</span>
                <br />
                <br />
                <span className="title">
                  THE FUTURE <br />
                  OF <span style={{ color: "#49AD50" }}>FITNESS</span>
                </span>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} className="sub-title">
              <Typography>
                <span className="sub-title">
                  Elevate Your Fitness <br />
                  Journey With A Personal Touch!
                </span>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} className="knowMore-btn">
              <Button variant="contained" onClick={() => setOpen(true)}>
                Know More
              </Button>
            </Grid>
          </Grid>
        </Grid>
        {/* <Grid item xs={12} sm={12} className="homelogo-style">
          <img src={homelogo} alt="" />
        </Grid> */}

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
            <a href="https://wa.me/971528802831" className="float">
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

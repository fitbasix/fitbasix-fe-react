import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Button, Grid, Tooltip, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import homelogo from "../../../assets/HomepageLogo.svg";
// import whatsappLogo from "../../../assets/newLanding/whatsappLogo.png";
import whatsappLogo from "../../../assets/whatsapp-symbol-logo.svg";
import "./styles.css";

import FreeTrialDialog from "../../../components/FreeTrialDialog";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppStoreButton,
  ButtonsContainer,
  GooglePlayButton,
} from "react-mobile-app-button";
import FitbasixLogo from "../../../assets/Fitba6Logo.svg"
const useStyles = makeStyles(() => ({
  buttonStep: {
      width: '150px',
      height: '49px',
      background: '#5F8FE8',
      backgrounImage: 'url("../../../assets/google play.jpg")',
    },
}))


const Home = () => {
  const matches = useMediaQuery('(max-width:600px)');
  const classes = useStyles()
  const [open, setOpen] = useState(false);
  const APKUrl =
    "https://play.google.com/store/apps/details?id=com.fitbasixco.fitbasix&hl=en&gl=US&pli=1";
  const iOSUrl = "https://apps.apple.com/tt/app/fitbasix/id1618003884";
  return (
    <div className="homeContainer">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Grid container spacing={2} className="homeInnerContainer">
            <Grid item xs={12} sm={12} md={12} sx={{position:"absolute",width:"90%"}}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  placeItems: "end",
                }}
              >
                <a href="https://wa.me/971528802831">
                  <Button variant="contained" className="callUsBtn" style={{width:matches?"212px":"302px",height:matches?"40px":"auto"}}>
                    <span style={{textTransform:"none"}}>Call us </span>&nbsp;<span style={{textTransform:'uppercase',fontWeight:"bold"}}>NOW!</span>
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
            {matches? <>
            <Grid item xs={12} sm={12} className="mob_Head_view">
              <img src={FitbasixLogo} alt='' />
              <Typography className="title" style={{ marginTop: "1rem" }}>
              
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
              <Button variant="contained" onClick={() => setOpen(true)} style={{textTransform:"none", boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",textShadow: "1px 1px #000"}}>
                Know more
              </Button>
            </Grid></> : <Box style={{height:"100vh",display:"flex",alignItems:"center"}}>
              <Box style={{height:"400px"}}>
            <Grid item xs={12} sm={12} className="mob_Head_view">
              <img src={FitbasixLogo} alt='' />
              <Typography className="title" style={{ marginTop: "1rem" }}>
              
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
              <Button variant="contained" onClick={() => setOpen(true)} style={{textTransform:"none", boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",textShadow: "1px 1px #000"}}>
                Know more
              </Button>
            </Grid>
            </Box>
            </Box>}
           
           
           
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

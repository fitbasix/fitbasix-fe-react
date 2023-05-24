import React from "react";
import Fitba6Logo from "../../../assets/Fitba6Logo.svg";
import {
  GooglePlayButton,
  AppStoreButton,
  ButtonsContainer,
} from "react-mobile-app-button";
import { Button, Grid } from "@mui/material";
import "./styles.css";
const Navbar = () => {
  const APKUrl = "https://play.google.com";
  const iOSUrl = "https://apps.apple.com";
  return (
    <div className="rootNav">
      <Grid container spacing={2} className="gridWrapper-nav">
        <Grid item xs={12} sm={6} className="logo-nav">
          <img src={Fitba6Logo} alt="" />
        </Grid>
        <Grid item xs={12} sm={6} className="playstore-btn">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
              <ButtonsContainer>
                <AppStoreButton
                  url={iOSUrl}
                  theme={"dark"}
                  className={"appstore-style"}
                />
                <GooglePlayButton
                  url={APKUrl}
                  theme={"dark"}
                  className={"appstore-style"}
                />
              </ButtonsContainer>
            </Grid>
            <Grid item xs={12} sm={4} className="call-btn">
              <Button variant="contained">Call us Now!</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Navbar;

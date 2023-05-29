import React from "react";
import "./styles.css";
import { Grid, Link } from "@mui/material";
import facebookLogo from "../../../assets/facebook.svg";
import instaLogo from "../../../assets/instagram.svg";
import twitterLogo from "../../../assets/twitter.svg";
const Footer = () => {
  return (
    <div className="Footer">
      <Grid container spacing={2}>
        <Grid item xs={6} sm={6}>
          <Grid container spacing={2} sx={{ textAlign: "center" }}>
            <Grid item xs={6} sm={4}>
              <Link
                href="/privacy"
                underline="none"
                color="#fff"
                // sx={{ fontSize: "14px" }}
              >
                Privacy Policy
              </Link>
            </Grid>

            <Grid item xs={6} sm={4}>
              <Link
                href="/terms"
                underline="none"
                color="#fff"
                // sx={{ fontSize: "14px" }}
              >
                Terms of use
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} sm={6} sx={{ display: "flex" }}>
          <Grid
            container
            spacing={3}
            sx={{
              textAlign: "left",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Grid item xs={4} sm={2}>
              <a href="https://www.facebook.com/fitbasix.ae/">
                <img src={facebookLogo} alt="" />
              </a>
            </Grid>
            <Grid item xs={4} sm={2}>
              <a href="https://www.instagram.com/fitbasix_/?hl=en">
                <img src={instaLogo} alt="" />
              </a>
            </Grid>
            <Grid item xs={4} sm={2}>
              <img src={twitterLogo} alt="" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;

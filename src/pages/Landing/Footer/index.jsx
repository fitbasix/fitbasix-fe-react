import { Divider, Grid, Link, Typography } from "@mui/material";
import React from "react";
import {
  AppStoreButton,
  ButtonsContainer,
  GooglePlayButton,
} from "react-mobile-app-button";
import Fitba6Logo from "../../../assets/Fitba6Logo.svg";
import facebookLogo from "../../../assets/facebook.svg";
import instaLogo from "../../../assets/instagram.svg";
import "./styles.css";

const Footer = () => {
  const APKUrl =
    "https://play.google.com/store/apps/details?id=com.fitbasixco.fitbasix&hl=en&gl=US&pli=1";
  const iOSUrl = "https://apps.apple.com/tt/app/fitbasix/id1618003884";
  return (
    <div className="Footer">
      <Grid container spacing={2}>
        <Grid item sm={12} xs={12}>
          <img src={Fitba6Logo} alt="" />
        </Grid>
        <Grid item sm={12} xs={12} sx={{ marginTop: "2rem" }}>
          <Grid container spacing={3} className="footerContentWrapper">
            <Grid item xs={12} sm={4} sx={{ textAlign: "left" }}>
              <div>
                <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
                  Contact Us
                </Typography>
              </div>
              <div>
                <Typography
                  variant="h6"
                  color="#B7B7B7"
                  sx={{ fontSize: "16px" }}
                >
                  Address : Block B, office B09-066 Sharjah Research Technology
                  and Innovation park, Sharjah, UAE
                </Typography>
              </div>
              <div>
                <Typography
                  variant="h6"
                  color="#B7B7B7"
                  sx={{ fontSize: "16px", marginTop: "2rem" }}
                >
                  Email: info@fitbasix.com
                </Typography>
              </div>
            </Grid>

            <Divider style={{ border: "0.5px solid #49AD50" }} />

            <Grid item xs={12} sm={3}>
              <div>
                <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
                  Legal
                </Typography>
              </div>
              <div>
                <Link href="/privacy" underline="none" color="#B7B7B7">
                  <Typography variant="h6" sx={{ fontSize: "16px" }}>
                    {" "}
                    Privacy Policy
                  </Typography>
                </Link>
              </div>
              <div>
                <Link href="/terms" underline="none" color="#B7B7B7">
                  <Typography
                    variant="h6"
                    sx={{ fontSize: "16px", marginTop: "0.5rem" }}
                  >
                    {" "}
                    Terms of use
                  </Typography>
                </Link>
              </div>
             
            </Grid>

            <Divider style={{ border: "0.5px solid #49AD50" }} />

            <Grid item xs={12} sm={4}>
              <div>
                <Typography variant="h5">Follow us on</Typography>
              </div>
              <div className="socialmedia-icons">
                <div>
                  <a href="https://www.facebook.com/profile.php?id=100087235057294">
                    <img
                      src={facebookLogo}
                      alt=""
                      style={{ marginRight: "2rem" }}
                    />
                  </a>
                </div>
                <div>
                  <a href=" https://www.instagram.com/fitbasix_/">
                    <img
                      src={instaLogo}
                      alt=""
                      style={{ marginRight: "2rem" }}
                    />
                  </a>
                </div>
              
              </div>
              <div className="btnContainer">
                <ButtonsContainer>
                  <AppStoreButton
                    url={iOSUrl}
                    width="45%"
                    theme={"dark"}
                    className={"playstore-style"}
                  />
                  <GooglePlayButton
                    url={APKUrl}
                    theme={"dark"}
                    className={"playstore-style"}
                  />
                </ButtonsContainer>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;

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
import FitbasixLogo from "../../../assets/Fitba6Logo.svg"
import "./styles.css";

const NewFooter = () => {
  const APKUrl =
    "https://play.google.com/store/apps/details?id=com.fitbasixco.fitbasix&hl=en&gl=US&pli=1";
  const iOSUrl = "https://apps.apple.com/tt/app/fitbasix/id1618003884";
  return (
    <div className="newFooter">
      <div className="newfooterheadcontainer">
        <Typography className="newfooterhead">CONTACT US</Typography>
      </div>
      <Grid container className="newFooter-mob">
        {/* <Grid item sm={12} xs={12}>
          <img src={Fitba6Logo} alt="" />
        </Grid> */}
        {/* <Grid item sm={12} xs={12}>
          <div>
            <Typography variant="h1">Contact Us</Typography>
          </div>
        </Grid> */}
        <Grid item sm={11} xs={10} className="newFooterInnerContainer">
          <Grid container spacing={1} className="newfooterContentWrapper">
            <div
              className="fixedFooterLogo"
              style={{
                backgroundColor: "#fff",
                padding: "0.1rem 1rem",
                borderRadius: "2rem",
                position: "absolute",
                top: "-1.5rem",
                left: "1rem",
                fontStyle: "italic",
                fontSize: "1.5rem",
                fontWeight: "800",
              }}
            >
              {/* <img src={FitbasixLogo} alt=''/> */}
              <span style={{ color: "#49ad50" }}>FIT</span>
              <span style={{ color: "black" }}>basix</span>
            </div>
            <Grid item xs={5} sm={4} sx={{ textAlign: "left" }}>
              <div>
                <Typography className="footerTitle">Contact Us</Typography>
              </div>
              <div>
                <Typography className="footerContent">
                  Address : Block B, office B09-066 Sharjah Research Technology
                  and Innovation park, Sharjah, UAE
                </Typography>
              </div>
              <div>
                <Typography className="footerContent">
                  Email: info@fitbasix.com
                </Typography>
              </div>
              <div>
                <Typography className="footerContent">
                  Phone No: +971 45973222
                </Typography>
              </div>
            </Grid>

            <Divider
              style={{ border: "0.5px solid #49AD50" }}
              className="firstDivider"
            />

            <Grid item xs={5} sm={3} className="secondGrid">
              <div>
                <Typography className="footerTitle">Legal</Typography>
              </div>
              <div>
                <Link href="/privacy" color="#373737" underline="none">
                  <Typography className="footerContent">
                    Privacy Policy
                  </Typography>
                </Link>
              </div>
              <div>
                <Link href="/terms" color="#373737" underline="none">
                  <Typography className="footerContent">
                    Terms of use
                  </Typography>
                </Link>
              </div>
            </Grid>

            <Divider
              style={{ border: "0.5px solid #49AD50" }}
              className="secondDivider"
            />

            <Grid item xs={12} sm={4} className="thirdGrid">
              <div>
                <Typography className="footerTitle">Follow us on</Typography>
              </div>
              <div className="socialmedia-icons">
                <div>
                  <a
                    target="blank"
                    href="https://www.facebook.com/profile.php?id=100087235057294"
                  >
                    <img
                      src={facebookLogo}
                      alt=""
                      style={{ marginRight: "2rem" }}
                    />
                  </a>
                </div>
                <div>
                  <a
                    target="blank"
                    href=" https://www.instagram.com/fitbasix_/"
                  >
                    <img
                      src={instaLogo}
                      alt=""
                      style={{ marginRight: "2rem" }}
                    />
                  </a>
                </div>
              </div>
            </Grid>
          </Grid>

          <div className="mobileScreenSocial">
            <div>
              <Typography style={{ color: "#fff", fontWeight: "bold" }}>
                Follow us on
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "0.5rem",
              }}
            >
              <div>
                <a
                  target="blank"
                  href="https://www.facebook.com/profile.php?id=100087235057294"
                >
                  <img
                    src={facebookLogo}
                    alt=""
                    style={{ marginRight: "1rem" }}
                  />
                </a>
              </div>
              <div>
                <a target="blank" href=" https://www.instagram.com/fitbasix_/">
                  <img src={instaLogo} alt="" />
                </a>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default NewFooter;

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
        <Grid
          item
          sm={10}
          xs={10}
          sx={{ marginTop: "10.5vw", paddingLeft: "1rem" }}
        >
          <Grid container spacing={3} className="newfooterContentWrapper">
            <Grid item xs={12} sm={4} sx={{ textAlign: "left" }}>
              <div>
                <Typography
                  variant="h5"
                  color="black"
                  sx={{ marginBottom: "1rem", fontWeight: "bold" }}
                >
                  Contact Us
                </Typography>
              </div>
              <div>
                <Typography
                  variant="h6"
                  color="#373737"
                  sx={{ fontSize: "16px" }}
                >
                  Address : Block B, office B09-066 Sharjah Research Technology
                  and Innovation park, Sharjah, UAE
                </Typography>
              </div>
              <div>
                <Typography
                  variant="h6"
                  color="#373737"
                  sx={{ fontSize: "16px", marginTop: "2rem" }}
                >
                  Email: info@fitbasix.com
                </Typography>
              </div>
              <div>
                <Typography
                  variant="h6"
                  color="#373737"
                  sx={{ fontSize: "16px", marginTop: "2rem" }}
                >
                  Phone No: +971 45973222
                </Typography>
              </div>
            </Grid>

            <Divider style={{ border: "0.5px solid #49AD50" }} />

            <Grid item xs={12} sm={3}>
              <div>
                <Typography
                  variant="h5"
                  color="black"
                  sx={{ marginBottom: "1rem", fontWeight: "bold" }}
                >
                  Legal
                </Typography>
              </div>
              <div>
                <Link href="/privacy" color="#373737" underline="none">
                  <Typography variant="h6" sx={{ fontSize: "16px" }}>
                    {" "}
                    Privacy Policy
                  </Typography>
                </Link>
              </div>
              <div>
                <Link href="/terms" color="#373737" underline="none">
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
                <Typography
                  variant="h5"
                  color="black"
                  sx={{ fontWeight: "bold" }}
                >
                  Follow us on
                </Typography>
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
        </Grid>
      </Grid>
    </div>
  );
};

export default NewFooter;

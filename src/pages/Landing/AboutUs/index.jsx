import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";
import image1 from "../../../assets/cardImg1.svg";
import image2 from "../../../assets/cardImg2.svg";
import image3 from "../../../assets/cardImg3.svg";
import "./styles.css";
const AboutUs = () => {
  return (
    <Grid container spacing={2} className="aboutUsContainer">
      <Grid item xs={6}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h3">
              <span style={{ color: "#49AD50", fontWeight: 700 }}>Who </span>are
              we?
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              Lorem ipsum dolor sit amet. Qui enim vitae eos quia inventore aut
              deserunt quia et ducimus voluptatem. Quo natus voluptatem et
              dignissimos molestiae eos ipsam repellendus ex totam rerum?
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=es4x5R-rV9s"
              light={true}
              wrapper={"div"}
              width={400}
              height={300}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Grid container >
          <Grid item>
            <div className="cardContainer">
              <div className="leftContainer">
                <img src={image1} />
              </div>
              <div className="rightContainer">
                <div className="cardTitle">
                  <Typography variant="h6">Nutritional Plan</Typography>
                </div>
                <div>
                  <Typography>
                    Lorem ipsum dolor sit amet. Qui enim vitae eos quia
                    inventore aut deserunt quia et d
                  </Typography>
                </div>

                <div className="btnTrial">
                  <Button variant="contained">Get a FREE TRIAL!</Button>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item>
            <div className="cardContainer">
              <div className="leftContainer">
                <img src={image2} />
              </div>
              <div className="rightContainer">
                <div className="cardTitle">
                  <Typography variant="h6">Nutritional Plan</Typography>
                </div>
                <div>
                  <Typography>
                    Lorem ipsum dolor sit amet. Qui enim vitae eos quia
                    inventore aut deserunt quia et d
                  </Typography>
                </div>

                <div className="btnTrial">
                  <Button variant="contained">Get a FREE TRIAL!</Button>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item>
            <div className="cardContainer">
              <div className="leftContainer">
                <img src={image3} />
              </div>
              <div className="rightContainer">
                <div className="cardTitle">
                  <Typography variant="h6">Nutritional Plan</Typography>
                </div>
                <div>
                  <Typography>
                    Lorem ipsum dolor sit amet. Qui enim vitae eos quia
                    inventore aut deserunt quia et d
                  </Typography>
                </div>

                <div className="btnTrial">
                  <Button variant="contained">Get a FREE TRIAL!</Button>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutUs;

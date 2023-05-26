import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";
import image1 from "../../../assets/cardImg1.svg";
import image2 from "../../../assets/cardImg2.svg";
import image3 from "../../../assets/cardImg3.svg";
import picture from "../../../assets/WhoareWe.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";
import { Pagination } from "swiper";
const AboutUs = () => {
  return (
    <Grid container spacing={2} className="aboutUsContainer">
      <Grid item md={6} xs={12}>
        <Grid container sx={{ padding: "2rem 1rem 2rem 2rem" }}>
          <Grid item md={12}>
            <Typography variant="h3" className="textContent">
              <span style={{ color: "#49AD50", fontWeight: 700 }}>Who </span>are
              we?
            </Typography>
          </Grid>
          <Grid item md={12} xs={12} className="textContent">
            <Typography>
              Lorem ipsum dolor sit amet. Qui enim vitae eos quia inventore aut
              deserunt quia et ducimus voluptatem. Quo natus voluptatem et
              dignissimos molestiae eos ipsam repellendus ex totam rerum?
            </Typography>
          </Grid>
          <Grid
            item
            md={12}
            xs={12}
            sx={{ position: "relative", marginTop: "1rem" }}
          >
            <img
              src={picture}
              style={{ position: "absolute", width: "100%" }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={6} xs={12} className="aboutUsContainer--Right">
        <Grid container>
          <Grid item sx={{ marginTop: "1rem" }}>
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
              </div>
            </div>
          </Grid>
          <Grid item sx={{ marginTop: "1rem" }}>
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
              </div>
            </div>
          </Grid>
          <Grid item sx={{ marginTop: "1rem" }}>
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
              </div>
            </div>
          </Grid>

       
        </Grid>
        
      </Grid>
      <Grid item md={12} xs={12}>
            <Button
              sx={{
                backgroundColor: "#49AD50",
                color: "#fff",
                textAlign: "center",
              }}
              // onClick={() => setOpen(true)}
            >
              {" "}
              Get a FREE TRIAL
            </Button>
          </Grid>
      <Grid item md={12} xs={12} className="aboutUsContainer--RightMobile">
        <Grid container sx={{ marginTop: "15rem" }}>
          <Swiper
            navigation={false}
            modules={[Pagination]}
            speed={1000}
            className="mySwiper"
            effect={"fade"}
            pagination={true}
          >
            <SwiperSlide>
              <div className="SwiperSlide">
                <div className="cardContainer">
                  <div className="leftContainer">
                    <img src={image1} />
                  </div>
                  <div className="rightContainer">
                    <div className="cardTitle">
                      <Typography variant="h6" sx={{ textAlign: "center" }}>
                        Nutritional Plan
                      </Typography>
                    </div>
                    <div>
                      <Typography sx={{ textAlign: "center" }}>
                        Lorem ipsum dolor sit amet. Qui enim vitae eos quia
                        inventore aut deserunt quia et d
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="SwiperSlide">
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
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="SwiperSlide">
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
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutUs;

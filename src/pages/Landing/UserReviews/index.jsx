import React from "react";
import "./styles.css";
import { Grid, Typography } from "@mui/material";
import UsersCard from "./UsersCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

const UserReviews = () => {
  return (
    <div className="userReviewsContainer">
      <Grid container>
        <Grid item md={12} xs={12} className="TopContent--Container">
          {" "}
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, marginTop: "1rem", textAlign: "center" }}
          >
            What do our <span style={{ color: "#49AD50" }}>users</span> have to
            say?
          </Typography>
          <Typography
            varinat="subtitle"
            sx={{ textAlign: "center", marginTop: "1rem" }}
          >
            Lorem ipsum dolor sit amet. Qui enim vitae eos quia inventore aut
            deserunt
            <br /> quia et ducimus voluptatem.{" "}
          </Typography>
        </Grid>
        <Grid item md={12} xs={12}>
          {/* FOR DESKTOP */}
          <div className="userReviewsContainer--Bottom">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              speed={1000}
              className="mySwiper"
              effect={"fade"}
            >
              <SwiperSlide>
                <div className="SwiperSlide">
                  <UsersCard
                    content=" “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.“"
                    name="Safari Sharma"
                    service="Service that customer availed"
                  />
                  <UsersCard
                    content=" “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.“"
                    name="Safari Sharma"
                    service="Service that customer availed"
                  />{" "}
                  <UsersCard
                    content=" “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.“"
                    name="Safari Sharma"
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  <UsersCard
                    content=" “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.“"
                    name="Safari Sharma"
                    service="Service that customer availed"
                  />
                  <UsersCard
                    content=" “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.“"
                    name="Safari Sharma"
                    service="Service that customer availed"
                  />{" "}
                  <UsersCard
                    content=" “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.“"
                    name="Safari Sharma"
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  <UsersCard
                    content=" “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.“"
                    name="Safari Sharma"
                    service="Service that customer availed"
                  />
                  <UsersCard
                    content=" “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.“"
                    name="Safari Sharma"
                    service="Service that customer availed"
                  />{" "}
                  <UsersCard
                    content=" “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.“"
                    name="Safari Sharma"
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          {/* FOR MOBILE */}
          <div className="userReviewsContainer--BottomMobile">
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
                  {" "}
                  <UsersCard
                    content=" “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.“"
                    name="Safari Sharma"
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  {" "}
                  <UsersCard
                    content=" “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.“"
                    name="Safari Sharma"
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  {" "}
                  <UsersCard
                    content=" “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.“"
                    name="Safari Sharma"
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserReviews;

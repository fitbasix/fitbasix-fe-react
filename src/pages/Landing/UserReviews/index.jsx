import { Grid, Typography } from "@mui/material";
import React from "react";
import UsersCard from "./UsersCard";
import "./styles.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import userR1 from "../../../assets/userR1.png";
import userR2 from "../../../assets/userR2.png";
import userR3 from "../../../assets/userR3.png";
// import required modules
import { Navigation, Pagination } from "swiper";

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
            Check Out Our <span style={{ color: "#49AD50" }}>Users</span>{" "}
            Reviews
          </Typography>
          <Typography
            variant="h6"
            sx={{ textAlign: "center", marginTop: "1rem" }}
          >
            Users rave about FITbasix's personal training sessions:
            game-changing workouts, measurable progress, and <br /> newfound
            confidence in their fitness journey!
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
                    content="FITbasix transformed my fitness routine with its user-friendly interface, diverse workouts, and expert guidance. Highly recommend! "
                    name="Yasmin Patel"
                    logo={userR1}
                    service="Service that customer availed"
                  />
                  <UsersCard
                    content="FITbasix transformed my fitness journey! With its user-friendly interface and comprehensive workout library, reaching my goals has never been easier. "
                    name="Rashid Khan"
                    logo={userR2}
                    service="Service that customer availed"
                  />
                  <UsersCard
                    content="FITbasix transformed my fitness routine! With its user-friendly interface and diverse workout options, I'm achieving my goals faster than ever. #FITbasix"
                    name="Omar Shah"
                    logo={userR3}
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
              {/* <SwiperSlide>
                <div className="SwiperSlide">
                  <UsersCard
                    content="FITbasix transformed my fitness routine with its user-friendly interface, diverse workouts, and expert guidance. Highly recommend!"
                    name="Yasmin Patel"
                    logo={"https://fitbasix-dev.s3.me-south-1.amazonaws.com/webImage/sanidhi.webp"}
                    service="Service that customer availed"
                  />
                  <UsersCard
                    content="FITbasix transformed my fitness journey! With its user-friendly interface and comprehensive workout library, reaching my goals has never been easier."
                    name="Rashid Khan"
                    logo={"https://fitbasix-dev.s3.me-south-1.amazonaws.com/webImage/umair.webp"}
                    service="Service that customer availed"
                  />{" "}
                  <UsersCard
                    content="FITbasix transformed my fitness routine! With its user-friendly interface and diverse workout options, I'm achieving my goals faster than ever. #FITbasix"
                    name="Omar Shah"
                    logo={"https://fitbasix-dev.s3.me-south-1.amazonaws.com/webImage/chintan.webp"}
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  <UsersCard
                    content="FITbasix transformed my fitness routine with its user-friendly interface, diverse workouts, and expert guidance. Highly recommend!"
                    name="Yasmin Patel"
                    logo={"https://fitbasix-dev.s3.me-south-1.amazonaws.com/webImage/sanidhi.webp"}
                    service="Service that customer availed"
                  />
                  <UsersCard
                    content="FITbasix transformed my fitness journey! With its user-friendly interface and comprehensive workout library, reaching my goals has never been easier."
                    name="Rashid Khan"
                    logo={"https://fitbasix-dev.s3.me-south-1.amazonaws.com/webImage/umair.webp"}
                    service="Service that customer availed"
                  />{" "}
                  <UsersCard
                    content="FITbasix transformed my fitness routine! With its user-friendly interface and diverse workout options, I'm achieving my goals faster than ever. #FITbasix"
                    name="Omar Shah"
                    logo={"https://fitbasix-dev.s3.me-south-1.amazonaws.com/webImage/chintan.webp"}
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide> */}
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
                    content="FITbasix transformed my fitness routine with its user-friendly interface, diverse workouts, and expert guidance. Highly recommend! "
                    name="Yasmin Patel"
                    logo={userR1}
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  {" "}
                  <UsersCard
                    content="FITbasix transformed my fitness journey! With its user-friendly interface and comprehensive workout library, reaching my goals has never been easier. "
                    name="Rashid Khan"
                    logo={userR2}
                    service="Service that customer availed"
                  />{" "}
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  {" "}
                  <UsersCard
                    content="FITbasix transformed my fitness routine! With its user-friendly interface and diverse workout options, I'm achieving my goals faster than ever. #FITbasix"
                    name="Omar Shah"
                    logo={userR3}
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

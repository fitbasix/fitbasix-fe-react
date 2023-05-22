import React from "react";
import "./styles.css";
import { Typography } from "@mui/material";
import UsersCard from "./UsersCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { EffectFade, Navigation } from "swiper";

const UserReviews = () => {
  return (
    <div className="userReviewsContainer">
      <div className="userReviewsContainer--Top">
        <Typography variant="h4" sx={{ fontWeight: 500, marginTop: "1rem" }}>
          What do our users have to say?
        </Typography>
        <Typography
          varinat="subtitle"
          sx={{ textAlign: "center", marginTop: "1rem" }}
        >
          Lorem ipsum dolor sit amet. Qui enim vitae eos quia inventore aut
          deserunt
          <br /> quia et ducimus voluptatem.{" "}
        </Typography>
      </div>
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
    </div>
  );
};

export default UserReviews;

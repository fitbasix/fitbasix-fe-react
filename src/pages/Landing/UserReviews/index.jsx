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
import userR1 from "../../../assets/Users/mensa_ezz.png";
import userR2 from "../../../assets/Users/Dr_kumar.png";
import userR3 from "../../../assets/Users/shaima_hormillosa.png";
import userR4 from "../../../assets/Users/naina_qureshi.png";
import userR5 from "../../../assets/Users/urfi_jagda.png";
import userR6 from "../../../assets/Users/anum_zeeshan.png";
import userR7 from "../../../assets/Users/bony_kar.png";
import userR8 from "../../../assets/Users/shadan_nazeer.png";
import userR9 from "../../../assets/Users/mrs._noushad.png";
import userR10 from "../../../assets/Users/shikha_shack.png";
import userR11 from "../../../assets/Users/Chintan_Shah.png";
import userR12 from "../../../assets/Users/Sanidhi_G._Sharma.png";
import userR13 from "../../../assets/Users/Umair_Qazi.png";
import userR14 from "../../../assets/Users/Zahra_Omar.png";
import userR0 from "../../../assets/Users/user.png";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

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
                    content="It’s really a masterpiece ❤❤"
                    name="Mensa Ezz"
                    logo={userR1}
                    service="Service that customer availed"
                  />
                  <UsersCard
                    content="Awesome 🙌❤👏 @fitbasix the best app"
                    name="Dr Kumar "
                    logo={userR2}
                    service="Service that customer availed"
                  />
                  <UsersCard
                    content="Starting a fitness program may be one of the best things you can do for your health. ~ Physical activity can reduce your risk of chronic disease, improve your balance and coordination, help you lose weight - and even improve your sleep habits and self-esteem! With @fitbasix, you get a nutritionist + a fitness expert so you can plan your fitness journey efficiently! Such an easy to use app and convenient as well for busy people like us.Thanks for sharing @anumable.blog! Rooting for your fitness journey."
                    name="Shaima Hormillosa "
                    logo={userR3}
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  <UsersCard
                    content="Sooo convenient amazing"
                    name="Naina Qureshi"
                    logo={userR4}
                    service="Service that customer availed"
                  />
                  <UsersCard
                    content="This is convenient to use"
                    name="Urfi Jagda"
                    logo={userR5}
                    service="Service that customer availed"
                  />{" "}
                  <UsersCard
                    content="I already downloaded the app and it’s super cool."
                    name="Anum Zeeshan"
                    logo={userR6}
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  <UsersCard
                    content="This is absolutely amazing. FITbasix is such a great app."
                    name="Bony Kar"
                    logo={userR7}
                    service="Service that customer availed"
                  />
                  <UsersCard
                    content="This app @fitbasix_ looks perfect for all busy people to give some quality time for health at the convenience of our busy schedule."
                    name="Shadan Nazeer"
                    logo={userR8}
                    service="Service that customer availed"
                  />
                  <UsersCard
                    content="Being Fit is so much Needed now adays and Only laziness makes it delay for being fit..!! @fitbasix_ is a great platform for us."
                    name="Mrs. Noushad "
                    logo={userR9}
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  <UsersCard
                    content="@fitbasix_ is all that I need right now"
                    name="Shikha Shack "
                    logo={userR10}
                    service="Service that customer availed"
                  />
                  <UsersCard
                    content="That is brilliant. I am also planning to join gym but not able to do it because of kids. This is gonna be a great motivation @fitbasix_"
                    name="Zartashia Mir"
                    logo={userR0}
                    service="Service that customer availed"
                  />
                  <UsersCard
                    content="I have been working out with Avik for quite sometime now. I must say my experience is no short than a live training session. Look forward my fitness journey with Fitbasix."
                    name="Chintan Shah"
                    logo={userR11}
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  <UsersCard
                    content="Hi, my name is sanidhi . And i am a happy customer of Fitbasix.. My trainer is Rosen chettri . I am thankful to thi app and my tranier for trusting in me and helping me towards achieving my goals. Thankyou very much."
                    name="Sanidhi G. Sharma"
                    logo={userR12}
                    service="Service that customer availed"
                  />
                  <UsersCard
                    content="Fitbasix has been fabulous for me. The trainers are professional, they dedicate their time to you, help you navigate your own fitness challenges, and help with building strength, reducing weight, and achieving top levels of fitness."
                    name="Umair Qazi"
                    logo={userR13}
                    service="Service that customer availed"
                  />{" "}
                  <UsersCard
                    content="Everyone says health is wealth but a lot of motivation, stamina, patience, consistency and encouragement goes into achieving it. Fitbasix makes you achieve exactly that; from the point when you’re not up to or geared towards an active lifestyle at all, till you actually achieve the goals you had once...."
                    name="Zahra Omar"
                    logo={userR14}
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          {/* FOR MOBILE */}
          <div className="userReviewsContainer--BottomMobile">
            {/* <Swiper
              navigation={false}
              modules={[Pagination]}
              speed={1000}
              className="mySwiper"
              effect={"fade"}
              pagination={true}
            > */}
            <Swiper
              navigation={false}
              speed={1000}
              className="mySwiper"
              modules={[Autoplay]}
              pagination={false}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide>
                <div className="SwiperSlide">
                  <UsersCard
                    content="It’s really a masterpiece ❤❤"
                    name="Mensa Ezz"
                    logo={userR1}
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  <UsersCard
                    content="Awesome 🙌❤👏 @fitbasix the best app"
                    name="Dr Kumar "
                    logo={userR2}
                    service="Service that customer availed"
                  />{" "}
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  <UsersCard
                    content="Starting a fitness program may be one of the best things you can do for your health. ~ Physical activity can reduce your risk of chronic disease, improve your balance and coordination, help you lose weight - and even improve your sleep habits and self-esteem! With @fitbasix, you get a nutritionist + a fitness expert so you can plan your fitness journey efficiently! Such an easy to use app and convenient as well for busy people like us.Thanks for sharing @anumable.blog! Rooting for your fitness journey."
                    name="Shaima Hormillosa "
                    logo={userR3}
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  <UsersCard
                    content="Sooo convenient amazing"
                    name="Naina Qureshi"
                    logo={userR4}
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  <UsersCard
                    content="This is convenient to use"
                    name="Urfi Jagda"
                    logo={userR5}
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  <UsersCard
                    content="I already downloaded the app and it’s super cool."
                    name="Anum Zeeshan"
                    logo={userR6}
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  <UsersCard
                    content="This is absolutely amazing. FITbasix is such a great app."
                    name="Bony Kar"
                    logo={userR7}
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  <UsersCard
                    content="This app @fitbasix_ looks perfect for all busy people to give some quality time for health at the convenience of our busy schedule."
                    name="Shadan Nazeer"
                    logo={userR8}
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  <UsersCard
                    content="Being Fit is so much Needed now adays and Only laziness makes it delay for being fit..!! @fitbasix_ is a great platform for us."
                    name="Mrs. Noushad "
                    logo={userR9}
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  <UsersCard
                    content="@fitbasix_ is all that I need right now"
                    name="Shikha Shack "
                    logo={userR10}
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  <UsersCard
                    content="That is brilliant. I am also planning to join gym but not able to do it because of kids. This is gonna be a great motivation @fitbasix_"
                    name="Zartashia Mir"
                    logo={userR0}
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  <UsersCard
                    content="I have been working out with Avik for quite sometime now. I must say my experience is no short than a live training session. Look forward my fitness journey with Fitbasix."
                    name="Chintan Shah"
                    logo={userR11}
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  <UsersCard
                    content="Hi, my name is sanidhi . And i am a happy customer of Fitbasix.. My trainer is Rosen chettri . I am thankful to thi app and my tranier for trusting in me and helping me towards achieving my goals. Thankyou very much."
                    name="Sanidhi G. Sharma"
                    logo={userR12}
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  <UsersCard
                    content="Fitbasix has been fabulous for me. The trainers are professional, they dedicate their time to you, help you navigate your own fitness challenges, and help with building strength, reducing weight, and achieving top levels of fitness."
                    name="Umair Qazi"
                    logo={userR13}
                    service="Service that customer availed"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="SwiperSlide">
                  <UsersCard
                    content="Everyone says health is wealth but a lot of motivation, stamina, patience, consistency and encouragement goes into achieving it. Fitbasix makes you achieve exactly that; from the point when you’re not up to or geared towards an active lifestyle at all, till you actually achieve the goals you had once...."
                    name="Zahra Omar"
                    logo={userR14}
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

import React from "react";
import "./styles.css";
import { Typography } from "@mui/material";
import TrainerCard from "./TrainerCard";
import trainer1 from "../../../assets/Trainers/trainer1.png";
import trainer2 from "../../../assets/Trainers/trainer2.png";
import trainer3 from "../../../assets/Trainers/trainer3.png";
import trainer4 from "../../../assets/Trainers/trainer4.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { EffectFade, Navigation } from "swiper";

const TopTrainers = () => {
  return (
    <div className="topTrainersContainer">
      <div className="topTrainersContainer--top">
        <Typography
          variant="h4"
          sx={{ fontWeight: "700", textAlign: "center" }}
        >
          Our top trainers
        </Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: "center", marginTop: "1rem", width: "30rem" }}
        >
          Lorem ipsum dolor sit amet. Qui enim vitae eos quia inventore aut
          deserunt quia et ducimus voluptatem.{" "}
        </Typography>
      </div>
      <div className="topTrainersContainer--bottom">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          speed={1000}
          className="mySwiper"
          effect={"fade"}
        >
          <SwiperSlide>
            <div className="SwiperSlide">
              <TrainerCard
                image={trainer1}
                name="Brandon Wong"
                designation="HIIT Trainer"
                experience="3"
                rating={3}
                reviews={234}
              />
              <TrainerCard
                image={trainer2}
                name="Brandon Wong"
                designation="HIIT Trainer"
                experience="3"
                rating={3}
                reviews={234}
              />
              <TrainerCard
                image={trainer3}
                name="Brandon Wong"
                designation="HIIT Trainer"
                experience="3"
                rating={3}
                reviews={234}
              />
              <TrainerCard
                image={trainer4}
                name="Brandon Wong"
                designation="HIIT Trainer"
                experience="3"
                rating={3}
                reviews={234}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SwiperSlide">
              <TrainerCard
                image={trainer1}
                name="Brandon Wong"
                designation="HIIT Trainer"
                experience="3"
                rating={3}
                reviews={234}
              />
              <TrainerCard
                image={trainer2}
                name="Brandon Wong"
                designation="HIIT Trainer"
                experience="3"
                rating={3}
                reviews={234}
              />
              <TrainerCard
                image={trainer3}
                name="Brandon Wong"
                designation="HIIT Trainer"
                experience="3"
                rating={3}
                reviews={234}
              />
              <TrainerCard
                image={trainer4}
                name="Brandon Wong"
                designation="HIIT Trainer"
                experience="3"
                rating={3}
                reviews={234}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SwiperSlide">
              <TrainerCard
                image={trainer1}
                name="Brandon Wong"
                designation="HIIT Trainer"
                experience="3"
                rating={3}
                reviews={234}
              />
              <TrainerCard
                image={trainer2}
                name="Brandon Wong"
                designation="HIIT Trainer"
                experience="3"
                rating={3}
                reviews={234}
              />
              <TrainerCard
                image={trainer3}
                name="Brandon Wong"
                designation="HIIT Trainer"
                experience="3"
                rating={3}
                reviews={234}
              />
              <TrainerCard
                image={trainer4}
                name="Brandon Wong"
                designation="HIIT Trainer"
                experience="3"
                rating={3}
                reviews={234}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TopTrainers;

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
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";
import { useEffect } from "react";
import { getTrainers } from "../../../api/services";
import { useState } from "react";

const TopTrainers = () => {
  const [trainers, setTrainers] = useState([]);
  console.log("Trainers", trainers);
  const getData = async () => {
    let response = await getTrainers();

    setTrainers(response?.response?.data);
  };

  useEffect(() => {
    getData();
  }, []);

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
          sx={{ textAlign: "center", marginTop: "1rem" }}
        >
          Meet our exceptional trainers at FITbasix! Skilled professionals
          committed to helping you achieve your fitness goals.
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
                image={trainers[0]?.profilePhoto}
                name={trainers[0]?.name}
                designation="HIIT Trainer"
                experience="3"
                rating={parseInt(trainers[0]?.rating)}
                reviews={234}
              />
              <TrainerCard
                image={trainers[1]?.profilePhoto}
                name={trainers[1]?.name}
                designation="HIIT Trainer"
                experience="3"
                rating={parseInt(trainers[1]?.rating)}
                reviews={234}
              />
              <TrainerCard
                image={trainers[2]?.profilePhoto}
                name={trainers[2]?.name}
                designation="HIIT Trainer"
                experience="3"
                rating={parseInt(trainers[2]?.rating)}
                reviews={234}
              />
              <TrainerCard
                image={trainers[3]?.profilePhoto}
                name={trainers[3]?.name}
                designation="HIIT Trainer"
                experience="3"
                rating={parseInt(trainers[3]?.rating)}
                reviews={234}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SwiperSlide">
              <TrainerCard
                image={trainers[4]?.profilePhoto}
                name={trainers[4]?.name}
                designation="HIIT Trainer"
                experience="3"
                rating={parseInt(trainers[4]?.rating)}
                reviews={234}
              />
              <TrainerCard
                image={trainers[5]?.profilePhoto}
                name={trainers[5]?.name}
                designation="HIIT Trainer"
                experience="3"
                rating={parseInt(trainers[5]?.rating)}
                reviews={234}
              />
              <TrainerCard
                image={trainers[6]?.profilePhoto}
                name={trainers[6]?.name}
                designation="HIIT Trainer"
                experience="3"
                rating={parseInt(trainers[6]?.rating)}
                reviews={234}
              />
              <TrainerCard
                image={trainers[7]?.profilePhoto}
                name={trainers[7]?.name}
                designation="HIIT Trainer"
                experience="3"
                rating={parseInt(trainers[7]?.rating)}
                reviews={234}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="topTrainersContainer--bottomMobile">
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
              <TrainerCard
                image={trainer1}
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
                image={trainer2}
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
                image={trainer3}
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

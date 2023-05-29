import React, { useRef } from "react";
import "./styles.css";
import {
  Button,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import PopularClassesCard from "./PopularClassesCard";
import cardImage from "../../../assets/CARDIMAGEPOPULARCALASSES.svg";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import ReusableDialog from "../../../components/ReusableDialog";
import { useState } from "react";
import FreeTrialDialog from "../../../components/FreeTrialDialog";

const PopularClasses = () => {
  const ref = useRef();

  const data = [
    {
      name: "Yoga Session",
      rating: "4.5",
      duration: "45 min",
      coach: "Shein Tsemda",
      description:
        "A holistic approach on training & benefiting one's Flexibility, Body toning, stress free mental state, stability, improved sleep etc.",
      image: cardImage,
    },
    {
      name: "Diet Consultation",
      rating: "4.5",
      duration: "45 min",
      coach: "Shein Tsemda",
      description:
        "Tasty and Nutritious Meal planning enhancing one's health and performance while assisting with body shaping in accordance to the goal.",
      image: cardImage,
    },
    {
      name: "Fitness Training",
      rating: "4.5",
      duration: "45 min",
      coach: "Shein Tsemda",
      description:
        "An energetic Virtual Session with a systematic fitness regime that assists in burning body fats and strengthening muscularity.",
      image: cardImage,
    },
    {
      name: "Live Stream",
      rating: "4.5",
      duration: "45 min",
      coach: "Shein Tsemda",
      description:
        "A Super Active Group Session with a communal motivation to rejuvenate ones Fitness lifestyle that helps with body Toning.",
      image: cardImage,
    },
  ];
  const [open, setOpen] = useState(false);

  const [workout, setWorkout] = useState("");

  const handleChange = (event) => {
    setWorkout(event.target.value);
  };
  return (
    <div className="popularClassesContainer">
      <div className="popularClassesContainer--Top">
        <Typography
          variant="h4"
          sx={{ fontWeight: "700", textAlign: "center" }}
        >
          Train <span style={{ color: "#49AD50" }}>With </span>FITbasix
        </Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: "center", marginTop: "1rem", width: "30rem" }}
          className="SubtextMobile"
        >
          Experience the pinnacle of personal training excellence with FITbasix!
          Our app delivers customized workouts and expert guidance for optimal
          results.
        </Typography>
      </div>
      <div className="popularClassesContainer--Bottom">
        <ResponsiveContainer
          carouselRef={ref}
          render={(parentWidth, carouselRef) => {
            let currentVisibleSlide = 1;
            if (parentWidth >= 1023) currentVisibleSlide = 3;
            if (parentWidth <= 767) currentVisibleSlide = 1;
            return (
              <>
                {" "}
                <StackedCarousel
                  ref={carouselRef}
                  slideComponent={PopularClassesCard}
                  slideWidth={250}
                  carouselWidth={parentWidth}
                  data={data}
                  currentVisibleSlide={currentVisibleSlide}
                  maxVisibleSlide={3}
                  useGrabCursor
                  fadeDistance={0.2}
                  height={500}
                />{" "}
              </>
            );
          }}
        />
      </div>
      <div className="popularClassesContainer--BottomMobile">
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
              <PopularClassesCard data={data} dataIndex={0} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SwiperSlide">
              {" "}
              <PopularClassesCard data={data} dataIndex={1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SwiperSlide">
              {" "}
              <PopularClassesCard data={data} dataIndex={2} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SwiperSlide">
              {" "}
              <PopularClassesCard data={data} dataIndex={3} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SwiperSlide">
              <PopularClassesCard data={data} dataIndex={0} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <Grid container>
        <Grid
          item
          xs={12}
          md={12}
          sx={{ textAlign: "center", marginBottom: "1rem", marginTop: "1rem" }}
        >
          <Button
            sx={{
              backgroundColor: "#49AD50",
              color: "#fff",
              textAlign: "center",
            }}
            onClick={() => setOpen(true)}
          >
            {" "}
            Get a FREE TRIAL
          </Button>
        </Grid>
      </Grid>
      <FreeTrialDialog
        setOpen={setOpen}
        open={open}
        title={"Get a FREE TRIAL!"}
      />
    </div>
  );
};

export default PopularClasses;

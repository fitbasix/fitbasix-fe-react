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
      duration: "30 min",
      coach: "Shein Tsemda",
      description:
        "Lorem ipsum dolor sit amet. Qui enim vitae eos quia inventore aut deserunt quia et ducimus voluptatem",
      image: cardImage,
    },
    {
      name: "Yoga Session",
      rating: "4.5",
      duration: "30 min",
      coach: "Shein Tsemda",
      description:
        "Lorem ipsum dolor sit amet. Qui enim vitae eos quia inventore aut deserunt quia et ducimus voluptatem",
      image: cardImage,
    },
    {
      name: "Yoga Session",
      rating: "4.5",
      duration: "30 min",
      coach: "Shein Tsemda",
      description:
        "Lorem ipsum dolor sit amet. Qui enim vitae eos quia inventore aut deserunt quia et ducimus voluptatem",
      image: cardImage,
    },
    {
      name: "Yoga Session",
      rating: "4.5",
      duration: "30 min",
      coach: "Shein Tsemda",
      description:
        "Lorem ipsum dolor sit amet. Qui enim vitae eos quia inventore aut deserunt quia et ducimus voluptatem",
      image: cardImage,
    },
    {
      name: "Yoga Session",
      rating: "4.5",
      duration: "30 min",
      coach: "Shein Tsemda",
      description:
        "Lorem ipsum dolor sit amet. Qui enim vitae eos quia inventore aut deserunt quia et ducimus voluptatem",
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
          Our <span style={{ color: "#49AD50" }}>Popular </span>Classes
        </Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: "center", marginTop: "1rem", width: "30rem" }}
        >
          Lorem ipsum dolor sit amet. Qui enim vitae eos quia inventore aut
          deserunt quia et ducimus voluptatem.
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

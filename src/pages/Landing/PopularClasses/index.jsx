import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button, Fab, Grid, Typography } from "@mui/material";
import React, { useRef } from "react";
import {
  ResponsiveContainer,
  StackedCarousel,
} from "react-stacked-center-carousel";
import cardImage from "../../../assets/CARDIMAGEPOPULARCALASSES.svg";
import Basil from "../../../assets/basil.png";
// import cardImage from "../../../assets/CARDIMAGEPOPULARCALASSES.svg";
import PopularClassesCard from "./PopularClassesCard";
import "./styles.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import { useState } from "react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FreeTrialDialog from "../../../components/FreeTrialDialog";

const PopularClasses = () => {
  const ref = useRef();

  const data = [
    {
      name: "Yoga Session",
      rating: "",
      duration: "45 min",
      coach: "",
      description:
        "A holistic approach on training & benefiting one's Flexibility, Body toning, stress free mental state, stability, improved sleep etc.",
      image: "https://fitbasix-dev.s3.me-south-1.amazonaws.com/628e51a2d4ecaf72757524f1/certificates/6ab839dd-58fc-4301-b6da-0200af55c9e9bidushi-min.png",
    },
    {
      name: "Diet Consultation",
      rating: "",
      duration: "45 min",
      coach: "",
      description:
        "Tasty and Nutritious Meal planning enhancing one's health and performance while assisting with body shaping in accordance to the goal.",
      image: "https://fitbasix-dev.s3.me-south-1.amazonaws.com/63c0ef52dbb9f9237a278b41/certificates/29aef114-7538-475a-8958-6da8fb58140cshivam.png",
    },
    {
      name: "Fitness Training",
      rating: "",
      duration: "45 min",
      coach: "",
      description:
        "An energetic Virtual Session with a systematic fitness regime that assists in burning body fats and strengthening muscularity.",
      image: "https://fitbasix-dev.s3.me-south-1.amazonaws.com/628e51a2d4ecaf72757524f1/certificates/fbe17627-d1f1-4b03-be38-13c92718393broshan-min.png",
    },
    {
      name: "Live Stream",
      rating: "",
      duration: "45 min",
      coach: "",
      description:
        "A Super Active Group Session with a communal motivation to rejuvenate ones Fitness lifestyle that helps with body Toning.",
      image: "https://fitbasix-dev.s3.me-south-1.amazonaws.com/628e51a2d4ecaf72757524f1/certificates/f51a0ba7-0136-4a9b-b0a0-d3639bf65a08basil-min.png",
    },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div className="popularClassesContainer">
      <div className="popularClassesContainer--Top">
        <Typography
          variant="h4"
          sx={{ fontWeight: "700", textAlign: "center" }}
        >
          Train With <span style={{ color: "#49AD50", fontWeight:"bolder", fontStyle:"italic" }}>FIT</span><span style={{fontWeight:"bolder", fontStyle:"italic"}} >basix</span>
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
                  max-height={500}
                />
              </>
            );
          }}
        />
        <div className="FabButton--Container">
          <Fab
            size="small"
            color="secondary"
            aria-label="prev"
            sx={{ backgroundColor: "#C3FFC8" }}
            onClick={() => {
              ref.current?.goBack();
            }}
          >
     
            <ArrowBackIosNewIcon sx={{ color: "#022405" }} />
          </Fab>
          <Fab
            size="small"
            color="secondary"
            sx={{ backgroundColor: "#C3FFC8" }}
            aria-label="next"
            onClick={() => {
              ref.current?.goNext(6);
            }}
          >
    
            <ArrowForwardIosIcon sx={{ color: "#022405" }} />
          </Fab>
        </div>
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
       
              <PopularClassesCard data={data} dataIndex={1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SwiperSlide">
     
              <PopularClassesCard data={data} dataIndex={2} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SwiperSlide">
   
              <PopularClassesCard data={data} dataIndex={3} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <Grid container>
        <Grid
          item
          xs={12}
          md={12}
          sx={{ textAlign: "center", marginBottom: "1rem", marginTop: "2rem" }}
        >
          <Button
            sx={{
              backgroundColor: "#49AD50",
              color: "#fff",
              textAlign: "center",
            
            }}
            className="getTrails-btn-pc-mobile"
            onClick={() => setOpen(true)}
          >

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

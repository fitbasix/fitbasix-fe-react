import React, { useRef } from "react";
import "./styles.css";
import { Button, Typography } from "@mui/material";
import PopularClassesCard from "./PopularClassesCard";
import cardImage from "../../../assets/popularClassCardIMG.svg";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

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
  ];
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
            let currentVisibleSlide = 3;
            if (parentWidth <= 1280) currentVisibleSlide = 3;
            if (parentWidth <= 640) currentVisibleSlide = 1;
            return (
              <>
                {" "}
                <StackedCarousel
                  ref={carouselRef}
                  slideComponent={PopularClassesCard}
                  slideWidth={400}
                  carouselWidth={parentWidth}
                  data={data}
                  currentVisibleSlide={currentVisibleSlide}
                  maxVisibleSlide={3}
                  useGrabCursor
                  fadeDistance={0.1}
                  height={500}
                />{" "}
                <Button
                  endIcon={<ArrowCircleLeftIcon />}
                  style={{
                    position: "absolute",
                    top: "40%",
                    left: `${window.innerWidth < 640 ? "-5%" : 0}`,
                    zIndex: 10,
                  }}
                  onClick={() => {
                    ref.current?.goBack();
                  }}
                >
                  Prev
                </Button>
                <Button
                  endIcon={<ArrowCircleRightIcon />}
                  style={{
                    position: "absolute",
                    top: "40%",
                    right: `${window.innerWidth < 640 ? "-5%" : 10}`,
                    zIndex: 10,
                  }}
                  onClick={() => {
                    ref.current?.goNext(6);
                  }}
                >
                  next
                </Button>
              </>
            );
          }}
        />
      </div>
    </div>
  );
};

export default PopularClasses;

import React, { useRef } from "react";
import "./styles.css";
import { Button } from "@mui/material";
import Mobole1 from "../../../assets/MB1.svg";
import Mobole2 from "../../../assets/MB2.svg";
import Mobole3 from "../../../assets/MB3.svg";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
import LiveClassCard from "./LiveClassCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper";

const LiveClass = () => {
  const ref = useRef();

  const data = [
    {
      image: Mobole1,
    },
    {
      image: Mobole2,
    },
    {
      image: Mobole3,
    },
    {
      image: Mobole1,
    },
    {
      image: Mobole2,
    },
    {
      image: Mobole3,
    },
  ];
  return (
    <div className="liveClassContainer">
     
      <div className="MobileCarousel--Container">
        <ResponsiveContainer
          carouselRef={ref}
          render={(parentWidth, carouselRef) => {
            return (
              <>
                {" "}
                <StackedCarousel
                  ref={carouselRef}
                  slideComponent={LiveClassCard}
                  slideWidth={250}
                  carouselWidth={parentWidth}
                  data={data}
                  currentVisibleSlide={3}
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
      <div className="MobileCarousel--ContainerMobile">
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
              <LiveClassCard data={data} dataIndex={0} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SwiperSlide">
              <LiveClassCard data={data} dataIndex={1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SwiperSlide">
              <LiveClassCard data={data} dataIndex={2} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SwiperSlide">
              <LiveClassCard data={data} dataIndex={0} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SwiperSlide">
              <LiveClassCard data={data} dataIndex={1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SwiperSlide">
              <LiveClassCard data={data} dataIndex={2} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#FC6161", fontWeight: "400" }}
      >
        JOIN OUR LIVE CLASSES NOW!
      </Button>
    </div>
  );
};

export default LiveClass;

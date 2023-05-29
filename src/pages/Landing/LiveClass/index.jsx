import { Button } from "@mui/material";
import React, { useRef, useState } from "react";
import {
  ResponsiveContainer,
  StackedCarousel,
} from "react-stacked-center-carousel";
import Mobole1 from "../../../assets/MB1.svg";
import Mobole2 from "../../../assets/MB2.svg";
import Mobole3 from "../../../assets/MB3.svg";
import LiveClassCard from "./LiveClassCard";
import "./styles.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import LiveClassDialog from "../../../components/LiveClassDialog";

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
  const [open, setOpen] = useState(false);

  return (
    <div className="liveClassContainer" id="liveClassId">
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
        onClick={() => setOpen(true)}
      >
        JOIN OUR LIVE CLASSES NOW!
      </Button>
      <LiveClassDialog
        setOpen={setOpen}
        open={open}
        title={"Join our LIVE CLASS!"}
      />
    </div>
  );
};

export default LiveClass;

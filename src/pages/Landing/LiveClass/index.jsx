import React, { useRef, useState } from "react";
import "./styles.css";
import { Button, Grid, MenuItem, Select, TextField } from "@mui/material";
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
import ReusableDialog from "../../../components/ReusableDialog";

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

  const [workout, setWorkout] = useState("");

  const handleChange = (event) => {
    setWorkout(event.target.value);
  };

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
        onClick={() => setOpen(true)}
      >
        JOIN OUR LIVE CLASSES NOW!
      </Button>
      <ReusableDialog
        setOpen={setOpen}
        open={open}
        title={"Join Our LIVE CLASS!"}
      >
        <Grid container>
          <Grid item md={12}>
            <Grid container spacing={3}>
              <Grid item md={12}>
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  style={{ width: "80%", borderRadius: "40px" }}
                />
              </Grid>

              <Grid item md={12}>
                <TextField
                  id="outlined-basic"
                  label="Mobile no."
                  variant="outlined"
                  style={{ width: "80%", borderRadius: "40px" }}
                />
              </Grid>

              <Grid item md={12}>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  type="email"
                  style={{ width: "80%", borderRadius: "40px" }}
                  variant="outlined"
                />
              </Grid>

              <Grid item md={12}>
                <Select
                  value={workout}
                  // label="Type of Workout"
                  onChange={handleChange}
                  style={{ width: "80%", color: "#111" }}
                >
                  <MenuItem value={10}>Workout Type</MenuItem>

                  <MenuItem value={20}>Workout Type</MenuItem>

                  <MenuItem value={30}>Workout Type</MenuItem>
                </Select>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ReusableDialog>
    </div>
  );
};

export default LiveClass;

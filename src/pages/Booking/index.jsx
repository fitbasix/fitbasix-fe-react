import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PhoneIphoneRoundedIcon from "@mui/icons-material/PhoneIphoneRounded";
import {
  Button,
  Container,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import {
  AppStoreButton,
  ButtonsContainer,
  GooglePlayButton,
} from "react-mobile-app-button";
import Mobiles from "../../assets/Mobiles.png";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { postDialog } from "../../api/services";
import { useState } from "react";

const Booking = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  //Search Params String
  const [searchParams, setSearchParams] = useState(window.location.search);
  const onSubmit = async (data) => {
    data.formType = "FreeTrial";

    const response = await postDialog(data, searchParams);

    if (response?.resStr == "success") {
      navigate("/thankyou");
    } else {
      navigate("/error");
    }
  };

  return (
    <form id="getStarted" onSubmit={handleSubmit(onSubmit)}>
      <div className="BookContainer">
        <Grid container className="gridContainer">
          <Grid item xs={12} sm={8} md={8}>
            <Container className="booking_container">
              <Typography className="form_heading">
                BOOK YOUR FIRST SESSION
              </Typography>
              <Grid container spacing={2}>
                <Grid item sm={6} xs={12} md={6}>
                  <TextField
                    id="name"
                    placeholder="First Name"
                    required
                    sx={{
                      border: "1px solid #49AD50",
                      borderRadius: "10px",
                      width: "100%",
                    }}
                    {...register("firstName")}
                  />
                </Grid>
                <Grid item sm={6} xs={12} md={6}>
                  <TextField
                    id="name"
                    placeholder="Last Name"
                    required
                    sx={{
                      border: "1px solid #49AD50",
                      borderRadius: "10px",
                      width: "100%",
                    }}
                    {...register("lastName")}
                  />
                </Grid>
                <Grid item sm={6} xs={12} md={6}>
                  <TextField
                    id="mobileNo"
                    required
                    placeholder="Mobile"
                    sx={{
                      border: "1px solid #49AD50",
                      borderRadius: "10px",
                      width: "100%",
                    }}
                    {...register("number")}
                  />
                </Grid>
                <Grid item sm={6} xs={12} md={6}>
                  <TextField
                    id="email"
                    placeholder="Email id"
                    sx={{
                      border: "1px solid #49AD50",
                      borderRadius: "10px",
                      width: "100%",
                    }}
                    {...register("email")}
                  />
                </Grid>

                <Grid item sm={6} xs={12} md={6}>
                  <Select
                    displayEmpty={true}
                    // className="textFieldMobile"
                    sx={{
                      border: "1px solid #49AD50",
                      borderRadius: "10px",
                      width: "100%",
                    }}
                    {...register("workOutType")}
                  >
                    <MenuItem disabled>Types of plan</MenuItem>
                    <MenuItem value={"Personal"}>Personal</MenuItem>
                    <MenuItem value={"Yoga"}>Yoga</MenuItem>
                    <MenuItem value={"Diet"}>Diet</MenuItem>
                  </Select>
                </Grid>
                <Grid item sm={6} xs={12} md={6}>
                  <Select
                    // label="Preferred Time Slot for Callback"
                    displayEmpty={true}
                    sx={{
                      border: "1px solid #49AD50",
                      borderRadius: "10px",
                      width: "100%",
                    }}
                    {...register("timeSlot")}
                  >
                    <MenuItem disabled>
                      Preferred Time Slot for Callback
                    </MenuItem>
                    <MenuItem value={"Morning"}>Morning</MenuItem>
                    <MenuItem value={"Afternoon"}>Afternoon</MenuItem>
                    <MenuItem value={"Evening"}>Evening</MenuItem>
                    <MenuItem value={"Night"}>Night</MenuItem>
                  </Select>
                </Grid>
                <Grid item sm={12} xs={12} md={12}>
                  <Button
                    type="submit"
                    className="bookSubmit"
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </Grid>
          {/* <div className="TextFieldContainer">
            <TextField
              id="name"
              placeholder="Enter Name"
              required
              sx={{
                background: "rgba(255, 255, 255, 0.32)",
                borderRadius: "10px",

                width: "100%",
              }}
              {...register("name")}
            />
            <TextField
              id="email"
              placeholder="Email id"
              sx={{
                background: "rgba(255, 255, 255, 0.32)",
                borderRadius: "10px",
                marginTop: "1rem",
                width: "100%",
              }}
              {...register("email")}
            />
            <TextField
              id="mobileNo"
              required
              placeholder="Enter Mobile no."
              sx={{
                background: "rgba(255, 255, 255, 0.32)",
                borderRadius: "10px",
                marginTop: "1rem",
                width: "100%",
              }}
              {...register("number")}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#49AD50",
                width: "100%",
                borderRadius: "10px",
                marginTop: "1rem",
              }}
            >
              Get a FREE TRIAL!
            </Button>
          </div> */}
        </Grid>
      </div>
    </form>
  );
};

export default Booking;

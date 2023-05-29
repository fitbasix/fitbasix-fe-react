import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PhoneIphoneRoundedIcon from "@mui/icons-material/PhoneIphoneRounded";
import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import {
  AppStoreButton,
  ButtonsContainer,
  GooglePlayButton,
} from "react-mobile-app-button";
import Mobiles from "../../../assets/Mobiles.png";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { postDialog } from "../../../api/services";

const GetStarted = () => {
  const { register, handleSubmit } = useForm();

  const APKUrl =
    "https://play.google.com/store/apps/details?id=com.fitbasixco.fitbasix&hl=en&gl=US&pli=1";
  const iOSUrl = "https://apps.apple.com/tt/app/fitbasix/id1618003884";

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    console.log("data", data);
    console.log("FORM SUBMIT", data);
    data.formType = "FreeTrial";
    const response = await postDialog(data);

    if (response?.resStr == "success") {
      console.log("SUCCESSFULL");
      navigate("/thankyou");
    } else {
      navigate("/error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="GetStarted--Container">
        <Grid container>
          <Grid item md={6} xs={12} className="GridLeft--Conatiner">
            <Typography sx={{ fontWeight: "600", fontSize: "25px" }}>
              Get Started with{" "}
              <span style={{ color: "#49AD50" }}>Fitbasix</span>
            </Typography>

            <div className="TextFieldContainer">
              <TextField
                placeholder="Enter Name"
                InputProps={{
                  startAdornment: <PersonOutlineOutlinedIcon />,
                }}
                sx={{
                  background: "rgba(255, 255, 255, 0.32)",
                  borderRadius: "10px",

                  width: "100%",
                }}
                {...register("name")}
              />
              <TextField
                placeholder="Email id"
                InputProps={{
                  startAdornment: <MailOutlinedIcon />,
                }}
                sx={{
                  background: "rgba(255, 255, 255, 0.32)",
                  borderRadius: "10px",
                  marginTop: "1rem",
                  width: "100%",
                }}
                {...register("email")}
              />
              <TextField
                placeholder="Enter Mobile no."
                InputProps={{
                  startAdornment: <PhoneIphoneRoundedIcon />,
                }}
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
            </div>
          </Grid>
          <Grid item md={6}>
            <Grid container>
              <Grid item md={6} xs={12} className="GridImage--Conatiner">
                {" "}
                <img src={Mobiles} className="MobileImage" />
              </Grid>
              <Grid item md={6} xs={12}>
                <Grid container>
                  <Grid item md={12} xs={12} className="GridButtons--Conatiner">
                    {" "}
                    <ButtonsContainer direction="column">
                      <AppStoreButton url={iOSUrl} theme={"dark"} />
                      <GooglePlayButton url={APKUrl} theme={"dark"} />
                    </ButtonsContainer>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </form>
  );
};

export default GetStarted;

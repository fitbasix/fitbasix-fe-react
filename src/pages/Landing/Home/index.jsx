import React from "react";
import "./styles.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { Button, Grid, Typography } from "@mui/material";
import homelogo from "../../../assets/HomepageLogo.svg";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Home = () => {
  return (
    <div className="homeContainer">
      <Grid container spacing={2} >
        <Grid item xs={12} sm={12}>
          <Grid container spacing={2} sx={{padding: "7rem 4rem 2rem 4rem"}}>
            <Grid item xs={12} sm={12} >
              <Typography variant="h3">
                THE FUTURE OF <br />
                FITNESS
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography variant="h5">
                Elevate your fitness <br /> journey with a personal
                <br /> touch!
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} className="knowMore-btn">
              <Button variant="contained">Know More</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} className="homelogo-style">
          <img src={homelogo} alt="" />
        </Grid>
        <Grid item xs={12} sm={12} className="explore-btn">
        <Typography variant="subtitle1">
            Explore
            <br />
            <KeyboardArrowDownIcon />
          </Typography>
          
        </Grid>
        <Grid item xs={12} sm={12}>
          <FloatingWhatsApp darkMode={true} buttonClassName={"btn-whatsapp"} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;

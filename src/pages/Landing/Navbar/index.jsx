import { Button, Grid, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import {
  AppStoreButton,
  ButtonsContainer,
  GooglePlayButton,
} from "react-mobile-app-button";
import Fitba6Logo from "../../../assets/Fitba6Logo.svg";
import ReusableDialog from "../../../components/ReusableDialog";
import "./styles.css";

const Navbar = () => {
  const APKUrl = "https://play.google.com/store/apps/details?id=com.fitbasixco.fitbasix&hl=en&gl=US&pli=1";
  const iOSUrl = "https://apps.apple.com/tt/app/fitbasix/id1618003884";

  const [open, setOpen] = useState(false);

  const [workout, setWorkout] = useState("");

  const handleChange = (event) => {
    setWorkout(event.target.value);
  };

  return (
    <div className="rootNav">
      <Grid container spacing={2} className="gridWrapper-nav">
        <Grid item xs={12} sm={6} className="logo-nav">
          <img src={Fitba6Logo} alt="" />
        </Grid>
        <Grid item xs={12} sm={6} className="playstore-btn">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
              <ButtonsContainer>
                <AppStoreButton
                  url={iOSUrl}
                  theme={"dark"}
                  className={"appstore-style"}
                />
                <GooglePlayButton
                  url={APKUrl}
                  theme={"dark"}
                  className={"appstore-style"}
                />
              </ButtonsContainer>
            </Grid>
            <Grid item xs={12} sm={4} className="call-btn">
              <Button variant="contained" onClick={() => setOpen(true)}>
                Call us Now!
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <ReusableDialog setOpen={setOpen} open={open} title={"Get a Call Back!"}>
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
                  <MenuItem value={10}>Ten</MenuItem>

                  <MenuItem value={20}>Twenty</MenuItem>

                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Grid>

              <Grid item md={12}>
                <TextField
                  fullWidth
                  sx={{ backgroundColor: "#fff" }}
                  name="time"
                  type="time"
                  style={{ width: "80%", borderRadius: "40px" }}
              
                  renderInput={(params) => <TextField  placeholder="override does nothing" {...params} />}
                  InputProps={{ min: new Date().toISOString().slice(0, 16) }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ReusableDialog>
    </div>
  );
};

export default Navbar;

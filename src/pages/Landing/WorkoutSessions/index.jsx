import React from "react";
import "./styles.css";
import { Grid, Typography } from "@mui/material";

import image1 from "../../../assets/WSImage1.svg";
import image2 from "../../../assets/WSImage2.svg";
import image3 from "../../../assets/WSImage3.svg";
import image4 from "../../../assets/WSImage4.svg";
import image5 from "../../../assets/WSImage5.svg";

const WorkoutSessions = () => {
  return (
    <div className="WorkoutSession--Container">
      <Typography variant="h4">Workout Sessions</Typography>
      <div className="WorkoutSession--Grid">
        <Grid container>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={4}>
                <Grid container>
                  <Grid item xs={12}>
                    <img src={image1} style={{ width: "260px" }} />
                  </Grid>
                  <Grid item xs={12}>
                    <img src={image2} style={{ width: "260px" }} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4}>
                <img src={image3} style={{ width: "250px" }} />
              </Grid>
              <Grid item xs={4}>
                {" "}
                <Grid container>
                  <Grid item xs={12}>
                    <img src={image4} style={{ width: "260px" }} />
                  </Grid>
                  <Grid item xs={12}>
                    <img src={image5} style={{ width: "260px" }} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div className="WorkoutSession--GridMobile">
        <Grid container>
          <Grid item xs={6}>
            <img src={image1} style={{ width: "200px" }} />
          </Grid>
          <Grid item xs={6}>
            <img src={image1} style={{ width: "200px" }} />
          </Grid>
          <Grid item xs={6}>
            <img src={image1} style={{ width: "200px" }} />
          </Grid>
          <Grid item xs={6}>
            <img src={image1} style={{ width: "200px" }} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default WorkoutSessions;

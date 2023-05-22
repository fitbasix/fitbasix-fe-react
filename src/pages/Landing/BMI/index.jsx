import React from "react";
import "./styles.css";
import { Grid, TextField, Typography } from "@mui/material";
import { Button, Input } from "@mui/material";
const BMI = () => {
  return (
    <div className="BMIContainer">
      <Grid
        container
        spacing={5}
        className="gridContainer"
        sx={{ marginTop: "1rem" }}
      >
        <Grid item xs={10}>
          <Grid container sx={{ paddingLeft: "2rem" }}>
            <Grid item xs={12}>
              <Typography variant="h4">KNOW YOUR BMI</Typography>
            </Grid>
            <Grid item xs={12} sx={{ marginTop: "2rem" }}>
              <Grid container>
                <Grid item xs={3} sx={{ paddingRight: "1rem" }}>
                  {" "}
                  <TextField
                    fullWidth
                    placeholder="Gender"
                    id="gender"
                    className="textField"
                  />
                </Grid>
                <Grid item xs={3} sx={{ paddingRight: "1rem" }}>
                  {" "}
                  <TextField
                    fullWidth
                    placeholder="Weight in kgs"
                    id="weight"
                    className="textField"
                  />
                </Grid>
                <Grid item xs={3} sx={{ paddingRight: "1rem" }}>
                  {" "}
                  <TextField
                    fullWidth
                    placeholder="Height in cms"
                    id="height"
                    className="textField"
                  />
                </Grid>
                <Grid item xs={3}>
                  {" "}
                  <Button
                    variant="contained"
                    fullWidth
                    className="calcButton"
                    sx={{
                      backgroundColor: "#0D1F2D",
                      borderRadius: "10px",
                      textTransform: "none",
                    }}
                  >
                    Calculate
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} sx={{ textAlign: "center", marginTop: "4rem" }}>
          <Typography variant="h4">BMI</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default BMI;

import React from "react";
import "./styles.css";
import { Grid, TextField, Typography } from "@mui/material";
import { Button, Input } from "@mui/material";
const BMI = () => {
  return (
    <div className="BMIContainer">
      <Grid container spacing={5} className="gridContainer">
        <Grid item xs={12}>
          <Typography variant="h3">KNOW YOUR BMI</Typography>
        </Grid>
        <Grid item xs={2}>
          <TextField
            fullWidth
            placeholder="Gender"
            id="gender"
            className="textField"
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            fullWidth
            placeholder="Weight in kgs"
            id="weight"
            className="textField"
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            fullWidth
            placeholder="Height in cms"
            id="height"
            className="textField"
          />
        </Grid>
        <Grid item xs={2}>
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
        <Grid item xs={2}>
          <Typography variant="h4">BMI</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default BMI;

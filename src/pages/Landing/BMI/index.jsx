import React, { useState } from "react";
import "./styles.css";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Button, Input } from "@mui/material";
import { useForm } from "react-hook-form";
import { postBMI } from "../../../api/services";

const BMI = () => {
  const { register, handleSubmit } = useForm();
  const [BMIResult, setBMIResult] = useState("");

  const onSubmit = async (data) => {
    console.log(data);
    let { response } = await postBMI(data);
    console.log("RESPONSE FULL", response);
    console.log("RESPONSE FO BMI", response?.data?.bmr);
    if (response?.data?.bmr) {
      setBMIResult(response?.data?.bmr);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="BMIContainer">
        <Grid
          container
          spacing={4}
          className="gridContainer"
          sx={{ marginTop: "1rem", paddingLeft: "2rem" }}
        >
          <Grid item md={12} xs={12}>
            <Typography variant="h4">KNOW YOUR BMI</Typography>
          </Grid>
          <Grid item md={12} sx={12}>
            <Grid container>
              <Grid item md={10} xs={12}>
                <Grid container spacing={5}>
                  <Grid
                    item
                    md={2}
                    xs={12}
                    sx={{ paddingRight: "1rem", marginTop: "0.5rem" }}
                  >
                    <Select
                      label="Gender"
                      displayEmpty={true}
                      style={{
                        width: "100%",
                        color: "#111",
                        backgroundColor: "#fff",
                      }}
                      {...register("gender")}
                    >
                      <MenuItem disabled>Gender</MenuItem>
                      <MenuItem value={1}>Male</MenuItem>
                      <MenuItem value={0}>Female</MenuItem>
                    </Select>
                  </Grid>
                  <Grid
                    item
                    md={2}
                    xs={12}
                    sx={{ paddingRight: "1rem", marginTop: "0.5rem" }}
                  >
                    <TextField
                      fullWidth
                      placeholder="Weight in kgs"
                      id="weight"
                      className="textField"
                      {...register("weight")}
                    />
                  </Grid>

                  <Grid
                    item
                    md={2}
                    xs={12}
                    sx={{ paddingRight: "1rem", marginTop: "0.5rem" }}
                  >
                    {" "}
                    <TextField
                      fullWidth
                      placeholder="Height in cms"
                      id="height"
                      className="textField"
                      {...register("height")}
                    />
                  </Grid>
                  <Grid
                    item
                    md={2}
                    xs={12}
                    sx={{ paddingRight: "1rem", marginTop: "0.5rem" }}
                  >
                    {" "}
                    <TextField
                      fullWidth
                      placeholder="Age"
                      id="age"
                      className="textField"
                      {...register("age")}
                    />
                  </Grid>
                  <Grid
                    item
                    md={3}
                    xs={12}
                    sx={{ paddingRight: "1rem", marginTop: "0.5rem" }}
                  >
                    {" "}
                    <Button
                      variant="contained"
                      fullWidth
                      type="submit"
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
              <Grid item md={2} xs={12} sx={{ marginTop: "0.5rem" }}>
                {BMIResult && (
                  <Typography sx={{ fontSize: "22px", fontWeight: 600 }}>
                    BMI : {BMIResult}
                  </Typography>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </form>
  );
};

export default BMI;

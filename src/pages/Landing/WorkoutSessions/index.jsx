import { Box, Button, Card, CardMedia, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import "./styles.css";

import image1 from "../../../assets/WSImage1.svg";
import WsImage1 from "../../../assets/workout sessions/WSImage1.svg";
import WsImage2 from "../../../assets/workout sessions/WSImage2.svg";
import WsImage3 from "../../../assets/workout sessions/WSImage3.svg";
import WsImage4 from "../../../assets/workout sessions/WSImage4.svg";
import FreeTrialDialog from "../../../components/FreeTrialDialog";

const WorkoutSessions = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="WorkoutSession--Container">
      <Typography variant="h3">Workout Sessions</Typography>
      <div className="WorkoutSession--Grid">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={3}>
            <Card sx={{ maxWidth: 600 }}>
              <Box sx={{ position: "relative" }}>
                <CardMedia component="img" height="200" image={WsImage1} />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",

                    color: "white",
                    padding: "10px",
                  }}
                >
                  <Typography variant="h6">
                    STRENGTH & <br />
                    CONDITIONING
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card sx={{ maxWidth: 600 }}>
              <Box sx={{ position: "relative" }}>
                <CardMedia component="img" height="200" image={WsImage2} />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",

                    color: "white",
                    padding: "10px",
                  }}
                >
                  <Typography variant="h6">CARDIO</Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card sx={{ maxWidth: 600 }}>
              <Box sx={{ position: "relative" }}>
                <CardMedia component="img" height="200" image={WsImage3} />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",

                    color: "white",
                    padding: "10px",
                  }}
                >
                  <Typography variant="h6">YOGA</Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card sx={{ maxWidth: 600 }}>
              <Box sx={{ position: "relative" }}>
                <CardMedia component="img" height="200" image={WsImage4} />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",

                    color: "white",
                    padding: "10px",
                  }}
                >
                  <Typography variant="h6">YOGA</Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              textAlign: "center",
              marginBottom: "2rem",
              marginTop: "3rem",
            }}
          >
            <Button
              sx={{
                backgroundColor: "#49AD50",
                color: "#fff",
                textAlign: "center",
              }}
              onClick={() => setOpen(true)}
            >
              Get a FREE TRIAL
            </Button>
          </Grid>
        </Grid>
      </div>
      <div className="WorkoutSession--GridMobile">
        <Grid container>
          <Grid item xs={6}>
            <img src={image1} alt="" style={{ width: "200px" }} />
          </Grid>
          <Grid item xs={6}>
            <img src={image1} alt="" style={{ width: "200px" }} />
          </Grid>
          <Grid item xs={6}>
            <img src={image1} alt="" style={{ width: "200px" }} />
          </Grid>
          <Grid item xs={6}>
            <img src={image1} alt="" style={{ width: "200px" }} />
          </Grid>
        </Grid>
      </div>

      <FreeTrialDialog
        setOpen={setOpen}
        open={open}
        title={"Get a FREE TRIAL!"}
      />
    </div>
  );
};

export default WorkoutSessions;

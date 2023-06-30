import { Box, Button, Card, CardMedia, Grid, Typography,Fab } from "@mui/material";
import React, { useState } from "react";
import "./styles.css";

import image1 from "../../../assets/WSImage1.svg";
import WsImage1 from "../../../assets/workout sessions/WSImage1.svg";
import WsImage2 from "../../../assets/workout sessions/WSImage2.svg";
import WsImage3 from "../../../assets/workout sessions/WSImage3.svg";
import WsImage4 from "../../../assets/workout sessions/WSImage4.svg";
import FreeTrialDialog from "../../../components/FreeTrialDialog";

const NewWorkoutSessions = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="New--WorkoutSession--Container">
      <Typography className="workOutHeading">WORKOUT</Typography>
      <Typography className="workOutSubHeading">Sessions</Typography>
      <div className="NewWorkoutSession--Grid">
        {/* item */}
        <div className="workout_session_item_div"
          style={{
            backgroundColor: "#fff",
            padding: "0.5rem 0.5rem 1rem 0.5rem",
            borderRadius: "0.5rem",
          }}
        >
          <div>
            <img src={WsImage1} className="workout_session_item_div"/>
          </div>
          <Typography className="card_head">
            {" "}
            STRENGTH & <br />
            CONDITIONING
          </Typography>
        </div>

        {/* item */}
        <div className="workout_session_item_div"
          style={{
            backgroundColor: "#fff",
            padding: "0.5rem 0.5rem 1rem 0.5rem",
            borderRadius: "0.5rem",
          }}
        >
          <div>
            <img src={WsImage2} className="workout_session_item_div"/>
          </div>
          <Typography className="card_head">Cardio</Typography>
        </div>

        {/* item */}
        <div className="workout_session_item_div"
          style={{
            backgroundColor: "#fff",
            padding: "0.5rem 0.5rem 1rem 0.5rem",
            borderRadius: "0.5rem",
          }}
        >
          <div>
            <img src={WsImage3} className="workout_session_item_div"/>
          </div>
          <Typography className="card_head">YOGA</Typography>
        </div>

        {/* item */}
        <div className="workout_session_item_div"
          style={{
            backgroundColor: "#fff",
            padding: "0.5rem 0.5rem 1rem 0.5rem",
            borderRadius: "0.5rem",
            
          }}
        >
          <div>
            <img src={WsImage4} className="workout_session_item_div"/>
          </div>
          <Typography className="card_head">HIIT</Typography>
        </div>

        {/* <Grid container spacing={2}>
          <Grid
            item
            xs={6}
            sm={3}
            sx={{
              backgroundColor: "#fff",
              padding: "0.5rem 0.5rem 2rem 0.5rem",
              borderRadius: "0.5rem",
            }}
          >
            <Card sx={{ maxWidth: 200 }}>
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
          <Grid item xs={6} sm={3}>
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
          <Grid item xs={6} sm={3}>
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
          <Grid item xs={6} sm={3}>
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
        </Grid> */}
      </div>
    </div>
  );
};

export default NewWorkoutSessions;

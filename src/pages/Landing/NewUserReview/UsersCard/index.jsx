import { Grid, Typography } from "@mui/material";
import React from "react";
import "./styles.css";

const NewUsersCard = ({ content, name, service, logo }) => {
  return (
    <div className="UsersCard--Container">
      <Grid container sx={{ position: "relative", padding: "3rem" }}>
        <div style={{ position: "absolute", top: "-1rem", left: "-1rem" }}>
          <img src={logo} alt="" style={{ width: "5rem" }} />
        </div>

        <Grid item xs={12} md={12}>
          <Grid container sx={{ paddingLeft: "0.5rem" }}>
            <Grid item xs={12} md={12} className="userCardStyle">
              <Typography sx={{ color: "#FFFFFF" }}>{content}</Typography>
            </Grid>
            <Grid item xs={12} md={12} sx={{ marginTop: "1rem" }}>
              <div>
                <Typography sx={{ color: "black" }}>{name}</Typography>
                <Typography sx={{ fontSize: "12px" }}> {service}</Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default NewUsersCard;

import { Grid, Typography } from "@mui/material";
import React from "react";
import "./styles.css";

const UsersCard = ({ content, name, service, logo }) => {
  return (
    <div className="UsersCard--Container">
      <Grid container>
        <Grid item xs={3} md={3}>
          <img src={logo} alt="" style={{ width: "65px" }} />
        </Grid>
        <Grid item xs={9} md={9}>
          <Grid container sx={{ paddingLeft: "0.5rem" }}>
            <Grid item xs={12} md={12} className="userCardStyle">
              <Typography sx={{ color: "#FFFFFF" }}>{content}</Typography>
            </Grid>
            <Grid item xs={12} md={12} sx={{ marginTop: "1rem" }}>
              <div>
                <Typography sx={{ color: "#49AD50" }}>{name}</Typography>
                <Typography sx={{ fontSize: "12px" }}> {service}</Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default UsersCard;

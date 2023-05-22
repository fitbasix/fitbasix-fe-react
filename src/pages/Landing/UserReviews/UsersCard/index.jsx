import React from "react";
import "./styles.css";
import { Typography } from "@mui/material";

const UsersCard = ({ content, name, service }) => {
  return (
    <div className="UsersCard--Container">
      <div>
        <Typography sx={{ fontSize: "14px" }}>{content}</Typography>
      </div>

      <div>
        <Typography sx={{ color: "#49AD50" }}>{name}</Typography>
        <Typography sx={{ fontSize: "12px" }}> {service}</Typography>
      </div>
    </div>
  );
};

export default UsersCard;

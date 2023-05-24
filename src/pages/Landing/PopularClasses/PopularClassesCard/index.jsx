import React from "react";
import "./styles.css";
import { Button, Typography } from "@mui/material";
import star from "../../../../assets/star.svg";
const PopularClassesCard = ({ data, dataIndex }) => {
  console.log("DATA IN CARD:", data, "INDEX: ", dataIndex);

  return (
    <div className="PopularClassesCard--Container">
      <div className="PopularClassesCard--Left">
        <div>
          <Typography variant="h6">{data[dataIndex].name}</Typography>
          <div className="ratingContainer">
            <img src={star} style={{ width: "20px" }} />
            <Typography variant="body1" sx={{ marginLeft: "0.5rem" }}>
              {data[dataIndex].rating}
            </Typography>
          </div>
        </div>

        <div>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#49AD50",
              width: "10rem",
              padding: "0.5rem",
              height: "2rem",
              borderRadius: "10px",
              opacity: "0.8",
            }}
          >
            Duration - {data[dataIndex].duration}
          </Button>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.2rem",
              marginTop: "1rem",
              width: "25rem",
            }}
          >
            Coach: {data[dataIndex].coach}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "0.8rem",
              width: "12rem",
              marginBottom: "1rem",
            }}
          >
            {data[dataIndex].description}
          </Typography>
        </div>
      </div>
      <div className="PopularClassesCard--Right">
        <img src={data[dataIndex].image} />
      </div>
    </div>
  );
};

export default PopularClassesCard;

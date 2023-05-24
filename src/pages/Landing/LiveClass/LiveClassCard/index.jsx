import React from "react";
import "./styles.css";

const LiveClassCard = ({ data, dataIndex }) => {
  return (
    <div className="Mobile--Conatiner">
      <img src={data[dataIndex].image} />
    </div>
  );
};

export default LiveClassCard;

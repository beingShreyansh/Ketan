import React from "react";
import './HeadingCard.css'
import moreInfo from "../../../assets/more-info.svg";

const HeadingCard = ({ heading }) => {
  return (
    <div className="heading-card-container">
      <h2>{heading}</h2>
      <div className="more-icon">
        <img src={moreInfo} alt="" />
      </div>
    </div>
  );
};

export default HeadingCard;

import React from "react";
import "./PostCard.css";
import User from "../../users/User";

import message from "../../../assets/message-square-outline.svg";
import heart from "../../../assets/heart.svg";
import attachment from "../../../assets/attach-outline.svg";

const PostCard = ({
  imageUrl,
  heading,
  text,
  users,
  likes,
  comments,
  attchment,
}) => {
  return (
    <div className="post-card-container">
    {Array.isArray(imageUrl) ? (
      <img src={imageUrl[0]} alt="" />
    ) : (
      <img src={imageUrl} alt="" />
    )}
    <h2 className="post-heading">{heading}</h2>
    <p className="post-text">{text}</p>
    <div className="user-reacts">
      <div className="users-group">
        {Array.isArray(users) &&
          users.map((userSrc, index) => <User key={index} src={userSrc} />)}
      </div>
  
      <div className="reactions">
        <span className="reaction-group">
          <img src={message} alt="" />
          {comments}
        </span>
        <span className="reaction-group">
          <img src={heart} alt="" />
          {likes}
        </span>
        <span className="reaction-group">
          <img src={attachment} alt="" />
          {attchment}
        </span>
      </div>
    </div>
  </div>
  
  );
};

export default PostCard;

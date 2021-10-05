import React from "react";
import faker from "faker";

const DefaultComment = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          Annamalai
        </a>
        <div className="metadata">
          <span className="date">Today at 6:00PM</span>
        </div>
        <div className="text">Nice one !</div>
      </div>
    </div>
  );
};

export default DefaultComment;

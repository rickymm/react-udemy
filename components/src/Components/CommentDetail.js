import React from "react";

const CommentDetail = props => {
  return (
    <div className="content">
      <img
        className="right floated mini ui image"
        src={props.avatar}
        alt="Avatar"
      />
      <div className="header">{props.name}</div>
      <div className="meta">{props.company}</div>
      <div className="description">{props.description}</div>
    </div>
  );
};

export default CommentDetail;

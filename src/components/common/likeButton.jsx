import React from "react";

const LikeButton = props => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";
  return (
    <div>
      <div
        className={classes}
        onClick={props.toggleLike}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default LikeButton;

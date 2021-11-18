import React from "react";
import "./Post.css";

const Post = (props) => {
  return (
    <div className="post">
      <p className="title">
        <b>
          <i>{props.title}</i>
        </b>
      </p>
      <p className="body">{props.body}</p>
    </div>
  );
};

export default Post;

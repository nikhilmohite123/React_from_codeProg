import React from "react";
import { Link } from "react-router-dom";

function PostDetail({ id, title }) {
  return (
    <div
      style={{
        margin: "1rem",
        padding: "1rem",
        border: "1px solid black",
      }}
    >
      <p>
        title : <Link to={id.toString()}>{title}</Link>
      </p>
      <p>id :{id}</p>
    </div>
  );
}

export default PostDetail;

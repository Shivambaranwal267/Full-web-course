import React from "react";
import Avatar from "./Avatar";

function card(props) {
  const cardStyle = {
    width: "300px",
    height: "300px",
    margin: "20px",
    boxShadow: "2px 2px 2px gray",
  };

  return (
    <div style={cardStyle}>
      <Avatar image={props.image} name={props.name} />
      <h1>{props.name}</h1>
      <p>{props.email}</p>
    </div>
  );
}

export default card;

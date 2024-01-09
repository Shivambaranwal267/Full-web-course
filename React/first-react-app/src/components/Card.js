import React from "react";
import Avatar from "./Avatar";

function Card(props) {

  const cardStyle = {
    padding: "10px",
    border: "2px solid black",
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


export default Card;
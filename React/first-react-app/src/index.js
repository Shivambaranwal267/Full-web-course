import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from './reportWebVitals';
// import Card from "./components/Card";
// import Avatar from "./components/Avatar";


const root = ReactDOM.createRoot(document.getElementById("root"));

// const name = "Shivam";

// //border-radius: 20px;  --> borderRadius: '20px'

// let headingStyle = {
//   backgroundColor: "green",
//   padding: "20px",
//   border: "10px solid red",
// };

// const sayHi = false;
// let subHeading = "";
// if (sayHi) {
//   subHeading = "Hi";
// } else {
//   subHeading = "Bye";
// }

// const myVar = (
//   <div>
//     <h1 style={headingStyle} className="heading">
//       Hello I am in JSX {name}
//     </h1>
//     <p className="subheading">{sayHi ? "Hi" : "Bye"}</p>
//     <p className="subheading">{subHeading}</p>
//   </div>
// );

// function myClock() {
//   root.render(
//     <div>
//       <p style={{fontSize: "4rem" }}>{new Date().toLocaleTimeString()}</p>
//       <h2>This will not get re-rendered</h2>
//     </div>
//   );
//   setTimeout(myClock, 1000);
// }

// myClock();

// root.render(myVar)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// functional component
// function Card(props) {
//   const cardStyle = {
//     padding: "10px",
//     border: "2px solid black",
//     margin: "20px",
//     boxShadow: "2px 2px 2px gray",
//   };

//   return (
//     <div style={cardStyle}>
//       <Avatar image={props.image} name={props.name} />
//       <h1>{props.name}</h1>
//       <p>{props.email}</p>
//     </div>
//   );
// }

// function Avatar(props) {
//   return <img src={props.image} alt={props.name} />;
// }

// class component

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

// const gridBox = {
//   display: "grid",
//   gridTemplateColumns: "repeat(3, 1fr)",
// };

// root.render(
  // <div style={gridBox}>
  //   <Card
  //     name="Shivam"
  //     email="shivambaranwal267@gmail.com"
  //     image="https://via.placeholder.com/200"
  //   />
  //   <Card
  //     name="Suraj"
  //     email="shivamal267@gmail.com"
  //     image="https://via.placeholder.com/200"
  //   />
  //   <Card
  //     name="Satyam"
  //     email="shivambaranwal@gmail.com"
  //     image="https://via.placeholder.com/200"
  //   />
  //   <Card
  //     name="Chand"
  //     email="abc123@gmail.com"
  //     image="https://via.placeholder.com/200"
  //   />
  //   <Welcome name="Shiva Branwal" />
  //   <Avatar name="Random" image="https:/via.placeholder.com/200" />
  // </div>
// );

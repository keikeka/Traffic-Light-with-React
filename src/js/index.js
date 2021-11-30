//Import REACT
import React from "react";
import ReactDOM from "react-dom";

//Import BOOTSTRAP
import "bootstrap";

//Styles
import "../styles/index.scss";

//Components
import TrafficLight from "./component/TrafficLight.jsx";

//Render application, to verify that the light shines when any of the traffic light colors are clicked
ReactDOM.render(<TrafficLight />, document.querySelector("#app"));

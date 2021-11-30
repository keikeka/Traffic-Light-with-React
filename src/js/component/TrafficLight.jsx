//Import REACT
import React, { useState } from "react";

//An arrow function is declared to develop the actions of the traffic light, using the hook useState and applying an onClick attribute to change the light at the moment of clicking.
const TrafficLight = () => {
	//Define the hooks to be used in the function
	const [lightColor, setLightColor] = useState("red");

	return (
		<div className="container">
			<div className="stick">
				<div className="traffic">
					<div
						onClick={() => setLightColor("red")}
						className={
							"light red " + (lightColor == "red" ? "glow" : "")
						}></div>
					<div
						onClick={() => setLightColor("yellow")}
						className={
							"light yellow " +
							(lightColor == "yellow" ? "glow" : "")
						}></div>
					<div
						onClick={() => setLightColor("green")}
						className={
							"light green " +
							(lightColor == "green" ? "glow" : "")
						}></div>
				</div>
			</div>
		</div>
	);
};

export default TrafficLight;

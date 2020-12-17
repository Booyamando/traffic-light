import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [color, setColor] = useState();
	return (
		<div>
			<div className="stick mx-auto" />
			<div className="traffic mx-auto d-flex flex-column align-items-center justify-content-center">
				<div
					className={
						color === "red"
							? "red light selected mb-2"
							: "red light mb-2"
					}
					onClick={() => setColor("red")}
				/>
				<div
					className={
						color === "yellow"
							? "yellow light selected mb-2"
							: "yellow light mb-2"
					}
					onClick={() => setColor("yellow")}
				/>
				<div
					className={
						color === "green"
							? "green light selected mb-2"
							: "green light mb-2"
					}
					onClick={() => setColor("green")}
				/>
			</div>
		</div>
	);
}

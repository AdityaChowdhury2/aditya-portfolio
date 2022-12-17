import React from "react";
import "./Footer.css";

let backgroundImage = require("../../../assets/Home/shape-bg.png");

export default function Footer() {
	return (
		<div className="footer-container">
			{/* This is the footer containers */}
			<div className="footer-parent">
				<img src={backgroundImage} alt="" />
			</div>
		</div>
	);
}

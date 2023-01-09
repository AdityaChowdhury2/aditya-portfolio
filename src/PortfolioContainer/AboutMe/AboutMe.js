import React from "react";
import Animations from "../../utilities/Animation";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import "./AboutMe.css";

const myImage = require("../../assets/AboutMe/About-me.png");
export default function AboutMe(props) {
	let fadeInScreenHandler = (screen) => {
		if (screen.fadeInScreen !== props.id) return;
		Animations.animations.fadeInScreen(props.id);
	};
	const fadeInSubscription =
		ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

	const SCREEN_CONSTANTS = {
		description:
			"I am seeking for a opportunity in a reputable organization that will allow me to expand my knowledge and skill in the field of computer science,while contributing to symbolic growth of the organization.",
		highlights: {
			bullets: [
				"Full Stack Web development",
				"Interactive Front End as per the design",
				"React development",
				"Building Rest API",
				"Managing Database",
			],
			heading: "Here are few highlights: ",
		},
	};

	const renderHighlights = () => {
		return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
			<div className="highlight" key={i}>
				<div className="highlight-blob"></div>
				<span>{value}</span>
			</div>
		));
	};
	return (
		<div
			className="about-me-container screen-container fade-in"
			id={props.id || ""}
		>
			<div className="about-me-parent">
				<ScreenHeading
					title={"About Me"}
					subHeading={"Why Choose Me"}
				/>
				<div className="about-me-card">
					<div className="about-me-profile">
						<img src={myImage} alt="" />
					</div>
					<div className="about-me-details">
						<span className="about-me-description">
							{SCREEN_CONSTANTS.description}
						</span>
						<div className="about-me-highlights">
							<div className="highlight-heading">
								<span>
									{SCREEN_CONSTANTS.highlights.heading}
								</span>
							</div>
							{renderHighlights()}
						</div>
						<div className="about-me-options">
							<button
								className="btn primary-btn"
								onClick={() =>
									ScrollService.scrollHandler.scrollToHireMe()
								}
							>
								Hire Me
							</button>
							<a
								href="AdityaChowdhuryResume.pdf"
								download="Aditya"
							>
								<button className="btn btn-highlighted">
									Get Resume
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

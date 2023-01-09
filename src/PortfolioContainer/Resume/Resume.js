import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Animations from "../../utilities/Animation";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import "./Resume.css";

export default function Resume(props) {
	const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
	const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

	let fadeInScreenHandler = (screen) => {
		if (screen.fadeInScreen !== props.id) return;
		Animations.animations.fadeInScreen(props.id);
	};

	const fadeInSubscription =
		ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

	const ResumeHeading = (props) => {
		return (
			<div className="resume-heading">
				<div className="resume-main-heading">
					<div className="heading-bullet"></div>
					<span>{props.heading ? props.heading : ""}</span>
					{props.fromDate && props.toDate ? (
						<div className="heading-date">
							{props.fromDate + "-" + props.toDate}
						</div>
					) : (
						<div></div>
					)}
				</div>
				<div className="resume-sub-heading">
					<span>{props.subHeading ? props.subHeading : ""}</span>
				</div>
				<div className="resume-heading-description">
					<span>{props.description ? props.description : ""}</span>
				</div>
			</div>
		);
	};

	const resumeBullets = [
		{
			label: "Education",
			logoSrc: <i className="fa-solid fa-user-graduate"></i>,
		},
		{
			label: "Activity",
			logoSrc: <i className="fa-solid fa-list-check"></i>,
		},
		{
			label: "Programming Skills",
			logoSrc: <i className="fa-solid fa-laptop-code"></i>,
		},
		{
			label: "Projects",
			logoSrc: <i className="fa-solid fa-chart-column"></i>,
		},
	];

	const programmingSkillDetails = [
		{ skill: "C", ratingPercentage: 80 },
		{ skill: "HTML", ratingPercentage: 85 },
		{ skill: "CSS", ratingPercentage: 80 },
		{ skill: "Express JS", ratingPercentage: 80 },
		{ skill: "Node JS", ratingPercentage: 70 },
		{ skill: "React", ratingPercentage: 75 },
		{ skill: "MongoDB", ratingPercentage: 85 },
		{ skill: "GitHub", ratingPercentage: 80 },
		{ skill: "JAVA", ratingPercentage: 75 },
		{ skill: "Kotlin", ratingPercentage: 60 },
	];

	const projectDetails = [
		{
			title: "Personal Portfolio",
			duration: { fromDate: "Dec,2022", toDate: "Jan,2023" },
			description:
				"A personal portfolio website to showcase all my details and projects at one place.",
			subHeading: "Technologies Used: React JS, Bootstrap",
		},
		{
			title: "Personal Portfolio",
			duration: { fromDate: "Dec,2022", toDate: "Jan,2023" },
			description:
				"A personal portfolio website to showcase all my details and projects at one place.",
			subHeading: "Technologies Used: React JS, Bootstrap",
		},
		{
			title: "Personal Portfolio",
			duration: { fromDate: "Dec,2022", toDate: "Jan,2023" },
			description:
				"A personal portfolio website to showcase all my details and projects at one place.",
			subHeading: "Technologies Used: React JS, Bootstrap",
		},
		// {
		// 	title: "Personal Portfolio",
		// 	duration: { formDate: "Dec,2022", toDate: "Jan,2023" },
		// 	description:
		// 		"A personal portfolio website to showcase all my details and projects at one place.",
		// 	subHeading: "Technologies Used: React JS, Bootstrap",
		// },
	];

	const resumeDetails = [
		<div className="resume-screen-container" key="education">
			<ResumeHeading
				heading={"Brainware University, Barasat, West Bengal, India"}
				subHeading={"M.Tech In Computer Science & Engineering"}
				fromDate={"2021"}
				toDate={"present"}
			/>
			<ResumeHeading
				heading={"Brainware University, Barasat, West Bengal, India"}
				subHeading={"B.Tech In Computer Science & Engineering"}
				fromDate={"2017"}
				toDate={"2021"}
			/>
			<ResumeHeading
				heading={"Islamia University College, Chattogram, Bangladesh"}
				subHeading={"12th"}
				fromDate={"2015"}
				toDate={"2017"}
			/>
			<ResumeHeading
				heading={"Chattogram Govt. High School, Chattogram, Bangladesh"}
				subHeading={"10th"}
				fromDate={"2014"}
				toDate={"2015"}
			/>
		</div>,
		<div className="resume-screen-container" key="activities">
			<ResumeHeading
				heading="Problem Solving With C"
				description="Here I learned about basic programming skill."
			/>
			<ResumeHeading
				heading="Workshop in Cyber Security"
				description="In this workshop I learned how a web application can be vulnerable and basic security features."
			/>
			<ResumeHeading
				heading="Workshop in Machine Learning"
				description="In this workshop I learned about different machine learning algorithms in Python."
			/>
		</div>,
		<div
			className="resume-screen-container programming-skills-container"
			key="programming-skills"
		>
			{programmingSkillDetails.map((skill, value) => (
				<div className="skill-parent" key={value}>
					<div className="heading-bullet"></div>
					<span>{skill.skill}</span>
					<div className="skill-percentage">
						<div
							style={{ width: skill.ratingPercentage + "%" }}
							className="active-percentage-bar"
						></div>
					</div>
				</div>
			))}
		</div>,
		<div className="resume-screen-container" key="projects">
			{projectDetails.map((projectDetail, index) => (
				<ResumeHeading
					key={index}
					heading={projectDetail.title}
					subHeading={projectDetail.subHeading}
					description={projectDetail.description}
					fromDate={projectDetail.duration.fromDate}
					toDate={projectDetail.duration.toDate}
				/>
			))}
		</div>,
	];

	const handleCarousal = (index) => {
		let offsetHeight = 360;
		let newCarousalOffset = {
			style: {
				transform: "translateY(" + index * offsetHeight * -1 + "px",
			},
		};
		setCarousalOffSetStyle(newCarousalOffset);
		setSelectedBulletIndex(index);
	};

	const getBullets = () => {
		return resumeBullets.map((bullet, index) => (
			<div
				key={index}
				onClick={() => handleCarousal(index)}
				className={
					index === selectedBulletIndex
						? "bullet selected-bullet"
						: "bullet"
				}
			>
				{bullet.logoSrc}
				<span className="bullet-label">{bullet.label}</span>
			</div>
		));
	};

	const getResumeScreen = () => {
		return (
			<div
				className="resume-details-carousel"
				style={carousalOffSetStyle.style}
			>
				{resumeDetails.map((ResumeDetails) => ResumeDetails)}
			</div>
		);
	};

	return (
		<div
			className="resume-container screen-container fade-in"
			id={props.id || ""}
		>
			<div className="resume-content">
				<ScreenHeading
					title={"Resume"}
					subHeading={"My formal bio details"}
				/>
				<div className="resume-card">
					<div className="resume-bullets">
						<div className="bullet-container">
							<div className="bullet-icons"></div>
							<div className="bullets">{getBullets()}</div>
						</div>
					</div>
					<div className="resume-bullet-details">
						{getResumeScreen()}
					</div>
				</div>
			</div>
		</div>
	);
}

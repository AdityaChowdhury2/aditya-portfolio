import React from "react";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import "./Project.css";
import shape from "../../../src/assets/Project/shape-bg.png";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Animations from "../../utilities/Animation";
import ScrollService from "../../utilities/ScrollService";
// const image = require("../../assets/Project/Pizza-delivery-project.jpg");

export const Project = (props) => {
	let fadeInScreenHandler = (screen) => {
		if (screen.fadeInScreen !== props.id) return;
		Animations.animations.fadeInScreen(props.id);
	};

	const fadeInSubscription =
		ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

	const projectDetails = [
		{
			heading: "Pizza Delivery",
			image: "DriveAway-Delivery-System.png",
			techUsed: ["NodeJs", "ExpressJs", "MongoDB", "SCSS"],
			description:
				"This is a very simple project to order pizza and track order status with an admin panel",
			gitLink:
				"https://github.com/AdityaChowdhury2/pizza-delivery-website",
			liveLink: "https://pizza-delivery-website.onrender.com/",
		},
		// {
		// 	heading: "Hotel Booking Site",
		// 	image: "Burj-React-App.png",
		// 	techUsed: ["React", "React-router", "CSS", "Firebase Auth"],
		// 	description:
		// 		"This is a Hotel Booking website made with React, React-Router and CSS",
		// 	gitLink: "https://github.com/AdityaChowdhury2/burj-al-arab-aditya",
		// 	liveLink: "https://hotel-booking-site.netlify.app",
		// },
		{
			heading: "Amazon Like Website",
			image: "amazon-React-App.png",
			techUsed: ["React", "CSS", "React-router", "Firebase Auth"],
			description:
				"Trying to create Amazon Like Website where you can order your favourite products",
			gitLink: "https://github.com/AdityaChowdhury2/amazon-with-react",
			liveLink: "https://amazon-simple-app.netlify.app/",
		},
		{
			heading: "Simple e-commerce Site",
			image: "Hot-Gadgets.png",
			techUsed: ["HTML", "Bootstrap", "CSS"],
			description:
				"This is a very simple e-commerce site made with HTML and Bootstrap",
			gitLink: "https://github.com/AdityaChowdhury2/hot-gadgets",
			liveLink: "https://adityachowdhury2.github.io/hot-gadgets",
		},
		{
			heading: "Simple Food Delivery Website",
			image: "red-onion-React-App.png",
			techUsed: ["React", "React-Bootstrap", "Firebase"],
			description:
				"This project is done to order food on meal basis. Google authentication is added to register with this application",
			gitLink: "https://github.com/AdityaChowdhury2/red-onion-aditya",
			liveLink: "https://red-onion-aditya.netlify.app/",
		},
		{
			heading: "E-Learning Website",
			image: "online-school-platform.png",
			techUsed: ["HTML", "CSS", "Bootstrap"],
			description:
				"An simple Online learning platform made with HTML, CSS and Bootstrap",
			gitLink: "https://github.com/AdityaChowdhury2/e-school",
			liveLink: "https://adityachowdhury2.github.io/e-school/",
		},
	];
	const options = {
		autoPlay: true,
		autoPlayInterval: 1000,
		animationDuration: 1000,
		// animationType: "slide",
		infinite: true,
		touchTracking: false,
		disableDotsControls: true,
		disableButtonsControls: true,
		itemsInSlide: 3,
		responsive: {
			0: { items: 1 },
			768: { items: 2 },
			1024: { items: 3 },
		},
		autoPlayStrategy: "default",
	};
	return (
		<div className="fade-in" id={props.id}>
			<ScreenHeading title={"Project"} subHeading={"What I have done"} />
			<section className="project-section  ">
				<div className="container project-container ">
					<div className="row">
						<AliceCarousel {...options} id="project-carousel">
							{projectDetails.map((project, index) => {
								return (
									<div className="col-lg-12" key={index}>
										<div className="project-card">
											<div className="project-image">
												<img
													src={require(`../../../src/assets/Project/${project.image}`)}
													alt="No internet connection"
												/>
											</div>
											<div className="project-heading">
												{project.heading}
											</div>
											<div className="project-tech">
												{project.techUsed.join(", ")}
											</div>
											<div className="project-description">
												{project.description}
											</div>
											<a
												href={project.gitLink}
												target="_blank"
												rel="noreferrer"
											>
												<button className="btn primary-btn project-btn">
													Github Link
												</button>
											</a>
											<a
												href={project.liveLink}
												target="_blank"
												rel="noreferrer"
											>
												<button className="btn btn-highlighted project-btn">
													Live Demo
												</button>
											</a>
										</div>
									</div>
								);
							})}
						</AliceCarousel>
					</div>
				</div>
			</section>
			<div className="footer-image">
				<img src={shape} alt="" />
			</div>
		</div>
	);
};

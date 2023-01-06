import React from "react";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import "./Project.css";
import shape from "../../../src/assets/Project/shape-bg.png";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export const Project = (props) => {
	const options = {
		autoPlay: true,
		// autoPlayControls: true,
		autoPlayStrategy: "none",
		autoPlayInterval: 1000,
		animationDuration: 1000,
		animationType: "fadeout",
		infinite: true,
		touchTracking: false,
		disableDotsControls: true,
		disableButtonsControls: true,
		itemsInSlide: 3,
		responsive: {
			0: { items: 1 },
			768: { items: 1 },
			1024: { items: 3 },
		},
	};
	return (
		<div>
			<ScreenHeading title={"Project"} subHeading={"What I have done"} />
			<section className="project-section" id={props.id}>
				<div className="container">
					<div className="row">
						<AliceCarousel
							{...options}
							className="owl-carousel"
							id="project-carousel"
						>
							<div className="col-lg-12">
								<div className="project-card">
									<div className="project-image">
										<img src="" alt="" />
									</div>
									<div className="project-heading">
										Lorem ipsum dolor sit amet consectetur,
									</div>
									<div className="project-desc">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elitAdita Doloremque, quis
										modi. Iure molestiae consequuntur, harum
										perspiciatis pariatur repellendus enim
										vel!
									</div>
								</div>
							</div>
							<div className="col-lg-12">
								<div className="project-card">
									<div className="project-image">
										<img src="" alt="" />
									</div>
									<div className="project-heading">
										Lorem ipsum dolor sit amet consectetur,
									</div>
									<div className="project-desc">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit durjoy Doloremque, quis
										modi. Iure molestiae consequuntur, harum
										perspiciatis pariatur repellendus enim
										vel!
									</div>
								</div>
							</div>
							<div className="col-lg-12">
								<div className="project-card">
									<div className="project-image">
										<img src="" alt="" />
									</div>
									<div className="project-heading">
										Lorem ipsum dolor sit amet consectetur,
									</div>
									<div className="project-desc">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Doloremque, quis modi.
										Iure molestiae consequuntur, harum
										perspiciatis pariatur repellendus enim
										vel!
									</div>
								</div>
							</div>
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

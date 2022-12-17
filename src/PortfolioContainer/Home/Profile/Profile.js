import React from "react";
import Typical from "react-typical";
import "./Profile.css";
export default function Profile() {
	return (
		<div className="profile-container">
			<div className="profile-parent">
				<div className="profile-details">
					<div className="colz">
						<div className="colz-icon">
							<a href="https://www.facebook.com/adityachowdhury4/">
								<i className="fa-brands fa-square-facebook"></i>
							</a>
							<a href="https://github.com/AdityaChowdhury2">
								<i className="fa-brands fa-square-github"></i>
							</a>
							<a href="https://www.linkedin.com/in/aditya-chowdhury-durjoy/">
								<i className="fa-brands fa-linkedin"></i>
							</a>
							<a href="https://twitter.com/aditya_durjoy2">
								<i className="fa-brands fa-square-twitter"></i>
							</a>
						</div>
					</div>
					<div className="profile-details-name">
						<span className="primary-text">
							{" "}
							Hello, I'M{" "}
							<span className="highlighted-text">Aditya</span>
						</span>
					</div>
					<div className="profile-details-role">
						<span className="primary-text">
							{" "}
							<Typical
								steps={[
									"Enthusiastic Dev 🔴",
									2000,
									"MERN Dev 😎",
									2000,
									"Full stack Dev 💻",
									2000,
									"React Developer 📱",
									2000,
								]}
								loop={Infinity}
								wrapper="h1"
							></Typical>
							<span className="profile-role-tagline">
								Knack of building applications with front and
								back end operations.
							</span>
						</span>
					</div>
					<div className="profile-options">
						<button className="btn primary-btn">Hire Me</button>
						<a href="AdityaChowdhuryResume.pdf" download="Aditya">
							<button className="btn btn-highlighted">
								Get Resume
							</button>
						</a>
					</div>
				</div>
				<div className="profile-picture">
					<div className="profile-picture-background"></div>
				</div>
			</div>
		</div>
	);
}

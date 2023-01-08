import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Typewriter from "typewriter-effect";

import Animations from "../../utilities/Animation";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import "./ContactMe.css";

export const ContactMe = (props) => {
	let fadeInScreenHandler = (screen) => {
		if (screen.fadeScreen !== props.id) return;
		Animations.animations.fadeInScreen(props.id);
	};

	const fadeInSubscription =
		ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [banner, setBanner] = useState("");
	const [bool, setBool] = useState(false);

	const handleName = (e) => {
		setName(e.target.value);
	};
	const handleEmail = (e) => {
		setEmail(e.target.value);
	};
	const handleMessage = (e) => {
		setMessage(e.target.value);
	};

	const submitForm = async (e) => {
		e.preventDefault();
		try {
			let data = {
				name,
				email,
				message,
			};
			setBool(true);
			const res = await axios.post(`/contact`, data);
			if (
				name.length === 0 ||
				email.length === 0 ||
				message.length === 0
			) {
				setBanner(res.data.msg);
				toast.error(res.data.msg);
				setBool(false);
			} else if (res.status === 200) {
				setBanner(res.data.msg);
				toast.success(res.data.msg);
				setBool(false);
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="main-container" id={props.id || ""}>
			<ScreenHeading
				title={"Contact Me"}
				subHeading={"Lets Keep In Touch"}
			/>
			<div className="central-form">
				<div className="col">
					<h2 className="title">
						<Typewriter
							options={{
								strings: ["Get in Touch 📧"],
								// cursor: ".",
								autoStart: true,
								loop: true,
								// pauseFor: 1500,
								// delay: 75,
								wrapperClassName: "",
								cursorClassName: "",
							}}
						/>
					</h2>
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
				<div className="back-form">
					<div className="img-back">
						<h4>Send your Email Here!</h4>
						<img
							src={require("../../assets/ContactMe/mailz.jpeg")}
							alt="no internet connection"
						/>
					</div>
					<form onSubmit={submitForm}>
						<p>{banner}</p>
						<label htmlFor="name">Name</label>
						<input type="text" onChange={handleName} value={name} />

						<label htmlFor="email">Email</label>
						<input
							type="email"
							onChange={handleEmail}
							value={email}
						/>

						<label htmlFor="message">Message</label>
						<textarea
							type="text"
							onChange={handleMessage}
							value={message}
						/>

						<div className="send-btn">
							<button type="submit">
								Send
								<i className="fa fa-paper-plane" />
								{bool ? (
									<b className="load">
										<img
											src={require("../../assets/ContactMe/load2.gif")}
											alt="img not responding"
										/>
									</b>
								) : (
									""
								)}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

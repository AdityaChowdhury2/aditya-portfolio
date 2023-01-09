import React, { useRef, useState } from "react";
import Typewriter from "typewriter-effect";
import emailjs from "@emailjs/browser";
import Animations from "../../utilities/Animation";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import "./ContactMe.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactMe = (props) => {
	const form = useRef();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [banner, setBanner] = useState("");
	const [bool, setBool] = useState(false);

	let fadeInScreenHandler = (screen) => {
		if (screen.fadeInScreen !== props.id) return;
		Animations.animations.fadeInScreen(props.id);
	};

	const fadeInSubscription =
		ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

	const handleName = (e) => {
		setName(e.target.value);
	};
	const handleEmail = (e) => {
		setEmail(e.target.value);
	};
	const handleMessage = (e) => {
		setMessage(e.target.value);
	};

	const submitForm = (e) => {
		e.preventDefault();
		try {
			if (
				name.length === 0 ||
				email.length === 0 ||
				message.length === 0
			) {
				setBanner("Please Fill all the fields");
				toast.error("Please Fill all the fields");
				setBool(false);
			} else {
				setBool(true);
				emailjs
					.sendForm(
						"service_pfn7j0f",
						"template_ryy3zqf",
						form.current,
						"NmmBay3jQM0HjDRe2"
					)
					.then(
						(res) => {
							// console.log(res);
							if (res.status === 200) {
								setBanner("Thanks for contacting Aditya");
								toast.success("Email sent successfully");
								setBool(false);
								setName("");
								setMessage("");
								setEmail("");
							}
						},
						(error) => {
							// console.log(error.text);
							toast.error("Please contact Aditya with Linkedin");
						}
					);
			}
		} catch (error) {
			toast.error("Please contact Aditya with Linkedin");
		}
	};

	return (
		<div className="main-container fade-in" id={props.id || ""}>
			<ToastContainer />
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
					<form ref={form} onSubmit={submitForm}>
						<p>{banner}</p>
						<label htmlFor="name">Name</label>
						<input
							type="text"
							onChange={handleName}
							value={name}
							name="name"
						/>

						<label htmlFor="email">Email</label>
						<input
							type="email"
							onChange={handleEmail}
							value={email}
							name="email"
						/>

						<label htmlFor="message">Message</label>
						<textarea
							type="text"
							onChange={handleMessage}
							value={message}
							name="message"
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

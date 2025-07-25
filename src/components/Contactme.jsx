import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Linkedin from "../assets/social/linkedin.svg";
import Github from "../assets/social/github.svg";
import Instagram from "../assets/social/instagram.svg";
import Wave from "../assets/wave-2.png";
import { HugeiconsIcon } from "@hugeicons/react";
import { Mail02Icon, Call02Icon, Copy01Icon } from "@hugeicons/core-free-icons";
import { toast, Toaster } from "sonner";
import { copyToClipboard } from "../utils/copy";
export default function Contactme() {
	const form = useRef();

	const handleCopy = (text) => {
		copyToClipboard(text);
	};

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_shx5onp",
				"template_mq8gt1t",
				form.current,
				"tpcL9kQeXIMyjUpgY"
			)
			.then(
				() => {
					toast.success("Message sent successfully!");
					e.target.reset(); // optional: reset form after submission
				},
				(error) => {
					toast.error("Failed to send message. Try again later.");
					console.error(error);
				}
			);
	};

	return (
		<>
			<section
				id="contact"
				className="p-6 w-full min-h-screen flex flex-col md:flex-row items-stretch"
			>
				{/* Left Column */}
				<div className="border border-green-600/20 bg-black w-full md:w-1/2 flex flex-col border-r">
					<div className="p-4 md:p-12 space-y-8">
						<h2 className="text-2xl font-bold text-white">Contact</h2>
						<div className="space-y-6">
							{/* Email */}
							<div className="flex items-start gap-4">
								<div className="text-xl text-white">
									<HugeiconsIcon icon={Mail02Icon} />
								</div>
								<div className="flex flex-col gap-1">
									<h3 className="font-semibold text-green-600">Chat to us</h3>
									<p className="text-white/50 text-sm">
										Our friendly team is here to help.
									</p>
									<div className="flex items-center gap-2">
										<a
											href="mailto:prakashvarma00045@gmail.com"
											className="text-sm text-blue-300 hover:underline"
										>
											prakashvarma00045@gmail.com
										</a>
										<HugeiconsIcon
											icon={Copy01Icon}
											size={16}
											className="text-white cursor-pointer hover:text-blue-400"
											onClick={() => handleCopy("prakashvarma00045@gmail.com")}
										/>
									</div>
								</div>
							</div>

							{/* Phone */}
							<div className="flex items-start gap-4">
								<div className="text-xl text-white">
									<HugeiconsIcon icon={Call02Icon} />
								</div>
								<div className="flex flex-col gap-1">
									<h3 className="font-semibold text-green-600">Call us</h3>
									<p className="text-white/50 text-sm">
										Mon–Fri from 8am to 5pm.
									</p>
									<div className="flex items-center gap-2">
										<p className="text-sm text-blue-300">+91 9010908346</p>
										<HugeiconsIcon
											icon={Copy01Icon}
											size={16}
											className="text-white cursor-pointer hover:text-blue-400"
											onClick={() => handleCopy("+91 9010908346")}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Socials */}
					<div className="hidden md:flex relative flex-1 items-center justify-center">
						<img src={Wave} alt="" className="w-full h-full" />
						<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent" />
					</div>
				</div>

				{/* Right Column Form */}
				<div className="bg-green-600/90 w-full md:w-1/2 p-4 md:p-12 flex flex-col justify-center">
					<div className="max-w-xl mx-auto space-y-6">
						<h1 className="text-3xl md:text-4xl font-bold text-black leading-tight">
							Got ideas? We’ve got the skills. Let’s team up.
						</h1>
						<p className="text-black font-medium">
							Tell us more about yourself and what you’ve got in mind.
						</p>

						<form ref={form} onSubmit={sendEmail} className="space-y-6">
							<input
								type="text"
								name="user_name"
								required
								placeholder="Your name"
								className="w-full border-b border-black bg-transparent outline-none py-2 placeholder:text-black"
							/>
							<input
								type="email"
								name="user_email"
								required
								placeholder="you@company.com"
								className="w-full border-b border-black bg-transparent outline-none py-2 placeholder:text-black"
							/>
							<textarea
								name="message"
								required
								placeholder="Tell us a little about the project..."
								className="w-full border-b border-black bg-transparent outline-none py-2 placeholder:text-black"
								rows="3"
							></textarea>

							<div>
								<p className="mb-2 font-medium text-black">How can we help?</p>
								<div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-black">
									<Checkbox label="Website design" />
									<Checkbox label="UX design" />
									<Checkbox label="User research" />
									<Checkbox label="Content creation" />
									<Checkbox label="Strategy & consulting" />
									<Checkbox label="Other" />
								</div>
							</div>

							<button
								type="submit"
								className="bg-black text-white font-semibold px-6 py-3 rounded-md w-full md:w-auto"
							>
								Let’s get started!
							</button>
						</form>
					</div>
				</div>
			</section>
		</>
	);
}

function Checkbox({ label }) {
	return (
		<label className="flex items-center space-x-2 text-sm cursor-pointer">
			<input type="checkbox" className="accent-black w-4 h-4" />
			<span>{label}</span>
		</label>
	);
}

import React, { useState } from "react";
import { toast } from "sonner";
import NavComponent from "./NavComponent";
import { HugeiconsIcon } from "@hugeicons/react";
import {
	ArrowRight04Icon,
	Copy01Icon,
	TickDouble02Icon,
} from "@hugeicons/core-free-icons";
import { copyToClipboard } from "../utils/copy.js";

const DetailsComponent = () => {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		await copyToClipboard("prakashvarma00045@gmail.com");
		setCopied(true);
		setTimeout(() => setCopied(false), 1500); // Reset after 2 seconds
	};

	const scrollToContact = () => {
		const contactSection = document.getElementById("contact");
		if (contactSection) {
			contactSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className="bg-black w-full h-full md:h-full flex flex-col md:items-center md:p-10 p-5 pt-0 gap-2 md:w-1/2">
			<NavComponent />
			<div className="w-full h-full md:h-auto">
				<div className="md:mt-16 flex flex-col text-secondary font-creato gap-3 md:gap-4">
					<p className="text-3xl">I'm</p>
					<p className="font-array text-5xl md:text-6xl text-accent text-shadow-[0_4px_90px_#37B35C]">
						Prakash Varma
					</p>
					<p className="text-2xl md:text-5xl font-bold">
						I Design. I Build. I Deliver.
					</p>

					<p className="text-sm md:text-base">
						I am a passionate and skilled Full Stack Web Developer with a strong
						foundation in both front-end and back-end technologies. My expertise
						lies in building robust, scalable, and user-friendly web
						applications that provide exceptional user experiences.
					</p>

					<div className="flex items-center gap-4 mt-4 flex-wrap">
						{/* Let's Connect */}
						<button
							onClick={scrollToContact}
							className="rounded-md hover:bg-white/20 w-45 border border-green-600/80 flex items-center justify-between py-1"
						>
							<span className="ml-5">Let's Connect</span>
							<div className="w-10 h-10 bg-green-600 text-black flex items-center justify-center rounded-md self-end mr-1">
								<HugeiconsIcon icon={ArrowRight04Icon} />
							</div>
						</button>

						{/* Copy Email */}
						<button
							onClick={handleCopy}
							className="flex items-center border border-green-600/30 gap-2 text-white/50 hover:bg-green-700/30 hover:text-green-600 p-3 rounded-md transition-all"
						>
							<HugeiconsIcon icon={copied ? TickDouble02Icon : Copy01Icon} />
							<div>
								<span className="hidden md:flex">
									prakashvarma00045@gmail.com
								</span>
								<span className="md:hidden block">Gmail</span>
							</div>
						</button>
					</div>

					<a
						href="/resume.pdf"
						target="_blank"
						rel="noopener noreferrer"
						className="md:mt-3 w-30 md:w-30 h-12 border border-green-600 md:border-0 md:bg-gradient-to-r md:from-gradinet-start md:to-gradient-end rounded-full flex justify-center  items-center"
					>
						Resume
					</a>
				</div>
			</div>
		</div>
	);
};

export default DetailsComponent;

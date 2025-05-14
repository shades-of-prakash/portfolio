import React from "react";
const HeroLeft = () => {
	return (
		<div className="w-[50%] relative h-auto p-20 font-creato ">
			<div className="w-150 h-14 font-normal text-base bg-transparent  backdrop-blur-[30px] bg-gradient-to-r from-accent/40  to-accent-complete/0  rounded-xl  flex items-center  justify-between  shadow-[0_0.5px_0_#37B35C] p-4 ">
				<p className="text-secondary tracking-wide">shadesofprakash</p>
				<ul className="flex items-center gap-10 text-secondary ">
					<li>About</li>
					<li>Projects</li>
					<li>Contact</li>
				</ul>
			</div>
			<div className="flex flex-col text-secondary mt-16 font-creato gap-4">
				<p className="text-3xl">I'm</p>
				<p className="font-array text-6xl text-accent text-shadow-[0_4px_90px_#37B35C]">
					Prakash Varma
				</p>
				<p className="text-5xl font-bold">I Design. I Build. I Deliver.</p>
				<p className="mt-2">
					I am a passionate and skilled Full Stack Web Developer with a strong
					foundation in both front-end and back-end technologies. My expertise
					lies in building robust, scalable, and user-friendly web applications
					that provide exceptional user experiences.
				</p>
				<a
					href="/resume.pdf"
					target="_blank"
					rel="noopener noreferrer"
					className="mt-3 w-30 h-12 bg-gradient-to-r from-gradinet-start/40 to-gradient-end/10 rounded-2xl flex justify-center  items-center"
				>
					Resume
				</a>
			</div>
		</div>
	);
};

export default HeroLeft;

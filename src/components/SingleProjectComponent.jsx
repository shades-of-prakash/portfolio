import React, { useRef } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
	ArrowLeft02Icon,
	GithubIcon,
	ArrowUpRight03Icon,
	ArrowDown02Icon,
} from "@hugeicons/core-free-icons";
import Star from "../assets/svg/star.svg?react";
import { Link } from "react-router";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import HeadingComponent from "./HeadingComponent";

const SingleProjectComponent = ({ project, setter }) => {
	const {
		projectTitle,
		projectType,
		projectDescription,
		projectBullets,
		projectTechStack,
		projectGithubLink,
		projectLiveLink,
		projectImages,
	} = project;
	const iconRef = useRef(null);
	useGSAP(() => {
		gsap.to(iconRef.current, {
			y: 10,
			opacity: 1,
			duration: 1,
			ease: "power1.inOut",
			repeat: -1,
			yoyo: true,
		});
	}, []);
	return (
		<div className="bg-black/80  absolute top-0 left-0 h-screen w-full flex justify-center items-center p-3">
			<div className="border-1 border-green-600/50 rounded-xl test md:h-[660px] h-full md:w-[1200px] w-screen overflow-scroll flex items-center flex-col">
				<div className="w-full h-auto md:h-15 bg-black  p-4 border-b border-green-600/50 flex items-center justify-between  text-white gap-2">
					<div className="w-full  md:w-1/2 rounded-full flex items-center md:gap-4 gap-2 ">
						<div
							onClick={() => setter(null)}
							className="w-9 h-9 rounded-full flex items-center justify-center text-xl md:text-3xl text-green-600"
						>
							<HugeiconsIcon icon={ArrowLeft02Icon} />
						</div>
						<div className="flex flex-col">
							<h1 className="text-base md:text-xl">{projectTitle}</h1>
							<span className="text-sm text-gray-500">{projectType}</span>
						</div>
					</div>
					<div className="w-auto font-creato font-medium flex items-center  gap-3">
						<Link
							to={projectGithubLink}
							target="_blank"
							className="bg-green-600 text-black p-2 rounded-md flex items-center gap-1"
						>
							<HugeiconsIcon icon={GithubIcon} size={16} />
							<span className="hidden  md:inline">Github</span>
						</Link>
						<Link
							to={projectLiveLink}
							target="_blank"
							className="bg-green-600 text-black p-2 rounded-md flex items-center gap-1"
						>
							<HugeiconsIcon icon={ArrowUpRight03Icon} size={16} />
							<span className="hidden  md:inline">View website</span>
						</Link>
					</div>
				</div>
				<div className="w-full  bg-black overflow-scroll  p-1  md:p-5">
					<div className=" flex w-full h-auto md:h-full gap-2 flex-col md:flex-row">
						<div className="flex-shrink-0 border border-green-600/20 md:w-3/5 w-full md:h-auto h-56 rounded-xl overflow-hidden">
							<img
								src={projectImages[0]}
								alt="project_main_image"
								className="w-full h-full object-cover"
							/>
						</div>

						<div className="relative md:w-2/5 w-full text-white font-creato p-2">
							<h1 className="font-black text-2xl px-3 mt-2 md:mt-4">
								{projectTitle}
							</h1>
							<p className="font-normal text-base px-3 mt-2">
								{projectDescription}
							</p>
							<ul className="text-base mt-4 px-2 font-creato text-white/80">
								{projectBullets.map((bullet) => {
									return (
										<li className="flex items-center gap-2 mt-3">
											<Star className="md:w-5 md:h-5 w-6 h-6" />
											{bullet}
										</li>
									);
								})}
							</ul>
							<div className="max-w-fit flex-wrap h-auto mt-4 text-nowrap flex  items-center gap-1">
								{projectTechStack.map((stack) => {
									const { label, Icon, color } = stack;
									return (
										<div className="bg-neutral-950 border border-white/[0.14] text-white/80 flex  px-4 py-1.5 rounded-full items-center gap-2 text-sm">
											{Icon ? <Icon size={18} color={color} /> : ""}
											<span>{label}</span>
										</div>
									);
								})}
							</div>
							<div
								className="text-green-600 absolute bottom-0 right-2 top justify-end text-3xl"
								ref={iconRef}
							>
								<HugeiconsIcon icon={ArrowDown02Icon} size={24} />
							</div>
						</div>
					</div>
					<div className="p-5">
						<HeadingComponent heading={"Previews"} />
					</div>
					{projectImages.slice(1).map((img) => {
						return (
							<div className="w-full h-50 md:h-full pt-2 px-2 md:p-0">
								<div className=" w-full md:mt-5 h-full overflow-hidden  rounded-md border border-green-600/50">
									<img
										src={img}
										alt="project_images"
										className="w-full  h-full"
									/>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default SingleProjectComponent;

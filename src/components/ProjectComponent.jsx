import React, { act, Fragment, useRef, useState } from "react";
import HeadingComponent from "./HeadingComponent";
import { HugeiconsIcon } from "@hugeicons/react";
import { GithubIcon, ArrowUpRight03Icon } from "@hugeicons/core-free-icons";
import { Link } from "react-router";
import SingleProjectComponent from "./SingleProjectComponent";
import projectsInfo from "../utils/projectDetails.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const ProjectComponent = () => {
	const [activeIndex, setActiveIndex] = useState(null);
	function toggleIndex(index) {
		console.log(index);
		setActiveIndex(index);
	}
	return (
		<div className="w-full h-auto">
			<HeadingComponent heading="PROJECTS" />
			<div className="w-full h-full flex flex-col p-5 md:p-10 md:gap-2 gap-1">
				{projectsInfo.map((project, index) => {
					return (
						<React.Fragment key={index + 1}>
							<div
								onClick={() => toggleIndex(index)}
								className={`w-full md:h-24 h-auto mb-2  rounded-md cursor-pointer border border-zinc-800/70`}
							>
								<div className="text-white w-full h-full flex gap-2 items-center md:justify-between  p-3 md:p-2">
									<div className="w-full md:w-1/2 h-full flex items-center md:gap-15 gap-2 md:ml-10 m-0">
										<span className="font-creato text-sm">
											{project.projectYear}
										</span>
										<div className="flex items-center  gap-2 font-creato md:text-2xl text-sm whitespace-nowrap">
											<span className="">{project.projectTitle}</span>
											<div className="w-1/2 h-5 p-2 md:p-4 md:flex  hidden items-center justify-center rounded-full bg-sky-600/20 text-sky-400  ">
												<span className="text-[12px] text-nowrap">
													{project.projectType}
												</span>
											</div>
										</div>
									</div>
									<div className="hidden md:flex w-1/2 h-full  gap-2">
										<div className="relative w-3/4 h-full  p-2">
											<div className="w-full h-full border border-green-600/20 rounded-xl">
												{project.projectBullets[index]}
											</div>
											<div className="absolute top-0 left-0  w-full h-full bg-gradient-to-b from-black via-transparent to-black rounded-xl"></div>
										</div>
										<div className="w-1/4 h-full  p-2  flex items-center gap-1 text-black">
											<div className="w-full h-full bg-green-600 flex items-center justify-center rounded-xl">
												<HugeiconsIcon icon={GithubIcon} />
											</div>
											<div className="w-full h-full bg-green-600 flex items-center justify-center rounded-xl">
												<HugeiconsIcon icon={ArrowUpRight03Icon} />
											</div>
										</div>
									</div>
								</div>
							</div>
						</React.Fragment>
					);
				})}
			</div>
			{activeIndex != null && (
				<SingleProjectComponent
					project={projectsInfo[activeIndex]}
					setter={toggleIndex}
				/>
			)}
		</div>
	);
};

export default ProjectComponent;

import React, { useEffect, useRef } from "react";
import DADComponent from "./DADComponent";
import ProjectComponent from "./ProjectComponent";
import HeroComponent from "./HeroComponent";
import HeadingComponent from "./HeadingComponent";

const MainLayout = () => {
	return (
		<div
			className="bg-primary w-full h-screen overflow-y-scroll overflow-x-hidden"
			id="main"
		>
			<HeroComponent />
			<DADComponent />
			<ProjectComponent />
			<div className="flex flex-col">
				<h1 className="text-white">My skills</h1>
				<HeadingComponent heading={"What I Bring to the Battle"} />
			</div>
			<div className="w-screen h-dvh bg-red-900" id="about"></div>
		</div>
	);
};

export default MainLayout;

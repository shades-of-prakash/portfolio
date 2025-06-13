import React, { useEffect, useRef } from "react";
import DADComponent from "./DADComponent";
import ProjectComponent from "./ProjectComponent";
import HeroComponent from "./HeroComponent";

const MainLayout = () => {
	return (
		<div
			className="bg-primary w-full h-screen overflow-y-scroll overflow-x-hidden"
			id="main"
		>
			<HeroComponent />
			<DADComponent />
			<ProjectComponent />
			<div className="w-screen h-dvh bg-red-900" id="about"></div>
		</div>
	);
};

export default MainLayout;

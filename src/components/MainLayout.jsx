import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import DADComponent from "./DADComponent";
import ProjectComponent from "./ProjectComponent";
import HeroComponent from "./HeroComponent";
import HeadingComponent from "./HeadingComponent";
import SkillsComponent from "./SkillsComponent";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import Marquee from "./Marquee";
import Knowme from "./Knowme"
import Tools from "./Tools"

const MainLayout = () => {
	return (
		<div className="bg-primary w-full h-auto overflow-y-scroll overflow-x-hidden" id="main">
			<HeroComponent />
			<DADComponent  />
			<ProjectComponent />
			<SkillsComponent />
			<Marquee/>
			<Knowme/>
			<Tools/>
			<div className="w-screen h-dvh bg-blue-400" id="about"></div>
		</div>
	);
};

export default MainLayout;

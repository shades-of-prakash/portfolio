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

gsap.registerPlugin(useGSAP);

const MainLayout = () => {
	// useGSAP(() => {
	// 	gsap.fromTo(
	// 		trackRef.current,
	// 		{ x: 0 },
	// 		{
	// 			x: -width,
	// 			ease: "none",
	// 			duration: 30,
	// 			repeat: -1,
	// 		}
	// 	);
	// });

	return (
		<div className="bg-primary w-full h-screen overflow-y-scroll overflow-x-hidden" id="main">
			<HeroComponent />
			<DADComponent  />

			<ProjectComponent />
			<SkillsComponent />
			<div className="w-screen overflow-hidden py-8 bg-green-600" >
				<div
					className="flex bg-red-900 justify-between whitespace-nowrap font-semibold text-xl text-black"
				>
					<div className="flex items-center gap-6  bg-blue-800 flex-1 items-center justify-center">
						<span>Dynamic</span>
					</div>
					<HugeiconsIcon icon={ArrowRight02Icon} />
					<div className="flex items-center gap-6  bg-blue-800 flex-1 items-center justify-center">
						<span>Scalable</span>
					</div>
					<HugeiconsIcon icon={ArrowRight02Icon} />
					<div className="flex items-center gap-6  bg-blue-800 flex-1 items-center justify-center">
						<span>Responsive</span>
					</div>
					<HugeiconsIcon icon={ArrowRight02Icon} />
					<div className="flex items-center gap-6  bg-blue-800 flex-1 items-center justify-center">
						<span>Secure</span>
					</div>
					<HugeiconsIcon icon={ArrowRight02Icon} />
					<div className="flex items-center gap-6  bg-blue-800 flex-1 items-center justify-center">
						<span>Fast</span>
					</div>
					<HugeiconsIcon icon={ArrowRight02Icon} />
					<div className="flex items-center gap-6  bg-blue-800 flex-1 items-center justify-center">
						<span>Accessible</span>
					</div>
					<HugeiconsIcon icon={ArrowRight02Icon} />
					<div className="flex items-center gap-6  bg-blue-800 flex-1 items-center justify-center">
						<span>Interactive</span>
					</div>
					<HugeiconsIcon icon={ArrowRight02Icon} />

					<div className="flex items-center gap-6  bg-blue-800 flex-1 items-center justify-center">
						<span>User-Centric</span>
					</div>
					<HugeiconsIcon icon={ArrowRight02Icon} />

					<div className="flex items-center gap-6  bg-blue-800 flex-1 items-center justify-center">
						<span>Maintainable</span>
					</div>
					<HugeiconsIcon icon={ArrowRight02Icon} />

				</div>
			</div>

			<div className="w-screen h-dvh bg-red-900" id="about"></div>
		</div>
	);
};

export default MainLayout;

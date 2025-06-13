import React, { useRef, useState } from "react";
import Shades from "../assets/shades.png";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HugeiconsIcon } from "@hugeicons/react";
import {
	SiExpress,
	SiGithub,
	SiMongodb,
	SiNodedotjs,
	SiReact,
} from "@icons-pack/react-simple-icons";
import {
	Task01Icon,
	ComputerProgramming01Icon,
	Link01Icon,
	LinkSquare02Icon,
} from "@hugeicons/core-free-icons";

gsap.registerPlugin(ScrollTrigger);
const Bento = () => {
	const scrollRef = useRef(null);
	const [activeIndex, setActiveIndex] = useState(0);
	const handleScroll = () => {
		const scrollContainer = scrollRef.current;
		const scrollLeft = scrollContainer.scrollLeft;
		const width = scrollContainer.clientWidth;
		const index = Math.round(scrollLeft / width);
		setActiveIndex(index);
	};
	// useGSAP(() => {
	// 	gsap.fromTo(
	// 		".card",
	// 		{
	// 			y: 100,
	// 			opacity: 0,
	// 		},
	// 		{
	// 			y: 0,
	// 			opacity: 1,
	// 			duration: 1,
	// 			ease: "none",
	// 			scrollTrigger: {
	// 				trigger: ".grid-main",
	// 				scroller: "#main",
	// 				start: "top 90%",
	// 				end: "bottom bottom",
	// 				scrub: 1,
	// 			},
	// 		}
	// 	);
	// });
	return (
		<div className="relative flex w-screen h-screen text-black">
			<div
				ref={scrollRef}
				onScroll={handleScroll}
				className="z-10 w-full h-full flex overflow-auto snap-x snap-mandatory"
			>
				<div className="flex-shrink-0 w-full h-full snap-start flex items-center justify-center text-white text-5xl">
					<div className="bg-gray-600 p-15 w-full h-full grid place-items-center">
						<div class="bg-red-900 w-full h-full p-4  grid grid-cols-4 md:grid-rows-6 rounded-2xl  relative   gap-3">
							<div className="p-3  overflow-hidden col-start-1 col-end-4 row-start-1 row-end-5 bg-blue-100 rounded-xl">
								<div className="relative w-full h-full">
									<img
										src={Shades}
										alt="Description of the image"
										className="w-full h-full object-top absolute object-cover rounded-lg"
									/>
								</div>
							</div>
							<div className="bg-blue-200 rounded-xl"></div>
							<div className="row-start-2 row-end-4 bg-blue-300 rounded-xl"></div>
							<div className="row-start-4 row-end-6 bg-blue-400 rounded-xl"></div>
							<div className="bg-blue-500 rounded-xl"></div>
							<div className="col-start-1 col-end-4 row-start-5 row-end-7 bg-blue-600 rounded-xl"></div>
						</div>
					</div>
				</div>
				<div className=" flex-shrink-0 w-full h-full snap-start flex items-center justify-center text-white text-5xl"></div>
				<div className=" flex-shrink-0 w-full h-full snap-start flex items-center justify-center text-white text-5xl"></div>
			</div>
			{/* <div className="z-10 absolute bottom-5 left-0 w-full flex justify-center gap-5">
				{[0, 1, 2].map((i) => (
					<div
						key={i}
						className={`w-2 h-2 rounded-full ${
							activeIndex === i ? "bg-white" : "bg-zinc-600"
						}`}
					></div>
				))}
			</div> */}
		</div>
	);
};

export default Bento;

function BentoGrid() {
	return (
		<div class="w-full h-full p-10  grid place-items-center">
			<div class="relative w-[calc(100%-80px)] h-[calc(100%-80px)]  grid grid-cols-[3fr_1fr] gap-3">
				<div className="grid grid-rows-[2fr_1fr]  gap-3">
					<div className="bg-[linear-gradient(90deg,rgba(31,75,44,0.316)_0%,rgba(73,177,104,0.079)_100%)] /10 rounded-xl relative grid place-items-center overflow-hidden h-full w-full p-3">
						<img
							src={Shades}
							alt="Shades"
							className="absolute w-[calc(100%-24px)] h-[calc(100%-24px)] rounded-xl object-cover object-top shadow-[rgba(255,255,255,0.15)_0px_48px_100px_0px]"
						/>
					</div>
					<div className="bg-[linear-gradient(90deg,rgba(31,75,44,0.316)_0%,rgba(73,177,104,0.079)_100%)] /10 rounded-xl border   border-white/10"></div>
				</div>
				<div className="grid grid-rows-[1fr_2fr_3fr_1fr] gap-3">
					<div className="bg-[linear-gradient(90deg,rgba(31,75,44,0.316)_0%,rgba(73,177,104,0.079)_100%)] /10 rounded-xl border   border-white/10"></div>
					<div className="bg-[linear-gradient(90deg,rgba(31,75,44,0.316)_0%,rgba(73,177,104,0.079)_100%)] /10 rounded-xl border   border-white/10"></div>
					<div className="bg-[linear-gradient(90deg,rgba(31,75,44,0.316)_0%,rgba(73,177,104,0.079)_100%)] /10 rounded-xl border   border-white/10"></div>
					<div className="bg-[linear-gradient(90deg,rgba(31,75,44,0.316)_0%,rgba(73,177,104,0.079)_100%)] /10 rounded-xl border   border-white/10"></div>
				</div>
			</div>
		</div>
	);
}

// {/* <div className="grid grid-rows-[2fr_1fr]  gap-3">
// 	<div className="card rounded-xl relative grid place-items-center overflow-hidden h-full w-full p-3">
// 		<img
// 			src={Shades}
// 			alt="Shades"
// 			className="absolute w-[calc(100%-24px)] h-[calc(100%-24px)] rounded-xl object-cover object-top shadow-[rgba(255,255,255,0.15)_0px_48px_100px_0px]"
// 		/>
// 	</div>
// 	<div className="card text-base flex flex-col">
// 		<div className="flex items-center gap-2 p-2 border-b border-white/10">
// 			<HugeiconsIcon
// 				icon={Task01Icon}
// 				size={20}
// 				color="var(--color-green-600)"
// 			/>
// 			<span>Description</span>
// 		</div>
// 		<p className="px-2 py-4 text-base font-creato font-normal  align-justify text-white">
// 			This E-Commerce platform is a modern, fully-functional web
// 			application built using the latest technologies: Node.js,
// 			React.js, MongoDB, and Express. Designed to deliver a
// 			seamless and engaging shopping experience, this platform
// 			integrates robust backend services with a dynamic and
// 			responsive frontend interface.
// 		</p>
// 	</div>
// </div> */}
// <div className=" card rounded-xl relative grid place-items-center overflow-hidden h-full w-full p-3">
// 	<img
// 		src={Shades}
// 		alt="Shades"
// 		className="absolute w-[calc(100%-24px)] h-[calc(100%-24px)] rounded-xl object-cover object-top shadow-[rgba(255,255,255,0.15)_0px_48px_100px_0px]"
// 	/>
// </div>
// <div className="card text-base flex flex-col">
// 	<div className="flex items-center gap-2 p-2 border-b border-white/10">
// 		<HugeiconsIcon
// 			icon={Task01Icon}
// 			size={20}
// 			color="var(--color-green-600)"
// 		/>
// 		<span>Description</span>
// 	</div>
// 	<p className="px-2 py-4 text-base font-creato font-normal  align-justify text-white">
// 		This E-Commerce platform is a modern, fully-functional web
// 		application built using the latest technologies: Node.js,
// 		React.js, MongoDB, and Express. Designed to deliver a seamless
// 		and engaging shopping experience, this platform integrates
// 		robust backend services with a dynamic and responsive frontend
// 		interface.
// 	</p>
// </div>
// {/* <div className="grid grid-rows-4 gap-3"> */}
// <div className="card flex flex-col items-center justify-center">
// 	<p className="text-sm font-creato">Shades</p>
// 	<p className="text-sm"></p>
// </div>
// <div className="card flex flex-col text-base">
// 	<div className="flex items-center gap-2 p-2 border-b border-white/10">
// 		<HugeiconsIcon
// 			icon={ComputerProgramming01Icon}
// 			size={18}
// 			color="var(--color-green-600)"
// 		/>
// 		<span>Languages</span>
// 	</div>
// 	<div className="h-full flex gap-2 items-center justify-center   p-2">
// 		<div className="w-full h-full flex items-center justify-between">
// 			{[SiReact, SiNodedotjs, SiMongodb, SiExpress].map(
// 				(Icon, i) => (
// 					<div
// 						key={i}
// 						className="w-15 aspect-square flex items-center justify-center"
// 					>
// 						<Icon className="w-3/4 h-3/4" />
// 					</div>
// 				)
// 			)}
// 		</div>
// 	</div>
// </div>
// <div className="card flex flex-col  justify-evenly">
// 	<div className="flex items-center gap-2 p-2 border-b border-white/10">
// 		<HugeiconsIcon
// 			icon={Link01Icon}
// 			size={18}
// 			color="var(--color-green-600)"
// 		/>
// 		<span className="text-base">Preview</span>
// 	</div>
// 	<div className="flex  flex-col gap-2">
// 		<div className="p-3 flex flex-col gap-2">
// 			<div className="rounded-md bg-green-600/30 flex items-center justify-between p-3">
// 				<div className="flex items-center gap-2">
// 					<SiGithub />
// 					<span className="text-base">Github</span>
// 				</div>
// 				<div>
// 					<a
// 						href="https://github.com/shades-of-prakash/shades"
// 						target="_blank"
// 					>
// 						<HugeiconsIcon icon={LinkSquare02Icon} />
// 					</a>
// 				</div>
// 			</div>
// 			<div className="rounded-md  bg-green-600/30 flex items-center justify-between p-3">
// 				<div className="flex items-center gap-2">
// 					<SiGithub />

// 					<span className="text-base">Live</span>
// 				</div>
// 				<div>
// 					<a
// 						href="https://shades-opal.vercel.app/"
// 						target="_blank"
// 					>
// 						<HugeiconsIcon icon={LinkSquare02Icon} />
// 					</a>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// </div>
// <div className="card"></div>
// {/* </div> */}

// {/* <div className="grid grid-rows-4 gap-3">
// 	<div className="card flex flex-col items-center justify-center">
// 		<p className="text-sm font-creato">Shades</p>
// 		<p className="text-sm"></p>
// 	</div>
// 	<div className="card flex flex-col text-base">
// 		<div className="flex items-center gap-2 p-2 border-b border-white/10">
// 			<HugeiconsIcon
// 				icon={ComputerProgramming01Icon}
// 				size={18}
// 				color="var(--color-green-600)"
// 			/>
// 			<span>Languages</span>
// 		</div>
// 		<div className="h-full flex gap-2 items-center justify-center   p-2">
// 			<div className="w-full h-full flex items-center justify-between">
// 				{[SiReact, SiNodedotjs, SiMongodb, SiExpress].map(
// 					(Icon, i) => (
// 						<div
// 							key={i}
// 							className="w-15 aspect-square flex items-center justify-center"
// 						>
// 							<Icon className="w-3/4 h-3/4" />
// 						</div>
// 					)
// 				)}
// 			</div>
// 		</div>
// 	</div>
// 	<div className="card flex flex-col  justify-evenly">
// 		<div className="flex items-center gap-2 p-2 border-b border-white/10">
// 			<HugeiconsIcon
// 				icon={Link01Icon}
// 				size={18}
// 				color="var(--color-green-600)"
// 			/>
// 			<span className="text-base">Preview</span>
// 		</div>
// 		<div className="flex  flex-col gap-2">
// 			<div className="p-3 flex flex-col gap-2">
// 				<div className="rounded-md bg-green-600/30 flex items-center justify-between p-3">
// 					<div className="flex items-center gap-2">
// 						<SiGithub />
// 						<span className="text-base">Github</span>
// 					</div>
// 					<div>
// 						<a
// 							href="https://github.com/shades-of-prakash/shades"
// 							target="_blank"
// 						>
// 							<HugeiconsIcon icon={LinkSquare02Icon} />
// 						</a>
// 					</div>
// 				</div>
// 				<div className="rounded-md  bg-green-600/30 flex items-center justify-between p-3">
// 					<div className="flex items-center gap-2">
// 						<SiGithub />

// 						<span className="text-base">Live</span>
// 					</div>
// 					<div>
// 						<a
// 							href="https://shades-opal.vercel.app/"
// 							target="_blank"
// 						>
// 							<HugeiconsIcon icon={LinkSquare02Icon} />
// 						</a>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// 	<div className="card"></div>
// </div> */}

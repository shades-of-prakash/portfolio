import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const FullText = () => {
	useGSAP(() => {
		const mm = gsap.matchMedia();

		mm.add(
			{
				isLarge: "(min-width: 1024px)",
				isMedium: "(min-width: 768px) and (max-width: 1023px)",
				isSmall: "(max-width: 767px)",
			},
			(context) => {
				const { isLarge, isMedium, isSmall } = context.conditions;

				gsap.to(".new", {
					xPercent: isLarge ? -57 : isMedium ? -76 : -81,
					scrollTrigger: {
						trigger: ".new-main",
						scroller: "#main",
						scrub: 1.5,
						start: "top 60%",
						end: "top 0%",
						// markers: true,
					},
				});
			}
		);

		return () => mm.revert();
	});

	return (
		<div className="new-main w-screen h-auto bg-accent grid place-items-center">
			<h1 className="new will-change-transform font-creato font-black text-9xl md:text-[220px] whitespace-nowrap inline-block">
				DESIGNER AND DEVELOPER
			</h1>
		</div>
	);
};

export default FullText;

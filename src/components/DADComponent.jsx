import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const FullText = () => {
	const containerRef = useRef(null);
	const textRef = useRef(null);

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
				const container = containerRef.current;
				const text = textRef.current;

				const scrollDistance = text.scrollWidth - container.offsetWidth;

				let scrubSpeed = 1.5;
				if (isSmall) scrubSpeed = 2;
				if (isMedium) scrubSpeed = 1.75;

				gsap.to(text, {
					x: -scrollDistance,
					ease: "none",
					scrollTrigger: {
						trigger: container,
						scrub: scrubSpeed,
						start: "top 60%",
						end: "top 0%",
						// markers: true,
					},
				});
			}
		);

		return () => mm.revert();
	}, []);

	return (
		<div
			ref={containerRef}
			className="w-screen h-auto bg-accent-light overflow-hidden grid place-items-center"
		>
			<h1
				ref={textRef}
				className="will-change-transform font-creato font-black text-9xl md:text-[220px] whitespace-nowrap inline-block"
			>
				DESIGNER AND DEVELOPER
			</h1>
		</div>
	);
};

export default FullText;

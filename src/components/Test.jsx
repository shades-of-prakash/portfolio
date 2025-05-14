import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import star from "../assets/svg/star.svg";

gsap.registerPlugin(ScrollTrigger);

const Test = () => {
	const imgWrapperRef = useRef(null);
	const mainTestRef = useRef(null);
	const subTestRef = useRef(null);

	useGSAP(() => {
		const subTest = subTestRef.current;
		gsap.set(imgWrapperRef.current, {
			scale: 2,
			transformOrigin: "center center",
			position: "absolute",
		});

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: imgWrapperRef.current,
				scroller: "#main",
				start: "top 20%",
				end: "bottom 30%",
				scrub: 1.5,
				// markers: true,
			},
		});

		tl.to(imgWrapperRef.current, {
			top: 220,
			scale: 1,
			rotate: 360,
			ease: "none",
		});

		tl.add("textReveal");

		tl.to(
			imgWrapperRef.current,
			{
				left: 630,
				ease: "none",
			},
			"textReveal"
		);

		tl.to(
			".fromLeft",
			{
				x: -30,
				opacity: 1,
				ease: "none",
			},
			"textReveal"
		);

		tl.to(
			".fromRight",
			{
				x: 30,
				opacity: 1,
				ease: "none",
			},
			"textReveal"
		);

		tl.to(
			".i",
			{
				xPercent: -180,
				ease: "none",
			},
			"textReveal"
		);

		gsap.to(subTest, {
			xPercent: -66.67,
			ease: "none",
			scrollTrigger: {
				trigger: mainTestRef.current,
				scroller: "#main",
				start: "top top",
				end: "+=200%",
				scrub: true,
				pin: true,
			},
		});
	}, []);

	return (
		<div
			id="main-test"
			ref={mainTestRef}
			className="relative h-screen w-screen overflow-hidden overscroll-none"
		>
			<div
				ref={subTestRef}
				className="h-full flex flex-row absolute will-change-transform"
				style={{ width: `${3 * 100}vw` }}
			>
				<div className="relative w-screen h-full bg-gradient-to-r from-green-600 to-green-800 flex items-center justify-center">
					<div
						ref={imgWrapperRef}
						className="absolute left-1/2 top-15 transform -translate-x-1/2"
					>
						<img src={star} alt="star" className="w-20 h-20" />
					</div>
					<div className="text-[230px]  text-secondary font-black font-creato absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
						<span className="fromLeft inline-block opacity-0 translate-x-[-300px]">
							DES
						</span>
						<span className="i inline-block opacity-100 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
							I
						</span>
						<span className="fromRight inline-block opacity-0 translate-x-[600px]">
							GNER
						</span>
					</div>
				</div>
				<div className="w-screen h-full bg-gradient-to-r from-purple-600 to-purple-800 flex items-center justify-center">
					<h2 className="text-4xl font-bold text-white">Section 2</h2>
				</div>
				<div className="w-screen h-full bg-gradient-to-r from-orange-600 to-orange-800 flex items-center justify-center">
					<h2 className="text-4xl font-bold text-white">Section 3</h2>
				</div>
			</div>
		</div>
	);
};

export default Test;

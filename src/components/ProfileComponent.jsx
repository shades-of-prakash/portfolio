import React, { useRef } from "react";
import profile from "../assets/profile.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const ProfileComponent = () => {
	const linesRef = useRef([]);
	useGSAP(() => {
		gsap.fromTo(
			linesRef.current,
			{ opacity: 0 },
			{
				opacity: 1,
				duration: 3,
				stagger: {
					amount: 1,
					from: "center",
					ease: "power2.inOut",
				},
				ease: "power3.out",
			}
		);
	}, []);
	return (
		<div className="relative w-full  flex items-center justify-center h-full  md:w-1/2  md:h-full">
			<div className="absolute w-full h-full bg-green-700">
				<div className="w-full h-full bg-primary flex justify-between gap-2">
					{Array.from({ length: 32 }).map((_, i) => (
						<div
							ref={(el) => (linesRef.current[i] = el)}
							key={i}
							className="w-[1px] h-full bg-gradient-to-b from-accent to-accent/10 md:from-accent md:via-accent  md:to-black"
						/>
					))}
				</div>
			</div>
			<div className="absolute w-50 h-50 md:w-90 md:h-90 bg-red-900 rounded-md overflow-hidden ">
				<img src={profile} alt="" />
			</div>
		</div>
	);
};

export default ProfileComponent;

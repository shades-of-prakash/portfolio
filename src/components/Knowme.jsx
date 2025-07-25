import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { Layers01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import shades from "../assets/shades.jpg";
import {
	SiNextdotjs,
	SiReact,
	SiNodedotjs,
	SiSpringboot,
	SiGo,
} from "@icons-pack/react-simple-icons";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Knowme() {
	const sectionRef = useRef();
	const paraRef = useRef();
	const nameRef = useRef();

	const paraRefMobile = useRef();
	const paraRefDesktop = useRef();

	useGSAP(() => {
		const isMobile = window.innerWidth < 768;

		const paraRefTarget = isMobile
			? paraRefMobile.current
			: paraRefDesktop.current;

		const nameChars = new SplitText(nameRef.current, { type: "chars" });
		const splitWords = new SplitText(paraRefTarget, { type: "words" });
		const splitChars = new SplitText(splitWords.words, { type: "chars" });

		gsap.set(splitChars.chars, { opacity: 0.1 });
		const imageEl = paraRefTarget.querySelector("svg");
		const imageWrapper = paraRefTarget.querySelector(".image-wrapper");

		gsap.set(imageEl, { opacity: 0.5, filter: "grayscale(100%)" });
		gsap.set(nameChars.chars, { opacity: 0 });

		gsap.to(nameChars.chars, {
			opacity: 1,
			stagger: 0.01,
			duration: 0.3,
			ease: "power2.out",
			scrollTrigger: {
				trigger: sectionRef.current,
				start: "top 45%",
				scrub: true,
			},
		});

		gsap.to(splitChars.chars, {
			opacity: 1,
			y: 0,
			stagger: 0.07,
			duration: 1.5,
			ease: "power2.out",
			scrollTrigger: {
				trigger: paraRefTarget,
				start: "top 30%",
				scrub: true,
			},
		});

		if (imageEl && imageWrapper) {
			gsap.to([imageEl, imageWrapper], {
				filter: "grayscale(0%)",
				scrollTrigger: {
					trigger: paraRefTarget,
					start: "top 30%",
					toggleActions: "play none none reverse",
				},
			});
		}

		if (!isMobile) {
			ScrollTrigger.create({
				trigger: sectionRef.current,
				start: "top top",
				end: "+=100%",
				pin: true,
				pinSpacing: true,
			});
		}

		return () => {
			splitChars.revert();
			nameChars.revert();
		};
	}, []);

	return (
		<div
			ref={sectionRef}
			className="w-full md:h-dvh h-auto   flex justify-center items-center flex-col overflow-hidden md:p-10 p-3"
		>
			<div className="w-full  border border-green-600/50 h-auto rounded-xl">
				<div className="z-10 flex flex-col md:p-10 p-3">
					<span className="font-creato md:tracking-[10px] tracking-[5px] text-white leading-10 uppercase md:text-sm text-[10px]">
						Know About Me
					</span>

					<h1 className="md:text-[50px] text-2xl leading-12 flex flex-col  justify-center text-accent-light mb-6">
						<span className="font-bold overflow-hidden md:mb-3" ref={nameRef}>
							SAI PRAKASH VARMA
						</span>
						<span className="opacity-60 md:text-[30px] text-xl overflow-hidden">
							KOKKILAGADDA
						</span>
					</h1>

					<div ref={paraRefMobile} className="text-white md:hidden text-xl">
						A full-stack developer who builds smooth, modern web experiences. I
						create fast frontends with React ,Next.js and reliable backends
						using Nodejs, Spring-boot,Go.I enjoy turning ideas into clean,
						efficient, real-world solutions. I’m always learning and always
						building.
					</div>

					<div
						ref={paraRefDesktop}
						className="mt-4 max-w-[48ch] hidden md:inline-block  text-gray-400  font-creato font-semibold md:text-5xl text-xl  leading-relaxed"
					>
						A full-stack
						<span className="mx-2 inline-flex align-middle items-center justify-center rounded-full p-2 bg-neutral-800 shadow-lg image-wrapper">
							<HugeiconsIcon icon={Layers01Icon} color="limegreen" size={28} />
						</span>
						developer who builds smooth, modern web experiences. I create fast
						frontends with React
						<span className="mx-2 inline-flex align-middle items-center justify-center rounded-full p-2 shadow-lg image-wrapper">
							<SiReact size={32} color="#61DAFB" className="react-icon" />
						</span>
						and Next.js
						<span className="mx-2 inline-flex align-middle items-center justify-center rounded-full p-2 shadow-lg image-wrapper">
							<SiNextdotjs size={32} />
						</span>
						and reliable backends using
						<LangBubble lang="Nodejs" icon={<SiNodedotjs />} color="#5FA04E" />
						<LangBubble
							lang="Spring-boot"
							icon={<SiSpringboot />}
							color="#6DB33F"
						/>
						and
						<LangBubble lang="Go" icon={<SiGo />} color="#00ADD8" />. I enjoy
						turning ideas into clean, efficient, real-world solutions. I’m
						always learning and always building.
					</div>
				</div>
			</div>
		</div>
	);
}

function LangBubble({ lang, color, icon }) {
	return (
		<div
			className="
        bg-neutral-950 inline-flex mx-2 border border-white/20 text-white/80
        items-center justify-center rounded-full gap-2  shadow
        transition-all duration-300 ease-in-out
        px-4 py-2 text-base md:text-lg lg:text-xl
        group-hover:scale-95 hover:scale-105 hover:px-6
      "
		>
			<div className="text-2xl md:text-3xl" style={{ color }}>
				{icon}
			</div>
			<span className="font-medium text-gray-500">{lang}</span>
		</div>
	);
}

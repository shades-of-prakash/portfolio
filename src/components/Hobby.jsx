import React, { useState } from "react";
import Golden from "../assets/gloden.png";
import Photo from "../assets/photo-3.jpg";
import Ganesh from "../assets/ganesh.jpg";
import Figma from "../assets/figma.svg";
import photo1 from "../assets/hobbies/photo-1.webp";
import photo2 from "../assets/hobbies/photo-2.webp";
import photo3 from "../assets/hobbies/photo-3.webp";
import photo4 from "../assets/hobbies/photo-4.webp";
import draw1 from "../assets/hobbies/draw-1.webp";
import draw2 from "../assets/hobbies/draw-2.webp";
import draw3 from "../assets/hobbies/draw-3.webp";
import draw4 from "../assets/hobbies/draw-4.webp";
import edit1 from "../assets/hobbies/edit-1.webp";
import edit2 from "../assets/hobbies/edit-2.jpg";
import edit3 from "../assets/hobbies/edit-3.jpg";
import edit4 from "../assets/hobbies/edit-4.jpg";
import design1 from "../assets/hobbies/design-1.png";
import design2 from "../assets/hobbies/design-2.png";
import design3 from "../assets/hobbies/design-3.png";
import design4 from "../assets/hobbies/design-4.png";

export default function Test() {
	const [hoveredIndex, setHoveredIndex] = useState(null);
	const [innerHoveredIndex, setInnerHoveredIndex] = useState(null);

	const hobbies = [
		{
			title: "PHOTOGRAPHY",
			img: Golden,
			photo: [photo1, photo2, photo3, photo4],
		},
		{ title: "EDITING", img: Photo, photo: [edit1, edit2, edit3, edit4] },
		{ title: "DRAWING", img: Ganesh, photo: [draw1, draw2, draw3, draw4] },
		{
			title: "DESIGNING",
			img: Figma,
			photo: [design1, design2, design3, design4],
		},
	];

	return (
		<div className="w-full h-auto text-white">
			{/* Desktop layout */}
			<div className="hidden md:flex gap-4 mt-4 h-96 perspective-[1000px]">
				{hobbies.map((hobby, i) => {
					const isHovered = hoveredIndex === i;
					const isAnyHovered = hoveredIndex !== null;

					return (
						<div
							key={i}
							onMouseEnter={() => {
								setHoveredIndex(i);
								setInnerHoveredIndex(null);
							}}
							onMouseLeave={() => {
								setHoveredIndex(null);
								setInnerHoveredIndex(null);
							}}
							className={`relative border border-green-600/30 rounded-xl flex-1 flex transition-[flex] duration-500 ease-in-out min-w-0 overflow-hidden group
								${isHovered ? "flex-[10]" : "group-hover:flex-[0.8]"}`}
						>
							<img
								src={hobby.img}
								alt=""
								className={`w-full h-full object-cover rounded-xl absolute inset-0 z-0 transition-transform duration-500 
								${isHovered ? "scale-105" : "scale-100"}`}
							/>

							<div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-black/70 to-black/90" />

							<span
								className={`absolute z-20 text-white/80 font-semibold text-xl bottom-3 left-3 transition-opacity duration-500 ease-in-out
									${isAnyHovered ? "opacity-0" : "opacity-100"}`}
							>
								{hobby.title}
							</span>

							<div
								className={`absolute inset-0 z-30 flex items-center justify-center text-2xl font-bold transition-all duration-500 
									bg-black bg-opacity-80 rounded-xl
									${
										isHovered
											? "opacity-100 scale-100"
											: "opacity-0 scale-95 pointer-events-none"
									}`}
							>
								<div className="w-full h-full flex flex-col text-center justify-center p-2">
									<div className="flex items-center justify-center p-2">
										{hobby.title}
									</div>
									<div className="w-full h-full flex gap-4 p-3 overflow-hidden">
										{hobby.photo.map((photo, index) => {
											const isInnerHovered = innerHoveredIndex === index;
											const isAnyInnerHovered = innerHoveredIndex !== null;

											return (
												<div
													key={index}
													onMouseEnter={() => setInnerHoveredIndex(index)}
													onMouseLeave={() => setInnerHoveredIndex(null)}
													className={`border border-green-600/40 rounded-md h-full overflow-hidden transition-all duration-300 ease-in-out 
														${isInnerHovered ? "flex-[2]" : isAnyInnerHovered ? "flex-[0.7]" : "flex-1"}`}
												>
													<img
														src={photo}
														alt="photo-of-hobby"
														className="object-cover w-full h-full transition-transform duration-300 ease-in-out"
													/>
												</div>
											);
										})}
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>

			{/* Mobile layout - 4 main card slider */}
			<div className="md:hidden mt-6 ">
				<div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
					{hobbies.map((hobby, i) => (
						<div
							key={i}
							className="relative w-[250px] h-70 rounded-xl overflow-hidden border border-green-600/40 flex-shrink-0"
						>
							<img
								src={hobby.img}
								alt={hobby.title}
								className="w-full h-full object-cover rounded-xl"
							/>
							<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/90" />
							<div className="absolute bottom-3 left-3 text-white font-semibold text-xl z-10">
								{hobby.title}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

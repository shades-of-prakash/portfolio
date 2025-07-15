import React, { useEffect, useRef } from "react";
import DADComponent from "./DADComponent";
import ProjectComponent from "./ProjectComponent";
import HeroComponent from "./HeroComponent";
import HeadingComponent from "./HeadingComponent";
import SkillsComponent from "./SkillsComponent";
import ImageSlicer from "./ImageSlicer";

const MainLayout = () => {
	const stripes = 20; // number of vertical stripes
	// const imageUrl = "https://images.unsplash.com/photo-1485470733090-0aae1788d5af"// any image URL
  	const imageUrl="https://4kwallpapers.com/images/walls/thumbs_3t/20421.jpg"
	return (
		<div
			className="bg-primary w-full h-screen overflow-y-scroll overflow-x-hidden"
			id="main"
		>
			<HeroComponent />
			<DADComponent />
			<ProjectComponent />
			{/* <div className="w-screen h-[800px] p-10 overflow-hidden">
				<div className="w-full h-full bg-red-100 overflow-hidden">
					<ImageSlicer
					imageUrl={imageUrl}
					numberOfSlices={stripes}
					/>
				</div>
			</div> */}
			<SkillsComponent/>
			<div className="w-screen h-dvh bg-red-900" id="about"></div>
		</div>
	);
};

export default MainLayout;

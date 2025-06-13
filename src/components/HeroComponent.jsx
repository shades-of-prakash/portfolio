import React from "react";
import DetailsComponent from "./DetailsComponent";
import ProfileComponent from "./ProfileComponent";
const HeroComponent = () => {
	return (
		<div className="w-full h-screen   flex flex-col p-0 md:flex-row-reverse md:p-0">
			{/* <div className="w-full h-1/2 bg-red-100"></div>
			<div className="w-full h-1/2 bg-red-300"></div> */}
			<ProfileComponent />
			<DetailsComponent />
		</div>
	);
};

export default HeroComponent;

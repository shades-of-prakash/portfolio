import React from "react";

const HeadingComponent = ({ heading }) => {
	return (
		<div className="w-full h-auto flex items-center justify-center  bg-gradient-to-l from-green-800/20 to-black">
			<p className="text-[50px] md:text-[100px] font-array text-accent-light">
				{heading}
			</p>
		</div>
	);
	s;
};

export default HeadingComponent;

import React from "react";

const HeadingComponent = ({ heading }) => {
	return (
		<div className="w-full h-auto flex items-center justify-center">
			<p className="text-[50px] md:text-[100px] font-array text-accent">
				{heading}
			</p>
		</div>
	);
};

export default HeadingComponent;

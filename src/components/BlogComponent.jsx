import React from "react";

const BlogComponent = () => {
	return <div className="w-screen h-dvh bg-white text-black px-20">
		<div className="h-full bg-red-900 flex flex-col border border-black">
			<div className="w-full h-40 bg-black flex justify-center items-center flex-col">
				<div>
					<span className="text-white">Prakash Varma's</span>
					<p className="inline-block text-[100px] text-green-600 font-array">BLOG</p>
				</div>
			</div>
			<div className="w-full flex-1 bg-white"></div>
		</div>
	</div>;
};

export default BlogComponent;

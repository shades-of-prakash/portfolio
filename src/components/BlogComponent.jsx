import React, { useState } from "react";
import {HugeiconsIcon} from "@hugeicons/react"
import {Moon02Icon ,Sun02Icon,ArrowDown01Icon, UnfoldMoreIcon} from "@hugeicons/core-free-icons"
import { useTheme } from "../contexts/ThemeContext.jsx"

const BlogComponent = () => {
	const [darkmode,setDarkMode]=useState(false)
	const {theme,toggleTheme}=useTheme();
	function handleTheme(){
		console.log(darkmode)
		toggleTheme();
		setDarkMode(!darkmode)
	}
	return <div className="w-screen h-dvh bg-b-background text-black px-20">
		<div className="h-full  flex flex-col  ">
			<div className="w-full h-auto p-10 flex justify-center items-start flex-col">
				<div className="flex flex-col leading-none pl-4">
					<span className="bg-blog-foreground mb-[-10px] font-creato font-bold tracking-wide">Prakash Varma's</span>
					<p className="inline-block text-[120px] text-green-600 font-array leading-none m-0">BLOG</p>
				</div>
				<div className="w-full text-blog-nav-foreground bg-blog-nav-background rounded-xl h-auto  p-3 flex justify-between items-center ">
					<div className="flex gap-2">	
						<input type="text" className="w-100 p-2 border-1 border-black rounded-md" />
						<button className="bg-black text-white px-4 py-2 rounded-md">Search</button>
					</div>
					<div className="flex justify-between items-center gap-3 font-creato">
						<div className="bg-white border border-black px-4 py-2 rounded-full flex gap-1 items-center">
							<span>Language</span>
							<HugeiconsIcon icon={ArrowDown01Icon} size={16}  />
						</div>
						<div className="bg-white border border-black px-4 py-2 rounded-full flex gap-1 items-center">
							<span>Time</span>
							<HugeiconsIcon icon={ArrowDown01Icon} size={16} />
						</div>
						<div onClick={()=>handleTheme()} >
							{darkmode ?
							<HugeiconsIcon icon={Sun02Icon} size={32} />:
							<HugeiconsIcon icon={Moon02Icon} size={32} />}
						</div>
					</div>
				</div>
			</div>
			<div className="w-full flex-1 bg-white"></div>
		</div>
	</div>;
};

export default BlogComponent;

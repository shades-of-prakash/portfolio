import Brave from "../assets/tools/brave.svg?react";
import Figma from "../assets/tools/figma.svg?react";
import Postman from "../assets/tools/postman.svg?react";
import Vscode from "../assets/tools/vscode.svg?react";
import IntellijIdea from "../assets/tools/intelliJidea.svg?react";
import WebStorm from "../assets/tools/webStorm.svg?react";
import Spotify from "../assets/tools/spotify.svg?react";

export default function Tools() {
	const toolData = [
		{
			name: "Visual Studio Code",
			type: "IDE",
			usage: "Frontend & Backend Dev",
			proficiency: "Advanced",
			icon: <Vscode className="w-6 h-6" />,
			link: "https://code.visualstudio.com/",
		},
		{
			name: "IntelliJ IDEA",
			type: "IDE",
			usage: "Java/Backend Dev",
			proficiency: "Intermediate",
			icon: <IntellijIdea className="w-6 h-6" />,
			link: "https://www.jetbrains.com/idea/",
		},
		{
			name: "WebStorm",
			type: "IDE",
			usage: "JavaScript/React Dev",
			proficiency: "Intermediate",
			icon: <WebStorm className="w-6 h-6" />,
			link: "https://www.jetbrains.com/webstorm/",
		},
		{
			name: "Postman",
			type: "API Testing Tool",
			usage: "Testing REST APIs",
			proficiency: "Intermediate",
			icon: <Postman className="w-6 h-6" />,
			link: "https://www.postman.com/",
		},
		{
			name: "Figma",
			type: "Design Tool",
			usage: "UI/UX Design, Prototyping",
			proficiency: "Intermediate",
			icon: <Figma className="w-6 h-6" />,
			link: "https://www.figma.com/",
		},
		{
			name: "Brave Browser",
			type: "Browser/Dev Tool",
			usage: "Privacy-focused browsing & dev testing",
			proficiency: "Advanced",
			icon: <Brave className="w-6 h-6" />,
			link: "https://brave.com/",
		},
		{
			name: "Spotify",
			type: "Productivity Tool",
			usage: "Background music during coding",
			proficiency: "Daily User",
			icon: <Spotify className="w-6 h-6" />,
			link: "https://www.spotify.com/",
		},
	];

	return (
		<div className="w-full h-auto flex items-center justify-center">
			<div className="w-full h-auto flex flex-col md:p-10 p-0 text-white font-creato border border-green-600/20">
				{/* Header */}
				<div className="text-white/70 w-full bg-white/10 border-b border-green-600/50 h-16 flex items-center justify-between font-bold px-6">
					<div className="w-1/4 truncate">Tool</div>
					<div className="w-1/4 truncate hidden md:block">Type</div>
					<div className="w-1/4 truncate hidden md:block">Usage</div>
					<div className="w-1/4 truncate hidden md:block">Proficiency</div>
				</div>

				{/* Tool Rows */}
				{toolData.map(({ name, type, usage, proficiency, icon, link }, idx) => (
					<a
						key={idx}
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						className="py-2 w-full relative group border-b border-green-600/50 last:border-b-0 h-16 flex items-center justify-between overflow-hidden px-6 no-underline"
					>
						{/* Hover Background */}
						<div className="rounded-sm absolute left-0 top-1/2 w-full h-0 bg-green-600 transition-all duration-300 ease-in-out group-hover:h-full transform -translate-y-1/2 z-0" />

						{/* Row Content */}
						<div className="w-full md:w-1/4 z-10 flex items-center gap-3 group-hover:text-black transition-colors duration-200">
							{icon}
							<span className="truncate overflow-hidden whitespace-nowrap">
								{name}
							</span>
						</div>
						<div className="w-1/4 z-10 hidden md:block group-hover:text-black transition-colors duration-200">
							<span className="truncate overflow-hidden whitespace-nowrap">
								{type}
							</span>
						</div>
						<div className="w-1/4 z-10 hidden md:block group-hover:text-black transition-colors duration-200">
							<span className="truncate overflow-hidden whitespace-nowrap">
								{usage}
							</span>
						</div>
						<div className="w-1/4 z-10 hidden md:block group-hover:text-black transition-colors duration-200">
							<span className="truncate overflow-hidden whitespace-nowrap">
								{proficiency}
							</span>
						</div>
					</a>
				))}
			</div>
		</div>
	);
}

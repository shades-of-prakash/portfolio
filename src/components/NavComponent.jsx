import React, { useState } from "react";
import {
	CodeFolderIcon,
	ContactIcon,
	Home05Icon,
	NoteIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link } from "react-router";

const navItems = [
	{ label: "About", icon: Home05Icon, sectionId: "about" },
	{ label: "Work", icon: CodeFolderIcon, sectionId: "work" },
	{ label: "Blog", icon: NoteIcon, route: "/blog" },
	{ label: "Contact", icon: ContactIcon, sectionId: "contact" },
];

const NavComponent = () => {
	const [activeSection, setActiveSection] = useState(null);

	const handleClick = (sectionId) => {
		setActiveSection(sectionId);
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className="bg-gradient-to-b from-transparent via-black to-black md:mt-10 z-1000 h-25 md:h-14 fixed bottom-0 left-0 w-full md:static grid place-items-center ">
			<div className="border border-green-600 md:border-none bg-black rounded-full overflow-hidden md:w-full md:p-4 p-2 w-80 h-14 font-normal text-base md:bg-transparent md:backdrop-blur-[30px] md:bg-gradient-to-r md:from-accent/40 md:to-accent-complete/0 md:rounded-xl flex items-center justify-center md:justify-between md:shadow-[0_0.5px_0_#37B35C]">
				<p className="text-secondary tracking-wide hidden md:block">
					shadesofprakash
				</p>
				<ul className="rounded-full md:rounded-md overflow-hidden w-full md:w-auto flex items-center md:gap-10 gap-1 text-secondary">
					{navItems.map(({ label, icon, sectionId, route }) => (
						<li
							className="overflow-hidden flex-1 flex justify-center items-center rounded-full md:rounded-none"
							key={label}
						>
							{route ? (
								<Link
									to={route}
									className={`w-full flex justify-center items-center gap-2 px-3 py-2 transition-colors duration-200 hover:text-white text-white/60  `}
								>
									<span className="hidden md:inline">{label}</span>
									<HugeiconsIcon icon={icon} className="md:hidden" />
								</Link>
							) : (
								<button
									onClick={() => handleClick(sectionId)}
									className={`w-full flex justify-center items-center md:bg-none hover:text-white gap-2 px-3 py-2
		${
			activeSection === sectionId
				? "text-black bg-green-600 md:bg-transparent md:text-white"
				: "text-white/60"
		}`}
								>
									<span className="hidden md:inline">{label}</span>
									<HugeiconsIcon icon={icon} className="md:hidden" />
								</button>
							)}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default NavComponent;

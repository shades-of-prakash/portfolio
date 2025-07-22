
import HeadingComponent from "./HeadingComponent";
import {
	SiReact, SiTailwindcss, SiNodedotjs, SiExpress,
	SiDocker, SiMongodb, SiLinux, SiGit, SiGithub,
	SiVercel, SiPostcss, SiPostgresql, SiAngular,
	SiSpringboot, SiSpring, SiJavascript,SiNextdotjs,SiPython,SiLangchain
} from "@icons-pack/react-simple-icons";

const skills = [
	{ icon: <SiReact size="1em" color="#61DAFB" />, label: "React" },
	{ icon: <SiNodedotjs size="1em" color="#5FA04E" />, label: "Node.js" },
	{ icon: <SiExpress size="1em" color="#ffffff" />, label: "Express" },
	{ icon: <SiDocker size="1em" color="#2496ED" />, label: "Docker" },
	{ icon: <SiMongodb size="1em" color="#47A248" />, label: "MongoDB" },
	{ icon: <SiLinux size="1em" color="#FCC624" />, label: "Linux" },
	{ icon: <SiGit size="1em" color="#F05032" />, label: "Git" },
	{ icon: <SiGithub size="1em" color="#ffffff" />, label: "GitHub" },
	{ icon: <SiVercel size="1em" color="#ffffff" />, label: "Vercel" },
	{ icon: <SiSpring size="1em" color="#6DB33F" />, label: "Spring" },
	{ icon: <SiPostgresql size="1em" color="#4169E1" />, label: "PostgreSQL" },
	{ icon: <SiAngular size="1em" color="#dd0031" />, label: "Angular" },
	{ icon: <SiSpringboot size="1em" color="#6DB33F" />, label: "Spring Boot" },
	{ icon: <SiJavascript size="1em" color="#F7DF1E" />, label: "Javascript" },
	{ icon: <SiNextdotjs size="1em" color="#FFFFFF" />, label: "Nextjs" },
	{ icon: <SiPython size="1em" color="#3776AB" />, label: "Python" },
	{ icon: <SiLangchain size="1em" color="#1C3C3C" />, label: "Langchain" },
	{ icon: <SiTailwindcss size="1em" color="#06B6D4" />, label: "Tailwind CSS" },
	
];

function SkillsComponent() {
	return (
		<div className="w-screen h-auto px-4 py-10 mb-10">
			<div className="flex flex-col items-center mb-5">
				<HeadingComponent heading={"EXPERTISE"} />
			</div>

			<div className="w-full flex flex-wrap justify-center gap-4 mt-10 px-10 md:px-40 pt-5 group">
				{skills.map((skill, index) => (
					<div
						key={index}
						className={`
							bg-neutral-950 border border-white/20 text-white/80
							flex items-center rounded-full gap-2 text-sm shadow
							transition-all duration-300 ease-in-out
							px-4 py-2 text-base md:text-lg lg:text-xl
							group-hover:scale-95 hover:scale-105 hover:px-6
						`}
					>
						<div className="text-2xl md:text-3xl">{skill.icon}</div>
						<span className="font-medium">{skill.label}</span>
					</div>
				))}
			</div>
		</div>
	);
}

export default SkillsComponent;

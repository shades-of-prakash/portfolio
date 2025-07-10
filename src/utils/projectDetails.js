import {
	SiLangchain,
	SiPython,
	SiStreamlit,
} from "@icons-pack/react-simple-icons";
import {
	SiReact,
	SiNodedotjs,
	SiMongodb,
	SiExpress,
} from "@icons-pack/react-simple-icons";
import Mistral from "../assets/svg/mistral.svg?react";
const projectsInfo = [
	{
		projectTitle: "SHADES",
		projectType: "E-commerce",
		projectYear: "2024",
		projectDescription:
			"A responsive shopping platform built with react and node.js. It includes product browsing, cart management, user login",
		projectBullets: [
			"Built using React.js (frontend) and Node.js (backend) with secure JWT authentication.",
			"Styled with Tailwind CSS and enhanced using Framer Motion for smooth UI interactions.",
			"Implemented product listings, cart, and checkout features with MongoDB for data storage.",
			"Optimized for responsiveness, performance, and seamless user experience.",
		],
		projectTechStack: [
			{
				label: "React",
				Icon: SiReact,
				color: "#61DAFB",
			},
			{
				label: "Node.js",
				Icon: SiNodedotjs,
				color: "#5FA04E",
			},
			{
				label: "MongoDB",
				Icon: SiMongodb,
				color: "#47A248",
			},
			{
				label: "Express.js",
				Icon: SiExpress,
				color: "#ffffff",
			},
		],
		projectGithubLink: "https://github.com/shades-of-prakash/shades",
		projectLiveLink: "http://shades-opal.vercel.app/",
		projectImages: [
			"/projects/shades-1.png",
			"/projects/shades-2.png",
			"/projects/shades-3.png",
			"/projects/shades-4.png",
			"/projects/shades-5.png",
		],
	},
	{
		projectTitle: "Document-Based Q&A System",
		projectType: "AI/NLP Application",
		projectYear: "2025",
		projectDescription:
			"An intelligent Q&A system that uses Langchain, Streamlit, and Mistral AI to allow users to query information directly from uploaded documents.",
		projectBullets: [
			"Implemented document ingestion and vector embedding using Langchain and FAISS.",
			"Integrated Mistral AI for answering natural language queries with high accuracy.",
			"Built an interactive frontend using Streamlit to upload files and ask questions in real-time.",
			"Supports multi-document uploads with chunking and retrieval-based question answering.",
		],
		projectTechStack: [
			{
				label: "Python",
				Icon: SiPython,
				color: "#3776AB",
			},
			{
				label: "Langchain",
				Icon: SiLangchain,
				color: "#1C3C3C",
			},
			{
				label: "Mistral AI",
				Icon: Mistral,
				color: "#FA500F",
			},
			{
				label: "Streamlit",
				Icon: SiStreamlit,
				color: "#FF4B4B",
			},
			{
				label: "FAISS",
			},
		],
		projectGithubLink:
			"https://github.com/shades-of-prakash/Document-Based-Q-A-System-Using-Langchain-Streamlit-and-Mistral-AI",
		projectLiveLink: "https://shadesofprakash.streamlit.app/",
		projectImages: [
			"/projects/qa-1.png",
			"/projects/qa-2.png",
			"/projects/qa-3.png",
		],
	},
];

export default projectsInfo;

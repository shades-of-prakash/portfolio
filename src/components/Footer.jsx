// import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-router";
import Github from "../assets/social/github.svg";
import Instagram from "../assets/social/instagram.svg";
import Linkedin from "../assets/social/linkedin.svg";

export default function Footer() {
	return (
		<footer className="text-white px-6 py-1 md:mb-5 mb-25 ">
			<div className="bg-gradient-to-br from-transparent via-black to-green-600 border border-green-600 w-full mx-auto grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-4 px-4 py-8 rounded-md">
				<div className="space-y-5 ">
					<div className="text-3xl font-bold">Prakash Varma</div>
					<p className="text-gray-400 text-sm leading-relaxed">
						I'm Prakash — a full-stack developer, designer & curious builder.
						Thanks for stopping by!
					</p>
					<p className="text-gray-600 text-xs">
						© {new Date().getFullYear()} Prakash Varma
					</p>
				</div>

				{/* Center: Quick Links */}
				<div className="h-full flex items-center justify-between md:flex-col flex-row">
					<h3 className="font-semibold text-lg mb-3">Explore</h3>
					<ul className="space-y-2 text-sm text-gray-400 md:block flex flex-row  gap-2">
						<li>
							<a href="#about" className="hover:text-white transition">
								About
							</a>
						</li>
						<li>
							<a href="#contact" className="hover:text-white transition">
								Contact
							</a>
						</li>
						<li>
							<Link to="/blog" className="hover:text-white transition">
								Blog
							</Link>
						</li>
					</ul>
				</div>

				{/* Right: Social Links */}
				<div className="flex justify-between md:block">
					<h3 className="font-semibold text-lg mb-3">Social</h3>
					<div className="flex gap-5 text-xl text-gray-400">
						<a
							href="https://github.com/shades-of-prakash"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-blue-400"
						>
							<img src={Github} alt="" className="w-6 h-6" />
						</a>
						<a
							href="https://www.linkedin.com/in/sai-prakash-varma-kokkilagadda-182a83290/"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-white"
						>
							<img src={Linkedin} alt="" className="w-6 h-6" />
						</a>
						<a
							href="https://www.instagram.com/shadesofprakash/"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-pink-400"
						>
							<img src={Instagram} alt="" className="w-6 h-6" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

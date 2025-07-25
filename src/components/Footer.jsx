// import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="bg-red-900 text-white px-6 md:px-10 py-10">
			<div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
				{/* Left: Logo & Bio */}
				<div className="space-y-4">
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
				<div>
					<h3 className="font-semibold text-lg mb-3">Explore</h3>
					<ul className="space-y-2 text-sm text-gray-400">
						<li>
							<a href="/about" className="hover:text-white transition">
								About
							</a>
						</li>
						<li>
							<a href="/contact" className="hover:text-white transition">
								Contact
							</a>
						</li>
						<li>
							<a href="/blog" className="hover:text-white transition">
								Blog
							</a>
						</li>
					</ul>
				</div>

				{/* Right: Social Links */}
				<div>
					<h3 className="font-semibold text-lg mb-3">Social</h3>
					<div className="flex gap-5 text-xl text-gray-400">
						<a
							href="https://linkedin.com/in/your-link"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-blue-400"
						>
							{/* <FaLinkedin /> */}
						</a>
						<a
							href="https://github.com/your-username"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-white"
						>
							{/* <FaGithub /> */}
						</a>
						<a
							href="https://instagram.com/your-handle"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-pink-400"
						>
							{/* <FaInstagram /> */}
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

import NavComponent from "./NavComponent";
const DetailsComponent = () => {
	return (
		<div className="bg-black w-full h-full md:h-full flex flex-col md:items-center md:p-10 p-5 pt-0 gap-2 md:w-1/2">
			<NavComponent />
			<div className="w-full h-full md:h-auto">
				<div className="md:mt-16 flex flex-col text-secondary  font-creato gap-3 md:gap-4">
					<p className="text-3xl">I'm</p>
					<p className="font-array text-5xl md:text-6xl text-accent text-shadow-[0_4px_90px_#37B35C]">
						Prakash Varma
					</p>
					<p className="text-2xl md:text-5xl font-bold">
						I Design. I Build. I Deliver.
					</p>
					<p className="text-sm md:text-base">
						I am a passionate and skilled Full Stack Web Developer with a strong
						foundation in both front-end and back-end technologies. My expertise
						lies in building robust, scalable, and user-friendly web
						applications that provide exceptional user experiences.
					</p>
					<a
						href="/resume.pdf"
						target="_blank"
						rel="noopener noreferrer"
						className="md:mt-3 w-30 md:w-30 h-12 border border-green-600 md:border-0 md:bg-gradient-to-r md:from-gradinet-start md:to-gradient-end rounded-full flex justify-center  items-center"
					>
						Resume
					</a>
				</div>
			</div>
		</div>
	);
};

export default DetailsComponent;

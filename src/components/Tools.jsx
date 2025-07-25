import { SiBrave } from "@icons-pack/react-simple-icons";
export default function Tools() {
	return (
		<div className="w-full h-auto flex items-center justify-center">
			<div className="w-full h-auto flex flex-col  p-10 text-white font-creato">
				{/* Header */}
				<div className=" text-white/70 w-full bg-white/10 border-b border-green-600/50 h-16 flex items-center justify-between font-bold px-6">
					<div className="w-1/4">Tool</div>
					<div className="w-1/4">Type</div>
					<div className="w-1/4">Usage</div>
					<div className="w-1/4">Proficiency</div>
				</div>

				{/* Rows */}
				{[
					["Visual Studio Code", "IDE", "Frontend & Backend Dev", "Advanced"],
					["Postman", "API Testing", "Testing REST APIs", "Intermediate"],
					["Docker", "Containerization", "App Deployment", "Beginner"],
				].map(([tool, type, usage, proficiency], idx) => (
					<div
						key={idx}
						className="py-2 w-full relative group border-b border-green-600/50 h-16 flex items-center justify-between overflow-hidden px-6"
					>
						<div className="rounded-sm absolute left-0 top-1/2 w-full h-0 bg-green-600 transition-all duration-300 ease-in-out group-hover:h-full transform -translate-y-1/2 z-0" />

						{/* Row Content */}
						<div className="w-1/4 z-10 flex items-center gap-2">
							<SiBrave color="#FB542B" />

							{tool}
						</div>
						<div className="w-1/4 z-10">{type}</div>
						<div className="w-1/4 z-10">{usage}</div>
						<div className="w-1/4 z-10">{proficiency}</div>
					</div>
				))}
			</div>
		</div>
	);
}

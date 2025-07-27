import { useNavigate } from "react-router";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft04Icon } from "@hugeicons/core-free-icons";

export default function ComingSoon() {
	const navigate = useNavigate();

	return (
		<div className="w-screen h-dvh bg-black flex flex-col items-center justify-center">
			<p className="text-green-600 font-array text-[50px] md:text-[200px] text-center leading-none">
				Coming Soon...
			</p>
			<button
				onClick={() => navigate(-1)}
				className="flex items-center justify-between  gap-2 mt-10 px-6 py-2 text-green-600 text-xl font-semibold border border-green-600 rounded-full hover:bg-green-600/30 transition"
			>
				<HugeiconsIcon icon={ArrowLeft04Icon} />
				Back
			</button>
		</div>
	);
}

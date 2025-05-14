import HeroLeft from "./components/HeroLeft";
import Profile from "./components/Profile";
import DADanimation from "./components/DADanimation";

const App = () => {
	return (
		<div
			className="bg-primary w-full h-dvh overflow-y-scroll overflow-x-hidden"
			id="main"
		>
			<div className="w-full h-dvh flex">
				<HeroLeft />
				<Profile />
			</div>
			<DADanimation />
			<div className="w-screen h-screen bg-violet-900 mt-2"></div>
		</div>
	);
};

export default App;
{
	/* <div className="flex w-screen h-screen" ref={dad}>
				<div
					className="w-screen flex-shrink-0 snap-start bg-green-900 h-screen relative"
					ref={mainImageRef}
				>
					<div
						ref={imgWrapperRef}
						className="absolute left-1/2 top-15 transform -translate-x-1/2"
					>
						<img src={star} alt="star" className="w-20 h-20" />
					</div>
					<div className="text-[230px]  text-secondary font-black font-creato absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
						<span className="fromLeft inline-block opacity-0 translate-x-[-300px]">
							DES
						</span>
						<span className="i inline-block opacity-100 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
							I
						</span>
						<span className="fromRight inline-block opacity-0 translate-x-[600px]">
							GNER
						</span>
					</div>
				</div>
				<div
					id="second-section"
					className="w-screen flex-shrink-0 snap-start bg-red-900 h-screen"
				>
					<span className="text-9xl">AND</span>
				</div>
				<div
					id="second-section"
					className="w-screen flex-shrink-0 snap-start bg-yellow-900 h-screen"
				>
					<span className="text-9xl">DEVELOPER</span>
				</div>
			</div> */
}

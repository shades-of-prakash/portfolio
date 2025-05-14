import React from "react";
import profile from "../assets/profile.jpg";
const Profile = () => {
	return (
		<div className="relative w-[50%] h-auto">
			<div className="absolute w-full h-full bg-primary flex justify-between gap-2">
				{Array.from({ length: 32 }).map((_, i) => (
					<div
						key={i}
						className="w-[0.5px] h-full bg-gradient-to-b from-accent via-accent  to-black"
					/>
				))}
			</div>
			<div className="absolute w-80 h-80 inset-0 m-auto rounded-2xl overflow-hidden ">
				<div className="absolute  p-2 h-auto bg-yellow-300  bottom-0 m-3 rounded-2xl">
					full stack developer
				</div>
				<img src={profile} alt="" className="w-full h-full " />
			</div>
		</div>
	);
	/* Summertime Sadness */
};

export default Profile;

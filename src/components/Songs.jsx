import React from "react";
import Image from "../assets/image.png"; // Replace with your actual image path
import SoundSpectrum from "./SoundSpectrum";

export default function Songs() {
	const currentSong = {
		title: "Damn Right",
		artist: "Jennie",
		album: "Ruby",
		cover: Image,
	};

	const topSongs = [
		{
			title: "Blinding Lights",
			artist: "The Weeknd",
			album: "After Hours",
			url: "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b?si=20b1f6fb5f094021",
		},
		{
			title: "Starboy",
			artist: "The Weeknd",
			album: "Starboy",
			url: "https://open.spotify.com/track/7MXVkk9YMctZqd1Srtv4MB?si=e469bed2f4334a46",
		},
		{
			title: "I Feel it Coming",
			artist: "The Weeknd",
			album: "Starboy",
			url: "https://open.spotify.com/track/3dhjNA0jGA8vHBQ1VdD6vV?si=fb13990fbe4a43ab",
		},
		{
			title: "Like JENNIE",
			artist: "Jennie",
			album: "Ruby",
			url: "https://open.spotify.com/track/0fK7ie6XwGxQTIkpFoWkd1?si=ce8635f6028f4450",
		},
		{
			title: "With the IE (way up)",
			artist: "Jennie",
			album: "Ruby",
			url: "https://open.spotify.com/track/7rzzByujLJIBXpyOCnJhfx?si=02b3133e26e046c0",
		},
		{
			title: "Starboy",
			artist: "The Weeknd ft. Daft Punk",
			album: "Starboy",
			url: "https://www.youtube.com/watch?v=video6",
		},
		{
			title: "Wicked Games",
			artist: "The Weeknd",
			album: "Triology",
			url: "https://open.spotify.com/track/6VwBbL8CzPiC4QV66ay7oR?si=f42b9888169c4c75",
		},
		{
			title: "Earned It",
			artist: "The Weeknd",
			album: "Beauty behind the madness",
			url: "https://open.spotify.com/track/1cQ3LIkZE68pMSnPhZWXLu?si=16ef4673b23e4c34",
		},
		{
			title: "One of the Girls",
			artist: "The Weeknd,Jennie,Lily-Rose Depp",
			album: "The Idol",
			url: "https://open.spotify.com/track/7CyPwkp0oE8Ro9Dd5CUDjW?si=5cb1ed9110e3446c",
		},
		{
			title: "SOLO",
			artist: "JENNIE",
			album: "SOLO",
			url: "https://open.spotify.com/track/1R0hxCA5R7z5TiaXBZR7Mf?si=1eb1ec93bdb3470b",
		},
	];

	return (
		<div className="flex flex-col gap-6 md:p-6 p-2 w-full text-white">
			<h3 className="text-xl font-semibold text-green-600">
				Ten Tracks. One Vibe. All Me.
			</h3>

			<div className="flex md:flex-col flex-col-reverse lg:flex-row gap-6 w-full items-stretch">
				{/* Table Section */}
				<div className="lg:w-2/3 w-full h-auto">
					<div className="h-full overflow-x-auto rounded-xl border border-white/10">
						<table className="min-w-full text-sm table-auto text-left h-full">
							<thead className="bg-white/10 text-white/80">
								<tr>
									<th className="px-4 py-3">#</th>
									<th className="px-4 py-3">Title</th>
									<th className="px-4 py-3">Artist</th>
									<th className="px-4 py-3">Album</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-white/10">
								{topSongs.map((song, idx) => (
									<tr
										key={idx}
										onClick={() => window.open(song.url, "_blank")}
										className="hover:bg-white/5 transition-colors duration-200 cursor-pointer"
									>
										<td className="px-4 py-3 text-white/80">{idx + 1}</td>
										<td className="px-4 py-3 text-white underline">
											{song.title}
										</td>
										<td className="px-4 py-3 text-white/90">{song.artist}</td>
										<td className="px-4 py-3 text-white/60 italic">
											{song.album}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>

				<div className="lg:w-1/3 w-full h-full bg-green-600 text-white rounded-xl border border-green-700 shadow-lg md:p-6 p-3 flex flex-col justify-between">
					{/* Album Art */}
					<div className="w-full aspect-square overflow-hidden rounded-lg shadow-md">
						<img
							src={currentSong.cover}
							alt="album cover"
							className="w-full h-full object-cover"
						/>
					</div>

					{/* Song Info */}
					<div className="flex flex-col gap-1 text-black mt-4">
						<span className="text-xs uppercase tracking-[4px] font-bold text-green-100">
							Now Playing
						</span>

						{/* Title + Spectrum aligned horizontally */}
						<div className="flex items-center gap-3 justify-between ">
							<span className="text-2xl font-bold leading-tight">
								{currentSong.title}
							</span>
							<div className="h-6 flex items-end gap-[3px]">
								<SoundSpectrum />
							</div>
						</div>

						<span className="text-lg text-black/90">{currentSong.artist}</span>
						<span className="text-sm italic text-black/70">
							{currentSong.album}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

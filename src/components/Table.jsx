import React, { useState } from "react";
import HoverImage from "../assets/image.png"; // Replace with actual image

export default function Table() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mouseY, setMouseY] = useState(0);

  const topSongs = [
    { title: "Damn Right", artist: "Jennie & The Weeknd", album: "The Idol Episode 2", preview: HoverImage },
    { title: "SOLO", artist: "Jennie", album: "SOLO (Single)", preview: HoverImage },
    { title: "You & Me", artist: "Jennie", album: "Special Single", preview: HoverImage },
    { title: "Blinding Lights", artist: "The Weeknd", album: "After Hours", preview: HoverImage },
    { title: "Kill This Love", artist: "BLACKPINK", album: "Kill This Love", preview: HoverImage },
    { title: "Starboy", artist: "The Weeknd ft. Daft Punk", album: "Starboy", preview: HoverImage },
    { title: "One of the Girls", artist: "Jennie, The Weeknd, Lily-Rose Depp", album: "The Idol Vol. 1", preview: HoverImage },
    { title: "Save Your Tears", artist: "The Weeknd", album: "After Hours", preview: HoverImage },
    { title: "Pink Venom", artist: "BLACKPINK", album: "Born Pink", preview: HoverImage },
    { title: "Take My Breath", artist: "The Weeknd", album: "Dawn FM", preview: HoverImage },
  ];

  return (
    <div className="relative">
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
                  className="hover:bg-white/5 transition-colors duration-200 cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onMouseMove={(e) => setMouseY(e.clientY)}
                >
                  <td className="px-4 py-3 text-white/80">{idx + 1}</td>
                  <td className="px-4 py-3 text-white">{song.title}</td>
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

      {/* Floating Preview */}
      {hoveredIndex !== null && (
        <div
          className="fixed left-[60%] w-[200px] aspect-square z-50 rounded-md overflow-hidden border border-white shadow-lg transition-all duration-300 pointer-events-none"
          style={{
            top: `${mouseY - 100}px`, // vertical center-ish
          }}
        >
          <img
            src={topSongs[hoveredIndex].preview}
            alt="preview"
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
}

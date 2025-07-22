import React from "react";

export default function SoundSpectrum() {
  const bars = Array.from({ length: 10 }).map((_, i) => {
    const min = Math.floor(Math.random() * 20 + 10); // 10% to 30%
    const max = Math.floor(Math.random() * 50 + 50); // 50% to 100%
    const duration = (Math.random() * 1 + 0.5).toFixed(2); // 0.5s to 1.5s
    const delay = (Math.random() * 0.5).toFixed(2); // 0s to 0.5s

    const animName = `barAnim-${i}`;

    return {
      id: i,
      min,
      max,
      duration,
      delay,
      animName,
      keyframe: `
        @keyframes ${animName} {
          0%, 100% { height: ${min}% }
          50% { height: ${max}% }
        }
      `,
    };
  });

  return (
    <>
      {/* Inject dynamic keyframes */}
      <style>
        {bars.map((bar) => bar.keyframe).join("\n")}
      </style>

      <div className="rounded-md flex items-end gap-[3px] h-10 justify-center mt-4">
        {bars.map((bar) => (
          <div
            key={bar.id}
            className="w-1 bg-black rounded-sm"
            style={{
              animation: `${bar.animName} ${bar.duration}s ease-in-out ${bar.delay}s infinite`,
            }}
          />
        ))}
      </div>
    </>
  );
}

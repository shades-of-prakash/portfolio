// src/components/DinoGameIframe.jsx
import React from "react";

const DinoGameIframe = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh", // or any fixed height you want
        zIndex: 999,
      }}
    >
      <iframe
        src="https://chromedino.com/"
        frameBorder="0"
        scrolling="no"
        loading="lazy"
        title="Chrome Dino Game"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          border: "none",
        }}
      />
    </div>
  );
};

export default DinoGameIframe;

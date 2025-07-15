import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);

const ImageSlicer = ({ imageUrl, numberOfSlices }) => {
  const containerRef = useRef(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const sliceRefs = useRef([]);
  const [isHovered, setIsHovered] = useState(false);


  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setContainerSize({ width, height });
      }
    };

    updateSize(); // Set initially

    const resizeObserver = new ResizeObserver(updateSize);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  useGSAP(() => {
    const stripes = containerRef.current.querySelectorAll(".stripe");

    stripes.forEach((stripe) => {
      stripe.addEventListener("mouseenter", () => {
        gsap.to(stripe, {
          scale: 1.1,
          y: -10,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      stripe.addEventListener("mouseleave", () => {
        gsap.to(stripe, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    // Cleanup
    return () => {
      stripes.forEach((stripe) => {
        stripe.removeEventListener("mouseenter", () => {});
        stripe.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  const sliceWidth = containerSize.width / numberOfSlices;

  const slices = Array.from({ length: numberOfSlices }, (_, index) => {
    const backgroundPositionX = -(index * sliceWidth);
    return (
      <div
        key={index}
        className="h-full bg-no-repeat flex-grow stripe"
        ref={(el) => (sliceRefs.current[index] = el)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: `${containerSize.width}px ${containerSize.height}px`,
          backgroundPosition: `${backgroundPositionX}px 0`,
        }}
      ></div>
    );
  });

  return (
    <div
      ref={containerRef}
      className="flex w-full h-full overflow-hidden"
    >
      {slices}
    </div>
  );
};

export default ImageSlicer;

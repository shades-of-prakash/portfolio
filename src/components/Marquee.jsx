import React, { useRef, useEffect } from 'react';
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";

export default function Marquee() {
  const items = [
    'Dynamic', 'Scalable', 'Responsive', 'Encrypted',
    'Optimized', 'Accessible', 'Interactive',
    'User-Centric', 'Maintainable'
  ];

  const containerRef = useRef(null);
  const marqueeRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const marquee = marqueeRef.current;
    if (!container || !marquee) return;

    const firstSet = marquee.querySelector('.item-set');
    const setWidth = firstSet.scrollWidth;
    
    let translateX = 0;
    let isPaused = false;
    const speed = 1;

    const animate = () => {
      if (!isPaused) {
        translateX -= speed;
        if (Math.abs(translateX) >= setWidth) {
          translateX = 0;
        }
        
        marquee.style.transform = `translateX(${translateX}px)`;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    const pause = () => { isPaused = true; };
    const play = () => { isPaused = false; };

    container.addEventListener('mouseenter', pause);
    container.addEventListener('mouseleave', play);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      container.removeEventListener('mouseenter', pause);
      container.removeEventListener('mouseleave', play);
    };
  }, []);

  const renderItems = () => (
    <div className="item-set flex">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-center justify-evenly shrink-0">
          <span className="text-xl font-medium text-black select-none">
            {item}
          </span>
          <span className="px-3 flex items-center text-black/50 ">
            <HugeiconsIcon icon={ArrowRight02Icon} size={20} />
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden bg-accent-light py-4 cursor-pointer mb-12"
    >
      <div
        ref={marqueeRef}
        className="flex whitespace-nowrap will-change-transform"
        style={{ transform: 'translateX(0px)' }}
      >
        {renderItems()}
        {renderItems()}
        {renderItems()} 
      </div>
    </div>
  );
}
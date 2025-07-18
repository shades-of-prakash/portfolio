import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight02Icon } from '@hugeicons/core-free-icons';

export default function Marquee() {
  const items = [
    'Dynamic', 'Scalable', 'Responsive', 'Encrypted',
    'Optimized', 'Accessible', 'Interactive',
    'User-Centric', 'Maintainable'
  ];

  const containerRef = useRef(null);
  const marqueeRef = useRef(null);

  useGSAP(() => {
    const marquee = marqueeRef.current;
    const container = containerRef.current;
    if (!marquee || !container) return;

    // Using scrollWidth instead of offsetWidth
    const firstSet = marquee.querySelector('.item-set');
    const setWidth = firstSet.scrollWidth;

    const tl = gsap.timeline({ repeat: -1 });
    tl.to(marquee, { x: -setWidth, duration: 10, ease: 'none' });

    const handleMouseEnter = () => tl.pause();
    const handleMouseLeave = () => tl.play();

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      tl.kill();
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, { scope: containerRef });

  const renderItemSet = () => (
    <div className="item-set flex space-x-6">
      {items.map((item, index) => (
        <div key={index} className="flex items-center shrink-0">
          <span className="text-xl font-medium text-gray-800">{item}</span>
          <div className="flex px-3 justify-center items-center">
            <HugeiconsIcon icon={ArrowRight02Icon} />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden bg-gray-100 cursor-pointer py-4"
    >
      <div
        ref={marqueeRef}
        className="flex whitespace-nowrap will-change-transform"
      >
        {renderItemSet()}
        {renderItemSet()}
      </div>
    </div>
  );
}

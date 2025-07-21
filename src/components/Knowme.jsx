import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import { Layers01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from '@hugeicons/react';
import shades from "../assets/shades.jpg";
import { SiNextdotjs, SiReact, SiNodedotjs, SiSpringboot, SiGo } from '@icons-pack/react-simple-icons';

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Knowme() {
  const sectionRef = useRef();
  const paraRef = useRef();
  const nameRef = useRef();

  useGSAP(() => {
    const nameChars = new SplitText(nameRef.current, { type: 'chars' });
    const splitWords = new SplitText(paraRef.current, { type: 'words' });
    const splitChars = new SplitText(splitWords.words, { type: 'chars' });

    gsap.set(splitChars.chars, { opacity: 0.1 });

    const imageEl = paraRef.current.querySelector('svg');
    const imageWrapper = paraRef.current.querySelector('.image-wrapper');

    gsap.set(imageEl, { opacity: 0.5, filter: 'grayscale(100%)' });
    gsap.set(nameChars.chars, { opacity: 0 });

    gsap.to(nameChars.chars, {
      opacity: 1,
      stagger: 0.01,
      duration: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 45%",
        scrub: true,
        markers: false,
      }
    });

    gsap.to(splitChars.chars, {
      opacity: 1,
      y: 0,
      stagger: 0.07,
      duration: 1.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: paraRef.current,
        start: 'top 30%',
        scrub: true,
        markers: false,
      },
    });

    gsap.to([imageEl, imageWrapper], {
      filter: 'grayscale(0%)',
      scrollTrigger: {
        trigger: paraRef.current,
        start: 'top 30%',
        toggleActions: 'play none none reverse',
      }
    });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: '+=100%',
      pin: true,
    });

    return () => {
      splitChars.revert();
      nameChars.revert();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-screen h-dvh  flex justify-center items-center flex-col overflow-hidden"
    >
      {/* Background image */}
      {/* <img
        src={shades}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
      /> */}
      
<div className="absolute inset-0 w-full h-full object-cover z-0 opacity-60">
  <div className="absolute top-6 bottom-6 left-6 right-6 border border-green-600 p-10 z-0 opacity-60">
  </div>
</div>



{/* <div className="absolute inset-0 w-full h-full z-0 opacity-60 pointer-events-none">
  Outer border frame
  <div className="absolute top-6 bottom-6 left-6 right-6 p-6 border border-green-600/40 rounded-lg">
    
 
    
  </div>
</div> */}



      {/* Content layer */}
      <div className="z-10 flex flex-col p-16 ">
        <span className="font-creato tracking-[10px] text-white leading-10 uppercase text-sm">
          Know About Me
        </span>

        <h1 className="text-[50px] leading-12 flex flex-col  justify-center text-accent-light mb-6">
          <span className="font-bold overflow-hidden mb-3" ref={nameRef}>
            SAI PRAKASH VARMA
          </span>
          <span className="opacity-60 text-[30px] overflow-hidden">KOKKILAGADDA</span>
        </h1>

        <div
          ref={paraRef}
          className="mt-4 max-w-[48ch] text-gray-400  font-creato font-semibold md:text-5xl text-xl inline-block leading-relaxed"
        >
          A full-stack
          <span className="mx-2 inline-flex align-middle items-center justify-center rounded-full p-2 bg-neutral-800 shadow-lg image-wrapper">
            <HugeiconsIcon icon={Layers01Icon} color="limegreen" size={28} />
          </span>
           developer who builds smooth, modern web experiences. I create fast frontends with React
          <span className="mx-2 inline-flex align-middle items-center justify-center rounded-full p-2 shadow-lg image-wrapper">
            <SiReact size={32} color="#61DAFB" className="react-icon" />
          </span>
          and Next.js
          <span className="mx-2 inline-flex align-middle items-center justify-center rounded-full p-2 shadow-lg image-wrapper">
            <SiNextdotjs size={32} />
          </span>
          and reliable backends using
          <LangBubble lang="Nodejs" icon={<SiNodedotjs />} color="#5FA04E" />
          <LangBubble lang="Spring-boot" icon={<SiSpringboot />} color="#6DB33F" />
          and 
          <LangBubble lang="Go" icon={<SiGo />} color="#00ADD8" />.
          {/* <br /> */}
          I enjoy turning ideas into clean, efficient, real-world solutions.
          I’m always learning and always building.
        </div>
      </div>
    </div>
  );
}

function LangBubble({ lang, color, icon }) {
  return (
    <div
      className="
        bg-neutral-950 inline-flex mx-2 border border-white/20 text-white/80
        items-center justify-center rounded-full gap-2 text-sm shadow
        transition-all duration-300 ease-in-out
        px-4 py-2 text-base md:text-lg lg:text-xl
        group-hover:scale-95 hover:scale-105 hover:px-6
      "
    >
      <div className="text-2xl md:text-3xl" style={{ color }}>
        {icon}
      </div>
      <span className="font-medium text-gray-500">{lang}</span>
    </div>
  );
}

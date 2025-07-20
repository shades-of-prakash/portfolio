import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import { Layers01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from '@hugeicons/react';
import { SiNextdotjs, SiReact,SiNodedotjs,SiSpringboot,SiGo } from '@icons-pack/react-simple-icons';
gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Knowme() {
  const sectionRef = useRef();
  const paraRef = useRef();

  useGSAP(() => {
    const splitWords = new SplitText(paraRef.current, { type: 'words' });
    const splitChars = new SplitText(splitWords.words, { type: 'chars' });

    gsap.set(splitChars.chars, { opacity: 0.5 });
    const imageEl = paraRef.current.querySelector('svg');
    const imageWrapper = paraRef.current.querySelector('.image-wrapper');

    gsap.set(imageEl, { opacity: 0.5 });
    gsap.set(imageEl, { filter: 'grayscale(100%)' });

    gsap.to(splitChars.chars, {
      opacity: 1,
      y: 0,
      stagger: 0.01,
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

    return () => splitChars.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-screen h-dvh text-white flex justify-center items-center flex-col bg-black"
    >
      <span className="font-creato tracking-[10px] text-white leading-10 uppercase text-sm">Know About Me</span>

      <h1 className="text-[50px] leading-12 flex flex-col items-center justify-center text-accent-light mb-6">
        <span className="font-bold">SAI PRAKASH VARMA</span>
        <span className="opacity-60 text-[30px]">KOKKILAGADDA</span>
      </h1>

      <div
        ref={paraRef}
        className="mt-4 max-w-[56ch] text-center text-neutral-300 text-3xl inline-block leading-relaxed"
      >
        A Full-stack 
        <span className="mx-2 inline-flex align-middle items-center justify-center rounded-full p-2 bg-neutral-800 shadow-lg image-wrapper">
          <HugeiconsIcon icon={Layers01Icon} color="limegreen" size={28} />
        </span>
        developer who builds smooth, modern web experiences. I create fast frontends with React 
        <span className="mx-2 inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-[14px] shadow-md">
          <SiReact className="text-white" size={24} />
        </span>
        and Next.js 
        <span className="mx-2 inline-flex items-center justify-center w-12 h-12 bg-neutral-900 border border-neutral-700 rounded-full shadow-md">
          <SiNextdotjs className="text-white" size={20} />
        </span>
        and reliable backends using
        <LangBubble lang="Nodejs" icon={<SiNodedotjs/>} color="#5FA04E"/>
         <LangBubble lang="Spring-boot" icon={<SiSpringboot/>} color="#6DB33F"/>
        and  <LangBubble lang="Go" icon={<SiGo/>} color="#00ADD8"/>
        I enjoy turning ideas into clean, efficient, real-world solutions.
        I’m always <span className="underline decoration-wavy decoration-indigo-500">learning</span> and always <span className="underline decoration-wavy decoration-green-500">building</span>.
      </div>
    </div>
  );
}

function LangBubble({lang,color,icon}){
return<div
						className={`

							bg-neutral-950 inline-flex mx-1 border border-white/20 text-white/80
							flex items-center rounded-full gap-2 text-sm shadow
							transition-all duration-300 ease-in-out
							px-4 py-2 text-base md:text-lg lg:text-xl
							group-hover:scale-95 hover:scale-105 hover:px-6
						`}
					>
						<div className={`text-2xl md:text-3xl text-[${color}]`}>
             {icon}
            </div>
						<span className="font-medium">{lang}</span>
					</div>

}
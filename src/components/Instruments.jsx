import { useState, useRef, useEffect } from "react";
import Songs from "./Songs";
import Tools from "./Tools";
import Hobby from "./Hobby";

export default function Instruments() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [indicatorStyle, setIndicatorStyle] = useState({});
    const containerRef = useRef(null);
    const itemRefs = useRef([]);

    const items = ["Tools", "Songs", "Hobbies"];
    const components = [Tools, Songs, Hobby];

    useEffect(() => {
        if (itemRefs.current[activeIndex]) {
            const el = itemRefs.current[activeIndex];
            setIndicatorStyle({
                width: el.offsetWidth + "px",
                left: el.offsetLeft + "px"
            });
        }
    }, [activeIndex]);

    function handleIndex(index) {
        setActiveIndex(index);
    }

    const ActiveComponent = components[activeIndex];

    return (
        <div className="flex flex-col gap-3 w-screen h-auto p-6">
            <div className="w-full h-16 flex items-center justify-center">
                <div
                    ref={containerRef}
                    className="relative w-120 border border-green-600 rounded-full bg-black p-2 flex items-center text-white"
                >
                    <div
                        className="absolute top-2 bottom-2 bg-green-600 rounded-full transition-all duration-300 ease-in-out z-0"
                        style={indicatorStyle}
                    />

                    <ul className="flex flex-1 z-10 w-full">
                        {items.map((item, index) => (
                            <li
                                key={index}
                                ref={(el) => (itemRefs.current[index] = el)}
                                className={`${activeIndex===index?"text-black ":"text-white hover:text-green-600"} flex flex-1 items-center justify-center rounded-full px-4 py-2 cursor-pointer relative hover:bg-green-600/20 `}
                                onClick={() => handleIndex(index)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <ActiveComponent />
        </div>
    );
}

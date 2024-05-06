import { v4 } from "uuid";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitTextProp } from "./splitText-interface";
import useHover from "../../hook/useHover";

gsap.registerPlugin(useGSAP);

const SplitText: React.FC<SplitTextProp> = ({
    id, className,hoverStatus,  
    text = "", reverse = 1, stagger = 0.01, duration = 0.3
}) => {
    const lineArr = text.split("\n");
    const wordArr = lineArr.map((line) => line.split(" "));
    const charArr = wordArr.map((word) => word.map((w) => w.split("")));

    const textRef = useRef<HTMLDivElement>(null);
    const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();

    const charAnimation = gsap.timeline({ paused: true });
    useGSAP(() => {
        if (textRef.current) {
            charAnimation.to(textRef.current.getElementsByClassName("char"), {
                duration: duration, stagger: stagger, yPercent: -100, ease: "power1.inOut"
            });

            if (isHovered) {
                charAnimation.play();
            } else {
                charAnimation.reverse(reverse);
            }
        }
    }, { dependencies: [isHovered,hoverStatus], scope: textRef });

    return <div ref={textRef} id={id} className={`inline-block relative w-fit overflow-hidden ${className ? className : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
    >
        {
            charArr.map((line) => {
                return <div key={v4()} className="line">
                    {
                        line.map((word, wordI, wordArray) => {
                            return <>
                                <span key={v4()} className="word overflow-hidden">
                                    {
                                        word.map((char) => {
                                            return <span key={v4()} className="char relative inline-block">
                                                {char}
                                                <span className="absolute left-0 top-full select-none">{char}</span>
                                            </span>;
                                        })
                                    }
                                </span>
                                {wordArray.length - 1 != wordI && <span className="select-none">{" "}</span>}
                            </>;
                        })
                    }
                </div>;
            })
        }
    </div>;
};

export default SplitText;
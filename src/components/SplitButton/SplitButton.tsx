import React from "react";
import { SplitText } from "../SplitText";
import useHover from "../../hook/useHover";

type SplitButtonProp = {
    children: string;
    id?: string;
    className?: string | undefined;
    reverse?: 1 | 0;
    stagger?: gsap.NumberValue | gsap.StaggerVars | undefined;
    duration?: gsap.TweenValue
}

const SplitButton: React.FC<SplitButtonProp> = ({
    id, className,
    children = "", reverse = 1, stagger = 0.01, duration = 0.3
}) => {
    const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();

    return <button id={id} className={`${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
    >
        <SplitText text={children} reverse={reverse} stagger={stagger} duration={duration} hoverStatus={isHovered} />
    </button>;
};

export default SplitButton;
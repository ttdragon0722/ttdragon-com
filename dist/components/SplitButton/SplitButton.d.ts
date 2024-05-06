import React from "react";
type SplitButtonProp = {
    children: string;
    id?: string;
    className?: string | undefined;
    reverse?: 1 | 0;
    stagger?: gsap.NumberValue | gsap.StaggerVars | undefined;
    duration?: gsap.TweenValue;
};
declare const SplitButton: React.FC<SplitButtonProp>;
export default SplitButton;

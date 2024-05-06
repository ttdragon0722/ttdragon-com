import gsap from "gsap";
export type SplitTextProp = {
    text: string;
    id?: string;
    className?: string | undefined;
    reverse?: 1 | 0;
    stagger?: gsap.NumberValue | gsap.StaggerVars | undefined;
    duration?: gsap.TweenValue,
    hoverStatus?: boolean
}
"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
/**
 * ### RWD
 * listen to window size
 * @returns window width
 * @example
 * const device = useRWD();
 */
const useRWD = () => {
    const [view, setView] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
        const handleResize = () => {
            setView(window.innerWidth);
        };
        setView(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return view;
};
exports.default = useRWD;

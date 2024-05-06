"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
/**
 * listen to component hover event
 *
 * @returns
 * isHovered : hover status
 *
 * handleMouseEnter : change hover status to true
 *
 * handleMouseLeave : change hover status to false
 */
const useHover = () => {
    const [isHovered, setIsHovered] = (0, react_1.useState)(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return {
        isHovered,
        handleMouseEnter,
        handleMouseLeave,
    };
};
exports.default = useHover;

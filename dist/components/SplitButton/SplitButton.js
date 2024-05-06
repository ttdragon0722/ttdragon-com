"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SplitText_1 = require("../SplitText");
const useHover_1 = __importDefault(require("../../hook/useHover"));
const SplitButton = ({ id, className, children = "", reverse = 1, stagger = 0.01, duration = 0.3 }) => {
    const { isHovered, handleMouseEnter, handleMouseLeave } = (0, useHover_1.default)();
    return react_1.default.createElement("button", { id: id, className: `${className}`, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
        react_1.default.createElement(SplitText_1.SplitText, { text: children, reverse: reverse, stagger: stagger, duration: duration, hoverStatus: isHovered }));
};
exports.default = SplitButton;

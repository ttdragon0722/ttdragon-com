"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const react_1 = __importStar(require("react"));
const gsap_1 = __importDefault(require("gsap"));
const react_2 = require("@gsap/react");
const useHover_1 = __importDefault(require("../../hook/useHover"));
gsap_1.default.registerPlugin(react_2.useGSAP);
const SplitText = ({ id, className, hoverStatus, text = "", reverse = 1, stagger = 0.01, duration = 0.3 }) => {
    const lineArr = text.split("\n");
    const wordArr = lineArr.map((line) => line.split(" "));
    const charArr = wordArr.map((word) => word.map((w) => w.split("")));
    const textRef = (0, react_1.useRef)(null);
    const { isHovered, handleMouseEnter, handleMouseLeave } = (0, useHover_1.default)();
    const charAnimation = gsap_1.default.timeline({ paused: true });
    (0, react_2.useGSAP)(() => {
        if (textRef.current) {
            charAnimation.to(textRef.current.getElementsByClassName("char"), {
                duration: duration, stagger: stagger, yPercent: -100, ease: "power1.inOut"
            });
            if (isHovered) {
                charAnimation.play();
            }
            else {
                charAnimation.reverse(reverse);
            }
        }
    }, { dependencies: [isHovered, hoverStatus], scope: textRef });
    return react_1.default.createElement("div", { ref: textRef, id: id, className: `inline-block relative w-fit overflow-hidden ${className ? className : ""}`, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave }, charArr.map((line) => {
        return react_1.default.createElement("div", { key: (0, uuid_1.v4)(), className: "line" }, line.map((word, wordI, wordArray) => {
            return react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("span", { key: (0, uuid_1.v4)(), className: "word overflow-hidden" }, word.map((char) => {
                    return react_1.default.createElement("span", { key: (0, uuid_1.v4)(), className: "char relative inline-block" },
                        char,
                        react_1.default.createElement("span", { className: "absolute left-0 top-full select-none" }, char));
                })),
                wordArray.length - 1 != wordI && react_1.default.createElement("span", { className: "select-none" }, " "));
        }));
    }));
};
exports.default = SplitText;

import { useState } from "react";

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
	const [isHovered, setIsHovered] = useState(false);

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

export default useHover;

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
declare const useHover: () => {
    isHovered: boolean;
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
};
export default useHover;

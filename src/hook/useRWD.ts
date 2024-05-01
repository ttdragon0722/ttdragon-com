"use client"
import { useEffect, useState } from "react";

/**
 * ### RWD
 * listen to window size 
 * @returns window width
 * @example
 * const device = useRWD();
 */
const useRWD = () => {
    const [view,setView] = useState<number>(0);
    useEffect(() => {
        const handleResize = () => {
            setView(window.innerWidth);
        };
        setView(window.innerWidth);

        window.addEventListener("resize",handleResize);
        return () => {
            window.removeEventListener("resize",handleResize);
        }
    },[]);
    return view;
}

export default useRWD;
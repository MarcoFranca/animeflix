import {useRef} from "react";


export default function useDebounce(fnc, delay) {
    const timeoutRef = useRef(null);
    
    function debounceFn(...args) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(()=>{
        fnc(...args)
        }, delay)
    }
    return debounceFn;
}
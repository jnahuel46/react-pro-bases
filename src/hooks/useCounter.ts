import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';


export const useCounter = ({ maxCounter= 10 }) => {

    const [counter, setCounter] = useState(5);
    const elementToAnimate = useRef<any>(null);
    const tl = useRef(gsap.timeline());

    const handleClick = () => {
        setCounter(prev => Math.min(prev + 1, maxCounter))//SIEMPRE VA A RETORNAR EL VALOR MINIMO
    }

    const handleReset = () => {
        setCounter(0)
    }

    useLayoutEffect(() => {
        if (!elementToAnimate.current) return;

        tl.current.to( elementToAnimate.current, {y: -50, duration: 0.5, ease: 'ease.out' } )
        tl.current.to( elementToAnimate.current, {y: 0, duration: 0.5, ease: 'ease.in' } )
        tl.current.pause()
    }, [])

    useEffect(() => {
        tl.current.play(0)
    }, [counter])
    
    return {
        counter,
        elementToAnimate,
        handleClick,
        handleReset
    }
}
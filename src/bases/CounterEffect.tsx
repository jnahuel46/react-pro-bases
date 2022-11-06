import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const MAXIMUM_VALUE = 10;

export const CounterEffect = () => {

    const [counter, setCounter] = useState(5)
    const counterElement = useRef<HTMLHeadingElement>(null)

    const handleClick = () => {
        setCounter(prev => Math.min(prev + 1, MAXIMUM_VALUE))//SIEMPRE VA A RETORNAR EL VALOR MINIMO
    }

    const handleReset = () => {
        setCounter(0)
    }

    useEffect(() => {
        if (counter < 10) return;
        const tl = gsap.timeline();

        tl.to( counterElement.current, {y: -50, duration: 0.5, ease: 'ease.out' } )
        tl.to( counterElement.current, {y: 0, duration: 0.5, ease: 'ease.in' } )
        
    }, [counter])

    return (
        <>
            <h1> CounterEffect {counter} </h1>
            <h2 ref={ counterElement }> {counter} </h2>
            <button onClick={handleClick}>
                +1
            </button>
            <button onClick={handleReset}>
                Reset
            </button>
        </>
    )
}

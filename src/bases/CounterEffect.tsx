import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const MAXIMUM_VALUE = 10;

export const CounterEffect = () => {

    const [counter, setCounter] = useState(5)

    const handleClick = () => {
        setCounter(prev => Math.min(prev + 1, MAXIMUM_VALUE))//SIEMPRE VA A RETORNAR EL VALOR MINIMO
    }

    const handleReset = () => {
        setCounter(0)
    }

    useEffect(() => {
        if (counter < 10) return;
        gsap.to(".jump-counter", {y: -50, duration: 0.5, ease: 'ease.out' }).then(() => { //funciona como una promes
            gsap.to(".jump-counter", {y: 0, duration: 0.5, ease: 'ease.in' })
        })
    }, [counter])

    return (
        <>
            <h1> CounterEffect {counter} </h1>
            <h2 className='jump-counter'> {counter} </h2>
            <button onClick={handleClick}>
                +1
            </button>
            <button onClick={handleReset}>
                Reset
            </button>
        </>
    )
}

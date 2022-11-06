import { useCounter } from '../hooks/useCounter';

export const CounterHook = () => {

    const { counter, elementToAnimate, handleClick, handleReset } = useCounter({
        maxCounter: 10
    })

    return (
        <>
            <h1> CounterHook {counter} </h1>
            <h2 ref={ elementToAnimate }> {counter} </h2>
            <button onClick={handleClick}>
                +1
            </button>
            <button onClick={handleReset}>
                Reset
            </button>
        </>
    )
}

import { useReducer } from 'react';

interface CounterState {
    counter: number,
    previous: number,
    changes: number
}

type CounterAction =
    | { type: 'increaseBy', payload: { value: number } }
    | { type: 'decreaseBy', payload: { value: number } }
    | { type: 'reset' }

const initialState: CounterState = {
    counter: 10,
    previous: 10,
    changes: 10
}

const counterReducer = (state: CounterState, action: CounterAction): CounterState => {

    const { counter, previous, changes} = state;

    switch (action.type) {
        case 'increaseBy':
            return {
                counter: counter + action.payload.value ,
                previous: counter,
                changes: changes + 1
            }
        case 'decreaseBy':

             return {
                counter: 0,
                previous: 0,
                changes: 0 
            }
        case 'reset':
            return {
                counter: 0,
                previous: 0,
                changes: 0 
            }
        default:
            return state;
    }

}

export const CounterReducerComponent = () => {

    const [{counter, changes, previous}, dispatch] = useReducer(counterReducer, initialState)

    const handleAdd = ( value:number ) => {
        dispatch({ type: 'increaseBy', payload: { value: value }})//SIEMPRE VA A RETORNAR EL VALOR MINIMO
    }

    const handleRest = () => {
        dispatch({ type: 'increaseBy', payload: { value: 1 }})//SIEMPRE VA A RETORNAR EL VALOR MINIMO
    }

    const handleReset = () => {
        dispatch({ type: 'reset' })
    }

    return (
        <>
            <h1> Counter {counter} </h1>
            <h1> Previous {previous} </h1>
            <h1> Changes {changes} </h1>

            <button onClick={() => handleAdd(1)}>
                +1
            </button>
            <button onClick={() => handleAdd(5)}>
                +5
            </button>
            <button onClick={() => handleAdd(10)}>
                +10
            </button>
            <button onClick={handleRest}>
                -1
            </button>
            <button onClick={handleReset}>
                Reset
            </button>
        </>
    )
}

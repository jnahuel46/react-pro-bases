import { useReducer } from 'react';
import { counterReducer, initialState } from './state/counterReducer';
import { doReset, doIncrease, doDecrease } from './actions/actions';


export const CounterReducerComponent = () => {

    const [{counter, changes, previous}, dispatch] = useReducer(counterReducer, initialState)

    const handleAdd = ( value:number ) => {
        dispatch(doIncrease(value))
    }

    const handleRest = (value:number) => {
        dispatch(doDecrease(value))
    }

    const handleReset = () => {
        dispatch( doReset())
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
            <button onClick={() => handleRest(1)}>
                -1
            </button>
            <button onClick={handleReset}>
                Reset
            </button>
        </>
    )
}

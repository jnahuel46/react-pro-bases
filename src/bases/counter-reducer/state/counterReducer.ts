import { CounterAction } from "../actions/actions";
import { CounterState } from "../interfaces/interfaces";

export const initialState: CounterState = {
    counter: 10,
    previous: 10,
    changes: 10
}

export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {

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
                counter: counter - action.payload.value,
                previous: counter,
                changes: changes + 1
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
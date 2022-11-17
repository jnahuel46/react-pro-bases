export type CounterAction =
| { type: 'increaseBy', payload: { value: number } }
| { type: 'decreaseBy', payload: { value: number } }
| { type: 'reset' }

export const doReset = ():CounterAction => {
    return {
        type: 'reset'
    }
}

export const doIncrease = (number: number):CounterAction => {
    return {
        type: 'increaseBy',
        payload: { value: number }
    }
}

export const doDecrease = (number: number):CounterAction => {
    return {
        type: 'decreaseBy',
        payload: { value: number }
    }
}
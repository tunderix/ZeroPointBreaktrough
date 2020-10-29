import { INCREMENT_COUNT, DECREMENT_COUNT } from './types';

export const incrementCount = (counter: number): Object => {
    return {
        type: INCREMENT_COUNT,
        payload: counter
    };
};

export const decrementCount = (counter: number): Object => {
    return {
        type: DECREMENT_COUNT,
        payload: counter
    };
};

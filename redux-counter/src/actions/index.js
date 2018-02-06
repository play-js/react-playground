/**
 * Currently don't use 
 */
import { INCREMENT, DECREMENT } from '../constants';

export function increment(count) {
    return { type: INCREMENT, count }
}

export function decrement(count) {
    return { type: DECREMENT, count }
}
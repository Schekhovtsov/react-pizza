import {SET_PIZZAS} from '../const';

export const setPizzas = (items) => ({
    type: SET_PIZZAS,
    payload: items
})
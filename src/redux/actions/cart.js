import {ADD_PIZZA_CART, CLEAR_CART, REMOVE_CART_ITEM} from '../const';

export const addPizzaToCart = (pizzaObj) => ({
    type: ADD_PIZZA_CART,
    payload: pizzaObj
})

export const setCartClear = () => ({
    type: CLEAR_CART,
})

export const removeCartItem = (id) => ({
    type: REMOVE_CART_ITEM,
    payload: id,
})
import {ADD_PIZZA_CART, SET_TOTAL_COUNT, SET_TOTAL_PRICE} from '../const';

const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
}

const cart = (state = initialState, action) => {

    switch (action.type) {

        case ADD_PIZZA_CART:

            const newItems = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id]
                    ? [action.payload]
                    : [...state.items[action.payload.id], action.payload],
            }

            const pizzasArray = [].concat.apply([], Object.values(newItems))
            const totalPrice = pizzasArray.reduce((sum, obj) => obj.price + sum, 0)

            return {
                ...state,
                items: newItems,
                totalCount: pizzasArray.length,
                totalPrice: totalPrice,
            };

        default: return state

    }

}

export default cart;
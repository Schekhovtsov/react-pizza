import {ADD_PIZZA_CART, CLEAR_CART, REMOVE_CART_ITEM, SET_TOTAL_COUNT, SET_TOTAL_PRICE} from '../const';

const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
}

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0);

const cart = (state = initialState, action) => {

    switch (action.type) {

        case ADD_PIZZA_CART:

            const currentPizzaItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload];

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems),
                },
            }

            //const pizzasArray = [].concat.apply([], Object.values(newItems))
            const items = Object.values(newItems).map((obj) => obj.items);
            const pizzasArray = [].concat.apply([], items)
            //const pizzasArray = Object.values(items).flat(Infinity);
            const totalPrice = getTotalPrice(pizzasArray)

            return {
                ...state,
                items: newItems,
                totalCount: pizzasArray.length,
                totalPrice: totalPrice,
            };

        case CLEAR_CART:
            return {
                ...state,
                totalPrice: 0,
                totalCount: 0,
                items: {},
            }

        case REMOVE_CART_ITEM:


            const deletingItems = { ...state.items };
            const currentTotalPrice = deletingItems[action.payload].totalPrice;
            const currentTotalCount = deletingItems[action.payload].items.length;
            delete deletingItems[action.payload]

            return {
                ...state,
                items: deletingItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount,
            }

        default: return state

    }

}

export default cart;
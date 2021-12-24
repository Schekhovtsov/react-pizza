import {SET_PIZZAS, SET_SORT_BY} from '../const';

const initialState = {
    items: [],
    isLoaded: false,
}

const pizzas = (state = initialState, action) => {

    switch (action.type) {

        case SET_PIZZAS:
            return {
                ...state,
                items: action.payload,
                isLoaded: true,
            }

        default: return state

    }

}

export default pizzas;
import {SET_CATEGORY, SET_SORT_BY, SET_SORT_ORDER, SET_SORT_TYPE_BY, SET_SORT_TYPE_ORDER} from '../const';

const initialState = {
    category: null,
    sortBy: {
        type: 'price',
        order: 'desc'
    },
}

const filters = (state = initialState, action) => {

    switch (action.type) {

        case SET_SORT_BY:
            return {
                ...state,
                sortBy: action.payload,
            }

        case SET_SORT_ORDER:
            return {
                ...state,
                sortBy: {
                    ...state.sortBy,
                    order: action.payload
                }
            }

        case SET_CATEGORY:
            return {
                ...state,
                category: action.payload,
            }

        default: return state

    }

}

export default filters;